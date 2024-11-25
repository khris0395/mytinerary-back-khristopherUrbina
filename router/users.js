import {Router} from "express";
import { allUsers, usersByName, userById, validUser} from "../controllers/users/read.js";
import { register, registerUsers } from "../controllers/users/register.js";
import { updateName, updateRole } from "../controllers/users/update.js";
import { deleteById } from "../controllers/users/delete.js";
import {schemaRegisterUser, schemaRegisterUsers} from "../schemas/users/register.js";
import {validator} from "../middlewares/validator.js";
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";
import passport from "../middlewares/passport.js";
import { schemaUpdateRole, schemaUpdateName } from "../schemas/users/update.js";
import schemaDeleteById from "../schemas/users/delete.js";

const routerUsers = Router()

routerUsers.get("/allUsers",passport.authenticate('jwt',{session:false}), allUsers)
routerUsers.get("/name/:x",passport.authenticate('jwt',{session:false}), usersByName)
routerUsers.get("/id/:id",passport.authenticate('jwt',{session:false}), userById)
routerUsers.get("/validateToken", passport.authenticate('jwt',{session:false}), validUser)
routerUsers.post("/register",validator(schemaRegisterUser), accountExists, createHash, register)
routerUsers.post("/registerUsers", validator(schemaRegisterUsers), registerUsers)
routerUsers.put("/updateName",passport.authenticate('jwt',{session:false}), validator(schemaUpdateName), updateName)
routerUsers.put("/updateRole",passport.authenticate('jwt',{session:false}), validator(schemaUpdateRole), updateRole)
routerUsers.delete("/deleteById",passport.authenticate('jwt',{session:false}), validator(schemaDeleteById), deleteById)

export default routerUsers