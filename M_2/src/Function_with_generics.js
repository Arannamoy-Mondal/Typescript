"use strict";
{
    const create_array1 = (param) => {
        return [param];
    };
    const create_array2 = (param) => {
        return [param];
    };
    const Student = (param) => {
        const course = 'Introduction To Typescript';
        return Object.assign(Object.assign({}, param), { course });
    };
    console.log(Student({ name: "Hello", institution: "IIT Guwahati" }));
    console.log(create_array1('Hello'));
    console.log(create_array2(['Hello', true, 'Hi']));
}
