let nomeDaNave = prompt("Digite o nome da nave:")

let velocidadeInicialNave = 0

let opcaoEscolhida


function menu() {
    let opcao 
    while (opcao != 1 && opcao != 2 && opcao != 3 && opcao != 4) {
        opcao = prompt("Escolha uma das opções:\n1 - acelear a nave em 5Km/s\n2 - Desacelerar a nave em 5Km/s\n3 - Imprimir dados de bordo\n4 - Finalizar programa")
    }
    return opcao
}

function acelerar(velocidade){
    novaVelocidade = velocidade + 5
    return novaVelocidade
}

function desacelerar(velocidade){
    novaVelocidade = velocidade - 5
    if(novaVelocidade < 0){
        novaVelocidade = 0
    }

    return novaVelocidade
}

function dadosDaNave(nomeDaNave, velocidade){
    alert(`Espaçonave: ${nomeDaNave}\n Velocidade: ${velocidade}`)
}

do{
    opcaoEscolhida = menu()
    switch(opcaoEscolhida){
        case "1":
            velocidadeInicialNave = acelerar(velocidadeInicialNave)
            break
            case "2":
                velocidadeInicialNave = desacelerar(velocidadeInicialNave)
                break
                case "3":
                    dadosDaNave(nameNave, velocidade)
                    break;
                    default:
                        alert("Finalizando programa de bordo")
    }
} while(opcaoEscolhida != "4")