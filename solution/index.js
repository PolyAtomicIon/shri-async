// solution/index.js
module.exports = function(Homework) {

    return async(array, fn, initialValue, cb) => {

        let result = initialValue;
        array.length((length) => {
            new Promise((resolve) => {
                let i = 0;
                let stop = false

                let sFn = () => {
                    less(i, length, (isToContinue) => {
                        if (!isToContinue) {
                            stop = true
                            console.log(result)
                            resolve(result)
                        } else {
                            array.get(i, (nextToAdd) => {
                                fn(result, nextToAdd, i, null, (sum) => {
                                    i++;
                                    result = sum
                                    sFn()
                                })
                            })

                        }
                    })
                }
                sFn()
            }).then((sm) =>
                result = sm
            )
        })
        return result
    }
}