let arr = [
    {title: "title1",
    author: "author1",
    alreadyRead: true,
}, 
    {title: "title2",
    author: "author2",
    alreadyRead: false,
}, 
]

let i = 0
while (i < arr.length) {
    if (arr[i].alreadyRead) {
        console.log(`You already read ${arr[i].title} by ${arr[i].author}`)
    } else {
        console.log(`You still need to read ${arr[i].title} by ${arr[i].author}`)
    }
    i++
}