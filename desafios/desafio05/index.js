function desacelerar(velocity, printer){
    const vDesaceleracao = 20
    while(velocity > 0){
        printer(velocity)
        velocity -= vDesaceleracao
    }

    alert("Velocidade = 0, nave parada, comportas podem ser abertas")
}


let mostrar = desacelerar(150, velocity => {
    alert(`Desacelerando a nave em 20Km/s\nNova velocidade ${velocity}`)
})