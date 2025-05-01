// Object Destructuring
{
    const arr={
        name:{
            first_name:"Hello",
            middle_name:"Hi",
            last_name:"Bye"
        },
        address:"Los Angles, California"
    }

    const {name,address}=arr;
    const {first_name,last_name,middle_name}=name
    console.log(first_name,last_name,middle_name,address);
}

// Array Destructuring
{
    const arr:string[]=["Annapolis, Maryland","San Diego,California","Chicago, Illinois","Salt Lake City, Utah","Arlington, Virginia","San Francisco, California","Las Vegas, Nevada"];
    const [lm,,,,rtx,sl,...other]=arr;
    console.log(lm,rtx,sl,...other);
}