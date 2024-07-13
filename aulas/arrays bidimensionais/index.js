// Arrays podem guardar outros arrays
let espaçonaves = [ ["elemental", 7], ["helmet", 14], ["supernova", 8] ]

// pegando o nome da nave que esta no array da posicao 3 

console.log(espaçonaves[2][0]) // Isso entrara no array 3 e pegara o nome dele que ta na posicao 0 

// Array dentro de um array que ja esta dentro de outro array

let meuArray = [ ["super", 1] ["nova", 2], ["helmet", [true, false]] ]

// acesando o true

console.log(meuArray[2][1][0])
