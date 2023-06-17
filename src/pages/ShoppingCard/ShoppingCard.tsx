import { useEffect, useState } from "react";
import { Title } from "../../Components/Title";
import { NoList } from "../../Components/noList";
import { getWishlist, removeFromWishlist, resetWishlist } from "../../services/shoppingCard";
import { HeartRemove, Trash } from "iconsax-react";

function ShoppingCard() {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    getWishlist(setWishList);
    console.log(wishList);
  }, []);


  /*const handleReset = ()=>{
        resetWishlist(setWishList)
    }*/

  return (
    <section
      className={`text-slate-200 p-2 pt-10  flex flex-col justify-center w-screen items-center ${
        wishList.length === 0 ? "h-screen" : ""
      } ${wishList.length < 4? 'h-screen': ''}`}
    >
      <div className=" bg-pared-ladrillo before:mix-blend-screen bg-cover inset-0  w-screen h-screen fixed -z-50"></div>

      <div className="hidden">
        <Title title="Tu lista de compras" />
      </div>

      {wishList.length === 0 ? (
        <NoList />
      ) : (
        <>
          {wishList.map((wish, index) => {
            const { id, title, image, price } = wish.product;
            return (
              <div key={`${id}_${index}`} 
              className="flex  m-2 p-2 backdrop-blur rounded-lg shadow-2xl">
                <input type="checkbox" checked className="mr-2  checked:bg-black " />
                <div className=" " >
                <div className="flex">
                  <img
                    src={image}
                    alt={title}
                    className="w-16 h-16 object-cover mr-2"
                  />
                  <h1 className="text-sm w-2/3" >{title}</h1>
                </div>
                <div className="flex w-full justify-between items-center">
                    
                    <div className="flex w-full justify-between items-center">
                        <div className="flex">
                            <button>+</button>
                            <p>1</p>
                            <button>-</button>
                        </div>
                        <div>
                            <select>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col justify-end w-full items-center">
                    <p className="text-xl font-semibold text-end self-end  ">S/ {price}</p>
                   
                    </div>
                </div>
                </div>
                <Trash size="18" className="absolute top-0 right-0 m-1 hover:animate-beat"  onClick={()=>removeFromWishlist(id, setWishList)}/>

              </div>
            );
          })}
        </>
      )}
    </section>
  );
}

//<button onClick={()=>handleReset()}>reseteo provisional</button>
export { ShoppingCard };
