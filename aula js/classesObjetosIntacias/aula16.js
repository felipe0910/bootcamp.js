

class Pessoas {
    nome;
    peso;
    altura;
    
constructor(nome,peso,altura){
    this.nome=nome;
    this.peso=peso;
    this.altura=altura;
}

    CalcularImc(peso,altura){
       return this.peso/(this.altura*this.altura);

    }

    ClassificarImc(){
        if (this.CalcularImc<18.5){
            return 'abaixo do peso';

        }

         else if (this.CalcularImc>=18.5 && this.CalcularImc<25){
            return'peso normal';
       }

        else if (this.CalcularImc>=25 && this.CalcularImc<30){
            return'acima do peso';
       }

        else if (this.CalcularImc>=30 && this.CalcularImc<40){
            return'Obeso';
       }

        else{
            return'obesidade ';
       }


        

    }

}

const Jose = new Pessoas('jose',70,1.75);
console.log(Jose.CalcularImc());
console.log(Jose.ClassificarImc());


