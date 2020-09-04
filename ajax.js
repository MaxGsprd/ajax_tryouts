//Traversy Media
//AJAX Crash Course (Vanilla JavaScript)
//1h00

// Get text file.

let btn = document.getElementById('btn').addEventListener('click',loadTxt);
let dataTxt = document.getElementById('dataText');
function loadTxt () {
    console.log('clicked');
    const xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function () {
    //     if(this.readyState === 4 && this.status === 200) {
    //         console.log(xhr.responseText);
    //     }
    // }
    xhr.open('GET','sample.txt', true);  
    xhr.onload = function () {
            if(this.status == 200) {
                    dataTxt.textContent = this.responseText;
                }
            }
    xhr.send();
}

// POST Data to DB
let divPostData = document.getElementById('postData');
// let inputVal = document.getElementById('')
