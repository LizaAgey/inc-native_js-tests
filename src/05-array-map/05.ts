export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: "A F", age: 30},
    {name: "B F", age: 40},
    {name: "C F", age: 50},
]

const transformator = (man: ManType) => {
    return {
        stack: ["css", "js", "react"],
        firstName: man.name.split("")[0],
        lastName: man.name.split("")[1],
    };
};
let dev1 = transformator(people[0])
let dev2 = transformator(people[1])
let dev3 = transformator(people[2])

let devs = [dev1, dev2, dev3]
//----------------------------------------------

let mappedDevs = people.map(transformator)

let mappedShortDevs = people.map(man=> ({
    stack: ["css", "js", "react"],
    firstName: man.name.split("")[0],
    lastName: man.name.split("")[1],
}))

const messages = people.map(man => `Hello ${man.name.split(" ")[0]}! How are you?`)

export const createGreatingMessages = (people: Array<ManType>) => {
 return people.map(man => `Hello ${man.name.split(" ")[0]}! How are you?`)
    ;
};