class A {
    constructor(name, maxCrew, maxRecommended){
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommended = maxRecommended
        this.currentVelocity = 0
    }

    speedUp(aceleration){
        currentVelocity += aceleration
        if(this.currentVelocity > this.maxRecommended){
            alert("Velocidade maxima ultrapassada")
        }
    }
}

class B extends A{
    speedUp(){
        alert("VELOCIDADE CONTINUA EM 1KM")
        this.currentVelocity += 1
    }
}

let darwin  = new B("darwin", 16, 100)

darwin.speedUp()

console.log(darwin)
