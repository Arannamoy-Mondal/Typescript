let first_name:string="Hello"
let roll:number=24
let isCheck:boolean=true
let x:undefined=undefined
let y:null=null
let z:number;
let array: number[]=[1,2,3];
array.push(4);
let tuple:[number,number]=[1,2]
let tuple2:[number,string,boolean]=[1,'Hello',true];
let details: {
company_name?: "RTX"; // literal type
first_name:string;
middle_name?:string; // optional chaining
last_name:string;
}={
    company_name: "RTX",
first_name:"Hello",
last_name:"Bye"
}
console.log(details);