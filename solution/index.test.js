// solution/index.js
import reduce from './index'
import Homework from '../playground'

const asyncArray = new Homework.AsyncArray([1, 2, 3, 8]);
const reducerSum = (acc, curr, i, src, cb) => Homework.add(acc, curr, cb);

reduce(Homework)(asyncArray, reducerSum, 0, (res) => {
    console.log(res); // 10
});