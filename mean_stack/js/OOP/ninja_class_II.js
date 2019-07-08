function Ninja(name, health=100, my_speed=3, my_strength=3){
    var speed = my_speed;
    var strength = my_strength;

    this.name = name;
    this.health = health;
    this.sayName = function() {
        console.log(`"My name is ${this.name}."`)
    }
    this.showStats = function() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${speed}, Strength: ${strength}`)
    }
    this.drinkSake = function() {
        console.log(`*gulp* *gulp* *gulp* - "aaahh..."`)
        this.health += 10
    }
    this.punch = function(punched) {
        if (punched instanceof Ninja){
            punched.health -= 5
            console.log(`${punched.name} was punched by ${this.name} and lost 5 health! ${punched.name} has ${punched.health} health remaining.`)
        } else {
            console.log('You must input an instance of the Ninja class.')
        }
    }
    this.kick = function(kicked) {
        if (kicked instanceof Ninja){
            kicked.health -= 15
            console.log(`${kicked.name} was kicked by ${this.name} and lost 15 health! ${kicked.name} has ${kicked.health} health remaining.`)
        }else {
            console.log('You must input an instance of the Ninja class.')
        }
    }
}

shinobi = new Ninja("Shinobi")
ryu = new Ninja("ryu")

shinobi.sayName()
ryu.sayName

shinobi.showStats()

shinobi.drinkSake()

shinobi.showStats()

shinobi.punch(ryu)

ryu.kick(shinobi)

shinobi.punch(ryu)

shinobi.punch("no one")