{
    interface Developer<T>{
        designation:string,
        laptop_conf:{
            brand_name:string,
            model_name:string,
            release_year:string
        },
        work_location:T
    }


    const SDE1:Developer<{work_mode:string;location:string}>={
        designation:"SDE1 Level 6",
        laptop_conf:{
            brand_name:"Apple",
            model_name:"M3 Pro 16GB 512 GB",
            release_year:'2023'
        },
        work_location:{
            work_mode:'Hybrib 2 days in onsite, 3 days from home',
            location:'San Francisco, California'
        }
    }
    
    const SDE2:Developer<{work_mode:string;location:string}>={
        designation:"SDE2 Level 3",
        laptop_conf:{
            brand_name:"Apple",
            model_name:"M3 Pro 16GB 512 GB",
            release_year:'2023'
        },
        work_location:{
            work_mode:'Fully Remote',
            location:'Bengaluru, Karnatak, India'
        }
    }


    const SDE3:Developer<{work_mode:string;location:string}>={
        designation:"SDE3 Level 6",
        laptop_conf:{
            brand_name:"Apple",
            model_name:"M3 Pro 16GB 512 GB",
            release_year:'2023'
        },
        work_location:{
            work_mode:'Hybrib (3 days in onsite, 2 days from home)',
            location:'Charlotte, North Carolina'
        }
    }



    console.log(SDE1,SDE2,SDE3);
}