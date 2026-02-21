import { Router } from 'express';
import axios from 'axios';

const router = Router();

router.get('/ars', async (req, res) => {
    const url = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/ars.json';
    try {
        const response = await axios.get(url);
        res.json(response.data.ars.brl);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch ARS currency data' });
    }
});

router.get('/brl', async (req, res) => {
    const url = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/brl.json';
    try {
        const response = await axios.get(url);
        res.json(response.data.brl.ars);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch BRL currency data' });
    }
});

export default router;