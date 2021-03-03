//基本的には<LessonList/>と同じなのでそちらを参照
//.whereでレッスン作成者とReduxのemailが一致するデータを参照

import React, { useState } from "react"
import firebase from "firebase"
import "firebase/storage"
import MessageLink from "./parts/MessageLink"
import { connect } from "react-redux"
import Lib from "../../Lib/address_lib"
import MyMessageListUi from "./parts/MyMessageListUi"

function MyMessageList(props) {
  const [mymessages, setMyMessages] = useState("no item")
  const [buymessages, setBuyMessages] = useState("no item")

  const getFireData = async () => {
    const db = firebase.firestore()
    const mymessageitems = []
    const buymessageitems = []
    const email = Lib.encodeEmail(props.email)

    if (props.login) {
      await db
        .collection("messages")
        .where("createrid", "==", email)
        .where("trading", "==", true)
        // .orderBy("buytime")
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

      await db
        .collection("messages")
        .where("buyerid", "==", email)
        .where("trading", "==", true)
        // .orderBy("buytime")
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
      setMyMessages("取引中のメッセージはありません")
    }
  }

  if (mymessages == "no item") {
    getFireData()
  }
  let items = mymessages.concat(buymessages)

  return (
    <div>
      <MyMessageListUi items={items} />
    </div>
  )
}

MyMessageList = connect((state) => state)(MyMessageList)
export default MyMessageList
