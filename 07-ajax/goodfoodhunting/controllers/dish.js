db = require('./../db')

// const Dish = {
//     all: () => {
//         let sql = 'select * from dishes;'
//         return db.query(sql)
//     },
  
//     findById(id) {
//         const sql = `
//         select * from dishes 
//         where id=$1;
//         `
  
//         return db.query(sql, [id])
//     }
//   }

  class Dish {

    // methods for the instances that the class create
    getName() {

    }

    // method for the class itself
    static all() {
        const sql = 'select * from dishes;'
        return db.query(sql)
    }

    static findById(id) {
        const sql = `
        select * from dishes 
        where id=$1;
        `

        return db.query(sql, [id]).then(res => {
            if (res.rows.length === 0) {
                throw new Error(`record with id ${id} not found`) 
            }

            return res.rows[0]
        })
    }
  }


  module.exports = Dish