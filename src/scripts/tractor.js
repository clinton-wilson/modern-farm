import { createSoybean } from './seeds/soybean.js'
import { createCorn } from './seeds/corn.js'
import { createSunflower } from './seeds/sunflower.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createWheat } from './seeds/wheat.js'
import { createPotato } from './seeds/potato.js'
import { addPlant } from './field.js'
import { usePlants } from './field.js'
const plantsArray = usePlants()
const asparagusSeed = createAsparagus()
const cornSeed = createCorn()
const potatoSeed = createPotato()
const soybeanSeed = createSoybean()
const sunflowerSeed = createSunflower()
const wheatSeed = createWheat()

export const plantSeeds = (planArray) => {
    for (const row of planArray) {
        for (const plant of row) {
            if (plant === "Asparagus") {
                plantsArray.push(addPlant(createAsparagus()))
            }
            else if (plant === "Corn") {
                plantsArray.push(addPlant(createCorn()))
            }
            else if (plant === "Potato") {
                plantsArray.push(addPlant(createPotato()))
            }
            else if (plant === "Soybean") {
                plantsArray.push(addPlant(createSoybean()))
            }
            else if (plant === "Sunflower") {
                plantsArray.push(addPlant(createSunflower()))
            }
            else if (plant === "Wheat") {
                    plantsArray.push(addPlant(createWheat()))
            }
        }
    }
    return plantsArray
    }
