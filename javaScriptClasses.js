// Classes HW

class Cat {
    eyes = 2;
    mouth = 1;
    tail = 1;

    eat(food){
        console.log(`I am eating ${food}, yammymeao`);
    }

    drink(myDrink){
        console.log(`I am drinking ${myDrink}`);
    }

    walk(){
        console.log('walk walk');
    }
}

const tom = new Cat;
const jerry = new Cat;

// console.log(`${tom.eyes} and ${jerry.walk}`)
console.log(tom);
console.log(jerry);

console.log('------- tom --------');
tom.drink("milk");
tom.eat('fish');
tom.walk();
console.log('------- jerry --------');
jerry.drink("water");
jerry.eat('tuna');
jerry.walk();


// -----------------------------Q2---------------------------//

class Pirate {

    constructor(hat, captainName, destination){
        this.hat = hat;
        this.captainName = captainName;
        this.destination = destination;
    }

    sail(){
        console.log(`sail to ${this.destination} with ${this.captainName}`);
    }

    lookingFor(toLookFor){
        console.log(`I'm trying to find the ${toLookFor}`);
    }

    pirateSounds(){
        console.log('yoooo hoooooo');
    }
  
}

const jollyRoger = [new Pirate(true, 'Lofy', 'One Pice'), new Pirate(false, 'Zoro', 'where ever lofy goes'), new Pirate(false, 'yosup', 'does not know')];
const blackPearl = [new Pirate(true, 'Jack Sparow','fountain of youth '), new Pirate(false, 'Abdul', 'no one knows'), new Pirate(true, 'MERN developer', 'VS code')];

jollyRoger.forEach(pirateClass => {
    console.log(pirateClass);
});
blackPearl.forEach(pirateClass => {
    console.log(pirateClass);
});

console.log(jollyRoger[0].lookingFor('One Pice'));