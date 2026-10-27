/* 第 2 課字詞練習（公開、不加密）。句子和解釋都是 Claude 自己寫的，沒有課本原文。
   生字、語詞：options 的第一個是正確答案（作答時會打亂）。二年級：不放成語、修辭。 */
(function (root) {
  var d = {
    /* 人事時地物：選項第一個是答案；paras 是提示要用到的段落 */
    wh: [
      { id: 'wh-ren', key: '人', options: ['我（轉學生）、老師、班長和同學', '我和爸爸媽媽', '我和醫生', '我和公車司機'], paras: [1, 3], why: '老師發卡片，「我」是轉學生，下課時班長和同學來跟「我」說話。' },
      { id: 'wh-shi', key: '事', options: ['在小雲朵卡片上寫開學新希望', '在操場上比賽跑步', '在家裡幫忙打掃', '去動物園看大象'], paras: [1, 3], why: '老師要大家在小雲朵卡片上寫開學新希望。' },
      { id: 'wh-time', key: '時', options: ['開學的時候，上課和下課', '放暑假的時候', '晚上睡覺前', '過年的時候'], paras: [1, 3], why: '寫的是「開學」新希望，事情發生在上課時和下課後。' },
      { id: 'wh-di', key: '地', options: ['學校的教室', '公園的草地', '家裡的廚房', '海邊的沙灘'], paras: [4], why: '老師把卡片掛在教室的後面，事情發生在教室裡。' },
      { id: 'wh-wu', key: '物', options: ['小雲朵卡片', '一盒彩色筆', '一顆足球', '一本故事書'], paras: [1, 4], why: '大家把新希望寫在小雲朵卡片上，最後掛在教室後面。' }
    ],
    quizLevels: { qa: 'extract', qb: 'infer', qc: 'extract', qd: 'infer', qe: 'extract', qf: 'extract', qg: 'interpret', qh: 'interpret', k1: 'evaluate', k2: 'evaluate' },
    quizHelp: {
      qg: { think: ['一開始想不出新希望，又不認識同學，「我」的心情是什麼？', '下課後大家都來跟「我」說話，「我」最後寫出新希望時，心情變成什麼？'],
        why: '「我」一開始想不出要寫什麼，又是轉學生，所以很緊張；同學們來跟「我」說話以後，緊張不見了，最後變得很開心。' },
      qh: { think: ['老師把一張張小雲朵卡片掛在教室後面，看起來像什麼？', '卡片掛好的時候，「我」的心情好不好？彩色的東西給人什麼感覺？'],
        why: '彩色的雲朵卡片掛在一起，好像彩色的天空；這時候「我」的心情也變得很快樂。題目一方面說卡片，一方面也說「我」快樂的心情。' }
    },
    talkChoices: {
      k1: { good: ['我的新希望是學會游泳。', '我希望這學期每天都認真寫功課。'], bad: ['我的新希望是昨天去公園。', '我的新希望是同學都不要跟我玩。'],
        why: '新希望是「接下來想做到的好事」。學會游泳、認真寫功課都是。昨天去公園是已經做過的事；不要同學跟你玩不是好的希望。' },
      k2: { good: ['我會走過去，問他要不要一起玩。', '我會帶他認識教室和廁所在哪裡。'], bad: ['我會假裝沒看到他。', '我會笑他什麼都不知道。'],
        why: '新同學很緊張，要主動對他友善，像邀他一起玩、帶他認識學校。假裝沒看到或笑他，會讓他更緊張、更難過。' }
    },
    hanzi: [
      { id: 'h-老', combo: { type: '象形字', pict: '「老」像一個頭髮長長、彎著腰、拄著拐杖的老人。' }, char: '老', zhuyin: 'ㄌㄠˇ', radical: '老', strokes: 6, words: ['老師', '老人', '老虎'], say: '老，老人的老', cloze: '＿人', img: 'old-man.png', options: ['老', '考', '孝', '者'], clue: '這個字像一個彎著腰、拄著拐杖的人。', explain: '答案是「老」；「考」是考試的考，「孝」下面是子。', parts: ['老'], story: '「老」像一個頭髮長長、彎著腰、拄著拐杖的老爺爺。年紀很大的人，叫做「老人」。', sentence: '公車上，我讓位子給老奶奶坐。' },
      { id: 'h-師', combo: { type: '形聲字', pict: '右邊和「帥」很像，上面多了一橫。教我們學問的人，叫做「老師」。' }, char: '師', zhuyin: 'ㄕ', radical: '巾', strokes: 10, words: ['老師', '廚師', '師長'], say: '師，老師的師', cloze: '廚＿', img: 'chef.png', options: ['師', '帥', '獅', '歸'], clue: '這個字和「帥」很像，右上多了一橫。', explain: '答案是「師」，右邊上面有一橫；「帥」沒有這一橫，「獅」是獅子的獅。', parts: ['𠂤', '帀'], story: '右邊和「帥」很像，上面多了一橫。會教人本領的人叫做「師」，會做菜的人叫做「廚師」。', sentence: '老師教我們唱一首新的歌。' },
      { id: 'h-新', combo: { layout: 'lr', parts: [['亲', 's', ''], ['斤', 'm', '斧頭']] }, char: '新', zhuyin: 'ㄒㄧㄣ', radical: '斤', strokes: 13, words: ['新年', '新希望', '新衣服'], say: '新，新年的新', cloze: '＿年', img: 'new-year.png', options: ['新', '親', '薪', '斯'], clue: '這個字的右邊是一把斧頭的「斤」。', explain: '答案是「新」，右邊是斤；「親」右邊是見，「薪」上面多了草字頭。', parts: ['亲', '斤'], story: '左邊念起來像「新」，右邊的「斤」是一把斧頭。用斧頭砍下剛長出來的木頭，就是「新」。剛開始的一年叫「新年」。', sentence: '過年的時候，我穿上新衣服。', build: { layout: 'lr', show: ['亲', '？'], answer: '斤', options: ['斤', '欠', '力', '又'], clue: '想一想：右邊是一把斧頭的樣子。' } },
      { id: 'h-希', combo: { type: '會意字', pict: '上面像交叉的線，下面是「巾」。' }, char: '希', zhuyin: 'ㄒㄧ', radical: '巾', strokes: 7, words: ['希望', '新希望'], say: '希，希望的希', cloze: '＿望', img: 'wish.png', options: ['希', '布', '帝', '市'], clue: '這個字的上面像交叉的線，下面是「巾」。', explain: '答案是「希」；「布」上面不一樣，「市」是市場的市。', parts: ['㐅', '布'], story: '上面像交叉的線，下面是「布」。心裡很想要、很期待的事，叫做「希望」。', sentence: '我希望明天是晴天。' },
      { id: 'h-望', combo: { type: '形聲字', pict: '左上的「亡」念起來像「望」，右上是「月」，下面是「王」。站在高處看月亮，就是「望」。' }, char: '望', zhuyin: 'ㄨㄤˋ', radical: '月', strokes: 11, words: ['希望', '望遠鏡', '看望'], say: '望，希望的望', cloze: '＿遠鏡', img: 'telescope.png', options: ['望', '忘', '堂', '星'], clue: '這個字的右上是「月」，最下面是「王」。', explain: '答案是「望」，最下面是王；「忘」下面是心，「堂」是教堂的堂。', parts: ['亡', '月', '王'], story: '左上的「亡」念起來像「望」，右上是「月」，下面的「王」像一個站著的人。人站高高的看遠方的月亮，就是「望」。', sentence: '我用望遠鏡看天上的星星。' },
      { id: 'h-卻', combo: { layout: 'lr', parts: [['却', 's', ''], ['卩', 'm', '跪著的人']] }, char: '卻', zhuyin: 'ㄑㄩㄝˋ', radical: '卩', strokes: 9, words: ['卻', '冷卻', '卻是'], say: '卻，冷卻的卻', cloze: '冷＿', img: 'cool-down.png', options: ['卻', '腳', '劫', '卸'], clue: '這個字的右邊是一個像耳朵的「卩」。', explain: '答案是「卻」；「腳」左邊是月，「劫」右邊是力。', parts: ['谷', '卩'], story: '左邊是「谷」，右邊的「卩」像一個跪著的人。人往後退，就是「卻」。想做一件事，結果跟想的相反，可以說「卻」。', sentence: '我想早點睡，卻一直睡不著。' },
      { id: 'h-始', combo: { layout: 'lr', parts: [['女', 'm', '女生'], ['台', 's', '']] }, char: '始', zhuyin: 'ㄕˇ', radical: '女', strokes: 8, words: ['開始', '始終'], say: '始，開始的始', cloze: '開＿', img: 'start-line.png', options: ['始', '治', '姑', '怡'], clue: '這個字的右邊是「台」，左邊和「媽」的左邊一樣。', explain: '答案是「始」，左邊是女；「治」左邊是三點水，「怡」左邊是豎心旁。', parts: ['女', '台'], story: '左邊是女字旁，右邊的「台」念起來像「始」。事情剛剛起頭，叫做「開始」。', sentence: '比賽開始了，大家用力的跑。', build: { layout: 'lr', show: ['？', '台'], answer: '女', options: ['女', '氵', '扌', '口'], clue: '想一想：左邊的部首，和「媽」、「姐」一樣。' } },
      { id: 'h-緊', combo: { layout: 'tb', parts: [['臤', 's', ''], ['糸', 'm', '絲線']] }, char: '緊', zhuyin: 'ㄐㄧㄣˇ', radical: '糸', strokes: 14, words: ['緊張', '抓緊', '趕緊'], say: '緊，緊張的緊', cloze: '＿張', img: 'nervous.png', options: ['緊', '堅', '賢', '繁'], clue: '這個字的下面是和絲線有關的「糸」。', explain: '答案是「緊」，下面是糸；「堅」下面是土，「賢」下面是貝。', parts: ['臤', '糸'], story: '下面的「糸」是絲線，把線綁得很牢、拉得直直的，就是「緊」。心裡好像被線綁住，叫做「緊張」。', sentence: '要上臺表演了，我好緊張。', build: { layout: 'tb', show: ['臤', '？'], answer: '糸', options: ['糸', '貝', '土', '心'], clue: '想一想：把線綁得很牢，下面是和絲線有關的部件。' } },
      { id: 'h-因', combo: { type: '會意字', pict: '外面是一個框，裡面是「大」，像一個人躺在草蓆上。' }, char: '因', zhuyin: 'ㄧㄣ', radical: '囗', strokes: 6, words: ['因為', '原因'], say: '因，因為的因', cloze: '原＿', img: 'reason.png', options: ['因', '困', '固', '囚'], clue: '這個字的外面是一個框，裡面是「大」。', explain: '答案是「因」，框裡是大；「困」裡面是木，「固」裡面是古。', parts: ['囗', '大'], story: '外面的框像一張草蓆，裡面的「大」像一個人。說出事情為什麼會發生，就用「因為」。', sentence: '因為下大雨，我們沒有出去玩。' },
      { id: 'h-為', combo: { type: '象形字', pict: '很久以前的「為」，像一隻手牽著一頭大象去做工。' }, char: '為', zhuyin: 'ㄨㄟˋ', radical: '火', strokes: 9, words: ['因為', '為什麼'], say: '為，因為的為', cloze: '因＿', img: 'question-kid.png', options: ['為', '烏', '馬', '鳥'], clue: '這個字下面有四點，上面像一隻手。', explain: '答案是「為」；「烏」是烏雲的烏，「馬」是馬兒的馬。', parts: ['為'], story: '很久以前的「為」，像一隻手牽著大象去做事。問事情的原因，可以說「為什麼」。', sentence: '你為什麼在笑？' },
      { id: 'h-知', combo: { layout: 'lr', type: '會意字', parts: [['矢', 'm', '箭'], ['口', 'm', '嘴巴']] }, char: '知', zhuyin: 'ㄓ', radical: '矢', strokes: 8, words: ['知道', '知識'], say: '知，知道的知', cloze: '＿識', img: 'books.png', options: ['知', '和', '短', '智'], clue: '這個字的左邊是一支箭的「矢」，右邊是口。', explain: '答案是「知」；「和」左邊是禾，「短」右邊是豆。', parts: ['矢', '口'], story: '左邊的「矢」是一支箭，右邊是「口」。懂得很多，說話像箭一樣又快又準，就是「知」。', sentence: '我知道這題的答案。', build: { layout: 'lr', show: ['矢', '？'], answer: '口', options: ['口', '日', '白', '目'], clue: '想一想：說出答案要用嘴巴，右邊是哪一個部件？' } },
      { id: 'h-道', combo: { type: '會意字', pict: '「辶」是走路，裡面是「首」，表示頭。走路時頭朝著的方向，就是「道路」。' }, char: '道', zhuyin: 'ㄉㄠˋ', radical: '辵', strokes: 13, words: ['知道', '道路', '味道'], say: '道，知道的道', cloze: '味＿', img: 'smell-soup.png', options: ['道', '首', '導', '逍'], clue: '這個字的外面是走路的「辶」，裡面是「首」。', explain: '答案是「道」；「首」少了辶，「導」下面多了寸。', parts: ['辶', '首'], story: '「辶」是走路，裡面的「首」是頭。走路時頭朝著的那一條路，就是「道路」。吃東西嘗到的感覺叫「味道」。', sentence: '這碗湯的味道好香。' },
      { id: 'h-怎', combo: { layout: 'tb', parts: [['乍', 's', ''], ['心', 'm', '心裡想']] }, char: '怎', zhuyin: 'ㄗㄣˇ', radical: '心', strokes: 9, words: ['怎麼', '怎麼辦', '怎樣'], say: '怎，怎麼的怎', cloze: '＿樣', img: 'thinking.png', options: ['怎', '作', '咋', '忽'], clue: '這個字的上面是「乍」，下面是心。', explain: '答案是「怎」，上面是乍；「作」左邊是人，「忽」上面是勿。', parts: ['乍', '心'], story: '上面的「乍」念起來像「怎」，下面是「心」。心裡在想該怎麼做，就是「怎麼」。', sentence: '鉛筆不見了，怎麼辦？', build: { layout: 'tb', show: ['乍', '？'], answer: '心', options: ['心', '木', '口', '貝'], clue: '想一想：古人以為是用胸口裡的什麼在想事情？' } },
      { id: 'h-消', combo: { layout: 'lr', parts: [['氵', 'm', '水'], ['肖', 's', '']] }, char: '消', zhuyin: 'ㄒㄧㄠ', radical: '水', strokes: 10, words: ['消失', '消息', '消防車'], say: '消，消失的消', cloze: '＿息', img: 'news.png', options: ['消', '削', '宵', '俏'], clue: '這個字的左邊是三點水，右邊是「肖」。', explain: '答案是「消」，左邊是三點水；「削」右邊是立刀，「宵」上面是寶蓋頭。', parts: ['氵', '肖'], story: '左邊是三點水，右邊的「肖」念起來像「消」。冰塊化成水，慢慢不見了，就是「消」。', sentence: '太陽出來，地上的水慢慢消失了。', build: { layout: 'lr', show: ['？', '肖'], answer: '氵', options: ['氵', '亻', '木', '口'], clue: '想一想：冰慢慢融化不見了，左邊和水有關。' } },
      { id: 'h-失', combo: { type: '會意字', pict: '像一隻手，有東西從手裡掉下去。' }, char: '失', zhuyin: 'ㄕ', radical: '大', strokes: 5, words: ['消失', '失去', '失望'], say: '失，失去的失', cloze: '＿去', img: 'lost-balloon.png', options: ['失', '矢', '夫', '天'], clue: '這個字和「夫」很像，上面多了一撇出頭。', explain: '答案是「失」，上面出頭；「矢」是箭，「夫」上面沒有出頭。', parts: ['失'], story: '「失」像一隻手，有東西從手裡掉下去了。東西不見了，叫做「失去」。', sentence: '氣球飛走了，我失去了它。' },
      { id: 'h-習', combo: { layout: 'tb', type: '會意字', parts: [['羽', 'm', '翅膀'], ['白', 'm', '']] }, char: '習', zhuyin: 'ㄒㄧˊ', radical: '羽', strokes: 11, words: ['學習', '練習', '習慣'], say: '習，練習的習', cloze: '練＿', img: 'practice-bird.png', options: ['習', '翌', '羽', '昔'], clue: '這個字的上面是兩片羽毛，下面是「白」。', explain: '答案是「習」；「羽」少了下面的白，「昔」上面不一樣。', parts: ['羽', '白'], story: '上面的「羽」是小鳥的翅膀。小鳥一次又一次拍翅膀，練習飛，就是「習」。', sentence: '我每天練習寫字。', build: { layout: 'tb', show: ['？', '白'], answer: '羽', options: ['羽', '日', '大', '立'], clue: '想一想：小鳥拍翅膀練習飛，上面是鳥的什麼？' } },
      { id: 'h-最', combo: { layout: 'tb', parts: [['曰', 'm', '說話'], ['取', 's', '']] }, char: '最', zhuyin: 'ㄗㄨㄟˋ', radical: '曰', strokes: 12, words: ['最後', '最好', '最喜歡'], say: '最，最後的最', cloze: '＿後', img: 'last-in-line.png', options: ['最', '取', '量', '是'], clue: '這個字的上面是「曰」，下面是「取」。', explain: '答案是「最」；「取」少了上面，「量」下面是里。', parts: ['曰', '取'], story: '上面是「曰」，下面的「取」念起來有點像「最」。排在最前面或最後面、比誰都多，就是「最」。', sentence: '我最喜歡吃西瓜。', build: { layout: 'tb', show: ['曰', '？'], answer: '取', options: ['取', '工', '木', '心'], clue: '想一想：下面的字是拿東西的意思，左邊是耳、右邊是又。' } },
      { id: 'h-掛', combo: { layout: 'lr', parts: [['扌', 'm', '手'], ['卦', 's', '']] }, char: '掛', zhuyin: 'ㄍㄨㄚˋ', radical: '手', strokes: 11, words: ['掛', '掛起來', '掛號'], say: '掛，掛起來的掛', cloze: '＿號', img: 'hospital-desk.png', options: ['掛', '桂', '街', '卦'], clue: '這個字的左邊是提手旁，右邊是「卦」。', explain: '答案是「掛」，左邊是提手旁；「卦」少了左邊，「桂」左邊是木。', parts: ['扌', '卦'], story: '左邊是提手旁，表示用手；右邊的「卦」念起來像「掛」。用手把東西吊起來，就是「掛」。看醫生要先「掛號」。', sentence: '我把外套掛在牆上。', build: { layout: 'lr', show: ['？', '卦'], answer: '扌', options: ['扌', '木', '亻', '氵'], clue: '想一想：要用手把東西吊起來，左邊是什麼？' } }
    ],
    vocab: [
      { id: 'v-卡片', word: '卡片', meaning: '用硬紙做的小紙片，可以寫字、畫畫。', example: '我做了一張生日＿＿送給媽媽。', img: 'card.png', options: ['卡片', '希望', '學習', '跳舞'] },
      { id: 'v-希望', word: '希望', meaning: '心裡很想要、很期待的事。', example: '我＿＿這次比賽可以得獎。', img: 'wish.png', options: ['希望', '消失', '緊張', '卡片'] },
      { id: 'v-開學', word: '開學', meaning: '假期結束，學校開始上課。', example: '暑假結束，明天就要＿＿了。', img: 'school-gate.png', options: ['開學', '跳舞', '消失', '最後'] },
      { id: 'v-緊張', word: '緊張', meaning: '心裡很不安，心跳得很快。', example: '要上臺說故事了，我好＿＿。', img: 'nervous.png', options: ['緊張', '開學', '最後', '希望'] },
      { id: 'v-轉學生', word: '轉學生', meaning: '從別的學校換到這個學校來讀書的學生。', example: '班上來了一位＿＿＿，大家都歡迎她。', img: 'new-student.png', options: ['轉學生', '老師們', '班長們', '小雲朵'] },
      { id: 'v-不熟', word: '不熟', meaning: '認識得很少，還沒那麼了解。', example: '我和隔壁班的同學還＿＿。', img: 'shy-kids.png', options: ['不熟', '開學', '掛上', '跳舞'] },
      { id: 'v-怎麼辦', word: '怎麼辦', meaning: '遇到問題，不知道要怎樣處理。', example: '水壺打翻了，＿＿＿？', img: 'spilled-water.png', options: ['怎麼辦', '轉學生', '不知道', '想不出'] },
      { id: 'v-不知不覺', word: '不知不覺', meaning: '沒有注意到，事情就發生了。', example: '我們玩得好開心，＿＿＿＿天就黑了。', img: 'sunset-play.png', options: ['不知不覺', '快快樂樂', '急急忙忙', '安安靜靜'] },
      { id: 'v-消失', word: '消失', meaning: '慢慢不見了。', example: '太陽出來，地上的雪慢慢＿＿了。', img: 'melting-snow.png', options: ['消失', '學習', '緊張', '開學'] },
      { id: 'v-學習', word: '學習', meaning: '去學新的本領、新的知識。', example: '我們一起＿＿怎麼種菜。', img: 'class-learn.png', options: ['學習', '消失', '最後', '緊張'] },
      { id: 'v-最後', word: '最後', meaning: '排在後面，一件事結束的時候。', example: '吃完飯，＿＿再吃水果。', img: 'last-in-line.png', options: ['最後', '開學', '希望', '卡片'] },
      { id: 'v-掛', word: '掛', meaning: '用鉤子、釘子把東西吊起來。', example: '爸爸把照片＿在牆上。', img: 'hang-picture.png', options: ['掛', '跳', '寫', '問'] },
      { id: 'v-跳舞', word: '跳舞', meaning: '跟著音樂，用身體做出好看的動作。', example: '音樂一響，大家就開始＿＿。', img: 'dance.png', options: ['跳舞', '學習', '消失', '緊張'] }
    ],
    charwords: [
      { id: 'cw-老', char: '老', img: 'old-man.png', word: '老人', charMeaning: '年紀大。', meaning: '年紀很大的人。', example: '公園裡有一位＿＿在散步。', options: ['老人', '廚師', '新年', '道路'] },
      { id: 'cw-師', char: '師', img: 'chef.png', word: '廚師', charMeaning: '有本領、會教人的人。', meaning: '在廚房做菜做得很好的人。', example: '餐廳裡的＿＿煮了一大鍋湯。', options: ['廚師', '老人', '練習', '消息'] },
      { id: 'cw-新', char: '新', img: 'new-year.png', word: '新年', charMeaning: '剛開始的、剛出現的。', meaning: '一年剛開始的時候。', example: '＿＿到了，大家互相說恭喜。', options: ['新年', '道路', '原因', '廚師'] },
      { id: 'cw-希', char: '希', img: 'wish.png', word: '希望', charMeaning: '想要、期待。', meaning: '心裡很想要、很期待。', example: '我＿＿可以養一隻小狗。', options: ['希望', '開始', '練習', '最好'] },
      { id: 'cw-望', char: '望', img: 'telescope.png', word: '望遠鏡', charMeaning: '往遠的地方看。', meaning: '可以把遠的東西看得很清楚的工具。', example: '爸爸用＿＿＿看山上的老鷹。', options: ['望遠鏡', '為什麼', '消防車', '老奶奶'] },
      { id: 'cw-卻', char: '卻', img: 'oops-kid.png', word: '卻', charMeaning: '表示事情和想的相反。', meaning: '用在句子裡，表示結果跟想的不一樣。', example: '我想把球接住，＿讓球掉到地上。', options: ['卻', '和', '很', '的'] },
      { id: 'cw-始', char: '始', img: 'start-line.png', word: '開始', charMeaning: '事情剛起頭。', meaning: '事情的第一步。', example: '鈴聲響了，第一節課要＿＿了。', options: ['開始', '最後', '失望', '知道'] },
      { id: 'cw-緊', char: '緊', img: 'hold-tight.png', word: '抓緊', charMeaning: '很牢、不鬆。', meaning: '用力抓住，不放開。', example: '坐雲霄飛車時，要＿＿扶手。', options: ['抓緊', '練習', '開始', '掛上'] },
      { id: 'cw-因', char: '因', img: 'reason.png', word: '原因', charMeaning: '事情發生的理由。', meaning: '事情為什麼會發生的理由。', example: '你知道他哭的＿＿嗎？', options: ['原因', '道路', '廚師', '新年'] },
      { id: 'cw-為', char: '為', img: 'question-kid.png', word: '為什麼', charMeaning: '問原因時說的話。', meaning: '問事情的原因。', example: '＿＿＿天空是藍色的？', options: ['為什麼', '望遠鏡', '不知道', '老奶奶'] },
      { id: 'cw-知', char: '知', img: 'books.png', word: '知識', charMeaning: '明白、懂得。', meaning: '學到的、懂得的道理和事情。', example: '多看書可以學到很多＿＿。', options: ['知識', '抓緊', '掛上', '開始'] },
      { id: 'cw-道', char: '道', img: 'road.png', word: '道路', charMeaning: '路。', meaning: '給人和車子走的路。', example: '這條＿＿又寬又直。', options: ['道路', '原因', '新年', '知識'] },
      { id: 'cw-怎', char: '怎', img: 'thinking.png', word: '怎麼', charMeaning: '問方法或原因。', meaning: '問用什麼方法，或是為什麼。', example: '這道題目要＿＿算？', options: ['怎麼', '最好', '原因', '開始'] },
      { id: 'cw-消', char: '消', img: 'news.png', word: '消息', charMeaning: '慢慢不見；也有傳來的話的意思。', meaning: '別人告訴我們的事情。', example: '聽到明天要去郊遊的＿＿，大家都好開心。', options: ['消息', '道路', '知識', '廚師'] },
      { id: 'cw-失', char: '失', img: 'disappointed.png', word: '失望', charMeaning: '沒有了、不見了。', meaning: '希望的事沒有做到，心裡很難過。', example: '下雨不能去玩，弟弟好＿＿。', options: ['失望', '抓緊', '開始', '知識'] },
      { id: 'cw-習', char: '習', img: 'practice-piano.png', word: '練習', charMeaning: '一次又一次的學。', meaning: '一次又一次的做，讓自己越來越會。', example: '姐姐每天＿＿彈鋼琴。', options: ['練習', '失望', '原因', '道路'] },
      { id: 'cw-最', char: '最', img: 'best-friend.png', word: '最好', charMeaning: '比誰都更。', meaning: '比其他的都好。', example: '小明是我＿＿的朋友。', options: ['最好', '怎麼', '抓緊', '失望'] },
      { id: 'cw-掛', char: '掛', img: 'hang-picture.png', word: '掛上', charMeaning: '把東西吊起來。', meaning: '把東西吊在高處。', example: '聖誕節到了，我們在樹上＿＿星星。', options: ['掛上', '練習', '抓緊', '開始'] }
    ],
    fix: [
      { id: 'fx-師', char: '師', wrong: '帥', sentence: '餐廳的廚師煮了一桌好菜。', options: ['師', '帥', '獅'], clue: '會做菜的人，右上要多一橫。', explain: '要改成「師」。廚師的師右上有一橫；「帥」是很帥的帥。' },
      { id: 'fx-新', char: '新', wrong: '親', sentence: '媽媽買了一雙新鞋給我。', options: ['新', '親', '薪'], clue: '剛買來的，右邊要是斧頭的「斤」。', explain: '要改成「新」。右邊是斤；「親」右邊是見。' },
      { id: 'fx-希', char: '希', wrong: '布', sentence: '我希望可以快快長大。', options: ['希', '布', '市'], clue: '心裡很期待的事，上面像交叉的線。', explain: '要改成「希」。希望的希上面像交叉的線；「布」是布偶的布。' },
      { id: 'fx-望', char: '望', wrong: '忘', sentence: '我用望遠鏡看遠方的山。', options: ['望', '忘', '星'], clue: '往遠的地方看，下面是「王」不是心。', explain: '要改成「望」。望的下面是王；「忘」下面是心，是忘記的忘。' },
      { id: 'fx-始', char: '始', wrong: '治', sentence: '下課鈴響了，大家開始玩遊戲。', options: ['始', '治', '姑'], clue: '事情剛起頭，左邊是女字旁。', explain: '要改成「始」。開始的始左邊是女；「治」左邊是三點水。' },
      { id: 'fx-因', char: '因', wrong: '困', sentence: '他哭了，原因是玩具壞了。', options: ['因', '困', '固'], clue: '事情的理由，框框裡面是「大」。', explain: '要改成「因」。框裡是大；「困」框裡是木。' },
      { id: 'fx-道', char: '道', wrong: '首', sentence: '這條道路兩旁種滿了樹。', options: ['道', '首', '導'], clue: '給人走的路，外面要有走路的「辶」。', explain: '要改成「道」。道路的道外面有辶；「首」少了辶。' },
      { id: 'fx-怎', char: '怎', wrong: '作', sentence: '這個玩具要怎樣玩？', options: ['怎', '作', '忽'], clue: '問方法的字，下面要有一顆心。', explain: '要改成「怎」。怎樣的怎下面是心；「作」是作業的作。' },
      { id: 'fx-消', char: '消', wrong: '宵', sentence: '冰塊放在太陽下，很快就消失了。', options: ['消', '宵', '削'], clue: '慢慢不見了，左邊和水有關。', explain: '要改成「消」。消失的消左邊是三點水；「宵」上面是寶蓋頭。' },
      { id: 'fx-失', char: '失', wrong: '夫', sentence: '妹妹的小熊不見了，她好失望。', options: ['失', '夫', '矢'], clue: '沒有了、不見了，上面要出頭。', explain: '要改成「失」。失望的失上面出頭；「夫」上面沒出頭。' },
      { id: 'fx-習', char: '習', wrong: '羽', sentence: '我每天放學都練習跳繩。', options: ['習', '羽', '昔'], clue: '一次又一次的學，下面要有「白」。', explain: '要改成「習」。練習的習下面有白；「羽」是羽毛的羽。' },
      { id: 'fx-掛', char: '掛', wrong: '卦', sentence: '我把書包掛在椅子上。', options: ['掛', '卦', '桂'], clue: '用手把東西吊起來，左邊要有提手旁。', explain: '要改成「掛」。掛的左邊是提手旁；「卦」少了提手旁。' }
    ],
    similar: [
      { id: 's1', meaning: '「＿年」是一年剛開始的時候。', sentence: '＿年到了，大家互相說恭喜。', frame: '＿年', options: ['新', '親'], answer: '新', clue: '提示：剛開始的，右邊是斧頭。', explain: '答案是「新」；「親」是親人的親，右邊是見。' },
      { id: 's2', meaning: '「＿人」是家裡的人，像爸爸、媽媽。', sentence: '過年的時候，＿人都回家團圓。', frame: '＿人', options: ['親', '新'], answer: '親', clue: '提示：右邊是看見的「見」。', explain: '答案是「親」；「新」是新年的新。' },
      { id: 's3', meaning: '「開＿」是事情剛起頭。', sentence: '比賽要開＿了，大家站好。', frame: '開＿', options: ['始', '治'], answer: '始', clue: '提示：左邊是女字旁。', explain: '答案是「始」；「治」是治病的治，左邊是三點水。' },
      { id: 's4', meaning: '「＿病」是醫生幫人把病醫好。', sentence: '醫生幫奶奶＿病。', frame: '＿病', options: ['治', '始'], answer: '治', clue: '提示：左邊是三點水。', explain: '答案是「治」；「始」是開始的始。' },
      { id: 's5', meaning: '「原＿」是事情發生的理由。', sentence: '他遲到的原＿是睡過頭。', frame: '原＿', options: ['因', '困'], answer: '因', clue: '提示：框框裡面是「大」。', explain: '答案是「因」；「困」是困難的困，框裡是木。' },
      { id: 's6', meaning: '「＿難」是很不容易。', sentence: '這道題目好＿難。', frame: '＿難', options: ['困', '因'], answer: '困', clue: '提示：框框裡面是一棵樹。', explain: '答案是「困」；「因」是因為的因。' },
      { id: 's7', meaning: '「＿失」是慢慢不見了。', sentence: '雨停了，烏雲都＿失了。', frame: '＿失', options: ['消', '宵'], answer: '消', clue: '提示：左邊是三點水。', explain: '答案是「消」；「宵」是元宵的宵。' },
      { id: 's8', meaning: '「元＿節」是吃湯圓、提燈籠的節日。', sentence: '元＿節的晚上，我們去提燈籠。', frame: '元＿', options: ['宵', '消'], answer: '宵', clue: '提示：上面是寶蓋頭。', explain: '答案是「宵」；「消」是消失的消。' }
    ],
    listen: [
      { id: 'l1', text: '用硬紙做成的小紙片，可以在上面寫字。', answer: 0, options: [{ text: '卡片', img: 'card.png' }, { text: '跳舞', img: 'dance.png' }, { text: '望遠鏡', img: 'telescope.png' }, { text: '道路', img: 'road.png' }] },
      { id: 'l2', text: '要上臺表演，心跳得好快，手心都是汗。', answer: 0, options: [{ text: '緊張', img: 'nervous.png' }, { text: '開學', img: 'school-gate.png' }, { text: '跳舞', img: 'dance.png' }, { text: '卡片', img: 'card.png' }] },
      { id: 'l3', text: '從別的學校換過來，第一天到這個班上。', answer: 0, options: [{ text: '轉學生', img: 'new-student.png' }, { text: '老人', img: 'old-man.png' }, { text: '廚師', img: 'chef.png' }, { text: '老師', img: 'class-learn.png' }] },
      { id: 'l4', text: '跟著音樂，用身體做出好看的動作。', answer: 0, options: [{ text: '跳舞', img: 'dance.png' }, { text: '練習', img: 'practice-piano.png' }, { text: '掛', img: 'hang-picture.png' }, { text: '消失', img: 'melting-snow.png' }] },
      { id: 'l5', text: '太陽一出來，雪人慢慢不見了。', answer: 0, options: [{ text: '消失', img: 'melting-snow.png' }, { text: '新年', img: 'new-year.png' }, { text: '跳舞', img: 'dance.png' }, { text: '卡片', img: 'card.png' }] },
      { id: 'l6', text: '用釘子把照片吊在牆上。', answer: 0, options: [{ text: '掛', img: 'hang-picture.png' }, { text: '跳舞', img: 'dance.png' }, { text: '道路', img: 'road.png' }, { text: '緊張', img: 'nervous.png' }] },
      { id: 'l7', text: '假期結束，學校開始上課了。', answer: 0, options: [{ text: '開學', img: 'school-gate.png' }, { text: '新年', img: 'new-year.png' }, { text: '失望', img: 'disappointed.png' }, { text: '跳舞', img: 'dance.png' }] },
      { id: 'l8', text: '可以把遠遠的東西看得很清楚。', answer: 0, options: [{ text: '望遠鏡', img: 'telescope.png' }, { text: '卡片', img: 'card.png' }, { text: '道路', img: 'road.png' }, { text: '廚師', img: 'chef.png' }] }
    ],
    phrase: {
      fillLabels: { answer: '什麼心情', noun: '怎麼樣' },
      pickName: '看圖選一選',
      pickSay: '看圖，選出圖裡小朋友的心情，說說看他做了什麼。',
      intro: { example: '開心得拍起手來', img: 'pr-clap.png', parts: [{ text: '開心', role: '什麼心情' }, { text: '得' }, { text: '拍起手來', role: '怎麼樣' }],
        explain: '先說是什麼心情，加上「得」，再說心情讓人做出什麼樣子。這樣就知道心情有多強。' },
      pick: [
        { id: 'ph1', img: 'pr-stomp.png', before: '', join: '得', noun: '跺起腳來', ask: '什麼心情得跺起腳來', look: '再看看圖片，小朋友的積木被推倒了，他的臉怎麼了？', options: ['生氣', '開心', '輕鬆', '得意'], clue: '提示：他的臉紅紅的，眉毛豎起來。', explain: '答案是「生氣」，完整的短語是「生氣得跺起腳來」。' },
        { id: 'ph2', img: 'pr-cry.png', before: '', join: '得', noun: '哭了起來', ask: '什麼心情得哭了起來', look: '再看看圖片，冰淇淋掉到地上，小朋友怎麼了？', options: ['傷心', '開心', '得意', '興奮'], clue: '提示：眼淚一直掉下來。', explain: '答案是「傷心」，完整的短語是「傷心得哭了起來」。' },
        { id: 'ph3', img: 'pr-shiver.png', before: '', join: '得', noun: '發起抖來', ask: '什麼心情得發起抖來', look: '再看看圖片，一隻大狗對著小朋友叫，小朋友怎麼了？', options: ['害怕', '開心', '得意', '輕鬆'], clue: '提示：他的身體一直抖，躲到媽媽後面。', explain: '答案是「害怕」，完整的短語是「害怕得發起抖來」。' },
        { id: 'ph4', img: 'pr-shout-joy.png', before: '', join: '得', noun: '叫了起來', ask: '什麼心情得叫了起來', look: '再看看圖片，聽到要去遊樂園，小朋友在做什麼？', options: ['興奮', '傷心', '害怕', '難過'], clue: '提示：他跳得好高，等不及要出門了。', explain: '答案是「興奮」，完整的短語是「興奮得叫了起來」。' },
        { id: 'ph5', img: 'pr-sweat.png', before: '', join: '得', noun: '流出汗來', ask: '什麼心情得流出汗來', look: '再看看圖片，要上臺說話了，小朋友的手怎麼了？', options: ['緊張', '開心', '生氣', '輕鬆'], clue: '提示：他的心噗通噗通跳，雙手發抖。', explain: '答案是「緊張」，完整的短語是「緊張得流出汗來」。' },
        { id: 'ph6', img: 'pr-mouth-open.png', before: '', join: '得', noun: '張大嘴巴', ask: '什麼心情得張大嘴巴', look: '再看看圖片，魔術師從帽子裡變出一隻兔子，小朋友的表情怎麼樣？', options: ['驚訝', '生氣', '難過', '害怕'], clue: '提示：他沒想到會變出兔子，眼睛也睜得好大。', explain: '答案是「驚訝」，完整的短語是「驚訝得張大嘴巴」。' }
      ],
      say: [],
      words: [{ word: '因為', meaning: '說出事情發生的原因。', img: 'reason.png' }, { word: '最後', meaning: '一件事結束的時候，排在後面。', img: 'last-in-line.png' }],
      choose: [
        { id: 'pw1', word: '因為', options: ['因為下雨，我們在教室上體育課。', '因為天氣很好，所以我們都很難過。'], clue: '提示：想一想，「因為」後面說的原因，和結果合不合？', explain: '第一句用得對：下雨所以在教室上課。天氣很好卻很難過，原因和結果不合。' },
        { id: 'pw2', word: '最後', options: ['我們先洗手，再吃飯，最後刷牙。', '最後我們開始吃早餐，一天開始了。'], clue: '提示：想一想，「最後」是一件事的開頭，還是結束？', explain: '第一句用得對：刷牙是最後做的事。一天才剛開始，不能說最後。' }
      ],
      make: [
        { id: 'pm1', word: '因為', clue: '提示：想想看，你今天很開心或很難過，是因為什麼事？', model: '因為今天是我的生日，所以我很開心。' },
        { id: 'pm2', word: '最後', clue: '提示：想想看，你放學回家做了哪些事？最後做什麼？', model: '我先寫功課，再看書，最後去洗澡。' }
      ]
    },
    pattern: [
      { key: 'que', id: 'qu', title: '……卻……', img: 'que.png', meaning: '先說誰想做一件事，再用「卻」說出結果，和想的剛好相反。',
        examples: ['我想把球丟進籃框，卻丟到了地上。'],
        match: [
          { id: 'pt-qu-m1', img: 'pt-kite.png', front: '弟弟想把風箏放上天，', options: ['卻一直飛不起來。', '卻變成一隻鳥。', '卻去刷牙了。'], clue: '提示：看看圖片，風箏有沒有飛上去？', explain: '答案是「卻一直飛不起來」：想放上天，結果相反。' },
          { id: 'pt-qu-m2', img: 'pt-traffic.png', front: '我想早一點到學校，', options: ['卻遇到塞車。', '卻長出翅膀。', '卻吃了晚餐。'], clue: '提示：看看圖片，路上的車子怎麼了？', explain: '答案是「卻遇到塞車」：想早點到，結果被車子卡住了。' },
          { id: 'pt-qu-m3', img: 'pt-shoelace.png', front: '妹妹想自己綁鞋帶，', options: ['卻怎麼綁都綁不好。', '卻飛到月亮上。', '卻變成大象。'], clue: '提示：看看圖片，鞋帶綁好了沒有？', explain: '答案是「卻怎麼綁都綁不好」：想自己綁，結果綁不好。' }
        ],
        conj: [
          { id: 'pt-qu-c1', full: '哥哥想抓住蝴蝶，卻讓牠飛走了。', img: 'pt-butterfly.png', sentence: '哥哥想抓住蝴蝶，＿讓牠飛走了。', options: ['……卻……', '只要……就……', '一會兒……一會兒……'], clue: '提示：想抓住，結果相反。數數看有幾個空格。', explain: '答案是「……卻……」：哥哥想抓住蝴蝶，卻讓牠飛走了。' },
          { id: 'pt-qu-c2', full: '我想吃最後一塊蛋糕，卻被弟弟吃掉了。', img: 'pt-cake.png', sentence: '我想吃最後一塊蛋糕，＿被弟弟吃掉了。', options: ['……卻……', '只要……就……', '一會兒……一會兒……'], clue: '提示：想吃，結果沒吃到。數數看有幾個空格。', explain: '答案是「……卻……」：我想吃最後一塊蛋糕，卻被弟弟吃掉了。' },
          { id: 'pt-qu-c3', full: '小貓想跳上桌子，卻跳不上去。', img: 'pt-cat-jump.png', sentence: '小貓想跳上桌子，＿跳不上去。', options: ['……卻……', '只要……就……', '一會兒……一會兒……'], clue: '提示：想跳上去，結果相反。數數看有幾個空格。', explain: '答案是「……卻……」：小貓想跳上桌子，卻跳不上去。' }
        ],
        half: [
          { id: 'pt-qu-h1', front: '我想把作業寫完，', clue: '提示：想寫完，結果發生了什麼相反的事？記得要說「卻」。', model: '卻不小心睡著了。' },
          { id: 'pt-qu-h2', front: '媽媽想買一件新衣服，', clue: '提示：想買，結果怎麼了？記得要說「卻」。', model: '卻找不到喜歡的。' }
        ],
        whole: [
          { id: 'pt-qu-w1', clue: '提示：先說你想做什麼，再用「卻」說出相反的結果。想想看：有沒有一件事，你很想做，結果沒做到？', model: '我想早點起床，卻一直睡到八點。' }
        ] }
    ]
  };
  if (typeof module === 'object' && module.exports) module.exports = d;
  else { root.H3A_WORDS = root.H3A_WORDS || {}; root.H3A_WORDS.L02 = d; }
})(this);
