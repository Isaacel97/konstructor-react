//export const baseUrl = 'https://icandelario-dev.com/back/public/api/';
export const baseUrl = "http://localhost:8000/api/"
export const url = "http://localhost:3000"
//export const url = "https://icandelario-dev.com"

export const get = async (path) => {
  return fetch(baseUrl + path)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
    .catch((error) => {
      console.log(error)
    })
}

export const post = async (path, data) => {
  return fetch(baseUrl + path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("data desde ws", data)
      return data
    })
    .catch((error) => {
      console.log("data desde ws", error)
    })
}
