import User from "../models/UserSchema.js"
import Doctor from "../models/DoctorSchema.js"
import Booking from "../models/BookingSchema.js"
import Stripe from 'stripe'

export const getCheckoutSession = async (req, res) => {
    try {


        const doctor = await Doctor.findById(req.params.doctorId)
        const user = await User.findById(req.userId)

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            success_url: `${process.env.CLIENT_SIDE_URL}/checkout-success`,
            cancel_url: `${req.protocol}://${req.get('host')}/doctor/${doctor.id}`,
            customer_email: user.email,
            client_reference_id:req.params.doctorId,
            line_items: [
                {
                    price_data:{
                        currency: 'inr',
                        unit_amount: doctor.appointmentFee * 100,
                        product_data: {
                            name: doctor.name,
                            description: doctor.bio,
                            images: [doctor.photo]
                        }
                    },
                    quantity: 1
                }
            ]
        })


        const booking = new Booking({
            doctor: doctor._id,
            user: user._id,
            appointmentFee: doctor.appointmentFee,
            session:session.id
        })

        await booking.save()

        res.status(200).json({success: true, message: 'Successfully paid', session})

    } catch (err) {
        res.status(500).json({success: false, message: "Error creating checkout session"})
    }
}
