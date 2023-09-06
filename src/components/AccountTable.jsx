import { Table } from "react-bootstrap";

export const AccountTable = ({ accountList }) => {

  return (
    <>
      {accountList.length === 0 ? <></> :
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>accountId</th>
              <th>name</th>
              <th>balance</th>
              <th>reservedBalance</th>
            </tr>
          </thead>
          <tbody>
            {accountList.map(row =>
              <tr key={row.accountId}>
                <td>{row.accountId}</td>
                <td>{row.name}</td>
                <td>{row.balance}</td>
                <td>{row.reservedBalance}</td>
              </tr>
            )}
          </tbody>
        </Table>
      }
    </>
  )
}