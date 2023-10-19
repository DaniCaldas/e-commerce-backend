"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const UseController_1 = require("../controller/UseController");
exports.router = (0, express_1.Router)();
exports.router.get("/carrinho", UseController_1.getItems);
exports.router.post("/carrinho", UseController_1.postItem);
exports.router.delete("/carrinho/:id", UseController_1.deleteItem);
