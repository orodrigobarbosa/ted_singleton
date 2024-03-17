import { MyDatabaseMetod } from "./db/my-database-metodo";

const myDatabase = MyDatabaseMetod;

myDatabase.add({ name: 'Roberto', age: 30 });
myDatabase.add({ name: 'Joana', age: 50 });
myDatabase.add({ name: 'Luíza', age: 25 })

export { myDatabase };