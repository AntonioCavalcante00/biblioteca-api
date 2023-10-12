import { Request, Response} from 'express';
import { db } from '../../database/db';

export const createUser = async (req: Request, res: Response): Promise<void> => {

  const q = 'INSERT INTO usuario(`id`, `Aluno`, `Serie`, `Livro`, `Cadastro_Data`, `Expicao_Data`) VALUES (?)'
  
  const Dados = [
    req.body.id,
    req.body.Aluno,
    req.body.Serie,
    req.body.Livro,  
    req.body.Cadastro_Data,
    req.body.Expicao_Data,
  ];

  

  db.query(q, [Dados], (err) => {
    if (err){
      return res.status(404).json(err);
    } else {
      return res.status(200).json('Aluno Validado com sucesso!');
    }
  });


};