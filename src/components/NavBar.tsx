import { Button, Container, InputGroup, Nav, Navbar as NavbarBs, Form } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { Logo } from "../assets/Logo"
import { MenuIcon } from "../assets/MenuIcon"
import { Search } from "../assets/Search"
import { appContext } from "../context/AppContext"

export function Navbar() {
  const { openMainMenu, cartQuantity, openSearchBar , openCart} = appContext()
  return (
    <>
      <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
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
            <Nav.Link to="/store" as={NavLink}>
              <Logo />
            </Nav.Link>
            <Nav.Link >
            <Button
        onClick={openSearchBar}
        style={{ width: "3rem", height: "3rem", position: "relative" }}
        variant="outline-primary"
        className="rounded-circle"
        ><Search />
          </Button>
            
            </Nav.Link>
          </Nav>
          <Button
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
              fill="currentColor">
              <path d="M255.988 32C160.473 32 78.934 91.804 46.727 176h34.639c9.396-20.484 22.457-39.35 38.868-55.762C156.497 83.973 204.709 64 255.988 64c51.286 0 99.504 19.973 135.771 56.239C428.027 156.505 448 204.719 448 256c0 51.285-19.973 99.501-56.239 135.765C355.494 428.029 307.275 448 255.988 448c-51.281 0-99.493-19.971-135.755-56.234-16.412-16.412-29.473-35.28-38.871-55.766H46.725c32.206 84.201 113.746 144 209.264 144C379.703 480 480 379.715 480 256c0-123.702-100.297-224-224.012-224z" /><path d="M206.863 323.883l22.627 22.627L320 256l-90.51-90.51-22.628 22.628L258.745 240H32v32h226.745z" />
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