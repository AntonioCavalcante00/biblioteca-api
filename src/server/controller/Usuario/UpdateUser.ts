import { Request, Response } from 'express';
import { db } from '../../database/db';

export const updateUser = async (req: Request, res: Response): Promise<void> => {

  const q = 'UPDATE usuario SET `id`= ?, `Aluno` = ?, `Serie` = ?, `Livro`= ?, `Cadastro_Data`= ?, `Expicao_Data`= ? WHERE `id` = ?';

  const Dados = [
    req.body.id,
    req.body.Aluno,
    req.body.Serie,
    req.body.Livro,  
    req.body.Cadastro_Data,
    req.body.Expicao_Data,
  ];

  await db.query(q, [...Dados, req.body.id], (err) => {
    if (err){
      return res.status(404).json(err);
    } else {
      return res.status(200).json('Aluno Atualizado com Sucesso!');
    }
  });

};