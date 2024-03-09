"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express = require('express');
const { join } = require('node:path');
const { Server } = require('socket.io');
const app = express();
const server = http_1.default.createServer(http_1.default);
const io = new Server(server);
io.on('connection', (socket) => {
    console.log('a user connected');
});
app.listen(3000, () => {
    console.log('listening on *:3000');
});
