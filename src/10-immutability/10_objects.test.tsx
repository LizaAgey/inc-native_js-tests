import {makeHairstyle, moveUser, UserType, UserWithLaptopType} from './10_objects';

test('change hair value', () => {
    let user: UserType = {
        name: 'A',
        hair: 100,
        address: {title: 'NY'},

    }
    let changedUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(100)
    expect(changedUser.hair).toBe(50)
    expect(changedUser.address).toBe(user.address) //due to not deep copy
})

test('change address', () => {
    let userWithLaptop: UserWithLaptopType = {
        name: 'A',
        hair: 100,
        address: {title: 'NY'},
        laptop: {title: "fsdg", model:"sadfg"}
    }
    let movedUser = moveUser(userWithLaptop, "NewAddressTotle")


    expect(userWithLaptop).not.toBe(movedUser)
    expect(movedUser.address.title).toBe("NewAddressTotle")
    expect(userWithLaptop.address.title).toBe("fsdg")
    expect(movedUser.laptop).toBe(userWithLaptop.laptop)
})