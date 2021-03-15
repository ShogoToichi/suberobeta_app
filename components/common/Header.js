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
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import Icon from "@mdi/react"
import { mdiMenu } from "@mdi/js"

const useStyles = makeStyles((theme) => ({
  bar: {
    backgroundColor: useContext(Color).colors.header,
    height: "5rem",
    // [theme.breakpoints.down("sm")]: {
    //   width: "110vw"
    // }
  },
  blank: {
    flexGrow: 1
  },
  img: {
    height: "4rem"
  },
  mobile: {
    backgroundColor: useContext(Color).colors.header,
    color: useContext(Color).colors.header
  }
}))

function Header(props) {
  const classes = useStyles()
  const router = useRouter()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

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
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <Icon path={mdiMenu} size={2} />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Button
                variant="text"
                size="large"
                color="inherit"
                onClick={() => router.push("/lesson_list")}
              >
                レッスン一覧
              </Button>
            </MenuItem>

            <MenuItem onClick={handleClose}>
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
            </MenuItem>
          </Menu>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

Header = connect((state) => state)(Header)
export default Header
