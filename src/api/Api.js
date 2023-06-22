import axios from "axios";

export const getAccessToken = async (code) => {
  const res = await axios.post(
    "http://localhost:9000/access_token",
    {
      code
    }
  );
  return res;
}

export const getGwValue = async () => {
  const res = await axios.get("http://localhost:8080/value",
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
        Authorization: localStorage.getItem("token")
      }
    }
  );
  return res;
}

export const getGwClient3 = async (second) => {
  const res = await axios.get(`http://localhost:8080/client-3/sample/${second}`,
    {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }
  );
  return res;
}