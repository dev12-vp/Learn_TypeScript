/* Intersection types */
 
type userId = {
    id : 1
};

const userId : userId = {
    id : 1
}
// userId.id = 2 //Type '2' is not assignable to type '1'.
console.log(userId);