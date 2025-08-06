/* Tuple types */

type apiResponse = [boolean , string , number?];

const getResponse : apiResponse = [true , "get data" , 200];
const errorResponse : apiResponse = [false , "data not get"]

console.log(getResponse);
console.log(errorResponse);

// const errortestResponse : apiResponse = [false , "data not get",false] //Type 'boolean' is not assignable to type 'number'.

// console.log('errortestResponse', errortestResponse)