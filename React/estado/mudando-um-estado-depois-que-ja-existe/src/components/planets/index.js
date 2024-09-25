
import React, {Fragment} from 'react'
import Planet from './planet'


class Planets extends React.Component {
   constructor(props){
    super(props);
    this.state = {
        planets: [
            {
                name:"Mércurio",
                description: "Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar.",
                 img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/420px-Mercury_in_color_-_Prockter07-edit1.jpg",
                 link: "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
            },

            {
                name: "Plutão",
                description: "Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. ",
                img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/330px-Pluto_in_True_Color_-_High-Res.jpg"
            }
        ]
        
    }
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
                {this.state.planets.map((planet) => 
                    <Planet
                     name={planet.name}
                     description ={planet.description}
                     img_url={planet.img_url}
                     />
                )}
            </Fragment>
        )
    }
}



export default Planets;