import React , {Component} from "react";
import {connect} from "react-redux";


class Redux extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return <p>{this.props.username}</p>
  }
} 

Redux = connect((state)=>state)(Redux);
export default Redux;