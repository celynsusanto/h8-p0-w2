var Hari = 6;
//tanggal 1-31
var Bulan = 9;
//bulan 1-12
var Tahun = 1996;
//tahun 1900-2200;


if (Hari > 31 || Hari < 1) {
  Hari = " Invalid Date";
} else if (Hari <= 31 && Hari >= 1) {
  Hari = Hari;
}
if (Bulan <= 12) {
  switch (Bulan) {
    case 1:
      Bulan = " Januari ";
      break;
    case 2:
      Bulan = " Februari ";
      break;
    case 3:
      Bulan = " Maret ";
      break;
    case 4:
      Bulan = " April ";
      break;
    case 5:
      Bulan = " Mei ";
      break;
    case 6:
      Bulan = " Juni ";
      break;
    case 7:
      Bulan = " Juli ";
      break;
    case 8:
      Bulan = " Agustus ";
      break;
    case 9:
      Bulan = " September ";
      break;
    case 10:
      Bulan = " Oktober ";
      break;
    case 11:
      Bulan = " November ";
      break;
    case 12:
      Bulan = " Desember ";
      break;
  }
} else if (Bulan > 12) {
  Bulan = " Invalid Month "
}
if (Tahun >= 1900 && Tahun <= 2200) {
  Tahun = Tahun
} else if (Tahun < 1900 || Tahun > 2200) {
  Tahun = " Invalid Year "
}

console.log(Hari + Bulan + Tahun)




