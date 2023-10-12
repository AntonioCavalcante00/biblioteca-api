import * as createUser from './CreateUser';
import * as deleteByIdUser from './DeleteUser';
import * as getAllUser from './GetAllUser';
import * as updateUser from './UpdateUser'


export const UsuarioController = {
  ...createUser,
  ...deleteByIdUser,
  ...getAllUser,
  ...updateUser
};