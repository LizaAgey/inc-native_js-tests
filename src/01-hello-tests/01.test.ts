import {multiply, sum} from "./01";


// (1) тестовый набор данных (процесс замыкания)
// не даем четкие значения,т.к тесты могут их изменить, а другие тесты не смогут выполниться по измененным данным
let a:number;
let b:number;
let c:number;


// before each of tests (no "let"):
beforeEach ( () => {
    a = 1;
    b = 2;
    c = 3;

})

test("sum should be correct", () => {


// (2)
    const result1 = sum(a, b)
    const result2 = sum(a, c)

// (3)
    expect(result1).toBe(3)
    expect(result2).toBe(4)

})


// test ("WHAT WE TEST", function with logic of testing:
//  (1) initialData for testing
//  (2) action to test
//  (3) expected result
// )


//Run test: go to Terminal:
// yarn run test


//-------------------------------------------------------------
test("multiply should be correct", () => {

// (1)
// the top of the document

// (2)
    const result1 = multiply(a, b)
    const result2 = multiply(a, c)

// (3)
    expect(result1).toBe(2)
    expect(result2).toBe(3)

})
