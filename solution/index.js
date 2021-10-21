module.exports = function(Homework) {

    let asyncFn = (fn) => {
        return async(...args) => {
            return new Promise((resolve) => {
                fn(...args, (result) => {
                    resolve(result)
                })
            })
        }
    }

    return async(array, fn, initialValue, cb) => {
        let result = initialValue;
        let length = await asyncFn(array.length)()
        let i = 0;
        let stop = false

        let sFn = async() => {
            let isToContinue = await asyncFn(Homework.less)(i, length)
            if (!isToContinue) {
                stop = true
            } else {
                let nextToAdd = await asyncFn(array.get)(i)
                result = await asyncFn(fn)(result, nextToAdd, null, null)
                i = await asyncFn(Homework.add)(i, 2)
                await sFn()
            }
        }

        await sFn()
        cb(result)
    }
}