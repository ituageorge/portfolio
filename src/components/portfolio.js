import React from 'react';

// sm	640px	@media (min-width: 640px) 
// md	768px	@media (min-width: 768px) 
// lg	1024px	@media (min-width: 1024px)
// xl	1280px	@media (min-width: 1280px) 
// 2xl	1536px	@media (min-width: 1536px)


const Portfolio = () => {
return(  
        <div className="h-full lg:h-screen bg-pack-train font-sans p-20 leading-loose md:text-xl tracking-wide">
        <div className=" text-5xl lg:text-9xl font-bold">ITUA, <br/> GEORGE</div>
        <div className=' text-5xl lg:text-5xl font-light font-mono md:my-2 my-5'>SOFTWARE DEVELOPER</div>
        </div>
)
}

export default Portfolio;
