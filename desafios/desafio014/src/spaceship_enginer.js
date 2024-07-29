
export default class {
    constructor(Spaceship){
        this.Spaceship = Spaceship
    }

    turnOn(){
        let currentChargeChecking = this.checkCurrentLoad()
        let shieldChecking = this.testShield()

        Promise.all([currentChargeChecking, shieldChecking]).then(results => {
            return this.shieldNormalizer(results)
        }).then(newShield => {
            this.Spaceship.shield = newShield
            console.log(`(${this.Spaceship.name}) Partida autorizada: Escudo (${this.Spaceship.shield}) - Carga(${this.Spaceship.currentCharge})GJ`)
        }).catch(error => {
            console.log(`${this.Spaceship.name} Partida não autorizada: ${error}`)
        })
        
    }

    checkCurrentLoad(){
        return new Promise((resolve, reject) => {
            let currentCharge = this.Spaceship.currentPercentCharge()
            
            if(currentCharge >= 30){
                resolve(currentCharge)
            } else {
                reject(`Carga em apenas ${currentCharge}GJ`)
            }
        })
    }

    testShield(){
        return new Promise((resolve, reject) => {
            let doubleShield = this.Spaceship.shield * 2

            if(doubleShield >= 100){
                resolve(doubleShield)
            } else {
                reject("Escudo em sobre carga")
            }
        })
    }

    shieldNormalizer(shield){
        return new Promise((resolve, reject) => {
            let normalizerShield = shield * 0.7

            if(normalizerShield > 120){
                reject("Escudo em supercarga")
            } else {
                resolve(normalizerShield)
            }
        })
    }
}

