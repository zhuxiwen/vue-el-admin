/* 是否为空 */
const isEmpty = function(str) {
  return str === undefined || str === null || str === '' || str.trim().length === 0
}

/* 合法uri */
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母 */
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母 */
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母 */
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/* 验证帐号 */
export function validateUsername(rule, value, callback) {
  if (isEmpty(value)) {
    callback(new Error('帐号不能为空'))
  } else if (value.includes(' ')) {
    callback(new Error('帐号不能包含空格符'))
  } else {
    callback()
  }
}

/* 验证密码 */
export function validatePass(rule, value, callback) {
  if (isEmpty(value)) {
    callback(new Error('密码不能为空'))
  } else if (value.includes(' ')) {
    callback(new Error('密码不能包含空格符'))
  } else {
    callback()
  }
}
