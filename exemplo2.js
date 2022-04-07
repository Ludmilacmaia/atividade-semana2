//Calcular o tempo de uma viagem de carro(em h)
//para isso: perguntar a distãncia a percorrer(em km)
//perguntar a velocidade média esperada para a viagem(em Km/h)

let Distância = 148 //Km
console.log(`a distância a ser percorrida é: ${Distância} km`)

let velocidadeMedia = 90 //Km/h
console.log(`Velocidade média esperada: ${velocidadeMedia} Km/h`)

const TempoDeViagem = (Distância/velocidadeMedia).toFixed(2) //h
console.log(`Tempo esperado de viagem: ${TempoDeViagem} h`)

