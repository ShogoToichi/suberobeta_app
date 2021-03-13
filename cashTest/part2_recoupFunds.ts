import {stripe, StripeConfig} from './stripe-util'

/**
 * Used to charge vendor's accounts on Stripe such as payment for a service
 */
export async function chargeConnectedAccount(source: string, amount: number, description: string, metadata: any = {}) {

    const cost = Math.round(amount * 100)
    const descriptor = 'transaction descriptor'
  
    try {
      const payment = await stripe.charges.create({
        amount: cost,
        currency: 'usd',
        source,
        description,
        statement_descriptor: descriptor,
        metadata,
      })
 
      return payment
    } catch (err) {
      throw err
    }
}

/**
 * Effect a no tax transfer from vendor to platform account.
 * Useful in recouping a previous cost made to the vendor account.
 */
export async function transferFromConnectedAccount(source: string, amount: number) {

    const cost = Math.round(amount * 100)
    try {
        const transfer = stripe.transfers.create(
            {
              amount: cost,
              currency: 'usd',
              destination: StripeConfig.platform_id
            },
            {stripe_account: source}
          );

        return transfer
    } catch (error) {
        throw error
    }
}