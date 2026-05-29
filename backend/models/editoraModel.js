import pool from "../db/database.js";

class EditoraModel {

    async showEditoras() {
        const [rows] = await pool.query("SELECT * FROM editoras;");
        return rows;
    }

    async getEditoraById(id) {
        const [rows] = await pool.query("SELECT * FROM editoras WHERE id_editora = ?;", [id]);
        return rows[0];
    }

    async getEditoraByEmail(email) {
        const [[row]] = await pool.execute("SELECT * FROM editoras where email = ?;", [email]);
        return row
    }

    async createEditora(editoraData) {
        const { nome, email, telefone, data_cadastro } = editoraData;
        const [row] = await pool.execute("INSERT INTO editoras nome=?,email=?,telefone=?,data_cadastro=?;", [nome, email, telefone, data_cadastro]);
        return row
    }

    async updateEditora(id, editoraData) {
        const { nome, email, telefone, data_cadastro } = editoraData;
        const [row] = await pool.execute("UPDATE editoras SET nome=?,email=?,telefone=?,data_cadastro=? WHERE id_editora = ?;", [nome, email, telefone, data_cadastro, id]);
        return row
    }

    async deleteEditora(id) {
        const [row] = await pool.execute("DELETE FROM editoras where id_editora=?;", [id]);
        return row;
    }
}

export default new EditoraModel();