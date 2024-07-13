class spaceshipWeapon{
    constructor(id){
        this.id = id
        this.shotLeft = 5
    }

    shot(){
        console.log("Bang!")
        this.shotLeft -= 1
    }
}

//Esse codigo tem um erro mais sera executado normalmente. O erro que tem nele é que a arma so tem 5 balas mais se executarmos o shot mais vezes que isso ele começara a adicionar numeros negativos no shotLeft. Para tratarmos isso utilizamos o throw


class spaceshipWeapon{
    constructor(id){
        this.id = id
        this.shotLeft = 5
    }

    shot(){
        if(this.shotLeft > 0){
        console.log("Bang!")
        this.shotLeft -= 1
        } else {
            throw new Error("Arma sem munição")
        }
    }
}

let fenixWeapon = new spaceshipWeapon(10)
fenixWeapon.shot()
fenixWeapon.shot()
fenixWeapon.shot()
fenixWeapon.shot()
fenixWeapon.shot()
fenixWeapon.shot()
console.log(fenixWeapon)

//para lançarmos um erro precisamos instanciar ele e depois lançar-lo atraves da clausula throw, nesse caso como a arma tem 5 tiros no 6 ele para o codigo e lança um erro no console do navegador, como foi lançado esse erro o console.log(fenixWeapon) nem sera executado