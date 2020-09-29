// Soal if-else
console.log("===Soal if-else ===");
var nama = "Jhon";
var peran = "Werewolf";

if (nama === "") {
  console.log("Nama Harus Diisi!");
} else if (peran === "") {
  console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!");
} else if (peran === "Penyihir") {
  console.log("Selamat datang di Dunia Werewolf, " + nama);
  console.log(
    "Halo " +
      peran +
      " " +
      nama +
      ", kamu dapat melihat siapa yang menjadi werewolf!"
  );
} else if (peran === "Guard") {
  console.log("Selamat datang di Dunia Werewolf, " + nama);
  console.log(
    "Halo " +
      peran +
      " " +
      nama +
      ", kamu akan membantu melindungi temanmu dari serangan werewolf."
  );
} else if (peran === "Werewolf") {
  console.log("Selamat datang di Dunia Werewolf, " + nama);
  console.log(
    "Halo " + peran + " " + nama + ", Kamu akan memakan mangsa setiap malam!"
  );
}

// Soal switch case
console.log("\n===Soal switch-case ===");
var hari = 21;
var bulan = 1;
var tahun = 1945;

switch (bulan) {
  case 1:
    bulan = "Januari";
    break;
  case 2:
    bulan = "Februari";
    break;
  case 3:
    bulan = "Maret";
    break;
  case 4:
    bulan = "April";
    break;
  case 5:
    bulan = "Mei";
    break;
  case 6:
    bulan = "Juni";
    break;
  case 7:
    bulan = "Juli";
    break;
  case 8:
    bulan = "Agustus";
    break;
  case 9:
    bulan = "September";
    break;
  case 10:
    bulan = "Oktober";
    break;
  case 11:
    bulan = "November";
    break;
  case 12:
    bulan = "Desember";
    break;
  default:
    break;
}

console.log(hari + " " + bulan + " " + tahun);
