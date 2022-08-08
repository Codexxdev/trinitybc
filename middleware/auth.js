import { getSession } from 'next-auth/react'
import asyncHandler from "express-async-handler";
import ErrorHandler from "../middleware/errorHandler"
import Catch from "./catch"




const isAuthenticatedUser = asyncHandler(async (req, res, next) => {
    try {
        const session = await getSession({ req })
        if (!session) {
            throw new Error('login first to access this resource')
        }

        req.user = session.user;
        next()
    } catch (error) {
        return next(new ErrorHandler('login first to access this resource', 200))
    }

})

const authorizeRoles = (...roles) => {
        return (req, res, next) => {
            if (!roles.includes(req.user.role)) {
                throw new Error(`Role (${req.user.role}) is not allowed to access this resource`)
            }
            next()
        }

}


export {
    isAuthenticatedUser,
    authorizeRoles
}