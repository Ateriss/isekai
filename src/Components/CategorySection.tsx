import { useEffect, useState } from "react";
import { getData } from "../services/api";
import { Miniature } from "./Miniature";


function CategorySection(props: { name:string }){
    const { name } = props
    const [products, setProducts] = useState([]);


    useEffect(() => {
        getData("products", setProducts);
      }, []);


    return(
        <div
        className="w-full h-96 flex flex-col justify-between bg-transparent backdrop-blur-md mb-4 rounded-lg relative"
      >
        <div>
          <h1 className="text-2xl ml-4 mr-4 mt-6 text-semibold uppercase">
            {name}
          </h1>
        </div>
        <div className="flex flex-shrink-0 h-4/5 overflow-x-auto overflow-y-hidden snap-x p-2">
          {products.map((product, index) => {
            const { id, title, price, category, image, description } = product;
            return category === name ? (

              <Miniature
                image={image}
                key={`${id}-${index}`}
                title={title}
                price={price}
                id={id}
                description={description}
              />
            ) : null;
          })}
        </div>
      </div>
    )
}

export { CategorySection }