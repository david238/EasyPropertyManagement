import * as express from 'express';

import { UserService } from './user.service';

const userService = new UserService();

const controller = express.Router();

controller.get('/', async (req, res) => {
  const query = req.body;
  const properties = await userService.listUsers(query, req.query.offset, req.query.limit);
  res.send(properties);
});

controller.post('/signup', async (req, res) => {
  const query = req.body;
  const generatedID = await userService.insertUser(query);
  res.send(generatedID);
});

controller.post('/signin', async (req, res) => {
  const query = req.body;
  const selectedUser = await userService.getUser(query);
  res.send(selectedUser);
});

export { controller as UserController };
