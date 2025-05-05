"use strict";
{
    const person1 = "bike";
    console.log(person1);
    const get_property_value = (obj, key) => {
        return obj[key];
    };
    const person3 = {
        name: "Hello",
        age: 20
    };
    console.log(get_property_value(person3, "name"));
}
