/**
* User signIn Http Request
*/
import * as functions from 'firebase-functions';
import * as APIRequest from 'request'
import { admin } from '../admin' // project is initialized before importing

const signInwithTokenURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[API_KEY]'
const lookUpUserURL = 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=[API_Key]'

const signIn = functions.https.onRequest(async (request, response) => {
  const creds = request.body
  creds.returnSecureToken = true

  const userRecord = await admin.auth().getUserByEmail(creds.email)
  if (!userRecord.uid) {
    response.status(403).json({ error: "Cannot find user record" })
    return;
  }

  let customToken: string;
  try {
    customToken = await admin.auth().createCustomToken(userRecord.uid)
    if (!customToken) throw new Error('Cannot find custom token')
  } catch (error) {
    response.status(403).json({ error: error, message: "User cannot be authenticated" })
    return;
  }

  // log the user in to retrieve idToken and refresh token
  APIRequest(signInwithTokenURL, {
    headers: {
      'Content-Type': "application/json"
    },
    method: 'POST',
    body: JSON.stringify({ "token": customToken, "returnSecureToken": true })
  }, (error, res) => {
    if (error) return response.send(error.message)
    let session = JSON.parse(res.body)

    if (!session.error) {
      session = {...JSON.parse(res.body), customToken}
      
      // confirm the user is verified and account belongs to the project
      return APIRequest(lookUpUserURL, {
        headers: {
          'Content-Type': "application/json"
        },
        method: 'POST',
        body: JSON.stringify({ idToken: session.idToken })
      }, (err, r) => {
        if (err) {
          console.log('login error: cannot retrieve account info', err.message)
          return response.send(err.message)
        }
        const userData = JSON.parse(r.body)
        if (!userData.error) {
          if (userData.users[0].emailVerified) {
            // update user document with last login time
            const userRef = admin.firestore().doc(`users/${userRecord.uid}`);
            await userRef.update({lastLoginAt: userData.users[0].lastLoginAt})
            return response.json({ session, user: userRecord })
          } else {
            return response.status(422).json({
              error: 'Account unverified. Please check email to verify account',
              user: userRecord,
              idToken: session.idToken
            })
          }
        } else {
          console.warn('get userData error', userData);
          return response.status(400).json({ error: userData })
        }
      })
    } else {
      response.status(400)
      return response.json(JSON.parse(res.body))
    }
  })
})