// Soal 1
console.log("===Soal 1===");

function teriak() {
  return "Halo Sanbers!";
}

console.log(teriak());

// Soal 2
console.log("\n===Soal 2===");

function kalikan(x, y) {
  return x * y;
}

var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1, num2);
console.log(hasilKali);

// Soal 3
console.log("\n===Soal 3===");

function introduce(nama, age, address, hobby) {
  return (
    "Nama saya " +
    nama +
    ", umur saya " +
    age +
    " tahun, alamat saya di " +
    address +
    ", dan saya punya hobby yaitu " +
    hobby +
    "!"
  );
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogyakarta";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);
