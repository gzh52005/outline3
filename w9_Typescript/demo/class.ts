/**
 * class类型
 */

 class Person{
     // 定义属性类型
    public username:string;
    public type:string  = 'person';
    private gender:string;
    public a:number;
    protected readonly age:number = 18;
    constructor(){
        this.gender = 'male';
        this.a = 100;
    }

    getInfo(){
        this.gender;
        // this.age = 22; //报错
    }
 }

const p1 = new Person();
p1.username;
// p1.gender; // 报错
// p1.age;// 报错

 class Student extends Person{
     public type:string = 'student';
     constructor(){
         super();
     }

     render(){
         this.username;
         this.type;
        //  this.gender; // 报错
        this.age;
     }
 }

 const s1 = new Student()
 s1.type;// 