import {UserWithBooks, addBook, updateBookList_2, WithCompanies, addCompany, updateCompany} from './10_arrays';

test('add new book', () => {
    let user: UserWithBooks = {
        name: 'A',
        hair: 100,
        address: {title: 'NY'},
        books: ['a', 'b', 'c']
    }
    let changedUser = addBook(user, "NewBook")

    expect(user.books.length).toBe(3)
    expect(changedUser.books[3]).toBe("NewBook")
    expect(changedUser.address).toBe(user.address) //due to not deep copy
})

test('update a book', () => {
    let user: UserWithBooks = {
        name: 'A',
        hair: 100,
        address: {title: 'NY'},
        books: ['a', 'b', 'c']
    }
    let changedUser = updateBookList_2(user, user.books[2],"NewBook")

    expect(user.books.length).toBe(3)
    expect(changedUser.books.length).toBe(3)
    expect(changedUser.books[2]).toBe("NewBook")
    expect(user.books[2]).toBe("c")
    expect(changedUser.address).toBe(user.address) //due to not deep copy
})

test('add a company', () => {
    let user: UserWithBooks & WithCompanies = {
        name: 'A',
        hair: 100,
        address: {title: 'NY'},
        books: ['a', 'b', 'c'],
        companies: [
            {id:1, title:"c1"},
            {id:2, title:"c2"},
        ]
    }
    let changedUser = addCompany(user, {id:3, title:"c3"})

    expect(user.companies.length).toBe(2)
    expect(changedUser.companies.length).toBe(3)
    expect(changedUser.companies[2].title).toBe("c3")

})

test('update a company', () => {
    let user: UserWithBooks & WithCompanies = {
        name: 'A',
        hair: 100,
        address: {title: 'NY'},
        books: ['a', 'b', 'c'],
        companies: [
            {id:1, title:"c1"},
            {id:2, title:"c2"},
        ]
    }
    let changedUser = updateCompany(user, user.companies[0], "newc1")

    expect(user.companies.length).toBe(2)
    expect(changedUser.companies.length).toBe(2)
    expect(changedUser.companies[0].title).toBe("newc1")
    expect(user.companies[0].title).toBe("c1")

})