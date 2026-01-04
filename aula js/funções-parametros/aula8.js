//calculo imc peso/(aultura*altura)
// abaixo do peso  >18.5
// entre 18.5 25 peso normal
// entre 25 30 acima do peso 
// obeso 30 40 obeso




function CalcularImc(peso,altura){
 return peso/(altura*altura);

}

 function ClassificarImc(imc) {
    if (imc<18.5){
    return'abaixo do peso';
}

else if (imc>=18.5 && imc<25){
    return'peso normal';
}

else if (imc>=25 && imc<30){
    return'acima do peso';
}

else if(imc>=30 && imc<40 ){
    return'obeso';
}

else{
    return"obesidade grave";
}


}

function main(){
const peso=90;
const altura = 1.80;
const imc = CalcularImc(peso,altura);
console.log( 'Classificao: '+ ClassificarImc(imc));
console.log('IMC:',imc);


}

main();






