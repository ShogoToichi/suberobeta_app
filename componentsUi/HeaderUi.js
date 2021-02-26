import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Link from "next/link";
import Account from "../components/Account";
import {connect} from "react-redux";

const useStyles = makeStyles((theme) => ({
  bar: {
    backgroundColor: '#285'
  },
  blank: {
    flexGrow: 1,
  },
  img: {
    height: '40px'
  },
}));


function Header(props) {
  const classes = useStyles();


  return (
    <div>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Link href="/toppage">
          <Button  size="small" color="inherit"><img className={classes.img} src="/static/subero_icon.png"/></Button>
          </Link>
          <h1 className={classes.blank}>          </h1>
          <Link href="/lesson_list">
          <Button variant="text" size="large" color="inherit">レッスン一覧</Button>
          </Link>
          {props.login ?
          <Link href="/mypage">
          <Button variant="text" size="large" color="inherit">マイページ</Button>
          </Link>
          :
          <Account/>  
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header=connect((state)=>state)(Header);
export default Header;