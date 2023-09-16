import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { response } from 'express';
import allRoutes from './routes'



dotenv.config();

// iniciamos una instacia de express

const app = express();

//origenes permitidos
const corsOptions = {

    origin: '*'
}

app.use(cors(corsOptions));
app.use(express.json());

//asociar rutas
app.use("/api",allRoutes);


export default app;





