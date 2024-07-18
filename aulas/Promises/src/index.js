let komodoship = {
    name: "Komodo",
    velocity: 80,
    acceleration: 0
}

const velocityAfter2Seconds = (velocity, acceleration) => {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            if(acceleration > 0) {
                velocity += acceleration * 2
                console.log(`Nova velocidade: ${velocity}`)
                resolve(velocity)
            } else {
                console.log("Aceleração inválida")
                reject("Não possui aceleração")
            }
        }, 1000);
    })
}

velocityAfter2Seconds(komodoship.velocity, komodoship.acceleration).then(velocity => {
    komodoship.velocity = velocity
    console.log("Depois de acelerar:\n", komodoship)
}).catch(message => {
    console.log(`Komodo, ${message} `)
})

console.log("Execução de Promises")
console.log(komodoship)