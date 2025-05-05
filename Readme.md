<ol>
  <li>
    Check node js: 
    
```
    node -v
```
    
  </li>
  <li>
    Install typescript ( Ubuntu ) :
    
  ```
    npm install typescript --save-dev
  ```
    
  </li>
  <li>
    Check typescript version:

  ```
    npm tsc -v
  ```
    
  </li>
  <li>
    Run typescript file:

  ```
    node index.ts
  ```
    
  </li>
   <li>
    Create typescript config json file:

  ```
    npx tsc index.ts
  ```
    
  </li>
  <li>
    Config typescript config json file:

  ```json
  "rootDir": "./M_1/src",
  "outDir": "./M_1/dist",  
  ```

  ```
    npx tsc
  ```

  >> npx vs npm
  > 
  >> npm দিয়ে আমরা প্যাকেজ ইনস্টল করি।
  > 
  >> npx দিয়ে আমরা প্যাকেজ রান করি, এমনকি ইনস্টল না করেও।  
  </li>

<li>
  Run directly ts file

`import ts-node-dev package`

```sql
npm i ts-node-dev --save-dev
```

```sql
npx ts-node-dev --respawn --transpile-only file _name
```
</li>
  
<li>
  Typescripty data tpyes:

  `implicit data type`

  ```ts
  let first_name="Hello"
  ```

  `explicit data type`

  ```ts
  let first_name:string="Hello"
  let roll:number=24
  let isCheck:boolean=true
  let x:undefined=undefined
  let y:null=null
  let z:number;
  let array: number[]=[1,2,3];
  array.push(4);
  let tuple:[number,number]=[1,2]
  let tuple2:[number,string,boolean]=[1,'Hello',true];
  let details: {
  company_name?: "RTX"; // literal type
  first_name:string;
  middle_name?:string; // optional chaining
  last_name:string;
}={
 first_name:"Hello",
 last_name:"Bye"
}
  ```
</li>

<li>
  Function:

  ```ts
  function add(x:number,y:number):number{
    return (x+y);
};

const multiply=(x:number,y:number):number=>{
    return (x+y);
}


let wallet={
    first_name:"Hello",
    balance:0,
    addBalance(x:number):number{
        return this.balance+=x;
    }
}

const arr:number[]=[2,3,4,5,6]
const new_arr:number[]=arr.map((el:number):number=>el*el)
  ```
</li>
<li>
  Spread and Rest Operator: Typescript consider any variable as a global variable. 

`Scope:`

```ts
{
    const arr:number[]=[1,2,3,4]
}
```

`Spread Operator`

```ts
// Spread Operator

{
    const arr:number[]=[1,2,3,4,5]
    const arr1:number[]=[6,7,8,9,10]
    arr.push(...arr1) // (...) spread operator 
    console.log(arr);
}
```

`Rest Operator:`

```ts
// Rest Operator

{
    const policy=(...policies:string[])=>{
        policies.forEach((element:string) => {
            console.log(element);
        });
    }
    policy('Hello','Hi','Bye')
}
```

</li>

<li>
  Destructuring:

`Destructuring:`

```ts
// Object Destructuring
{
    const arr={
        name:{
            first_name:"Hello",
            middle_name:"Hi",
            last_name:"Bye"
        },
        address:"Los Angles, California"
    }

    const {name,address}=arr;
    const {first_name,last_name,middle_name}=name
    console.log(first_name,last_name,middle_name,address);
}

// Array Destructuring
{
    const arr:string[]=["Annapolis, Maryland","San Diego,California","Chicago, Illinois","Salt Lake City, Utah","Arlington, Virginia","San Francisco, California","Las Vegas, Nevada"];
    const [lm,,,,rtx,sl,...other]=arr;
    console.log(lm,rtx,sl,...other);
}
```
</li>

<li>
Type Alias: Works like class.

```ts
// Type Alias : Works like class
{
    type Student={
        name:string;
        age:number;
        contact_no?:string
    }

    const std1:Student={
        name:"Hello",
        age:23
    }

    const std2:Student={
        name:"Hi",
        age:24
    }
}
``` 
</li>  

<li>
Ternary, optional chaining & nullish coalescing operator

```ts
{
    // ternary 
    const age:number=18;
    age>=18?console.log("Got Citizenship"):console.log("Not yet");

    // nullish coalescing operator

    const isAuthenticated=" ";

    const result=isAuthenticated ?? 'Guest';
    const result2=isAuthenticated ? isAuthenticated: 'Guest'
    console.log(result,result2);

    // optional chaining

    type Student={
        name:string;
        email?:string; // here '?' is optional is chaining user can skip this 
        contact_no?:string
    }

}
```
  
</li>
<li>
Never,unknown and nullable type

```ts
{
    // nullable
    const searchName=(name:string | null)=>{
        if(name)console.log("Ok");
        else console.log("Not ok");
    }
    searchName(null);

    // unknown 

    const check=(value:unknown)=>{
        if(typeof(value)==='string')console.log('String');
        else console.log("Other");
    }
    check("Hello")


    // never

    const error_func=(message:string):never=>{
        throw new Error(message)
    }

    error_func("It's a mistake.")
}
```  
</li>

<li>
  Interface is used for only non primitive data type.

```ts
{
    type User1={
        name:string;
        age:number;
    }

    type UserWithRole=User1 & {role:string}; // for type alias use intersection

    interface User2{
        name:string;
        age:number;
    }


    interface UserWithRoleI extends User2{  // extends for interface
        role:string 
    }

    const UserWithRole1:UserWithRole={
        name:"Hello",
        age:28,
        role:"Manager"
    }

    const UserWithRole2:UserWithRoleI={
        name:"Hi",
        age:22,
        role:"SDE Intern"
    }

    type Roll1=number[]; // array declaration with type
    interface Roll2{  // array declaration with interface
        [index:number]:number
    }

    type Add1=(x:number,y:number)=>number; // function declaration with type
    interface Add2{
        (x:number,y:number):number;  // function declaration with interface
    }


    console.log(UserWithRole1,UserWithRole2);

}
```

  
</li>

<li>
  Introduction to generics:

```ts
{
    const roll_number0:number[]=[1,2,5,3,6,8]
    const mentors0:string[]=['Hello','Hi','Bye']
    const true_false_array0:boolean[]=[true,false]
    
    type GenericArray<T>=Array<T>  // T means type for industry standard

    const roll_number1:Array<Number>=[1,2,5,3,6,8]
    const mentors1:Array<string>=['Hello','Hi','Bye']
    const true_false_array1:Array<boolean>=[true,false]
    const roll_number2:GenericArray<number>=[100,200]


    //generic type of object array
    const person_details:GenericArray<{name:string;age:number}>=[
        {
            name:"Hello",
            age:20
        },
        {
            name:"Hi",
            age:20
        }
    ]

    // generic type of tuple

    type GenericTuple<x,y>=[x,y]
    const person1_details:GenericTuple<string,string>=['Hello','Hi'];
    const person2_details:GenericTuple<number,{name:string;email?:string}>=[
        12,
        {
            name:"Hello",
        }
    ]

}
```  
</li>

<li>
  Generics with interface:

```ts
{
    interface Developer<T>{
        designation:string,
        laptop_conf:{
            brand_name:string,
            model_name:string,
            release_year:string
        },
        work_location:T
    }


    const SDE1:Developer<{work_mode:string;location:string}>={
        designation:"SDE1 Level 6",
        laptop_conf:{
            brand_name:"Apple",
            model_name:"M3 Pro 16GB 512 GB",
            release_year:'2023'
        },
        work_location:{
            work_mode:'Hybrib 2 days in onsite, 3 days from home',
            location:'San Francisco, California'
        }
    }
    
    const SDE2:Developer<{work_mode:string;location:string}>={
        designation:"SDE2 Level 3",
        laptop_conf:{
            brand_name:"Apple",
            model_name:"M3 Pro 16GB 512 GB",
            release_year:'2023'
        },
        work_location:{
            work_mode:'Fully Remote',
            location:'Bengaluru, Karnatak, India'
        }
    }


    const SDE3:Developer<{work_mode:string;location:string}>={
        designation:"SDE3 Level 6",
        laptop_conf:{
            brand_name:"Apple",
            model_name:"M3 Pro 16GB 512 GB",
            release_year:'2023'
        },
        work_location:{
            work_mode:'Hybrib (3 days in onsite, 2 days from home)',
            location:'Charlotte, North Carolina'
        }
    }



    console.log(SDE1,SDE2,SDE3);
}
```
  
</li>


<li>
  Function with generics

```ts
{
  const create_array1=(param:string):string[]=>{
    return [param];
  }   

  const create_array2=<T>(param:T):T[]=>{
    return [param]
  }


  const Student=<T>(param:T)=>{
    const course='Introduction To Typescript'
    return {...param,course};
  }

  console.log(Student({name:"Hello",institution:"IIT Guwahati"}));

  console.log(create_array1('Hello'));

  console.log(create_array2(['Hello',true,'Hi']));
}
```
  
</li>

<li>

Constraints In Typescript: Enforce any rule.

```ts
{
    // must send extends data type in T
    const Student=<T extends {name:string;institution:string;location:string}>  
    (param:T)=>{
        const course="Introduction To R"
        return {...param,course};
    }

    const std1=Student({name:"Hello",institution:"IIT Guwahati",location:"SGP"});
    const std2=Student({name:"Hi",institution:"AIT",location:"SGP"})
    console.log(std1,std2);
}
```
  
</li>

<li>
  Utility:

```sql
{
    // pick : use only specific keys
    type Person={
        name:string;
        age:number;
        email?:string;
        contact_no:string;
    }

    const Person1:Person={
        name:"Hello",
        age:20,
        contact_no:"017"
    }

    type Name=Pick<Person,"name">;
    type Name_Age=Pick<Person,"name"|"age">


    const name:Name={
        name:"Hello"
    }
    console.log(name);

    const name_age:Name_Age={
        name:"Hello",
        age:20
    }
    console.log(name_age);
    // pick end

    // Omit: Omit specific keys
    type NameO=Omit<Person,"name">
    const name0:NameO={
        age:20,
        contact_no:"017"
    }
    console.log(name0);
    // Omit end

    // Required: All keys must needed to create object

    type NameR=Required<Person>
    const nameR:NameR={
        name:"Hello",
        age:20,
        email:"hello@hello.com",
        contact_no:"017"
    }
    console.log(nameR);
    // Required end

    // Partial: Not required all keys

    type NameP=Partial<Person>

    const nameP:NameP={

    }
    console.log(nameP);

    // Partial End

    // Read Only: Read Only means no change after create

    type PersonReadOnly=Readonly<Person>

    let Person1R:PersonReadOnly={
        name:"Hi",
        age:26,
        contact_no:"017"
    }

    // Person1R.age=27;

    console.log(Person1R);

    // Read Only end

    // Record: Can add custom value

    type PersonCustom=Record<string,string| number | any>;

    const Person12:PersonCustom={
        name:"Hello",
        age:"28",
        country:"SGP",
        is_m: false
    }

    console.log(Person12);


    const empty_object:Record<string,unknown>={}
    console.log(empty_object);
    // Record end
}
``` 
</li>
<li>
<div id="class_object">
        <a href="#topic">Topic</a>
        <h2>Class and Object</h2>

```ts
        {
        class Laptop{
        public brand:string;
        public cpu:string;
        constructor(brand:string,cpu:string){
        this.brand=brand;
        this.cpu=cpu;
        }

        giveDetails(){ // can't use this keyword in arrow function that's why anonymous function
        return ("Made In China.");
        }
        }

        const mac1=new Laptop("Apple","M1");
        const mac2=new Laptop("Apple","M1 Pro");
        const mac3=new Laptop("Apple","M2");
        console.log(mac1,mac2,mac3,mac1.giveDetails());
        }
```
</div>
</li>
<li>
<div id="inheritance">
        <a href="#topic">Topic</a>
        <h1>Inheritance</h1>

```ts
        {
        class CPU{
        constructor(public core:number,public thread:number,public tdp:number,public isGraphics:boolean){
        }
        }

        class AMD extends CPU{
        constructor(public core:number,public thread:number,public tdp:number,public isGraphics:boolean
        ,public model_no:string,public graphics_name:string,
        public mobo_chipset:string
        ){
        super(core,thread,tdp,isGraphics); // Only pass these params which are available in Parent class
        this.model_no=model_no;
        this.graphics_name=graphics_name;
        this.mobo_chipset;
        }
        }

        class Intel extends CPU{
        constructor(public core:number,public thread:number,public tdp:number,public isGraphics:boolean
        ,public model_no:string,public graphics_name:string,
        public mobo_chipset:string
        ){
        super(core,thread,tdp,isGraphics);
        this.model_no=model_no;
        this.graphics_name=graphics_name;
        this.mobo_chipset;
        }
        }

        const i9=new Intel(24,32,125,true,"I9 14900K","UHD 770","B860");
        console.log(i9);
        }
```
</div>
</li>
<li>
<div id="type_guard_using_typeof_in">
        <a href="#topic">Topic</a>
        <h1>Type guard using typeof & in</h1>

```ts
        {
        // type guards

        // typeof --> type guard

        type Alphaneumeric = string | number;

        const add = (param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric => {
        if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
        } else {
        return param1.toString() + param2.toString();
        }
        };

        const result1 = add("2", "3");
        console.log(result1);

        // in guard
        type NormalUser = {
        name: string;
        };

        type AdminUser = {
        name: string;
        role: "admin";
        };

        const getUser = (user: NormalUser | AdminUser) => {
        if ("role" in user) {
        console.log(`My name is ${user.name} and my role is ${user.role}`);
        } else {
        console.log(`My name is ${user.name}`);
        }
        };

        const normalUser: NormalUser = {
        name: "Mr. Normal Bhai",
        };
        const adminUser: AdminUser = {
        name: "Mr. Admin Bhai",
        role: "admin",
        };

        getUser(adminUser);

        //
        }
```
</div>
</li>
<li>
<div id="access_modifiers">
        <a href="#topic">Topic</a>
        <h1>Access Modifiers</h1>

```ts
        {

        // private modifiers can not access in child class
        // protected modifiers can be access in child class

        class BankAccount{
        protected total_balance:number;
        constructor(public readonly ac_no:string,private customer_name:string,private bank_balance:number){
        this.ac_no=ac_no;
        this.customer_name=customer_name;
        this.bank_balance=bank_balance;
        this.total_balance=bank_balance;
        }

        addDeposit(balance:number){
        this.bank_balance+=balance;
        this.total_balance=this.bank_balance;
        }
        }


        class BankAccount1 extends BankAccount{
        test(){
        this.total_balance;
        }
        }
        const ac1=new BankAccount("01","Hello",0);
        ac1.addDeposit(500)
        ac1.addDeposit(600)
        console.log(ac1,ac1.ac_no);
        }
```
</div>
</li>
<li>
<div id="getter_setter_methods">
        <a href="#topic">Topic</a>
        <h1>Getter_Setter_Method</h1>

```ts
        {
        class Person{
        constructor(protected _name:string,protected _age:number){}

        get name(){
        return this._name;
        }

        get age(){
        return this._age;
        }

        set name(val:string){
        this._name=val;
        }

        set age(val:number){
        this._age=val;
        }
        }


        class Teacher extends Person{
        constructor(protected _name:string,protected _age:number,protected _institute:string,
        protected _bank_ac:string
        ){
        super(_name,_age);
        this._bank_ac=_bank_ac;
        this._institute=_institute;
        }

        get bank_ac(){
        return this._bank_ac;
        }

        get institute(){
        return this._institute;
        }
        }


        const p1=new Person("Hello",26);
        p1.age=26;
        console.log(p1.name,p1.age);
        }
```
</div>
</li>
<li>
<div id="static">
        <a href="#topic">Topic</a>
        <h1>Static keyword</h1>

```ts
        {
        class Person{ // static works like global memory. it not depends on instance, it depends on class
        static count=0;
        constructor(protected _name:string){
        this._name=_name;
        Person.count++;
        }
        }

        const p1=new Person("hello");
        const p2=new Person("Hi");
        console.log(Person.count);
        }
```
</div>
</li>
<li>
<div id="polymorphism">
        <a href="#topic">Topic</a>
        <h1>Polymorphism</h1>

```ts
        {
        // Polymorphism মানে – এক নাম, অনেক রূপ।
        // Polymorphism = One name, many behaviors.
        abstract class Person{
        constructor(protected name:string,protected age:number){}
        working_hour(){

        }
        }


        class SDEI extends Person{
        constructor(protected _name:string,protected _age:number,protected _location:string,protected _work_mode:string,
        protected _mentor:string
        ){
        super(_name,_age);
        this._location=_location;
        this._work_mode=_work_mode;
        this._mentor=_mentor;
        }

        working_hour(): string {
        return `${this._name} is software developement engineer intern. `
        }
        }

        class SDE extends Person{
        constructor(protected _name:string,protected _age:number,protected _location:string,protected _work_mode:string,
        protected _manager:string
        ){
        super(_name,_age);
        this._location=_location;
        this._work_mode=_work_mode;
        this._manager=_manager;
        }

        working_hour(): string {
        return `${this._name} is software developement engineer. `
        }
        }



        const sde1=new SDE("Hello",26,"Bengaluru","On-site","Self");
        const sdei1=new SDEI("Hi",22,"Bengaluru","Remote","Hello");

        console.log(sde1.working_hour(),"\n",sdei1.working_hour());
        }
```
</div>
</li>
<li>
<div id="abstraction_interface">
        <a href="#topic">Topic</a>
        <h1>Abstraction and Interface keyword</h1>

```ts
        {

            // Abstraction can implements via interface keyword and also abstract keyword.
            
            abstract class Person{
                constructor(protected name:string,protected age:number){}
                abstract working_hour():void; // using abstract keyword class must be impement in child class
        
        
            }
            
        
        
            class SDEI extends Person{
                constructor(protected _name:string,protected _age:number,protected _location:string,protected _work_mode:string,
                    protected _mentor:string
                ){
                    super(_name,_age);
                    this._location=_location;
                    this._work_mode=_work_mode;
                    this._mentor=_mentor;
                }
        
                working_hour(): string {
                    return `${this._name} is software developement engineer intern. `
                }
            }
        
            class SDE extends Person{
                constructor(protected _name:string,protected _age:number,protected _location:string,protected _work_mode:string,
                    protected _manager:string
                ){
                    super(_name,_age);
                    this._location=_location;
                    this._work_mode=_work_mode;
                    this._manager=_manager;
                }
        
                working_hour(): string {
                    return `${this._name} is software developement engineer. `
                }
            }
        
        
        
            const sde1=new SDE("Hello",26,"Bengaluru","On-site","Self");
            const sdei1=new SDEI("Hi",22,"Bengaluru","Remote","Hello");
        
            console.log(sde1.working_hour(),"\n",sdei1.working_hour());
        
        
        
            interface Vehicle{
                name():void
                model_no():void
            }
        
            class Toyota implements Vehicle{
                name():string{
                    return "Hello, This is Toyota"
                }
                model_no(): string {
                    return "Hello, This is V8."
                }
            }
            const t1=new Toyota()
            console.log(t1.name(),t1.model_no());
        }
```
</div>
</li>
</ol>
