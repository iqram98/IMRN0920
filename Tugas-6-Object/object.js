// Soal 1
console.log("===Soal 1===");
function arrayToObject(arr) {
  if (arr.length <= 0) {
    console.log("kosong");
  } else {
    var object = {};
    var data;
    var now = new Date();
    var thisYear = now.getFullYear();
    arr.forEach((e, index) => {
      var nama = index + 1 + ". " + e[0] + " " + e[1] + " :";
      var age =
        e[3] && e[3] <= thisYear ? thisYear - e[3] : "Invalid birth year";
      object = { firstName: e[0], lastName: e[1], gender: e[2], age };
      console.log(nama);
      console.log(object);
      console.log("\n");
    });
  }
}

// Driver Code
var people = [
  ["Bruce", "Banner", "male", 1975],
  ["Natasha", "Romanoff", "female"],
];
arrayToObject(people);
/*
  1. Bruce Banner: {
      firstName: "Bruce",
      lastName: "Banner",
      gender: "male",
      age: 45
  }
  2. Natasha Romanoff: {
      firstName: "Natasha",
      lastName: "Romanoff",
      gender: "female".
      age: "Invalid Birth Year"
  }
*/

var people2 = [
  ["Tony", "Stark", "male", 1980],
  ["Pepper", "Pots", "female", 2023],
];
arrayToObject(people2);
/*
  1. Tony Stark: {
      firstName: "Tony",
      lastName: "Stark",
      gender: "male",
      age: 40
  }
  2. Pepper Pots: {
      firstName: "Pepper",
      lastName: "Pots",
      gender: "female".
      age: "Invalid Birth Year"
  }
*/

// Error case
arrayToObject([]); // ""

// Soal 2
console.log("\n===Soal 2===");
function shoppingTime(memberId, money) {
  if (memberId && money > 50000) {
    var object = {};
    object.memberId = memberId;
    object.money = money;
    var item = [
      { barang: "Sepatu Stacattu", harga: 1500000 },
      { barang: "Baju Zoro", harga: 500000 },
      { barang: "Baju H & N", harga: 250000 },
      { barang: "Sweater Unikloo", harga: 175000 },
      { barang: "Casing Handphone", harga: 50000 },
    ];
    var beli = [];
    item.forEach((e) => {
      if (money - e.harga >= 0) {
        beli.push(e.barang);
        money -= e.harga;
      }
    });
    object.listPurchased = beli;
    object.changeMoney = money;
    return object;
  } else if (money < 50000) {
    return "Mohon maaf, uang tidak cukup";
  } else {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  }
}

// TEST CASES
console.log(shoppingTime("1820RzKrnWn08", 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime("82Ku8Ma742", 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime("", 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime("234JdhweRxa53", 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

// Soal 3
console.log("\n===Soal 3===");

function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  var object = [];
  var bayar;
  arrPenumpang.forEach((element) => {
    bayar = (rute.indexOf(element[2]) - rute.indexOf(element[1])) * 2000;
    object.push({
      penumpang: element[0],
      naikDari: element[1],
      tujuan: element[2],
      bayar,
    });
  });

  return object;
}

//TEST CASE
console.log(
  naikAngkot([
    ["Dimitri", "B", "F"],
    ["Icha", "A", "B"],
  ])
);
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
