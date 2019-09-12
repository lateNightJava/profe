import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';

import routes from './routes/index.js';

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());

// app.get('/', (req, res) => res.send('Hello, Guey'));
app.use('/user', routes.usersRoutes);

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
  console.log(process.env.API_KEY);
});

export default app;
