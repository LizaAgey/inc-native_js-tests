import React from 'react';

export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: number; name?: string }>
    address: { street: { title: string } }
}

type ComponentPropsType = {
    title: string
    man: ManType
    cars: string
}

//TRAIN destructuring in functions:

//card will not be added to function as avaliable props
const Component: React.FC<ComponentPropsType> = ({title, man }) => {
    // additional case:
    // const {title, man:{name}} = props
    // если в пропсах указано именно props


    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{man.name}</div>
        </div>
    );
};

export default Component;

//notes:
//put other elements from props to function, but without name giving
// const Component: React.FC<ComponentPropsType> = ({title, man, ...props }) => {...}