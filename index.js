/**
 * @param {number|array} list 可以是正整数或列表, 如果是数字, 即等同于 list = [0, 1, ..., list - 1]
 * @param {?number} count 由列表取出的数量，默认取出列表所有
 * @returns {array} 随机列表
 */
const shuffle = (list, count) => {
  list = Array.isArray(list) ? list : generateArray(list);

  const len = list.length;
  let index = len;
  while(index --) {
    const randIndex = random(index + 1);
    list = swap(list, index, randIndex);
  }

  return list.slice(0, count);
};


/**
 * 生成一个由 0 到 num 的升序数组
 * @param {number} num 数量
 * @returns {array} [0, 1, 2, ..., num - 1]
 */
const generateArray = (num) => Array.from(new Array(num).keys());

/**
 * @param {number} x 正整数
 * @returns {number} 0 到 x - 1 之间的随机一个整数，包括 0 和 x - 1
 */
const random = x => Math.floor((Math.random() * x));


/**
 * 交换列表内两个位置的值
 * @param {array} list
 * @param {number} x
 * @param {number} y
 */
const swap = (list, x, y) => {
  const t = list[x];
  list[x] = list[y];
  list[y] = t;
  return list;
};

module.exports = shuffle;
