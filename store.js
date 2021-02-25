import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import firebase from "firebase";
import "firebase/storage";

//Firebaseの初期化
var firebaseConfig = {
    apiKey: "AIzaSyDT8vE8-4oyfaupBRZCr_2grNoiIGfMfIg",
    authDomain: "subero-prototype.firebaseapp.com",
    projectId: "subero-prototype",
    storageBucket: "subero-prototype.appspot.com",
    messagingSenderId: "720087044660",
    appId: "1:720087044660:web:35bf8de9cc22e0e0d3f061",
    measurementId: "G-3F0618JDJ9"
  };
  // Initialize Firebase
var fireapp;
try {
  firebase.initializeApp(firebaseConfig);
} catch (error) {
  console.log(error.message);
}
export const fireappp = fireapp;


// ステートの初期値
const initial = {
  login:false,
  username:"(click here!)",
  email:"",
  imageurl:"",
}

export function fireReducer (state = initial, action) {
   switch (action.type) {
     case "UPDATE_USER":
       return action.value;
     default:
       return state;
   }
  }

//   //initStore関数
  export function initStore(state = initial) {
    return createStore(fireReducer, state,
       applyMiddleware(thunkMiddleware))
  }
  

  export const storage = firebase.storage();
  export default firebase;