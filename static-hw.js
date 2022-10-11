class Governor {
    constructor() {
        this.votes = 10000000
        this.yearsOfExperience = 14
    }

    static isGovernor = true

    static inOffice() {
        console.log('Governor is in office')
    }
}

console.log(Governor.isGovernor)
Governor.inOffice()


class Person {
    constructor(hairColor, eyeColor, age) {
        this.hairColor = hairColor
        this.eyeColor = eyeColor
        this.age = age
    }
    hungry() {
        console.log("im hungry")
    }
    sleepy() {
        console.log("im sleepy")
    }
    healthy() {
        console.log("im healthy")
    }
}

class PostalWorker extends Person {
    doneMailing() {
        console.log("im done mailing")
    }
    dayOff() {
        console.log("no work today!")
    }
}


class Chef extends Person {
    doneCooking() {
        console.log("im done cooking")
    }
}

const mailman = new PostalWorker("black", "black", 30);
console.log(mailman)
mailman.doneMailing()
mailman.dayOff()
const pw1 = new PostalWorker("brown", "green", 45)
console.log(pw1)
pw1.doneMailing()
pw1.dayOff()

const chef1 = new Chef("blonde", "blue", 21)
console.log(chef1)
chef1.doneCooking()
const chef2 = new Chef("red", "black", 36)
console.log(chef2)
chef2.doneCooking()