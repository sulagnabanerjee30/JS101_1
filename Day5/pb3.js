//Problem 3 : Given an array of numbers find the average of all the even numbers.




let data=[10,20,59,40,75,60];
let sum=0;
let count=0;
for (i=0;i<=data.length-1;i++){
  if (data[i]%2==0){
    sum=sum+data[i];
    count++;
  }
}
console.log(sum/count);