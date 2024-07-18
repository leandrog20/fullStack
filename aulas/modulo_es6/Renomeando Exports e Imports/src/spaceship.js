class Spaceship { // ou pode ser direto: export default class spaceship {}
    constructor(name, captain, armaments = [], defenses = []){
        this.name = name
        this.captain = captain
        this.armaments = armaments
        this.defenses = defenses
    }
}

export default Spaceship