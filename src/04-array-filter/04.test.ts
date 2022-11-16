import {cheapFilter, CourseType} from "./04";

test.skip ("should filter men older 90 years", ()=> {
    const ages: Array<number> = [5, 67, 89, 0, 23, 35, 100]
    const oldAges = ages.filter(age => age > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test("should filter courses which are cheaper than 160", ()=> {
    const courses : Array<CourseType> = [
        {title: "css", price: 100},
        {title: "js", price: 200},
        {title: "html", price: 150}
    ]

    let cheapCourses =  courses.filter(cheapFilter)
    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].price).toBe(100)
    expect(cheapCourses[1].price).toBe(150)

})