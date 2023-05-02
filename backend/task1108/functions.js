// import { sleep } from "./helper";

import { sleep } from "./helper";
export const writeLog = async (string, delay, randomized) => {   
    // return string.split('');
    for (let i = 0; i < string.length; i++) {
        process.stdout.write(string[i]);
        await sleep(randomized ? Math.random() * delay : delay);
    }
    process.stdout.write('\n');
}