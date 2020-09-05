/**
 * IIFE listening to click event on btn doing an Ajax call to get data from 'sample.    txt';
 */
(function (){
    let btn = document.getElementById('btn').addEventListener('click',loadTxt);
    let dataTxt = document.getElementById('dataText');

    /**
     * function getting data from 'sample.txt' file.
     */
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