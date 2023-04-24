import { sleep } from "./helper";
// export const writeLog = async (s,delay) => {
//         const newLine = process.stdout.write("\n")
//     s.split('').map(el =>  process.stdout.write(el));
//         newLine
//   await sleep(delay)

// }

export const writeLog = async (s, delay) => {
    await Promise.all([...s].split("").map(async (c) => {
        const newLine = process.stdout.write("\n")
        process.stdout.write(c);
        newLine
        await sleep(delay);
    }));
    console.log();
}