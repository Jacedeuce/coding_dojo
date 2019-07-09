class Ninja {
    constructor(name, health=100, speed=3, strength=3) {
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }

    sayName() {
        console.log(`My Name is ${this.name}`)
    }
    
    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`)
    }

    drinkSake() {
        console.log(`${this.name}: *gulp* *gulp* *gulp* - "aaahh..."`)
        this.health += 10
    }
}

class Sensei extends Ninja {
    constructor(name, health=200, speed=10, strength=10, wisdom=10) {
        super(name, health, speed, strength)
        this.wisdom = wisdom
    }
    speakWisdom() {
        super.drinkSake()
        console.log(`${this.name}: "When everything come your way, you drive in wrong lane." Health now ${this.health}.`)
    }

}

shinobi = new Ninja("Shinobi")
ryu = new Ninja("Ryu")
splinter = new Sensei("Splinter")

shinobi.sayName()
ryu.sayName()
splinter.sayName()

shinobi.showStats()

shinobi.drinkSake()

shinobi.showStats()

splinter.speakWisdom()

shinobi.punch(ryu)

ryu.kick(shinobi)

shinobi.punch(ryu)

shinobi.punch("no one")