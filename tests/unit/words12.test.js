const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs'); const path = require('node:path');
const { validateWords } = require('../../assets/core/wordsschema.js');
const { validateLesson } = require('../../assets/core/lessonschema.js');
const { locate } = require('../../assets/core/locate.js');
const W = require('../../data/lesson12.words.js');

const pendingImgs = (() => {
  const md = fs.readFileSync(path.join(__dirname, '../../docs/image-list.md'), 'utf8');
  return md.split(/\n## /).filter(sec => sec.split('\n')[0].includes('待生成'))
    .flatMap(sec => [...sec.matchAll(/`([a-z0-9-]+\.png)`/g)].map(m => m[1]));
})();
const imgOk = f => fs.existsSync(path.join(__dirname, '../../images/L12', f)) || pendingImgs.includes(f);

test('第 12 課字詞資料格式正確', () => { assert.deepEqual(validateWords(W), []); });
test('第 12 課生字：20 個，每個都有生字語詞和拆一拆', () => {
  assert.equal(W.hanzi.map(h => h.char).join(''), '鵝念曲項浮掌撥波詩作首歲指伸脖身體隻倒肚');
  assert.equal(W.charwords.map(c => c.char).join(''), W.hanzi.map(h => h.char).join(''));
  W.hanzi.forEach(h => assert.ok(h.parts.length && h.story && h.sentence.includes(h.char), h.id));
});
test('第 12 課二年級：沒有成語、修辭', () => { assert.equal(W.idioms, undefined); assert.equal(W.rhetoric, undefined); });
test('第 12 課生字挖空、線索不說答案', () => {
  for (const h of W.hanzi) { assert.ok(h.words.includes(h.cloze.replace('＿', h.char)), h.id); assert.ok(!h.clue.includes(h.char), h.id); }
  for (const s of W.similar) assert.ok(!s.clue.includes(s.answer), s.id);
  for (const v of W.vocab) assert.ok(!v.example.includes(v.word), v.id);
});
test('第 12 課圖片都在 images/L12，或列在待生成清單', () => {
  const p = W.phrase || { pick: [], say: [], words: [] }, p2 = p.phrase2 || {};
  const imgs = [...W.hanzi.map(h => h.img), ...W.vocab.map(v => v.img), ...W.charwords.map(c => c.img),
    ...W.listen.flatMap(l => l.options.map(o => o.img)), p.intro && p.intro.img, ...p.pick.map(x => x.img), ...p.say.map(x => x.img), ...p.words.map(x => x.img),
    p2.intro && p2.intro.img, ...(p2.pick || []).map(x => x.img), ...(p2.fill || []).map(x => x.img),
    ...(W.pattern || []).flatMap(pt => [pt.img, ...pt.match.map(x => x.img), ...pt.conj.map(x => x.img)])];
  for (const f of imgs.filter(Boolean)) assert.ok(imgOk(f), f);
});
test('第 12 課公開資料裡沒有課文原句和教學資料的例句', () => {
  const all = JSON.stringify(W);
  ['星期日，我們在池邊散步', '我看到水裡的白鵝', '曲項向天歌', '白毛浮綠水', '紅掌撥清波', '詩人駱賓王作這首詩的時候才七歲', '姐姐指著水面', '白鵝伸長脖子，對著天空唱歌', '身體浮在水面上', '腳掌輕輕撥著水', '真的和駱賓王的詠鵝詩一樣', '有一隻鵝把脖子伸進水裡', '還在水裡翻跟頭', '又有一隻也這麼做', '我也來詠鵝', '倒立在水中', '翻個大跟頭', '肚皮向天空', '姐姐變成小詩人了', '慢慢喝著湯', '靜靜看著書', '小狗坐在草地上', '奶奶走在人行道上', '哥哥變成小畫家了', '媽媽變成大廚師了', '妹妹學會游泳的時候才三歲', '爸爸打掃客廳才花了一個小時', '弟弟剛玩過雲霄飛車', '接著玩碰碰車', '爸爸洗好米，接著炒青菜'].forEach(t => assert.ok(!all.includes(t), t));
});
test('第 12 課課文原稿（有的話）格式正確、依據句找得到', { skip: !fs.existsSync(path.join(__dirname, '../../content/lesson12.plain.json')) }, () => {
  const l = JSON.parse(fs.readFileSync(path.join(__dirname, '../../content/lesson12.plain.json'), 'utf8'));
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
test('第 12 課短語的提示不和答案有一樣的字', () => {
  W.phrase.pick.concat((W.phrase.phrase2 || {}).pick || []).forEach(x => assert.ok(![...x.options[0]].some(c => x.clue.includes(c)), x.id + ' ' + x.clue));
});
test('第 12 課句型：……才……、……接著……', () => {
  assert.deepEqual(W.pattern.map(pt => pt.key), ['cai2', 'jiezhe']);
  const S = require('../../assets/core/speechcheck.js');
  for (const pt of W.pattern) for (const t of pt.examples.concat(pt.conj.map(c => c.full))) assert.equal(S.check({ kind: 'pattern', key: pt.key }, t).status, 'pending', t);
  for (const pt of W.pattern) for (const c of pt.conj) assert.equal(c.sentence.split('＿').join('').length + S.PATTERNS[pt.key].join('').length, c.full.length, c.id);
  /* 正確的接句不能明顯比別的選項長 */
  for (const pt of W.pattern) for (const m of pt.match) assert.ok(m.options[0].length <= Math.max(...m.options.slice(1).map(o => o.length)) + 2, m.id);
});
