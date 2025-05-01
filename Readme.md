<ol>
  <li>
    Check node js: 
    
```
    node -v
```
    
  </li>
  <li>
    Install typescript ( Ubuntu ) :
    
  ```
    npm install typescript --save-dev
  ```
    
  </li>
  <li>
    Check typescript version:

  ```
    npm tsc -v
  ```
    
  </li>
  <li>
    Run typescript file:

  ```
    node index.ts
  ```
    
  </li>
   <li>
    Create typescript config json file:

  ```
    npx tsc index.ts
  ```
    
  </li>
  <li>
    Config typescript config json file:

  ```json
  "rootDir": "./M_1/src",
  "outDir": "./M_1/dist",  
  ```

  ```
    npx tsc
  ```

  >> npx vs npm
  > 
  >> npm দিয়ে আমরা প্যাকেজ ইনস্টল করি।
  > 
  >> npx দিয়ে আমরা প্যাকেজ রান করি, এমনকি ইনস্টল না করেও।  
  </li>
<li>
  Typescripty data tpyes:

  `implicit data type`

  ```ts
  let first_name="Hello"
  ```

  `explicit data type`

  ```ts
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
 first_name:"Hello",
 last_name:"Bye"
}
  ```
</li>

<li>
  Function:

  ```ts
  function add(x:number,y:number):number{
    return (x+y);
};

const multiply=(x:number,y:number):number=>{
    return (x+y);
}


let wallet={
    first_name:"Hello",
    balance:0,
    addBalance(x:number):number{
        return this.balance+=x;
    }
}

const arr:number[]=[2,3,4,5,6]
const new_arr:number[]=arr.map((el:number):number=>el*el)
  ```
</li>
  
</ol>
