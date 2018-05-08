import * as express from 'express';

import { UserService } from './user.service';

const userService = new UserService();

const controller = express.Router();

controller.get('/', async (req, res) => {
  const query = req.body;
  const properties = await userService.listUsers(query, req.query.offset, req.query.limit);
  res.send(properties);
});

controller.post('/', async (req, res) => {
  const query = req.body;
  const generatedID = await userService.insertUser(query);
  res.send(generatedID);
});

export { controller as UserController };
