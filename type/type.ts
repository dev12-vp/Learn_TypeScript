// type is more versatile, allowing unions, intersections, and more complex type definitions.

type userValue = {
    name : string,
    age : number 
};

type userEmail = {
    email : string
}

type userAll = userValue & userEmail;

const newUserDetails : userAll = {
    name : "Vivek patel",
    age : 25 ,
    email : "vivek@test.com"
} 

console.log(newUserDetails)

/* 1. Union types */

type stringNumber = string | number ;

function printId(id : stringNumber) : void {
    console.log(`Your id is ${id}`)
};

printId(10)
printId("is10")
// printId(true) //Argument of type 'boolean' is not assignable to parameter of type 'stringNumber'.

type status = "TO DO" | "In Progress";

function DisplayStatus(status : status) : void {
    console.log(`Display status is ${status}`)
};

DisplayStatus("TO DO");
// DisplayStatus("Done"); //Argument of type '"Done"' is not assignable to parameter of type 'status'.


/* 2.Intersection types */
 
type userId = {
    id : 1
};

const userId : userId = {
    id : 1
}
// userId.id = 2 //Type '2' is not assignable to type '1'.
console.log(userId);

/* 3.Tuple types */

type apiResponse = [boolean , string , number?];

const getResponse : apiResponse = [true , "get data" , 200];
const errorResponse : apiResponse = [false , "data not get"]

console.log(getResponse);
console.log(errorResponse);

// const errortestResponse : apiResponse = [false , "data not get",false] //Type 'boolean' is not assignable to type 'number'.

// console.log('errortestResponse', errortestResponse)

/* 4. Function types */

type MathOp = (x : number , y : number) => number;

const sum : MathOp = (a , b) => a + b ; 
console.log(sum(1,2));

// const sumtest : MathOp = (a , b) => "test";

// sumtest(1,2) //Type 'string' is not assignable to type 'number'.


/* 5.Generic type aliases: */

type pair<x , y> = [x ,y];

const stringBool : pair<string , boolean> = ["name" , true];
const numString : pair<number , string> = [25 , "age"];