import { Col, InputGroup, Row, Form, Button } from "react-bootstrap";

export function Login(){
    return (
        <Row>
            <Row>
                <h4>Login</h4>
            </Row>
            <Col xs={12} lg={9}>
                <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Username</InputGroup.Text>
                    <Form.Control
                    placeholder="Enter email or your phone number..."
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                    <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <Button className="mb-3" style={{float:"right"}}>
                      Login
                </Button>
            </Col>
            <Col xs={12} lg={3}>
            </Col>
        </Row>
    )
}