import { pool } from '../database'

export const readAllDetalle = async(req, res)=>{
    try {
        const response = await pool.query('select * from detalle');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}