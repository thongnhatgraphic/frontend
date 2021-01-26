class People {
    constructor(name, heavy) {
        this.name = name;
        this.heavy = heavy;
        this.food
    }
    eat(food) {
        food.decreaseHeavy()
        this.heavy += 1
    }
}
class Fruit {
    constructor(name, heavy) {
        this.name = name;
        this.heavy = heavy;
    }
    decreaseHeavy() {
        this.heavy -= 1
    }

}
var adam = new People("Adam", 60);
var eva = new People("Eva", 54);
var apple = new Fruit("Apple", 6)
adam.eat(apple)
adam.eat(apple)
eva.eat(apple)
adam.eat(apple)
eva.eat(apple)
eva.eat(apple)
console.log(adam, eva, apple);
