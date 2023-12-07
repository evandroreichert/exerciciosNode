import UserRepository from "../database/repositories/UserRepository.js"

class UserController {

    index(req, res) {
        let users = UserRepository.findAll()
        res.status(200).send(users)
    }

    show(req, res) {
        let user = UserRepository.findById(req.params.id)
        res.json(user)
    }

    store(req, res) {
        UserRepository.create(req.body)
        res.status(201).json("Usuário cadastrado com sucesso")
    }

    update(req, res) {
        let user = UserRepository.update(req.params.id, req.body)
        res.status(200).json(user[indexUser])
    }

    delete(req, res) {
        UserRepository.delete(req.params.id)
        res.status(200).send(`Usuário ${req.params.id} excluído com sucesso!`)
    }
}

export default new UserController