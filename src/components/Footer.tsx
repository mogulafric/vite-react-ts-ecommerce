import { Col, Container, Row, InputGroup, Button, Form} from "react-bootstrap"
import { FB } from "../assets/FB"
import { IG } from "../assets/IG"
import { MasterCard } from "../assets/MasterCard"
import { Mpesa } from "../assets/Mpesa"
import { Paypal } from "../assets/Paypal"
import { TW } from "../assets/TW"
import { Visa } from "../assets/Visa"
import { WhtsAp } from "../assets/WtsAP"
import { YT } from "../assets/YT"

export function Footer(){
    return (
        <div >
        <hr/>
        <Container>
        <Row className="">
        <Col xs lg="3">
        <h4>Would you like to</h4>
        <ul>
            <li>Help center</li>
            <li>Contact Us</li>
            <li>How to shop</li>
            <li>Shipping and delivery</li>
            <li>Return policy</li>
            <li>Dispute Resolution Policy</li>
            <li>Bulky Purchase</li>
            <li>International Shipping</li>
            <li>Logistics</li>
            <li>Report producr</li>
        </ul>
        </Col>
        <Col xs lg="6" style={{textAlign:"center"}}>
            <h4>Follow us on</h4>
            <FB /> <TW/> <IG /> <YT/> <WhtsAp/>
            <br></br> <br></br>
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
            <h4>Accepted Payment methods</h4>
            <Mpesa /><MasterCard /> <Visa /><Paypal />
            </Col>
        <Col xs lg="3">     
        <ul>
            <li>Your Orders</li>
            <li>Gift Card & Registry</li>
            <li>Your List</li>
            <li>Shipping and delivery</li>
            <li>Find a Gift</li>
            <li>Returns</li>
            <li>Customer Service</li>
            <li>Complaints</li>
            <li>Report Service</li>
        </ul>
        </Col>
        </Row>
        </Container>
        <Row style={{textAlign:"center"}}>
            <p><a href="www.eliphicegroup.con">www.elephicegroup.com</a>: All Rights Reserved - &copy; 2022  </p>
            <p>email: info@eliphicegroup.com</p>
        </Row>
        </div>
    )

} 