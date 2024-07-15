/** Queremos armazenar informações sobre o sistema solar 
 * Para isso, temos uma lista de planetas e a distância dele ao sol em Unidade Astronômica.
 * Para cada planeta nessa lista, queremos imprimir a distância em AU(unidade Astronomica) e também a distancia em Quilômetros.
 * Crie um módulo para uma classe Planeta
 * Crie um módulo para armazenar as informações de cálculo e a operação de conversão de distância 
 *  1 AU = 149.587.870Km
 *  Neste módulo, crie uma constante com o valor de 1   AU em Quilômetros
 *  crie uma função de conversão para esta operação
 *  Exporte um objeto com estes dois dados
 *  Importe estes dois módulos num arquivo
 * Crie uma lista com os planetas do sistema solar como objetos da classe criada.
 * 
 */




const Planet = require('./planet')

const solarSystem = require('./solarsystem')


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
    distanceFromSun = solarSystem.convertAUtoKm(Planet.auToSum).toFixed(2) // to fixed para retornar duas casas decimais apenas.
    console.log(`${Planet.name} - ${Planet.au}AU - ${distanceFromSun}`)
})