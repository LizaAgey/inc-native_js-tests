import {ManType} from './Component';

let props: ManType;

beforeEach(() => {
    props = {
        name: 'A',
        age: 32,
        lessons: [{title: 1}, {title: 2}, {title: 3, name: "A"}],
        address: {
            street: {
                title: 'B' //can not be found on the 1st level of destructuring
            }
        }
    }
})

test('train destructuring in objects', () => {

    // const age = props.age
    // const lessons = props.lessons ======>
    //searching object's elements by given in {} names
    //CAN NOT USE random names
    const {age, lessons} = props
    const {title} = props.address.street

    expect(age).toBe(32)
    expect(lessons.length).toBe(3)
    expect(title).toBe('B')

})

test('train destructuring in arrays', () => {

    // const lesson1 = props.lessons[0]
    // const lesson2 = props.lessons[1]

    //CAN use any names
    // const [less1, less2] = props.lessons
    // const [less1] = props.lessons
    // const [, less2] = props.lessons
    // const [,, less3] = props.lessons

    //get one array element into one variable and all others in the other one (restLessons = new array)
    const [less1,...restLessons] = props.lessons

    expect(less1.title).toBe(1)
    // expect(less2.title).toBe(2)

    expect(restLessons).toStrictEqual([{title: 2}, {title: 3, name: "A"}])

})