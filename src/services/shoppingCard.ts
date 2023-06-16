// wishlist.ts
interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
  }
  
  interface WishlistItem {
    product: Product;
  }
  
  export function getWishlist(): WishlistItem[] {
    const wishlistString = localStorage.getItem("wishlist");
    return wishlistString ? JSON.parse(wishlistString) : [];
  }
  
  export function addToWishlist(product: Product): void {
    const wishlist = getWishlist();
    const existingItem = wishlist.find((item) => item.product.id === product.id);
    if (existingItem) {
      return;
    }
  
    const newItem: WishlistItem = {
      product,
    };
    wishlist.push(newItem);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    console.log(wishlist)
  }
  
  export function removeFromWishlist(itemId: number): void {
    const wishlist = getWishlist();
    const updatedWishlist = wishlist.filter((item) => item.product.id !== itemId);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    console.log(updatedWishlist);
  }
  
  