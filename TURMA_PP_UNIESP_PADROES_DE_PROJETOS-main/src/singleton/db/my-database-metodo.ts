import { User } from "../interface/user";

const users: User[] = [];

export const MyDatabaseMetod = {
    add(user: User): void {
        users.push(user)
    },

    //Criar um método para remover o usuário.
    remove(index: number): void {
        if (index >= 0 && index < users.length) {
            users.splice(index, 1);
        } else {
            console.error("Usuário nao encontrado");
        }
    },
    
    show(): void{
        for(const user of users){
            console.log(user)
        }
    }
}