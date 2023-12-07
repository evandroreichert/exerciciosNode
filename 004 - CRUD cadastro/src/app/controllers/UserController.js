import UserRepository from "../repositories/UserRepository.js"

class UserController {

    index(req, res) {
        let users = UserRepository.findAll()
        res.status(200).send(users)
    }

    show(req, res) {
        let user = buscarUser(req.params.id)
        res.json(user)
    }

    store(req, res) {
        getUsers().push(req.body)
        res.status(201).send("Usuário cadastrado com sucesso")
    }

    update(req, res) {
        let indexUser = buscarIndex(req.params.id)
        let users = getUsers()
        users[indexUser].usuario = req.body.usuario
        users[indexUser].senha = req.body.senha
        res.status(200).json(users[indexUser])
    }

    delete(req, res) {
        let indexUser = buscarIndex(req.params.id)
        getUsers().splice(indexUser, 1)
        res.status(200).send(`Usuário ${req.params.id} excluído com sucesso!`)
    }
}

export default new UserController