function setBlueBackground(){
    let element = document.getElementById("style-text")
    element.style.backgroundColor = 'blue'
}

function setTransparentBackground(){
    document.getElementById("style-text").style.backgroundColor = "transparent"
}

function setRedColor(){
    let element = document.getElementById("style-text")
    element.classList.add("red-color")
}

function removeRedColor(){
   document.getElementById("style-text").classList.remove("red-color")
}