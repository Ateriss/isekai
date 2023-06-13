import { useEffect, useState } from "react"
import { getData } from "../../services/api";

import './catalog.css'
import { Miniature } from "../../Components/Miniature";
import { Title } from "../../Components/Title";


function Catalog() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
      getData("products", setProducts);
      getData("categories", setCategories);
    }, []);
  
    return (
      <section className="text-slate-200">
        <div className="bg-pared-ladrillo before:mix-blend-screen bg-cover  w-screen h-screen fixed -z-50"></div>
        <div className="pt-10">
        <Title title="catálogo" />
        </div>
        <div className="p-2 pt-6">
          {categories.map((cat) => {
            const { name, id }  = cat;
            return (
              <div
                key={id}
                className="w-full h-96 flex flex-col justify-between bg-transparent backdrop-blur-md mb-4 rounded-lg relative"
              >
                <div>
                  <h1 className="text-2xl ml-4 mr-4 mt-6 text-semibold uppercase">
                    {name}
                  </h1>
                </div>
                <div className="flex flex-shrink-0 h-4/5 overflow-x-auto overflow-y-hidden snap-x p-2">
                  {products.map((product, index) => {
                    const { id, title, price, category, images } = product;
                    return category.name === name ? (

                      <Miniature
                        image={images[0]}
                        key={`${id}-${index}`}
                        title={title}
                        price={price}
                        id={id}
                      />
                    ) : null;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
  
  export { Catalog };
  