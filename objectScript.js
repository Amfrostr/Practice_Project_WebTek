var person = {
    name : "firstname",
    age : 20,
    price : 123
}

person.origin = "Poland";
person["family"] = "Ruski";

function player(x, y, life) {
    this.x = 1;
    this.y = 2;
    this.life = 123;
}

var player1 = new player(3, 4, 321);

class enemy {
    constructor(x, y, life) {
        this.x = x;
        this.y = y;
        this.life = life;
    }
}

var enemy1 = new enemy(2, 3, 567);

var boss = { // boss prototype
    x: 1,
    y: 2,
    health : 123
}

var boss1 = Object.create(boss);

class superBoss {
    constructor(x, y, life) {
        this.x = x;
        this.y = y;
        this.life = life;
    }

    setPosition (x, y) {
        this.x = x;
        this.y = y;
    }

    isAlive () {
        if(this.life > 0) {
            return true;
        }
        else {
            return false;
        }
    }
}