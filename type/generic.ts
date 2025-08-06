/* Generic type aliases: */
// Generics make your functions or types flexible for different data types while still keeping type safety.

type pair<x , y> = [x ,y];

const stringBool : pair<string , boolean> = ["name" , true];
const numString : pair<number , string> = [25 , "age"];


//Generic in function 

function Generic<T>(value : T) {
    return value;
};

const numberVal = Generic<string>("vivek");
console.log(numberVal);

const strVal = Generic<number>(1232);
console.log(strVal);


function GenericTwo<T , U>(value1 : T , value2 : U) : [T,U] {
    return [value1 , value2];
};

const return1 = GenericTwo<string , number>("vivek",25);
console.log(return1);


//Generic in interface 

interface myInter<T>{
    id : T
};

let p1 : myInter<string> = {id : "one"};
console.log(p1)

let p2 : myInter<number> = {id : 1};
console.log(p2);


//Generic in class 

class testClass<V> {
    item : V ;

    constructor(item : V){
        this.item = item 
    };

    fun() : V {
       return this.item
    };

}

const testValue = new testClass("TypeScript");
console.log(testValue.fun());
