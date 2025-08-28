//Declarações de variáveis 
let nome: string = "Jão";
let idade: number = 25;
let estaAtivo: boolean = true;

//Arrays
let numeros: number[] = [1, 2, 3, 4, 5];
let nomes: string[] = ['Ana', 'Bruno', 'Carlos'];
let mistos: (string | number)[] = ['Ana', 25, 'Carlos', 30];
let mistos2: Array<string | number> = ['Ana', 25, 'Carlos', 30]

//Tuplas 
let pessoas: [string, number] = ['Maria', 30];

//Union Types
let id: number | string = 123;

//Interfaces - são para definir estrutura de objetos 
interface Usuario {
    nome: string;
    idade: number;
    email?: string; //opcional
}

//Utilizar elas fica assim 
let novo_usuario: Usuario = {
    nome: 'Amanda',
    idade: 18
};