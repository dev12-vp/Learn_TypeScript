/*
1. Public Access Modifier :
   The public modifier allows class properties and methods to be accessible from all locations. If you don’t specify any access modifier for properties and methods, they will take the public modifier by default.
*/

class person {
    public name : string;

    constructor(name : string){
        this.name = name;
    }
 
    public personName(): void {
         console.log(`person name is ${this.name}`)
    }
};

const newPerson = new person("vivek");
console.log(newPerson.name) 
newPerson.personName()

/*
2.Private Access Modifier :
  The private modifier limits the visibility to the same class only. When you add the private modifier to a property or method, you can access that property or method within the same class. Any attempt to access private properties or methods outside the class will result in an error at compiled time.
*/

class privatePerson {
    private firstName : string;
    private lastName : string

    constructor(firstName : string , lastName : string){
        this.firstName = firstName,
        this.lastName = lastName
    }

    private getNameP(){
      console.log(`this is my firstName: ${this.firstName} and lastName : ${this.lastName}`)
    }

     getName(){
      console.log(`this is my firstName: ${this.firstName} and lastName : ${this.lastName}`)
    }
};

const allName = new privatePerson("vivek","lakhani");
allName.getName();
// allName.getNameP();
// console.log(allName.firstName);//Property 'firstName' is private and only accessible within class 'privatePerson'.

/*
3.Protected Modifier
  The protected modifier allows properties and methods of a class to be accessible within the same class and subclasses
*/

class personAge {
    protected age : number;

    constructor(age : number){
        this.age = age
    }
};

class getAge extends personAge {
    getPersonAge() : void {
        console.log(`This person age is ${this.age}`)
    }
};

const age = new getAge(25);

age.getPersonAge();
// console.log(age.age) //Property 'age' is protected and only accessible within class 'personAge' and its subclasses.

/*
1.public: accessibleeverywhere
2.private: only inside the class
3.protected: class + subclasses 
*/
