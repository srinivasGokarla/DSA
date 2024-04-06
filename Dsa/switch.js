var day = 7;

switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("None");
}
10 > 5 ? console.log("Yes") : console.log("No");

let i = 0;
while(i < 10) {
    console.log("Hello World!");
    i++;
}

let j = 0;
while(true) {
    console.log("Practicing Again")
    i++;
    break;
}
console.log("End of the Loop!")


let name = "Srinivas"

let k = name.indexOf("n")
let uc = name.toUpperCase()
let sub = name.substring(2, 5);

console.log(k,uc,sub)