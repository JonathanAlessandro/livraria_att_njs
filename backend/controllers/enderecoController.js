import enderecoModel from "../models/enderecoModel.js";

class EnderecoController {
    async createEndereco(req, res) {
        try {
            const { cep } = req.body;

            if (!cep) {
                return res.status(400).json({ message: `cep não fornecido` })
            }
            const {selectEnderecoByCep} = await enderecoModel.selectEnderecoByCep(cep);

            if (selectEnderecoByCep) {
                return res.status(400).json({ message: `Endereço já cadastrado` })
            }

            const getEndereco = await fetch(`http://viacep.com.br/ws/${cep}/json/`)

            console.log(getEndereco);


            const jsonEndereco = await getEndereco.json()

            const newEndereco = {
                logradouro : jsonEndereco.logradouro, 
                numero: "", 
                complemento: "", 
                bairro: jsonEndereco.bairro, 
                cidade: jsonEndereco.localidade, 
                estado: jsonEndereco.uf, 
                cep: jsonEndereco.cep
            }

            return res.status(200).json({ endereco: jsonEndereco })
        } catch (error) {
            console.error("Erro completo do sistema:", error);
            return res.status(500).json({
                message: `Ocorreu um erro: ${error.message}`,
                cause: error.cause ? error.cause.message : "Sem causa detalhada"
            });
        }

    }
}

export default new EnderecoController();