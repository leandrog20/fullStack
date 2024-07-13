class captain {
    constructor(name, age, flightHours){
        this.name = name
        this.age = age
        this.flightHours = flightHours
    }
}

class spaceShipe {
    constructor(name, crewQuantity, nameCaptain, ageCaptain, flightHoursCaptain){
        this.name = name
        this.crewQuantity = crewQuantity
        this.captain = new captain(nameCaptain, ageCaptain, flightHoursCaptain) 
    }
}

let spaceShip = new spaceShipe("puller", 16, "marcos", 45, 16000)
console.log(spaceShip)