"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const app = express_1.default();
var path = require('path');
//middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false })); // para poder tener datos de un html
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use('/', express_1.default.static('client', { redirect: false }));
app.use(indexRoutes_1.default);
app.get('*', function (req, res, next) {
    res.sendFile(path.resolve('client/index.html'));
});
app.listen(3001, () => {
    console.log('server on port ', 3001);
});
