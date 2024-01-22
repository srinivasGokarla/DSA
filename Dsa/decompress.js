function decompressString(string) {
    //write code here
   let ltr = "abcdefghijklmnopqrstuvwxyz";
   let num = '0123456789';
   let arr = [];
   
   for(let i= 0; i < string.length; i++) {
       for(let j = 0; j < ltr.length; j++) {
           if(string[i] == ltr[j]) {
               for(let k = 0; k < num.length; k++) {
                   if(string[i+1] == num[k]) {
                       for(let l= 0; l < num[k]; l++) {
                           arr.push(string[i])
                       }
                   }
               }
           }
       }
       
   }
   console.log(arr.join(""))
  }
  