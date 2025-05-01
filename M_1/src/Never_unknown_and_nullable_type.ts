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