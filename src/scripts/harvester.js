// Define and export harvestPlants
// Parameter will be plantsArray, as will the argument
// Define empty array of seed objects to be returned
// Use for of loop to iterate through plants array
// Use if..else statement to determine if the plant is corn or not
// If the plant is corn, us for loop to push corn to the seed array 1/2 the number of outputs
// Else push the the plant to the seed array the number of times 
export const harvestPlants = (plantsArray) => {
    let seedArray = []
    for (const plant of plantsArray) {
        if (plant.type === "Corn") {
            for (let i = 0; i < plant.output * .5; i++)
            seedArray.push(plant)
        }
        else {
        for (let i = 0; i < plant.output; i++) {
            seedArray.push(plant)
        }
    }
}
return seedArray
}