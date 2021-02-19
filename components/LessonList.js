import React,{Component} from "react";
import firebase from "firebase";
import "firebase/storage";
import Lesson from "./Lesson";
import { connect } from "react-redux";
import Router from "next/router";


class LessonList extends Component{

  constructor(props){
    super(props);
    this.getFireData=this.getFireData.bind(this);
    this.data = [];
  }


  getFireData(){
  let db = firebase.database ();
  let ref = db.ref("subero/lessons");
  let self = this;
  ref.orderByKey()
      .limitToFirst(1)
      .on(value,(snapshot)=>{
        let lessondata = Lib.deepcopy(snapshot.val());
      //  this.props.dispatch({
      //    type:"UPDATA_USER",
      //   value:{
      //      items:self.getItem(lessondata)
      //    }
      //  })
        this.data = self.getItem(lessondata); 
      })
}


getItem(lessondata){
    if(lessondata ===undefined){return;}
    let res = [];
    for (let i in lessondata){
        let id = lessondata[i]["lessonid"]
        let name =lessondata[i]["lessonname"];
        let place = lessondata[i]["lessonplace"]
        let time = lessondata[i]["lessontime"]
        let text = lessondata[i]["lessontext"]

        res.push(
          <Lesson lessonid={id}
                  name={name}
                  place={place}
                  time={time}
                  text={text}
          />
        );
        break;
      }
      return res;
    }

      
      render(){
        return(
        <div>
          <h2>レッスン一覧</h2>
          <button onClick = {this.getFireData}>読み込み</button>
          {this.data}
        </div>
    )
  }
}

//LessonList = connect((state)=>state)(LessonList);
export default LessonList;




