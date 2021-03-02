import React,{useContext} from "react";
import Link from "next/link";
import GetImage from "../GetImage";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {Color} from "../../../static/colors";

const profileedit = makeStyles((props) => ({
    name: {
        marginTop: "40px",
        marginLeft: "20px",
    },
    uploadtext: {
        marginTop: "40px",
        marginLeft: "20px",
    },
    upload: {
        marginLeft: "80px",
    },
    plofile: {
        marginTop: "40px",
        width: "80%",
    },
    buttongroup:{
        marginTop: "40px",
        textAlign: "center",
    },
    button:{
        width: "200px",
        backgroundColor: useContext(Color).colors.Green,
        color: "white",
        margin:"0px 20px",
    },
}));

export default function ProfileEdit(props){
    const classes = profileedit();
    return(
    <div>
        <div className={classes.name}>
            <Typography variant="h8">ユーザ名</Typography>
            <TextField
                    label="ユーザ名"
                    maxWidth
                    onChange={props.doChangeName}
            />
        </div>
            
            
        <div className={classes.uploadtext}>
            <Typography variant="h8">プロフィール画像のアップロード</Typography>
        </div>

        <div className={classes.upload}>
            <GetImage name={props.name}/>
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
                    onChange={props.doChangeIntroduction}
                    />
            </div>

            <div className={classes.buttongroup}>
                    <ButtonGroup disableElevation variant="outlined">
                        <Link href="/mypage">
                            <Button className={classes.button} onClick={props.doSubmit}>変更</Button>
                        </Link>
                        <Link href="/mypage">
                            <Button className={classes.button}>キャンセル</Button>
                        </Link>
                    </ButtonGroup>
            </div>
    </div>
    )
}