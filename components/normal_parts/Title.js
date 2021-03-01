import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';

const title = makeStyles({
    titlearea: {
        display:"inline-block",
        width: "90%",
    },
    title: {
        fontWeight: 'bold',
        margin: "40px",
    },
    subtitle: {
        marginLeft: "50px",
        marginBottom: "20px",
        borderBottom:"solid 4px #DDD",
    },
})

export default function Title(props) {
    const classes = title();
    return(
        <div className={classes.titlearea}>
        <Typography className={classes.title} variant="h4">{props.title}</Typography>
        <Typography className={classes.subtitle} variant="h6">{props.subtitle}</Typography>
        </div>
    );
}