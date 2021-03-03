import React, { useState } from "react"
import firebase from "../lessoninfo/node_modules/firebase"
import { useRouter } from "../lessoninfo/node_modules/next/router"
import Lib from "../../Lib/address_lib"
import { connect } from "react-redux"
import "firebase/storage"
import MessageAdd from "./MessageAdd"
import { borderRadius } from "@material-ui/system"
import Chat from "./parts/chat"
import Title from "../normal_parts/Title"

function Message(props) {
  //ステート定義
  const [createrid, setCreaterid] = useState("")
  const [messages, setMessages] = useState("")
  const [lessonname, setLessonname] = useState("")
  const [creatername, setCreaterName] = useState("")
  const [buyername, setBuyerName] = useState("")
  const [createrimg, setCreaterImg] = useState("")
  const [buyerimg, setBuyerImg] = useState("")

  const messagedata = []
  const messageitems = []

  const router = useRouter()
  const email = Lib.encodeEmail(props.email)
  const buyerid = Lib.encodeEmail(router.query.buyerid)
  const db = firebase.firestore()

  //lessondata及びmessageを取得
  const getMessageData = async () => {
    //router.query.lessonidでページのurlの末尾を取得
    //先にレッスン名と作成者のidを取得
    await db
      .collection("lessons")
      .doc(router.query.lessonid)
      .get()
      //取得したデータをlessondataにしまってから、それをステートに突っ込む
      .then(function (doc) {
        const lessondata = doc.data()
        setCreaterid(lessondata.createrid)
        setLessonname(lessondata.lessonname)
      })
    //作成者の情報を取得
    await db
      .collection("users")
      .doc(createrid)
      .get()
      .then(function (doc) {
        const createrdata = doc.data()
        setCreaterName(createrdata.profile.name)
        setCreaterImg(createrdata.imageurl)
      })
    //購入者の情報を取得
    await db
      .collection("users")
      .doc(buyerid)
      .get()
      .then(function (doc) {
        const buyerdata = doc.data()
        setBuyerName(buyerdata.profile.name)
        setBuyerImg(buyerdata.imageurl)
      })

    //メッセージ情報取得処理
    //orderBy(time)で時間の古い順に並べる
    await db
      .collection("lessons")
      .doc(router.query.lessonid)
      .collection("buyerid")
      .doc(buyerid)
      .collection("message")
      .orderBy("time")
      .get()
      //取得したデータをmessagedata配列に入れる。
      //配列の繰り返し処理でメッセージのjsxを作り、
      //messageitemsに入れて、最後にstateに入れる
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          messagedata.push(doc.data())
        })
        for (let i in messagedata) {
          let text = messagedata[i].text
          let userid = messagedata[i].userid
          //送信者とReduxメアドの比較で名前と画像を表示
          if (userid == email) {
            messageitems.push(
              <Chat username={creatername} imageurl={createrimg} text={text} />
            )
          } else {
            messageitems.push(
              <Chat username={buyername} imageurl={buyerimg} text={text} />
            )
          }
        }
        //作成者、購入者以外メッセージが見れないようにする
        if (email == createrid || email == buyerid) {
          setMessages(messageitems)
        } else {
          const errorMessage = <p>ご利用いただけません</p>
          setMessages(errorMessage)
        }
      })
  }

  return (
    <div>
      <button onClick={getMessageData} style={{ display: "block" }}>
        読み込み
      </button>
      <Title title={lessonname} />
      {messages}
      <MessageAdd createrid={createrid} />
    </div>
  )
}

Message = connect((state) => state)(Message)
export default Message
