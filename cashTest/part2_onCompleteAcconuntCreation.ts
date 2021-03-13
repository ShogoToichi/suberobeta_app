import { Request, Response } from "express";
import { check, validationResult } from 'express-validator/check';
import * as  Request from 'request-promise-native'
import { StripeConfig } from './config'
import { admin } from './admin' // already initialized

const onCompleteAccountCreation = async (req: Request, res: Response) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }

    const { authorizationCode } = req.body
    try {
        const user = await admin.firestore().collection('users').doc(req.user.uid).get()
        if (user.exists) {
            const resp = await driverStripeAccount(authorizationCode)
            if (resp.error) {
                return res.status(400).json({ error: resp.error_description })
            }
            // add the stripe account Id to the user record (integrated business)
            await user.ref.update({ stripe_account_id: resp.stripe_user_id });
            return res.json({ message: "Stripe Account Connection Completed." })
        }
        return res.status(400).json({ error: "User not found." })
    } catch (err) {
        console.error(err)
        return res.status(400).json({ error: err.message })
    }
}

// confirm that the authorizationCode belongs to an account on our platform
async function driverStripeAccount(authorizationCode: string) {
    const options = {
        method: 'POST',
        uri: StripeConfig.tokenAPI,
        body: {
            client_secret: StripeConfig.secretKey,
            code: authorizationCode,
            grant_type: 'authorization_code'
        },
        json: true
    }
    
    return await Request(options)
}

export { onCompleteAccountCreation }