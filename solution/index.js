// solution/index.js
module.exports = function(Homework) {
    return (array, fn, initialValue, cb) => {
        let result = initialValue;
        array.length((length) => {
            new Promise((resolve) => {
                let i = 0;
                let stop = false

                let sFn = () => {
                    Homework.less(i, length, (isToContinue) => {
                        if (!isToContinue) {
                            stop = true
                            console.log(result)
                            resolve(result)
                        } else {
                            array.get(i, (nextToAdd) => {
                                fn(result, nextToAdd, i, null, (sum) => {
                                    Homework.add(i, 1, (it) => {
                                        i = it
                                        result = sum
                                        sFn()
                                    })
                                })
                            })

                        }
                    })
                }
                sFn()
            }).then((sm) =>
                cb(result)
            )
        })
    }
}