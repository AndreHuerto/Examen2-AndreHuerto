import { pool } from '../database'
const helpers = require('../libs/helpers');


export const readAllUsers = async(req, res)=>{
    try {
        const response = await pool.query('select *from usuario');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
export const readUser = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select *from usuario where idusuario=$1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
export const delUser = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from usuario where idusuario=$1', [id]);
        return res.status(200).json(
            `Usuario ${ id } eliminado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}
export const updateUser = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const{ username, password} = req.body;
        await pool.query('update usuario set username=$1, password=$2 where idusuario=$3', [username, password, id]);
        return res.status(200).json(
            `Usuario ${ id } modificado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}

export const createUser = async(req, res)=>{
    try {
        const{idempleado, username, password ,idrol } = req.body;
        const password2 = await helpers.encryptPassword(password);
        await pool.query('insert into usuario(idempleado, username , password , idrol ) values($1,$2,$3,$4)', [idempleado, username, password2, idrol ]);
        return res.status(200).json(
            `Usuario ${ username } creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}