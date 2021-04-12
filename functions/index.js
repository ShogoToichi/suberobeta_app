const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
var express = require('express');
var router = express.Router();
const stripeApiKey = functions.config().stripe.testkey;
const stripe = require("stripe")(stripeApiKey);



exports.onCreatedAccount = functions.firestore
    .document("users/{id}")
    .onCreate(async(snap, context)=>{
      const accountData = {
        type : "express",
        country : "JP",
        email : context.params.id,
        capabilities:{
          card_payments:{requested:true},
          transfers : {requested:true}
        }
      }
      const accountJsonData = JSON.stringify(accountData);
      const account = await stripe.accounts.create(accountJsonData);
      const createdData = JSON.parse(account);
      await admin.firestore().collection("users").doc(context.params.id).set({
        stripeId: createdData.id,
      },{merge : true});
    });
