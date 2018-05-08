import * as cors from 'cors';
import * as express from 'express';

import { PropertyController } from './properties/property.controller';
import { UserController } from './users/user.controller';

import mongoose = require('mongoose');

const app = express();
//mongoose database connection on localhost
mongoose.connect('mongodb://localhost:27017/node-angular');

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/properties', PropertyController);
app.use('/api/users', UserController);

app.listen(3000, () => console.log('Server started at http://localhost:3000/'))
