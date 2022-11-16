import {StudentType} from "../02-objects-tests/02";
import {addSkill} from "./03";

let student: StudentType

beforeEach(() => {
    student = {
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
})

test("test that new technology is added", ()=> {
    addSkill(student,"react")

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].id).toBeDefined()

})