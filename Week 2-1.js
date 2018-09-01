//1.1.
//1.Masukkan nilai Massa Benda dengan 600 kg
//2.Masukkan nilai Percepatan Benda dengan 2 m/s2
//3.Masukkan nila Resultan Gaya dengan 0
//3.Hitung dengan mengggunakan rumus Resultan Gaya= Massa Benda * Percepatan Benda
//4.Tampilkan hasil Resultan Gaya
//5.Selesai

//1.2.
//STORE "MassaBenda" with 600 kg
//STORE "PercepatanBenda" with 2 m/s2
//STORE "ResultanGaya" without any value
//CALCULATE "MassaBenda" times "Percepatan Benda"
//SET "ResultanGaya" with calculation result
//DISPLAY "ResultanGaya"



//2.1
//1.Jika Tahun habis dibagi 4 dan tidak habis di bagi 100 maka tampilkan "Kabisat"
//2.ATAU
//3.Jika Tahun habis dibagi 4, habis dibagi 100 dan habis dibagi 400 maka maka tampilkan "Kabisat"
//4.Jika tidak memenuhi 2 kondisi diatas maka tampilkan "BukanKabisat"
//5.Selesai

//2.2
//IF "Tahun" is divisible by 4 and not divisible by 100
//  DISPLAY "Kabisat"
//IF "Year" divisible by 4 is 0 && "Year" divisible by 100 is 0 && "Year" divisible by 400 is 0
//  DISPLAY "Kabisat"
//ELSE is "BukanKabisat"
//END IF


//3.1
//1. Masukkan nilai Pakaian 0
//2. Selama nilai Pakaian masih dibawah 20 tambah nilai Pakaian dengan 1
//3. Ulangin step 2 sampai nilai Pakaian mencapai 20
//4. Saat nilai pakaian mencapai 20, tampilkan "Penuh" 
//5. Selesai

//3.2
//STORE "Pakaian" with 0
//  WHILE "Pakaian"<20
//    ADD  "Pakaian" by 1
//  ENDW
//DISPLAY "Pakaian"



//4.1
//1. Masukkan nila Murid sebanyak 0
//2. Selama nilai Murid masih dibawah 40 tambah nilai Murid sebanyak 1
//3. Ulangi step 2 sampai nilai murid mencapai 40
//4. Tambahkan Kondisi 
//5. Kondisi pertama jika Murid mempunyai kuku panjang tampilkan dihukum
//6. Kondisi kedua jika Murid mempunyai kuku pendek tampilkan dipuji
//7. Kondisi selesai
//8. Tampilkan Murid dan statusnya
//9. Selesai

//4.2
//STORE "Murid" with 0
//  WHILE "Murid"<40
//    ADD "Murid" by 1
//      IF "Murid" punya "kuku panjang"
//        DISPLAY "dihukum"
//      IF "Murid" punya "kuku pendek"
//        DISPLAY "dipuji"
//      END IF
//  ENDW
//DISPLAY "Murid"










