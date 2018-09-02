//1.
//LOOPING PERTAMA
var nomor = 2
var kalimat = ' - I Love Coding'
while (nomor <= 20) {
  console.log(nomor + kalimat)
  nomor = nomor + 2
}

//LOOPING KEDUA
var nomor1 = 20
var kalimat1 = ' - I will become fullstack developer'
while (nomor1 >= 2) {
  console.log(nomor1 + kalimat1)
  nomor1 = nomor1 - 2
}


//2.
//LOOPING PERTAMA

for (nomor = 1; nomor <= 20; nomor++) {
  var kalimat2 = ' - I Love Coding'
  console.log(nomor + kalimat2)
}

//LOOPING KEDUA

for (nomor = 20; nomor > 0; nomor--) {
  var kalimat3 = ' - I Will Become Fullstack Developer'
  console.log(nomor + kalimat3)
}

//3.
for (counter = 1; counter <= 100; counter++) {
  if (counter % 2 == 0) {
    console.log(counter + " even");
  } else {
    console.log(counter + " odd");
  }
}

for (counter = 1; counter <= 100; counter = counter + 2) {
  if (counter % 3 == 0) {
    console.log(counter + ' kelipatan' + 3);
  } else {
    console.log("");
  }
}

for (counter = 1; counter <= 100; counter = counter + 5) {
  if (counter % 6 == 0) {
    console.log(counter + ' Kelipatan ' + 6);
  } else {
    console.log("")
  }
}

for (counter = 1; counter <= 100; counter = counter + 9) {
  if (counter % 10 == 0) {
    console.log(counter + ' Kelipatan ' + 10)
  } else {
    console.log("")
  }
}