import { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { Result } from "./Result";
import { ProductTable } from "./ProductTable";
import { AccountTable } from "./AccountTable";
import { getServiceValue, getGwClient1, getGwClient3, searchProducts, searchAccounts, buyProduct } from "../api/Api";

export const Home = () => {

  // DB更新用パラメータ(PRODUCT, ACCOUNT)
  const [accountId, setAccountId] = useState("");
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState("");

  const changeAccountId = (e) => {
    setAccountId(e.target.value);
  }
  const changeProductId = (e) => {
    setProductId(e.target.value);
  }
  const changeQuantity = (e) => {
    setQuantity(e.target.value);
  }

  // 購入処理APIの実行結果を管理
  const [isShow, setIsShow] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [resMsg, setResMsg] = useState("");

  // APIのレスポンス用
  const [res, setRes] = useState("");
  const [productList, setProductList] = useState([]);
  const [accountList, setAccountList] = useState([]);

  // API呼出し
  const getValue = async (port) => {
    setRes("");
    const res = await getServiceValue(port);
    setRes(res.data);
  }
  
  const getGwClient1Api = async (second) => {
    setRes("");
    const res = await getGwClient1(second);
    setRes(res.data);
  }
  
  const getGwClient3Api = async (second) => {
    setRes("");
    const res = await getGwClient3(second);
    setRes(res.data);
  }

  // DBからプロダクト情報と口座情報を取得
  const getDb = async () => {
    setProductList([]);
    setAccountList([]);

    const resProducts = await searchProducts();
    const resAccounts = await searchAccounts();

    setProductList(resProducts.data);
    setAccountList(resAccounts.data);
  }

  // 購入処理のAPI呼出し
  const updateProductAndAccount = async () => {
    const params = {
      accountId,
      productId,
      quantity
    }

    const res = await buyProduct(params);
    console.log("res.status", res.status)
    console.log("res.data", res.data)

    setAccountId("");
    setProductId("");
    setQuantity("");
    
    setIsShow(true);
    setIsSuccess(res.status === 200);
    setResMsg(res.data);

    setTimeout(() => {
      setIsShow(false);
    }, 5000);
  }


  return (
    <>
      <div className="row" style={{ margin: "10px" }}>
        <div className="col">
          <div className="d-flex flex-column">
            <div className="p-2">
              <Button variant="info" onClick={() => getValue(8080)}>gateway: 8080/value</Button>
            </div>
            <div className="p-2">
              <Button variant="info" onClick={() => getValue(8001)}>client-1: 8001/value</Button>
            </div>
            <div className="p-2">
              <Button variant="info" onClick={() => getValue(8003)}>client-3: 8003/value</Button>
            </div>
            <div className="p-2">
              <Button variant="success" onClick={() => getGwClient1Api(0)}>gateway: 8080/client-1/sample/0</Button>
            </div>
            <div className="p-2">
              <Button variant="success" onClick={() => getGwClient1Api(6)}>gateway: 8080/client-1/sample/6</Button>
            </div>
            <div className="p-2">
              <Button onClick={() => getGwClient3Api(0)}>gateway: 8080/client-3/sample/0</Button>
            </div>
            <div className="p-2">
              <Button onClick={() => getGwClient3Api(6)}>gateway: 8080/client-3/sample/6</Button>
            </div>
          </div>
        </div>
        <div className="col">
          <Result res={res} />
        </div>
      </div>
      <div style={{ borderBottom: "1px solid" }} />
      <div className="row" style={{ margin: "10px" }}>
        <div className="col">
        <div className="d-flex flex-column">
          <div className="p-2">
            <Button variant="success" onClick={getDb}>search DB</Button>
          </div>
          <div style={{ width: "160px" }}>
            <Form.Label>accountId</Form.Label>
            <Form.Control type="text" id="accountId" value={accountId} onChange={changeAccountId} />
          </div>
          <div style={{ width: "160px" }}>
            <Form.Label>productId</Form.Label>
            <Form.Control type="text" id="productId" value={productId} onChange={changeProductId} />
          </div>
          <div>
            <div className="row">
              <div className="col-3">
                <Form.Label>quantity</Form.Label>
                <div style={{ width: "160px" }}>
                  <Form.Control type="text" id="quantity" value={quantity} onChange={changeQuantity} />
                </div>
              </div>
              <div className="col-2" style={{ display: "flex", alignItems: "flex-end" }}>
                <Button onClick={updateProductAndAccount}>更新</Button>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="col">
          <div style={{ margin: "5px 0", fontWeight: "bold" }}>
            ACCOUNTテーブル(client-2 DB)
          </div>
          <AccountTable accountList={accountList} />
        </div>
      </div>
      <div className="row" style={{ margin: "10px" }}>
        <div className="col">
        <Alert variant={isSuccess ? 'success' : 'danger'} show={isShow}>
          { resMsg }
        </Alert>
        </div>
        <div className="col">
          <div style={{ margin: "5px 0", fontWeight: "bold" }}>
            PRODUCTテーブル(client-1 DB)
          </div>
          <ProductTable productList={productList} />
        </div>
      </div>
    </>
  )
}