//Given a string print, the number of times each character appears




 let name = "SteveRogers";
 let new_list = {};

 for (i=0;i<=name.length-1;i++){
   
     new_list[name[i]]=new_list[name[i]]+1||1;
 
 
 }console.log(new_list);
