import { sleep } from "./helper";
export const funkylog = ({ delay, randomized }) => {
    return async (str) => {
        for (let i = 0; i < str.length; i++) {
            process.stdout.write(str[i]);
            await sleep(randomized ? Math.random() * delay : delay);
        }
        process.stdout.write('\n');
    };
}