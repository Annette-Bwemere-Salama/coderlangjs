export const writeLog = (str) => {
    const newLine = process.stdout.write("\n")
    str.split('').map(el => process.stdout.write(el));
    newLine
}
