import { pool } from '../database'

export const readAllMatricula = async(req, res)=>{
    try {
        const response = await pool.query('select * from matricula');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}
export const readMatricula = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from matricula where idmatricula = $1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}

export const delMatricula = async(req, res)=>{
    try {
        const idd = parseInt(req.params.id);
        const response = await pool.query('delete from matricula where idmatricula = $1', [idd]);
        return res.status(200).json(
            `matricula ${ id } eliminado correctamente...!` //alt 96
        );
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}

export const updateMatricula = async(req, res)=>{
    try {
        const idproductos = parseInt(req.params.id);
        const{ fecha, ciclo} = req.body;
        await pool.query('update matricula set fecha = $1, ciclo = $2 where idproducto = $3', [fecha, ciclo, idproductos]);
        return res.status(200).json(
            `matricula modificada correctamente...!` //alt 96
        );
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}

export const createMatricula = async(req, res)=>{
    try {
        const{ idmatricula, fecha, ciclo,idusuario,idempleado,idescuela,idalumno } = req.body;
        await pool.query('insert into matricula(idmatricula, fecha, ciclo , idusuario , idempleado , idescuela , idalumno) values($1,$2,$3,$4,$5,$6,$7)', [idmatricula, fecha, ciclo,idusuario,idempleado,idescuela,idalumno]);
        return res.status(200).json(
            `La matricula con id: ${ idmatricula } se ha agregado correctamente...!` //alt 96
        );
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}