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
const {closeMainMenu } = appContext()
  return (
    <Offcanvas show={isOpenMainMenu} onHide={closeMainMenu} placement="start">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
        <span style={{ 
              color:"#7c795d",
              fontFamily:"Trocchi serif",
              fontSize: "30px",
               fontWeight: "normal",
                lineHeight: "48px",
                margin: 0 }}>Elephice Group</span>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
            {`Categories`}
         <Categories id={0} quantity={0} />
           <hr />
          {`Gifts`}
         
          <hr />
          {`New Arrivals`}
          
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