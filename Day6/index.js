// Problem 1 : Given a string count the number of words in that string


let sen="The Sun Rises in The East";
let count=0;

for (let i=0;i<=sen.length-1;i++){
  if (sen[i]==" "){
    count++;
  }
}
if (sen.length!=0){
  console.log("Number of words are:", count+1);
}else{
  console.log("Number of words are:", 0);
}