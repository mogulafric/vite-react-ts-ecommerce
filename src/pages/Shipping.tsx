import { Button, Card, Col, Form, ListGroup, Row, Stack, Table} from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import shippingCodes from "../data/shipment.json"
import { appContext } from "../context/AppContext" 
import { formatCurrency } from "../utilities/formatCurrency"
import { Link } from "react-router-dom"

export function Shipping() {
  function paymentHandler(){

  }
  return (
   <Row>
    <Col xs ={12} lg={9}>
      <h4>Shipping</h4>
      <Card style={{ width: 'auto', padding:"6px" }}>
      <Form>
      
        <div  className="mb-3">
         
          <Form.Check
            inline
            label="Out side"
            name="group1"
            id={"2-s"}
          />
          <br></br>
          <Form.Check
            inline
            label="With nairobi"
            name="group1"
            id={"1k"}
          />
        </div>
      
      <Link to="/payment">
      <Button 
      onClick={paymentHandler}
      style={{float:"right"}}
      variant="info"
      >Proceed to payment</Button>
      </Link>
    </Form>

    </Card>
    </Col>
    <Col xs ={12} lg={3}>
      <h5>  Your Cart</h5>
    <Card style={{ width: 'auto' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
    </Col>
   </Row>
  )
}