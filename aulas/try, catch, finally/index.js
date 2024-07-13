class weapon{
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

    reload(){
        this.shotLeft = 5
    }
}

let arma = new weapon(10)

try{
    arma.shot()
    arma.shot()
    arma.shot()
    arma.shot()
    arma.shot()
    arma.shot()
    arma.shot()
} catch(e){
    console.log(e.message)
    arma.reload()
} finally {
    console.log("A arma deu bons tiros")
}

console.log(arma)

// ESSE TRY CATCH E FINALLY SERVE PARA TRATAMENTO DE ERRO, CASO SEU CODIGO TENHA DADO ERRO O CATCH VAI CAPTURAR ESSE ERRO VAI SALVAR NA VARIAVEL "E" E VAI EXECUTAR O QUE ESTA DENTRO DO CATCH. JA O FINALLY VAI EXECUTAR INDEPENDENTE SE CAIR NO CATCH OU NÃO.