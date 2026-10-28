const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const vm = require('vm');

const ctx = { H3A: { ui: { h: function () {} } } };
vm.runInNewContext(fs.readFileSync(__dirname + '/../../assets/pages/teacher.js', 'utf8'), ctx);
const mask = ctx.H3A.pages.maskName;

test('名冊名字只留中間的字', () => {
  assert.strictEqual(mask('王宥廷'), 'O宥O');
  assert.strictEqual(mask(' 陳安 '), 'O安');
  assert.strictEqual(mask('歐陽宥廷'), 'OO宥O');
});

test('已經遮好或不是中文名字就不動', () => {
  assert.strictEqual(mask('O宥O'), 'O宥O');
  assert.strictEqual(mask('小熊'), '小熊');
  assert.strictEqual(mask('熊貓'), '熊貓');
  assert.strictEqual(mask('Amy'), 'Amy');
  assert.strictEqual(mask(''), '');
});
