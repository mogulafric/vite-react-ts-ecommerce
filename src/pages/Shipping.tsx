import { Button, Card, Col, Form, Row, Stack, Table } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import shippingCodes from "../data/shipment.json"
import { appContext } from "../context/AppContext" 
import { formatCurrency } from "../utilities/formatCurrency"

export function Shipping() {
  return (
    <div>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Check</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td><Form.Check type="radio" aria-label="radio 1" /></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td><Form.Check type="radio" aria-label="radio 1" /></td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td><Form.Check type="radio" aria-label="radio 1" /></td>
        </tr>
      </tbody>
      </Table>
      <div></div>
    </div>
  )
}