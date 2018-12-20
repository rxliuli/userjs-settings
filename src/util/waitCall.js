/**
 * 等待被调用
 * @param {Number} ms 超时毫秒数
 * @param {String} name 准备被调用的挂载到 window 对象上的方法名
 */
function waitCall (ms, name = 'waiting') {
  return new Promise((resolve, reject) => {
    var timeout = setTimeout(() => {
      reject(new Error('等待超时'))
    }, ms)
    window[name] = () => {
      clearTimeout(timeout)
      resolve()
    }
  })
}
export default waitCall
