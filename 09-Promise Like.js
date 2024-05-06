// 判断一个值是否是 Promise Like (意思就是它长得像是一个 Promise)
// Promise A+ 规范就是一套规则(https://promisesaplus.com/)，告诉你如何去实现一个 Promise
// ES6 中的 Promise 就是根据该规范实现的

function isPromiseLike(value) {
    return value !== null && (typeof value === 'object' || typeof value === 'function') && typeof value.then === 'function'
}

console.log(isPromiseLike(Promise.resolve(1))) // true

class Fn {
    then() {
        console.log('then')
    }
}

console.log(isPromiseLike(new Fn())) // true
