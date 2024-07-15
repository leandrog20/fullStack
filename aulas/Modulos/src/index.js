const Planet = require('./planet')
const solar_system = require('./solar_system')
const moment = require('moment')
const earth = new Planet("terra", 5100)
earth.rotate()

solar_system.planets.push(earth)
solar_system.planets.push(new Planet("Marte", 1448000000))
solar_system.planets.push(new Planet("Mercúrio", 748000000))
solar_system.planets.push(new Planet("Saturno", 427000000))

console.log(solar_system)

console.log(moment().format("h:MM"))