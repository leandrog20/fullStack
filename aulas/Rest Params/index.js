// funcionalidade do operador spread

function greetCrew(message, name){
    console.log(`${message}, ${name}`)
}

greetCrew("Seja bem-vindo", "arthur")

// função que comprimenta tripulante

// mais e se quissesemos fazer uma função que cumprimenta varios tripulantes.

// para isso name tera que receber um array, mais utilizando o spread basta fazer:

function greetCrew(message, ...names){
    names.forEach(names => console.log(`${message}, ${names}`))
}

greetCrew("Seja bem-vindo", "arthur", "caio", "jose") // nesse caso o primeiro elemento vai para message e o resto vai para o names, Mais cuidado o names que tem o spread sempre tem que ficar no final se não dara erro.