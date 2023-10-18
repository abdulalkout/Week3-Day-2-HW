// Classes HW

class Cat {
    constructor(eyes, mouth, tail){
        this.eyes = eyes;
        this.mouth = mouth;
        this. tail = tail;
    }

    eat(food){
        console.log(`I am eating ${food}, yammymeao`)
    }

    drink(myDrink){
        console.log(`I am drinking ${myDrink}`)
    }

    walk(){
        console.log('walk walk')
    }
}

const tom = new Cat(2, 1, 1);
const jerry = new Cat(2, 1, 0);

// console.log(`${tom.eyes} and ${jerry.walk}`)
console.log(tom);
console.log(jerry);

console.log('------- tom --------')
tom.drink("milk");
tom.eat('fish');
tom.walk();
console.log('------- jerry --------')
jerry.drink("water");
jerry.eat('tuna');
jerry.walk();
