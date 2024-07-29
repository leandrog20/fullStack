import "core-js"
import "regenerator-runtime/runtime"


import Spaceship from "./spaceship"

import spaceshipEnginer from "./spaceship_enginer"


const sophia = new Spaceship("Sophia", 10, 5, 70)
const amsterda = new Spaceship("Amsterdã", 14, 10, 40)
const dwarfStart = new Spaceship("Estrela-Anã", 20, 4, 80)

const sophiaEnginer = new spaceshipEnginer(sophia)
const amsterdaEnginer = new spaceshipEnginer(amsterda)
const dwarfStartEnginer = new spaceshipEnginer(dwarfStart)

sophiaEnginer.turnOn()  // Se ela retornasse algo que a gente precisasse usar teriamos que tratar ela como uma Promise utilizando o then, pois não podemos usar o await pois o contexto aqui de fora não é assincrono.
amsterdaEnginer.turnOn()
dwarfStartEnginer.turnOn()

console.log("Promises")
