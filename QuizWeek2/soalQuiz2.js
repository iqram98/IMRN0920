/**
 * Berikut soal quiz kali ini, terdiri dari 3 Soal
 * Kerjakan dengan sebaik mungkin, dengan menggunakan metode yang telah dipelajari,
 * Tidak diperkenankan untuk menjawab hanya dengan console.log('teks jawaban');
 * maupun dengan terlebih dahulu memasukkannya ke dalam variabel, misal var a = 'teks jawaban'; console.log(a);
 * 
 * Terdapat tambahan poin pada setiap soal yang dikerjakan menggunakan sintaks ES6 (+5 poin)
 * Jika total nilai Anda melebihi 100 (nilai pilihan ganda + coding), tetap akan memiliki nilai akhir yaitu 100
 * 
 * Selamat mengerjakan
*/

/*========================================== 
  1. SOAL CLASS SCORE (10 poin + 5 Poin ES6)
  ==========================================
  Buatlah sebuah class dengan nama Score. class Score tersebut memiliki properti "subject", "points", dan "email". 
  "points" dapat di input berupa number (1 nilai) atau array of number (banyak nilai).
  tambahkan method average untuk menghitung rata-rata dari parameter points ketika yang di input berupa array (lebih dari 1 nilai)
*/
console.log("===Soal 1===");
class Score {
  constructor(){
    this.subject;
    this.points;
    this.email;
  }

  average(){
    if (Array.isArray(this.points)) {
      let nilai = 0;
      for (let x = 0; x <= this.points.length - 1; x++) {
        nilai += this.points[x];  
      }
      nilai = nilai/this.points.length;
      return nilai;
    } else {
      return this.points;
    }
  }
}

const score = new Score;
score.points = [75,80,95,90];
console.log(score.average());

/*=========================================== 
  2. SOAL Create Score (10 Poin + 5 Poin ES6)
  ===========================================
  Membuat function viewScores yang menerima parameter data berupa array multidimensi dan subject berupa string
  Function viewScores mengolah data email dan nilai skor pada parameter array 
  lalu mengembalikan data array yang berisi object yang dibuat dari class Score.
  Contoh: 

  Input
   
  data : 
  [
    ["email", "quiz-1", "quiz-2", "quiz-3"],
    ["abduh@mail.com", 78, 89, 90],
    ["khairun@mail.com", 95, 85, 88]
  ]
  subject: "quiz-1"

  Output 
  [
    {email: "abduh@mail.com", subject: "quiz-1", points: 78},
    {email: "khairun@mail.com", subject: "quiz-1", points: 95},
  ]
*/
console.log("\n===Soal 2===");
const data = [
  ["email", "quiz - 1", "quiz - 2", "quiz - 3"],
  ["abduh@mail.com", 78, 89, 90],
  ["khairun@mail.com", 95, 85, 88],
  ["bondra@mail.com", 70, 75, 78],
  ["regi@mail.com", 91, 89, 93]
]

function viewScores(data, subject) {
  let obj = [];
  data.forEach(e => {
    if (e[0] == 'email') return;
    let nilai;
    if (subject == "quiz-1") {
      nilai = e[1];
    } else if(subject == "quiz-2") {
      nilai = e[2];
    } else {
      nilai = e[3];
    }
    obj.push({
      email: e[0],
      subject,
      points: nilai
    })
  });
  console.log(obj);
}

// TEST CASE
viewScores(data, "quiz-1")
viewScores(data, "quiz-2")
viewScores(data, "quiz-3")

/*==========================================
  3. SOAL Recap Score (15 Poin + 5 Poin ES6)
  ==========================================
    Buatlah fungsi recapScore yang menampilkan perolehan nilai semua student. 
    Data yang ditampilkan adalah email user, nilai rata-rata, dan predikat kelulusan. 
    predikat kelulusan ditentukan dari aturan berikut:
    nilai > 70 "participant"
    nilai > 80 "graduate"
    nilai > 90 "honour"

    output:
    1. Email: abduh@mail.com
    Rata-rata: 85.7
    Predikat: graduate

    2. Email: khairun@mail.com
    Rata-rata: 89.3
    Predikat: graduate

    3. Email: bondra@mail.com
    Rata-rata: 74.3
    Predikat: participant

    4. Email: regi@mail.com
    Rata-rata: 91
    Predikat: honour

*/
console.log("\n===Soal 3===");

function recapScores(data) {
  data.forEach((e, index) => {
    if (e[0] == 'email') return;
    let score = new Score;
    score.points = [e[1], e[2], e[3]];
    let predikat;
    if (score.average() > 70 && score.average() <= 80) {
      predikat = "participant";
    } else if (score.average() > 80 && score.average() <= 90){
      predikat = "graduate";
    } else if (score.average() > 90){
      predikat = "honour";
    }
    console.log(`${index}. Email: ${e[0]}`);
    console.log(`Rata-rata: ${(Number.isInteger(score.average())) ? score.average() : score.average().toFixed(1)}`);
    console.log(`Predikat: ${predikat}`);
    console.log("\n");

  });
}

recapScores(data);
