{
    class Laptop{
        constructor(public brand:string,public cpu:string){
        }

        giveDetails(){  // can't use this keyword in arrow function that's why anonymous function 
            return ("Made In China.");
        }
    }

    const mac1=new Laptop("Apple","M1");
    const mac2=new Laptop("Apple","M1 Pro");
    const mac3=new Laptop("Apple","M2");
    console.log(mac1,mac2,mac3,mac1.giveDetails());
}