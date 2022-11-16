export type CityType = {
    name: string
    country: string
}
type AddressType = {
    city: CityType,
    street: string,
}
type TechnologyType = {
    id: number,
    title: string
}
export type StudentType = {
    "name": string,
    surname: string,
    age: number,
    isActive: boolean,
    address: AddressType,
    technologies: Array<TechnologyType>
}

export const student : StudentType = {
    "name": "Liza",
    surname: "A",
    age: 26,
    isActive: true,
    address: {
        city: {
            name: "CityName",
            country: "CountryName"
        },
        street: "StreetName"
    },
    technologies: [
        {
            id: 1,
            title: "html"
        },
        {
            id: 2,
            title: "css"
        },
        {
            id: 3,
            title: "js"
        },
    ]
}
console.log(student["name"])
console.log(student.age)
console.log(student.address.city)
console.log(student.technologies[2].title)
