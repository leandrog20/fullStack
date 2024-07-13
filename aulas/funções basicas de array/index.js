let meuArray = [l1, l2, l3]

console.log(meuArray)

// Inserir um elemento no meu array (no final)

meuArray.push("l4")

// Remover o ultimo elemento do array

meuArray.pop()  // Ele tambem retorna o elemento que foi removido

// Caso voce queira mostrar o elemento removido basta salvar em uma variavel

let Removido = meuArray.pop()
console.log(Removido)

// Remover o primeiro elemento do array
meuArray.shift()

// retorna igual o pop

// Adicionar um elemento igual a push (mais no começo)
meuArray.unshift("fenix")

// Retorna o tamanho do array
meuArray.length

// Procurar em qual posição esta determinado elemento
meuArray.indexOf("elemental")

let pos = meuArray.indexOf("elemental") // caso queira mostrar

// Caso ele não encontre ele vai mostrar "-1"
