import { create } from "zustand";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  tags: string[];
  image: string;
  description: string;
  available: boolean;
  quantity: number;
};

type Store = {
  cart: Product[];
  wishlist: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  totalAmount: () => number;
  setCart: (cart: Product[]) => void; // Added setCart to update cart from outside
};

// Export loadCartFromLocalStorage
export const loadCartFromLocalStorage = (): Product[] => {
  if (typeof window !== "undefined") {
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
  }
  return [];
};

const saveCartToLocalStorage = (cart: Product[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

const useStore = create<Store>((set, get) => ({
  cart: loadCartFromLocalStorage(), // Initialize cart with localStorage data
  wishlist: [],
  addToCart: (product) => {
    set((state) => {
      const existingProduct = state.cart.find(
        (item) => item.id === product.id && item.name === product.name
      );

      let updatedCart;

      if (existingProduct) {
        updatedCart = state.cart.map((item) =>
          item.id === product.id && item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...state.cart, { ...product, quantity: 1 }];
      }

      saveCartToLocalStorage(updatedCart);
      return { cart: updatedCart };
    });
  },
  removeFromCart: (productId) =>
    set((state) => {
      const updatedCart = state.cart.filter((product) => product.id !== productId);
      saveCartToLocalStorage(updatedCart);
      return { cart: updatedCart };
    }),
  updateQuantity: (productId, quantity) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
      saveCartToLocalStorage(updatedCart);
      return { cart: updatedCart };
    }),
  addToWishlist: (product) =>
    set((state) => ({
      wishlist: [...state.wishlist, product],
    })),
  removeFromWishlist: (productId) =>
    set((state) => ({
      wishlist: state.wishlist.filter((product) => product.id !== productId),
    })),
  totalAmount: () =>
    get().cart.reduce((total, product) => total + product.price * product.quantity, 0),
  setCart: (cart) => set({ cart }), // Added setCart function
}));

export default useStore;