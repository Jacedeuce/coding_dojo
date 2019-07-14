interface BikeInterface {
    price: number
    max_speed: number
}


class Bike {
price: number
max_speed: number
miles: number

constructor(bike: BikeInterface) {
    this.price = bike.price
    this.max_speed = bike.max_speed
    this.miles = 0
}

displayInfo = () => {
    console.log(`The price of this bike is ${this.price}, it goes ${this.max_speed} mph, and it has ${this.miles} miles on it.`)
}

ride = () => {
    console.log("Riding...")
    this.miles += 10
    return this
}

reverse = () => {
    console.log("Reversing...")
    this.miles -=5
    return this
}

}

var myBike = new Bike({price: 300, max_speed: 30})
var yourBike = new Bike({price: 400, max_speed: 20})
var herBike = new Bike({price: 50, max_speed: 15})

myBike.displayInfo()

yourBike.ride().reverse().ride()

yourBike.displayInfo()