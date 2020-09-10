/**
 * IIFE, using ajax to send data to be inserted in db using data.php
 */
(function (){   
    document.getElementById('newUserBtn').onclick = (e) => {
        e.preventDefault();
        document.getElementById('newUser').value;
        updateDbUsers();
    }

    /**
     * IIFE, using ajax to send data to be inserted in db using data.php
     * @param url url used for the ajax call
     * @param data input value sent by the ajax xhr.send()
     */
    function newUserCallback(url, data) {
        return new Promise(resolve =>  {
            let xhr = new XMLHttpRequest();
            xhr.open('POST', url);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    console.log('new user added');
                    resolve(xhr.responseText);
                }
            }
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send('newUser=' + encodeURIComponent(data));
        });
    }
    
      /**
     * async function waiting for newUserCallback data in order to display the new user on the list in the DOM
     */
    async function updateDbUsers() {
        await newUserCallback('data.php', newUser.value);
        let ul = document.getElementById('resDb');
        let li = `<li>${newUser.value}</li>`;
        ul.innerHTML += li;
    }
    
})();



    

