//1. 
function shoutOut(text){
  return(text);
}
console.log("Hello Function")

//2.
// function calculateMultiply(num1, num2){
//   return num1*num2
// }
// var hasilPerkalian = calculateMultiply(5,6);
// console.log(hasilPerkalian);

function calculateMultiply(num1, num2){
  return num1*num2
}
var num1= 5
var num2= 6
var hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian)

//3.
function processSentence(Name, Age, Address, Hobby){
  return('Nama Saya ' + Name + ', umur saya ' + Age + ' tahun' + ', alamat saya di ' + Address + ', dan saya punya hobby yaitu ' + Hobby + '!')
}
var Name = "Agus";
var Age = 30;
var Address = "Jln. Malioboro, Yogjakarta";
var Hobby = "gaming";

var fullSentence= processSentence(Name, Age, Address, Hobby);
console.log(fullSentence);

