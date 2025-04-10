// FUNÇÃO BASICA 

function ExibirMsg (msg) {
    console.log(msg)
}

ExibirMsg("Oi amigiguinhos! Bom dia!")
ExibirMsg("Estou com sono")

function ExibirMsg2 (msg){
 
    let mensagem = msg
    return mensagem
    console.log ("Chegou na funçao") // processo de DEBUG 
    console.log ("Chegou na funçao", mensagem) // processo de DEBUG 
}

    console.log(ExibirMsg2 ("Sou calvo!"))

        function soma (n1, n2) {
        
            return n1+n2
        }

        console.log(soma (2, 6))

        // FORMA DIFERENTE DE ESCREVER UMA FUNÇÃO 

        // função Arrow ou anonima 

        const potencia = (n , p) =>  {
          return Math.pow(n, p)          // elevado (todas as contas "Math")
        }
    
    console.log(potencia(4, 2)) 

        // Media >= 6.0 = Aprovado 
        // Media < 6.0 || >= 4 = Recperaçao 
        // Media < 4.0 = Reporvado 

       const media = (nota1 , nota2) => {
           let notafinal = (nota1 + nota2)/2 

           if (notafinal < 4)  {
            return "Reprovado "

           } 

           if (notafinal >= 6) {
            return "Aprovado"
           }

           return "Recuperação"
        }

        console.log(media(6, 4))

    
    
