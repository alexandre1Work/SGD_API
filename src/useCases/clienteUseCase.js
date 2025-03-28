import Cliente from '../models/clienteModel.js';
import { ClienteQueries } from '../queries/clienteQueries.js';

class ClienteUseCase {
    //Validações de registro
    static async createCliente(data) {
        //validar dados
        Cliente.validate(data) 

        const { cpf_cnpj, nome, telefone, endereco, email } = data;
        const clienteId = await ClienteQueries.create({
            cpf_cnpj,
            nome,
            telefone,
            endereco,
            email
        });

        //retorna um objeto, passando pelo construtor da Classe cliente
        return new Cliente(clienteId, cpf_cnpj, nome, telefone, endereco, email);
    }

    //validação de atualização
    static async updateCliente(id, data) {
        //verificar se o cliente existe
        const clienteExiste = await ClienteQueries.getById(id);
        if (!clienteExiste) {
            throw new Error('Cliente não encontrado')
        }

        //validar novos dados
        Cliente.validate(data) 

        await ClienteQueries.update(id, data);
        return new Cliente(id, data.cpf_cnpj, data.nome, data.telefone, data.endereco, data.email );
    }

    //Validações de busca por id (não precisa de validação de getAll)
    static async getClienteById(id, data) {
        //verificar se o cliente existe
        const cliente = await ClienteQueries.getById(id);
        if (!cliente) {
            throw new Error('Cliente não encontrado')
        } 

        return cliente;
    }

    //Validações de exclusão
    static async deleteCliente(id) {
        
        //verificar se o cliente existe
        const clienteExiste = await ClienteQueries.getById(id);
        if (!clienteExiste) {
            throw new Error('Cliente não encontrado')
        }

        //futuramente pode-se verificar se o cliente tem serviço em aberto, daí não é possivel excluir

        await ClienteQueries.delete(id);
    }
}

export default ClienteUseCase;