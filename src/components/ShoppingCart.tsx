import { Offcanvas, Stack, Button } from "react-bootstrap"
import { appContext } from "../context/AppContext"
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItem } from "./CartItem"
import storeItems from "../data/items.json"
import { Link } from 'react-router-dom'

type ShoppingCartProps = {
  isOpen: boolean
}
let subTotal: number = 0.84
let shipping: string = `$0.00`
let vat:number = 0.16

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = appContext()
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto text-right">
            Subtotal {""}
            {formatCurrency(
              cartItems.reduce((subTotal, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return (subTotal + (item?.minusVAT  || 0) * cartItem.quantity)
              }, 0)
            )} 
          </div>
          <div className="ms-auto text-right">
            Shipping {shipping} <br></br>
          </div>
          <div className="ms-auto text-right">
            VAT {""}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return (total + ((item?.vat) || 0) * cartItem.quantity)
              }, 0)
            )}
          </div>
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
            
          </div>
          <Button onClick={closeCart}><Link to="/shipping" style={{color:'white'}}>Checkout</Link></Button>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}