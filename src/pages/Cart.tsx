import { Row, Col, Stack, Button } from "react-bootstrap"
import { appContext } from "../context/AppContext"
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItem } from "../components/CartItem"
import storeItems from "../data/items.json"
import { Link } from 'react-router-dom'

export function Cart() {
  const { closeCart, cartItems } = appContext()
  return (
        <Row>
        <Col xs={12} lg={9}>
        <h4>Your shopping cart</h4>
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
            Shipping  <br></br>
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
        </Col>
        <Col xs={12} lg={3}>
            <h4>New Arrivals</h4>
        </Col>
        </Row>
     
  )
}