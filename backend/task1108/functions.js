// import { sleep } from "./helper";

export const writeLog =  (string) => {   
    // return string.split('');
    for (let i = 0; i < string.length; i++) {
        process.stdout.write(string[i]);
    }
    process.stdout.write('\n');
}