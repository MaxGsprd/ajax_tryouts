// Get text file
(function (){
    let btn = document.getElementById('btn').addEventListener('click',loadTxt);
    let dataTxt = document.getElementById('dataText');

    function loadTxt () {
        const xhr = new XMLHttpRequest();
        //method 1:
        // xhr.onreadystatechange = function () {
        //     if(this.readyState === 4 && this.status === 200) {
        //         console.log(xhr.responseText);
        //     }
        // }
        xhr.open('GET','sample.txt', true);
    
        //method 2:
        xhr.onload = function () {
                if (this.status == 200) {
                        dataTxt.textContent = this.responseText;
                    }
                }
        xhr.send();
    }
})();
// GET JSON
(function(){
    let divResult = document.getElementById('dataJSON');

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users?limit=10', true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
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
// POST Data to DB
(function (){   
    document.getElementById('btnSubmit').onclick = (e) => {
        // e.preventDefault();
        let inputName = document.getElementById('name').value;
        // console.log(inputName);
        requestCallback('demo.php', inputName);
    }

    function requestCallback(url, data) {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.onload = function () {
            if (xhr.status === 200) {
                console.log('sent');
                let data = xhr.responseText;
                console.log(data);
                let divPostData = document.getElementById('postData');
                divPostData.innerHTML = `<p>${data}</p>`;

            }
        }
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('name=' + encodeURIComponent(data));

    }

    

})();


