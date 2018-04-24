const shuffle = require('../index');
const assert = require('assert');

describe('index.js', function() {
  context('#shuffle()', function() {
    const defaultList = [1, 2, 3, 4, 5];
    it('如果第一个参数为长度为 5 的数组, 返回一个长度为 5 的随机数组', () => {
      const list = [...defaultList];
      const result = shuffle(defaultList);
      assert.equal(result.length, 5);
    });

    it('如果第一个参数为长度为 5 的数组, 且第二个参数为 4, 返回一个长度为 4 的随机数组', () => {
      const list = [...defaultList];
      const result = shuffle(defaultList, 4);
      assert.equal(result.length, 4);
    });

    it('如果第一个参数为 5, 则返回一个长度为 5 的随机数组', () => {
      const result = shuffle(5);
      assert.equal(result.length, 5);
    });

    it('如果第一个参数为 5, 且第二个参数为 4, 则返回一个长度为 5 的随机数组', () => {
      const result = shuffle(5, 4);
      assert.equal(result.length, 4);
    });
  });
});
