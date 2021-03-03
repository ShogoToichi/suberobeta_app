import React, { Component } from "react"
import { connect } from "react-redux"
import firebase from "firebase"
import Button from "@material-ui/core/Button"

class Account extends Component {
  style = {
    fontSize: "12pt",
    padding: "5px 10px"
  }

  constructor(props) {
    super(props)
    // 属性値として使うためにバインド
    this.login_check = this.login_check.bind(this)
  }

  //ログイン処理
  login() {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    let provider = new firebase.auth.GoogleAuthProvider()
    var self = this
    firebase
      .auth()
      .signInWithPopup(provider)
      //ログイン処理完了後resultで値を受け取りReduxへ
      .then((result) => {
        this.props.dispatch({
          type: "UPDATE_USER",
          value: {
            login: true,
            username: result.user.displayName,
            email: result.user.email,
            imageurl: ""
          }
        })
        //ログイン時の処理をpropsで受け取れるようにする
        //とりま使ってない
        // this.props.onLogined();
      })
  }

  //ログアウト機能
  logout() {
    console.log("logout")
    firebase.auth().signOut()
    this.props.dispatch({
      type: "UPDATE_USER",
      value: {
        login: false,
        username: "(click here!)",
        email: "",
        data: [],
        imageurl: ""
      }
    })
    // this.props.onLogouted();
  }

  //ログイン、ログアウト処理をクリック時に分岐する関数
  login_check() {
    if (this.props.login === false) {
      this.login()
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
        onClick={this.login_check}
      >
        ログイン
      </Button>
    )
  }
}

Account = connect((state) => state)(Account)
export default Account
