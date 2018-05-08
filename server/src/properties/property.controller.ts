import * as express from 'express';

import { PropertyService } from './property.service';

const propertyService = new PropertyService();

const controller = express.Router();

controller.get('/', async (req, res) => {
  const query = req.body;
  const properties = await propertyService.listProperties(query, req.query.offset, req.query.limit);
  res.send(properties);
});

controller.post('/', async (req, res) => {
  const query = req.body;
  const generatedID = await propertyService.insertProperty(query);
  res.send(generatedID);
});

export { controller as PropertyController };
