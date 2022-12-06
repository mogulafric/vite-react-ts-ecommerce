import { Offcanvas, Stack, Button, Row, InputGroup, Form } from "react-bootstrap"
import { appContext } from "../context/AppContext"

import { Categories } from "./Categories"


type ShoppingCartProps = {
    isOpenMainMenu: boolean
}
let subTotal: number = 0.84
let shipping: string = `$0.00`
let vat:number = 0.16

export function MainMenu({ isOpenMainMenu }: ShoppingCartProps) {
  const { closeMainMenu, cartItems } = appContext()
  return (
    <Offcanvas show={isOpenMainMenu} onHide={closeMainMenu} placement="start">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Main Logo </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
            {`Categories`}
          {cartItems.map(item => (
            <Categories key={item.id} {...item} />
            
          ))}
           <hr />
          {`Gifts`}
          {cartItems.map(item => (
            <Categories key={item.id} {...item} />
            
          ))}
          <hr />
          {`New Arrivals`}
          {cartItems.map(item => (
            <Categories key={item.id} {...item} />
            
          ))}
          <Row  style={{textAlign:"center"}}>
            
            <InputGroup className="mb-3">
              <Form.Control
                placeholder=" Enter your email."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-primary" id="button-addon2"
              >
                Subscribe
              </Button>
            </InputGroup>
            <hr/>
            <p><a href="www.eliphicegroup.con">www.elephicegroup.com</a>: All Rights Reserved<br/> - &copy; 2022  </p>
            <p>email: info@eliphicegroup.com</p>
            </Row>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}