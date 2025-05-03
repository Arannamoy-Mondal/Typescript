{
    const arr_string:boolean[]=[true,false,true,false]
    const arr2:string[]=arr_string.map(el=>el.toString());
    console.log(arr2);


    type AreaNumber={
        height:string;
        width:string;
    }

    type AreaString<T>={
        [key in keyof T]:T[key] // this is called lookup type
    }

    const area1:AreaString<{height:string;width:string;isSafe:boolean}>={
        height:"11",
        width:"11",
        isSafe:true
    }


    console.log(area1);

}