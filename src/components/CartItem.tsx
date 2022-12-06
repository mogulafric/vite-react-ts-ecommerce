import { Button, Stack } from "react-bootstrap"
import { appContext } from "../context/AppContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
    const {
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    } = appContext()
  const item = storeItems.find(i => i.id === id)
  if (item == null) return null

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "50px", height: "30px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
        {formatCurrency(item.price )}
          
        </div>
      </div>
      
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button onClick={() => decreaseCartQuantity(item.id)
      }>-</Button>
      <Button onClick={() => increaseCartQuantity(item.id)
      }>+</Button> 
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  )
}