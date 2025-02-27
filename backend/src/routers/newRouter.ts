import { Router } from "express";
import { createPresent } from "../controllers/present/controller";



const newRouter = Router()

newRouter.get('/new', )
newRouter.post('/home', createPresent)

export default newRouter