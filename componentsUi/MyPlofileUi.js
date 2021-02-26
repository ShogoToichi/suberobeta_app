import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { CardHeader } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Link from "next/link";

const myprofile = makeStyles({
    card: {
        marginTop: '20px',
    },
    button: {
        backgroundColor: '#90EE90',
        color: 'balck',
    },
});

export default function myProfile() {
    const classes = myprofile();
    return(
        <div>

            <Typography style={{fontWeight: 'bold', margin: '15px'}} variant="h5">My page</Typography>
            <div className={classes.card}>
                <Card>
                    <CardHeader
                            avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                            </Avatar>
                            }
                    action={
                        <Link href="/profile_edit">
                            <Button variant="outlined" className={classes.button}>プロフィール変更</Button>
                        </Link>
                    }
                    title="ユーザ名"
                    />

                    <CardContent>
                        <Typography style={{fontWeight: 'bold', margin: '5px'}} variant="body1">自己紹介</Typography>
                        <Typography style={{marginTop: '10px'}} variant="body2">
                            内容
                            <br></br>・<br></br>・<br></br>・<br></br>・<br></br>・<br></br>・<br></br>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}