const users = [
    { id: 1, usuario: "alice_smith", senha: "senha123" },
    { id: 2, usuario: "bob_jones", senha: "senha456" },
    { id: 3, usuario: "clara_davis", senha: "senha789" },
    { id: 4, usuario: "david_miller", senha: "senhaabc" },
    { id: 5, usuario: "emma_wilson", senha: "senhadef" }
]

function buscarUser(id) {
    return users.filter(user => user.id == id)[0]
}

function buscarIndex(id) {
    return users.findIndex(user => user.id == id)
}

function getUsers() {
    return users
}

export { buscarUser, buscarIndex, getUsers }