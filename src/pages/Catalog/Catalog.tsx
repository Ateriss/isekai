import { useEffect, useState } from "react"
import { getData } from "../../services/api";

import './catalog.css'
import { Title } from "../../Components/Title";
import { CategorySection } from "../../Components/CategorySection";


function Catalog() {
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
      getData("products/categories", setCategories);
    }, []);
  
    return (
      <section className="text-slate-200">
        <div className="bg-pared-ladrillo before:mix-blend-screen bg-cover  w-screen h-screen fixed -z-50"></div>
        <div className="pt-10">
        <Title title="catálogo" />
        </div>
        <div className="p-2 pt-6">
          {categories.slice(2,4).reverse().map((cat) => {
            return (
              <CategorySection name={cat} key={cat} />
            );
          })}
        </div>
      </section>
    );
  }
  
  export { Catalog };
  