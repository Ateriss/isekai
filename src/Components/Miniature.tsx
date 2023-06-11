import { HeartAdd, HeartTick } from "iconsax-react";
import { useState } from 'react';

function Miniature(props: {image:string, price:number, title:string}) {
    const {image, price, title} = props;
    const [isListed, setIsListed] = useState(false);
  return (
    <div
      className=" epa relative z-30  rounded-lg w-4/5 h-full shrink-0 snap-center p-2 ml-2 
                                        transition-all  hover:scale-105 hover:shadow-2xl hover:z-50 hover:border-2 hover:border-slate-400"
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="image  w-full p-2 h-3/5 bg-center bg-contain bg-no-repeat rounded-xl   bg-white"
      />
      <div className="flex flex-col justify-between h-2/5">
        <h2 className=" font-semibold line-clamp-3 text-ellipsis">{title}</h2>
        <p className=" ">s/ {price}</p>
      </div>

      <div className=" " onClick={() => setIsListed(!isListed)}>
        {isListed ? (
          <HeartAdd
            size="32"
            className="hover:scale-105 active:scale-95 absolute bottom-0 right-0 mb-2 mr-2 z-30 cursor-pointer"
          />
        ) : (
          <HeartTick
            size="32"
            className="hover:scale-105 active:scale-95 absolute bottom-0 right-0 mb-2 mr-2 z-30 cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}

export { Miniature };
