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
   constructor(name, maxCrew, maxRecommended, maxLoadWeight){
    super(name, maxCrew, maxRecommended)
    this.maxLoadWeight = maxLoadWeight
   }

   speedUp(acceleration){
    acceleration /= 2
    alert(acelerando em ${aceleration})
    super.speedUp(acceleration)
   }
}

O METODO SUPER NADA MAIS FAZ DO QUE CHAMAR A SUPER CLASSE DE B QUE NO CASO É A CLASS A, ELA SIMPLESMENTE VAI EXECUTAR TANTO ESSA QUE A GENTE SOBREESCREVEU QUANTO A ORIGINAL DE A