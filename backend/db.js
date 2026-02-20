import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 4040;

app.use(express.static(path.join(__dirname, '..')));

app.get('/currencies/ars', async (req,res) => {

    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/ars.json`

    try {

        const response = await axios.get(url);
        res.json(response.data);

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Failed to fetch ARS currency data" });

    }
});

app.get('/currencies/brl', async (req,res) => {

    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/brl.json`
    
    try {

        const response = await axios.get(url);
        res.json(response.data);

    } catch(error) {
        console.log(error);
        res.status(500).json({error: "Failed to fetch BRL currency data"})
    }
})

app.listen(PORT, console.log(`Server is running in http://localhost:${PORT}`));