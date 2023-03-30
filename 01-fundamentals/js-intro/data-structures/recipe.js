let favRecipe = {
    title: "Banana Bread",
    servings: 2,
    ingredients: ["flour", "sugar", "banana"]
}


console.log(favRecipe.title)
console.log("Serves: " + favRecipe.servings)
console.log("Ingredients: ")

let i = 0
while (i < favRecipe.ingredients.length) {
    console.log(favRecipe.ingredients[i])
    i++
}
