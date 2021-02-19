import React,{Component} from "react";
import firebase from "firebase";
import "firebase/storage";
import MyLesson from "./MyLesson";
import { connect } from "react-redux";

class MyLessonList extends Component{

  constructor(props){
    super(props);
    let items = null;
  }

    getFireData(){
  let db = firebase.database ();
  let email = Lib.encodeEmail(this.props.email);
  let ref = db.ref("subero/email/mylesson");
  ref.orderByKey()
      .limitToFirst()
      .on(value,(snapshot)=>{
        let lessondata = Lib.deepcopy(snapshot.val());
        items = self.getItem(lessondata)
          }
        )
      }



getItem(lessondata){
    if(lessondata ===undefined){return;}
    let res = [];
    for (let i in lessondata){
        let id = lessondata[i]["lessonid"]
        let name =lessondata[i]["lessonname"];
        let place = lessondata[i]["lessonplace"]
        let time = lessondata[i]["time"]
        let text = lessondata[i]["text"]

        res.push(
          <MyLesson lessonid={id}
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
        {this.items}
      </div>
    )
  }
}

MyLessonList = connect((state)=>state)(MyLessonList);
export default MyLessonList;
