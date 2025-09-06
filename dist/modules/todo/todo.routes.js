"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_controllers_1 = __importDefault(require("./todo.controllers"));
const router = (0, express_1.Router)();
router.get("/get-all", todo_controllers_1.default.getAllData);
router.post("/create", todo_controllers_1.default.createData);
// router.patch("/update/:id", todoControllers.updateData);
router.delete("/delete/:id", todo_controllers_1.default.deleteData);
exports.default = router;
