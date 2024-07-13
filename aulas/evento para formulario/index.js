function save(){
    event.preventDefault()
    let nome = document.querySelector("input[name='name']").value 
    let lang = document.querySelector("select[name='programming-lang']").value
    alert(`Nome: ${nome}\nLinguagem de programação: ${lang}`)
}