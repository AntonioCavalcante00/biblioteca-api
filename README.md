# api-biblioteca

### Olá a todos, aqui vai um commit sobre um API CRUD de uma um projeto que estou desenvolvendo sobre uma biblioteca, utilizando TypeScript juntamente com o Banco de Dados Mysql.


ROTAS:
```
router.get('/', UsuarioController.getAllUser);
router.post('/', UsuarioController.createUser);
router.delete('/', UsuarioController.deleteByIdUser);
router.put('/', UsuarioController.updateUser);
```


> *Todos os Middleware foram puxados do controller/usuario*
> 
> *Também uma validação simples criando uma Function do db.query()*
