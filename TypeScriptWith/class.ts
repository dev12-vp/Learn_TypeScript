
class Student{
   public id : number = 0;
   public name : string = "";
};

interface Student1 extends Student {
    student1_details() : void ;
}

interface Student2 extends Student {
    student2_details() : void ;
}

class student_details extends Student implements Student1 , Student2 {
          student1_details(): void {
              this.name = "vivek";
              this.id = 1;
              console.log(this.id + "-"  + this.name)
          }
          
          student2_details(): void {
              this.name = "patel";
              this.id = 2;
              console.log(this.id + "-"  + this.name)
          }
};

let student_obj = new student_details();
student_obj.student1_details()
student_obj.student2_details()