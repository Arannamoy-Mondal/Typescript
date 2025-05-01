{
    
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
}