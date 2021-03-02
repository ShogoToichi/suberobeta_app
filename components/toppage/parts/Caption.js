import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Color} from "../../../static/colors";
import Grid from '@material-ui/core/Grid';

const toptitle = makeStyles((theme) => ({
    title: {
        width: '100%',
        margin: '5px',
    },
    cap: {
        marginLeft: "20px",
    },
    maincap: {
        marginLeft: "30px",
        color: useContext(Color).colors.header,
        fontWeight: 'bold',
        padding:'4px',
        marginLeft:"20px",
    },
    img: {
        right: '200px',
        height: '300px',
        width: '300px',
    },

}));

export default function Caption(props) {
    
    const classes = toptitle();

    return(
        <div className={classes.title}>
            <Grid container justify="center" textAlign="center">
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" align="center" clasName={classes.cap}>
                        好きな時間に好きな場所で<br />
                        スキー・スノーボードレッスンは
                    </Typography>
                    
                    <Typography variant="h1" align="center" className={classes.maincap}  >
                        subero
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src="../../../static/snowboard.jpg" width="100px" alt="スノーボード画像" className={classes.img}/>
                </Grid>
            </Grid>
        </div>
    );
}