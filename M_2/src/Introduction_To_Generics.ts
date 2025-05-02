{
    const roll_number0:number[]=[1,2,5,3,6,8]
    const mentors0:string[]=['Hello','Hi','Bye']
    const true_false_array0:boolean[]=[true,false]
    
    type GenericArray<T>=Array<T>  // T means type for industry standard

    const roll_number1:Array<Number>=[1,2,5,3,6,8]
    const mentors1:Array<string>=['Hello','Hi','Bye']
    const true_false_array1:Array<boolean>=[true,false]
    const roll_number2:GenericArray<number>=[100,200]


    //generic type of object array
    const person_details:GenericArray<{name:string;age:number}>=[
        {
            name:"Hello",
            age:20
        },
        {
            name:"Hi",
            age:20
        }
    ]

    // generic type of tuple

    type GenericTuple<x,y>=[x,y]
    const person1_details:GenericTuple<string,string>=['Hello','Hi'];
    const person2_details:GenericTuple<number,{name:string;email?:string}>=[
        12,
        {
            name:"Hello",
        }
    ]

}