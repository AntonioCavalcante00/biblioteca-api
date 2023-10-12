import { Router } from 'express';
import { UsuarioController } from '../controller';

const router = Router();

router.get('/', UsuarioController.getAllUser);
router.post('/', UsuarioController.createUser);
router.delete('/', UsuarioController.deleteByIdUser);
router.put('/', UsuarioController.updateUser);

export { router };