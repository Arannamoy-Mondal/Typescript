"use strict";
{
    // must send extends data type in T
    const Student = (param) => {
        const course = "Introduction To R";
        return Object.assign(Object.assign({}, param), { course });
    };
    const std1 = Student({ name: "Hello", institution: "IIT Guwahati", location: "SGP" });
    const std2 = Student({ name: "Hi", institution: "AIT", location: "SGP" });
    console.log(std1, std2);
}
