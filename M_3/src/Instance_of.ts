{
    class CPU{
        constructor(public core:number,public thread:number,public tdp:number,public isGraphics:boolean){
        }
    }

    class AMD extends CPU{
        constructor(public core:number,public thread:number,public tdp:number,public isGraphics:boolean
        ,public model_no:string,public graphics_name:string,
        public mobo_chipset:string 
        ){
            super(core,thread,tdp,isGraphics);  // Only pass these params which are available in Parent class
            this.model_no=model_no;
            this.graphics_name=graphics_name;
            this.mobo_chipset;
        }
    }

    class Intel extends CPU{
        constructor(public core:number,public thread:number,public tdp:number,public isGraphics:boolean
        ,public model_no:string,public graphics_name:string,
        public mobo_chipset:string 
        ){
            super(core,thread,tdp,isGraphics);
            this.model_no=model_no;
            this.graphics_name=graphics_name;
            this.mobo_chipset;
        }
    }

    const i9=new Intel(24,32,125,true,"I9 14900K","UHD 770","B860");
    console.log(i9 instanceof AMD);
    console.log(i9 instanceof CPU);
    console.log(i9 instanceof Intel);
}