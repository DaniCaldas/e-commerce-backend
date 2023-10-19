"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.postItem = exports.getItems = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield prisma.carrinho.findMany();
    return res.json(items);
});
exports.getItems = getItems;
const postItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { url, produto, valor } = req.body;
    const items = yield prisma.carrinho.create({
        data: {
            url,
            produto,
            valor
        }
    });
    return res.json(items);
});
exports.postItem = postItem;
const deleteItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const item = yield prisma.carrinho.delete({
        where: {
            id
        }
    });
    return res.json(item);
});
exports.deleteItem = deleteItem;
