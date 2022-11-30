import {UsersType} from './08';

let users: UsersType

beforeEach(() => {
        users = {
            '101': {id: 101, name: 'a'},
            '1012': {id: 1012, name: 'd'},
            '34536': {id: 34536, name: 'f'},
            '17604': {id: 17604, name: 'g'},
            '1': {id: 1305, name: 'h'},
        }
    }
)

test("should update corresponding user", ()=> {
    users["1"].name = "Kate"

    expect(users["1"].name).toBe("Kate")
    expect(users["1"]).toEqual({id: 1305, name: "Kate"})
})

test("should delete corresponding user", ()=> {
    delete users["1"]

    expect(users).toEqual({
        '101': {id: 101, name: 'a'},
        '1012': {id: 1012, name: 'd'},
        '34536': {id: 34536, name: 'f'},
        '17604': {id: 17604, name: 'g'}
    })
    expect(users["1"]).toBeUndefined()
})