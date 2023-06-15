import { Button } from "react-bootstrap";

export const Login = () => {

  const CLIENT_ID = ${CLIENT_ID};

  const login = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`;
  }

  return (
    <>
      <div className="row" style={{ margin: "10px" }}>
        <Button onClick={login}>ログイン</Button>
      </div>
    </>
  )
}