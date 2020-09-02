let btn = document.getElementById('btn').addEventListener('click',loadTxt);

function loadTxt () {
    console.log('clicked');
    const xhr = new XMLHttpRequest();
    xhr.open('GET','sample.txt', true);
    
    // xhr.onload = () => {
    //     if(xhr.status == 200) {
    //         console.log(xhr.responseText);
    //     }
    // }
    xhr.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200) {
                console.log(xhr.responseText);
            }

    }
    xhr.send();
}