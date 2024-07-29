
export default class {
    constructor(Spaceship){
        this.Spaceship = Spaceship
    }

    async turnOn(){
       
       try{
        let currentChargeChecking = await this.checkCurrentLoad()

        let shieldChecking = this.testShield()

        let results = await Promise.all([currentChargeChecking, shieldChecking])

        this.Spaceship.shield = this.shieldNormalizer(results[1])
        
           
            console.log(`(${this.Spaceship.name}) Partida autorizada: Escudo (${this.Spaceship.shield}) - Carga(${this.Spaceship.currentCharge})GJ`)
            
        }catch(error) {
        console.log(`${this.Spaceship.name} Partida não autorizada: ${error}`)
    }
        
    }

    async checkCurrentLoad(){
       
            let currentCharge = this.Spaceship.currentPercentCharge()
            
            if(currentCharge < 30){
                return Promise.reject(`Carga em apenas ${currentCharge}GJ`)
            } 

            return currentCharge
    }

    async testShield(){
        
            let doubleShield = this.Spaceship.shield * 2

            if(doubleShield < 100){
                return Promise.reject("Escudo em sobre carga")
            }

            return doubleShield
        }
    

    async shieldNormalizer(shield){
       
            let normalizerShield = shield * 0.7

            if(normalizerShield > 120){
                Promise.reject("Escudo em supercarga")
            }

                return normalizerShield
            
        }

}
    


