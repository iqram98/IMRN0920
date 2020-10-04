// Soal 1
console.log("===Soal 1===");

function range(startNum, finishNum) {
  if (startNum && finishNum) {
    var arr = [];
    if (startNum < finishNum) {
      for (var x = startNum; x <= finishNum; x++) {
        arr.push(x);
      }
    } else {
      for (var x = startNum; x >= finishNum; x--) {
        arr.push(x);
      }
    }
    return arr;
  } else {
    return -1;
  }
}

console.log(range(1, 10));
console.log(range(1));
console.log(range(11, 18));
console.log(range(54, 50));
console.log(range());

// Soal 2
console.log("\n===Soal 2===");

function rangeWithStep(startNum, finishNum, step) {
  if (startNum && finishNum && step) {
    var arr = [];
    if (startNum < finishNum) {
      for (var x = startNum; x <= finishNum; x += step) {
        arr.push(x);
      }
    } else {
      for (var x = startNum; x >= finishNum; x -= step) {
        arr.push(x);
      }
    }
    return arr;
  } else {
    return -1;
  }
}

console.log(rangeWithStep(1, 10, 2));
console.log(rangeWithStep(11, 23, 3));
console.log(rangeWithStep(5, 2, 1));
console.log(rangeWithStep(29, 2, 4));

// Soal 3
console.log("\n===Soal 3===");

function sum(startNum, finishNum, step = 1) {
  if (startNum && finishNum && step) {
    var arr = rangeWithStep(startNum, finishNum, step);
    return arr.reduce(function (a, b) {
      return a + b;
    });
  } else if (startNum) { 
    return startNum;
  } else {
    return 0;
  }
}

console.log(sum(1, 10));
console.log(sum(5, 50, 2));
console.log(sum(15, 10));
console.log(sum(20, 10, 2));
console.log(sum(1));
console.log(sum());

// Soal 4
console.log("\n===Soal 4===");

function dataHandling(datas) {
  datas.forEach((data) => {
    console.log("Nomor ID : " + data[0]);
    console.log("Nama Lengkap: " + data[1]);
    console.log("TTL : " + data[2] + " " + data[3]);
    console.log("Hoby : " + data[4]);
    console.log("\n");
  });
}

var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];

dataHandling(input);

// Soal 5
console.log("\n===Soal 5===");

function balikKata(string) {
  var balik = "";
  for (var x = string.length - 1; x >= 0; x--) {
    balik += string[x];
  }
  return balik;
}

console.log(balikKata("Kasur Rusak")); // kasuR rusaK
console.log(balikKata("SanberCode")); // edoCrebnaS
console.log(balikKata("Haji Ijah")); // hajI ijaH
console.log(balikKata("racecar")); // racecar
console.log(balikKata("I am Sanbers")); // srebnaS ma I

// Soal 6
console.log("\n===Soal 6===");
function dataHandling2(data) {
  data.splice(1, 1, "Roman Alamsyah Elsharawy");
  data.splice(2, 1, "Provinsi Bandar Lampung");
  data.splice(4, 0, "Pria");
  data.splice(5, 1, "SMA Internasional Metro");
  console.log(data);
  var tanggal = data[3].split("/");
  var bulan = tanggal[1];
  switch (bulan) {
    case "01":
      bulan = "Januari";
      break;
    case "02":
      bulan = "Februari";
      break;
    case "03":
      bulan = "Maret";
      break;
    case "04":
      bulan = "April";
      break;
    case "05":
      bulan = "Mei";
      break;
    case "06":
      bulan = "Juni";
      break;
    case "07":
      bulan = "Juli";
      break;
    case "08":
      bulan = "Agustus";
      break;
    case "09":
      bulan = "September";
      break;
    case "10":
      bulan = "Oktober";
      break;
    case "11":
      bulan = "November";
      break;
    case "12":
      bulan = "Desember";
      break;
  }
  console.log(bulan);
  var sortTanggal = data[3].split("/").sort((x, y) => {
    return y - x;
  });
  console.log(sortTanggal);
  console.log(tanggal.join("-"));
  var nama = data[1].slice(0, 15);
  console.log(nama);
}

var input = [
  "0001",
  "Roman Alamsyah",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

dataHandling2(input);
