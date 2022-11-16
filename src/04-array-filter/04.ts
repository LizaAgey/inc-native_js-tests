const ages: Array<number> = [5, 67, 89, 0, 23, 35, 100]

const filter = (age: number) => {
    return age > 90;
};

const oldAges = [100]

//--------------------------------------------------------------------

export type CourseType = {
    title: string
    price: number
}

const courses : Array<CourseType> = [
    {title: "css", price: 100},
    {title: "js", price: 200},
    {title: "html", price: 150}
]

//<160

export const cheapFilter = (course: CourseType) => {
    return course.price < 160
}

const cheapCourses = [
    {title: "css", price: 100},
    {title: "html", price: 150}
]