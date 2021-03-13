import {map} from 'lodash'

const stripeUrl = 'https://api.stripe.com/v1/'
const publicStripeKey = 'your stripe public key'

export const createPaymentMethod = async () => {
   // get form data: react native or react
   const { cardNumber, expiryMonth, expiryYear, cvc } = this.state // or event.target.elements;
  
   getCardToken(cardNumber, expiryMonth, expiryYear, cvc)
     .then(token => endpointToYourServer({token}) )
     .catch(error => console.error('something went wrong'))
}

const getCardToken = (cardNumber, expiryMonth, expiryYear, cvc) => {
  const cardDetails = {
    'card[number]': cardNumber,
    'card[exp_month]': expiryMonth,
    'card[exp_year]': expiryYear,
    'card[cvc]': cvc,
  }

  const formBody = map(cardDetails, (value, key) => {
    const encodedValue = encodeURIComponent(value)
    const encodedKey = encodeURIComponent(key)
    return `${encodedKey}=${encodedValue}`
  }).join('&')

  return fetch(`${stripeUrl}tokens`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${publicStripeKey}`,
    },
    body: formBody,
  })
    .then(response => response.text())
    .then(responseText => JSON.parse(responseText).id)
}