/* Union types */

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
