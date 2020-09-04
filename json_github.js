/**
 * IIFE getting users Json data from github REST API
 */
(function(){

    let divResult = document.getElementById('dataJSON');

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users', true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            let users = JSON.parse(xhr.responseText);
            for (let i = 0; i < 12; i++) {
                divResult.innerHTML += `<div class="avatar""><img src="${users[i].avatar_url}"><p>${users[i].login}</div>`;
            }
        } else {
            console.log('ERROR :', xhr);
        }
    }
    xhr.send();
})();
