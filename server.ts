import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './config/db';
import userRoutes from './routes/userRoutes';
import { globalExceptionFilter } from './middlewares/globalExceptionFilter';
import { setupSwagger } from './config/swagger';

dotenv.config();
connectDB();

const app: Application = express();

setupSwagger(app);

app.use(cors());

app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));
app.use('/api', userRoutes); 

app.use(globalExceptionFilter);

const PORT = process.env.PORT || 3033;
app.listen(PORT, () => {
  console.log(`Server running on \x1b[35mhttp://localhost:${PORT}\x1b[0m`);

  console.log(`API documentation available at \x1b[35mhttp://localhost:${PORT}/api-docs\x1b[0m`);
});
