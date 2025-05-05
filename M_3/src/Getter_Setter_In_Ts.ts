{
    class Person{
        constructor(protected _name:string,protected _age:number){}

        get name(){
            return this._name;
        }

        get age(){
            return this._age;
        }

        set name(val:string){
            this._name=val;
        }

        set age(val:number){
            this._age=val;
        }
    }


    class Teacher extends Person{
        constructor(protected _name:string,protected _age:number,protected _institute:string,
            protected _bank_ac:string
        ){
            super(_name,_age);
            this._bank_ac=_bank_ac;
            this._institute=_institute;
        }

        get bank_ac(){
            return this._bank_ac;
        }

        get institute(){
            return this._institute;
        }
    }


    const p1=new Person("Hello",26);
    p1.age=26;
    console.log(p1.name,p1.age);
}