import {Row, Col, InputGroup, Form, Button} from 'react-bootstrap'

export function Register(){
    return(
        <>
        <Row>
        <h4>Register</h4>
        </Row>
       <Row>
        <Col xs={12} lg={9}>
            <Row>
         <Col xs={12} lg={6}>
           
            <InputGroup className='mb-3'>
                <InputGroup.Text> Fullaname</InputGroup.Text>
                <Form.Control
                type="text"
                placeholder="Enter your Full name"
                aria-label="Username"
                aria-describedby="basic-addon1">

                </Form.Control>
            </InputGroup>
            <InputGroup className='mb-3'>
                <InputGroup.Text> Email</InputGroup.Text>
                <Form.Control
                type="text"
                placeholder="Enter your email"
                aria-label="Username"
                aria-describedby="basic-addon1">

                </Form.Control>
            </InputGroup>
            <InputGroup className='mb-3'>
                <InputGroup.Text> Phone</InputGroup.Text>
                <Form.Control
                type="number"
                placeholder="Enter your mobile number"
                aria-label="Username"
                aria-describedby="basic-addon1">

                </Form.Control>
            </InputGroup>
            </Col>
            <Col xs={12} lg={6}>
            <InputGroup className='mb-3'>
                <InputGroup.Text> Country</InputGroup.Text>
                <Form.Control
                type="text"
                placeholder="Enter country"
                aria-label="Username"
                aria-describedby="basic-addon1">

                </Form.Control>
            </InputGroup>
            <InputGroup className='mb-3'>
                <InputGroup.Text> County</InputGroup.Text>
                <Form.Control
                type="text"
                placeholder="Enter County"
                aria-label="Username"
                aria-describedby="basic-addon1">

                </Form.Control>
            </InputGroup>
            <InputGroup className='mb-3'>
                <InputGroup.Text> Adress</InputGroup.Text>
                <Form.Control
                type="text"
                placeholder="Enter Adress"
                aria-label="Username"
                aria-describedby="basic-addon1">

                </Form.Control>
            </InputGroup>
            </Col>
            
            </Row>
            <Row>
                <Button className="mb-3">
                    <Col> Register</Col>
                </Button>
            </Row>
        </Col>
        <Col xs={12} lg={3}>
            <h5>Have Account</h5>
           
        </Col>
       </Row>
       </>
    )
}