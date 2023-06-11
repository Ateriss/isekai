import { useEffect, useState } from "react"
import { getCategory, getData } from "../../services/api";

import './catalog.css'
import { Miniature } from "../../Components/Miniature";
import { Title } from "../../Components/Title";







function Catalog(){
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);


    useEffect(()=>{
        getData('',setProducts);
        getData('categories',setCategories);
    },[]);

    return(
        <section className="text-slate-200">
            <div className="bg-pared-ladrillo before:mix-blend-screen bg-cover  w-screen h-screen fixed -z-50"></div>
            <Title title='catálogo' />
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
                                         <Miniature image={image} key={id} title={title}  price={price} />)
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