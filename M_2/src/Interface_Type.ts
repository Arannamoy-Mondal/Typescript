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