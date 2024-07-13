const nome = prompt('Digite o nome da nave')

let dobra = 0 
let resposta = 1
while(resposta == 1){
    alert(`numero de vezes entrada na dobra ${dobra} vezes`)
    var sOuN = prompt("Deseja entrar na dobra? Digite s/n")
    if(sOuN == 's'){
        resposta = 1
        dobra ++
    }else if(sOuN == 'n') {
        resposta = 2
    } else {
        alert('Opção errada tente novamente!')
    }

   
}

alert(`A nave ${nome} entrou na dobra ${dobra} vezes`)
