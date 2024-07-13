// COSNTRUTOR

class spacialStation {
    constructor(){

    }
}

// PODEMOS COLOCAR PARAMETROS ASSIM COMO NAS FUNÇÕES:

class spacialStation {
    constructor(name,type){

    }
}


class spacialStation {
    constructor(name,type){
        this.name = name
        this.type = type 
    }
}


let observatory = new SpacialStation("Darwin", "Caça")

// AQUI ESTAMOS CRIANDO UM OBJECT QUE SERA GUARDADO NA VARIAVEL OBSERVATORY ELE TERA O NOME DE DARWIN E O TIPO DE CAÇA POR QUE SETAMOS LA EM CIMA QUE O NOME DO OBJECT RECEBERA O NOME QUE ESTA NO PARAMETRO NAME 
    // USANDO O THIS