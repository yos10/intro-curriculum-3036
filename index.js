'use strict';

/**
 * 17の倍数である場合 true を返す
 * @param {number} num
 */
function isMultipleOfSeventeen(num) {
  if (num % 17 === 0) {
    // console.log(num);
    return true;
  }
}

module.exports = {
  isMultipleOfSeventeen
}
