var Nama= "Zero";
var Peran= "Penyihir";

if (Nama=="") {
  console.log("Nama harus diisi!");
} else if (Nama== "Mikael" && Peran== "") {
  console.log("Halo Mikael, Pilih peranmu untuk memulai game!");
} else if (Nama== "Nina" && Peran== "Ksatria") {
  console.log("Selamat datang di Dunia Proxytia, Nina " + "\n" + "Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!");
} else if (Nama== "Danu" && Peran== "Tabib") {
  console.log("Selamat datang di Dunia Proxytia, Danu" + "\n" + "Halo Tabib Danu, kamu akan membantu temanmu yang terluka.");
} else if (Nama== "Zero" && Peran== "Penyihir") {
  console.log("Selamat datang di Dunia Proxytia, Zero " + "\n" + "Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!")
}