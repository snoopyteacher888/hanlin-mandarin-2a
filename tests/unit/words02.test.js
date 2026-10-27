const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs'); const path = require('node:path');
const { validateWords } = require('../../assets/core/wordsschema.js');
const { validateLesson } = require('../../assets/core/lessonschema.js');
const { locate } = require('../../assets/core/locate.js');
const W = require('../../data/lesson02.words.js');

const pendingImgs = (() => {
  const md = fs.readFileSync(path.join(__dirname, '../../docs/image-list.md'), 'utf8');
  return md.split(/\n## /).filter(sec => sec.split('\n')[0].includes('待生成'))
    .flatMap(sec => [...sec.matchAll(/`([a-z0-9-]+\.png)`/g)].map(m => m[1]));
})();
const imgOk = f => fs.existsSync(path.join(__dirname, '../../images/L02', f)) || pendingImgs.includes(f);

test('第 2 課字詞資料格式正確', () => { assert.deepEqual(validateWords(W), []); });
test('第 2 課生字：18 個，每個都有生字語詞和拆一拆', () => {
  assert.equal(W.hanzi.map(h => h.char).join(''), '老師新希望卻始緊因為知道怎消失習最掛');
  assert.equal(W.charwords.map(c => c.char).join(''), W.hanzi.map(h => h.char).join(''));
  W.hanzi.forEach(h => assert.ok(h.parts.length && h.story && h.sentence.includes(h.char), h.id));
});
test('第 2 課二年級：沒有成語、修辭', () => { assert.equal(W.idioms, undefined); assert.equal(W.rhetoric, undefined); });
test('第 2 課生字挖空、線索不說答案', () => {
  for (const h of W.hanzi) { assert.ok(h.words.includes(h.cloze.replace('＿', h.char)), h.id); assert.ok(!h.clue.includes(h.char), h.id); }
  for (const s of W.similar) assert.ok(!s.clue.includes(s.answer), s.id);
  for (const v of W.vocab) assert.ok(!v.example.includes(v.word), v.id);
});
test('第 2 課圖片都在 images/L02，或列在待生成清單', () => {
  const p = W.phrase || { pick: [], say: [], words: [] }, p2 = p.phrase2 || {};
  const imgs = [...W.hanzi.map(h => h.img), ...W.vocab.map(v => v.img), ...W.charwords.map(c => c.img),
    ...W.listen.flatMap(l => l.options.map(o => o.img)), p.intro && p.intro.img, ...p.pick.map(x => x.img), ...p.say.map(x => x.img), ...p.words.map(x => x.img),
    p2.intro && p2.intro.img, ...(p2.pick || []).map(x => x.img), ...(p2.fill || []).map(x => x.img),
    ...(W.pattern || []).flatMap(pt => [pt.img, ...pt.match.map(x => x.img), ...pt.conj.map(x => x.img)])];
  for (const f of imgs.filter(Boolean)) assert.ok(imgOk(f), f);
});
test('第 2 課公開資料裡沒有課文原句和教學資料的例句', () => {
  const all = JSON.stringify(W);
  ['老師給我們小雲朵卡片', '要大家寫上開學新希望', '我想了好久', '卻想不出要寫什麼', '看大家都開始寫了', '我心裡好緊張', '因為我是轉學生', '和同學還不熟', '不知道可以問誰', '怎麼辦才好呢', '班長跑來跟我說', '同學們也過來跟我說話', '緊張的心情消失了', '我要跟同學一起快樂學習', '把大家的卡片掛在教室的後面', '一朵朵彩色的雲', '好像在天空跳舞', '快樂得跳起舞來', '高興得唱起歌來', '難過得流下淚來', '剛開始學游泳', '只能在淺水區', '因為外面正在下雨', '我努力練習踢球', '最後成功進球', '小狗跑了好久', '爸爸想叫計程車', '我想早點睡覺，卻', '突然下起了大雨，我們沒帶傘', '數學題的答案', '今天在公園認識', '看起來很害羞', '做事情很細心', '大家的心情都很緊張', '大家開始做暖身操', '有得獎的希望', '裝潢看起來很新', '鋼琴老師', '把我們的獎狀掛在牆上', '決定去山上露營', '學會換氣', '一下子就消失在我眼前', '跟著音樂一起跳舞'].forEach(t => assert.ok(!all.includes(t), t));
});
test('第 2 課課文原稿（有的話）格式正確、依據句找得到', { skip: !fs.existsSync(path.join(__dirname, '../../content/lesson02.plain.json')) }, () => {
  const l = JSON.parse(fs.readFileSync(path.join(__dirname, '../../content/lesson02.plain.json'), 'utf8'));
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
test('第 2 課短語的提示不和答案有一樣的字', () => {
  W.phrase.pick.concat((W.phrase.phrase2 || {}).pick || []).forEach(x => assert.ok(![...x.options[0]].some(c => x.clue.includes(c)), x.id + ' ' + x.clue));
});
test('第 2 課句型：……卻……', () => {
  assert.deepEqual(W.pattern.map(pt => pt.key), ['que']);
  const S = require('../../assets/core/speechcheck.js');
  for (const pt of W.pattern) for (const t of pt.examples.concat(pt.conj.map(c => c.full))) assert.equal(S.check({ kind: 'pattern', key: pt.key }, t).status, 'pending', t);
  for (const pt of W.pattern) for (const c of pt.conj) assert.equal(c.sentence.split('＿').join('').length + S.PATTERNS[pt.key].join('').length, c.full.length, c.id);
  /* 正確的接句不能明顯比別的選項長 */
  for (const pt of W.pattern) for (const m of pt.match) assert.ok(m.options[0].length <= Math.max(...m.options.slice(1).map(o => o.length)) + 2, m.id);
});
