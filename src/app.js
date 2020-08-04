import {http} from "./http";
import {ui} from "./ui";

// GET posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

function getPosts() {
    http.get('http://localhost:3000/posts')
        .then(data => ui.showPosts(data))
        .catch(err => console.log(err));
}

function submitPost() {
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    const data = {
        title,
        body
    }

    http.post('http://localhost:3000/posts', data)
        .then(data => {
            ui.showAlert('Post added', 'alert alert-dismissible alert-success');
            ui.clearFields();
            getPosts();
        })
        .catch(err => console.log(err));
}