{
    // pick : use only specific keys
    type Person={
        name:string;
        age:number;
        email?:string;
        contact_no:string;
    }

    const Person1:Person={
        name:"Hello",
        age:20,
        contact_no:"017"
    }

    type Name=Pick<Person,"name">;
    type Name_Age=Pick<Person,"name"|"age">


    const name:Name={
        name:"Hello"
    }
    console.log(name);

    const name_age:Name_Age={
        name:"Hello",
        age:20
    }
    console.log(name_age);
    // pick end

    // Omit: Omit specific keys
    type NameO=Omit<Person,"name">
    const name0:NameO={
        age:20,
        contact_no:"017"
    }
    console.log(name0);
    // Omit end

    // Required: All keys must needed to create object

    type NameR=Required<Person>
    const nameR:NameR={
        name:"Hello",
        age:20,
        email:"hello@hello.com",
        contact_no:"017"
    }
    console.log(nameR);
    // Required end

    // Partial: Not required all keys

    type NameP=Partial<Person>

    const nameP:NameP={

    }
    console.log(nameP);

    // Partial End

    // Read Only: Read Only means no change after create

    type PersonReadOnly=Readonly<Person>

    let Person1R:PersonReadOnly={
        name:"Hi",
        age:26,
        contact_no:"017"
    }

    // Person1R.age=27;

    console.log(Person1R);

    // Read Only end

    // Record: Can add custom value

    type PersonCustom=Record<string,string| number | any>;

    const Person12:PersonCustom={
        name:"Hello",
        age:"28",
        country:"SGP",
        is_m: false
    }

    console.log(Person12);


    const empty_object:Record<string,unknown>={}
    console.log(empty_object);
    // Record end
}