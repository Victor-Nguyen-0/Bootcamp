class Ninja {
    constructor (name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log("This ninja's name is: " + this.name);
    }

    showStats(){
        console.log("These are the stats for: " + this.name);
        console.log("Health: " + this.health);
        console.log("Speed: " + this.speed);
        console.log("Strength: " + this.strength);
    }

    drinkSake() {
        this.health += 10;
        console.log(this.name + " just drank sake and their health is now: " + this.health);
    }
}

// console.log("Test creation: Victor");
// const ninja1 = new Ninja("Victor", 10, 5, 5);
// ninja1.sayName();
// console.log("----------------");
// ninja1.showStats();
// console.log("----------------");
// ninja1.drinkSake();

class Sensei extends Ninja {
    constructor(name, health = 100, speed = 10, strength = 10, wisdom = 10) {
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }

    speakWisdom() {
        console.log("Sensei says: What one programmer can do in one month, two programmers can do in two months.");
    }
}

console.log("Creating Sensei A");
const sensei1 = new Sensei("A");
console.log("----------------");
sensei1.showStats();
console.log("----------------");
sensei1.speakWisdom();