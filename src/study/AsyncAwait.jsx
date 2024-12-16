import { useState } from "react";

async function getUser(url, option) {
  if(url === "") {
    throw new Error("오류!!!");
  };
  return {url, option};
}

function getUser2(url, option) {
  if(url === "") {
    throw new Error("오류!!!");
  };
  return {url, option};
}

// async function getUser3(url, option) {
//   const response = getUser()
//   getUser2((await response).url, (await response).option);
// }

async function getUser3(url, option) {
  try {
    const response = await getUser();
    setTimeout(() => {
      getUser2(response.url, response.option);
    }, 1000);
  } catch(error) {
    console.error(error);
  }
}

function AsyncAwait() {

  const [ data, setDate ] = useState("");

  getUser3("https://localhost:8080/api/v1/user", {params: {}});

  return <></>
}

export default AsyncAwait