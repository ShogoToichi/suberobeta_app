import React , {Component} from "react";
import {connect} from "react-redux";


function Redux (props){
    return <p>{props.username}</p>
}

Redux = connect((state)=>state)(Redux);
export default Redux;