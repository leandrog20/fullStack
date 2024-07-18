import Spaceship from "./spaceship";

import armamentsKind from "./armaments"

import { laserDefenses, steelDefenses } from "./defenses"

import basicDefenses from "./defenses"

const spaceship = new Spaceship("Fenix", "Julior Marcelo", armamentsKind.laser, laserDefenses) 

const basicDefense = new Spaceship("Puller", "rosse", armamentsKind.explosion, basicDefenses) // como na nossa classe tem um array vazio podemos passar o array importado de outra classe  

console.log(spaceship)

console.log(basicDefense)