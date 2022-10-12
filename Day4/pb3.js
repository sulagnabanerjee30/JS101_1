//Print the average of even numbers from 1 to 100 (both included)


let x = 1;
let sum = 0;
let count= 0;
while(x<=100){
  if (x%2==0){
    sum=sum+x;
    count++;
  }
  x++;
}
console.log(sum/count);