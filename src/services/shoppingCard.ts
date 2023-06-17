// ...

export function getWishlist(setData: (data: WishlistItem[]) => void): WishlistItem[] {
  const wishlistString = localStorage.getItem("wishlist");
  const wishlist = wishlistString ? JSON.parse(wishlistString) : [];
  setData(wishlist);
  return wishlist;
}

export function addToWishlist(product: Product, setData: (data: WishlistItem[]) => void): void {
  const wishlist = getWishlist(setData);
  const existingItem = wishlist.find((item) => item.product.id === product.id);
  if (existingItem) {
    return;
  }

  const newItem: WishlistItem = {
    product,
  };
  wishlist.push(newItem);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  console.log(wishlist);
}

export function removeFromWishlist(itemId: number, setData: (data: WishlistItem[]) => void): void {
  const wishlist = getWishlist(setData);
  const updatedWishlist = wishlist.filter((item) => item.product.id !== itemId);
  localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  console.log(updatedWishlist);
}

export function resetWishlist(setData: (data: WishlistItem[]) => void): void {
  const emptyWishlist: WishlistItem[] = [];
  localStorage.setItem("wishlist", JSON.stringify(emptyWishlist));
  setData(emptyWishlist);
}
