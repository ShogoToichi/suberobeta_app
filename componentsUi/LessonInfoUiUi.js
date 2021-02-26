import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { PinDropSharp } from '@material-ui/icons';


const plofile = makeStyles({
    title: {
        padding:"2px",
        margin: '15px',
        fontWeight: 'bold',
        display:"inline",
        marginTop:"30px",
        fontSize:"30px",
    },
    info: {
        margin: '10px',
    },
    buybtn: {
        display:"inlineBlock",
        marginLeft:"30px",
        fontSize:"23px",
        marginBottom:"15px",
        backgroundColor:"#EEE",
    },
});

export default function Profile(props) {
    const classes = plofile();
    
    return(
        <div style={{marginTop:"30px"}}>
                
                <Typography variant="h6" className={classes.title}>「レッスン名」</Typography>
                <Button className = {classes.buybtn} size="large" variant="outlined">購入</Button>

                <Paper elevation={24} rounded>
                <Avatar aria-label="recipe" className={classes.avatar}>
                </Avatar>
                
                    <div className={classes.infolist}>
                        <Typography variant="h6" className={classes.info}>講師名：{props.name}</Typography><br></br><br></br>
                        <Typography variant="h7" display="block" className={classes.info}>料金：</Typography><br></br>
                        <Typography variant="h7" display="block" className={classes.info}>場所：</Typography><br></br>
                        <Typography variant="h7" display="block" className={classes.info}>日時：</Typography><br></br>
                        <Typography variant="h7" display="block" className={classes.info}>レッスン内容：</Typography><br></br>
                        <Typography variant="h7" display="block" className={classes.info}></Typography>
                    </div>
                </Paper>
        </div>
    );

    }