
let number : number[] = [1,2,3,4,5,6];
let str : string[] = ["vivek","vivek1","vivek2","vivek3"];
console.log('number', number)
console.log('str', str)
//if you add any othere data type value so is't show the error;

let value : (string | number)[] = ["vivek",1,"test","test1",152] ;
console.log("value",value)

let multiDim : number[][] = [[1,2,3],[4,5,6]];
console.log('multiDim[0][1]', multiDim[0][1]);

let arrayObject : string[] = new Array("vivek" , "test" ,"1232");
console.log(arrayObject);

interface product {
    id:number ,
    name : string
};

let productArray : product[] = [{id : 1 , name : "tv"},{id : 2 , name : "water"},{id : 3, name : "pan"}];
console.log(productArray)

//if you add any array object value with wrong data type is give error;

let num : number[] = [1,2,3,4,5];
console.log('num', num)
// num.push("vivek");//Argument of type 'string' is not assignable to parameter of type 'number'.
