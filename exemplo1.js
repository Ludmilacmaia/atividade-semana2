//solicitar o preço de uma mercadoria
//solicitar o percentual de desconto 20%
//Exibir no console o valor do desconto e o preço a pagar

let preço = 1000
const desconto = 0.2
const valorDesconto = preço*desconto
console.log("O valor do desconto é: R$" + valorDesconto)

const preçoAPagar = preço - valorDesconto
console.log("O valor a pagar é: R$" + preçoAPagar)

