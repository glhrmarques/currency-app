import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config()

const app = express();
const PORT = 4040;

app.get('/currencies', async (req,res) => {

    const arsPeso = "ars"
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${arsPeso}.json`

    try {

        const response = await axios.get(url);
        const rate = response.data.ars.brl;

        const amountInARS = 12000;
        const amountInBRL = amountInARS * rate;

        console.log(amountInBRL.toFixed(2));
        res.json(response.data)

    } catch (error) {
        console.error(error)
    }

})

app.listen(PORT, console.log(`Server is running in http://localhost:${PORT}`));