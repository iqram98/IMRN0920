// Soal 1
console.log("===Soal 1===");
console.log("LOOPING PERTAMA");
var x = 2;
while (x <= 20) {
  console.log(x + " - I love coding");
  x += 2;
}

console.log("LOOPING KEDUA");
var x = 20;
while (x >= 2) {
  console.log(x + " - I will become a mobile developer");
  x -= 2;
}

// Soal 2
console.log("\n===Soal 2===");
for (var x = 1; x <= 20; x++) {
  if (x % 2 == 1) {
    if (x % 3 == 0) {
      console.log(x + " - I Love Coding");
    } else {
      console.log(x + " - Santai");
    }
  } else {
    console.log(x + " - Berkualitas");
  }
}

// Soal 3
console.log("\n===Soal 3===");
var z = "";
for (let x = 1; x <= 4; x++) {
  for (let y = 1; y <= 8; y++) {
    z += "#";
  }
  z += "\n";
}
console.log(z);

//Soal 4
console.log("\n===Soal 4===");
var z = "";
for (var x = 1; x <= 7; x++) {
  for (var y = 1; y <= x; y++) {
    z += "#";
  }
  z += "\n";
}
console.log(z);

// Soal 5
console.log("\n===Soal 5===");
var z = "";
for (let x = 1; x <= 8; x++) {
  for (let y = 1; y <= 8; y++) {
    if ((x + y) % 2 === 0) {
      z += " ";
    } else {
      z += "#";
    }
  }
  z += "\n";
}

console.log(z);
