const url = 'https://5f2d045b8085690016922b50.mockapi.io/todo-list/users' +
    '?sortBy=created_at&order=desc';

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
};

fetch(url, options)
    .then(function (response) {
        console.log('response', response);

        return response.json();
    })
    .then(function (responseData) {
        console.log('responseData', responseData);
        let html = '';

        responseData.forEach(function (user) {
            html += `
                <tr>
                    <td>${ user.id }</td>
                    <td>${ user.name }</td>
                    <td>${ user.email }</td>
                    <td>${ user.phone_number }</td>
                    <td>${ user.address }</td>
                    <td><a href="#" class="btn btn-primary">Update</a></td>
                    <td><a href="#" class="btn btn-danger">Delete</a></td>
                </tr>
            `;
        });

        document.querySelector('#list_users').innerHTML = html;
    });
