// ecmascript - official name

// versions - spec has finished - published
// take some time to work in all browser

// es5 2011
// es6 2015

// befor es5 we have var

var age = 500

var age = 5

console.log(age) // 5

// scopes - concept in js in any progarmming languange
// 2 scopes - global - function
// 

function doSomething() {
    var secret = 'pudding' // local to the function
}

for (var i = 0; i < 5; i++) {
    console.log(i)
}

console.log(i)

// let gives you one more scope - within {}

{
    let username = 'dt'
}

