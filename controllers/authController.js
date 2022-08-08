import User from "../models/User";
import asyncHandler from "express-async-handler";


const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    const user = await User.create({
        name,
        email,
        password
    })

    res.status(200).json({
        success: true,
        message: "registered User"
    })
}) 


const currentUser = asyncHandler(async (req, res) => {

    if (!req.user) { 
        return res.status(401).json({
            success: false,
            message: "Unauthorized"
        })
    }

    const user = await User.findById(req.user._id)
    res.status(200).json({
        success: 'true',
        user
    })

}) 


export {
    register,
    currentUser
}