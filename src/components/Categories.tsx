import { Button, Stack } from "react-bootstrap"
import { appContext } from "../context/AppContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
  id: number
  quantity: number
}

export function Categories({ id, quantity }: CartItemProps) {
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
        style={{ width: "30px", height: "30px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {`Cat name`}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              +{`2000`}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
        {`Over 2000 products`}
          
        </div>
      </div>
      
      
     
      <Button
        variant="outline-info"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &gt;
      </Button>
    </Stack>
  )
}