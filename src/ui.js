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
}

export const ui = new UI();