//Traversy Media
//AJAX Crash Course (Vanilla JavaScript)
//1h00

let btn = document.getElementById('btn').addEventListener('click',loadTxt);

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
                    console.log(this.responseText);
                }
            }
    xhr.send();
}

// Connect to database
