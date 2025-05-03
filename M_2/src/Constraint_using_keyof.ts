{
    type Vehicle={
        bike:string;
        car:string;
        ship:string;
    }

    type Ower='bike'|'car'|'ship';

    type Owner2=keyof Vehicle; // using key of

    const person1:Owner2="bike";
    console.log(person1);

    const get_property_value=<x,y extends keyof x>(obj:x,key:y)=>{
        return obj[key];
    }
    const person3={
        name:"Hello",
        age:20
    }
    console.log(get_property_value(person3,"name"));
}