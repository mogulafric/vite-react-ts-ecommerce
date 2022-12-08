import { Button, Card, Col, ListGroup, Row, Form } from "react-bootstrap"
import { appContext } from "../context/AppContext"
import { formatCurrency } from "../utilities/formatCurrency"
import { Link } from 'react-router-dom'

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    } = appContext()
    const quantity = getItemQuantity(id)

    return (
        <Card className="h-100" >
            <Link to={`/item/${id}`}>
                <Card.Img
                    variant="top"
                    src={imgUrl}
                    height="200px"
                    style={{ objectFit: "cover" }}
                />
            </Link>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-6">{name}</span>
                    <span style={{fontSize:"10px"}}>{`${quantity} in cart`}</span> 
                </Card.Title>
                <div className="mt-auto">
                <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>{formatCurrency(price)}</strong>
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
                    <>
                        {/* <ListGroup.Item>
                            <Row>
                                <Col>Stock Unit</Col>
                                <Col>
                                    {id}
                                </Col>
                            </Row>
                        </ListGroup.Item> */}
                    </>
                    {quantity === 0 ? (
                        <Button variant="none" className="w-100" onClick={() => increaseCartQuantity(id)}>
                            + Add To Cart
                        </Button>
                    ) : (
                        <div
                            className="d-flex align-items-center flex-column"
                            style={{ gap: ".5rem" }}
                        >
                            <div
                                className="d-flex align-items-center justify-content-center"
                                style={{ gap: ".5rem" }}
                            >
                                <Button variant="none" onClick={() => decreaseCartQuantity(id)}>-</Button>
                                <span style={{fontSize:"10px"}}>{`${quantity} in cart`}</span> 
                                <Button variant="none" onClick={() => increaseCartQuantity(id)}>+</Button>
                            </div>
                            <Button
                                onClick={() => removeFromCart(id)}
                                variant="danger"
                                size="sm"
                            >
                                Remove
                            </Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    )
}