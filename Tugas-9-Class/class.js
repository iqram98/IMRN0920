// Soal 1
class Animal {
  constructor(name) {
    this._name = name;
    this._legs = 4;
    this._cold_blooded = false;
  }
  get name() {
    return this._name;
  }
  get legs() {
    return this._legs;
  }
  get cold_blooded() {
    return this._cold_blooded;
  }
}

class Ape extends Animal {
  constructor(name) {
    super(name);
    this._legs = 2;
  }

  yell() {
    return console.log("Auooo");
  }
}

class Frog extends Animal {
  jump() {
    return console.log("hop hop");
  }
}

let sheep = new Animal("shaun");

console.log("== Soal 1 ==");
console.log("-- Class Animal");
console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);

let sungokong = new Ape("kera sakti");
console.log("-- Class Ape");
sungokong.yell();

let kodok = new Frog("buduk");
console.log("-- Class Frog");
kodok.jump();

console.log("\n========");

class Clock {
  constructor({ template }) {
    this.template = template;
    this.timer;
  }
  render = () => {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    var output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  };
  stop = () => {
    clearInterval(this.timer);
  };
  start = () => {
    this.render();
    this.timer = setInterval(this.render, 1000);
  };
}

console.log("\n== Soal 2 ==");
var clock = new Clock({ template: "h:m:s" });
clock.start();
