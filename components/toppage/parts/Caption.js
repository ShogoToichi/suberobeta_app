import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Color} from "../../../static/colors";

const toptitle = makeStyles((theme) => ({
    title: {
        position: 'relative',
        width: '100%',
        margin: '5px',
        textAlign: 'left',
    },
    cap: {
        marginLeft: "20px",
    },
    maincap: {
        marginLeft: "30px",
        color: useContext(Color).colors.header,
        fontWeight: 'bold',
        padding:'4px',
        fontSize:"160px",
        marginLeft:"20px",
    },
    img: {
        position: 'absolute',
        top: '50px',
        right: '200px',
        height: '300px',
        width: '300px',
    },

}));

export default function Caption(props) {
    
    const classes = toptitle();

    return(
        <div className={classes.title}>
            <Typography variant="h5" clasName={classes.cap}>
                好きな時間に好きな場所で<br />
                スキー・スノーボードレッスンは
            </Typography>

            <Typography variant="h1" className={classes.maincap}  >
                subero
            </Typography>

            <img src="../../../static/snowboard.jpg" width="100px" alt="スノーボード画像" className={classes.img}/>
        </div>
    );
}