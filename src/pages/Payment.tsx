import { Button, Card, Col, Row } from "react-bootstrap"
import { MasterCard } from "../assets/MasterCard"
import { Mpesa } from "../assets/Mpesa"
import { Paypal } from "../assets/Paypal"
import { Visa } from "../assets/Visa"

export function Payment(){
    return(
      <Row>
        <Col xs={12} lg={9}>
            <h4>Select payment option</h4>
            <Card>
              <Card.Body>
                <Card.Title>
                    Payment mode<hr></hr>
                </Card.Title>
              <div>
                    
                    <span><Mpesa/> &nbsp;Mpesa<span style={{float:"right"}}>9999.00</span></span><br></br><br></br>
                    <span><Paypal/> &nbsp; Paypal<span style={{float:"right"}}>99.00</span></span><br></br><br></br>
                    <span><MasterCard/> &nbsp; Master Card<span style={{float:"right"}}>99.00</span></span><br></br><br></br>
                    <span><Visa/> &nbsp; Debit / Credit<span style={{float:"right"}}>99.00</span></span><br></br><br></br>
                    
                  </div><hr></hr>
                  <div>
                  <Button style={{float:"right"}}>Pay now</Button>
                  </div>
            </Card.Body>  
            </Card>
        </Col>
        <Col xs={12} lg={3}>
            <h4>Your Cart</h4>
            <Card>
                
                <Card.Body>
                <Card.Title>
                    Amount
                </Card.Title>
                  <div>
                    <span>Items Cost..<span style={{float:"right"}}>9999.00</span></span><br></br>
                    <span>VAT..<span style={{float:"right"}}>99.00</span></span><br></br>
                    <span>Shipping..<span style={{float:"right"}}>88.00</span></span>
                  </div><hr></hr>
                  <div>
                  <span>Total<span style={{float:"right"}}>88800.00</span></span>
                  </div>
                </Card.Body>
            </Card>
        </Col>
      </Row>
    )
}