/**
 * @param {number|array} list 可以是正整数或列表, 如果是数字, 即等同于 list = [0, 1, ..., list]
 * @param {?number} count 由列表取出的数量，默认取出列表所有
 * @returns {array} 随机列表
 */
const shuffle = (list, count) => {
  const len = list.length;
  let index = len;
  while(index--) {
    const randIndex = random(index + 1);
    list = swap(list, index, randIndex);
  }

  return list.slice(0, count);
};

/**
 * @param {number} x 正整数
 * @returns {number} 0 到 x - 1 之间的随机一个整数，包括 0 和 x - 1
 */
const random = x => Math.floor((Math.random() * x));

const swap = (list, x, y) => {
  const t = list[x];
  list[x] = list[y];
  list[y] = t;
  return list;
};

module.exports = shuffle;