console.log("Welcome to the main module")
import {createPlan} from './plan.js'
import { createSoybean } from './seeds/soybean.js'
import { createCorn } from './seeds/corn.js'
import { createSunflower } from './seeds/sunflower.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createWheat } from './seeds/wheat.js'
import { createPotato } from './seeds/potato.js'
import { addPlant } from './field.js'
import { usePlants } from './field.js'
import { plantSeeds } from './tractor.js'
import { harvestPlants } from './harvester.js'
import { catalog } from './catalog.js'
const yearlyPlan =createPlan()
const soybeanSeed = createSoybean()
//console.log(soybeanSeed)
const cornSeed = createCorn()
//console.log(cornSeed)
const sunflowerSeed = createSunflower()
//console.log(sunflowerSeed)
const asparagusSeed = createAsparagus()
//console.log(asparagusSeed)
const wheatSeed = createWheat()
//console.log(wheatSeed)
const potatoSeed = createPotato()
//console.log(potatoSeed)

//const plantSoybean = addPlant(soybeanSeed)
//const plantCorn = addPlant(cornSeed)
//const plantSunflower = addPlant(sunflowerSeed)
//const plantAsparagus = addPlant(asparagusSeed)
//const plantWheat = addPlant(wheatSeed)
//const plantPotato = addPlant(potatoSeed)
plantSeeds(yearlyPlan)
const harvestedSeeds = harvestPlants(usePlants())
console.log(harvestedSeeds)
let parentHTMLElement = document.querySelector(".container")
parentHTMLElement.innerHTML = catalog(harvestedSeeds)

