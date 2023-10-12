/* eslint-disable @typescript-eslint/no-unused-vars */
import {Request, Response} from 'express';
import { db } from '../../database/db';


export const getAllUser = async(req: Request, res: Response): Promise<void> =>{ 
    const q = 'SELECT * FROM usuario';
    db.query(q, (err, data) => {
      if(err){
        return res.status(404).json(err);
      }else{
        return res.status(200).json(data);
      } 
    });
};