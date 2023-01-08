//Anonymous Function

//without parameter without return type
let temp1=function (){
   console.log("First type of anonymous function is called ")
 }
temp1();




//with parameter with return type


let temp2=function (a:number,b:number):number{

return (a+b)
}
let res=temp2(10,10)
console.log("result is "+res)

//without parameter with return type 

let temp3=function():number{
    return (5+5)
}

let res1=temp3();
console.log("result is "+res1)

//with parameter without return type 

let temp4=function(a:number,b:number){
console.log("addition is"+(a+b))

}
temp4(10,10);











