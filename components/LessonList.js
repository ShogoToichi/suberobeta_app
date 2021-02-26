import React,{useState} from "react";
import firebase from "firebase";
// import "firebase/storage";
import Lesson from "./Lesson";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const lessonlist = makeStyles({
  rayout: {
    float: 'center',
  },

  top: {
    width: '100%',
    margin: '8px',
    
  },

  lessonlist: {
    width: '600px',
    margin: '5px',
  },

  btn:{
    float: 'right',
    color: 'black',
    backgroundColor: '#4A8' 
  },
  cardheader:{
    cursor : "pointer",
  }
});





function LessonList (){
  //ステートの設定
  const [items,setItems] = useState("no item");

  //lessondataはfirebaseのレッスンdataをいったん保管する
  //lessonidはfirebaseのレッスンidをいったん保管する
  //lessonitemsは値を渡された<Lesson/>が要素の配列ををいったん保管する
  const getFireData= async()=>{
    const db = firebase.firestore ();
    const lessondata = [];
    const lessonid = [];
    const lessonitems = [];
    await db.collection("lessons").get().then(function(querySnapshot){
      // 受け取ったオブジェクトの配列に対して、forEachで繰り返し処理
      //データをアンシフトで配列に入れることで、新しい投稿が配列の頭にくる
      querySnapshot.forEach(function(doc){
        lessondata.unshift(doc.data());
        lessonid.unshift(doc.id);
      });
      //firebaseのデータを入れた配列に対して繰り返し処理で
      //レッスンコンポーネントに値を渡し、それをlessonitemsにpushする
      //変数をかませてあるが、不要な気がする
      for (let i in lessondata){
        let id = lessonid[i];
        let name =lessondata[i].lessonname;
        let place = lessondata[i].lessonplace;
        let time = lessondata[i].lessontime;
        let text = lessondata[i].lessontext;
        let price = lessondata[i].lessonprice;
        lessonitems.push(
          <Lesson lessonid={id}
                  name={name}
                  place={place}
                  time={time}
                  text={text}
                  price={price}
          />
        );
      }
      //最後にlessonitemsをステートにいれる
      setItems(lessonitems);
    });
  }

  if(items =="no item"){
    getFireData();
  }
  
  const classes = lessonlist();

  return (
    <div className={classes.rayout}>
        <div className={classes.top}>
            <Typography variant="h5" style={{ marginTop: 10, marginBottom: 20}}>レッスン一覧</Typography>
            <Typography style={{ marginTop: 10, marginBottom: 20}} variant="h8">時間や場所、レベルなど自分に合ったレッスンを見つけよう</Typography>
            </div>
        {items}
    </div>
  );
}

export default LessonList;




