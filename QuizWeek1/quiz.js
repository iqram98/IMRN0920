// Soal 1
function balikKata(string) {
  var balik = "";
  for (var x = string.length - 1; x >= 0; x--) {
    balik += string[x];
  }
  return balik;
}

console.log(balikKata("abcde"));

// Soal 2
function descendingTen(number) {
  if (number) {
    var nilaiAkhir = number - 10;
    var arr = [];
    for (let i = number; i > nilaiAkhir; i--) {
      arr.push(i);
    }
    return arr.join(" ");
  } else {
    return -1;
  }
}

console.log(descendingTen(100));

// Soal 3
function palindrome(string) {
  var balik = "";
  for (var x = string.length - 1; x >= 0; x--) {
    balik += string[x];
  }
  if (balik === string) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("haji ijah"));

// Soal 4
function ularTangga() {
  var arr = [];
  for (let i = 100; i >= 10; i--) {
    arr.push(i);
  }
  return arr.join(" ");
}

console.log(ularTangga());
