import pool from "../db/database";

class CompraModel {

    async showCompras() {
        const [rows] = await pool.query("SELECT * FROM compras;");
        return rows;
    }

    async getCompraById(id) {
        const [rows] = await pool.query("SELECT * FROM compras WHERE id = ?;", [id]);
        return rows[0];
    }

    async createCompra(compraData) {
        const { qtde, valor, desconto, data_compra, id_livro, id_cliente } = compraData;
        const [row] = await pool.execute("INSERT INTO compras qtde=?,valor=?,desconto=?,data_compra=?,id_livro=?,id_cliente=?;", [qtde, valor, desconto, data_compra, id_livro, id_cliente]);
        return row
    }

    async updateCompra(id, compraData) {
        const { qtde, valor, desconto, data_compra, id_livro, id_cliente } = compraData;
        const [row] = await pool.execute("UPDATE compras SET qtde=?,valor=?,desconto=?,data_compra=?,id_livro=?,id_cliente=?;", [qtde, valor, desconto, data_compra, id_livro, id_cliente, id]);
        return row
    }

    async deleteCompra(id) {
        const [row] = await pool.execute("DELETE FROM compras where id=?;", [id]);
        return row;
    }
}

export default new CompraModel();