{

    // Abstraction can implements via interface keyword and also abstract keyword.
    
    abstract class Person{
        constructor(protected name:string,protected age:number){}
        abstract working_hour():void; // using abstract keyword class must be impement in child class


    }
    


    class SDEI extends Person{
        constructor(protected _name:string,protected _age:number,protected _location:string,protected _work_mode:string,
            protected _mentor:string
        ){
            super(_name,_age);
            this._location=_location;
            this._work_mode=_work_mode;
            this._mentor=_mentor;
        }

        working_hour(): string {
            return `${this._name} is software developement engineer intern. `
        }
    }

    class SDE extends Person{
        constructor(protected _name:string,protected _age:number,protected _location:string,protected _work_mode:string,
            protected _manager:string
        ){
            super(_name,_age);
            this._location=_location;
            this._work_mode=_work_mode;
            this._manager=_manager;
        }

        working_hour(): string {
            return `${this._name} is software developement engineer. `
        }
    }



    const sde1=new SDE("Hello",26,"Bengaluru","On-site","Self");
    const sdei1=new SDEI("Hi",22,"Bengaluru","Remote","Hello");

    console.log(sde1.working_hour(),"\n",sdei1.working_hour());



    interface Vehicle{
        name():void
        model_no():void
    }

    class Toyota implements Vehicle{
        name():string{
            return "Hello, This is Toyota"
        }
        model_no(): string {
            return "Hello, This is V8."
        }
    }
    const t1=new Toyota()
    console.log(t1.name(),t1.model_no());
}