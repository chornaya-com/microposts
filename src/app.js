import {http} from "./http";
import {ui} from "./ui";

document.addEventListener('DOMContentLoaded', getPosts);

document.querySelector('.post-submit').addEventListener('click', submitPost);

document.getElementById('posts').addEventListener('click', deletePost);

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
        .then(() => {
            ui.showAlert('Post added', 'alert alert-dismissible alert-success');
            ui.clearFields();
            getPosts();
        })
        .catch(err => console.log(err));
}

function deletePost(event) {
    event.preventDefault();

    if(event.target.parentElement.classList.contains('delete')) {
        const id = event.target.parentElement.dataset.id;
        if(confirm('Are you sure?')) {
            http.delete(`http://localhost:3000/posts/${id}`)
                .then(() => {
                    ui.showAlert('Post removed', 'alert alert-dismissible alert-warning');
                    getPosts();
                })
                .catch(err => console.log(err));
        }
    }
}