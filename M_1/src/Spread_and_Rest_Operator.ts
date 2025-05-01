{
    const arr:number[]=[1,2,3,4]
}

// Spread Operator

{
    const arr:number[]=[1,2,3,4,5]
    const arr1:number[]=[6,7,8,9,10]
    arr.push(...arr1) // (...) spread operator 
    console.log(arr);
}


// Rest Operator

{
    const policy=(...policies:string[])=>{
        policies.forEach((element:string) => {
            console.log(element);
        });
    }
    policy('Hello','Hi','Bye')
}