export type UserType = {
    name: string
    hair: number
    address: { title: string }
}

export type LaptopType = {
    title: string
    model: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export const makeHairstyle = (user: UserType, power: number) => {
    let copy = {
        ...user,
        hair: user.hair/ power
    }
    return copy
};

export const moveUser = (user: UserWithLaptopType, title: string) => {
 return {...user, address: {...user.address, title}}
};