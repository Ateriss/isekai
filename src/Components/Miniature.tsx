

import { Link } from "react-router-dom";
import { Wish } from "./wish";

function Miniature(props: {image:string, price:number, title:string, id:string, description:string}) {
    const {image, price, title, id, description} = props;

  return (
    <div 
    className=" epa relative z-30  rounded-lg w-4/5 h-full shrink-0 snap-center p-2 ml-2 
                 transition-all  hover:scale-105 hover:shadow-2xl hover:z-50 hover:border-2 hover:border-slate-400"
    >
    <Link to={`/Catalogo/${id}`} >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="image  w-full p-2 h-3/5 bg-center bg-contain bg-no-repeat rounded-xl   bg-white"
      />
      <div className="flex flex-col justify-between h-2/5">
        <h2 className=" font-semibold line-clamp-3 text-ellipsis">{title}</h2>
        <p className=" ">s/ {price}</p>
      </div>
    </Link>
    <Wish styled="hover:scale-105 active:scale-95 absolute  bottom-0 right-0 mb-2 mr-2 z-50 cursor-pointer"
    id={id} title={title} price={price} image={image} description={description} />
    </div>
  );
}

export { Miniature };
