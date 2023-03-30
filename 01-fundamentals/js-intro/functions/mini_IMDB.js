// The Movie Database
movie = {
    title: "Captain America",
    duration : 250,
    stars: ["Chris Evans", "Marilyn Monroe", "Benedict Cumberbatch"]
}

function printOut() {
    result = `${movie.title} lasts for ${movie.duration} minutes. Stars: ${movie.stars.join(", ")}.`
    return result
}

