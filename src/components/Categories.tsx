import { Button, Dropdown, DropdownButton, InputGroup, Stack, Form } from "react-bootstrap"
import { Link, Outlet } from "react-router-dom"
import { appContext } from "../context/AppContext"
import Category from "../data/Category.json"

export function Categories() {
  const { closeMainMenu } = appContext()

  const item = Category.length
  if (item == null) return null

  return (
    <>

      {Category.map((item) => (
        <>
          {/* <Link to={`/store/category:${item.id}`} style={{ textDecoration: 'none' }}
            onClick={closeMainMenu}> */}
          <Stack direction="horizontal"
            gap={2} className="d-flex align-items-center"
            key={item.id}
            
           
          >

            <>
              <img
                src={item.imgUrl}
                style={{ width: "30px", height: "30px", objectFit: "cover" }}
              />
              <div className="me-auto">

                <div className="text-muted" style={{ fontSize: "1.05rem" }}>
                  {`${item.name} (- over ${item.price} pdts)`}

                </div>
              </div>

              <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                  
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                  <Dropdown.Item href="#/action-1" active>
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action, Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            </>

          </Stack>
          {/* </Link> */}
        </>
      ))}
    </>
  )
}   