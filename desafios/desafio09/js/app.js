class App{
    constructor(){
        this.spaceship = null
    }

    start() {
        this.enrollSpaceship()
        let chosenOption
        do{
            chosenOption = this.showInitialMenu()
            this.redirectFreatures(chosenOption)
        }while(chosenOption != "3")
            this.printAndExit()
    }

    enrollSpaceship(){
        let spaceshipName = prompt("Qual é o nome da nave?")
        let crewQuantity = prompt("Qual é a quantidade de tripulantes da nave?")
        let spaceshipKind = this.askForSpaceshipKind()
        if(spaceshipKind == "1"){
            let WeaponsQuantity = prompt("Quantas armas a nave possui?")
            this.spaceship = new Battle(spaceshipName, crewQuantity, WeaponsQuantity)
        } else {
            let sitsQuantity = prompt("Quantos lugares a nave possui?")
            this.spaceship = new Transport(spaceshipName, crewQuantity, sitsQuantity)
        }
    }

    askForSpaceshipKind(){
        let chosenOption
        while(!["1", "2"].includes(chosenOption)){
            chosenOption = prompt("Qual o tipo da nave?\n1 - Batalha\n2 - Transporte")
        }
        return chosenOption
    }

    showInitialMenu(){
        const promptMessage = "O que voce deseja fazer?\n1 - Acelerar a nave\n2 - Trocar a nave\n3 - Imprimir e sair"
        let chosenOption = prompt(promptMessage)
        while(!["1", "2", "3"].includes(chosenOption)){
            chosenOption = prompt(promptMessage)
        }

        return chosenOption
    }

    redirectFreatures(chosenOption){
        switch(chosenOption){
            case "1":
                this.accelerateSpaceship()
                break
            case "2":
                this.enrollSpaceship()
                break
        }
    }

    accelerateSpaceship(){
        let acceleration = Number(prompt("Quanto gostaria de acelerar?"))
        this.spaceship.speedUp()
    }

    printAndExit(){
        let finalMessage = `Nome: ${this.spaceship.name}\nQuantidade de tripulantes: ${this.spaceship.crewQuantity}\nVelocidade atual: ${this.spaceship.currentVelocity}\n` 
        alert(finalMessage)
    }
}