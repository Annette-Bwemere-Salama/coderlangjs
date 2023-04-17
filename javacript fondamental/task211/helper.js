import {users} from "./helper.js"
export const logNames = (array)=>{
    array.forEach(users => {
        console.log(users.name)
    });
}