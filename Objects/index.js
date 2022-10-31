//Given an array find the unique items in the array




let people=["Munnu","Ron","Ron","Aman","Mark","Chunnu"];

let list={};

for (let i=0;i<=people.length-1;i++){
  let key=people[i];
  list[key]=1;
}
console.log(list);