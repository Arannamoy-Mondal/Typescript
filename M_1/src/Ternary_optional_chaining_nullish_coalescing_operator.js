"use strict";
{
    // ternary 
    const age = 18;
    age >= 18 ? console.log("Got Citizenship") : console.log("Not yet");
    // nullish coalescing operator
    const isAuthenticated = " ";
    const result = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'Guest';
    const result2 = isAuthenticated ? isAuthenticated : 'Guest';
    console.log(result, result2);
}
