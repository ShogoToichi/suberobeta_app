import React, { Component } from "react"
import { connect } from "react-redux"
import firebase from "firebase"
import Button from "@material-ui/core/Button"
import Lib from "../../Lib/address_lib"
import { useRouter } from "next/router"

// 初回ログイン時に名前を自動的に設定するために初回ログインかどうかを判定する関数
const isFirstLogin = async (db, email) => {
  const doc = await db.collection("users").doc(email).get()
  // 存在しないときisFirstLoginはtrueを返す
  if (!doc.exists) {
    return true
  } else {
    return false
  }
}

// 初期値の登録
const doRegister = async (db, email, name) => {
  const initIntroduction = "自己紹介を入力してください！"

  // 初期の画像設定用urlの取得
  const imageRef = firebase.storage().ref().child("suberoアプリロゴ.png")
  let initImageUrl = ""
  await imageRef.getDownloadURL().then((url) => {
    initImageUrl = url
  })
  // firestoreに登録
  await db
    .collection("users")
    .doc(email)
    .set(
      {
        imageUrl: initImageUrl,
        profile: { name: name, introduction: initIntroduction }
      },
      { marge: true }
    )
}

class Account extends Component {
  // const router = useRouter()
  style = {
    fontSize: "12pt",
    padding: "5px 10px"
  }

  constructor(props) {
    super(props)
    // 属性値として使うためにバインド
    this.loginCheck = this.loginCheck.bind(this)
  }
  //ログイン処理
  login() {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    let provider = new firebase.auth.GoogleAuthProvider()
    // var self = this  // ???
    firebase
      .auth()
      .signInWithPopup(provider)
      //ログイン処理完了後resultで値を受け取りReduxへ
      .then(async (result) => {
        this.props.dispatch({
          type: "UPDATE_USER",
          value: {
            login: true,
            userName: result.user.displayName,
            email: result.user.email,
            imageUrl: ""
          }
        })
        // 初回ログインかどうかの判断
        const db = firebase.firestore()
        const email = Lib.encodeEmail(result.user.email)

        if (await isFirstLogin(db, email)) {
          // 初回ログインの場合trueとなる
          console.log("Set initial value")
          // 初回ログインの場合データベースに初期値を入力する
          doRegister(db, email, result.user.displayName)
        }
      })
    //ログイン時の処理をpropsで受け取れるようにする
    //とりま使ってない
    // this.props.onLogined();
  }

  //ログアウト機能
  logout() {
    console.log("logout")
    firebase.auth().signOut()
    this.props.dispatch({
      type: "UPDATE_USER",
      value: {
        login: false,
        userName: "(click here!)",
        email: "",
        data: [],
        imageUrl: ""
      }
    })
    // this.props.onLogouted();
  }

  //ログイン、ログアウト処理をクリック時に分岐する関数
  loginCheck() {
    if (this.props.login === false) {
      this.login()
      // router.push("/toppage")
    } else {
      this.logout()
    }
  }

  render() {
    return (
      <Button
        variant="outlined"
        size="large"
        color="inherit"
        onClick={this.loginCheck}
      >
        {this.props.text}
      </Button>
    )
  }
}

Account = connect((state) => state)(Account)
export default Account
