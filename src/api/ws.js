const baseUrl = 'http://127.0.0.1:8000/api/';
export const url = 'http://127.0.0.1:8000';

export const get = async (path) => {
    return fetch(baseUrl + path)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.log(error);
        })
}

export const post = async (path, data) => {
    return fetch(baseUrl + path, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => {
            console.log(error);
        })
}