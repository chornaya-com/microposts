class UI {
    constructor() {
        this.posts = document.getElementById('posts');
        this.titleInput = document.getElementById('title');
        this.bodyInput = document.getElementById('body');
        this.idInput = document.getElementById('id');
        this.postSubmit = document.querySelector('.post-submit');
        this.forState = 'add';
    }

    showPosts(posts) {
        let output = '';

        posts.forEach((post) => {
            output += `
                <div class="card mb-3">
                    <div class="card-body">
                        <h4 class="card-title">${post.title}</h4>
                        <p class="card-text">${post.body}</p>
                        <div class="text-right">
                            <a href="#" class="edit card-link" data-id="${post.id}">
                                <i class="fa fa-pencil"></i>
                            </a>
                            <a href="#" class="delete card-link" data-id="${post.id}">
                                <i class="fa fa-remove"></i>
                            </a>
                        </div>
                    </div>
                </div>
               `;
        });
        this.posts.innerHTML = output;
    }

    showAlert(msg, className) {
        this.clearAlert();

        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(msg));

        const container = document.querySelector('.postsContainer');

        const posts = document.getElementById('posts');

        container.insertBefore(div, posts);

        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    clearFields() {
        this.titleInput.value = '';
        this.bodyInput.value = '';
    }
}

export const ui = new UI();