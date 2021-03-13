import {stripe} from './stripe-util'
import {admin} from '../admin'
import {DocumentSnapshot} from "firebase-functions/lib/providers/firestore";

export async function handleTransaction(chargeId: string, transactionStatus: string, customer: DocumentSnapshot) {
  let charge: any;
  switch (transactionStatus) {
    case 'COMPLETED':
      charge = await captureCharge(chargeId)
      break
    case 'SOME_INTERMEDIATE_STATUS'
      charge = await capturePartialCharge(chargeId, {amount: $xyz})
      break
    default:
      charge = await refundCharge(chargeId)
  }
  // perform further actions on `charge` such as saving to a collection or subcollection
  admin.firestore().collection(`users/${customer.id}/charges`).doc(chargeId).set({...charge, status: transactionStatus})
}

async function captureCharge(chargeId: string) {
  try {
    return await stripe.charges.capture(chargeId)
  } catch( err) {
    throw err
  }
}

async function capturePartialCharge(chargeId: string, data: any) {
  try {
    if (data.amount) data.amount = Math.round(data.amount)
    return await stripe.charges.capture(chargeId, data)
  } catch( err) {
    throw err
  }
}

async function refundCharge(chargeId: string) {
  try {
    // you can choose to refund application_fee as well
    await stripe.refunds.create({ charge: chargeId, reverse_transfer: true, refund_application_fee: true })
  } catch (err) {
    throw err
  }
}