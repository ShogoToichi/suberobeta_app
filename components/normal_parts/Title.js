import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';

const title = makeStyles({
    titlearea: {
        display:"inline-block",
    },
    title: {
        padding:"2px",
        margin: '15px',
        fontWeight: 'bold',
        marginTop:"30px",
        fontSize:"30px",
    },
    subtitle: {

    },
})

export default function Title(props) {
    const classes = title();
    return(
        <div className={classes.titlearea}>
        <Typography className={classes.title} variant="h6">{props.title}</Typography>
        </div>
    );
}