import { Router } from "express"
import { login,logout,signup } from "../controller/authcontroller.js"
import { signupValidation, loginValidation } from "../middleware/Authvalidation.js"

export const AuthRouter = Router()
AuthRouter.post('/login', loginValidation, login)

AuthRouter.post('/signup', signupValidation, signup)


AuthRouter.post('/logout', logout)