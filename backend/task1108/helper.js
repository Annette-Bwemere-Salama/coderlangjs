// 

// export const sleep = new Promise((resolve, reject, ms) => {
//     resolve(ms)
// })

export const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}