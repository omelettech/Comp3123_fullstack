function gretter(myarray, counter) {
    let greetText = "Hello"
    for (let index = 0; index < myarray.length; index++) {
        console.log(greetText + myarray[index])

    }

}

gretter(["Randy Savage", "Ric Flair", "Hulk Hogan"], 3)

// 2

function capitalize(string) {
    let [first, ...rw] = string
    return first.toUpperCase() + rw.join('').toLowerCase()
}

console.log(capitalize("NODEs"))

//3
const colors = ['red', 'green', 'blue']
const capitalized_colors = colors.map((color) => capitalize(color))
console.log(capitalized_colors)

//4

const values = [1, 60, 34, 30, 20, 5]
const filterLessThan20 = values.filter((n) => {
    if (n < 20) return true
})
console.log(filterLessThan20)
//5
const array = [1, 2, 3, 4]
const calculateSum = array.reduce((n, accumulator) => {
    return accumulator + n
})
const calculateProduct = array.reduce((accumulator, n) => {
    return accumulator * n
})
const calculateInverse = array.reduce((accumulator, n) => {
    return accumulator + (n**-1)
})

//6
class Car{
    constructor(model,year) {
        this.model=model
        this.year=year
    }
    details(){
        return `model: ${this.model} Engine ${this.year}`
    }

}
class Sedan extends Car{
    constructor(model,year,balance) {
        super(model,year)
        this.balance=balance
    }
    info(){
        return `${this.model} has a balance of $${this.balance}`
    }
}

const car2=new Car("Pontiac bandit",2000)
const sedan = new Sedan("Volvo SD",2001,30000)

console.log(car2.details())
console.log(sedan.info())

