//Problem 1: Print the Calendar date in the below format



let day;
for (let month=1;month<=12;month++){
  if (month==2){
    day=28;
  }else if (month==4||month==6||month==9||month==11){
    day=30;
  }else{
    day=31;
  }
  for (let d=1;d<=day;d++){
    console.log(d+"-"+month);
  }
}