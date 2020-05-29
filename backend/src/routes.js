const express = require('express');

const TreinadorController = require('./constrollers/TreinadorController');
const AlunoController = require('./constrollers/AlunoController');
const ProfileController = require('./constrollers/ProfileController');
const LoginController = require('./constrollers/LoginController');

const routes = express.Router();

routes.post('/login', LoginController.create);


routes.post('/treinador', TreinadorController.create);
routes.get('/treinador', TreinadorController.index);

routes.get('/profile', ProfileController.index);

routes.post('/alunos', AlunoController.create);
routes.get('/alunos', AlunoController.index);
routes.delete('/alunos/:id', AlunoController.delete);

module.exports = routes;  