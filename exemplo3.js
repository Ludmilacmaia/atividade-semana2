//Criar um algoritmo que leia o valor total de um jantar
//Para isso: Solicitar o valor do jantar
//Calcular o valor da taxa do garçom (10%)
//Calcular o valor total a ser pago

let valorDoJantar = 120 
console.log("valor do jantar: R$" + valorDoJantar)

const PercentagemGarçom = 0.1

const TaxaGarçom = valorDoJantar*PercentagemGarçom
console.log("taxa do garçom: R$" + TaxaGarçom)

const ValorTotal = valorDoJantar + TaxaGarçom
console.log("Valor total: R$" + ValorTotal)