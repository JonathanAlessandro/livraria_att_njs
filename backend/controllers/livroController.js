import { message } from "statuses";
import livroModel from "../models/livroModel";

class LivroModel {
    async getAllLivros(req, res) {
        const allLivros = await livroModel.showLivros();
        if (allLivros.length === 0) {
            return res.json({
                message: "Nenhum livro encontrado!",
            });
        }
        return res.json(allLivros);
    }

    async getLivroById(req, res) {
        const id = Number(req.params.id);
        const findLivro = await livroModel.getLivroById(id);
        if (!findLivro) {
            return res.status(404).json();
        }
        return res.json(findLivro);
    }

    async addLivro(req, res) {
        const { titulo, autor, ano_publicacao, id_editora, id_categoria, preco } = req.body;

        if (!titulo || !autor || !ano_publicacao || !id_editora || !id_categoria || !preco) {
            return res.json({ message: "Todos os campos são Obrigatórios" });
        }

        const createLivro = await livroModel.createLivro(req.body);

        if (createLivro.affectedRows === 0) {
            return res.json({
                message: "Não foi possível cadastrar o livro!",
            });
        }

        return res.status(201).json({message: "Livro cadastrado com sucesso"});
    };

    async updateLivroById(req, res) {
        const id = Number(req.params.id);
        const {itulo, autor, ano_publicacao, id_editora, id_categoria, preco } = await livroModel.getLivroById(id);

        //se os campos estiverem diferentes de preenchidos, ou seja, vazios ou nulos, retorna a mensagem de erro
        if (!titulo || !autor || !ano_publicacao || !id_editora || !id_categoria || !preco) {
            return res.json({ message: "Todos os campos são Obrigatórios" });
        }

        const updateLivro = livroModel.updateLivro(id, req.body);

        //verifica se alguma linha foi afetada se não foi afetada, ou seja, se o id não existe, retorna a mensagem de erro
        if (updateLivro.affectedRows === 0) {
            return res.json({
                message: "Não foi possível atualizar o livro!",
            });
        }

        return res.json({message: "Livro atualizado com Sucesso!"});
    }

    async deleteLivroById(req, res) {
        const id = Number(req.params.id);
        const deleteLivro = await livroModel.deleteLivro(id);

        if (deleteLivro.affectedRows === 0) {
            return res.json({
                message: "Não foi possível deletar o Livro!",
            });
        }

        return res.json({message: "Livro deletado com Sucesso!"});
    }
}

export default new LivroModel();