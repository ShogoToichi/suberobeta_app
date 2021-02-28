import React from "react";
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Img from "../../normal_parts/Img";
import Typography from '@material-ui/core/Typography';

const plofile = makeStyles({
    teachername: {
        margin: "20px",
    },
    info: {
        margin: "10px",
    }
});

export default function LessonDitail(props) {
    const classes = plofile();
    return(
        <Paper elevation={24} rounded>
                  <Img src={props.imageurl} size="70"/>
                    <div className={classes.infolist}>
                        <Typography variant="h6" className={classes.creatername}>講師名： {profileusername}</Typography><br></br><br></br>
                        <Typography variant="h7" display="block" className={classes.info}>料金：{price}</Typography><br></br>
                        <Typography variant="h7" display="block" className={classes.info}>場所：{price}</Typography><br></br>
                        <Typography variant="h7" display="block" className={classes.info}>日時：{time}</Typography><br></br>
                        <Typography variant="h7" display="block" className={classes.info}>レッスン内容：{lessoncomment}</Typography><br></br>
                        <Typography variant="h7" display="block" className={classes.info}></Typography>
                    </div>
                </Paper>
    );
}