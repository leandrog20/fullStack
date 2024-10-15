
import React, {Fragment, useState, useEffect } from 'react'
import Planet from './planet'
import Form from './form'

async function getPlanets() {
    let response = await fetch('http://localhost:3000/api/planets.json')
    let data = await response.json()
    return data;
}

const Planets = () => {

    const [planets, setPlanets] = useState([])

    useEffect(() => {
        getPlanets().then(data => {
            setPlanets(data['planets'])
        })
    }, [])
  
    const clickOnPlanet = (name) => {
        console.log(`click no planeta: ${name}`)
    }
  
    const addPlanet = (new_planet) => {
            setPlanets([...planets, new_planet])
    }
 
        return(
            <Fragment>
                <hr/>
                <Form addPlanet={addPlanet}/>
                <hr/>
                {planets.map((planet, index) => 
                    <Planet
                     id={planet.id}
                     name={planet.name}
                     description ={planet.description}
                     img_url={planet.img_url}
                     key={index} 
                     clickOnPlanet={clickOnPlanet}
                     />
                )}
                
            </Fragment>
        )
}



export default Planets;