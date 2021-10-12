const form = document.querySelector('.form-test-drive')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    let = data = {}

    for(let { name, value} of form.elements) {
        if (name) {
            data[name] = value
        }
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(respons => {
        if (respons.status === 200 || respons.status === 201) {
            return respons.json()
        } else {
            throw new Error(respons.status)
        }
    })
    .then(data => {
        alert('Данные успешно сохранены!')
        form.reset()
    })
    .catch(error => {
        alert('Ошибка' + error.massage)
    })
})