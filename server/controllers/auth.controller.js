import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import config from './../../config/config';
import { expressjwt } from "express-jwt";

const signin = async (req, res) => {
    try {
        let user = await User.findOne({ "email": req.body.email })

        if (!user) {
            return res.status('401').json({ error: "User not found" })
        }

        if (!user.authenticate(req.body.password)) {
            return res.status('401').send({error: "Email and password don't match."})
        }

        const token = jwt.sign({_id: user._id }, config.jwtSecret)

        return res.json({
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        })

    } catch (err) {
        return res.status('401').json({
            error: "Could not sign in"
        });
    }
};
const signout = (req,res) => {
    return res.status(200).json({
        message: "signed out"
    })
};

const requireSignin = expressjwt({
    secret: config.jwtSecret,
    userProperty: 'auth',
    algorithms: ["HS256"]
})



export default { signin, signout, requireSignin };