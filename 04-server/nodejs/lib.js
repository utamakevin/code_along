const { get } = require("http")

function getFavColour() {
    // image lots decition marking code...

    return "mistyrose"
}

function getLeastFavColour() {
    return "darkolivegreen"
}


module.exports = {
    getFavColour: getFavColour,
    getLeastFavColour: getLeastFavColour,
}