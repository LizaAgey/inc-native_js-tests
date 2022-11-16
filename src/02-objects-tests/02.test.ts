import {LocalCityType} from "./02_type";

let city:   LocalCityType

beforeEach(() => {
    city = {
        name: "CityName",
        country: "CountryName",
        houses: [{
            color: "red",
            number: 3
        }, {
            color: "blue",
            number: 5
        }],
        govBuildings: [{
            type: "type1",
            color: "yellow",
            number: 4
        }, {
            type: "type2",
            color: "pink",
            number: 6
        }],
        citizens: 100
    }
})

test("test city should contain two govBuildings", () => {
    expect(city.houses.length).toBe(2)

    expect(city.houses[0].color).toBe("red")
    expect(city.houses[0].number).toBe(3)

    expect(city.houses[1].color).toBe("blue")
    expect(city.houses[1].number).toBe(5)
})

test("test city should contain two houses", () => {
    expect(city.houses.length).toBe(2)

    expect(city.govBuildings[0].color).toBe("yellow")
    expect(city.govBuildings[0].number).toBe(4)
    expect(city.govBuildings[0].type).toBe("type1")

    expect(city.govBuildings[1].color).toBe("pink")
    expect(city.govBuildings[1].number).toBe(6)
    expect(city.govBuildings[1].type).toBe("type2")

})