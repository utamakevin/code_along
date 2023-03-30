function checkFilteredArg(num) {
    if(num.length === 11 && num[0] !== '1') {
        throw new Error('11 digits must start with 1')
    }

    // if(num.length === 11 && num[1] === '0') {
    //     throw new Error('Area code cannot start with zero')
    // }
    // if(num.length === 11 && num[1] === '1') {
    //     throw new Error('Area code cannot start with one')
    // }

    // if(num.length === 11 && num[4] === '0') {
    //     throw new Error('Exchange code cannot start with zero')
    // }


    if(num.length === 9) {
        throw new Error('Incorrect number of digits')
    }
    if(num.length > 11) {
        throw new Error('More than 11 digits')
    }
    if(num[0] === '0') {
        throw new Error('Area code cannot start with zero')
    }
    if(num[0] === '1') {
        throw new Error('Area code cannot start with one')
    }
    if(num[3] === '0') {
        throw new Error('Exchange code cannot start with zero')
    }
    if(num[3] === '1') {
        throw new Error('Exchange code cannot start with one')
    }
   

}

function checkRawArg(num) {
     if(/[a-zA-Z]/i.test(num)) {
        throw new Error('Letters not permitted')
    }
     if(/@/i.test(num)) {
        throw new Error('Punctuations not permitted')
    }

}


class Phone {
    constructor(num) {
        this.num = num
        checkRawArg(num)
        checkFilteredArg(this.number)
    }

    get number() {
        let numArr = [0,1,2,3,4,5,6,7,8,9]

        let numberArr = this.num.split('')
        
        let filteredNum = numberArr.filter(char => {
            if(char === ' ') {
                return false
            } 

            if (numArr.includes(Number(char))) {
                return true
            } else {
                return false
            }
        }).join('')
        
        
        if (filteredNum.length === 11 && filteredNum.split('')[0] === '1') {
            filteredNum = filteredNum.split('').slice(1).join('')
            
        }
            return filteredNum
        
    }

}
module.exports = Phone