import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const mybuylessonlist = makeStyles({
    list: {
        margin: '20px',
    },

});

export default function myBuyLessonList() {
    const classes  = mybuylessonlist();

    return(
        <div className={classes.list}>
            <Box color="white" bgcolor="#90EE90" fontWeight="bold" p={1}>
            <Typography variant="h8">レッスン履歴</Typography>
            </Box>
            
            <List>
            <ListItem button>
                <ListItemText primary="・「レッスン名」　「講師名」　「日時」　" />
                    取引メッセージ
            </ListItem>
            <ListItem button>
                <ListItemText primary="・「レッスン名」　「講師名」　「日時」　" />
                    取引メッセージ
            </ListItem>
            <ListItem button>
                <ListItemText primary="・「レッスン名」　「講師名」　「日時」　" />
                    取引メッセージ
            </ListItem>
            <ListItem button>
                <ListItemText primary="・「レッスン名」　「講師名」　「日時」　" />
                    取引メッセージ
            </ListItem>
            </List>
        </div>
    )
}