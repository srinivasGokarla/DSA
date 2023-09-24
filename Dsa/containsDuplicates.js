let nums = [2,14,18,22,22]
function containsDuplicate(nums) {
    let obj = {}
    for(let i = 0;  i < nums.length; i++) {
      if(obj[nums[i]] === undefined) {
        obj[nums[i]] = 1
      } else {
        obj[nums[i]] += 1;
      }
    }
    for(k in obj) {
     if( obj[k] >  1) {
      return (obj[k])
       return true
     } else {
       return false
     }
    }
};
console.log(containsDuplicate(nums))

// var containsDuplicate = function(nums) {
//   nums.sort((a,b) => a-b)
//   for(let i= 0; i < nums.length; i++) {
//     if(nums[i] == nums[i+1]) {
//       return true 
//     } else {
//       return false
//     }
//   }
// };

var containsDuplicate = function(nums) {
  const s = new Set(nums); 
    return s.size !== nums.length
}