/* 第 6 課字詞練習（公開、不加密）。句子和解釋都是 Claude 自己寫的，沒有課本原文。
   生字、語詞：options 的第一個是正確答案（作答時會打亂）。二年級：不放成語、修辭。這一課課本沒有句型。 */
(function (root) {
  var d = {
    wh: [
      { id: 'wh-ren', key: '人', options: ['我、妹妹、爸爸和全家人', '我和老師同學', '我一個人', '我和鄰居小明'], paras: [2, 4], why: '「我」和全家人一起去散步，還有爸爸和妹妹。' },
      { id: 'wh-shi', key: '事', options: ['晚上散步，看到草叢裡會發光的「星星」', '去河邊釣魚、抓蝦', '在奶奶家包水餃', '坐在家裡看電視'], paras: [2, 3], why: '全家人吃過晚飯去散步，在草叢裡看到一閃一閃的「星星」。' },
      { id: 'wh-time', key: '時', options: ['星期五放學後，吃過晚飯的晚上', '星期天的早上', '中午吃午餐的時候', '下大雨的下午'], paras: [1, 2], why: '日記寫的是星期五，放學後到奶奶家，吃過晚飯才去散步。' },
      { id: 'wh-di', key: '地', options: ['奶奶家屋後的竹林和小溪邊', '學校的操場', '熱鬧的夜市', '海邊的沙灘'], paras: [2], why: '他們穿過奶奶家屋後的竹林，走到竹林盡頭的小溪邊。' },
      { id: 'wh-wu', key: '物', options: ['會一閃一閃發光的螢火蟲', '天上真正的星星', '路邊的路燈', '手裡的手電筒'], paras: [3], why: '草叢裡一閃一閃的「星星」，其實是會發光的螢火蟲。' }
    ],
    quizLevels: { qa: 'infer', qb: 'extract', qc: 'extract', qd: 'extract', qe: 'infer', qf: 'extract', qg: 'interpret', qh: 'evaluate', k1: 'evaluate', k2: 'evaluate' },
    quizHelp: {
      qg: { think: ['日記最上面那一行，寫了哪些東西？', '寫日記的時候，除了發生的事，還要先寫清楚什麼時候、天氣怎麼樣嗎？'],
        why: '這一課是一篇日記，最上面先寫日期、星期和天氣，再把那一天特別的事情寫下來。' },
      qh: { think: ['妹妹看到「新朋友」的時候，她做了什麼？', '第四課的小青蛙希望小男孩怎麼做，牠才會靠近？'],
        why: '妹妹一動也不動，小星星才停在她頭上；第四課的小青蛙也希望小男孩乖乖不動。兩課都說：安安靜靜不亂動，小動物才願意靠近我們。' }
    },
    talkChoices: {
      k1: { good: ['我會小聲的說話，慢慢的走，不要嚇到牠們。', '我會站著不動，靜靜的看牠們發光。'], bad: ['我會拿手電筒一直照牠們。', '我會把牠們抓起來，裝進瓶子帶回家。'],
        why: '螢火蟲怕吵、怕強光，要安靜、慢慢走，不要抓。用手電筒照、抓回家，都會傷害牠們。' },
      k2: { good: ['我會先寫日期、星期和天氣，再寫今天去動物園的事。', '我會寫今天和爸爸去騎腳踏車，好開心。'], bad: ['我會寫明年想去哪裡玩。', '我會把整本故事書抄一遍。'],
        why: '日記是記下「今天」發生的事，最好先寫日期、星期和天氣。明年的事還沒發生；抄故事書不是自己的日記。' }
    },
    hanzi: [
      { id: 'h-月', combo: { type: '象形字', pict: '「月」像一個彎彎的月亮。' }, char: '月', zhuyin: 'ㄩㄝˋ', radical: '月', strokes: 4, words: ['月亮', '一月', '月光'], say: '月，月亮的月', cloze: '＿亮', img: 'moon.png', options: ['月', '日', '目', '用'], clue: '這個字像一個彎彎的、晚上才出來的東西。', explain: '答案是「月」；「日」是太陽，「目」是眼睛。', parts: ['月'], story: '「月」像一個彎彎的月亮。晚上天上發光的，就是「月亮」。', sentence: '今晚的月亮好圓。' },
      { id: 'h-奶', combo: { layout: 'lr', parts: [['女', 'm', '女生'], ['乃', 's', '']] }, char: '奶', zhuyin: 'ㄋㄞˇ', radical: '女', strokes: 5, words: ['奶奶', '牛奶'], say: '奶，牛奶的奶', cloze: '牛＿', img: 'milk.png', options: ['奶', '扔', '仍', '好'], clue: '這個字的左邊是女字旁，右邊是「乃」。', explain: '答案是「奶」，左邊是女；「扔」左邊是提手旁，「仍」左邊是單人旁。', parts: ['女', '乃'], story: '左邊是「女」，右邊的「乃」念起來像「奶」。媽媽餵寶寶喝的，就是「奶」。爸爸的媽媽叫「奶奶」。', sentence: '我每天早上喝一杯牛奶。', build: { layout: 'lr', show: ['？', '乃'], answer: '女', options: ['女', '扌', '亻', '口'], clue: '想一想：媽媽、姐姐的左邊都是哪一個部首？' } },
      { id: 'h-晚', combo: { layout: 'lr', parts: [['日', 'm', '太陽'], ['免', 's', '']] }, char: '晚', zhuyin: 'ㄨㄢˇ', radical: '日', strokes: 11, words: ['晚上', '晚飯', '傍晚'], say: '晚，晚上的晚', cloze: '＿上', img: 'night-house.png', options: ['晚', '免', '挽', '勉'], clue: '這個字的左邊是日，右邊是「免」。', explain: '答案是「晚」，左邊是日；「免」少了左邊，「挽」左邊是提手旁。', parts: ['日', '免'], story: '左邊的「日」是太陽，右邊的「免」念起來像「晚」。太陽下山以後，就是「晚上」。', sentence: '晚上我和爸爸一起看星星。', build: { layout: 'lr', show: ['？', '免'], answer: '日', options: ['日', '扌', '月', '目'], clue: '想一想：和時間、太陽有關，左邊是什麼？' } },
      { id: 'h-飯', combo: { layout: 'lr', parts: [['食', 'm', '吃的東西'], ['反', 's', '']] }, char: '飯', zhuyin: 'ㄈㄢˋ', radical: '食', strokes: 12, words: ['晚飯', '吃飯', '炒飯'], say: '飯，吃飯的飯', cloze: '吃＿', img: 'eat-rice.png', options: ['飯', '飲', '版', '販'], clue: '這個字的左邊是食物的「食」，右邊是「反」。', explain: '答案是「飯」，左邊是食；「版」左邊是片，「販」左邊是貝。', parts: ['食', '反'], story: '左邊的「食」是吃的東西，右邊的「反」念起來像「飯」。白白的、一碗一碗的米飯，就是「飯」。', sentence: '媽媽叫我們回家吃飯。', build: { layout: 'lr', show: ['？', '反'], answer: '食', options: ['食', '貝', '片', '木'], clue: '想一想：飯是吃的東西，左邊是哪一個部首？' } },
      { id: 'h-散', combo: { type: '會意字', pict: '右邊的「攵」像手拿著東西；左邊像散開的麻。' }, char: '散', zhuyin: 'ㄙㄢˋ', radical: '攴', strokes: 12, words: ['散步', '散開'], say: '散，散步的散', cloze: '＿步', img: 'walk-park.png', options: ['散', '撒', '敬', '教'], clue: '這個字的右邊是反文，左邊上面像「廿」，下面是「月」。', explain: '答案是「散」；「撒」左邊多了提手旁，「敬」左邊是苟。', parts: ['𢻎', '攵'], story: '右邊的「攵」像手拿著東西，把東西打散。輕輕鬆鬆、慢慢的走，叫做「散步」。', sentence: '吃完晚飯，我們去公園散步。' },
      { id: 'h-屋', combo: { type: '會意字', pict: '上面的「尸」像屋頂，下面的「至」表示人到了這裡就停下來。' }, char: '屋', zhuyin: 'ㄨ', radical: '尸', strokes: 9, words: ['屋子', '屋頂', '房屋'], say: '屋，屋子的屋', cloze: '房＿', img: 'house.png', options: ['屋', '握', '室', '局'], clue: '這個字的上面是「尸」，下面是「至」。', explain: '答案是「屋」，上面是尸；「握」左邊多了提手旁，「室」上面是寶蓋頭。', parts: ['尸', '至'], story: '上面的「尸」像屋頂，下面的「至」表示走到這裡。人回到有屋頂的地方住下來，就是「屋」。', sentence: '奶奶的屋子後面有一片竹林。' },
      { id: 'h-竹', combo: { type: '象形字', pict: '「竹」像兩根竹子，上面垂著竹葉。' }, char: '竹', zhuyin: 'ㄓㄨˊ', radical: '竹', strokes: 6, words: ['竹林', '竹子', '竹筍'], say: '竹，竹筍的竹', cloze: '＿筍', img: 'bamboo-shoot.png', options: ['竹', '行', '作', '什'], clue: '這個字像兩根並排的竿子，上面垂著葉子。', explain: '答案是「竹」；「行」是行走的行，「什」是什麼的什。', parts: ['竹'], story: '「竹」像兩根竹子並排站著，上面垂著竹葉。竹子剛長出來的嫩芽叫「竹筍」。', sentence: '春天，竹林裡長出好多竹筍。' },
      { id: 'h-林', combo: { layout: 'lr', type: '會意字', parts: [['木', 'm', '樹'], ['木', 'm', '樹']] }, char: '林', zhuyin: 'ㄌㄧㄣˊ', radical: '木', strokes: 8, words: ['竹林', '樹林', '森林'], say: '林，樹林的林', cloze: '森＿', img: 'forest.png', options: ['林', '森', '材', '休'], clue: '這個字是兩個「木」並排。', explain: '答案是「林」，兩個木；「森」是三個木，「材」右邊是才。', parts: ['木', '木'], story: '兩個「木」並排在一起，表示很多樹。很多樹長在一起，就是「樹林」。', sentence: '森林裡住著好多小動物。', build: { layout: 'lr', show: ['木', '？'], answer: '木', options: ['木', '才', '本', '禾'], clue: '想一想：很多樹長在一起，右邊和左邊一樣嗎？' } },
      { id: 'h-頭', combo: { layout: 'lr', parts: [['豆', 's', ''], ['頁', 'm', '頭']] }, char: '頭', zhuyin: 'ㄊㄡˊ', radical: '頁', strokes: 16, words: ['盡頭', '石頭', '頭髮'], say: '頭，石頭的頭', cloze: '石＿', img: 'stones.png', options: ['頭', '頂', '豆', '題'], clue: '這個字的左邊是「豆」，右邊是「頁」。', explain: '答案是「頭」，左邊是豆；「頂」左邊是丁，「題」左邊是是。', parts: ['豆', '頁'], story: '左邊的「豆」念起來像「頭」，右邊的「頁」表示人的頭。身體最上面、長頭髮的地方，就是「頭」。', sentence: '我在河邊撿到一顆圓圓的石頭。', build: { layout: 'lr', show: ['豆', '？'], answer: '頁', options: ['頁', '見', '貝', '寸'], clue: '想一想：右邊是表示人的腦袋的部首。' } },
      { id: 'h-溪', combo: { layout: 'lr', parts: [['氵', 'm', '水'], ['奚', 's', '']] }, char: '溪', zhuyin: 'ㄒㄧ', radical: '水', strokes: 13, words: ['小溪', '溪水'], say: '溪，溪水的溪', cloze: '＿水', img: 'stream.png', options: ['溪', '雞', '係', '漢'], clue: '這個字的左邊是三點水，右邊是「奚」。', explain: '答案是「溪」，左邊是三點水；「雞」右邊是隹，「漢」右邊不一樣。', parts: ['氵', '奚'], story: '左邊是水，右邊的「奚」念起來像「溪」。山裡流下來、小小的河，就是「小溪」。', sentence: '清清的溪水嘩啦嘩啦的流。', build: { layout: 'lr', show: ['？', '奚'], answer: '氵', options: ['氵', '亻', '扌', '口'], clue: '想一想：小溪裡流的是什麼？' } },
      { id: 'h-旁', combo: { type: '形聲字', pict: '下面是「方」，表示方向；上面像兩邊張開的手。' }, char: '旁', zhuyin: 'ㄆㄤˊ', radical: '方', strokes: 10, words: ['旁邊', '兩旁'], say: '旁，旁邊的旁', cloze: '兩＿', img: 'road-trees.png', options: ['旁', '螃', '傍', '房'], clue: '這個字的下面是方向的「方」，左右都沒有部首。', explain: '答案是「旁」；「螃」左邊多了虫，「傍」左邊多了單人旁。', parts: ['亠', '丷', '冖', '方'], story: '下面的「方」表示方向，上面像向兩邊張開。在東西的左右兩邊，就是「旁」。', sentence: '馬路兩旁種滿了大樹。' },
      { id: 'h-暗', combo: { layout: 'lr', parts: [['日', 'm', '太陽'], ['音', 's', '']] }, char: '暗', zhuyin: 'ㄢˋ', radical: '日', strokes: 13, words: ['黑暗', '暗暗的'], say: '暗，黑暗的暗', cloze: '黑＿', img: 'dark-room.png', options: ['暗', '音', '晴', '意'], clue: '這個字的左邊是日，右邊是聲音的「音」。', explain: '答案是「暗」，左邊是日；「音」少了左邊，「晴」右邊是青。', parts: ['日', '音'], story: '左邊是太陽，右邊的「音」念起來像「暗」。太陽不見了，看不清楚，就是「暗」。', sentence: '關燈以後，房間一片黑暗。', build: { layout: 'lr', show: ['？', '音'], answer: '日', options: ['日', '目', '月', '口'], clue: '想一想：天亮不亮，和天上的什麼有關？' } },
      { id: 'h-眼', combo: { layout: 'lr', parts: [['目', 'm', '眼睛'], ['艮', 's', '']] }, char: '眼', zhuyin: 'ㄧㄢˇ', radical: '目', strokes: 11, words: ['眼睛', '眼淚', '眼鏡'], say: '眼，眼淚的眼', cloze: '＿淚', img: 'tears.png', options: ['眼', '很', '根', '跟'], clue: '這個字的左邊是目，右邊是「艮」。', explain: '答案是「眼」，左邊是目；「很」左邊是雙人旁，「根」左邊是木。', parts: ['目', '艮'], story: '左邊的「目」就是眼睛，右邊的「艮」念起來像「眼」。用來看東西的，就是「眼睛」。', sentence: '妹妹哭了，眼淚一直掉。', build: { layout: 'lr', show: ['？', '艮'], answer: '目', options: ['目', '木', '足', '彳'], clue: '想一想：看東西用的，左邊是什麼？' } },
      { id: 'h-睛', combo: { layout: 'lr', parts: [['目', 'm', '眼睛'], ['青', 's', '']] }, char: '睛', zhuyin: 'ㄐㄧㄥ', radical: '目', strokes: 13, words: ['眼睛'], say: '睛，眼睛的睛', cloze: '眼＿', img: 'big-eyes.png', options: ['睛', '晴', '請', '清'], clue: '這個字的左邊是目，右邊是「青」。', explain: '答案是「睛」，左邊是目；「晴」左邊是日，是晴天的晴。', parts: ['目', '青'], story: '左邊的「目」是眼睛，右邊的「青」念起來像「睛」。眼睛裡黑黑亮亮的地方，就是「睛」。', sentence: '小貓的眼睛又大又圓。', build: { layout: 'lr', show: ['？', '青'], answer: '目', options: ['目', '日', '言', '氵'], clue: '想一想：和看東西有關，左邊是什麼？' } },
      { id: 'h-那', combo: { type: '形聲字', pict: '右邊是「阝」（耳朵旁），左邊念起來像「那」。' }, char: '那', zhuyin: 'ㄋㄚˋ', radical: '邑', strokes: 7, words: ['那邊', '那裡', '那個'], say: '那，那裡的那', cloze: '＿裡', img: 'point-there.png', options: ['那', '哪', '娜', '挪'], clue: '這個字左邊沒有口，右邊是耳朵旁。', explain: '答案是「那」；「哪」左邊多了口，是問問題的哪。', parts: ['冄', '阝'], story: '右邊是耳朵旁。用手指著遠遠的地方說，就是「那」。', sentence: '你看，小狗在那裡！' },
      { id: 'h-聚', combo: { layout: 'tb', parts: [['取', 's', ''], ['乑', 'm', '很多人']] }, char: '聚', zhuyin: 'ㄐㄩˋ', radical: '耳', strokes: 14, words: ['聚集', '聚會', '聚成'], say: '聚，聚會的聚', cloze: '＿會', img: 'party-friends.png', options: ['聚', '取', '娶', '最'], clue: '這個字上面是「取」，下面像三個人站在一起。', explain: '答案是「聚」，下面像三個人；「取」少了下面，「最」上面是曰。', parts: ['取', '乑'], story: '上面的「取」念起來像「聚」，下面像三個人站在一起。很多人走到同一個地方，就是「聚」。', sentence: '過年的時候，全家人聚在一起吃飯。' },
      { id: 'h-成', combo: { type: '形聲字', pict: '右邊像一把古代的武器「戈」。' }, char: '成', zhuyin: 'ㄔㄥˊ', radical: '戈', strokes: 7, words: ['變成', '成功', '完成'], say: '成，成功的成', cloze: '＿功', img: 'success.png', options: ['成', '城', '誠', '式'], clue: '這個字右邊像古代的武器「戈」，左邊沒有部首。', explain: '答案是「成」；「城」左邊多了土，「誠」左邊多了言。', parts: ['成'], story: '「成」的右邊像一把古代的武器。把事情做好、做完，就是「成功」。', sentence: '我終於成功學會騎腳踏車。' },
      { id: 'h-顆', combo: { layout: 'lr', parts: [['果', 's', ''], ['頁', 'm', '頭']] }, char: '顆', zhuyin: 'ㄎㄜ', radical: '頁', strokes: 17, words: ['一顆', '顆粒'], say: '顆，一顆的顆', cloze: '一＿', img: 'one-apple.png', options: ['顆', '課', '棵', '果'], clue: '這個字的左邊是「果」，右邊是「頁」。', explain: '答案是「顆」，左邊是果；「棵」是一棵樹的棵，左邊是木。', parts: ['果', '頁'], story: '左邊的「果」念起來像「顆」，右邊的「頁」表示頭。圓圓小小的東西，像一顆糖、一顆星星，都用「顆」來數。', sentence: '我吃了一顆蘋果。', build: { layout: 'lr', show: ['果', '？'], answer: '頁', options: ['頁', '見', '木', '言'], clue: '想一想：右邊是表示人的腦袋的部首。' } }
    ],
    vocab: [
      { id: 'v-晚飯', word: '晚飯', meaning: '晚上吃的那一頓飯。', example: '媽媽煮了一桌豐盛的＿＿。', img: 'dinner.png', options: ['晚飯', '竹林', '小溪', '草叢'] },
      { id: 'v-散步', word: '散步', meaning: '輕輕鬆鬆、慢慢的走路。', example: '爺爺每天早上去公園＿＿。', img: 'walk-park.png', options: ['散步', '聚集', '發光', '盡頭'] },
      { id: 'v-竹林', word: '竹林', meaning: '很多竹子長在一起的地方。', example: '風吹過＿＿，葉子沙沙響。', img: 'bamboo.png', options: ['竹林', '小溪', '草叢', '晚飯'] },
      { id: 'v-盡頭', word: '盡頭', meaning: '最後面、到底的地方。', example: '走到這條路的＿＿，就是學校。', img: 'road-end.png', options: ['盡頭', '竹林', '草叢', '晚飯'] },
      { id: 'v-小溪', word: '小溪', meaning: '小小的河，水流得很清。', example: '我們在＿＿邊抓小魚。', img: 'stream.png', options: ['小溪', '竹林', '盡頭', '晚飯'] },
      { id: 'v-天色', word: '天色', meaning: '天空看起來的樣子，像亮不亮、晴不晴。', example: '＿＿暗了，我們快回家吧。', img: 'dusk-sky.png', options: ['天色', '草叢', '小溪', '竹林'] },
      { id: 'v-暗', word: '暗', meaning: '光很少，看不清楚。', example: '房間好＿，請開燈。', img: 'dark-room.png', options: ['暗', '聚', '亮', '躲'] },
      { id: 'v-草叢', word: '草叢', meaning: '很多草長在一起的地方。', example: '小貓躲在＿＿裡。', img: 'grass-cat.png', options: ['草叢', '竹林', '小溪', '盡頭'] },
      { id: 'v-一下子', word: '一下子', meaning: '很短的時間。', example: '小鳥＿＿＿就飛走了。', img: 'bird-fly.png', options: ['一下子', '一動也', '不知道', '好得意'] },
      { id: 'v-聚', word: '聚', meaning: '很多人或東西集合在一起。', example: '好多小魚＿在一起游。', img: 'fish-school.png', options: ['聚', '躲', '暗', '散'] },
      { id: 'v-發光', word: '發光', meaning: '發出亮亮的光。', example: '螢火蟲的尾巴會＿＿。', img: 'firefly.png', options: ['發光', '散步', '聚集', '盡頭'] },
      { id: 'v-忽然', word: '忽然', meaning: '很快、沒有想到的時候。', example: '天空＿＿下起大雨。', img: 'sudden-rain.png', options: ['忽然', '散步', '盡頭', '天色'] },
      { id: 'v-一動也不動', word: '一動也不動', meaning: '完全不動，靜靜的。', example: '小狗＿＿＿＿＿的趴著睡覺。', img: 'still-girl.png', options: ['一動也不動', '一下子這邊', '不知不覺中', '大大小小的'] },
      { id: 'v-得意', word: '得意', meaning: '覺得自己很厲害，很高興的樣子。', example: '弟弟拿到獎狀，好＿＿。', img: 'proud-kid.png', options: ['得意', '暗', '聚', '散步'] }
    ],
    charwords: [
      { id: 'cw-月', char: '月', img: 'moon.png', word: '月光', charMeaning: '晚上天上會發光的月亮。', meaning: '月亮照下來的光。', example: '＿＿照在窗戶上，好亮。', options: ['月光', '牛奶', '石頭', '那裡'] },
      { id: 'cw-奶', char: '奶', img: 'milk.png', word: '牛奶', charMeaning: '餵寶寶喝的白色液體。', meaning: '從乳牛身上擠出來的白色飲料。', example: '早餐我喝了一杯＿＿。', options: ['牛奶', '月光', '竹筍', '眼淚'] },
      { id: 'cw-晚', char: '晚', img: 'night-house.png', word: '晚上', charMeaning: '太陽下山以後。', meaning: '天黑以後到睡覺前的時間。', example: '＿＿天空有好多星星。', options: ['晚上', '石頭', '聚會', '成功'] },
      { id: 'cw-飯', char: '飯', img: 'fried-rice.png', word: '炒飯', charMeaning: '米煮熟的食物。', meaning: '把飯和蛋、青菜一起炒的食物。', example: '爸爸做的＿＿好香。', options: ['炒飯', '牛奶', '竹筍', '月光'] },
      { id: 'cw-散', char: '散', img: 'birds-scatter.png', word: '散開', charMeaning: '分開，不在一起。', meaning: '本來在一起，分到不同地方去。', example: '鴿子一聽到聲音，全都＿＿了。', options: ['散開', '聚會', '成功', '那裡'] },
      { id: 'cw-屋', char: '屋', img: 'house.png', word: '房屋', charMeaning: '有屋頂、可以住的地方。', meaning: '給人住的房子。', example: '山腳下有好幾間＿＿。', options: ['房屋', '石頭', '眼淚', '月光'] },
      { id: 'cw-竹', char: '竹', img: 'bamboo-shoot.png', word: '竹筍', charMeaning: '一節一節、中間空空的植物。', meaning: '竹子剛長出來的嫩芽，可以吃。', example: '媽媽煮了一鍋＿＿湯。', options: ['竹筍', '炒飯', '牛奶', '石頭'] },
      { id: 'cw-林', char: '林', img: 'forest.png', word: '森林', charMeaning: '很多樹長在一起。', meaning: '很多很多大樹長在一起的地方。', example: '＿＿裡住著猴子和松鼠。', options: ['森林', '房屋', '溪水', '聚會'] },
      { id: 'cw-頭', char: '頭', img: 'stones.png', word: '石頭', charMeaning: '身體最上面的地方；也指東西的一端。', meaning: '硬硬的、一塊一塊的石塊。', example: '河邊有好多圓圓的＿＿。', options: ['石頭', '森林', '炒飯', '牛奶'] },
      { id: 'cw-溪', char: '溪', img: 'stream.png', word: '溪水', charMeaning: '小小的河。', meaning: '小溪裡流的水。', example: '＿＿清清的，看得到小魚。', options: ['溪水', '月光', '森林', '房屋'] },
      { id: 'cw-旁', char: '旁', img: 'road-trees.png', word: '旁邊', charMeaning: '左右兩邊。', meaning: '很靠近的地方。', example: '我的鉛筆盒在書包＿＿。', options: ['旁邊', '那裡', '聚會', '黑暗'] },
      { id: 'cw-暗', char: '暗', img: 'dark-room.png', word: '黑暗', charMeaning: '光很少。', meaning: '沒有光，什麼都看不清楚。', example: '停電了，屋子裡一片＿＿。', options: ['黑暗', '月光', '旁邊', '成功'] },
      { id: 'cw-眼', char: '眼', img: 'tears.png', word: '眼淚', charMeaning: '眼睛。', meaning: '從眼睛流出來的水。', example: '看完感人的故事，我流下了＿＿。', options: ['眼淚', '牛奶', '溪水', '炒飯'] },
      { id: 'cw-睛', char: '睛', img: 'big-eyes.png', word: '眼睛', charMeaning: '眼珠。', meaning: '用來看東西的器官。', example: '貓頭鷹的＿＿又大又圓。', options: ['眼睛', '石頭', '森林', '房屋'] },
      { id: 'cw-那', char: '那', img: 'point-there.png', word: '那裡', charMeaning: '指比較遠的地方或東西。', meaning: '遠一點的地方。', example: '我的書包放在＿＿。', options: ['那裡', '旁邊', '黑暗', '晚上'] },
      { id: 'cw-聚', char: '聚', img: 'party-friends.png', word: '聚會', charMeaning: '很多人集合在一起。', meaning: '大家約好一起見面、一起玩。', example: '週末我們有一個同學＿＿。', options: ['聚會', '散開', '成功', '黑暗'] },
      { id: 'cw-成', char: '成', img: 'success.png', word: '成功', charMeaning: '做好了、完成了。', meaning: '把想做的事做到了。', example: '練習了好多次，我終於＿＿了。', options: ['成功', '散開', '聚會', '黑暗'] },
      { id: 'cw-顆', char: '顆', img: 'grain.png', word: '顆粒', charMeaning: '數圓圓小小的東西用的字。', meaning: '一粒一粒小小的東西。', example: '米是一粒一粒的小＿＿。', options: ['顆粒', '石頭', '眼淚', '牛奶'] }
    ],
    fix: [
      { id: 'fx-奶', char: '奶', wrong: '仍', sentence: '我每天睡前喝一杯牛奶。', options: ['奶', '仍', '扔'], clue: '白色的飲料，左邊是女字旁。', explain: '要改成「奶」。牛奶的奶左邊是女；「仍」左邊是單人旁。' },
      { id: 'fx-晚', char: '晚', wrong: '免', sentence: '晚上我們一起看星星。', options: ['晚', '免', '挽'], clue: '天黑以後的時間，左邊要有太陽。', explain: '要改成「晚」。晚上的晚左邊是日；「免」少了左邊。' },
      { id: 'fx-飯', char: '飯', wrong: '版', sentence: '肚子好餓，快來吃飯吧！', options: ['飯', '版', '販'], clue: '一碗一碗吃的米，左邊是食字旁。', explain: '要改成「飯」。吃飯的飯左邊是食；「版」左邊是片。' },
      { id: 'fx-屋', char: '屋', wrong: '握', sentence: '小貓爬到屋頂上睡覺。', options: ['屋', '握', '室'], clue: '房子最上面，這個字左邊沒有提手旁。', explain: '要改成「屋」。屋頂的屋沒有提手旁；「握」是握手的握。' },
      { id: 'fx-竹', char: '竹', wrong: '行', sentence: '熊貓最愛吃竹子。', options: ['竹', '行', '什'], clue: '一節一節的植物，像兩根並排的竿子。', explain: '要改成「竹」。竹子的竹像兩根竹竿；「行」是行走的行。' },
      { id: 'fx-林', char: '林', wrong: '材', sentence: '森林裡有好多大樹。', options: ['林', '材', '森'], clue: '很多樹，兩邊都是「木」。', explain: '要改成「林」。森林的林是兩個木；「材」右邊是才。' },
      { id: 'fx-溪', char: '溪', wrong: '雞', sentence: '小溪的水清清涼涼的。', options: ['溪', '雞', '漢'], clue: '小小的河，左邊是三點水。', explain: '要改成「溪」。小溪的溪左邊是三點水；「雞」是小雞的雞。' },
      { id: 'fx-暗', char: '暗', wrong: '音', sentence: '天色暗了，路燈亮了起來。', options: ['暗', '音', '晴'], clue: '光很少，左邊要有太陽。', explain: '要改成「暗」。暗的左邊是日；「音」是聲音的音。' },
      { id: 'fx-眼', char: '眼', wrong: '很', sentence: '我閉上眼睛數到十。', options: ['眼', '很', '根'], clue: '看東西用的，左邊是目。', explain: '要改成「眼」。眼睛的眼左邊是目；「很」左邊是雙人旁。' },
      { id: 'fx-那', char: '那', wrong: '哪', sentence: '你看，那邊有一隻小鳥。', options: ['那', '哪', '挪'], clue: '指遠遠的地方，左邊沒有口。', explain: '要改成「那」。那邊的那左邊沒有口；「哪」是問問題用的。' },
      { id: 'fx-成', char: '成', wrong: '城', sentence: '我們終於完成了拼圖。', options: ['成', '城', '誠'], clue: '做好了、做完了，左邊沒有土。', explain: '要改成「成」。完成的成沒有土字旁；「城」是城堡的城。' },
      { id: 'fx-顆', char: '顆', wrong: '棵', sentence: '天上有一顆亮亮的星星。', options: ['顆', '棵', '課'], clue: '數圓圓小小的東西，左邊是「果」。', explain: '要改成「顆」。一顆星星的顆左邊是果；「棵」是一棵樹的棵。' }
    ],
    similar: [
      { id: 's1', meaning: '「一＿星星」是在數圓圓小小的東西。', sentence: '天上有一＿亮晶晶的星星。', frame: '一＿', options: ['顆', '棵'], answer: '顆', clue: '提示：數圓圓小小的東西，左邊是「果」。', explain: '答案是「顆」；「棵」是數樹用的。' },
      { id: 's2', meaning: '「一＿樹」是在數長在地上的樹。', sentence: '公園裡有一＿大樹。', frame: '一＿', options: ['棵', '顆'], answer: '棵', clue: '提示：數樹用的，左邊是木字旁。', explain: '答案是「棵」；「顆」是數星星、糖果用的。' },
      { id: 's3', meaning: '「＿邊」是指遠一點的地方。', sentence: '你看，＿邊有一座橋。', frame: '＿邊', options: ['那', '哪'], answer: '那', clue: '提示：指著遠方說的，左邊沒有口。', explain: '答案是「那」；「哪」是問問題用的。' },
      { id: 's4', meaning: '「＿裡」是問在什麼地方。', sentence: '你的家住在＿裡？', frame: '＿裡', options: ['哪', '那'], answer: '哪', clue: '提示：問問題用的，左邊有口。', explain: '答案是「哪」；「那」是指遠一點的地方。' },
      { id: 's5', meaning: '「完＿」是把事情做好、做完。', sentence: '我終於完＿了作業。', frame: '完＿', options: ['成', '城'], answer: '成', clue: '提示：左邊沒有土字旁。', explain: '答案是「成」；「城」是城堡的城。' },
      { id: 's6', meaning: '「＿堡」是國王住的高大建築。', sentence: '我用積木蓋了一座＿堡。', frame: '＿堡', options: ['城', '成'], answer: '城', clue: '提示：和土地、建築有關，左邊是土。', explain: '答案是「城」；「成」是完成的成。' },
      { id: 's7', meaning: '「樹＿」是很多樹長在一起的地方。', sentence: '我們走進樹＿裡找松鼠。', frame: '樹＿', options: ['林', '材'], answer: '林', clue: '提示：兩邊都是木。', explain: '答案是「林」；「材」是木材的材。' },
      { id: 's8', meaning: '「木＿」是蓋房子、做家具用的木頭。', sentence: '工人用木＿蓋了一間小屋。', frame: '木＿', options: ['材', '林'], answer: '材', clue: '提示：右邊是才能的「才」。', explain: '答案是「材」；「林」是樹林的林。' }
    ],
    listen: [
      { id: 'l1', text: '晚上在草叢裡一閃一閃發光的小蟲。', answer: 0, options: [{ text: '螢火蟲', img: 'firefly.png' }, { text: '月亮', img: 'moon.png' }, { text: '石頭', img: 'stones.png' }, { text: '竹筍', img: 'bamboo-shoot.png' }] },
      { id: 'l2', text: '很多竹子長在一起，風吹過沙沙響。', answer: 0, options: [{ text: '竹林', img: 'bamboo.png' }, { text: '小溪', img: 'stream.png' }, { text: '房屋', img: 'house.png' }, { text: '炒飯', img: 'fried-rice.png' }] },
      { id: 'l3', text: '小小的河，水清清的，可以看到小魚。', answer: 0, options: [{ text: '小溪', img: 'stream.png' }, { text: '森林', img: 'forest.png' }, { text: '牛奶', img: 'milk.png' }, { text: '月光', img: 'moon.png' }] },
      { id: 'l4', text: '吃完晚飯，慢慢的在公園走一走。', answer: 0, options: [{ text: '散步', img: 'walk-park.png' }, { text: '聚會', img: 'party-friends.png' }, { text: '發光', img: 'firefly.png' }, { text: '黑暗', img: 'dark-room.png' }] },
      { id: 'l5', text: '停電了，房間裡什麼都看不見。', answer: 0, options: [{ text: '黑暗', img: 'dark-room.png' }, { text: '月光', img: 'moon.png' }, { text: '成功', img: 'success.png' }, { text: '牛奶', img: 'milk.png' }] },
      { id: 'l6', text: '好多小魚游在一起，一大群。', answer: 0, options: [{ text: '聚', img: 'fish-school.png' }, { text: '散開', img: 'birds-scatter.png' }, { text: '躲', img: 'grass-cat.png' }, { text: '暗', img: 'dark-room.png' }] },
      { id: 'l7', text: '小狗安安靜靜的趴著，完全不動。', answer: 0, options: [{ text: '一動也不動', img: 'still-girl.png' }, { text: '散開', img: 'birds-scatter.png' }, { text: '聚會', img: 'party-friends.png' }, { text: '發光', img: 'firefly.png' }] },
      { id: 'l8', text: '天空本來很晴，沒想到下起大雨。', answer: 0, options: [{ text: '忽然', img: 'sudden-rain.png' }, { text: '散步', img: 'walk-park.png' }, { text: '得意', img: 'proud-kid.png' }, { text: '竹林', img: 'bamboo.png' }] }
    ],
    phrase: {
      pickName: '看圖選一選',
      pickSay: '看圖，選出最適合的數量詞，說說看有多少東西。',
      intro: { example: '一隻又一隻可愛的小鴨', img: 'pr-ducks.png', parts: [{ text: '一隻', role: '數量' }, { text: '又' }, { text: '一隻', role: '同樣的數量' }, { text: '可愛的', role: '怎麼樣' }, { text: '小鴨', role: '什麼東西' }],
        explain: '把「一隻」說兩次，中間加上「又」，表示東西很多很多；再說它怎麼樣，最後說是什麼東西。' },
      pick: [
        { id: 'ph1', img: 'pr-stars.png', before: '', join: '', noun: '亮晶晶的星星', ask: '用什麼數星星', look: '再看看圖片，天上有好多星星。', options: ['一顆又一顆', '一本又一本', '一片又一片', '一輛又一輛'], clue: '提示：數星星、數糖果，都用同樣的字。', explain: '答案是「一顆又一顆」，完整的短語是「一顆又一顆亮晶晶的星星」。' },
        { id: 'ph2', img: 'pr-leaves.png', before: '', join: '', noun: '金黃的落葉', ask: '用什麼數落葉', look: '再看看圖片，地上有好多葉子。', options: ['一片又一片', '一顆又一顆', '一本又一本', '一輛又一輛'], clue: '提示：葉子薄薄的、扁扁的，像紙張。', explain: '答案是「一片又一片」，完整的短語是「一片又一片金黃的落葉」。' },
        { id: 'ph3', img: 'pr-picture-books.png', before: '', join: '', noun: '厚厚的圖畫書', ask: '用什麼數圖畫書', look: '再看看圖片，書架上放滿了書。', options: ['一本又一本', '一片又一片', '一顆又一顆', '一輛又一輛'], clue: '提示：數書的時候，用哪個字？', explain: '答案是「一本又一本」，完整的短語是「一本又一本厚厚的圖畫書」。' },
        { id: 'ph4', img: 'pr-cars.png', before: '', join: '', noun: '紅色的汽車', ask: '用什麼數汽車', look: '再看看圖片，馬路上開過好多車子。', options: ['一輛又一輛', '一本又一本', '一顆又一顆', '一片又一片'], clue: '提示：數車子的時候，用的字左邊是「車」。', explain: '答案是「一輛又一輛」，完整的短語是「一輛又一輛紅色的汽車」。' },
        { id: 'ph5', img: 'pr-butterflies.png', before: '', join: '', noun: '飛舞的蝴蝶', ask: '用什麼數蝴蝶', look: '再看看圖片，花園裡有好多蝴蝶。', options: ['一隻又一隻', '一本又一本', '一片又一片', '一輛又一輛'], clue: '提示：數小動物的時候，用哪個字？', explain: '答案是「一隻又一隻」，完整的短語是「一隻又一隻飛舞的蝴蝶」。' }
      ],
      fill: [
        { id: 'pf1', img: 'pr-stars.png', parts: ['一顆', '又', '一顆', '亮晶晶的', '星星'] },
        { id: 'pf2', img: 'pr-leaves.png', parts: ['一片', '又', '一片', '金黃的', '落葉'] },
        { id: 'pf3', img: 'pr-picture-books.png', parts: ['一本', '又', '一本', '厚厚的', '圖畫書'] },
        { id: 'pf4', img: 'pr-cars.png', parts: ['一輛', '又', '一輛', '紅色的', '汽車'] }
      ],
      say: [],
      words: [{ word: '忽然', meaning: '很快、沒有想到的時候。', img: 'sudden-rain.png' }],
      choose: [
        { id: 'pw1', word: '忽然', options: ['我正在看書，燈忽然熄了。', '我每天早上忽然七點起床。'], clue: '提示：想一想，「忽然」是沒想到的事，還是每天都一樣的事？', explain: '第一句用得對：燈熄掉是沒想到的。每天七點起床是固定的，不是忽然。' }
      ],
      make: [
        { id: 'pm1', word: '忽然', clue: '提示：想想看，有什麼事是一下子發生、讓你嚇一跳的？', model: '我們正在玩，天空忽然打雷了。' }
      ],
      phrase2: {
        intro: { example: '學校對面是書店', img: 'pz-school-shop.png', parts: [{ text: '學校', role: '什麼地方' }, { text: '對面', role: '什麼位置' }, { text: '是' }, { text: '書店', role: '有什麼' }],
          explain: '先說是什麼地方，再說是在它的哪一邊，加上「是」，最後說那裡有什麼。' },
        pick: [
          { id: 'p2-pz1', img: 'pz-house-hill.png', before: '房子後面是', join: '', noun: '。', ask: '房子後面是什麼', look: '再看看圖片，房子後面有一大片綠綠的、高高的什麼？', options: ['小山', '大海', '沙漠', '雪地'], clue: '提示：綠綠的，高高的，可以去爬。', explain: '答案是「小山」，完整的句子是「房子後面是小山」。' },
          { id: 'p2-pz2', img: 'pz-class-field.png', before: '教室旁邊是', join: '', noun: '。', ask: '教室旁邊是什麼', look: '再看看圖片，教室旁邊有跑道和草地。', options: ['操場', '廚房', '醫院', '海邊'], clue: '提示：大家下課去那裡跑步、玩球。', explain: '答案是「操場」，完整的句子是「教室旁邊是操場」。' },
          { id: 'p2-pz3', img: 'pz-park-fountain.png', before: '公園中間是', join: '', noun: '。', ask: '公園中間是什麼', look: '再看看圖片，公園中間有水往上噴。', options: ['噴水池', '圖書館', '游泳池', '停車場'], clue: '提示：一直往上衝，再嘩啦啦的落回來。', explain: '答案是「噴水池」，完整的句子是「公園中間是噴水池」。' },
          { id: 'p2-pz4', img: 'pz-river-field.png', before: '小河對面是', join: '', noun: '。', ask: '小河對面是什麼', look: '再看看圖片，河的另一邊是一大片綠綠的什麼？', options: ['稻田', '沙灘', '雪山', '夜市'], clue: '提示：農夫在那裡種米。', explain: '答案是「稻田」，完整的句子是「小河對面是稻田」。' }
        ],
        fill: [
          { id: 'pz1', img: 'pz-house-hill.png', parts: ['房子', '後面', '是', '小山'] },
          { id: 'pz2', img: 'pz-class-field.png', parts: ['教室', '旁邊', '是', '操場'] },
          { id: 'pz3', img: 'pz-park-fountain.png', parts: ['公園', '中間', '是', '噴水池'] },
          { id: 'pz4', img: 'pz-river-field.png', parts: ['小河', '對面', '是', '稻田'] }
        ]
      }
    },
    pattern: []
  };
  if (typeof module === 'object' && module.exports) module.exports = d;
  else { root.H3A_WORDS = root.H3A_WORDS || {}; root.H3A_WORDS.L06 = d; }
})(this);
