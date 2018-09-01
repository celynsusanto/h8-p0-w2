function konversiMenit(menit){
  var mins=menit%60;
  var hrs=(menit-mins)/60
  if(mins<10){
    return hrs+ ":" + "0" + mins
  }else{
    return hrs+":"+mins
  }
  // var jam=menit/60;
  // var rjam=Math.floor(jam);
  // var min=(jam-rjam)*60;
  // var rmin=Math.round(min)
  // return(rjam + ":" + rmin)
}
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00