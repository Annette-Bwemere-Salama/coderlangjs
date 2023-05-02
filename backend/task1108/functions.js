import { sleep } from "./helper";

export const log =  (string) => {
    // await Promise.all([...s].split("").map(async (c) => {
    //     const newLine = process.stdout.write("\n")
    //     process.stdout.write(c);
    //     newLine
    //     if (sleep) {
    //         randomized(true)
    //         await sleep(delay);
    //     }
    // }));
    console.log(string);
}