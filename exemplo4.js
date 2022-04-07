//Calcular o preço a pagar pelo aluguel de um carro sabendo que:
//a diária custa R$60 e o KM rodado custa R$0,15
//Para isso:
//Perguntar a quantidade de dias de aluguel
//Perguntar a quantidade de Km percorridos

const ValorDaDiária = 60
const ValorDoKm = 0.15

let DiasDeAluguel = 5
console.log(`Duração do aluguel: ${DiasDeAluguel} dias`)

let KmRodados = 1200
console.log(`Quilômetros rodados: ${KmRodados}`)

const ValorAPagar = DiasDeAluguel*ValorDaDiária+KmRodados*ValorDoKm
console.log(`Valor a pagar pelo aluguel do carro: R$ ${ValorAPagar}`)