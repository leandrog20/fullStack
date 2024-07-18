let timeoutId = setTimeout(() => {
    console.log(`Executando apos 2 segundos`)
}, 1000)

clearTimeout(timeoutId)

let seconds = 0

let idSetInterval = setInterval(() => {
    seconds += 2
    console.log(`Executando a cada ${seconds} segundos`)
    if(seconds == 10){
    clearInterval(idSetInterval)
    }

}, 2000)