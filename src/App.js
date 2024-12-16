import axios from "axios";
import { useCallback, useEffect, useState } from "react";

function App() {
  const userId = 1;

  const [data, setDate] = useState("상태값 1");

  useEffect(() => {
    console.log(data);
  },[data]);

  useEffect(() => {
    getUser(userId);
  }, []);

  useEffect(() => {
    console.log("렌더링 끝");
  }, []);

  console.log("렌더링 시작");

  const getUser = useCallback(async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/user/" + userId
      );
      setDate(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [userId]);

  return <></>;
}

export default App;
