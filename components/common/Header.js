//ヘッダー設定用ファイル
//Layoutで読み込む

import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import Link from "next/link"
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

  return (
    <AppBar position="static" className={classes.bar}>
      <Toolbar>
        <Link href="/toppage">
          <Button size="small" color="inherit">
            <img className={classes.img} src="/static/subero_icon.png" />
          </Button>
        </Link>
        <h1 className={classes.blank}> </h1>
        <Link href="/lesson_list">
          <Button variant="text" size="large" color="inherit">
            レッスン一覧
          </Button>
        </Link>

        {props.login ? (
          <>
            <Link href="/mypage">
              <Button variant="text" size="large" color="inherit">
                マイページ
              </Button>
            </Link>
            <Link href="/toppage">
              <Account text="ログアウト" />
            </Link>
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
