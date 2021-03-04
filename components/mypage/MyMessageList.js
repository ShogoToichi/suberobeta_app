import React, { useState } from "react"
import firebase from "firebase"
import "firebase/storage"
import MessageLink from "./parts/MessageLink"
import { connect } from "react-redux"
import Lib from "../../Lib/address_lib"
import MyMessageListUi from "./parts/MyMessageListUi"

function MyMessageList(props) {
  //最終的に表示するJSXの配列を入れるステート
  const [mymessages, setMyMessages] = useState("no item")
  const [buymessages, setBuyMessages] = useState("no item")

  const getFireData = async () => {
    const db = firebase.firestore()
    const mymessageitems = []
    const buymessageitems = []
    const email = Lib.encodeEmail(props.email)
    //自分が作成したレッスンで現在進行中のものを取得
    if (props.login) {
      await db
        .collection("messages")
        .where("createrid", "==", email)
        .where("trading", "==", true)
        // .orderBy("buytime") 後々メッセージを直近で送った時間で並び替えたい
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            mymessageitems.push(
              <MessageLink
                lessonid={doc.data().lessonid}
                buyerid={doc.data().buyerid}
                lessonname={doc.data().lessonname}
                username={doc.data().buyername}
              />
            )
          })
          setMyMessages(mymessageitems)
        })
      //自分が購入したレッスンで現在進行中のものを取得
      await db
        .collection("messages")
        .where("buyerid", "==", email)
        .where("trading", "==", true)
        // .orderBy("buytime")  上に同じくゆくゆくやる
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            buymessageitems.push(
              <MessageLink
                lessonid={doc.data().lessonid}
                buyerid={doc.data().buyerid}
                lessonname={doc.data().lessonname}
                username={doc.data().creatername}
              />
            )
          })
          setBuyMessages(buymessageitems)
        })
    } else {
      //ログインしてないとメッセージが表示しなくなってる、なんでこんなこと書いたんだっけ。
      setMyMessages("取引中のメッセージはありません")
    }
  }

  if (mymessages == "no item") {
    getFireData()
  }
  // 取得した2つのステートの値を一つの配列にする処理
  let items = mymessages.concat(buymessages)

  return (
    <div>
      <MyMessageListUi items={items} />
    </div>
  )
}

MyMessageList = connect((state) => state)(MyMessageList)
export default MyMessageList
