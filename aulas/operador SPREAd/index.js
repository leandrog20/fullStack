let spaceship = ["fenix", "puller"]

console.log(...spaceship) // esse é o operador spread, ele desempacota o array e expand

let newSpaceship = [...spaceship, "colossus"] // isso retornara ["fenix" "puller" "colosus"] ao inves de [["fenix, "puller], "colossus"]


// em funções

function speedUp(velocity, acceleration){
    return velocity + acceleration
}

let spaceshipAcceleration = [60, 10] // como ta em array ele passara os dois valores como um só, para desempacotar usarmos o spread, isso fara com que ele fique sendo dois valores distintos passando um para velocity e outro para acceleration.

let newVelocity = speedUp(...spaceshipAcceleration)

console.log(newVelocity)