async function signIn() {
    const login = document.querySelector('#login').value
    const password = document.querySelector('#password').value
    

    let payload = {login, password}

    let data = await makeQuery('users/login', 'post', payload);
    if (data.ok) {
        localStorage.setItem("currentUser", JSON.stringify(data.user))
        location.href = "dialogs.html"
    } else {
        alert("error")
    }
}

