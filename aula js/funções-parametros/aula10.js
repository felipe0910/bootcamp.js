
function calcularPagamento(produto,form_pagamento){
    
if (form_pagamento == "avista") {
  let pagamento = produto - (10 * produto / 100);
  return "voce recebeu desconto 10% do produto pagara: " + pagamento;
}

else if (form_pagamento == "parcalado2x") {
  let pagamento = (produto/2);
  return"voce pagara 2x sem juros pagara: "+ pagamento;
}

else if (form_pagamento=="mais de 2x ") {
    let pagamento = produto + (15 * produto / 100);
    return "voce pagara no final do 15% de juros por parcelar  mais de 2x: " + pagamento;
    
}
else{
    return"digite uma forma valida para comprar produto de: "+ produto;
}
}

console.log (calcularPagamento(200,"avista"));


