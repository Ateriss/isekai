import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../services/api";
import { Title } from "../../Components/Title";
import back from '../../assets/pexels-ready-made-3964674.jpg'

import { CategorySection } from "../../Components/CategorySection";
import { Wish } from "../../Components/wish";

function Product() {
  const [products, setProducts] = useState([]);
  //const [principalImage, setPrincipalImage] = useState('');

  const { productId } = useParams();

  useEffect(() => {
    getData("products", setProducts);
  }, []);

  useEffect(() => {
    const productSelected = products.find((product) => product.id === productId);
    /*if (productSelected) {
      setPrincipalImage(productSelected.image[0]);
    }*/

  }, [products, productId]);

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  const { title, price, description, category, id, image } = products.find((product) => product.id.toString() === productId);

  return (
    <section className="text-slate-200 pt-10">
      <div className="bg-pared-ladrillo before:mix-blend-screen bg-cover inset-0  w-screen h-screen fixed -z-50" style={{backgroundImage: `url(${back})`}} ></div>

      <div className="flex flex-col items-center rounded-lg m-2 backdrop-blur-md shadow-lg">
      <div className="p-2 ">
        <Title title={title} styled="text-lg" ></Title>
      </div>
        <div>
          {// <img src={principalImage} alt={title}  className="p-4 rounded-lg "/>
          }
           <div className="  p-2 mt-2 bg-white rounded-lg w-4/5 flex justify-center items-center m-auto" ><img src={image} alt={title} className=" object-contain " />
              </div>
            <div className="flex justify-evenly p-2  overflow-x-auto overflow-y-hidden snap-x flex-shrink-0" >
              
              
                {/*
                    image.map((img:string[] | string)=>{
                        return <img src={img} alt={title} key={img} onClick={()=> setPrincipalImage(img)} 
                        className="w-1/4 rounded-lg cursor-pointer"/>
                    })
                  */}
            </div>
        </div>
        <div className="m-2">
            <p  className="mb-4 text-justify">{description}</p>
            <p className="font-semibold text-2xl ">s/ {price}</p>
        </div>
        <Wish styled="hover:scale-105 active:scale-95 bottom-0 right-0 mb-2 mr-2 z-30 cursor-pointer absolute bottom-0 right-0"
        id={id} title={title} price={price} image={image} description={description}/>
      </div>        
      <div className="flex justify-between items-center m-2">
        <button className="p-2 rounded-lg bg-slate-600 font-bold m-2">Comprar</button>
        
      </div>

      <div className="p-2 pt-10 flex justify-start">
        <Title title='Productos similares' styled="text-start" ></Title>
      </div>

      <CategorySection name={category} />
      

    </section>
  );
}

export { Product };
