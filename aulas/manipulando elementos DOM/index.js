function addNewPhone(){
    const phoneFrom = document.querySelector("form#phones")
    const newPhone = phoneFrom.children[0].cloneNode(true)
    const phonePosition = phoneFrom.children.length + 1
    newPhone.querySelector("label").innerText = `Telefone ${phonePosition}:`
    phoneFrom.appendChild(newPhone)
}

function printPhones(){
   let message = ''
   const phones = document.querySelectorAll("input[name='phone']")
   phones.forEach((phone, index) => {
    message += `Telefone ${index + 1}: ${phone.value}`
   })
   alert(message)
}