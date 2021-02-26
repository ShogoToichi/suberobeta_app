import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


const lessonadd = makeStyles({
top :{

},
title:{
    margin: '10px',
    fontWeight: 'bold',
},
inputform: {
    marginTop: '50px',
    width: '500px'
},
inputtitle: {

},
textarea: {
    marginTop: '20px'
},
detailinfo: {
    marginTop: '20px',
}
});

export default function lessonAdd() {
    const classes = lessonadd();

    return(
        <div className={classes.top}>
            <div className={classes.title}>
            <Typography variant="h5">新規レッスンの追加</Typography>
            </div>
            <Typography variant="h8">自分の能力を生かして、ウィンタースポーツの輪を広げましょう。</Typography>

            <div className = {classes.inputform}>
                <Typography className={classes.inputtitle} variant="h8">レッスンに関する情報を入力してください。</Typography>
                <br></br>
                <form className={classes.textarea} noValidate autoComplete="off"></form>
                        <TextField
                    id="standard-textarea"
                    label="レッスン名"
                    placeholder=""
                    multiline
                    fullWidth
                    />

                <form className={classes.textarea} noValidate autoComplete="off"></form>
                        <TextField
                    id="standard-textarea"
                    label="日時"
                    placeholder="〇月〇日午前〇時～〇月〇日午前〇時"
                    multiline
                    fullWidth
                    />

                <form className={classes.textarea} noValidate autoComplete="off"></form>
                        <TextField
                    id="standard-textarea"
                    label="場所"
                    placeholder="〇〇スキー場"
                    multiline
                    fullWidth
                    />

                <form className={classes.textarea} noValidate autoComplete="off"></form>
                        <TextField
                    id="standard-textarea"
                    label="料金"
                    placeholder="￥〇〇〇〇円"
                    multiline
                    fullWidth
                    />
                <div className={classes.detailinfo}>
                <form className={classes.textarea} noValidate autoComplete="off"></form>
                        <TextField
                    id="outlined-multiline-static"
                    label="レッスン内容"
                    placeholder=""
                    multiline
                    rows={8}
                    variant="outlined"
                    fullWidth
                    />
                </div>
            </div>
        </div>
    )
    }
