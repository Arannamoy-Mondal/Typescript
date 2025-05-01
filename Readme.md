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
    Create typescript config json file:

  ```
    npx tsc --init
  ```

  >> npx vs npm
  > 
  >> npm দিয়ে আমরা প্যাকেজ ইনস্টল করি।
  > 
  >> npx দিয়ে আমরা প্যাকেজ রান করি, এমনকি ইনস্টল না করেও।  
  </li>

  <li>
    Create typescript config json file:

  ```
    npx tsc --init
  ```
    
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
  ```
</li>
  
</ol>
