// type is more versatile, allowing unions, intersections, and more complex type definitions.

//simpl type

let myName: string = "vivel" ;
console.log(myName);

let myAge : number = 25;
console.log(myAge);

let bool : boolean = true ;
console.log(bool)

let bigint : bigint = BigInt(123212);
console.log(bigint);

let bigint1 : number = Number(BigInt(12321232));
console.log(bigint1);


// special type

let yourNumber : any = "ten";
console.log("yourNumbery",yourNumber);
yourNumber = 10;
console.log("yourNumbery1",yourNumber);


let val : unknown = "test";
val = 10 
console.log('val', val);

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

//please check other file for other type definitions