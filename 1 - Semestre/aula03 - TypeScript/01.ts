 function somar(a: number, b: number): number {
  return a + b;
}
console.log(somar(5, 10)); // Correto: 15
// console.log(somar(5, "10")); // 
//Erro: Argumento do tipo 'string' não é atribuível ao parâmetro do tipo 'number'.

function saudacao(nome: string, saudacaoPadrao?: string): string{

  if (saudacaoPadrao === undefined){
    saudacaoPadrao = "Olá ";

  } 
  return saudacaoPadrao + "," + nome + "!";
}
console.log(saudacao("João")); 
//"Olá João" 

function saudacao1(nome: string, saudacaoPadrao: string = "Olá"): string{

  return saudacaoPadrao + "," + nome + "!";
  
  {
    console.log(saudacao1("Maria")); 
    // Olá Maria


//////////////////////////////////////////////////////////////////////////////////////


    function somarTudo(...numeros: number[]): number {
      return numeros.reduce((total, num) => total + num, 0);
    }
    console.log(somarTudo(1, 2, 3, 4)); // 10

    
    function exibirMensagem(mensagem: string): void {
      console.log(mensagem);
    }
    exibirMensagem("TypeScript é poderoso!");

    

    const quadrado = (numero: number): number => numero * numero;
    console.log(quadrado(5)); // 25

    
    function multiplicar(a: number, b: number) {
      return a * b; // TypeScript infere que o retorno é 'number'
    }
    console.log(multiplicar(3, 4)); // 12


    function somar(a: number, b: number): number;
    function somar(a: string, b: string): string;
    function somar(a: any, b: any): any {
      return a + b;
    }
    console.log(somar(5, 10)); // 15
    console.log(somar("Olá, ", "TypeScript!")); // "Olá, TypeScript!"



    function inverterArray<T>(array: T[]): T[] {
      return array.reverse();
    }
    console.log(inverterArray([1, 2, 3])); // [3, 2, 1]
    console.log(inverterArray(["a", "b", "c"])); // ["c", "b", "a"]