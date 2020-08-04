import {http} from "./http";
import {ui} from "./ui";

document.addEventListener('DOMContentLoaded', getPosts);

document.querySelector('.post-submit').addEventListener('click', submitPost);

document.getElementById('posts').addEventListener('click', deletePost);

document.getElementById('posts').addEventListener('click', enableEdit);

document.querySelector('.card-form').addEventListener('click', cancelEdit);

function getPosts() {
    http.get('http://localhost:3000/posts')
        .then(data => ui.showPosts(data))
        .catch(err => console.log(err));
}

function submitPost() {
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    const id = document.getElementById('id').value;

    const data = {
        title,
        body
    }

    if (title === '' || body === '') {
        ui.showAlert('Please write a post', 'alert alert-dismissible alert-danger');
    } else {
        if (id === '') {
            http.post('http://localhost:3000/posts', data)
                .then(() => {
                    ui.showAlert('Post added', 'alert alert-dismissible alert-success');
                    ui.clearFields();
                    getPosts();
                })
                .catch(err => console.log(err));
        } else {
            http.put(`http://localhost:3000/posts/${id}`, data)
                .then(() => {
                    ui.showAlert('Post updated', 'alert alert-dismissible alert-success');
                    ui.changeFormState('add');
                    getPosts();
                })
        }
    }
}

function deletePost(event) {
    event.preventDefault();

    if (event.target.parentElement.classList.contains('delete')) {
        const id = event.target.parentElement.dataset.id;
        if (confirm('Are you sure?')) {
            http.delete(`http://localhost:3000/posts/${id}`)
                .then(() => {
                    ui.showAlert('Post removed', 'alert alert-dismissible alert-warning');
                    getPosts();
                })
                .catch(err => console.log(err));
        }
    }
}

function enableEdit(event) {
    event.preventDefault();

    try {
        if (event.target.parentElement.classList.contains('edit')) {
            const id = event.target.parentElement.dataset.id;
            const card = event.target.closest('.card-body');
            const body = card.querySelector('.card-text').textContent;
            const title = card.querySelector('.card-title').textContent;

            const data = {
                id,
                title,
                body
            }

            ui.fillForm(data);
        }
    } catch (error) {
        console.log(error);
    }
}

function cancelEdit(event) {
    event.preventDefault();

    if (event.target.classList.contains('post-cancel')) {
        ui.changeFormState('add');
    }
}