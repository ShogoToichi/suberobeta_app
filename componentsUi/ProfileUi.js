import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';

const plofile = makeStyles({
    title: {
        margin: '15px',
        fontWeight: 'bold',
    },
    info: {
        margin: '10px',
    },
    infolist: {
       
    },
});

export default function Profile() {
    const classes = plofile();
    
    return(
        <div>
                
                <Typography variant="h6" className={classes.title}>「レッスン名」</Typography>

                <Paper elevation={24} rounded>
                <Avatar aria-label="recipe" className={classes.avatar}>
                </Avatar>
                
                    <div className={classes.infolist}>
                        <Typography variant="h6" className={classes.info}>講師名：</Typography><br></br><br></br>
                        <Typography variant="h7" display="block" className={classes.info}>場所：</Typography><br></br>
                        <Typography variant="h7" display="block" className={classes.info}>日時：</Typography><br></br>
                        <Typography variant="h7" display="block" className={classes.info}>人数：</Typography><br></br>
                        <Typography variant="h7" display="block" className={classes.info}>レッスン内容：</Typography><br></br>
                        <Typography variant="h7" display="block" className={classes.info}></Typography>
                    </div>
                </Paper>
        </div>
    );

    }