
/* Function types */

type MathOp = (x : number , y : number) => number;

const sum : MathOp = (a , b) => a + b ; 
console.log(sum(1,2));

// const sumtest : MathOp = (a , b) => "test";

// sumtest(1,2) //Type 'string' is not assignable to type 'number'.
