"use strict";
{
    // nullable
    const searchName = (name) => {
        if (name)
            console.log("Ok");
        else
            console.log("Not ok");
    };
    searchName(null);
    // unknown 
    const check = (value) => {
        if (typeof (value) === 'string')
            console.log('String');
        else
            console.log("Other");
    };
    check("Hello");
    // never
    const error_func = (message) => {
        throw new Error(message);
    };
    error_func("It's a mistake.");
}
