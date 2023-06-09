//Funções de estilo
function box(){
    for(let id=0;id<16;id++){
        let caixa=document.getElementById(id);
        switch (caixa.innerHTML){
            case '':
                caixa.style.backgroundColor="#CCC1B2";
                break
            case '2':
                caixa.style.backgroundColor="#EEE4DA";
                caixa.style.color="#766F64";
                break    
            case '4':
                caixa.style.backgroundColor="#EDE0C7";
                caixa.style.color="#766F64";
                break
            case '8':
                caixa.style.backgroundColor="#F2B178";
                caixa.style.color="#FBF7F1";
                break
            case '16':
                caixa.style.backgroundColor="#F59662";
                caixa.style.color="#FBF7F1";
                break
            case '32':
                caixa.style.backgroundColor="#F57C5C";
                caixa.style.color="#FBF7F1";
                break
            case '64':
                caixa.style.backgroundColor="#F57C5C";
                caixa.style.color="#FBF7F1";
                break
            case '128':
                caixa.style.backgroundColor="#EC8E3D";
                caixa.style.color="#FBF7F1";
                break
            case '256':
                caixa.style.backgroundColor="#F1A51B";
                caixa.style.color="#FBF7F1";
                break
            case '512':
                caixa.style.backgroundColor="#C5B104";
                caixa.style.color="#FBF7F1";
                break
            case '1024':
                caixa.style.backgroundColor="#A4A508";
                caixa.style.color="#FBF7F1";
                break
            case '2048':
                caixa.style.backgroundColor="#E5BE00";
                caixa.style.color="#FBF7F1";
                break
        }
    }
}
//Funções de mecânicas de jogo

//iniciando o tabuleiro e randomizando inicio
function iniciarJogo(){
    //Gravando pontuação máxima
    if(parseInt(document.getElementById("pontuacao_atual").innerHTML)>parseInt(document.getElementById("pontuacao_max").innerHTML)){
        document.getElementById("pontuacao_max").innerHTML=document.getElementById("pontuacao_atual").innerHTML
    }    
    //Inicializando contador de pontuação
    document.getElementById("pontuacao_atual").innerHTML=0
    //inicializando valor de todas as caixas como vazia
    var valor=""
    for(let id=0;id<16;id++){
        document.getElementById(id).innerHTML=valor;
    }
    //inicializando 2 caixas com valor 2
    var id_inicial_1=Math.floor(Math.random() * 16)
    var id_inicial_2=Math.floor(Math.random() * 16)
    while(id_inicial_1==id_inicial_2){
        id_inicial_2=Math.floor(Math.random() * 16)
    }

    document.getElementById(id_inicial_1).innerHTML=2
    document.getElementById(id_inicial_2).innerHTML=2
    box();
}
//Colocando nova peça no tabuleiro
function novoBloco(){
    var novo_bloco=Math.floor(Math.random() * 16)
    while(document.getElementById(novo_bloco).innerHTML!=""){
        novo_bloco=Math.floor(Math.random() * 16)
    }
    document.getElementById(novo_bloco).innerHTML=2
    box();
}
//função para somar os adjacentes para os movimentos positivos
function somarAdjacente(arr){
    const resultado=[];
    let jaSomados=false;

    for(let i=0;i<arr.length;i++){
        if(i===arr.length-1 && !jaSomados){
            resultado.push(arr[i]===""? 0:arr[i]);
        } else if(arr[i]!==""){
            if(arr[i]===arr[i+1] && !jaSomados){
                resultado.push(parseInt(arr[i]*2));
                jaSomados=true;
            } else if(i>0 && jaSomados){
                jaSomados=false;
                continue
            } 
            else {
                resultado.push(arr[i]);
                jaSomados=false;
            }
        } else {
            resultado.push(0);
        }
    }
    
    
    while(resultado.length<4){resultado.push(0)}
    for(let i=0;i<resultado.length;i++){
        if(resultado[i]===0){resultado[i]=""}
    }
    return resultado
}
//função para somar os adjacentes para os movimentos negativos
function somarAoContrario(arr){
    const resultado=[];
    let jaSomados=false;

    for(let i=arr.length-1;i>=0;i--){
        if(i===0 && !jaSomados){
            resultado.unshift(arr[i]===""? 0:arr[i]);
        } else if(arr[i]!==""){
            if(arr[i]===arr[i-1] && !jaSomados){
                resultado.unshift(parseInt(arr[i]*2));
                jaSomados=true;
            } else if(i>0 && jaSomados){
                jaSomados=false;
                continue
            } 
            else {
                resultado.unshift(arr[i]);
                jaSomados=false;
            }
        } else {
            resultado.unshift(0);
        }
    }
    
    
    while(resultado.length<4){
        resultado.unshift(0)
    }
    for(let i=0;i<resultado.length;i++){
        if(resultado[i]===0){
            resultado[i]=""
        }
    }
    return resultado
}
function comparandoMatriz(a,b){
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            if(a[i][j]!=b[i][j]){
                return false
            } 
        }
    }
    return true
}
//verificação de fim de jogo
function gameOver(){
    let matriz=[]
    for(let i=0;i<4;i++){
        matriz[i]=[]
        for(let j=0;j<4;j++){
            matriz[i][j]=document.getElementById(4*i+j).innerHTML
        }
    }
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            if(i<3 && matriz[i+1][j]!=undefined){
                if((matriz[i][j]==matriz[i+1][j])){
                    return true
                }
            }
            
            if (i>0 && matriz[i-1][j]!=undefined){
                if((matriz[i][j]==matriz[i-1][j])){
                    return true
                }}
            if(j>0 && matriz[i][j-1]!=undefined){
                if((matriz[i][j]==matriz[i][j-1]) ){
                    return true
            }}
            if(j<3 && matriz[i][j+1]!=undefined){
                if((matriz[i][j]==matriz[i][j+1])){
                    return true
            }}
        }
    }
    return false
}
function desfazer(anterior,atual){
    if(anterior.length!=4){
        alert("Você não tem jogadas para retornar")
    } else{
        for(let i=0;i<4;i++){
            for(let j=0;j<4;j++){
                atual[i][j].innerHTML=anterior[i][j]
            }
        }
    }
    box();
}

//Funções mobile

let xBaixo = null;
let yBaixo = null;
//inicia as variáveis do toque na tela
function comecoToque(event) {
    xBaixo = event.touches[0].clientX;
    yBaixo = event.touches[0].clientY;
}
//Lógica do toque na tela
function movimentoToque(event) {
    if (!xBaixo || !yBaixo) {
        return;
    }
    //Grava o final do toque
    let xUp = event.touches[0].clientX;
    let yUp = event.touches[0].clientY;
    //Contabiliza a diferença do começo e do final do toque
    let xDiff = xBaixo - xUp;
    let yDiff = yBaixo - yUp;
    //Vê qual é a maior diferença, ou seja, a direção preferencial que o usuário deseja
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
            document.dispatchEvent(event)
        } else {
            const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
            document.dispatchEvent(event)
        }
    } else {
        if (yDiff > 0) {
            const event = new KeyboardEvent('keydown', { key: 'ArrowUp' });
            document.dispatchEvent(event)
        } else {
            const event = new KeyboardEvent('keydown', { key: 'ArrowDown' });
            document.dispatchEvent(event)
        }
    }
    //Reinicia as variáveis
    xBaixo = null;
    yBaixo = null;
}
// Disparando movimento de jogo através de swipe na tela
document.addEventListener('touchstart', comecoToque, false);
document.addEventListener('touchmove', movimentoToque, false);
// Disparando movimento de jogo através de setas de navegação
document.getElementById("baixo").addEventListener('click',()=>{
    const event = new KeyboardEvent('keydown', { key: 'ArrowDown' });
    document.dispatchEvent(event)
    })
document.getElementById("cima").addEventListener('click',()=>{
    const event = new KeyboardEvent('keydown', { key: 'ArrowUp' });
    document.dispatchEvent(event)
    })
document.getElementById("esquerda").addEventListener('click',()=>{
    const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
    document.dispatchEvent(event)
    })
document.getElementById("direita").addEventListener('click',()=>{
    const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
    document.dispatchEvent(event)
    })

//Chamando Funções

//matriz prévia
var matriz_previa=[]

//matriz atual
var matriz = [];

//botão de reiniciar
document.getElementById('reiniciar').addEventListener('click',iniciarJogo);

//carregar o jogo quando a página carregar
window.addEventListener('load', iniciarJogo);

//implementando a mecânica de movimento
document.addEventListener('keydown', (event) => {
    //iniciando verificador de que uma jogada valida
    let jogada_valida=false;
    //iniciando matriz do tabuleiro
    for (let row = 0; row < 4; row++) {
        matriz[row] = [];
        matriz_previa[row]=[] 
        for (let col = 0; col < 4; col++) {
            
            matriz[row][col] = document.getElementById(4*row+col)
            matriz_previa[row][col] = matriz[row][col].innerHTML 
            //checando se o valor é um NaN e reiniciando-o como ""
            if(isNaN(parseInt(matriz[row][col].innerHTML))){
                        matriz[row][col].innerHTML=""
                    }
            
        }
    }

    //função de movimento para cima
    if (event.key === 'ArrowUp') {
        //validando jogada
        jogada_valida=true;
        for(col=0;col<4;col++){
            //Modificando espaços vazios para ficar no final da coluna
            let vazio=[]
                for(let i=0;i<4;i++){
                    if(matriz[i][col].innerHTML!=""){
                        vazio.push(matriz[i][col].innerHTML);
                    }
                }
                while(vazio.length<4){
                    vazio.push("")
                }
            
            //Checagem de soma de blocos
            let movimento=[]
                movimento=somarAdjacente(vazio)

                //código de movimentação instavel
                for(let i=0;i<4;i++){
                    matriz[i][col].innerHTML=movimento[i];
                }
    }
        
    } 
    else if (event.key === 'ArrowDown') {
        //validando jogada
        jogada_valida=true;
        for(col=0;col<4;col++){
            //Modificando espaços vazios para ficar no final da coluna
            let vazio=[]
                for(let i=0;i<4;i++){
                    if(matriz[i][col].innerHTML!=""){
                        vazio.push(matriz[i][col].innerHTML);
                    }
                }
                while(vazio.length<4){
                    vazio.unshift("")
                }
            //Checagem de soma de blocos
            let movimento=[]
                movimento=somarAoContrario(vazio)
                
                //código de movimentação instavel
                for(let i=0;i<4;i++){
                    matriz[i][col].innerHTML=movimento[i];
                }
    }
        
        
    } else if (event.key === 'ArrowLeft') {
        //validando jogada
        jogada_valida=true;
        for(row=0;row<4;row++){
            //Modificando espaços vazios para ficar no final da coluna
            let vazio=[]
                for(let i=0;i<4;i++){
                    if(matriz[row][i].innerHTML!=""){
                        vazio.push(matriz[row][i].innerHTML);
                    }
                }
                while(vazio.length<4){
                    vazio.push("")
                }
            //Checagem de soma de blocos
            let movimento=[]
                movimento=somarAdjacente(vazio)

                //código de movimentação instavel
                for(let i=0;i<4;i++){
                    matriz[row][i].innerHTML=movimento[i];
                }
    }
    
        
    } else if (event.key === 'ArrowRight') { 
        //validando jogada
        jogada_valida=true;
        for(row=0;row<4;row++){
            //Modificando espaços vazios para ficar no final da coluna
            let vazio=[]
                for(let i=0;i<4;i++){
                    if(matriz[row][i].innerHTML!=""){
                        vazio.push(matriz[row][i].innerHTML);
                    }
                }
                while(vazio.length<4){
                    vazio.unshift("")
                }
            //Checagem de soma de blocos
            let movimento=[]
                movimento=somarAoContrario(vazio)
                
                //código de movimentação instavel
                for(let i=0;i<4;i++){
                    matriz[row][i].innerHTML=movimento[i];
                }
    }          
    }
    let pontuacao=0;
    let check_espaco_vazio=0
        for(row=0;row<4;row++){
            for(col=0;col<4;col++){
                if(matriz[row][col].innerHTML===""){
                    pontuacao+=0
                    check_espaco_vazio=1    
                } else{
                    pontuacao+=parseInt(matriz[row][col].innerHTML)
                }
            }
        }
    document.getElementById("pontuacao_atual").innerHTML=pontuacao
    //Checando se deu Game Over ou se continua o jogo
    
        if(!gameOver()){
            alert(`Sua pontuação é ${pontuacao}`)
            iniciarJogo()                 
        }
        if(check_espaco_vazio==1 && jogada_valida){
            novoBloco();
        }
        let alerta=document.getElementById('instrucao').style
        if(!jogada_valida){
            alerta.color='#cc0000';
            alerta.border='2px solid #cc0000';
            alerta.padding='.5em';
            alerta.fontSize='1.75em';
            alerta.transition='font-size 400ms';
        }
        if(jogada_valida){
            alerta.color='#A49381';
            alerta.border='none'
            alerta.padding='0'
            alerta.fontSize='1.5em';
            alerta.transition='font-size 400ms';
        }
    
});

//botão de desfazer
document.getElementById('desfazer').addEventListener('click',()=>{desfazer(matriz_previa,matriz)});