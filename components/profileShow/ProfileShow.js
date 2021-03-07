import React, { useEffect, useState } from "react"
import firebase from "firebase"
import "firebase/storage"
import { connect } from "react-redux"
import ProfileShowUi from "./parts/ProFileShowUi"
import { useRouter } from "next/router"
import getProfileImageUrl from "../commonParts/getProfileImageUrl"

let name = "no data"
let introduction = "no data"
let imageUrl = null

function ProfileShow(props) {
  const [update, setUpdate] = useState(false)

  const router = useRouter()
  const db = firebase.firestore()

  const getFireData = async () => {
    // emailにReduxからユーザーのemailを取得
    // const email = Lib.encodeEmail(props.email)
    // emailでfirebaseを参照
    await db
      .collection("users")
      .doc(router.query.userid)
      .get()
      .then(async (doc) => {
        // 取得したデータを定数に入れてから、ステートに入れる
        const profileData = doc.data()
        name = profileData.profile.name
        introduction = profileData.profile.introduction
        imageUrl = await getProfileImageUrl(profileData.imageName)
      })
    setUpdate(update ? false : true)
  }
  useEffect(() => {
    getFireData()
  }, [])

  return (
    <ProfileShowUi
      imageUrl={imageUrl}
      name={name}
      introduction={introduction}
    />
  )
}

ProfileShow = connect((state) => state)(ProfileShow)
export default ProfileShow
