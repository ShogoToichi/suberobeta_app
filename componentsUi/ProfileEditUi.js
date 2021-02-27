import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Link from "next/link";

const plofiledit = makeStyles({
    title: {
        margin: '10px',
        fontWeight: 'bold',
    },
    name: {
        marginTop: '20px'
    },
    upload: {
        marginTop: '40px'
    },
    plofile: {
        marginTop: '40px',
    },
    buttongroup:{
        marginTop: '40px',
        textAlign: 'center',
    },
    button:{
        width: '200px',
        backgroundColor: '#DDD',
        color: 'black',
        margin:"0px 20px",
    },

});

export default function plofileEdit() {
    const classes = plofiledit();

    return(
        <div>
            <div className={classes.title}>
                <Typography variant="h5">マイプロフィール編集</Typography> 
            </div>

            <div className={classes.name}>
                    <Typography variant="h8">ユーザ名</Typography>
                    <TextField
                            id="standard-textarea"
                            label="ユーザ名"
                            placeholder=""
                            multiline
                            maxWidth
                    />
            </div>
            
           
            <div className={classes.upload}>
                    <Typography variant="h8">プロフィール画像のアップロード</Typography>

                    <br></br>
                    
                   
                    <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                    <label htmlFor="icon-button">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                        </IconButton>
                    </label>
            </div>

            <div className={classes.plofile}>
                    <TextField
                    id="standard-textarea"
                    label="自己紹介文"
                    placeholder=""
                    rows={8}
                    multiline
                    variant="outlined"
                    fullWidth
                    />
            </div>

            <div className={classes.buttongroup}>
                    <ButtonGroup disableElevation variant="outlined">
                        <Link href="/mypage">
                    <Button className={classes.button}>変更</Button>
                        </Link>
                        <Link href="/mypage">
                    <Button className={classes.button}>キャンセル</Button>
                        </Link>
                    </ButtonGroup>
            </div>
        </div>
    )
}