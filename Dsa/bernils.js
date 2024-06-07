// the initial car speed is 57km/hr and the car increased the speed by every 1 hour 3km/hr. find the total distance the car covered in 7 hours



let intial = 57;
let arr = [];


for(i=0;i<7;i++){
    intial+=3
    arr.push(intial)
}
let sum = 0;
for(i=0;i<arr.length;i++){
sum+=arr[i]
}
console.log(sum)