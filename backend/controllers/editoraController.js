import editoraModel from "../models/editoraModel";

class EditoraController {
    async getAllEditoras(req, res) {
        try {
            const allEditoras = await editoraModel.showEditoras();
            if (allEditoras.length === 0) {
                return res.status(404).json();
            }
            return res.json(allEditoras);
        } catch (error) {
            return res.json({ message: `ocorreu um erro: ${error}` })
        }
    }

    async getEditoraById(req, res) {
        try {
            const id = Number(req.params.id);
            const findEditora = await editoraModel.getEditoraById(id);
            if (!findEditora) {
                return res.status(404).json();
            }
            return res.json(findEditora);
        } catch (error) {
            return res.json({ message: `ocorreu um erro: ${error}` })
        }
    }

    async addEditora(req, res) {
        try {
            const { nome, email, telefone, data_cadastro } = req.body;

            if (!nome || !email || !telefone || !data_cadastro) {
                return res.json({ message: "Todos os campos são obrigatorios!" });
            }

            const createEditora = await editoraModel.createEditora(req.body);

            if (createEditora.affectedRows === 0) {
                return res.json({ message: "Não foi possível cadastrar a editora!" })
            }

            return res.status(201).json({ message: "Editora cadastrada com sucesso!" })
        } catch (error) {
            return res.json({ message: `ocorreu um erro: ${error}` })
        }
    };

    async updateEditora(req, res) {
        try {
            const id = Number(req.params.id);
            const { nome, email, telefone, data_cadastro } = await editoraModel.updateEditora(id);
            if (!nome || !email || !telefone || !data_cadastro) {
                return res.json({ message: "Todos os campos são obrigatorios!" });
            };
            return res.json({ message: "Editora atualizada com sucesso!" });
        } catch (error) {
            return res.json({ message: `ocorreu um erro: ${error}` })
        }
    };

    async deleteEditora(req, res) {
        try {
            const id = Number(req.params.id);
            const deleteLivro = await editoraModel.deleteEditora(id);

            if (deleteLivro.affectedRows === 0) {
                return res.json({ message: "Não foi possível deletar a editora!" })
            }

            return res.status(201).json({ message: "Editora deletada com sucesso!" })
        } catch (error) {
            return res.json({ message: `ocorreu um erro: ${error}` })
        }
    }
}

export default new EditoraController();