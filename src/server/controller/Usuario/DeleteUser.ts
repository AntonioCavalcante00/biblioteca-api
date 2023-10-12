import {Request, Response} from 'express';
import { db } from '../../database/db';


export const deleteByIdUser = async(req: Request, res: Response): Promise<void> =>{ 
    const q = 'DELETE FROM aluno.usuario WHERE `id` = ?';

    if (!req.body.id) {
      res.status(400).json({ error: 'ID do usuário não fornecido no corpo da requisição.' });
    }
  
    db.query(q, [req.body.id], (err) =>{
      if(err){
        return res.status(404).json(err);
      }else{
        return res.status(200).json('Aluno Deletado com sucesso!');
      }
    })
};
