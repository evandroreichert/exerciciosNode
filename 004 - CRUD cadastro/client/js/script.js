const container = document.getElementById('container')
const registerBtn = document.getElementById('register')
const toggleFormBtn = document.getElementById('login')

const signupBtn = document.getElementById('create-account')
const output = document.querySelector('#output')


registerBtn.addEventListener('click', () => {
    container.classList.add("active")
})

toggleFormBtn.addEventListener('click', () => {
    container.classList.remove("active")
})

signupBtn.addEventListener('click', async () => {
    const usuario = document.getElementById('user-register').value
    const senha = document.getElementById('password-register').value

    if (usuario.trim() == '' || senha.trim() == '') {
        alert('Preencha todos os campos corretamente.')
    } else {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "usuario": usuario,
                "senha": senha
            })
        };
    
        let response = await fetch('http://localhost:3030/user', options)
        let cadastro = await response.json()
    
        output.style.display = 'block'
        console.log(cadastro);
    }
})