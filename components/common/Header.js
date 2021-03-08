//ヘッダー設定用ファイル
//Layoutで読み込む

import React, { useContext } from "react"
import { useRouter } from "next/router"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import Account from "./Account"
import { connect } from "react-redux"
import { Color } from "../../static/colors"

const useStyles = makeStyles((theme) => ({
  bar: {
    backgroundColor: useContext(Color).colors.header
  },
  blank: {
    flexGrow: 1
  },
  img: {
    height: "40px"
  }
}))

function Header(props) {
  const classes = useStyles()
  const router = useRouter()

  return (
    <AppBar position="static" className={classes.bar}>
      <Toolbar>
        <Button size="small" color="inherit" onClick={() => router.push("/")}>
          <img className={classes.img} src="/static/subero_icon.png" />
        </Button>
        <h1 className={classes.blank}> </h1>
        <Button
          variant="text"
          size="large"
          color="inherit"
          onClick={() => router.push("/lesson_list")}
        >
          レッスン一覧
        </Button>

        {props.login ? (
          <>
            <Button
              variant="text"
              size="large"
              color="inherit"
              onClick={() => router.push("/mypage")}
            >
              マイページ
            </Button>
            <Account text="ログアウト" />
          </>
        ) : (
          <Account text="ログイン" />
        )}
      </Toolbar>
    </AppBar>
  )
}

Header = connect((state) => state)(Header)
export default Header
