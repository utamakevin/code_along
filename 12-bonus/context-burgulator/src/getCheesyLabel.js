const getCheesyLabel = ingredients => {
    const cheeseCount = ingredients.filter(ing => ing === "cheese").length
  
    return {
      2: "double cheese",
      3: "triple cheese",
    }[cheeseCount]
  }
  
  export default getCheesyLabel