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
</ol>
