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
import Hidden from "@material-ui/core/Hidden"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles((theme) => ({
  bar: {
    backgroundColor: useContext(Color).colors.header
  },
  blank: {
    flexGrow: 1
  },
  img: {
    height: "75px"
  },
  mobile: {
    backgroundColor: useContext(Color).colors.header,
    color: useContext(Color).colors.header,
  },

}))

function Header(props) {
  const classes = useStyles()
  const router = useRouter()

  return (
    <AppBar position="static" className={classes.bar}>
      <Toolbar>
        <Button size="small" color="inherit" onClick={() => router.push("/")}>
          <img className={classes.img} src="/static/header_logo.png" />
        </Button>
        <h1 className={classes.blank}> </h1>

        {/* モバイル画面なら隠す -- モバイル画面以上で表示 */}
        <Hidden smDown>
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
        </Hidden>

        {/* モバイル画面以下の画面のみで表示*/}
        <Hidden mdUp>
          <Accordion>
            <AccordionSummary expandIcon={<MenuIcon />} className={classes.mobile}></AccordionSummary>
            <AccordionDetails className={classes.category}>
              <Button
                variant="text"
                size="large"
                color="inherit"
                onClick={() => router.push("/lesson_list")}
              >
                レッスン一覧
              </Button>
            </AccordionDetails>
            <AccordionDetails className={classes.category}>
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
            </AccordionDetails>
          </Accordion>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

Header = connect((state) => state)(Header)
export default Header
