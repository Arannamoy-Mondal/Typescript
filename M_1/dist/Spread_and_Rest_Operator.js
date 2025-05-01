"use strict";
{
    const arr = [1, 2, 3, 4];
}
// Spread Operator
{
    const arr = [1, 2, 3, 4, 5];
    const arr1 = [6, 7, 8, 9, 10];
    arr.push(...arr1); // (...) spread operator 
    console.log(arr);
}
// Rest Operator
{
    const policy = (...policies) => {
        policies.forEach((element) => {
            console.log(element);
        });
    };
    policy('Hello', 'Hi', 'Bye');
}
