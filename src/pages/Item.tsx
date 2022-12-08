import { Button, Card, Col, ListGroup, Row, Form } from "react-bootstrap"
import {  Link } from "react-router-dom"
import storeItems from "../data/items.json"
import {useParams} from "react-router-dom"
import { formatCurrency } from "../utilities/formatCurrency"
import { appContext } from "../context/AppContext"


export function Item() {
  const {
    removeFromCart, 
    cartItems, 
    cartQuantity:number, increaseCartQuantity, decreaseCartQuantity } = appContext()
  const productss = useParams();
  const productid = Number(productss.id)
 
  const item = storeItems.filter(itemInArray => itemInArray.id === productid)
  console.log(item[0])
  const firstitem = storeItems[1]
  const id = firstitem.id
   
  
  return (
    <>
    <Row>
    <Col xs={12} md={6} lg={6}>
    <Card className="h-100" >
                <Card.Img
                    variant="top"
                    src={item[0].imgUrl}
                    height="200px"
                    style={{ objectFit: "cover" }}
                />
            <Card.Body  className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-6">{item[0].name}</span>
                    
                    <span style={{fontSize:"10px"}}>{`${item[0].id} in cart`}
                    </span> 
                </Card.Title>
                <div className="mt-auto">
                <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>{formatCurrency(item[0].price)}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {id > 0 ? 'In Stock' : 'Out Of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Options:</Col>
                      <Col>
                        {id > 0 ? '4' : 'Out Of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Variations</Col>
                      <Col>
                        {id > 0 ? '3' : 'Out Of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </div>
                
        <ListGroup variant='flush'>
                  <ListGroup.Item >
                  <strong>Reviews</strong><br></br>
                    <Row>
                    <Col><span>{`Rating`}</span></Col>
                    <Col><span>{4.7}</span></Col>
                    </Row>
                    <Row>
                    <Col><span>{`Comments`}</span></Col>
                    <Col><span>{`4 ${'Read'}`}</span></Col>
                    </Row>
                  </ListGroup.Item>
                
                <ListGroup.Item></ListGroup.Item>
          </ListGroup>
            </Card.Body>
        </Card>
        </Col>
        <Col xs={12} md={6} lg={6}>
        <Row>
          <span>Product desscription, Product desscription,Product desscriptionProduct desscription</span>
          <hr></hr>
          <span>Products options {`product specific`}</span>
          <hr></hr>
          <span>Product variations {`product specific`}</span>
          <hr></hr>
          <span>Product vreviews numbers of start {`(400)`}</span>
          <hr></hr>
          <span>Add to cart {`product specific`}</span>
         
                        <div
                  
                        >
                           
                            <Button
                               
                                variant="info"
                                size="sm"
                            >
                                Add to cart
                            </Button>
                        </div>
        </Row>
        <Row>
        </Row>
        </Col>
        </Row>
        <Row>
         <h4>Product description</h4>
         <span>
         Product Image
The product image shows shoppers what your product looks like in action. Most eCommerce businesses include multiple photos to show the product from different angles or in different colors. You can also give shoppers the option to zoom in and see details of the product.

Product Description
Your product description, or product copy, outlines your product’s features and tells shoppers why they should buy it. A great product description indicates what the product is and what it does while enticing the reader to make a purchase.
         </span>
         <span>
         Product Image
The product image shows shoppers what your product looks like in action. Most eCommerce businesses include multiple photos to show the product from different angles or in different colors. You can also give shoppers the option to zoom in and see details of the product.

Product Description
Your product description, or product copy, outlines your product’s features and tells shoppers why they should buy it. A great product description indicates what the product is and what it does while enticing the reader to make a purchase.
         </span>
         <span>
         Product Image
The product image shows shoppers what your product looks like in action. Most eCommerce businesses include multiple photos to show the product from different angles or in different colors. You can also give shoppers the option to zoom in and see details of the product.

Product Description
Your product description, or product copy, outlines your product’s features and tells shoppers why they should buy it. A great product description indicates what the product is and what it does while enticing the reader to make a purchase.
         </span>
        </Row>
       </>
  )
}



