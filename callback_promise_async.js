// (function () {
//  var ps = document.querySelectorAll('.colored');
//  for (var i = 0; i < ps.length; i++) {
//      (function (p) {
//         window.setInterval(function() {
//             p.classList.toggle('blue');
//         }, 1000);
//      })(ps[i])     
//  }

// }())

let links = document.querySelectorAll('.meteo');
for (let i = 0; i < links.length; i++) {
    const link = links[i];
    link.addEventListener('click', function(e) {
        console.log('test');
        e.preventDefault();
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                let response = document.getElementById('result');
                response.innerHTML = xhr.responseText;
            }
        }
        xhr.open('GET', this.firstChild.getAttribute("href"), true);
        xhr.send();

    })  
}
//Exemple callback
const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'},
];

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//           output += `<li>${post.title} : ${post.body}</li>`;  
//         });
//         let ul = document.getElementById('demoAjax');
//         ul.innerHTML = output;
//     },1000);
// };

// function createPost (post, callback) {
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 2000);
// }

// createPost({title: 'Post three', body: 'This is post three'}, getPosts);


//Exemple promise

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
          output += `<li>${post.title} : ${post.body}</li>`;  
        });
        let ul = document.getElementById('demoAjax');
        ul.innerHTML = output;
    },1000);
};

function createPost (post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error) {
                resolve();
            } else {
                reject('une erreur est survenue');
            }
        }, 2000);
    })
}

// createPost({title: 'Post three', body: 'This is post threeYah'})
//     .then(getPosts)
//     .catch(err => console.error(err));

//Async/ await

async function init() {
    await createPost({title: 'Post three', body: 'This is post threeYahzee'});
    getPosts();
}

init();