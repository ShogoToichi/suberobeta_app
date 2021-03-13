import { stripe } from './stripe-util'

export async function preAuthorizeCharge(customer: string, amount: number, accountId: string, metadata: any = {}) {
  const percentageOfTransaction = 0.05 // percentage charge on a business for using the platform
  const application_fee_amount = Math.round((amount * percentageOfTransaction) * 100) 
  const cost = Math.round(amount * 100);
  const descriptor = 'brief description of transaction';
  const description = 'a more detailed description' 

  try {
    const charge = await stripe.charges.create({
      customer: customer.stripe_customer_id,
      amount: cost,
      application_fee_amount,
      description,
      statement_descriptor: descriptor,
      currency: 'usd',
      transfer_data: {
        destination: accountId // <-- this is where you specify the business accountId
      },
      metadata,
      capture: false,
      receipt_email: customer.email
    })

    return charge
  } catch (err) {
    throw err
  }
}