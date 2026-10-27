const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs'); const path = require('node:path');
const { validateWords } = require('../../assets/core/wordsschema.js');
const { validateLesson } = require('../../assets/core/lessonschema.js');
const { locate } = require('../../assets/core/locate.js');
const W = require('../../data/lesson03.words.js');

const pendingImgs = (() => {
  const md = fs.readFileSync(path.join(__dirname, '../../docs/image-list.md'), 'utf8');
  return md.split(/\n## /).filter(sec => sec.split('\n')[0].includes('待生成'))
    .flatMap(sec => [...sec.matchAll(/`([a-z0-9-]+\.png)`/g)].map(m => m[1]));
})();
const imgOk = f => fs.existsSync(path.join(__dirname, '../../images/L03', f)) || pendingImgs.includes(f);

test('第 3 課字詞資料格式正確', () => { assert.deepEqual(validateWords(W), []); });
test('第 3 課生字：17 個，每個都有生字語詞和拆一拆', () => {
  assert.equal(W.hanzi.map(h => h.char).join(''), '國王喜歡穿只件點改越設計發方法分享');
  assert.equal(W.charwords.map(c => c.char).join(''), W.hanzi.map(h => h.char).join(''));
  W.hanzi.forEach(h => assert.ok(h.parts.length && h.story && h.sentence.includes(h.char), h.id));
});
test('第 3 課二年級：沒有成語、修辭', () => { assert.equal(W.idioms, undefined); assert.equal(W.rhetoric, undefined); });
test('第 3 課生字挖空、線索不說答案', () => {
  for (const h of W.hanzi) { assert.ok(h.words.includes(h.cloze.replace('＿', h.char)), h.id); assert.ok(!h.clue.includes(h.char), h.id); }
  for (const s of W.similar) assert.ok(!s.clue.includes(s.answer), s.id);
  for (const v of W.vocab) assert.ok(!v.example.includes(v.word), v.id);
});
test('第 3 課圖片都在 images/L03，或列在待生成清單', () => {
  const p = W.phrase || { pick: [], say: [], words: [] }, p2 = p.phrase2 || {};
  const imgs = [...W.hanzi.map(h => h.img), ...W.vocab.map(v => v.img), ...W.charwords.map(c => c.img),
    ...W.listen.flatMap(l => l.options.map(o => o.img)), p.intro && p.intro.img, ...p.pick.map(x => x.img), ...p.say.map(x => x.img), ...p.words.map(x => x.img),
    p2.intro && p2.intro.img, ...(p2.pick || []).map(x => x.img), ...(p2.fill || []).map(x => x.img),
    ...(W.pattern || []).flatMap(pt => [pt.img, ...pt.match.map(x => x.img), ...pt.conj.map(x => x.img)])];
  for (const f of imgs.filter(Boolean)) assert.ok(imgOk(f), f);
});
test('第 3 課公開資料裡沒有課文原句和教學資料的例句', () => {
  const all = JSON.stringify(W);
  ['國王喜歡穿新衣', '只要穿上新衣', '沒有新衣穿', '國王才能天天有新衣穿', '大臣送國王一件新衣', '國王穿上以後很滿意', '國王想穿新衣，一點都不難', '大臣找出國王穿過的衣服', '又改袖子，又加衣領', '國王看了好驚喜', '忍不住也一起動手做', '越做越高興', '國王喜歡上設計衣服', '把自己做好的衣服送給大家', '國王不再想著要穿新衣', '有不同的方法，可以讓自己開心', '把快樂分享出去', '越想越生氣', '越說越興奮', '媽媽喜歡吃美食', '哥哥喜歡打籃球', '上臺報告，就很緊張', '看到公園，就想玩秋千', '國防大臣', '只剩下一本故事書', '幫家裡的小狗穿上衣服', '吃冰過的西瓜', '最高領導人是國王', '想要給媽媽一個驚喜', '可愛的兔子圖樣', '這件衣服蠻合身', '才做出了積木城堡', '一點也不覺得冷', '這件洋裝是爸爸送給媽媽', '帶小點心到學校跟同學分享', '我是個小畫家', '最好的方法，就是早點出門', '樹上有一個鳥窩', '我和妹妹一起設計', '越喊越大聲'].forEach(t => assert.ok(!all.includes(t), t));
});
test('第 3 課課文原稿（有的話）格式正確、依據句找得到', { skip: !fs.existsSync(path.join(__dirname, '../../content/lesson03.plain.json')) }, () => {
  const l = JSON.parse(fs.readFileSync(path.join(__dirname, '../../content/lesson03.plain.json'), 'utf8'));
  assert.deepEqual(validateLesson(l), []);
  assert.equal(l.paragraphs.length, 4);
  l.quiz.concat(l.testExtra, [l.storyMap.tail]).filter(q => !q.hints).forEach(q => assert.ok(locate(l, q.evidence).sentIds.length, q.id));
  l.storyMap.bones.forEach(b => assert.ok(locate(l, b.evidence).sentIds.length, b.id));
  /* 正確答案不能明顯比錯的選項長 */
  l.quiz.concat(l.testExtra).forEach(q => assert.ok(q.options[q.answer].text.length <= Math.max(...q.options.filter((o, i) => i !== q.answer).map(o => o.text.length)) + 4, q.id));
  const imgs = [l.storyMap.head.img, ...l.storyMap.bones.flatMap(b => b.cards.map(c => c.img)), ...l.storyMap.decoys.map(c => c.img),
    ...l.vocab.map(v => v.img), ...l.quiz.concat(l.testExtra).flatMap(q => q.options.map(o => o.img))];
  for (const f of imgs.filter(Boolean)) assert.ok(imgOk(f), f);
});
test('第 3 課短語的提示不和答案有一樣的字', () => {
  W.phrase.pick.concat((W.phrase.phrase2 || {}).pick || []).forEach(x => assert.ok(![...x.options[0]].some(c => x.clue.includes(c)), x.id + ' ' + x.clue));
});
test('第 3 課句型：只要……就……', () => {
  assert.deepEqual(W.pattern.map(pt => pt.key), ['zhiyao']);
  const S = require('../../assets/core/speechcheck.js');
  for (const pt of W.pattern) for (const t of pt.examples.concat(pt.conj.map(c => c.full))) assert.equal(S.check({ kind: 'pattern', key: pt.key }, t).status, 'pending', t);
  for (const pt of W.pattern) for (const c of pt.conj) assert.equal(c.sentence.split('＿').join('').length + S.PATTERNS[pt.key].join('').length, c.full.length, c.id);
  /* 正確的接句不能明顯比別的選項長 */
  for (const pt of W.pattern) for (const m of pt.match) assert.ok(m.options[0].length <= Math.max(...m.options.slice(1).map(o => o.length)) + 2, m.id);
});
