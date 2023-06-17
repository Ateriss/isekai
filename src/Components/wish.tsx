import { useState } from 'react';
import { HeartAdd, HeartTick } from "iconsax-react";
import { addToWishlist, removeFromWishlist } from '../services/shoppingCard';

interface WishProps {
  styled: string;
  id: number | string;
  title: string;
  price: number;
  image: string;
  description: string;
}

function Wish(props: WishProps) {
  const { styled, id, title, price, image, description } = props;
  const [isListed, setIsListed] = useState(false);
  const [wishList, setWishList] = useState([])

  const handleWishlistToggle = () => {
    if (isListed) {
      removeFromWishlist(id, setWishList);
      setIsListed(false);
    } else {
      const product = {
        id: id,
        title: title, 
        price: price,
        image: image,
        description: description
      };
      addToWishlist(product, setWishList);
      setIsListed(true);
    }
  };

  return (
    <div className="" onClick={()=>handleWishlistToggle()}>
      {isListed ? (
        <HeartTick size="32" className={styled} />
      ) : (
        <HeartAdd size="32" className={styled} />
      )}
    </div>
  );
}

export { Wish };
