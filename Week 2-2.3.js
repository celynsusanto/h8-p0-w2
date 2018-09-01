var Hari = 6;
//tanggal 1-31
var Bulan = 9;
//bulan 1-12
var Tahun = 1996;
//tahun 1900-2200;


switch (true) {
  case Hari > 31:
    Hari = " Invalid Day ";
    break;
  case Hari < 1:
    Hari = " Invalid Day ";
    break;
  default:
    Hari = Hari;
    break;
}

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
  default:
    Bulan = " Invalid Month "
}


switch (true) {
  case Tahun < 1900:
    Tahun = " Invalid Year ";
    break;
  case Tahun > 2200:
    Tahun = " Invalid Year ";
    break;
  default:
    Tahun = Tahun;
    break;
}

console.log(Hari + Bulan + Tahun)




