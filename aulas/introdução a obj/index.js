let spaceship = {} // OBJETO VAZIO
        // OUTRA FORMA
let spaceship = new Object()


let spaceship = {
    name: "fenix",
    crewQuantite: 7,
    type: "batalha"
}

console.log(spaceship) //MOSTRANDO O OBJETO INTEIRO

console.log(spaceship.type) // MOSTRANDO APENAS A PROPRIEDADE TYPE QUE A GENTE COLOCOU
        // OUTRA FORMA
console.log(spaceship["type"])


spaceship.isHitched = false  // ADICIONANDO UMA NOVA PROPRIEDADE NO NOSSO OBEJETO, QUANDO CRIAMOS UMA PROPRIEDADE E ADICIONAMOS UM VALOR, ESSA PROPRIEDADE PASSA A FAZER PARTE DO NOSSO OBJETO.
        // OUTRA FORMA
spaceship["level"] = 100   



