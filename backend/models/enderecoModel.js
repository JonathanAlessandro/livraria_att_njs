import pool from "../db/database.js";


class EnderecoModel{

    async createEndereco(){
        const{logradouro, numero, complemento, bairro, cidade, estado, cep} = enderecoData;
        const [result] = await pool.query("INSERT INTO enderecos (logradouro, numero, complemento, bairro, cidade, estado, cep) VALUES (?,?,?,?,?,?,?);",
            [logradouro, numero, complemento, bairro, cidade, estado, cep]);

        return result;
    }

    async selectEnderecoByCep(cep){
        const [rows] = await pool.query("SELECT * FROM enderecos WHERE cep = ?;", [cep]);
        return rows;
    }

}

export default new EnderecoModel();