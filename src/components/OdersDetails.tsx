import { Button, Row, Stack, ProgressBar } from "react-bootstrap"
import { Link } from "react-router-dom"
import { appContext } from "../context/AppContext"
import Category from "../data/Category.json"

type OrderTrackingProps = {
    OrderReceived: boolean,
    OrderCancelled: boolean,
    AwaitingInventoryToFulfil: boolean,
    ProcessingOrderAtHub: boolean,
    InTransitToBuyer: boolean,
    OrderCompleted: boolean,
}
let now: number = 100
export function OdersDetails({
    OrderReceived,
    OrderCancelled,
    AwaitingInventoryToFulfil,
    ProcessingOrderAtHub,
    InTransitToBuyer,
    OrderCompleted
}: OrderTrackingProps) {
    const {
        removeFromCart,
    } = appContext()

    OrderReceived = true
    OrderCancelled = false
    AwaitingInventoryToFulfil = true
    ProcessingOrderAtHub = true
    InTransitToBuyer = true
    OrderCompleted = true


    return (
        <Row>
            <Row>
                <h4>Product Name `{`Order id`}` `{`Order date`}` `{`Order tracking id`}`</h4>
                <div>Your order fulfilment status</div>
                <div style={{ padding: "8px" }}>
                    <ProgressBar now={now} label={`${now}%`} />
                </div>
            </Row>
            <Row>

                <>
                    <Stack direction="horizontal" gap={2} className="mb-2 d-flex align-items-center">

                        <>
                            <img
                                src={Category[0].imgUrl} alt={"no img"}
                                style={{ width: "30px", height: "30px", objectFit: "cover" }}
                            />
                            <div className="me-auto">

                                <div className="text-muted" style={{ fontSize: "1.05rem" }}>
                                    {"Product Name"}

                                </div>
                            </div>
                           <Link to={"/ordertracking"}>
                            <Button
                                variant="outline-danger"
                                size="sm"
                                onClick={() => removeFromCart(Category[0].id)}
                            >
                             Track
                            </Button>
                            </Link>
                        </>

                    </Stack>

                </>

            </Row>
        </Row>
    )

}