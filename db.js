import express from 'express';
import dotenv from 'dotenv';

dotenv.config()

const app = express();
const PORT = 4040;

app.get('/', (req, res) => {
    res.send("testing server");
});

app.listen(PORT, console.log(`Server is running in http://localhost:${PORT}`));