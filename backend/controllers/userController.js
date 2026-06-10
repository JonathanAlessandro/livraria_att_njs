import userModel from "../models/userModel.js"

class UserController {
    async getUsers(req,res){
        try {
            const allUsers = await userModel.showUsers()
            if (allUsers.length === 0) {
                return res.status(404).json({message: "Nenhum usuario encontrado!"})
            }
            return res.status(200).json(allUsers)
        } catch (error) {
            return res.status(500).json({message: error})
        }
    }

    async getUserById(req,res){
        try {
            const id = Number(req.params.id);
            const findUser = await userModel.selectUserById(id);
            if (!findUser) {
                return res.status(404).json({message:"Usuario não encontrado"})
            }
            return res.status(200).json(findUser)
        } catch (error) {
            return res.status(500).json({message: error})
        }
    }

    async getUserByEmail(req,res){
        try {
            const {email} = req.params;
            const findUser = await userModel.userByEmail(email);
            if (!findUser) {
                return res.status(404).json({message:"Usuario não encontrado"})
            }
            return res.status(200).json(findUser)
        } catch (error) {
            return res.status(500).json({error: "Erro ao buscar o usuario"})
        }
    }
    
    async addUser(req,res){
        try {
            // const {user_name,user_email,user_password,user_phone,role_id,user_status} =req.body;
            const addCliente = await userModel.createUser(req.body);

            if (addCliente.affectedRows >0) {
                return res.status(200).json({message:"Usuario cadastrado com sucesso!"})
            }

        } catch (error) {
            return res.status(500).json({error:"Erro ao adicionar o usuario"})
        }
    }

    async updateUser(req,res){
        try {
            const id = Number(req.params.id);

            const updateUser = userModel.updateUser(id,req.body)

            if (updateUser.affectedRows >0) {
                return res.status(200).json({message:"Usuario atualizado"})
            }

        } catch (error) {
            return res.status(500).json({error: "Erro ao atualizar o usuario"})
        }
    }

    async deleteUser(req,res){
        try {
            const id = Number(req.params.id);
            const deleteUser = userModel.deleteUser(id)
        } catch (error) {
            return res.status(500).json({error: "Erro ao excluir o usuario"})
        }
    }

}

export default new UserController();