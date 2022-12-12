import { Navbar, Container } from "react-bootstrap";

export function TopNavBar(){
    return (
        <Navbar>
          <Container>
            <Navbar.Brand href="#home"><span style={{
          color: "#7c795d",
          fontFamily: "Trocchi serif",
          fontSize: "35px",
          fontWeight: "normal",
          lineHeight: "48px",
          margin: 0
        }}>Elephice Group
        </span></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}