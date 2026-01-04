class Pessoa {
    constructor(nome, idade,) {
        this.nome = nome;
        this.idade = idade;
        this.anoDenascimento = 2025 -idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} Ano de nascimento é ${this.anoDenascimento}`);
    }
}

const gabigol  = new Pessoa('Gabriel Barbosa ', 29); //instancia //
gabigol.descrever();

const felipe  = new Pessoa('Felipe Alves', 18); //instancia //
felipe.descrever();




function compararPessoas(p1,p2){
    if (p1.idade>p2.idade){
        console.log('Gabriel Barbosa mais velho');
    }
    else{
        console.log('Felipe Alves é mais velho');
    }

}

compararPessoas(gabigol,felipe);






// intancia processo de atribuir valor para classe   atrvaes de um objeto referenciando classe

// objeto  estrutura criada  para receber atributos e valores.

// clsses   estreutura criada so para receber atributos.

//metedo funcão declarada dentro  classe ou objeto.

// paramentro seria  variavel que funcao recebe ex: fuction soma(a,b){};

// metedo  construtor responsavel po inciar objeto quando instacia é criada 

// Use this quando você quer acessar ou modificar um atributo ou método do próprio objeto.

//Isso pertence ao objeto?

//✅ Sim → usa this

///❌ Não → não usa