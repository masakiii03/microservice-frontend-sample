import { Table } from "react-bootstrap";

export const ProductTable = ({ productList }) => {

  return (
    <>
      {productList.length === 0 ? <></> :
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>productId</th>
              <th>productName</th>
              <th>price</th>
              <th>quantity</th>
              <th>reservedQuantity</th>
            </tr>
          </thead>
          <tbody>
            {productList.map(row =>
              <tr key={row.productId}>
                <td>{row.productId}</td>
                <td>{row.productName}</td>
                <td>{row.price}</td>
                <td>{row.quantity}</td>
                <td>{row.reservedQuantity}</td>
              </tr>
            )}
          </tbody>
        </Table>
      }
    </>
  )
}