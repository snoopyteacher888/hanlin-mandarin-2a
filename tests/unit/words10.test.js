const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs'); const path = require('node:path');
const { validateWords } = require('../../assets/core/wordsschema.js');
const { validateLesson } = require('../../assets/core/lessonschema.js');
const { locate } = require('../../assets/core/locate.js');
const W = require('../../data/lesson10.words.js');

const pendingImgs = (() => {
  const md = fs.readFileSync(path.join(__dirname, '../../docs/image-list.md'), 'utf8');
  return md.split(/\n## /).filter(sec => sec.split('\n')[0].includes('待生成'))
    .flatMap(sec => [...sec.matchAll(/`([a-z0-9-]+\.png)`/g)].map(m => m[1]));
})();
const imgOk = f => fs.existsSync(path.join(__dirname, '../../images/L10', f)) || pendingImgs.includes(f);

test('第 10 課字詞資料格式正確', () => { assert.deepEqual(validateWords(W), []); });
test('第 10 課生字：18 個，每個都有生字語詞和拆一拆', () => {
  assert.equal(W.hanzi.map(h => h.char).join(''), '減表讀認識謎答搖百嘴哥數題趕突異口對');
  assert.equal(W.charwords.map(c => c.char).join(''), W.hanzi.map(h => h.char).join(''));
  W.hanzi.forEach(h => assert.ok(h.parts.length && h.story && h.sentence.includes(h.char), h.id));
});
test('第 10 課二年級：沒有成語、修辭', () => { assert.equal(W.idioms, undefined); assert.equal(W.rhetoric, undefined); });
test('第 10 課生字挖空、線索不說答案', () => {
  for (const h of W.hanzi) { assert.ok(h.words.includes(h.cloze.replace('＿', h.char)), h.id); assert.ok(!h.clue.includes(h.char), h.id); }
  for (const s of W.similar) assert.ok(!s.clue.includes(s.answer), s.id);
  for (const v of W.vocab) assert.ok(!v.example.includes(v.word), v.id);
});
test('第 10 課圖片都在 images/L10，或列在待生成清單', () => {
  const p = W.phrase || { pick: [], say: [], words: [] }, p2 = p.phrase2 || {};
  const imgs = [...W.hanzi.map(h => h.img), ...W.vocab.map(v => v.img), ...W.charwords.map(c => c.img),
    ...W.listen.flatMap(l => l.options.map(o => o.img)), p.intro && p.intro.img, ...p.pick.map(x => x.img), ...p.say.map(x => x.img), ...p.words.map(x => x.img),
    p2.intro && p2.intro.img, ...(p2.pick || []).map(x => x.img), ...(p2.fill || []).map(x => x.img),
    ...(W.pattern || []).flatMap(pt => [pt.img, ...pt.match.map(x => x.img), ...pt.conj.map(x => x.img)])];
  for (const f of imgs.filter(Boolean)) assert.ok(imgOk(f), f);
});
test('第 10 課公開資料裡沒有課文原句和教學資料的例句', () => {
  const all = JSON.stringify(W);
  ['今天表弟到家裡來', '他說上學讀書真好玩', '要不要來玩猜字謎', '表弟點頭說好', '一加一，是什麼字', '我知道，是二', '我得意的搖搖頭', '一減一，是什麼字', '表弟抓抓頭', '那一百減一', '他想也不想', '嘟著嘴說', '你說要玩猜字謎', '可是都問數學題', '姐姐趕緊寫下', '表弟搶著回答', '一百減一當然是白了', '我和姐姐異口同聲', '表弟高興得笑了', '聽也不聽', '找也不找', '不愛運動的姐姐突然說要參加馬拉松', '溫度突然下降', '好多人都感冒了', '我和妹妹聽到爺爺說要去公園', '異口同聲的請求舞臺上的歌手', '再來一首安可曲', '他說要認真複習功課', '可是都在玩玩具', '哥哥說好一起做家事', '一張桌子都沒擦完', '小弟弟喜歡嘟著嘴裝可愛', '用一百元買了一本二手故事書', '搖搖頭，擺擺手', '這個問題我沒辦法回答你', '元宵節晚上，爺爺都會讓我們猜字謎', '他靠自己學習', '認識很多難字', '找哥哥一起到圖書館讀書', '表弟是我的好玩伴', '老師今天教減法', '證明我的答案才是對的', '希望這節課可以去操場運動', '班長在午休時突然大叫一聲', '我趕緊躲到桌子底下', '這道選擇題', '我很喜歡數學課', '我的表哥是下棋高手'].forEach(t => assert.ok(!all.includes(t), t));
});
test('第 10 課課文原稿（有的話）格式正確、依據句找得到', { skip: !fs.existsSync(path.join(__dirname, '../../content/lesson10.plain.json')) }, () => {
  const l = JSON.parse(fs.readFileSync(path.join(__dirname, '../../content/lesson10.plain.json'), 'utf8'));
  assert.deepEqual(validateLesson(l), []);
  assert.equal(l.paragraphs.length, 3);
  l.quiz.concat(l.testExtra, [l.storyMap.tail]).filter(q => !q.hints).forEach(q => assert.ok(locate(l, q.evidence).sentIds.length, q.id));
  l.storyMap.bones.forEach(b => assert.ok(locate(l, b.evidence).sentIds.length, b.id));
  /* 正確答案不能明顯比錯的選項長 */
  l.quiz.concat(l.testExtra).forEach(q => assert.ok(q.options[q.answer].text.length <= Math.max(...q.options.filter((o, i) => i !== q.answer).map(o => o.text.length)) + 4, q.id));
  const imgs = [l.storyMap.head.img, ...l.storyMap.bones.flatMap(b => b.cards.map(c => c.img)), ...l.storyMap.decoys.map(c => c.img),
    ...l.vocab.map(v => v.img), ...l.quiz.concat(l.testExtra).flatMap(q => q.options.map(o => o.img))];
  for (const f of imgs.filter(Boolean)) assert.ok(imgOk(f), f);
});
test('第 10 課短語的提示不和答案有一樣的字', () => {
  W.phrase.pick.concat((W.phrase.phrase2 || {}).pick || []).forEach(x => assert.ok(![...x.options[0]].some(c => x.clue.includes(c)), x.id + ' ' + x.clue));
});
test('第 10 課句型：……可是……', () => {
  assert.deepEqual(W.pattern.map(pt => pt.key), ['keshi']);
  const S = require('../../assets/core/speechcheck.js');
  for (const pt of W.pattern) for (const t of pt.examples.concat(pt.conj.map(c => c.full))) assert.equal(S.check({ kind: 'pattern', key: pt.key }, t).status, 'pending', t);
  for (const pt of W.pattern) for (const c of pt.conj) assert.equal(c.sentence.split('＿').join('').length + S.PATTERNS[pt.key].join('').length, c.full.length, c.id);
  /* 正確的接句不能明顯比別的選項長 */
  for (const pt of W.pattern) for (const m of pt.match) assert.ok(m.options[0].length <= Math.max(...m.options.slice(1).map(o => o.length)) + 2, m.id);
});
