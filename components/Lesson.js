import React, {Component} from "react";
import Router from "next/router";
import Link from "next/link";

class Lesson extends Component{


  
  constructor(props){
    super(props);
    // this.goInfo = this.goInfo.bind(this);
  }
  
  
  
  //詳細ページに移動
  // goInfo(lessonid){
  //   router=Router.push()
  //   router("/subero/lesson_list?lessonid=" + lessonid);
  // }


  render(){
    return(
      <div>
        <Link as={`/lesson_info/ + ${this.props.lessonid}`}
          href="/lesson_info/[lessonid]">
            <a>{this.props.name}</a>
          </Link>
        <p>place: {this.props.place}</p>
        <p>price: {this.props.price}</p>
        <p>time: {this.props.time}</p>
        <p>comment: {this.props.text}</p>
        {/* <button 
        // onClick={this.goInfo(this.props.lessonid)}
        >詳細へ</button> */}
      </div>
      )
    } 
}

export default Lesson;

