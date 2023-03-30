class Year {
    constructor(year) {
        this.year = year
    }

    // get isLeap() {
    //     if(this.year === 2100 || this.year === 2200 || this.year === 2300) {
    //         return false
    //     } else if(this.year % 4 === 0) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }

    get isLeap() {
        if (this.year % 400 === 0 || this.year % 4 === 0 && this.year % 100 !== 0) {
            return true
        } else {
            return false
        }
    }
}

module.exports = Year