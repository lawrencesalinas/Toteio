const express = require('express')
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)
const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      customer_email: req.body.email,
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: req.body.orderItems.map((item) => {
        console.log(item)

        console.log(`${process.env.SERVER_URL}/${item.imgUrl}`, 'qqqqq')
        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: item.title,
              images: [`${process.env.SERVER_URL}${item.imgUrl}`],
              // metadata: {
              //   id: item.id,
              // },
            },
            unit_amount: item.price * 100,
          },
          quantity: item.orderItem.quantity,
        }
      }),
      shipping_address_collection: {
        allowed_countries: ['US', 'CA'],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 0,
              currency: 'usd',
            },
            display_name: 'Free shipping',
            // Delivers between 5-7 business days
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 5,
              },
              maximum: {
                unit: 'business_day',
                value: 7,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 1500,
              currency: 'usd',
            },
            display_name: 'Next day air',
            // Delivers in exactly 1 business day
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 1,
              },
              maximum: {
                unit: 'business_day',
                value: 1,
              },
            },
          },
        },
      ],
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/success`,
      // automatic_tax: { enabled: true },
    })

    res.send({ url: session.url })
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
