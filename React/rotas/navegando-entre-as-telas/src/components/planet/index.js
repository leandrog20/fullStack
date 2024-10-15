
import GrayImg from '../shared/gray_img'
import DescriptionWithLink from '../shared/description_with_link'
import React, { useState, useEffect} from 'react'
import FormSat from './form'

import { useParams, useNavigate} from 'react-router-dom'



async function getPlanet(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json()
    return data;
}


const Planet = () => {

const [satellites, setSatellites] = useState([]);
const [planet, setPlanet] = useState({});
const [redirect, setRedirect] = useState(false)

let { id } = useParams();

let navigate = useNavigate();


const goToPlanets = () => {
    navigate('/')
}
useEffect(() => {
    getPlanet(id).then(data => {
        setSatellites(data['satellites'])
        setPlanet(data['data'])
    }, error => {
        setRedirect(true)
    })
}, [])

   const addSatellites = (new_satellite) => {
        setSatellites([...satellites, new_satellite]) // extrai todos os satelites com o SPREAD e adiciona o proximo por meio das planet
   }


     let title;

    if(planet.title_with_underline)
        title = <h4><u>{planet.name}</u></h4>
    else
        title = <h4>{planet.name}</h4>


    if(redirect)
        goToPlanets()
        return(
            <div>
                {title}
                <DescriptionWithLink description={planet.description} link={planet.link}/>
                <GrayImg img_url={planet.img_url} gray={planet.gray}/>
                <h4>Satelites</h4>
                {satellites.map((satellite, index) => 
                   <ul> 
                    <li key={index}> {satellite.name}</li>
                   </ul>
                )}
                <FormSat addSatellites={addSatellites}></FormSat>
                <hr/>
                <button type='button' onClick={goToPlanets}>Voltar a Listagem</button>
                
            </div>
            
        )
    
}

export default Planet;