import express from 'express'
import http from 'http'
import route from './service/route'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import connection from './connection'
dotenv.config()

const APP = express();
const LOG = express();

APP.use(bodyParser.json());
APP.use('/log', LOG)

const SERVER = http.createServer(APP)

route(LOG,connection)

SERVER.listen(5000)