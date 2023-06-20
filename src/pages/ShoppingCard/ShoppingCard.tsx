import { useEffect, useState } from "react";
import { Title } from "../../Components/Title";
import { NoList } from "../../Components/noList";
import {
  getWishlist,
  removeFromWishlist,
  resetWishlist,
} from "../../services/shoppingCard";
import { Trash } from "iconsax-react";
import { InputChecked } from "../../Components/Form/inputChecked";

function ShoppingCard() {
  const [wishList, setWishList] = useState([]);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    getWishlist(setWishList);
    console.log(wishList);
  }, []);

  /* const options =[ 
    {value: 'S', label: 'S'},
    {value: 'M', label: 'M'},
    {value: 'L', label: 'L'}
  ]

  const selectStyles ={
    backgroundColor: 'none',
    color: 'blue'
  }

  const handleReset = ()=>{
        resetWishlist(setWishList)
    }*/

  return (
    <section
      className={`text-slate-200 p-2 pt-10  flex flex-col justify-center w-screen items-center ${
        wishList.length === 0 ? "h-screen" : ""
      } ${wishList.length < 4 ? "h-screen" : ""}`}
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
              <div
                key={`${id}_${index}`}
                className="flex w-full justify-between content-between items-start h-36 m-2 p-2 backdrop-blur rounded-lg shadow-2xl"
              >

                <InputChecked/>

                <img
                  src={image}
                  alt={title}
                  className="w-2/6 h-full object-contain bg-white rounded-lg mr-2 "
                />
                <div className="h-full w-3/6 flex flex-col justify-between">
                  <div className="flex self-start">
                    <h2 className="text-sm font-semibold line-clamp-3 w-11/12 ">{title}</h2>
                  </div>
                  <div className="flex w-full justify-between items-center flex-wrap">
                    <div className="flex w-full justify-between items-center">
                      <div className="flex bg bg-slate-600 p-1 rounded-lg ">
                        <button className="px-1 rounded-lg hover:bg-slate-700 cursor-pointer">
                          +
                        </button>
                        <p className="px-1">1</p>
                        <button className="px-1 rounded-lg hover:bg-slate-700 cursor-pointer">
                          -
                        </button>
                      </div>
                      <div className="bg-transparent text-sm">
                        <select className="select bg-slate-600 rounded-lg p-1">
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex  flex-col  justify-end w-full items-center">
                      <p className="text-xl font-semibold text-end self-end  ">
                        S/ {price}
                      </p>
                    </div>
                  </div>
                </div>
                <Trash
                  size="18"
                  className="absolute top-0 right-0 m-1 hover:animate-beat"
                  onClick={() => removeFromWishlist(id, setWishList)}
                />
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
