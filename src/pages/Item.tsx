import { Button, Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"


export function Item() {
  const firstitem = storeItems[1]
  const id = firstitem.id
  
  return (
    <>
      <h1>{"The first item"}</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        
          <Col>
          <Card className="h-100" >
            <Link to={`/item/${id}`}>
                <Card.Img
                    variant="top"
                    src={firstitem.imgUrl}
                    height="200px"
                    style={{ objectFit: "cover" }}
                />
            </Link>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{firstitem.name}</span>
                    <span className="ms-2 text-muted">{formatCurrency(firstitem.price)}</span>
                </Card.Title>
              
            </Card.Body>
        </Card>
          </Col>
        
      </Row>
    </>
  )
}



