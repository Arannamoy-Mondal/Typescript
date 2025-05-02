// Type assertion
{
    let anything:any;
    anything="Hello";
    anything=20;

    const print=(value:any): (string | number | undefined)=>{
        return value;
    }
    
    console.log(print(1000) as string);
}


// 