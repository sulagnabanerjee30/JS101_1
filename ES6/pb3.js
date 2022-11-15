/*Write a function to convert a character to lower case
Use this function to convert a given word to lower case
Use that function to convert an array of strings to array of lower case strings
Sample Input ["MA", "SA", "I", "SCH", "OOL"]
Sample Output ["ma", "sa", "i", "sch", "ool"]
Do this Problem using Arrow function.*/

let arr=["MA", "SA", "I", "SCH", "OOL"];

let low="abcdefghijklmnopqrstuvwxyz";
let upp="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 
let change=(arr)=>{
 let ans=[];
for(let i=0; i<arr.length; i++){
    let bag="";
    for(let j=0; j<arr[i].length; j++){
     for(let k=0; k<upp.length; k++){
       if(arr[i][j]==upp[k]){
         bag+=low[k]
       }
     }
    }
  ans.push(bag)
}
console.log(ans)
}
change(arr)