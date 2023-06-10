import { useEffect, useState } from "react"
import { getCategory, getData } from "../../services/api";

import './catalog.css'
import { HeartAdd, HeartTick } from "iconsax-react";






function Catalog(){
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isListed, setIsListed] = useState(false)

    useEffect(()=>{
        getData('',setProducts);
        getData('categories',setCategories);
    },[]);

    return(
        <section className="text-slate-200">
            <div className="bg-pared-ladrillo before:mix-blend-screen bg-cover  w-screen h-screen fixed -z-50"></div>
            <h1 className="tracking-widest uppercase pt-12 pl-2 text-4xl font-extrabold stroke" >catálogo</h1>
            <div className="p-2 pt-6">
            {
                categories.slice(2,4).map((cat)=>{
                    return (
                        <div key={cat} className="w-full h-96  flex flex-col justify-between 
                         bg-transparent backdrop-blur-md  mb-4  rounded-lg relative ">
                            <div>
                                <h1 className="text-2xl ml-4 mr-4 mt-6 text-semibold uppercase ">{cat}</h1>
                            </div>
                            <div className="flex flex-shrink-0 h-4/5 overflow-x-auto overflow-y-hidden snap-x p-2
                            ">
                                {products.map((product)=>{
                                    const {id, title, price, category, image}=product;
                                    return cat === category?( 
                                        <div key={id} className=" epa relative z-30  rounded-lg w-4/5 h-full shrink-0 snap-center p-2 ml-2 
                                        transition-all  hover:scale-105 hover:shadow-2xl hover:z-50 hover:border-2 hover:border-slate-400">
                                            <div style={{backgroundImage: `url(${image})`}} className="image  w-full p-2 h-3/5 bg-center bg-contain bg-no-repeat rounded-xl   bg-white"/>
                                            <div className="flex flex-col justify-between h-2/5">
                                                <h2 className=" font-semibold line-clamp-3 text-ellipsis" >{title}</h2>
                                                <p className=" " >s/ {price}</p>
                                            </div>

                                            <div className=" " onClick={()=>setIsListed(!isListed)}>
                                            {
                                            isListed? 
                                            <HeartAdd size="32" className="hover:scale-105 active:scale-95 absolute bottom-0 right-0 mb-2 mr-2 z-30 cursor-pointer"/>
                                            : <HeartTick size='32' className="hover:scale-105 active:scale-95 absolute bottom-0 right-0 mb-2 mr-2 z-30 cursor-pointer" />
                                            }
                                            </div>
                                        </div>)
                                        :null
                                    })}
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </section>
    )
}

export { Catalog }