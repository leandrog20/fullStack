import "core-js"
import "regenerator-runtime/runtime"

    // capturando erros

    let laserGun = {
        shotsPerSecond: 30,
        currentPosition: [30, 45, 70],
        firing: false
    }
    
    async function adjustPosition(x, y, z) {
            if(z > 90){
               return Promise.reject("Angulo Z inválido pra arma")
            }

            laserGun.currentPosition = [x, y, z]
            return ([x, y, z])
        
    }
    
    async function fire(x, y, z) {
       
            laserGun.firing = true
            return([x, y, z])
    
    }
    
    async function moveAndFire(x, y, z) {
    try{
        let newCoordiantes = await adjustPosition(x, y, z)
        console.log(`Arma ajustada para as cordenadas (${newCoordiantes[0]}, ${newCoordiantes[1]}, ${newCoordiantes[2]})`)

        let fireCoord = await fire(...newCoordiantes)
        console.log(`Començando a atirar nas cordenadas (${Firecoord[0]}, ${fireCoord[1]}, ${fireCoord[2]})`)
    }catch(error){
        console.log(error)
    }    
        }
    
    
        moveAndFire(20, 40, 95)