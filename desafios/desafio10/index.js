

function saveHouse(){
    let area = document.querySelector("input[name='area']").value
    let number = document.querySelector("input[name='number']").value
    let neighborhood = document.querySelector("input[name='neighborhood']").value
    let city = document.querySelector("input[name='city']").value

    let newList = document.createElement("li")
    newList.innerText = `${area}m², Number ${number}, Neighborhood ${neighborhood}, city ${city}`

    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "removeHouse(this)")
    newList.appendChild(removeButton)

    document.getElementById("houseList").appendChild(newList)
   
}

function removeHouse(button){
    let removeToList = button.parentNode
    document.getElementById("houseList").removeChild(removeToList)
}