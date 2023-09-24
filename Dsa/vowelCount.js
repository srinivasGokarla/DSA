//Implement a function to count the number of vowels in a string.

let name = "srinivas"
let vo = 0, con = 0;
for(let i= 0; i < name.length; i++) {
    console.log(name[i])
    if(name[i] == 'a' || name[i] == 'e' ||   name[i] == 'i' || name[i] == 'o'  || name[i] == 'u') {
        vo++;
    } else {
        con++;
    }
}
console.log("Number of Vowels in name : ", vo)
console.log("Number of consonants in name : ", con )
