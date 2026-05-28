import { message } from "statuses";
import editoraModel from "../models/editoraModel";

class EditoraController{
    async getAllEditoras(req, res) {
        const allEditoras = await editoraModel.showEditoras();
        if (allEditoras.length === 0) {
            return res.status(404).json();
        }
        return res.json(allEditoras);
    }

    async getEditoraById(req, res) {
        const id = Number(req.params.id);
        const findEditora = await editoraModel.getEditoraById(id);
        if (!findEditora) {
            return res.status(404).json();
        }
        return res.json(findEditora);
    }

    async addEditora(req,res){
        const { nome, email, telefone, data_cadastro } = req.body;

        if(!nome || !email || !telefone || !data_cadastro){
            return res.json({message: "Todos os campos são obrigatorios!"});
        }

        const createEditora = await editoraModel.createEditora(req.body);

        if (createEditora.affectedRows === 0) {
            return res.json({message: "Não foi possível cadastrar editora!"})
        }

        return res.status(201).json({message: "Editora cadastrada com sucesso!"})
    }
}