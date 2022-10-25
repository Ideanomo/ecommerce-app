import User from '../models/user.model';
import dbErrorHandler from './../helpers/dbErrorHandler';

const create = async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        return res.status(200).json({
            message: "Sign up successful"
        });

    } catch (err) {
        return res.status(400).json({
            error: dbErrorHandler.getErrorMessage(err)
        });
    }
};

const userByID = async(req, res, next, id) => {
    try {
        let user = await User.findById(id);

        if (!user) {
            return res.status(400).json({
                error: "User not found"
            })
        }
        req.profile = user;
        next();
    } catch (err) {
        return res.status(400).json({
            error: "Could not retrieve user"
        })
    }
}

const read = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile)
}

export default{ create, read, userByID };