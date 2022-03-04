var prompt = require('prompt-sync')();

// Ler é a variável global usada para o looping final
let ler=0;

do{

/// Armazena variáveis responsáveis pelas funções gerais do jogo 
let jogo={
partidas:0,
n_jogadores:0,
controle:0,
controle2:0,
leitor:[],

apresentação: function(){
console.log("-------------- Jogo da sorte------------------");
console.log("*                                            *"); 
console.log("*             Regras do jogo:                *"); // <<< Demonstra as regras do jogo
console.log("*                                            *");
console.log("*    O jogador que tirar o maior número      *");
console.log("*             nos dados vence!               *");
console.log("----------------------------------------------");
},

partidas: function(){ // <<< Armazena e verifica se o número de partidas é válido
    this.controle=0;
    do{
        console.log("Quantas partidas deseja jogar:\n");
        this.partidas= prompt("Digite um número de 1 a 5: "); 
    
    //Para passar os dígitos para o array leitor
        for(let x=0;x<this.partidas;x++){ 
            this.leitor[x] = this.partidas.charAt(x); 
        }
    
    //para verificar se alguma letra foi digitada por engano(utilizando o array leitor acima)//
        for(let x=0;x<this.partidas;x++){   
            if(this.leitor[x]+1<0){
                console.log("Achei uma letra.Loop!");
                break;
            }else{
                console.log("Leitor >>> apenas números");
                this.controle++;
                break;            
            }
           }
    //Para saber se o nº de partidas é válido
        if(this.partidas<6){
            console.log("Nº de partidas: "+this.partidas);
            this.controle++;
        }else {
            console.log("Dígito inválido!");      
            this.controle=0;
        }
        
    }while(this.controle<2);
},

// Armazenar e verifica informações referente ao número de jogadores
jogadores:function(){
    this.controle=0;
    do{
        console.log("Digite quantos jogadores irão participar:\n");
        this.n_jogadores= prompt("Digite um número de 1 a 6: "); 
    
    ////////// Para passar os dígitos para o array leitor/////////
        for(let x=0;x<this.n_jogadores;x++){ 
            this.leitor[x] = this.n_jogadores.charAt(x); 
        }
    
    //////para verificar se alguma letra foi digitada por engano//
        for(let x=0;x<this.n_jogadores;x++){   
            if(this.leitor[x]+1<0){
                console.log("Achei uma letra.Loop!");
                break;
            }else{
                console.log("Leitor >>> apenas números");
                this.controle++;
                break;            
            }
           }
    /////////// Para saber se o nº de jogadores é válido////////// 
        if(this.n_jogadores<7){
            console.log("Nº de partidas: "+ this.n_jogadores);
            this.controle++;
        }else {
            console.log("Dígito inválido!");      
            this.controle=0;
        }
        
    }while(this.controle<2);
},
 //A função "vencedor" Contabiliza os pontos e verefica quem venceu
    vencendor: function(){
        jogo.controle=0;
        for(let x=0;x<jogo.n_jogadores;x++){
            for(let y=0;y<jogo.n_jogadores;y++){ 
             if(jogador.soma_sorte[x]>jogador.soma_sorte[y]){
                 jogador.pontos[x]++;
             }                             
            }
        }
        for(let x=0;x<jogo.n_jogadores;x++){
            console.log(`jogador: ${jogador.classificar[x]} -- pontos: ${jogador.soma_sorte[x]}`);
            console.log("----------------------------------------------");
            }

        if(jogador.pontos[0]>jogador.pontos[1] && jogador.pontos[0]>jogador.pontos[2] && jogador.pontos[0]>jogador.pontos[3] && jogador.pontos[0]>jogador.pontos[4] && jogador.pontos[0]>jogador.pontos[5]){
            console.log("Vitória do jogador[A]");
        }else if(jogador.pontos[1]>jogador.pontos[0] && jogador.pontos[1]>jogador.pontos[2] && jogador.pontos[1]>jogador.pontos[3] && jogador.pontos[1]>jogador.pontos[4] && jogador.pontos[1]>jogador.pontos[5]){
            console.log("Vitória do jogador[B]");
        }else if(jogador.pontos[2]>jogador.pontos[1] && jogador.pontos[2]>jogador.pontos[0] && jogador.pontos[2]>jogador.pontos[3] && jogador.pontos[2]>jogador.pontos[4] && jogador.pontos[2]>jogador.pontos[5]){
            console.log("Vitória do jogador[C]");
        }else if(jogador.pontos[3]>jogador.pontos[1] && jogador.pontos[3]>jogador.pontos[2] && jogador.pontos[3]>jogador.pontos[0] && jogador.pontos[3]>jogador.pontos[4] && jogador.pontos[3]>jogador.pontos[5]){
            console.log("Vitória do jogador[D]");
        }else if(jogador.pontos[4]>jogador.pontos[1] && jogador.pontos[4]>jogador.pontos[2] && jogador.pontos[4]>jogador.pontos[3] && jogador.pontos[4]>jogador.pontos[0] && jogador.pontos[4]>jogador.pontos[5]){
            console.log("Vitória do jogador[E]");
        }else if(jogador.pontos[5]>jogador.pontos[1] && jogador.pontos[5]>jogador.pontos[2] && jogador.pontos[5]>jogador.pontos[3] && jogador.pontos[5]>jogador.pontos[4] && jogador.pontos[5]>jogador.pontos[0]){
            console.log("Vitória do jogador[F]");
        }else{
            console.log("Tivemos mais de um vencedor!");            
        }         

    }

}

// Armazena irformações e funções referentes ao jogador

let jogador={
classificar:["A","B","C","D","E","F"],
sorte:[],
soma_sorte:[0,0,0,0,0,0],
pontos:[0,0,0,0,0,0]
}

let dados={

// A função "tirar a sorte", lança os dados de acordo com o número de partidas
    tirar_sorte: function(){        
        
        prompt("Tecle ENTER para lançar os dados!");            

            for(x=0;x<jogo.n_jogadores;x++){
                jogador.sorte[x]= Math.floor(Math.random() * (6 - 1 + 1) + 1);
                jogador.soma_sorte[x] +=jogador.sorte[x]
                console.log(`jogador:${jogador.classificar[x]}--pontos:${jogador.sorte[x]}`);
                console.log("----------------------------------------------");
            }       

    }
    
}

// Principal


jogo.apresentação();
jogo.partidas();
jogo.jogadores();

do{
    dados.tirar_sorte();
    jogo.controle2++;

}while(jogo.controle2<jogo.partidas);

prompt("Tecle ENTER para ver quem ganhou!");
console.log("----------------------------------------------");
jogo.vencendor();

console.log("Deseja jogar novamente?");
ler= prompt("Tecle [1] para SIM e [2] para Não:");

}while(ler<2);