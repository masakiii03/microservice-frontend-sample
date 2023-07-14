import { useState } from "react";
import { Button } from "react-bootstrap";
import { Result } from "./Result";
import { getServiceValue, getGwClient1, getGwClient3 } from "../api/Api";

export const Home = () => {

  const [res, setRes] = useState("");

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
    </>
  )
}