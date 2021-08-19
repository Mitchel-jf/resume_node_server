require('dotenv').config();
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import path from 'path'
import middleware from './middleware';
import api from './api';
import invalidRoute from './errors/route';
import error from './errors';
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable('x-powered-by');

app.use(cookieParser());

// 3rd party middleware
app.use(cors({
    exposedHeaders: ["links"]
}));

app.use('/static', express.static('/Users/mac/Documents/Projects/Node.js/HNG/resume_node_server/flutter_web'))
console.log(path.join(__dirname, 'flutter_web'))

// internal middleware
// app.use('/api',middleware());

// api router
app.use('/api', api());
// error handle
app.use(invalidRoute());
app.use(error);
export default app;