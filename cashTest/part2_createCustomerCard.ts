import * as _ from 'lodash'
import * as Stripe from 'stripe'
import { Request, Response } from "express";
import {admin} from '../admin' // already initialized
import { isDefaultCard, stripe } from './stripe-util'

export const addPaymentMethod = async (req: Request, res: Response) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }

  try {
    const { token } = req.body
    // get the stripe customer id
    const user = await admin.firestore().collection('users').doc(req.user.uid).get()
    const customerId = user.get('customerId')

    // link the card to the customer
    const card = await createCard(customerId, token)
    await saveCard(customerId, user.id, card)

    // mark the customer as having a valid payment method
    await user.ref.update({ "hasPaymentMethod": true })
    return res.json({ message: "Payment Method Added Successfully." })
  } catch (err) {
    console.error(err)
    return res.status(400).json({ error: "Unable to Add Payment Method." })
  }
}

async function createCard(customerId: string, source: string) {
  try {
    return await stripe.customers.createSource(customerId, { source })
  } catch (err) {
    throw err
  }
}

async function saveCard(customerId: string, userId: string, source: Stripe.IStripeSource) {
  const card = _.pick(source, ['brand', 'exp_month', 'exp_year', 'last4', 'funding'])
  card.default = await isDefaultCard(customerId, source.id);
  await admin.firestore().collection(`users/${userId}/cards`).doc(source.id).set({ ...card })
}

async function isDefaultCard(customerId: string, cardId: string) {
  try {
    const customer = await stripe.customers.retrieve(customerId)
    return customer.default_source === cardId
  } catch(err) {
    throw err
  }
}