import axios from "axios";

export const getServiceValue = async (port) => {
  const res = await axios.get(`http://localhost:${port}/value`,
    {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }
  );
  return res;
}

export const getGwClient1 = async (second) => {
  const res = await axios.get(`http://localhost:8080/client-1/sample/${second}`,
    {
      headers: {
        Authorization: localStorage.getItem("token"),
        ServiceName: "client-1"
      }
    }
  );
  return res;
}

export const getGwClient3 = async (second) => {
  const res = await axios.get(`http://localhost:8080/client-3/sample/${second}`,
    {
      headers: {
        Authorization: localStorage.getItem("token"),
        ServiceName: "client-3"
      }
    }
  );
  return res;
}

export const searchProducts = async () => {
  const res = await axios.get("http://localhost:8001/products",
    {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }
  );
  return res;
}

export const searchAccounts = async () => {
  const res = await axios.get("http://localhost:8002/client2/accounts",
    {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }
  );
  return res;
}

export const buyProduct = async (param) => {
  return await axios.post("http://localhost:8080/client-1/products",
    {
      ...param
    },
    {
      headers: {
        Authorization: localStorage.getItem("token"),
        ServiceName: "client-1"
      }
    }
  ).then(res => {
    return res;
  })
  .catch(err => {
    return err.response;
  })
}