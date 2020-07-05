function habilitarCategoria(escolha,categoria,seletor){
    if (escolha){
        document.getElementById(categoria).disabled = false;
        document.getElementById(seletor).disabled = false;
        
    }else{
        document.getElementById(categoria).disabled = true;
        document.getElementById(seletor).disabled = true;
    }
};

function habilitarPagamento(escolha){
    if (escolha){
        document.getElementById('bandeira-cc').disabled = false;
        document.getElementById('gerar-boleto').disabled = true;
        
    }else{
        document.getElementById('bandeira-cc').disabled = true;
        document.getElementById('gerar-boleto').disabled = false;
    }
};


function qtdDias(){
    //esta função calcula a quantidade de dias que o hóspede irá ficar no hotel 

    let dataSaida = new Date(document.getElementById('data-saida').value);
    // cria uma váriavel do tipo Date a partir da data de saída escolhida na seção estadia no formulário
    
    let dataEntrada = new Date(document.getElementById('data-entrada').value);
    // cria uma váriavel do tipo Date a partir da data de entrada escolhida na seção estadia no formulário
    
    let qtd = parseInt((dataSaida - dataEntrada) / (1000 * 60 * 60 * 24), 10);
    // subtrai as datas para calcular a quantidade de dias entre o intervalo escolhido
    // o valor é dividido pela quantida de milessegundos por dia
    // o segundo valor 10 é para garantir a base 10 na função parseInt
    return qtd;
    
}

function validaDataSaida(){   

    let qtd = qtdDias();
    // chama a função acima e armazena a quantidade de dias de hospedagem

     if (qtd<=0){
        // checa se a quantidade de dias é negativa e informa ao usuário 

         alert("A data de saída deve ser posterior a data de entrada");
         document.getElementById('data-saida').value = 'YYYY-MM-DD';
         // e também define a data de saída para um valor "nulo" para que o usuário escolha novamente
     }    
 }

function computaValorDaEstadia(e){
    // recebe um valor entre 1 e 3 referente ao tipo de quarto escolhido pelo usuário

    let quartos = ['','diaria-quarto1','diaria-quarto2','diaria-quarto3'];
    // array com os ids que identificam o valor da diária de cada quarto dentro do formulário html

    let diariaEscolhida = quartos[parseInt(e.value,10)];   
    // o valor retornado pelo html é convertido na string com id que identifica o valor da díaria escolhida

    let qtd = qtdDias();
    // chama a função e armazena a quantidade de dias de hospedagem

    let total = parseFloat(document.getElementById(diariaEscolhida).value) * qtd;
    // puxa o valor numério da diária e múltiplica pela quantidade de dias calculado

    document.getElementById('valor-total').setAttribute("value", total);
    // define o atributo valor do elemento de id valor-total 
    // para que o valor da diária seja apresentado no formulário

    document.getElementById('qtd-dias').setAttribute("value", qtd);
    // define o atributo valor do elemento de id qtd-dias 
    // para que o valor da quantidade de dias de hospedagem seja apresentado no formulário    
 }



function habilitaDataSaida(){
    let hj = new Date;
    let dataEntrada = new Date(document.getElementById('data-entrada').value);
   
    // checar se user escolheu uma data
    if (dataEntrada.getTime() === dataEntrada.getTime()){
        // If the date object is invalid it will return 'NaN' on getTime() and NaN is never equal to itself.
        //logo se entrar aqui é pq ele escolheu uma data
        
        if (dataEntrada <hj){
            // cehcar se a data escolhida é menor que atual
            alert("A data de entrada deve ser posterior a data de hoje");
            document.getElementById('data-entrada').value = 'YYYY-MM-DD';

        }else{
            document.getElementById('data-saida').disabled = false;
            // se o user escolher uma data e ela for maior que a data atual, habilita a escolha da data de saída
        }
    } 
}



