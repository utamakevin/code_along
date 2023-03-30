// environment variables

// console.log(process.env.COLOUR)

const pg = require ('pg')

const client = new pg.Client({
    database: 'game',
    user: 'postgres',
    password: process.env.PASSWORDDEMO,
})

client.connect()

// "insert into players (name, score) values ('stefanus', 3);"

// client.query(sql, () => {

// })

client.query('select * from players;', (err, res) => {
    
    let players = res.rows
    players.forEach(player => {
        console.log(player.name)
    })
    
    client.end()
})

