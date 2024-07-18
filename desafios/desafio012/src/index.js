/** 
 * pegamos o resultado do exercicio 11 e tranformamos os modulos commonsJs em módulos ES6
 * 
 * 
 */




import Planet from './planet' 

import { convertAUtoKm } from './planet_operation'


let planets = [
    new Planet("Mercúrio", 0.39),
    new Planet("Vênuz", 0.72),
    new Planet("Terra", 1),
    new Planet("Marte", 1.52),
    new Planet("Júpter", 5.2),
    new Planet("Saturno", 9.53),
    new Planet("Urano", 19.1),
    new Planet("Netuno", 30),
]

planets.forEach(Planet => {
   let distanceFromSun = convertAUtoKm(Planet.auToSum).toFixed(2) // to fixed para retornar duas casas decimais apenas.
    console.log(`${Planet.name} - ${Planet.auToSum}AU - ${distanceFromSun}`)  // aqui a gente teve que colocar o distanceFromSun como variavel e passamos o convertAutoKm direto
})