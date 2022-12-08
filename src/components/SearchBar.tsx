import { Offcanvas, Stack, Button, InputGroup, Card,Form, Container} from "react-bootstrap"
import { appContext } from "../context/AppContext"
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItem } from "./CartItem"
import storeItems from "../data/items.json"
import {  Link } from 'react-router-dom'

type ShoppingCartProps = {
    isOpenSearchBar: boolean
}

export function SearchBar({ isOpenSearchBar }: ShoppingCartProps) {
  const { closeSearchBar} = appContext()
  return (
    <Offcanvas show={isOpenSearchBar} onHide={closeSearchBar} placement="top">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Search ...</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
    <Container>
        <InputGroup className="mb-3">
              <Form.Control
                placeholder=" Search anything ..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-primary" id="button-addon2"
              >
                Search
              </Button>
            </InputGroup>
            </Container>
      </Offcanvas.Body>
    </Offcanvas>
  )
}