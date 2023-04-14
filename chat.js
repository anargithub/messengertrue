let h3 = document.querySelector('h3')
let messagesContainer = document.querySelector('#messages')

let secondUserId = localStorage.getItem("secondUserId")
// let currentChat = localStorage.getItem("currentChatId")


async function showUserName(){
    const userInfo = await makeQuery('users/' + secondUserId)
    h3.innerHTML += userInfo.userName
}
showUserName()