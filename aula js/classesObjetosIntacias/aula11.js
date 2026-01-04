const  pessoa =  {
    nome: " Felipe Alves ",
    idade: 25,

    descrever: function (){ //parametro / 
        console.log(`Meu nome é:${this.nome} e minha  idade é ${this.idade}`);
    } 

};

pessoa.nome = 'felipe' //editat atributo dentro objeto pessoa 
pessoa.idade =30;

pessoa.descrever();