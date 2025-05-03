{
    // promise
    const create_promise=():Promise<string>=>{
        return new Promise<string>((resolve,reject)=>{
            const data:string="something";
            if(data){
                resolve(data)
            }
            else {
                reject("Failed to load data")
            }
        })
    }

    // call function
    const show_data=async()=>{
        const data=await create_promise();
        console.log(data);
    }
    show_data()
}