function sayMyName(name){
    console.log('your name is: '+ name);
} 

sayMyName('Felipe');
sayMyName('Renan');






//exemplo calculo quadrado potencia

function quadrado(valor){
    return valor*valor  ;
} 

 const QuadradodeDez=quadrado(10);
 console.log(QuadradodeDez);


//exemplo calculo juros acrescimo.

function incrementalJuros(valor,pencentualJuros){
    const ValordeAcrescimo=(pencentualJuros/100)*valor;
    return valor + ValordeAcrescimo
}

console.log(incrementalJuros(100,10)); 