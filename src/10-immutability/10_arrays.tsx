import {UserType} from './10_objects';

export type UserWithBooks = UserType & {
    books: Array<string>
}

export const addBook = (user: UserWithBooks, bookTitle: string) => {
    return {...user, books: [...user.books, bookTitle]}
};

//-----version 1-----
export const updateBookList_1 = (user: UserWithBooks, oldBook: string, newBook: string) => {
    let oldBookPosition = user.books.indexOf(oldBook)
    let copyBooks = [...user.books]
    copyBooks[oldBookPosition] = newBook

    return {...user, books: copyBooks}
};

//-----version 1-----
export const updateBookList_2 = (user: UserWithBooks, oldBook: string, newBook: string) => {

    return {...user, books: user.books.map(book=> book === oldBook ? newBook : book)}
};

export type CompanyType = {
    id: number,
    title: string
}

export type WithCompanies = { companies: Array<CompanyType> }


export const addCompany = (user: UserWithBooks & WithCompanies, company: CompanyType) => {
 return {
     ...user,
     companies: [...user.companies, company]
 }
};

export const updateCompany = (user: UserWithBooks & WithCompanies, company: CompanyType, newTitle:string) => {
    return {
        ...user,
        companies: user.companies.map(c => c.id === company.id ? {...c, title:  newTitle}: c)
    }
};