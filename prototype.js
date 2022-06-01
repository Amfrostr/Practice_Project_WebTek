class vehicle {
    constructor(maxspeed, color, model) {
        this.maxspeed = maxspeed
        this.color = color
        this.model = model
    }

    drive(model, speed, color) {
        if(speed <= this.maxspeed) {
            console.log(this.model + " of " + this.color + " color driving at " + speed + " km/h!")
        } else {
            console.log("Sorry, too fast for this car")
        }
    }
}

var car = Object.create(vehicle);
car.seats = 4;
car.canSeat = function(numberOfSeats) {
    if(this.seats === numberOfSeats) {
        return true;
    }
}

var redPorsche = Object.create(car);

vehicle.numberOfWheels = 4;

//console.log(redPorsche.numberOfWheels)

var bike = Object.create(vehicle)
bike.numberOfWheels = 2;
console.log(vehicle.numberOfWheels)
console.log(redPorsche.numberOfWheels)
console.log(bike.numberOfWheels)
