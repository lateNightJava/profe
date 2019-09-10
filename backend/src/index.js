import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from './routes/index.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('connected to database'));

// app.get('/', (req, res) => res.send('Hello, Guey'));
app.use('/user', routes.usersRoutes);

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
  console.log(process.env.API_KEY);
});

export default app;
