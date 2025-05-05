{
    class Person{ // static works like global memory. it not depends on instance, it depends on class
        static count=0;
        constructor(protected _name:string){
            this._name=_name;
            Person.count++;
        }
    }

    const p1=new Person("hello");
    const p2=new Person("Hi");
    console.log(Person.count);
}