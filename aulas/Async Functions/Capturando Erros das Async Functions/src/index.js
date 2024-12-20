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
    
    function moveAndFire(x, y, z) {
        adjustPosition(x, y, z).then(coord => {
            console.log(`Arma ajustada para as cordenadas (${coord[0]}, ${coord[1]}, ${coord[2]})`)
            return fire(...coord) // retornamos aqui para pegar no then de baixo
        }).then(coord => {
            console.log(`Començando a atirar nas cordenadas (${coord[0]}, ${coord[1]}, ${coord[2]})`)
        }).catch(error => {
            console.log(error)
        })
            
        }
    
    
        moveAndFire(20, 40, 95)