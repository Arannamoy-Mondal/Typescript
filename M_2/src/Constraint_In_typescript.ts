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