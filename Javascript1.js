// contoh program If Else 
let nilai = 70;

if (nilai>=80){
    console.log("Good job, Nilai Anda A")
}else if (nilai >=70){
    console.log("good, nilai Anda B")
}else if (nilai >=60){
    console.log("nilai anda C")
}else if (nilai >=50){
    console.log("sad.. nilai anda D")
}else {
    console.log(" Anda Tidak Lulus, nilai anda adalah " + nilai);
}
// end 

// contoh nested if
function HitungNilai(nilai) {
    if (nilai >= 0 && nilai <= 100) {

      if (nilai >= 90) {
        return 'Nilai Anda A, Sangat Baik';
      } else if (nilai >= 80) {
        return 'Nilai Anda B, Baik';
      } else if (nilai >= 70) {
        return 'Nilai Anda C, Cu';
      } else {
        return 'Nilai Anda D, Kurang';
      }
    } else {
      return 'Nilai tidak valid';
    }
  }
  
  const nilaiMahasiswa = 45;
  const hasil = HitungNilai(nilaiMahasiswa);
  console.log(`Hasil: ${hasil}`);
//   end

// contoh switch case 
const Day = "Jumat";

switch (Day) {
  case 'Senin':
    console.log('Hari ini adalah Senin.');
    break;

  case 'Selasa':
    console.log('Hari ini adalah Selasa.');
    break;

  case 'Rabu':
    console.log('Hari ini adalah Rabu.');
    break;

  case 'Kamis':
    console.log('Hari ini adalah Kamis.');
    break;

  case 'Jumat':
    console.log('Hari ini adalah Jumat.');
    break;

  case 'Sabtu':
  case 'Minggu':
    console.log('Hari ini adalah Hari libur kerja.');
    break;

  default:
    console.log('OOPS.. Hari tidak ditemukan.');
    break;
}
// end 

// contoh for statement 
for (let i= 0; i <= 10; i++) {
       if(i==2){
        continue
       }   
       console.log(i)
    }
// end

// contoh while
let i = 10
while (i <=20) {
    console.log(i)
    i++
}
// end 

// contoh do while
let n = 1;
do {
  console.log(n);
  n++;
} while (n <= 10);
// end

// contoh function
function tambah(value1, value2) {
    return value1 + value2;
  }
  
  const hasilPenjumlahan = tambah(70, 500);
  console.log('Hasil Dari penjumlahan diatas adalah: ', hasilPenjumlahan); 
// end

