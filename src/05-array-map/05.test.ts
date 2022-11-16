import {createGreatingMessages, ManType} from "./05";
import {create} from "domain";

let people: Array<ManType> = []

beforeEach(() => {
    people = [
        {name: "A F", age: 30},
        {name: "B F", age: 40},
        {name: "C F", age: 50},
    ]
})

test("check number of greetings messages", () => {

    // let messages: Array<string> = people.map(man => `Hello ${man.name.split(" ")[0]}! How are you?`)
    const messages = createGreatingMessages(people)

    expect(messages.length).toBe(3)

})