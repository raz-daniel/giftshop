import { Router } from "express";
import { deletePresent, getPresents } from "../controllers/present/controller";
import { getCategory } from "../controllers/target-market/controller";



const giftsRouter = Router()

giftsRouter.get('/', getCategory)
giftsRouter.get('/:id', getPresents)
giftsRouter.delete('/:id', deletePresent)

export default giftsRouter