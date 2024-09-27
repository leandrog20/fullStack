
import React, {Fragment} from 'react'
import Planet from './planet'

async function getPlanets() {
    let response = await fetch('http://localhost:3000/api/planets.json')
    let data = await response.json()
    return data;
}

class Planets extends React.Component {
   constructor(props){
    super(props);
    this.state = {
        planets: []
        
    }
   }
   
   componentDidMount(){
    getPlanets().then(data => {
        this.setState( state => ({
            planets: data['planets']
        }))
    })
   }

   duplicateLast = () => {
    let lastPlanet = this.state.planets[this.state.planets.length - 1]

    this.setState(state => ({
        planets: [...this.state.planets, lastPlanet]
    }))
   }

   removeLast = () => {
    let new_planets = [...this.state.planets]
    new_planets.pop()

    this.setState(state => ({
        planets: new_planets
    }))

   }

    render() {
        return(
            <Fragment>
                <button onClick={this.removeLast}>Remove Last</button>
                <button onClick={this.duplicateLast}>Duplicate Last</button>
                {this.state.planets.map((planet, index) => 
                    <Planet
                     id={planet.id}
                     name={planet.name}
                     description ={planet.description}
                     img_url={planet.img_url}
                     key={index} // aqui
                     />
                )}
            </Fragment>
        )
    }
}



export default Planets;