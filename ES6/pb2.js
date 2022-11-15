/*Write code to calculate the average of an array
If there are no items in the array it should return 0
NOTE: Create a function to find the sum of elements in an array and use that function to find out the average
Do this Problem using Arrow Function*/

let average=(arr)=>{

let sum=0;
let count=0;
   
if(arr.length!==0){  
arr.forEach(function(element, index) {
  sum += element;
  count++;
})
}else{
    console.log(0)
}
console.log("Averageis",sum/count);
}
average([1,2,3,4,5,6])