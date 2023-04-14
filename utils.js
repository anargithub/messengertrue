
const BASE_URL = "http://10.60.10.16:8080/api/"


async function makeQuery(endpoint, method='get', payload={}) {
    const options = {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    } 
    if (method.toLowerCase() === 'post' || method.toLowerCase() === 'put') {
        options.body = JSON.stringify(payload)
    }

    let response = await fetch(BASE_URL + endpoint, options);
    return await response.json();
}

