function warnTheSheep(arr) {
    let anotherArr = arr.reverse()
    // this change the original arr and giving it another name called anotherArr
    // to create a copy (not changing the original one):
    // let anotherArr = arr.slice()
    // anotherArr is now another array by itself and not referring back to arr

    if(anotherArr[0] === 'wolf') {
        console.log('go away')
    } else {
        let wolf = anotherArr.indexOf('wolf')
        console.log(`sheep number ${wolf} you are about to be eaten`)
    }
} 

let farm = ["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]

warnTheSheep(farm)
warnTheSheep(farm)