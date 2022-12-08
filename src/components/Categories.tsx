import { Button, Stack } from "react-bootstrap"
import {Link } from "react-router-dom"
import { appContext } from "../context/AppContext"
import Category from "../data/Category.json"

type CartItemProps = {
  id: number
  quantity: number
}

export function Categories({ id, quantity }: CartItemProps) {
  
    const {
        removeFromCart,
    } = appContext()
  const item = Category.length
  if (item == null) return null

  return (
    <>
    {Category.map((item)=>(
      <>
      <Link to={"/"}>
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      
        <>
      <img
        src={item.imgUrl}
        style={{ width: "30px", height: "30px", objectFit: "cover" }}
      />
      <div className="me-auto">
       
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
        {`${item.name} (- over ${item.price} pdts)`}
          
        </div>
      </div>
      
      
     
      <Button
        variant="outline-info"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &gt;
      </Button>
      
     </>
      
    </Stack>
    </Link>
    </>
    ))}
    </>
  )
}   