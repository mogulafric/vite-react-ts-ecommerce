import { SetStateAction, useState } from "react";
import { Button, Carousel, Col, InputGroup, Row, Form, Container } from "react-bootstrap"
import { Categories } from "../components/Categories";
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"
import { Link} from "react-router-dom"
import { faBorderStyle } from "@fortawesome/free-solid-svg-icons";


export function Store() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: SetStateAction<number>, e: any) => {
    setIndex(0);
   
  };
  return (
    <>
     
      <Row>
        
        
          <Carousel >
            {storeItems.map((item)=>(
             
            <Carousel.Item>
               <Link to={item.name}>
             <img style={{height:"350px", width:"1500px", objectFit: "cover"}} src={item.imgUrl} />
             <Carousel.Caption>
          <h3>{item.name}</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Link>
             </Carousel.Item>
            
             ))}
          </Carousel>
        
      </Row>
      <Container>
      <Row>
        <Col >Catogories </Col></Row>
      <Row md={2} xs={1} lg={4} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            
            <Carousel >
            {storeItems.map((item)=>(
             
            <Carousel.Item>
               <Link to={item.name}>
             <img style={{height:"200px", width:"1500px", objectFit: "cover"}} src={item.imgUrl} />
             <Carousel.Caption>
          <h3>{item.name}</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Link>
             </Carousel.Item>
            
             ))}
          </Carousel>
            
          </Col>
        ))}
      </Row>
      <Row>
        <Col >Catogories </Col></Row>
      <Row md={2} xs={1} lg={4} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            
            <Carousel >
            {storeItems.map((item)=>(
             
            <Carousel.Item>
               <Link to={item.name}>
             <img style={{height:"200px", width:"1500px", objectFit: "cover"}} src={item.imgUrl} />
             <Carousel.Caption>
          <h3>{item.name}</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Link>
             </Carousel.Item>
            
             ))}
          </Carousel>
            
          </Col>
        ))}
      </Row>
      </Container>
    </>
  )
}