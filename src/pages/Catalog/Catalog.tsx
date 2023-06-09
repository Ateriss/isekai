import { useEffect, useState } from "react"
import { getCategory, getData } from "../../services/api";

import './catalog.css'





function Catalog(){
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        getData('',setProducts);
        getData('categories',setCategories);
    },[]);

    return(
        <section className=" bg-pared-ladrillo before:mix-blend-screen bg-cover  w-screen ">

            <div>
            {
                categories.map((cat)=>{
                    return (
                        <div key={cat} className="w-full h-96">
                            <div>
                                <h1>{cat}</h1>
                            </div>
                            <div className="flex flex-shrink-0 h-full overflow-x-auto snap-x p-2">
                                {products.map((product)=>{
                                    const {id, title, price, category, image}=product;
                                    return cat === category?( 
                                        <div key={id} className=" w-4/5 h-full shrink-0 snap-center p-2 m-2 rounded-xl bg-transparent backdrop-blur-md">
                                            <div style={{backgroundImage: `url(${image})`}} className="image w-full   h-3/4 bg-center bg-contain bg-no-repeat rounded-xl"/>
                                            <h2>{title}</h2>
                                            <p>s/ {price}</p>
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