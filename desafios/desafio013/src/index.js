// Imagine que estamos para partir numa viagem interplanetaria e temos 3 naves á nossa disposição. Porém, as naves têm um dispositivo que não permite a nossa partida coma a bateria abaixo de 30% da capacidade maxima. Cada nave tem sua capacidade em GigaJoules(GJ).

// Queremos dar partida nas 3 e ver com quais dela conseguimos sair 

// Para resolver o exercicio:
// Crie uma classe Spaceship para  anave num arquivo separado 
    // Esta classe deve conter 3 atributos e deve conter um metodo que retorne a procentage atual 
        // formula: perocentagem Atual = carga Atual * 100 / capacidade maxima
// crie uma classe spaceshipEnginer que sera a responsavel por ligar a nave 
    // Ela deve ser instanciada com um obejeto Spaceship Deve possuir um metodo de ligar, que deve ser assincrono e que faça a chegagem de combustivel utilizando o metodo da procentagem da carga atual que foi criado na classe Spaceship

// Instancie as 3 naves
// Instancie a classe spacesihpEnginer para cada nave 
// De partida em cada uma individualmente 
// Exiba a seguinte mensagem caso a checagem ocorra com sucesso
    // partida autorizada
// caso de errado
    // partida não autorizada


import Spaceship from "./spaceship"

import spaceshipEnginer from "./spaceshipEnginer"


const sophia = new Spaceship("Sophia", 10, 5)
const amsterda = new Spaceship("Amsterdã", 14, 10)
const dwarfStart = new Spaceship("Estrela-Anã", 20, 4)

const sophiaEnginer = new spaceshipEnginer(sophia)
const amsterdaEnginer = new spaceshipEnginer(amsterda)
const dwarfStartEnginer = new spaceshipEnginer(dwarfStart)

sophiaEnginer.turnOn()
amsterdaEnginer.turnOn()
dwarfStartEnginer.turnOn()

console.log("Promises")
