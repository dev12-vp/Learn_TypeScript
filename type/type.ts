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

//please check other file for other type definitions