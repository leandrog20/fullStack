

        // FOREACH
let spaceShips = ["supernova", "fenix", "puller", "darwin"]

spaceShips.forEach(function(currentSpaceships, index){
    console.log(`Nave: ${currentSpaceships}\nIndice: ${index}`)
})

        // MAP

let spaceShips = ["supernova", "fenix", "puller", "darwin"]

let maiusculoSpaceships = spaceShips.map(function(currentSpaceships) {
    let maiusculo = currentSpaceships.toUpperCase()
    return maiusculo
})

console.log(maiusculoSpaceships)

// bota cada elemento do array em maiusculo sem alterar o array original e retorna

        // FILTER

let spaceShips = ["supernova", "fenix", "puller", "darwin"]

let with7Chars = spaceShips.filter(element => {return element.length >= 7 })

console.log(with7Chars)
// coloca no array apenas os elementos que forem true na condição ou seja apenas os elemento que tenham 7 caracteres

            // FIND

let spaceShips = ["supernova", "fenix", "puller", "darwin"]

let with7Chars = spaceShips.filter(element => {return element.length >= 7 })
            
            console.log(with7Chars)

// mesma coisa do filter com a diferença que retorna apenas o primeiro elemento que for true ou seja que atende a condição. o filter retorna um array com os elementos true ja esse retorna apenas o elemento em si.