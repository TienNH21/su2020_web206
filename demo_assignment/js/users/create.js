const onFormSubmit = function (event) {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phoneNumber = document.querySelector('#phone_number').value;
    const address = document.querySelector('#address').value;

    const data = {
        name: name,
        email: email,
        phone_number: phoneNumber,
        address: address,
    };

    const url = 'https://5f2d045b8085690016922b50.mockapi.io/todo-list/users';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    };

    fetch(url, options)
        .then(function (response) {
            window.location.href = 'index.html';
            return response.json();
        })
        .then(function (responseData) {
            console.log(responseData);
        });
}

document.querySelector('#form_create_user').onsubmit = onFormSubmit;
