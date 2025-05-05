{
    // Polymorphism মানে – এক নাম, অনেক রূপ।
    // Polymorphism = One name, many behaviors.
    abstract class Person{
        constructor(protected name:string,protected age:number){}
        working_hour(){

        }
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
}