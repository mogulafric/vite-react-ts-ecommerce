import { Row, Stack, Col } from "react-bootstrap";
import { OdersDetails } from "../components/OdersDetails";

export function Orders() {
    return (
        <Row>
            <Col xs={12} lg={9}>
            <OdersDetails OrderReceived={false} OrderCancelled={false} AwaitingInventoryToFulfil={false} ProcessingOrderAtHub={false} InTransitToBuyer={false} OrderCompleted={false} />
            </Col>
            <Col xs={12} lg={3}>left side</Col>
        </Row>
    )
}