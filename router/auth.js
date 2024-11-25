import { Router } from "express";
import schemaSignIn from "../schemas/auth/signIn.js";
import {validator} from "../middlewares/validator.js";
import signIn from "../controllers/auth/signIn.js";
import signInGoogle from "../controllers/auth/signInGoogle.js";
import signOut from "../controllers/auth/signOut.js";
import accountNoExists from "../middlewares/accountNoExists.js";
import isValidPassword from "../middlewares/isValidPassword.js";
import generateToken from "../middlewares/generateToken.js";
import passport from "../middlewares/passport.js";
import passportGoogle from "../middlewares/passportGoogle.js";


const routerAuth = Router()

routerAuth.post('/signIn',validator(schemaSignIn) ,accountNoExists,isValidPassword,generateToken,signIn)
routerAuth.post('/signOut', passport.authenticate('jwt', { session: false }), signOut)

routerAuth.get(
    '/signIn/google',
    passportGoogle.authenticate('google', { session: false, scope: ['profile', 'email'] })
)
routerAuth.get(
    '/signIn/google/callback',
    passportGoogle.authenticate('google', { session: false, failureRedirect: '/login' }),
    generateToken,
    signInGoogle
)


export default routerAuth