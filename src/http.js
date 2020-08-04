class EasyHTTP {
    // GET - make an HTTP request
    async get(url) {
        const response = await fetch(url);
        return await response.json();
    }

    // POST - make an HTTP add user request
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return await response.json();
    }

// PUT - make an HTTP update user request
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return await response.json();
    }

// DELETE - make an HTTP delete user request
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        return `Deleted ${response}`;
    }
}

export const http = new EasyHTTP();