import { useState } from 'react';
import { HeartAdd, HeartTick } from "iconsax-react";


function Wish(props: { styled:string}){
    const [isListed, setIsListed] = useState(true);
    return(
        <div className=" " onClick={() => setIsListed(!isListed)}>
        {isListed ? (
          <HeartAdd
            size="32"
            className={props.styled}
          />
        ) : (
          <HeartTick
            size="32"
            className={props.styled}
          />
        )}
      </div>
    )
}

export { Wish }