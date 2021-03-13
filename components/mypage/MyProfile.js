import React, { useEffect, useState } from "react"
import firebase from "firebase"
import "firebase/storage"
import { connect } from "react-redux"
import MyProfileUi from "./parts/MyProfileUi"
import getProfileImageUrl from "../commonParts/getProfileImageUrl"
import { useRouter } from "next/router"

let name = "no data"
let introduction = "no data"
let imageUrl = null

function MyProfile(props) {
  const [update, setUpdate] = useState(false)
  const router = useRouter()

  const getFireData = async () => {
    const db = firebase.firestore()
    // emailにReduxからユーザーのemailを取得
    const email = props.email
    // emailでfirebaseを参照
    await db
      .collection("users")
      .doc(email)
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
    if (!props.login) {
      return router.push("/")
    }
    getFireData()
  }, [])

  return (
    <MyProfileUi imageUrl={imageUrl} name={name} introduction={introduction} />
  )
}

MyProfile = connect((state) => state)(MyProfile)
export default MyProfile
