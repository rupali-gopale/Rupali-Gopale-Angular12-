//fat arrow function

//without parameter/reurn type
let temp=()=>{
    console.log("First type of fat arrow function")
}

temp();


//with parameter/return 

let temp6=(a:number,b:number):number=>{
    return(a+b)
}

let res6=temp6(100,200);
console.log("Result is "+res6)


// without parameter/with reurn type

let temp7=():number=>{
return(5-5)
}
let res7=temp7()
console.log("result is:"+res7) 

//with parameter /without return type

let temp8=(a:number,b:number)=>{
console.log("subtraction is "+(a-b))
}
let res8=temp8(100,20)





