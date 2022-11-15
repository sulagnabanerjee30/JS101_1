/*Given a string swap the case and print the output
Sample Input - Test
Sample Output - tEST
NOTE: Use multiple functions to achieve the result, NOT one single code block
Do not use inbuilt functions and use Arrow function to do this problem*/

let st="Test"

let low="abcdefghijklmnopqrstuvwxyz";
let upp="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let update=(st)=>{
  let bag="";
  for(let i=0;i<st.length;i++){
    for(let j=0; j<low.length; j++){
      if(st[i]==low[j]){
        bag+=upp[j]
      }else if(st[i]==upp[j]){
        bag+=low[j]
      }
    }
  }
  console.log(bag)
}

update(st)