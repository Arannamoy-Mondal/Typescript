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