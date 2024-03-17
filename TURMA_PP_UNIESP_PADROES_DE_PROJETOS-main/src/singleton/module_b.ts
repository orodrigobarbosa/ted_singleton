import { MyDatabaseMetod } from "./db/my-database-metodo";
import { myDatabase } from "./module_a";



const myDatabaseClassic = MyDatabaseMetod;

myDatabaseClassic.add({ name: 'Luiz', age: 30 });
myDatabaseClassic.add({ name: 'Maria', age: 50 });
myDatabaseClassic.add({ name: 'Eduardo', age: 25 });

myDatabaseClassic.remove(2)
myDatabaseClassic.show()

console.log(myDatabaseClassic === myDatabase)

