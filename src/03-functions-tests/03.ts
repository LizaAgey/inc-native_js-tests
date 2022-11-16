import {StudentType} from "../02-objects-tests/02";


//the function change the initial variable - it's not a clean function
export const addSkill = (student: StudentType, newSkill: string ) => {
 student.technologies.push({
     id: new Date().getTime(),
     title: newSkill
 })
};

