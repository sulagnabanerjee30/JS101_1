//Problem 2: Print Prime Numbers from 1 to given limit




let num=10;
let factors=0;

for (i=1;i<=num;i++){
  if (num%i==0){
    factors++;
  }
}
if (factors==2){
  console.log(num,"is prime");
}else{
  console.log(num,"is not prime");
}