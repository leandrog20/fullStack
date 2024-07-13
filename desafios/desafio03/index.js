// let nomeSpaconave = prompt("Digite o nome da spaçonave:")
// let substituirCaractere = prompt("Desse nome digitado Qual caractere você deseja substituir?")
// let porCaractere = prompt(`Você deseja substituir o caractere ${substituirCaractere.toUpperCase()} por qual?`)

// let novoNome = ''

// for(pos = 0; pos < nomeSpaconave.length; pos++){
//     if(nomeSpaconave[pos] == substituirCaractere){
//         novoNome += porCaractere
//     } else {
//         novoNome += nomeSpaconave[pos]
//     }
// }

// alert(`O novo nome ficou: ${novoNome}`)

let nameE = prompt("Digite o nome da espaçonave:")
let inverName = ""
for(let i = 0; i < nameE.length; i--){
    if(nameE[i] == "o"){
        break
    } else {
        inverName += nameE[i]
    }
    alert(`nome invertido ${inverName}`)
}