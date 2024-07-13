let spaceship = {
    name: "fenix",
    crewQuantity: 10,
    isHitched: false
}

let spaceshipName = spaceship.name
let crewQuantity = spaceship.crewQuantity

// Essa é a forma tradicional

// Forma desestruturada

let {name: spaceshipName, crewQuantity: crewQuantity} = spaceship // colocamos o objeto spaceship para receber essa destruturação. Ela funciona mapeando a propriedade name e crewQuantity de spaceship para as variaveis spaceshipName, e crewQuantity

console.log(spaceshipName, crewQuantity) // basta fazer isso para mostrar

// com array

let spaceship = ["colossus", "fenix"]

let [colossus, fenix] = spaceship // nesse caso ele ta mapeando o indice zero de nosso array e ta colocando na variavel de indice zero e assim por diante.


// em funções 

let spaceship = ["colossus", "fenix"]

function printSpace([fenix, puller]){
    console.log(fenix, puller)
}

printSpace(spaceship)