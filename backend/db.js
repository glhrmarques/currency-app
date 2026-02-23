import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import currencyRoutes from './routes/currencies.js';
import supaRoutes from './supa.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 4040;

app.use(cors());
app.use(express.json()); //midlleware 
app.use(express.static(path.join(__dirname, '..', 'frontend')));

app.use('/currencies', currencyRoutes);

app.use(supaRoutes)

app.listen(PORT, () => console.log(`Server is running in http://localhost:${PORT}`));