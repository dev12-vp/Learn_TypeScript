
function numberSum(x:number , y:number) : number {
    return x + y
};

console.log(numberSum(1 , 1));

function allSum(...num : number[]) : number {
    return num.reduce((acc , value) =>  acc + value , 0)
};

console.log(allSum(1,2,3,4,5,6));
console.log(allSum(225,45,5,6));

function msg(name? : string){
    let myname = name ? name : ''
    console.log("good morning" + ' ' + myname)
};

msg();
msg("vivek");