import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';


const useStyles = makeStyles((theme) => ({
  bar: {
    marginTop: '50px',
    height: '400px',
    backgroundColor: '#A9A9A9',
    float: 'center',
  },

  img: {
    height: '200px'
  },
}));


export default function Hooder() {
  const classes = useStyles();


  return (
    <div>
      <AppBar position="static" className={classes.bar} >

        
        <img className={classes.img} src="/static/subero_icon.png"/>
          

      </AppBar> 
    </div>
  );
}
