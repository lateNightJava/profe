import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';

import routes from './routes/index.js';

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// Define Routes
app.use('/api/user', routes.usersRoutes);

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});

export default app;
