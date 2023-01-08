//CONTROL STATEMENT
//if-else

var count=2;
if (count<4){

    console.log("condition is true")
}

else{
    console.log("condition is false")
}


//switch break
var choice =1;
switch (choice){
case 1:console.log("You are in case 1")
        break;
case 2:console.log("You are in case 2")
        break;
default:console.log("you are in default case")
        break;

}

//LOOP STATEMENT

//while loop

// count =5;
// while(count!=0){
// console.log("count is: "+count)
// count--;
// }

//do-while loop
var count=10;
do{
    console.log("count is: "+count)
count--;
}
while(count!=0)

//for loop

for(var i=0;i<=10;i++){
console.log("value of i:-"+i)
}

 console.log("value of i is:-"+i)  //its access outside the loop 
 //                                 its a drawback of var 
 //                                 thats why we can use
//                                  let /let scope is ==within nearest block


for(let j=0;j<=10;j++){
    console.log("value of j:-"+j)
    }
    
   //  console.log("value of i is:-"+j)    //it  is not possible to acces outside the loop







