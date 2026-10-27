const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs'); const path = require('node:path');
const { validateWords } = require('../../assets/core/wordsschema.js');
const { validateLesson } = require('../../assets/core/lessonschema.js');
const { locate } = require('../../assets/core/locate.js');
const W = require('../../data/lesson09.words.js');

const pendingImgs = (() => {
  const md = fs.readFileSync(path.join(__dirname, '../../docs/image-list.md'), 'utf8');
  return md.split(/\n## /).filter(sec => sec.split('\n')[0].includes('待生成'))
    .flatMap(sec => [...sec.matchAll(/`([a-z0-9-]+\.png)`/g)].map(m => m[1]));
})();
const imgOk = f => fs.existsSync(path.join(__dirname, '../../images/L09', f)) || pendingImgs.includes(f);

test('第 9 課字詞資料格式正確', () => { assert.deepEqual(validateWords(W), []); });
test('第 9 課生字：19 個，每個都有生字語詞和拆一拆', () => {
  assert.equal(W.hanzi.map(h => h.char).join(''), '黃沖澡蘿蔔哪粒熱浴蒸胖名苔蛋蔬通細淡飄');
  assert.equal(W.charwords.map(c => c.char).join(''), W.hanzi.map(h => h.char).join(''));
  W.hanzi.forEach(h => assert.ok(h.parts.length && h.story && h.sentence.includes(h.char), h.id));
});
test('第 9 課二年級：沒有成語、修辭', () => { assert.equal(W.idioms, undefined); assert.equal(W.rhetoric, undefined); });
test('第 9 課生字挖空、線索不說答案', () => {
  for (const h of W.hanzi) { assert.ok(h.words.includes(h.cloze.replace('＿', h.char)), h.id); assert.ok(!h.clue.includes(h.char), h.id); }
  for (const s of W.similar) assert.ok(!s.clue.includes(s.answer), s.id);
  for (const v of W.vocab) assert.ok(!v.example.includes(v.word), v.id);
});
test('第 9 課圖片都在 images/L09，或列在待生成清單', () => {
  const p = W.phrase || { pick: [], say: [], words: [] }, p2 = p.phrase2 || {};
  const imgs = [...W.hanzi.map(h => h.img), ...W.vocab.map(v => v.img), ...W.charwords.map(c => c.img),
    ...W.listen.flatMap(l => l.options.map(o => o.img)), p.intro && p.intro.img, ...p.pick.map(x => x.img), ...p.say.map(x => x.img), ...p.words.map(x => x.img),
    p2.intro && p2.intro.img, ...(p2.pick || []).map(x => x.img), ...(p2.fill || []).map(x => x.img),
    ...(W.pattern || []).flatMap(pt => [pt.img, ...pt.match.map(x => x.img), ...pt.conj.map(x => x.img)])];
  for (const f of imgs.filter(Boolean)) assert.ok(imgOk(f), f);
});
test('第 9 課公開資料裡沒有課文原句和教學資料的例句', () => {
  const all = JSON.stringify(W);
  ['媽媽給小黃瓜沖澡', '等在後面的紅蘿蔔', '急著想玩水', '爸爸幫米粒泡澡', '送進發熱的浴室', '顆顆蒸得白又胖', '我來點點名', '海苔、米飯搶先到', '蛋皮、蔬菜接著來', '食材通通在一起', '我們細心的捲哪捲', '把全家人緊緊黏在一起', '淡淡的香氣飄出來', '這是我最愛的味道', '香香的麵包', '硬硬的石頭', '小鴨來玩玩水', '妹妹來唱唱歌', '運動完沖澡好舒服', '涼拌菜', '奶奶會蒸年糕', '避免滑倒', '急著開冷氣', '不讓米粒流出來', '好溫暖哪', '營養豐富的蔬菜', '肚子咕嚕叫了起來', '茉莉花淡淡的花香', '黏在額頭上', '樹葉的紋路', '通通吃光光', '空心菜', '蛋炒飯', '都喜歡吃海苔', '確定同學到齊', '舊褲子穿不下'].forEach(t => assert.ok(!all.includes(t), t));
});
test('第 9 課課文原稿（有的話）格式正確、依據句找得到', { skip: !fs.existsSync(path.join(__dirname, '../../content/lesson09.plain.json')) }, () => {
  const l = JSON.parse(fs.readFileSync(path.join(__dirname, '../../content/lesson09.plain.json'), 'utf8'));
  assert.deepEqual(validateLesson(l), []);
  assert.equal(l.paragraphs.length, 5);
  l.quiz.concat(l.testExtra, [l.storyMap.tail]).filter(q => !q.hints).forEach(q => assert.ok(locate(l, q.evidence).sentIds.length, q.id));
  l.storyMap.bones.forEach(b => assert.ok(locate(l, b.evidence).sentIds.length, b.id));
  /* 正確答案不能明顯比錯的選項長 */
  l.quiz.concat(l.testExtra).forEach(q => assert.ok(q.options[q.answer].text.length <= Math.max(...q.options.filter((o, i) => i !== q.answer).map(o => o.text.length)) + 4, q.id));
  const imgs = [l.storyMap.head.img, ...l.storyMap.bones.flatMap(b => b.cards.map(c => c.img)), ...l.storyMap.decoys.map(c => c.img),
    ...l.vocab.map(v => v.img), ...l.quiz.concat(l.testExtra).flatMap(q => q.options.map(o => o.img))];
  for (const f of imgs.filter(Boolean)) assert.ok(imgOk(f), f);
});
test('第 9 課短語的提示不和答案有一樣的字', () => {
  W.phrase.pick.concat((W.phrase.phrase2 || {}).pick || []).forEach(x => assert.ok(![...x.options[0]].some(c => x.clue.includes(c)), x.id + ' ' + x.clue));
});
test('第 9 課沒有句型', () => { assert.deepEqual(W.pattern || [], []); });
