import { buscarUser, buscarIndex, getUsers } from "../conection.js"

class UserRepository{

    create(user){
        getUsers().push(user)
    }

    findAll(){
        return getUsers()
    }

    findById(id){
        return buscarUser(id)
    }

    update(id, user){
        let indexUser = buscarIndex(id)
        let users = getUsers()
        users[indexUser].nome = user.usuario
        users[indexUser].ano = user.senha

        return users[indexUser]
    }

    delete(id){
        let indexUser = buscarIndex(id)
        getUser().splice(indexUser, 1)
    }
}

export default new UserRepository()