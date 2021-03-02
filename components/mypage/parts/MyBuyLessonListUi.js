import React,{useContext} from "react";
import "firebase/storage";
import { makeStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {Color} from "../../../static/colors";

const mybuylessonlist = makeStyles((theme) => ({
    list:{
        marginTop: '40px',
        width: "80%",
    },
    box: {
        color: "white",
        fontWeight: "bold",
        backgroundColor: useContext(Color).colors.Green,

    },
    addbtn: {
        textAlign: 'center',
    },
    btn: {
        backgroundColor: useContext(Color).colors.Green,
        color:"white",
    },
}));

export default function MyBuyLessonListUi(props){
    const classes = mybuylessonlist();
    return(
        <div className={classes.list}>
            <div className={classes.list}>
            <Box p={1} className={classes.box}>
            <Typography variant="h8">購入したレッスン</Typography>
            </Box>
            </div>
                {props.items}
        </div>
    )
}