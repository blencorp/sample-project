"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const dataPath = (0, path_1.resolve)(__dirname, 'data.json');
const rawData = (0, fs_1.readFileSync)(dataPath, 'utf-8');
const { clients } = JSON.parse(rawData);
exports.resolvers = {
    Query: {
        clients: () => clients,
    },
};
