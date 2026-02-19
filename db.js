import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config()

const app = express();
const PORT = 4040;

app.get('/currencies', async (req,res) => {

    const url = process.env.API_URL

    try {

        const response = await axios.get(url)
        res.json(response.data);

    } catch (error) {
        console.error(error)
    }

})

app.listen(PORT, console.log(`Server is running in http://localhost:${PORT}`));