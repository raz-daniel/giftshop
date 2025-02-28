import { Router } from "express";
import { createPresent } from "../controllers/present/controller";



const newRouter = Router()

newRouter.post('/', createPresent)

export default newRouter