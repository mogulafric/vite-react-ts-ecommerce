import { createContext, ReactNode, useContext, useState } from "react"
import { MainMenu } from "../components/MainMenu"
import { SearchBar } from "../components/SearchBar"
import { ShoppingCart } from "../components/ShoppingCart"
import { useLocalStorage } from "../hooks/useLocalStorage"

type ContextProviderProps = {
  children: ReactNode
}

type CartItem = {
  id: number
  quantity: number
}
 type shippingCost={
  id:number,
  cost:number
 }

type ShoppingCartContext = {
  openCart: () => void
  closeCart: () => void
  openSearchBar:() => void
  closeSearchBar:() => void
  openMainMenu:() => void
  closeMainMenu:() => void
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: CartItem[]
  totalShippingCost: shippingCost[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function appContext() {
  return useContext(ShoppingCartContext)
}
export function ContextProvider({ children }: ContextProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenSearchBar, setIsOpenSearchBar] = useState(false)
  const [isOpenMainMenu, setIsOpenMainMenu] = useState(false)
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  )
  const [totalShippingCost, setTotalShippingCost] = useLocalStorage<shippingCost[]>(
    "shiping-cost",
    []
  )

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)
  const openSearchBar = () => setIsOpenSearchBar(true)
  const closeSearchBar = () => setIsOpenSearchBar(false)
  const openMainMenu = () => setIsOpenMainMenu(true)
  const closeMainMenu = () => setIsOpenMainMenu(false)
  function getItemQuantity(id: number) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }
  function increaseCartQuantity(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function decreaseCartQuantity(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function removeFromCart(id: number) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
        totalShippingCost,
        openSearchBar,
        closeSearchBar,
        openMainMenu,
        closeMainMenu
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
      <SearchBar isOpenSearchBar={isOpenSearchBar} />
      <MainMenu isOpenMainMenu={isOpenMainMenu} />
    </ShoppingCartContext.Provider>
  )
}