const growingPlants = []

export const addPlant = (seedObj) => {
   if (Array.isArray(seedObj) === true) {
       growingPlants.push(...seedObj)
   }
   else {
       growingPlants.push(seedObj)
   }
   return growingPlants
}


export const usePlants = () => {
    return growingPlants.map(growingPlants => ({...growingPlants}))
}


