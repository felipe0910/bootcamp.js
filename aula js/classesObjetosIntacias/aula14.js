class Carro{
    marca;
    modelo;
    preco;
    gastoMedioporKm;


constructor(marca,modelo,preco,gastoMedioporKm){
    this.marca = marca;
    this.modelo = modelo;
    this.preco = preco;
    this.gastoMedioporKm = gastoMedioporKm;
}
}

const carro =new Carro('Toyota','Corola','R$ 80000', 1/20);
console.log(carro);

