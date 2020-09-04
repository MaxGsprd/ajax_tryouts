/**
 * IIFE using Ajax to send & retreive data from php file
 */
(function (){   
    document.getElementById('btnSubmit').onclick = (e) => {
        e.preventDefault();
        let inputName = document.getElementById('name').value;
        requestCallback('data.php', inputName);
    }
    /**
     * function using Ajax to retrieve input value sent to php file and displaying data on DOM
     * @param url url used for ajax call
     * @param data input value sent to the url 
     */
    function requestCallback(url, data) {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.onload = function () {
            if (xhr.status === 200) {
                let responseData = xhr.responseText;
                console.log(responseData);
                let divPostData = document.getElementById('postData');
                divPostData.innerHTML = `<p style="margin:0">${responseData}</p>`;
            }
        }
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('name=' + encodeURIComponent(data));
    }
})();