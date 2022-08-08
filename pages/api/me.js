import nc from 'next-connect'
import { currentUser } from '../../controllers/authController'
import { isAuthenticatedUser } from '../../middleware/auth'
import dbConnect from '../../utils/dbConnect'
import onError from '../../middleware/errorMiddleware'


const handler = nc({ onError })

dbConnect()

handler.use(isAuthenticatedUser).get(currentUser)

export default handler