/**
 * 使用 Promise 封装 setTimeout 等待函数
 * @param {Number} ms 等待的毫秒数
 */
var wait = ms => new Promise(resolve => setTimeout(resolve, ms))

export default wait
