//1. 
var dimension=5
for(var row=0; row<dimension; row++){
  asteriks="*"
  console.log(asteriks)
}

//2.
for(var row=0; row<dimension; row++){
  asteriks=""
  for(var col=0; col<dimension; col++){
    asteriks=asteriks+"*"
  }
  console.log(asteriks)
}

//3.
for(var row=0; row<dimension; row++){
  asteriks=""
  for(var col=0; col<=row; col++){
   asteriks=asteriks+"*"
  }
  console.log(asteriks)
}



