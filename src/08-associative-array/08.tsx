export type UserType = {
    id: number
    name: string
}

export type UsersType = {
    [key: string] : UserType
}

 const users: UsersType = {
    '101': {id: 101, name: 'a'},
    '1012': {id: 1012, name: 'd'},
    '34536': {id: 34536, name: 'f'},
    '17604': {id: 17604, name: 'g'},
    '1': {id: 1305, name: 'h'},
}
//FIND A USER:
//users[1] - faster

//ADD A USER:
//no duplicates:
let newUser: UserType = {id: 232, name: "fd"}
users[newUser.id] = newUser

//DELETE A USER:
// delete users[user.id]

//UPDATE A USER:
// users[user.id].name = "New"

 const usersArray = [
    {id: 101, name: 'a'},
    {id: 1012, name: 'd'},
    {id: 34536, name: 'f'},
    {id: 17604, name: 'g'},
    {id: 1, name: 'h'}
]

//FIND A USER:
//usersArray[5] - need to know exact position #
//usersArray.find(user => user.id === 1) - iterate all Array to find the necessary element => longer

//ADD A USER:
//could be duplicates:
usersArray.push(newUser)
let usersArrayCopy = [...usersArray, newUser]

//DELETE A USER:
// let usersArray = usersArray.filter(user => user.id ! === user.ud)
