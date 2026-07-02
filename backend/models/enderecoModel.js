import pool from "../db/database.js";


class EnderecoModel{

    async createEndereco(){
        const{logradouro, numero, complemento, bairro, cidade, estado, cep} = enderecoData;
        const [result] = await pool.query("INSERT INTO enderecos (logradouro, numero, complemento, bairro, cidade, estado, cep) VALUES (?,?,?,?,?,?,?);",
            [logradouro, numero, complemento, bairro, cidade, estado, cep]);

        return result;
    }


}

export default new EnderecoModel();