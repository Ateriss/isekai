import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../services/api";
import { Title } from "../../Components/Title";
import back from '../../assets/pexels-ready-made-3964674.jpg'
import { Wish } from "../../Components/wish";

function Product() {
  const [products, setProducts] = useState([]);
  const [principalImage, setPrincipalImage] = useState('');

  const { productId } = useParams();

  useEffect(() => {
    getData("products", setProducts);
  }, []);

  useEffect(() => {
    const productSelected = products.find((product) => product.id.toString() === productId);
    if (productSelected) {
      setPrincipalImage(productSelected.images[0]);
    }

  }, [products, productId]);

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  const { title, price, description, category, images } = products.find((product) => product.id.toString() === productId);

  return (
    <section className="text-slate-200">
      <div className="bg-pared-ladrillo before:mix-blend-screen bg-cover  w-screen h-screen fixed -z-50" style={{backgroundImage: `url(${back})`}} ></div>
      <div className="p-2 pt-10 ">
        <Title title={title} ></Title>
      </div>
      <div className="flex flex-col items-center rounded-lg m-2 backdrop-blur-md shadow-lg">
        <div>
            <img src={principalImage} alt={title} 
            className="p-4 rounded-lg "/>
            <div className="flex justify-evenly p-2  overflow-x-auto overflow-y-hidden snap-x flex-shrink-0" >
                {
                    images.map((img)=>{
                        return <img src={img} alt={title} key={img} onClick={()=> setPrincipalImage(img)} 
                        className="w-1/4 rounded-lg cursor-pointer"/>
                    })
                }
            </div>
        </div>
        <div className="m-2">
            <p  className="mb-4">{description}</p>
            <p>s/ {price}</p>
        </div>

      </div>        
      <div className="flex justify-between items-center m-2">
        <button className="p-2 rounded-lg bg-slate-600 font-bold m-2">Comprar</button>
        <Wish styled="hover:scale-105 active:scale-95 bottom-0 right-0 mb-2 mr-2 z-30 cursor-pointer"/>
      </div>
      

    </section>
  );
}

export { Product };
