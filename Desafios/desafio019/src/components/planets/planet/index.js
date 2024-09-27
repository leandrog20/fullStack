
import GrayImg from '../../shared/gray_img'
import DescriptionWithLink from '../../shared/description_with_link'
import React from 'react'

async function getSatellites(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = response.json()
    return data;
}

class Planet extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            satellites: []
        }

    }

    componentDidMount(){
        getSatellites(this.props.id).then(data => {
            this.setState( state => ({
                satellites: data['satellites']
            }))
        })
    }

    render(){

        let title;

    if(this.props.title_with_underline)
        title = <h4><u>{this.props.name}</u></h4>
    else
        title = <h4>{this.props.name}</h4>

        return(
            <div>
                {title}
                <DescriptionWithLink description={this.props.description} link={this.props.link}/>
                <GrayImg img_url={this.props.img_url} gray={this.props.gray}/>
                <h4>Satelites</h4>
                {this.state.satellites.map((satellite, index) => // todo filho de uma lista pricisa de um key para poder atualizar de uma forma mais eficiente, por isso no li tem um key, poderia ser qualquer coisa mais a melhor maneira é colocar o index ja que o map retorna o valor e o index do elemento, além de colocar a key aqui tbm tem que ter no planet.
                   <ul> 
                    <li key={index}> {satellite.name}</li>
                   </ul>
                )}
                <hr/>
                
            </div>
            
        )
    }
}




    

    

    


export default Planet;