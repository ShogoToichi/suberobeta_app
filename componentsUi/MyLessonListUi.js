import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Link from "next/link";
import { border } from '@material-ui/system';


const mylessonlist = makeStyles({
    list:{
        margin: '20px',
    },
    addbtn: {
        textAlign: 'center',
    },
    btn: {
        backgroundColor: "#5FA",
        color:"white",
    },
    messagebtn: {
        backgroundColor: "#DDD",
        color:"black",
    },
    lessonitem:{
        margin:"20px 0px",

    }
});

export default function myLessonList(props) {
    const classes  = mylessonlist();

    return(
        <div className={classes.list}>
            <div className={classes.list}>
            <Box color="white" bgcolor="#5FA" fontWeight="bold" p={1}>
            <Typography variant="h8">Myレッスン履歴</Typography>
            </Box>

            <List>
            <ListItem divider={true} className={classes.lessonitem}>
                <ListItemText  primary="「レッスン名」　「生徒名」　「日時」　" />
                <Button size="large" className={classes.messagebtn} onClick={props.onClick}>取引メッセージ</Button>
            </ListItem>
            <ListItem button>
                <ListItemText primary="・「レッスン名」　「生徒名」　「日時」　" />
                    取引メッセージ
            </ListItem>
            <ListItem button>
                <ListItemText primary="・「レッスン名」　「生徒名」　「日時」　" />
                    取引メッセージ
            </ListItem>
            <ListItem button>
                <ListItemText primary="・「レッスン名」　「生徒名」　「日時」　" />
                    取引メッセージ
            </ListItem>
            </List>
            </div>

            <div className={classes.addbtn}>
                <Link href="/lesson_add">
                <Button variant="contained" size="large" startIcon={<Icon>add_circle</Icon>} className={classes.btn}>レッスン追加</Button>
                </Link>
            </div>


        </div>
    )
}