//1.
//LOOPING PERTAMA
var statement=0
var nomor=2
while(statement<10, nomor<=20){
  console.log(nomor + ' - I Love Coding')
  statement=statement+1
  nomor=nomor+2
}

//LOOPING KEDUA
var statement1=10
var nomor1=20
while(statement1>0, nomor1>=2){
  console.log(nomor1 + ' - I will become fullstack developer')
  statement1=statement1-1
  nomor1=nomor1-2
}


//2.
//LOOPING PERTAMA
for (statement=1, nomor=1; statement<=20, nomor<=20; statement++, nomor++){
  console.log(nomor + ' - I Love Coding')
}
//LOOPING KEDUA
for(statement=20, nomor=20; statement>0, nomor>0; statement--, nomor--){
  console.log(nomor + ' - I Will Become Fullstack Developer')
}

//3.
for(counter=1; counter<=100; counter++){
  if(counter%2==0){
    console.log(counter+" even");
  } else {
    console.log(counter+" odd");
  }
}

for(counter=1; counter<=100; counter=counter+2){
  if(counter%3==0){
    console.log(counter + ' kelipatan' + 3);
  }else{
    console.log("");
  }
}

for(counter=1; counter<=100; counter=counter+5){
  if(counter%6==0){
    console.log(counter +' Kelipatan ' + 6);
  }else{
    console.log("")
  }
}

for(counter=1; counter<=100; counter=counter+9){
  if(counter%10==0){
    console.log(counter + ' Kelipatan ' + 10)
  }else{
    console.log("")
  }
}