let currentUser = JSON.parse(localStorage.getItem("currentUser"))
let h2 = document.querySelector('h2')

h2.innerHTML += currentUser.userName

async function drawUsers(){
    const users = await makeQuery('users')
    const usersList = document.querySelector('#usersList')

    usersList.innerHTML = ''
    
    for (let user of users) {
        usersList.innerHTML += 
            `<p onclick="openChat('${user._id}')"> ${user.userName} </p>`
        }
}
drawUsers()

async function openChat(userId){
    let chat = await makeQuery('chats', 'post', {
        firstUserId: currentUser._id,
        secondUserId: userId
    })

    localStorage.setItem('secondUserId', userId)
    localStorage.setItem('currentChatId', chat._id)
    location.href = "chat.html"
}