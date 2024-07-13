function mostrarElementos(){
    let name = document.querySelector("input[name='nome']").value
    let colorOptions = document.querySelector("select[name='color'] option:checked").text
    let radioOption = document.querySelector("input[name='like-programming']:checked").value
    let checkBox = document.querySelectorAll("input[name='developer-options']:checked")

    let checkBoxArray = []

    checkBox.forEach(element => {checkBoxArray.push(element.value)})

    let optionCheckbox = checkBoxArray.join(", ")

    alert(`Nome: ${name}\nCor primaria: ${colorOptions}\nGosta de programar? ${radioOption}\nConhecimentos em programação web: ${optionCheckbox}`)
}