import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"

export function Store() {
  return (
    <>
      <span style={{ 
              color:"#7c795d",
              fontFamily:"Trocchi serif",
              fontSize: "35px",
               fontWeight: "normal",
                lineHeight: "48px",
                margin: 0 }}>Elephice Group</span>
      <Row md={2} xs={1} lg={4} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}