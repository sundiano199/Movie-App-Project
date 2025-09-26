import React from 'react'
import trending from "../assets/trending-1.png";
import recommmeded from "../assets/recommended.png";
import { Link } from 'react-router-dom';

const Movies = () => {

 return (
   <Link to={`../pages/Movies.jsx`}>
     <div className="w-full overflow-x-hidden max-w-full ">
       <div className="mt-[34px] pl-[16px] md:pl-0">
         <h1 className="text-[32px] font-light  mb-[25px]  leading-[100%] ">
           Movies
         </h1>
         <div className="carousel carousel-end  w-full max-w-full mb-[40px]">
           <div className="carousel-item">
             <img
               src={trending}
               alt="Drink"
               className="h-[230px] w-[470px] rounded-[8px] mr-[40px]"
             />
           </div>
           <div className="carousel-item">
             <img
               src={trending}
               alt="Drink"
               className="h-[230px] w-[470px] rounded-[8px] mr-[40px]"
             />
             <div className="carousel-item">
               <img
                 src={trending}
                 alt="Drink"
                 className="h-[230px] w-[470px] rounded-[8px] mr-[40px]"
               />
             </div>
             <div className="carousel-item">
               <img
                 src={trending}
                 alt="Drink"
                 className="h-[230px] w-[470px] rounded-[8px] mr-[40px]"
               />
             </div>
             <div className="carousel-item">
               <img
                 src={trending}
                 alt="Drink"
                 className="h-[230px] w-[470px] rounded-[8px] mr-[40px]"
               />
             </div>
           </div>
         </div>
       </div>
       <div className="px-[16px] md:px-0">
         <h1 className="text-[32px] font-light  mb-[25px]  leading-[100%] ">
           Recommended for you
         </h1>
         <div className="grid md:grid-cols-4 grid-cols-2 gap-5 md:pr-[36px]">
           <div>
             <img src={recommmeded} alt="" className="w-[164px] md:w-[280px]" />
             <h3>2019 . movie. PG</h3>
             <h2>The great Lands</h2>
           </div>
           <div>
             <img src={recommmeded} alt="" className="w-[164px] md:w-[280px]" />
             <h3>2019 . movie. PG</h3>
             <h2>The great Lands</h2>
           </div>
           <div>
             <img src={recommmeded} alt="" />
             <h3>2019 . movie. PG</h3>
             <h2>The great Lands</h2>
           </div>
           <div>
             <img src={recommmeded} alt="" />
             <h3>2019 . movie. PG</h3>
             <h2>The great Lands</h2>
           </div>
         </div>
       </div>
     </div>
   </Link>
 );
}

export default Movies