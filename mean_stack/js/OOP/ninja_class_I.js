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

}

shinobi = new Ninja("Shinobi")

shinobi.sayName()

shinobi.showStats()

shinobi.drinkSake()

shinobi.showStats()