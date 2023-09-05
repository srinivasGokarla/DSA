//Create a function that returns the reversed words in a sentence.
let str = "my name is srinivas";

let flag = false;
let res = ''
let reverse = "";
for(let i=0;i<str.length;i++){
let word = str[i]
if(word == ' ' && flag) {
    for(let j = res.length -1; j >= 0; j--) {
   reverse += res[j];
  
} 
reverse += " ";
res = ''
flag = false
} else {
res += word;
flag = true;
}   
}
for(let i=  res.length-1; i >= 0; i--) {
    reverse += res[i]
}
console.log(reverse)

//Using split, reverse, and join:

 let ans = str.split(' ').reverse().join(" ")
console.log(ans)
// output : srinivas is name my

//using split,reverse,map

let reverseing = str.split(" ").map((item)=>item.split("").reverse().join("")).join(" ")
console.log(reverseing);
// output : ym eman si savinirs