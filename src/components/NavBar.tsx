import { Button, Container, InputGroup, Nav, Navbar as NavbarBs, Form } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { Logo } from "../assets/Logo"
import { MenuIcon } from "../assets/MenuIcon"
import { Search } from "../assets/Search"
import { appContext } from "../context/AppContext"

export function Navbar() {
  const { openMainMenu, cartQuantity, openSearchBar , openCart} = appContext()
  const searchText = "Search a product ..."
  
  return (
    <>
      <NavbarBs sticky="top" className="bg-gray  mb-3" style={{background:"#f8f9fa", marginBottom: "0 rem!important"}}>
        <Container>
          <Nav className="me-auto">
          <Nav.Link to="/store" as={NavLink}>
          <Button
         onClick = {openMainMenu} 
        style={{ width: "3rem", height: "3rem", position: "relative" }}
        variant="outline-primary"
        className="rounded-circle"
        >
            <MenuIcon />
            </Button>
           
            </Nav.Link>
            <Nav.Link>
            <Button className="d-block d-sm-none rounded-circle"
             onClick = {openSearchBar} 
             style={{ width: "3rem", height: "3rem", position: "relative" }}
             variant="outline-primary"
             
            >
              <Search />
            </Button>
            </Nav.Link>
            <Nav.Link to="/store" as={NavLink}>
             
            </Nav.Link>
            <Nav.Link >
            </Nav.Link>
          </Nav>
          <InputGroup className="mb-3 d-none d-sm-block w-100"
            

             style={{ position: "relative"   }}
            >
              <Form.Control
                placeholder={ searchText}
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                style={{ background:"#f8f9fa", height:"3rem", width:"90%", position:"relative" ,marginTop: "15px"}}
              />
            </InputGroup>
          <Button
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle">
            <svg width="30px" height="30px" viewBox="0 0 40 30" id="_03_-_Account" data-name="03 - Account" xmlns="http://www.w3.org/2000/svg">
  <path id="Path_217" data-name="Path 217" d="M16,1a8,8,0,1,0,8,8A8,8,0,0,0,16,1Zm0,2a6,6,0,1,1-6,6A6,6,0,0,1,16,3Z" transform="translate(-1 -1)" fill-rule="evenodd"/>
  <path id="Path_218" data-name="Path 218" d="M16,19.2c-5.657,0-10.558,1.175-13,2.82A3.865,3.865,0,0,0,1,25.1a3.865,3.865,0,0,0,2,3.08C5.442,29.825,10.343,31,16,31s10.558-1.175,13-2.82a3.865,3.865,0,0,0,2-3.08,3.865,3.865,0,0,0-2-3.08C26.558,20.375,21.657,19.2,16,19.2Zm0,2a26.973,26.973,0,0,1,10.867,1.909,5.8,5.8,0,0,1,1.694,1.132,1.06,1.06,0,0,1,0,1.718,5.8,5.8,0,0,1-1.694,1.132A26.973,26.973,0,0,1,16,29,26.973,26.973,0,0,1,5.133,27.091a5.8,5.8,0,0,1-1.694-1.132,1.06,1.06,0,0,1,0-1.718,5.8,5.8,0,0,1,1.694-1.132A26.973,26.973,0,0,1,16,21.2Z" transform="translate(-1 -1)" fill-rule="evenodd"/>
</svg>
          </Button> &nbsp;
          {cartQuantity > 0 && (
            <Button
              onClick={openCart}
              style={{ width: "3rem", height: "3rem", position: "relative" }}
              variant="outline-primary"
              className="rounded-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
              >
                <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
              </svg>

              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(25%, 25%)",
                }}
              >
                {cartQuantity}
              </div>
            </Button>
          )}
        </Container>
      </NavbarBs>
    </>
  )
}