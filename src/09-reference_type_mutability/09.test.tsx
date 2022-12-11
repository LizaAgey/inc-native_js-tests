type UserType = {
    name: string
    age: number
    address: {
        street: string
        building: number
    }
}

function increaseAge(user: UserType) {
    user.age++
}

test('reference type test (object)', () => {
    const user: UserType = {
        name: 'A',
        age: 14,
        address: {
            street: 'Street',
            building: 5
        }
    }

    increaseAge(user)

    expect(user.age).toBe(15)

    const seperman = user
    seperman.age = 1000

    expect(user.age).toBe(1000)


})

test('reference type test (array)', () => {
    const users: UserType[] = [
        {
            name: 'A',
            age: 14,
            address: {
                street: 'Street',
                building: 5
            }
        }, {
            name: 'A',
            age: 14,
            address: {
                street: 'Street',
                building: 5
            }
        }
    ]

    let admins = users
    admins.push({
        name: 'b',
        age: 10,
        address: {
            street: 'Street',
            building: 5
        }
    })

    expect(users[2]).toEqual({
        name: 'b',
        age: 10,
        address: {
            street: 'Street',
            building: 5
        }
    })

})

test('value type test', () => {
    const usersCount = 100

    let adminsCount = usersCount
    adminsCount++

    expect(usersCount).toBe(100)

})

test("", ()=> {
    const user: UserType = {
        name: 'A',
        age: 14,
        address: {
            street: 'Street',
            building: 5
        }
    }


    const user2: UserType = {
        name: "GH",
        age: 34,
        address: user.address
    }

    user2.address.street = "NewStreet"
    expect(user.address.street).toBe("NewStreet")
    expect(user.address === user2.address).toBe(true)


})