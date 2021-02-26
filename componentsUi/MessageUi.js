import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Typography from '@material-ui/core/Typography';

const message = makeStyles({
 

});

export default function Message() {
    const classes = message();

    return(
        <div>
            <Typography variant="h6">メッセージ</Typography>

            <Typography variant="h8">レッスン名</Typography>
        </div>
    )


};