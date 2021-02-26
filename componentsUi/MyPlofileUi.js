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
import { PinDropSharp } from '@material-ui/icons';

const myprofile = makeStyles({
    card: {
        marginTop: '20px',
    },
    button: {
        backgroundColor: '#E7E7E7',
        color: 'balck',
    },
    title:{
        paddingBottom:"16px",
        borderBottom:"solid 4px #DDD",
    }
});

export default function myProfile(props) {
    const classes = myprofile();
    return(
        <div>

            <Typography style={{fontWeight: 'bold',margin: '15px'}} variant="h3" className={classes.title}>My page</Typography>
            <div className={classes.card}>
                <Card>
                    <CardHeader
                            avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                            </Avatar>
                            }
                    action={
                        <Link href="/profile_edit">
                            <Button variant="outlined" size="large" className={classes.button}>プロフィール変更</Button>
                        </Link>
                    }
                    title="ユーザ名"
                    />

                    <CardContent>
                        <Typography style={{fontWeight: 'bold', margin: '5px',  borderBottom: "solid 1px #BBB" ,paddingBottom: "7px"}} variant="h5">自己紹介</Typography>
                        <Typography style={{marginTop: '10px' }} variant="h5">
                            {props.text}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}