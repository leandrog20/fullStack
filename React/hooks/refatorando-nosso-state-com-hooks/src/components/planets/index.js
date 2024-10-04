
import React, {Fragment, useState} from 'react'
import Planet from './planet'

async function getPlanets() {
    let response = await fetch('http://localhost:3000/api/planets.json')
    let data = await response.json()
    return data;
}

// componentDidMount(){
//     getPlanets().then(data => {
//         setState( state => ({
//             planets: data['planets']
//         }))
//     })
//    }


const Planets = () => {

    const [planets, setPlanets] = useState()
  
  const duplicateLast = () => {
    let lastPlanet = planets[planets.length - 1]
    
    setPlanets([...planets, lastPlanet]);
   }

  const removeLast = () => {
    let new_planets = [...planets]
    new_planets.pop()

    setPlanets(new_planets)

   }

 
        return(
            <Fragment>
                <button onClick={removeLast}>Remove Last</button>
                <button onClick={duplicateLast}>Duplicate Last</button>
                {planets.map((planet, index) => 
                    <Planet
                     id={planet.id}
                     name={planet.name}
                     description ={planet.description}
                     img_url={planet.img_url}
                     key={index} 
                     />
                )}
            </Fragment>
        )
}



export default Planets;