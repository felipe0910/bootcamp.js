

const produto = 200;
let form_pagamento = "avista";






if (form_pagamento == "avista") {
  let pagamento = produto - (10 * produto / 100);
  console.log("voce recebeu desconto 10% produto pagara: ",pagamento);
}


else if (form_pagamento == "parcalado2x") {
  let pagamento = (produto/2);
  console.log("voce pagara 2x sem juros pagara: ",pagamento);
}

else if (form_pagamento=="mais de 2x ") {
    let pagamento = produto + (15 * produto / 100);
    console.log("voce pagara no final do 15% de juros por parcelar +2x: ",pagamento);
    
}

else{
    console.log("digite uma forma valida para comprar produto de: ", produto)
}






// avista 10% desconto
//  pacelado2x =semjuros
//  mais duas vezes  =juros 15%

