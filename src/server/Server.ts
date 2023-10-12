import express from 'express';
import { router } from './routes';
import cors from 'cors';


const Server = express();

Server.use(express.json());
Server.use(router);
Server.use(cors());



export { Server };