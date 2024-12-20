import "core-js"
import "regenerator-runtime/runtime"


// let laserGun = {
//     shotsPerSecond: 30,
//     currentPosition: [30, 45, 70],
//     firing: false
// }

// function adjustPosition(x, y, z) {
//     return new Promise(resolve => {
//         laserGun.currentPosition = [x, y, z]
//         resolve([x, y, z])
//     })
// }

// function fire(x, y, z) {
//     return new Promise(resolve => {
//         laserGun.firing = true
//         resolve([x, y, z])
//     })
// }

// function moveAndFire(x, y, z) {
//     adjustPosition(x, y, z).then(coord => {
//         console.log(`Arma ajustada para as cordenadas (${coord[0]}, ${coord[1]}, ${coord[2]})`)
//         return fire(...coord)
//     }).then(coord => {
//         console.log(`Començando a atirar nas cordenadas (${coord[0]}, ${coord[1]}, ${coord[2]})`)
//     }) 
        
//     }


//     moveAndFire(20, 40, 10)


    // Agora vamos transformar isso tudo em async Function


    let laserGun = {
        shotsPerSecond: 30,
        currentPosition: [30, 45, 70],
        firing: false
    }
    
    async function adjustPosition(x, y, z) {
        
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
            return fire(...coord)
        }).then(coord => {
            console.log(`Començando a atirar nas cordenadas (${coord[0]}, ${coord[1]}, ${coord[2]})`)
        }) 
            
        }
    
    
        moveAndFire(20, 40, 10)