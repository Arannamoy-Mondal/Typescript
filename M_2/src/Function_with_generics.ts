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