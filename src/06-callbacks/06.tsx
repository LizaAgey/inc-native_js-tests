import React from 'react'

const callback = ():number => {
 return 12;
};

window.setTimeout(callback, 1000)

export const User = () => {

 //callback function:
 const deleteUser = () => {
 alert("Delete");
};

 const saveUser = () => {
 alert("Save");
};

 return (
     <div>Hello
     <button onClick={saveUser }>Save</button>
     <button onClick={deleteUser}>Delete</button>
     </div> )
};