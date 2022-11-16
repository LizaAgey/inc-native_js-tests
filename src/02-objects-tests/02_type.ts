export type HouseType = {
    color: string
    number: number
}

export type GovBuildingType = {
    type: "type1" | "type2"
    color: string
    number: number
}

export type LocalCityType = {
    name: string
    country: string
    houses: Array<HouseType>
    govBuildings: Array<GovBuildingType>
    citizens: number
}