let world = `{
    "name": "Terra",
    "physicalCharacteristic": {
        "surfaceArea": 510072000,
        "equatorialDiameter": 12756.2
    },
    "colors": ["azul", "branco", "marrom"],
    "startRotation": "00:00",
    "finishRotation": "23:59"
}` // Exemplo de representação

let planet = JSON.parse(world) // converte a String json acima em objeto que podemos manipular

alert(planet.name)
alert(planet.physicalCharacteristic.surfaceArea)