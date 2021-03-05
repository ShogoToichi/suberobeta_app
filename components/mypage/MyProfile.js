import React, { useEffect, useState } from "react"
import firebase from "firebase"
import "firebase/storage"
import { connect } from "react-redux"
import Lib from "../../Lib/address_lib"
import MyProfileUi from "./parts/MyProfileUi"

let name = "no data"
let introduction = "no data"
let imageUrl = null

function MyProfile(props) {
  const [update, setUpdate] = useState(false)

  const getFireData = async () => {
    const db = firebase.firestore()
    // emailにReduxからユーザーのemailを取得
    const email = Lib.encodeEmail(props.email)
    // emailでfirebaseを参照
    await db
      .collection("users")
      .doc(email)
      .get()
      .then((doc) => {
        // 取得したデータを定数に入れてから、ステートに入れる
        const profileData = doc.data()
        name = profileData.profile.name
        introduction = profileData.profile.introduction
        imageUrl = profileData.imageUrl
      })
    setUpdate(update ? false : true)
  }
  useEffect(() => {
    getFireData()
  }, [])

  return (
    <MyProfileUi imageUrl={imageUrl} name={name} introduction={introduction} />
  )
}

MyProfile = connect((state) => state)(MyProfile)
export default MyProfile
