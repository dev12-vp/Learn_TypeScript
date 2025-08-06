// interface is extendable and primarily for object shapes

interface user {
    name : string,
    age : number
}

interface user {
    email : string
}

const userDetails : user = {
   name : "vivek lakhani",
   age : 25 ,
   email : "vivek@test.com"
};

console.log(userDetails);

//if you need Combine interface so use intersection type and extends

interface player {
    id: number ,
    name : string
}

interface basket {
    point : number
}

// intersection type
type playerPoint = player & basket ;

const playerDetails : playerPoint = {
    id : 1 ,
    name : "vivek",
    point : 15
};

console.log(playerDetails);

// extends
interface  playerAllPoint extends  player {
    point : number
};

const playerDetails1 : playerAllPoint = {
    id : 2 ,
    name : "vivek1",
    point : 16
};

console.log(playerDetails1)