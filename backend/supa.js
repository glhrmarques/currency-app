import { createClient } from '@supabase/supabase-js';
import { Router } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

const router = Router();

//router.get('/test-supabase', async (req, res) => {
//    try {
//        const { data, error } = await supabase.from('customer_purchases').select('*').limit(1);
//
//        if (error) {
//            console.log('Supabase error:', error);
//            return res.status(500).json({ connected: false, error: error.message });
//        }
//
//        res.json({ connected: true, data });
//    } catch (err) {
//        console.error('Connection error:', err);
//        res.status(500).json({ connected: false, error: err.message });
//    }
//});

router.post('/send-value', async (req,res) => {
    
    const { arsSubmit } = req.body; 

    try {

        const { data, error } = await supabase.from('customer_purchases').insert([
            {ars_value: arsSubmit}
        ]);

        if (error) {
            res.status(500).json({error: error.message});
            return;
        }

        console.log('data sent', data);

    } catch (err) {
        console.error(err)
    }
});

export default router;