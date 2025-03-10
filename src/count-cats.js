import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(/* matrix */) {
  function countCats(array) {
    let a = 0
    const newArr = array.flat()
    for (let i in newArr) {
        if(newArr[i] === '^^') {
            a++
        }
    }
}

const arr = [ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ]

countCats(arr)
}
