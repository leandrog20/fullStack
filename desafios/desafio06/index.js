const  hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let crewGreaterThan9 = hitchedSpaceships.filter(spaceships => {
    return spaceships[1] > 9 // Esse metodo vai retornar todos os sub arrays que tripulantes maiores que 9 nesse caso o array que tem Golias e Darwin.
}).map(spaceships =>{
    return spaceships[0] // como o la de cima vai retornar aqueles dois arrays esse aqui vai retornar apenas o nome que ta no indice zero dos dois arrays nesse caso Golias e Darwin.
})

let ongoingHitchPlatform = hitchedSpaceships.findIndex(spaceships => {
    return spaceships[2] == false // isso vai retornar o numero da primeira plataforma que esta em engate por isso usamos o findIndex pois ele retorna o numero.
})

let highLightedSpaceships = hitchedSpaceships.map(spaceships => {
    return spaceships[0].toUpperCase() // vai colocar o nome de cada nave em caixa alta.
})

let message = `Espaçonaves com mais de 9 tripulantes: ${crewGreaterThan9.join(", ")}` // Esse join vai jutar tudo e vai colocar essa virgula depois de cada string.
message += `\nPlataforma com processo de engate: ${ongoingHitchPlatform + 1}` // esse +1 é pq o numero da plataforma é o indice dela mais 1
message += `\nEspaçonaves destacadas: ${highLightedSpaceships.join(", ")}
`
alert(message)