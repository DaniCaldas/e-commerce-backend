import { Router } from "express"
import { getItems, postItem, deleteItem } from "../controller/UseController"

export const router = Router()    

router.get("/carrinho", getItems)
router.post("/carrinho", postItem)
router.delete("/carrinho/:id", deleteItem)