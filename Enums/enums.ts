// Enums allow you to define a set of named constants.

enum UserName {
    Vivek,
    Raj,
    Chirag,
    Urvesh
}

console.log(UserName)
console.log("user" ,UserName[0])
console.log("user value" ,UserName.Vivek)

enum TaskStatus {
   TO_DO = "TO DO",
   IN_PROGRESS = "In Progress",
   PENDING = "Pending",
   DONE = "Done"
};

console.log(TaskStatus);
console.log(TaskStatus.DONE)

let statusDone : TaskStatus = TaskStatus.DONE;
console.log("statusDone",statusDone)