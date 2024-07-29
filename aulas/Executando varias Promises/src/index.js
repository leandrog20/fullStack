
const increaseVelocity = function(velocityToIncrease){
    return new Promise((resolve, reject) => {
        if(velocityToIncrease <= 0){
            reject("Frenagem acionada")
        } else {
            resolve(velocityToIncrease * 0.9)
        }
    })
}

const newBatteryConsumption = function(currentVelocity, velocityToIncrease) {
    return new Promise((resolve, reject) => {
        let newBatteryConsumption = (currentVelocity + velocityToIncrease) / 10000
        if(newBatteryConsumption > 0){
            resolve(newBatteryConsumption)
        } else {
            reject("Consumo zerado!")
        }
    })
}

let velocity = 70
let velocityIncrease = increaseVelocity(velocity)
let batteryConsumption = newBatteryConsumption(80, velocity) // Agora queremos que essas duas promisses que estão nessas variaveis sejam executadas de forma atomica (ou as duas passam ou não passa nenhuma)

Promise.all([velocityIncrease, batteryConsumption]).then(results => {
    console.log(results)
}).catch(errors => {
    console.log(errors)
})