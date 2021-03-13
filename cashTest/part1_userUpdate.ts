/**
* User updated trigger
*/
import * as functions from 'firebase-functions'
import { createStripeCustomer } from './stripe';

// listen for changes when user record is updated
export const userUpdatedTrigger = functions.firestore
  .document('users/{userId}')
  .onUpdate(async (change, context) => {

    const prevSnap = change.before
    const newSnap = change.after

    // ensure that it's the first login
    if (prevSnap.exists) {
      if (prevSnap.data() && !prevSnap.data().lastLoginAt) {
        // we have eliminated the chances that's it's a returning verified-user
        try {
          // the user record exists, create the customer on stripe
          if (newSnap.exists) {
             await createStripeCustomer(newSnap)
          }
        } catch (err) {
          console.error(err)
        }
      }
    }
  })