import pool from "../db/database.js";

class UserModel {
    async showUsers(){
        const query = `SELECT * FROM users;`
        const [rows] =  await pool.execute(query);
        return rows;
    }

    async selectUserById(id){
        const query = `SELECT * FROM users where user_id=?;`
        const [rows] =  await pool.execute(query,[id]);
        return rows[0];
    }

    async userByEmail(email,id=0){
        const query = `SELECT * FROM users where user_email=? and user_id != ?;`
        const [row] =  await pool.execute(query,[email,id]);
        return row[0];
    }

    async createUser(userData){
        const {user_name,user_email,user_password,user_phone,role_id,user_status} = userData
        const query = `INSERT INTO users (user_name,user_email,user_password,user_phone,role_id,user_status) VALUES (?,?,?,?,?,?); `
        const [rows] = await pool.execute(query,[user_name,user_email,user_password,user_phone,role_id,user_status]);
        return rows;
    }

    async updateUser(id,userData){
        const {user_name,user_email,user_password,user_phone,role_id,user_status} = userData
        const query = `UPDATE users SET user_name=?,user_email=?,user_password=?,user_phone=?,role_id=?,user_status=? WHERE user_id=?;`
        const [rows] = await pool.execute(query,[user_name,user_email,user_password,user_phone,role_id,user_status,id]);
        return rows;
    }

    async deleteUser(id){
        const query = `DELETE FROM users where user_id=?;`
        const [rows] = await pool.execute(query,[id]);
        return rows;
    }
}