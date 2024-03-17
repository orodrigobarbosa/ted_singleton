import { User } from "../interface/user";

const users: User[] = [];

export const MyDatabaseFunctionfunction = ( function () {
    return {
        add(user: User): void {
            users.push(user)
        },

    //Criar a função para deletar um usuário
    remove(index: number): void {
        if (index >= 0 && index < users.length) {
            users.splice(index, 1);
        } else {
            console.error("Erro: Usuário nao encontrado");
        }
    },


    show(): void {
            for (const user of users) {
                console.log(user.name)
            }
        }
    }
})
