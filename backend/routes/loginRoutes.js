import express from "express";
import authLoginController from "../controllers/authLoginController.js";
import {authenticationToken}  from "../middlewares/authLoginMiddleware.js";

const loginRoute = express.Router();

loginRoute.post("/login", authLoginController.login);


export default loginRoute;