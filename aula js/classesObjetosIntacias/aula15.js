class Carro{
    marca;
    cor;
    gastoMedioporKm;


constructor(marca,cor,gastoMedioporKm){
    this.marca = marca;
    this.cor = cor
    this.gastoMedioporKm = gastoMedioporKm;
}



calcularGastoDePercurso(distanciaEmKm,precoCombustivel){
    return distanciaEmKm * this.gastoMedioporKm * precoCombustivel;
}
}

const uno   =   new Carro('Fiat', 'prata',  1/12);
console.log (uno.calcularGastoDePercurso(70,5));