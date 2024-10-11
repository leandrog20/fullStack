
import GrayImg from '../../shared/gray_img'
import DescriptionWithLink from '../../shared/description_with_link'
import React, { useState, useEffect} from 'react'

async function getSatellites(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = response.json()
    return data;
}


const Planet = (props) => {

const [satellites, setSatellites] = useState([])

useEffect(() => {
    getSatellites(props.id).then(data => {
        setSatellites(data['satellites'])
    })
}, [])

     let title;

    if(props.title_with_underline)
        title = <h4><u>{props.name}</u></h4>
    else
        title = <h4>{props.name}</h4>

        return(
            <div>
                {title}
                <DescriptionWithLink description={props.description} link={props.link}/>
                <GrayImg img_url={props.img_url} gray={props.gray}/>
                <h4>Satelites</h4>
                {satellites.map((satellite, index) => 
                   <ul> 
                    <li key={index}> {satellite.name}</li>
                   </ul>
                )}
                <hr/>
                
            </div>
            
        )
    
}




    

    

    


export default Planet;