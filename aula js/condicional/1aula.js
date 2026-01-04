
// correto nao execultavel no node js 
let numero = prompt("digite um numero");
numero = Number(numero);

if (numero % 2 == 0) {
  console.log("par", numero);
} else {
  console.log("impar", numero);
}

// exemplo node rodar //

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite um número: ", (numero) => {
  numero = Number(numero);

  if (numero % 2 === 0) {
    console.log("par", numero);
  } else {
    console.log("impar", numero);
  }

  readline.close();
});
