// ESSE DESAFIO TEM COMO FINALIDADE MOSTRAR UM MENU PARA SABER QUE O CARA QUER ACELERAR OU PARAR TESTAR A VELOCIDADE E DIZER SE ESTA ACIMA DO PERMITIDO


let spaçonave = {
    velocidade: 0,
    speedUp: function(aceleração){
        this.velocidade += aceleração
    },
    desacelerar: function(desaceleração){
        this.velocidade -= desaceleração
    }
}

function registrarNave(){
    spaçonave.nome = prompt("Digite o nome da spaçonave:")
    spaçonave.tipo = prompt("Digite o tipo da sua spaçonave: (EX: batalha, extração, etc.)")
    spaçonave.maxVelocidade = Number(prompt("Digite a velocidade maxima que essa spaçonave pode atingir (Km/s):"))
}

function acelerar(){
    let aceleração = Number(prompt("Digite a aceleração que voce deseja para essa spaçonave (Km/s):"))
    spaçonave.speedUp(aceleração)

    if(spaçonave.velocidade > spaçonave.maxVelocidade){
        alert(`VELOCIDADE MAXIMA ULTRAPASSADA!!\nRecomendamos que voce desacelere a Spaçonave!!\nVelocidade: ${spaçonave.velocidade}Km/s\nVelocidade Maxima permitida: ${spaçonave.maxVelocidade}Km/s`)
    }
}

function desacelerar(){
    let desaceleração = Number(prompt("Digite o quanto voce deseja Desacelerar (Km/s):"))
    spaçonave.desacelerar(desaceleração)

    if(spaçonave.velocidade <= spaçonave.maxVelocidade){
        alert(`CONTINUE ASSIM! agora voce esta na velocidade permitida!\nVelocidade da Nave: ${spaçonave.velocidade}Km/s\nVelocidade Maxima permitida: ${spaçonave.maxVelocidade}Km/s`)
    }else if(spaçonave.velocidade > spaçonave.maxVelocidade){
        alert(`ALERTA!!!\nVoce ainda esta acima da velocidade permitida\nVelocidade da Nave: ${spaçonave.velocidade}Km/s\nVelocidade Maxima Permitida da Nave: ${spaçonave.maxVelocidade}Km/s`)
    }
}

function parar(){
    alert(`DETALHES TECNICOS DA NAVE:\nNome: ${spaçonave.nome}\nTipo: ${spaçonave.tipo}\nVelocidade da nave: ${spaçonave.velocidade}Km/s\nVelocidade Maxima da nave: ${spaçonave.maxVelocidade}Km/s`)
    spaçonave.velocidade = 0 
}

function menu(){
    let opçãoMenu
    do{
        opçãoMenu = prompt("Digite a opção:\n1 - ACELERAR\n2 - DESACELERAR\n3 - PARAR\n")
        switch(opçãoMenu){
            case "1":
                acelerar()
                break;
                case "2":
                    desacelerar()
                    break;
                    case "3":
                        parar()
                        break;
                    default:
                        alert("OPÇÃO INVALIDA!!!!!")
        }
    }while(opçãoMenu != "3")
}

registrarNave()
menu()
