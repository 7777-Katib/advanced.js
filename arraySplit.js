const nums=[1,2,3,4,5,6,7,8];
const part=nums.slice(2,5); //start,end
const removed=nums.splice(2,3,455);//start,count,item inject
console.log(removed);
console.log(nums);
//console.log(part);


const together=nums.join(" ");
console.log(together);