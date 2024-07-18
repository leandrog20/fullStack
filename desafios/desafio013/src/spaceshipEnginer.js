
export default class {
    constructor(Spaceship){
        this.Spaceship = Spaceship
    }

    turnOn(){
        this.checkCurrentLoad().then(currentCharge => {
            console.log(`${this.Spaceship.name} Partida autorizada: carga atual em ${currentCharge}`)
        }).catch(currentCharge => {
            console.log(`${this.Spaceship.name} Partida não autorizada. Carga em ${currentCharge}`)
        })
    }

    checkCurrentLoad(){
        return new Promise((resolve, reject) => {
            let currentCharge = this.Spaceship.currentPercentCharge()
            
            if(currentCharge >= 30){
                resolve(currentCharge)
            } else {
                reject(currentCharge)
            }
        })
    }
}




