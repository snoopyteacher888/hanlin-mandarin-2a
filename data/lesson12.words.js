/* 第 12 課字詞練習（公開、不加密）。句子和解釋都是 Claude 自己寫的，沒有課本原文。
   生字、語詞：options 的第一個是正確答案（作答時會打亂）。二年級：不放成語、修辭。 */
(function (root) {
  var d = {
    /* 人事時地物：選項第一個是答案；paras 是提示要用到的段落 */
    wh: [
      { id: 'wh-ren', key: '人', options: ['我、媽媽和姐姐', '我和爸爸', '老師和同學', '我和爺爺奶奶'], paras: [1, 2, 3], why: '「我」念出詩，媽媽說了詩人的事，姐姐對著池塘說了白鵝的樣子。' },
      { id: 'wh-shi', key: '事', options: ['看白鵝，一起念詩、作詩', '在池邊釣魚', '餵小鴨吃麵包', '比賽誰游得快'], paras: [1, 4], why: '大家看著水裡的白鵝，「我」念了〈詠鵝〉，姐姐也作了一首詩。' },
      { id: 'wh-time', key: '時', options: ['星期日', '星期一早上', '過年的晚上', '放學以後'], paras: [1], why: '課文一開始就說是星期日。' },
      { id: 'wh-di', key: '地', options: ['池邊', '學校的教室', '海邊的沙灘', '家裡的客廳'], paras: [1], why: '大家在池邊散步，看到水裡的白鵝。' },
      { id: 'wh-wu', key: '物', options: ['水裡的白鵝', '樹上的小鳥', '草地上的小狗', '天上的風箏'], paras: [1, 3, 4], why: '大家看的、詩裡寫的，都是水裡的白鵝。' }
    ],
    quizLevels: { qa: 'extract', qb: 'extract', qc: 'extract', qd: 'infer', qe: 'infer', qf: 'extract', qg: 'interpret', qh: 'interpret', k1: 'evaluate', k2: 'evaluate' },
    quizHelp: {
      qg: { think: ['姐姐看到鵝在水裡做什麼特別的動作？', '姐姐看到以後，自己說出了什麼？像不像一首詩？'],
        why: '姐姐看到鵝把頭伸進水裡、翻跟頭，馬上照著〈詠鵝〉的樣子，自己作了一首新的詩，所以媽媽說她變成小詩人了。' },
      qh: { think: ['駱賓王的詩裡，鵝在做什麼？是唱歌、游水，還是翻跟頭？', '姐姐的詩裡，鵝又在做什麼？兩首詩寫的動作一樣嗎？'],
        why: '駱賓王寫的是鵝伸長脖子唱歌、在水上游；姐姐寫的是鵝倒立、翻跟頭、露出肚皮。兩首詩都寫鵝，但寫的動作不一樣。' }
    },
    talkChoices: {
      k1: { good: ['他很聰明，七歲就會作詩。', '他很會觀察，把鵝的樣子寫得很清楚。'], bad: ['他不喜歡鵝。', '他每天都在睡覺。'],
        why: '駱賓王只有七歲，就用短短的句子寫出鵝的樣子，可見他很聰明、很會觀察。不喜歡鵝、每天睡覺，在課文裡找不到。' },
      k2: { good: ['狗、狗、狗，追著球兒跑。', '魚、魚、魚，游在水中央。'], bad: ['我今天吃了蛋糕。', '我不知道要說什麼。'],
        why: '題目要你學〈詠鵝〉，說一種動物和牠在做什麼。追著球跑的狗、在水裡游的魚都是。吃蛋糕沒有說到動物，不知道也沒有回答。' }
    },
    hanzi: [
      { id: 'h-鵝', combo: { layout: 'lr', parts: [['我', 's', ''], ['鳥', 'm', '鳥']] }, char: '鵝', zhuyin: 'ㄜˊ', radical: '鳥', strokes: 18, words: ['白鵝', '天鵝', '企鵝'], say: '鵝，天鵝的鵝', cloze: '天＿', img: 'swan.png', options: ['鵝', '鴨', '餓', '娥'], clue: '這個字的左邊是「我」，右邊是「鳥」。', explain: '答案是「鵝」；「鴨」左邊是甲，「餓」左邊是食。', parts: ['我', '鳥'], story: '左邊的「我」念起來像「鵝」，右邊是「鳥」。脖子長長、會在水裡游的大鳥，就是「鵝」。', sentence: '湖上有兩隻白天鵝在游泳。', build: { layout: 'lr', show: ['我', '？'], answer: '鳥', options: ['鳥', '馬', '食', '女'], clue: '想一想：鵝是一種會游水的禽類，右邊是什麼？' } },
      { id: 'h-念', combo: { layout: 'tb', parts: [['今', 's', ''], ['心', 'm', '心裡想']] }, char: '念', zhuyin: 'ㄋㄧㄢˋ', radical: '心', strokes: 8, words: ['想念', '念書', '念詩'], say: '念，想念的念', cloze: '想＿', img: 'miss-grandma.png', options: ['念', '今', '含', '怎'], clue: '這個字的上面是「今」，下面是「心」。', explain: '答案是「念」；「含」下面是口，「怎」上面是乍。', parts: ['今', '心'], story: '上面的「今」念起來像「念」，下面是「心」。心裡一直想著，就是「想念」。把字讀出來，也叫「念」。', sentence: '我好想念外婆。', build: { layout: 'tb', show: ['今', '？'], answer: '心', options: ['心', '口', '木', '日'], clue: '想一想：一直想著一個人，用的是胸口裡的什麼？' } },
      { id: 'h-曲', combo: { type: '象形字', pict: '「曲」像一個彎彎的竹籃子。' }, char: '曲', zhuyin: 'ㄑㄩ', radical: '曰', strokes: 6, words: ['彎曲', '曲項'], say: '曲，彎曲的曲', cloze: '彎＿', img: 'bent-road.png', options: ['曲', '由', '田', '典'], clue: '這個字的中間有兩豎出頭，像彎彎的竹籃。', explain: '答案是「曲」；「由」只有中間一豎出頭，「田」沒有出頭。', parts: ['曲'], story: '「曲」像一個彎彎的竹籃子。不是直直的，就叫「彎曲」。', sentence: '山上的小路彎彎曲曲。' },
      { id: 'h-項', combo: { layout: 'lr', parts: [['工', 's', ''], ['頁', 'm', '頭']] }, char: '項', zhuyin: 'ㄒㄧㄤˋ', radical: '頁', strokes: 12, words: ['項鍊', '曲項', '項目'], say: '項，項鍊的項', cloze: '＿鍊', img: 'necklace.png', options: ['項', '頂', '須', '頁'], clue: '這個字的左邊是「工」，右邊是「頁」。', explain: '答案是「項」；「頂」左邊是丁，「須」左邊是三撇。', parts: ['工', '頁'], story: '右邊的「頁」是頭，左邊的「工」念起來有點像「項」。頭下面的脖子，古時候叫「項」。掛在脖子上的裝飾，叫做「項鍊」。', sentence: '媽媽戴著一條珍珠項鍊。', build: { layout: 'lr', show: ['工', '？'], answer: '頁', options: ['頁', '力', '見', '又'], clue: '想一想：脖子在頭的下面，右邊是表示「頭」的部件。' } },
      { id: 'h-浮', combo: { layout: 'lr', parts: [['氵', 'm', '水'], ['孚', 's', '']] }, char: '浮', zhuyin: 'ㄈㄨˊ', radical: '水', strokes: 10, words: ['浮板', '浮起來', '漂浮'], say: '浮，浮板的浮', cloze: '＿板', img: 'kickboard.png', options: ['浮', '俘', '乳', '淨'], clue: '這個字的左邊是三點水，右邊是「孚」。', explain: '答案是「浮」；「俘」左邊是單人旁，「淨」右邊是爭。', parts: ['氵', '孚'], story: '左邊是水，右邊的「孚」念起來像「浮」。東西在水面上，不會沉下去，就是「浮」。', sentence: '我抱著浮板練習踢水。', build: { layout: 'lr', show: ['？', '孚'], answer: '氵', options: ['氵', '亻', '扌', '木'], clue: '想一想：在水面上不沉下去，左邊和什麼有關？' } },
      { id: 'h-掌', combo: { layout: 'tb', parts: [['尚', 's', ''], ['手', 'm', '手']] }, char: '掌', zhuyin: 'ㄓㄤˇ', radical: '手', strokes: 12, words: ['鼓掌', '手掌', '腳掌'], say: '掌，鼓掌的掌', cloze: '鼓＿', img: 'clapping.png', options: ['掌', '堂', '賞', '當'], clue: '這個字的上面是「尚」，下面是「手」。', explain: '答案是「掌」；「堂」下面是土，「賞」下面是貝。', parts: ['尚', '手'], story: '上面的「尚」念起來有點像「掌」，下面是「手」。手心那一面，叫做「手掌」。拍手叫好，叫做「鼓掌」。', sentence: '表演結束，大家用力鼓掌。', build: { layout: 'tb', show: ['尚', '？'], answer: '手', options: ['手', '土', '貝', '田'], clue: '想一想：鼓掌時拍的是身體哪裡？下面就是那個部件。' } },
      { id: 'h-撥', combo: { layout: 'lr', parts: [['扌', 'm', '手'], ['發', 's', '']] }, char: '撥', zhuyin: 'ㄅㄛ', radical: '手', strokes: 15, words: ['撥開', '撥水', '撥電話'], say: '撥，撥開的撥', cloze: '＿開', img: 'part-grass.png', options: ['撥', '潑', '發', '廢'], clue: '這個字的左邊是提手旁，右邊是「發」。', explain: '答案是「撥」；「潑」左邊是三點水，「發」少了左邊。', parts: ['扌', '發'], story: '左邊是提手旁，右邊的「發」念起來有點像「撥」。用手把東西往兩邊推開，就是「撥」。', sentence: '小兔子撥開草叢，跳了出來。', build: { layout: 'lr', show: ['？', '發'], answer: '扌', options: ['扌', '氵', '口', '木'], clue: '想一想：把東西推開要用什麼？' } },
      { id: 'h-波', combo: { layout: 'lr', parts: [['氵', 'm', '水'], ['皮', 's', '']] }, char: '波', zhuyin: 'ㄅㄛ', radical: '水', strokes: 8, words: ['波浪', '清波', '電波'], say: '波，波浪的波', cloze: '＿浪', img: 'waves.png', options: ['波', '皮', '坡', '破'], clue: '這個字的左邊是三點水，右邊是「皮」。', explain: '答案是「波」；「坡」左邊是土，「破」左邊是石。', parts: ['氵', '皮'], story: '左邊是水，右邊的「皮」念起來像「波」。水面上一起一伏，像水的皮膚在動，就是「波浪」。', sentence: '海上的波浪一陣一陣打過來。', build: { layout: 'lr', show: ['？', '皮'], answer: '氵', options: ['氵', '土', '石', '扌'], clue: '想一想：海上一起一伏的是什麼？左邊和它有關。' } },
      { id: 'h-詩', combo: { layout: 'lr', parts: [['言', 'm', '說話'], ['寺', 's', '']] }, char: '詩', zhuyin: 'ㄕ', radical: '言', strokes: 13, words: ['詩人', '童詩', '念詩'], say: '詩，詩人的詩', cloze: '＿人', img: 'poet-kid.png', options: ['詩', '時', '持', '特'], clue: '這個字的左邊是言字旁，右邊是「寺」。', explain: '答案是「詩」；「時」左邊是日，「持」左邊是提手旁。', parts: ['言', '寺'], story: '左邊是「言」，右邊的「寺」念起來有點像「詩」。用很美、很短的話說出心裡的感覺，就是「詩」。', sentence: '弟弟寫了一首童詩送給媽媽。', build: { layout: 'lr', show: ['？', '寺'], answer: '言', options: ['言', '日', '扌', '牛'], clue: '想一想：作品要用說的、念的，左邊是什麼？' } },
      { id: 'h-作', combo: { layout: 'lr', parts: [['亻', 'm', '人'], ['乍', 's', '']] }, char: '作', zhuyin: 'ㄗㄨㄛˋ', radical: '人', strokes: 7, words: ['作業', '工作', '作詩'], say: '作，作業的作', cloze: '＿業', img: 'homework.png', options: ['作', '怎', '昨', '炸'], clue: '這個字的左邊是單人旁，右邊是「乍」。', explain: '答案是「作」；「昨」左邊是日，「炸」左邊是火。', parts: ['亻', '乍'], story: '左邊是單人旁，右邊的「乍」念起來像「作」。人動手做事情，就是「作」。老師要我們回家寫的功課，叫做「作業」。', sentence: '我寫完作業就去玩。', build: { layout: 'lr', show: ['？', '乍'], answer: '亻', options: ['亻', '日', '火', '心'], clue: '想一想：做事情的是誰？左邊和人有關。' } },
      { id: 'h-首', combo: { type: '象形字', pict: '「首」像一個人的頭，上面兩點是頭髮。' }, char: '首', zhuyin: 'ㄕㄡˇ', radical: '首', strokes: 9, words: ['首先', '一首詩', '首都'], say: '首，首先的首', cloze: '＿先', img: 'first-in-line.png', options: ['首', '道', '頁', '自'], clue: '這個字的上面有兩點和一橫，下面是「自」。', explain: '答案是「首」；「道」外面多了辶，「自」少了上面。', parts: ['首'], story: '「首」像一個人的頭，上面兩點是頭髮。頭在最上面，所以最先的叫「首先」。詩也用「首」來算。', sentence: '首先，我們要把手洗乾淨。' },
      { id: 'h-歲', combo: { type: '形聲字', pict: '上面是「止」，下面像古時候的一把大斧頭。' }, char: '歲', zhuyin: 'ㄙㄨㄟˋ', radical: '止', strokes: 13, words: ['七歲', '壓歲錢', '歲數'], say: '歲，七歲的歲', cloze: '壓＿錢', img: 'red-envelope.png', options: ['歲', '威', '滅', '咸'], clue: '這個字的上面是「止」，下面和「威」有點像。', explain: '答案是「歲」；「威」上面沒有止，「咸」裡面是口。', parts: ['止', '戌', '小'], story: '「歲」上面是止，下面像古時候的大斧頭。一年一年過去，年紀就多一歲。過年拿的紅包，叫「壓歲錢」。', sentence: '過年時，奶奶給我壓歲錢。' },
      { id: 'h-指', combo: { layout: 'lr', parts: [['扌', 'm', '手'], ['旨', 's', '']] }, char: '指', zhuyin: 'ㄓˇ', radical: '手', strokes: 9, words: ['指甲', '手指', '指著'], say: '指，手指的指', cloze: '＿甲', img: 'nail-cut.png', options: ['指', '脂', '旨', '招'], clue: '這個字的左邊是提手旁，右邊是「旨」。', explain: '答案是「指」；「脂」左邊是月，「招」右邊是召。', parts: ['扌', '旨'], story: '左邊是提手旁，右邊的「旨」念起來像「指」。手上一根一根的，就是「手指」。用手指對著東西，叫「指著」。', sentence: '媽媽幫我剪指甲。', build: { layout: 'lr', show: ['？', '旨'], answer: '扌', options: ['扌', '月', '口', '木'], clue: '想一想：手指長在哪裡？左邊就是那個部首。' } },
      { id: 'h-伸', combo: { layout: 'lr', parts: [['亻', 'm', '人'], ['申', 's', '']] }, char: '伸', zhuyin: 'ㄕㄣ', radical: '人', strokes: 7, words: ['伸手', '伸長', '伸懶腰'], say: '伸，伸手的伸', cloze: '＿手', img: 'reach-hand.png', options: ['伸', '神', '坤', '申'], clue: '這個字的左邊是單人旁，右邊是「申」。', explain: '答案是「伸」；「神」左邊是示字旁，「申」少了左邊。', parts: ['亻', '申'], story: '左邊是單人旁，右邊的「申」念起來像「伸」。人把手腳拉得長長的，就是「伸」。', sentence: '早上起床，我伸了一個懶腰。', build: { layout: 'lr', show: ['？', '申'], answer: '亻', options: ['亻', '礻', '土', '口'], clue: '想一想：伸懶腰的是誰？左邊和人有關。' } },
      { id: 'h-脖', combo: { layout: 'lr', parts: [['月', 'm', '身體'], ['孛', 's', '']] }, char: '脖', zhuyin: 'ㄅㄛˊ', radical: '肉', strokes: 11, words: ['脖子', '長脖子'], say: '脖，脖子的脖', cloze: '＿子', img: 'giraffe-neck.png', options: ['脖', '勃', '悖', '孛'], clue: '這個字的左邊是肉字旁「月」，右邊是「孛」。', explain: '答案是「脖」；「勃」右邊是力，「孛」少了左邊。', parts: ['月', '孛'], story: '左邊的「月」是肉，表示身體；右邊念起來像「脖」。頭和身體中間的部分，就是「脖子」。', sentence: '長頸鹿的脖子好長。', build: { layout: 'lr', show: ['？', '孛'], answer: '月', options: ['月', '力', '扌', '木'], clue: '想一想：脖子是身體的一部分，左邊和肉有關。' } },
      { id: 'h-身', combo: { type: '象形字', pict: '「身」像一個挺著大肚子的人側著站。' }, char: '身', zhuyin: 'ㄕㄣ', radical: '身', strokes: 7, words: ['轉身', '身體', '身上'], say: '身，身體的身', cloze: '轉＿', img: 'turn-around.png', options: ['身', '射', '耳', '自'], clue: '這個字像一個挺著肚子的人側著站。', explain: '答案是「身」；「射」右邊多了寸，「耳」是耳朵的耳。', parts: ['身'], story: '「身」像一個挺著大肚子的人側著站。從頭到腳整個人，就是「身體」。', sentence: '聽到有人叫我，我馬上轉身。' },
      { id: 'h-體', combo: { layout: 'lr', parts: [['骨', 'm', '骨頭'], ['豊', 's', '']] }, char: '體', zhuyin: 'ㄊㄧˇ', radical: '骨', strokes: 23, words: ['體育', '身體', '體重'], say: '體，身體的體', cloze: '＿育', img: 'pe-class.png', options: ['體', '禮', '骨', '豐'], clue: '這個字的左邊是「骨」，右邊是「豊」。', explain: '答案是「體」；「禮」左邊是示字旁，「骨」少了右邊。', parts: ['骨', '豊'], story: '左邊的「骨」是骨頭，右邊念起來有點像「體」。有骨頭、有肉的整個人，就是「身體」。', sentence: '我最喜歡上體育課。', build: { layout: 'lr', show: ['？', '豊'], answer: '骨', options: ['骨', '礻', '山', '月'], clue: '想一想：身體裡硬硬的、撐住我們的是什麼？' } },
      { id: 'h-隻', combo: { layout: 'tb', type: '會意字', parts: [['隹', 'm', '鳥'], ['又', 'm', '手']] }, char: '隻', zhuyin: 'ㄓ', radical: '隹', strokes: 10, words: ['一隻', '兩隻', '船隻'], say: '隻，一隻的隻', cloze: '一＿', img: 'one-bird.png', options: ['隻', '雙', '售', '集'], clue: '這個字的上面是「隹」，下面是表示手的「又」。', explain: '答案是「隻」；「雙」上面有兩個隹，「售」下面是口。', parts: ['隹', '又'], story: '上面的「隹」是鳥，下面的「又」是手。手裡抓著一隻鳥，就是「隻」。算動物可以說「一隻」。', sentence: '樹上有一隻小鳥在唱歌。', build: { layout: 'tb', show: ['隹', '？'], answer: '又', options: ['又', '口', '木', '心'], clue: '想一想：手裡抓著鳥，下面是表示手的部件。' } },
      { id: 'h-倒', combo: { layout: 'lr', parts: [['亻', 'm', '人'], ['到', 's', '']] }, char: '倒', zhuyin: 'ㄉㄠˋ', radical: '人', strokes: 10, words: ['倒立', '倒水', '跌倒'], say: '倒，倒立的倒', cloze: '＿立', img: 'handstand.png', options: ['倒', '到', '例', '側'], clue: '這個字的左邊是單人旁，右邊是「到」。', explain: '答案是「倒」；「到」少了單人旁，「例」右邊是列。', parts: ['亻', '到'], story: '左邊是單人旁，右邊的「到」念起來像「倒」。人頭下腳上，就是「倒立」。', sentence: '哥哥會用雙手倒立。', build: { layout: 'lr', show: ['？', '到'], answer: '亻', options: ['亻', '扌', '木', '口'], clue: '想一想：頭下腳上的是誰？左邊和人有關。' } },
      { id: 'h-肚', combo: { layout: 'lr', parts: [['月', 'm', '身體'], ['土', 's', '']] }, char: '肚', zhuyin: 'ㄉㄨˋ', radical: '肉', strokes: 7, words: ['肚皮', '肚子', '肚臍'], say: '肚，肚子的肚', cloze: '＿皮', img: 'frog-belly.png', options: ['肚', '杜', '吐', '社'], clue: '這個字的左邊是肉字旁「月」，右邊是「土」。', explain: '答案是「肚」；「杜」左邊是木，「吐」左邊是口。', parts: ['月', '土'], story: '左邊的「月」是肉，右邊的「土」念起來有點像「肚」。身體前面、裝食物的地方，就是「肚子」。', sentence: '青蛙鼓起白白的肚皮。', build: { layout: 'lr', show: ['？', '土'], answer: '月', options: ['月', '木', '口', '扌'], clue: '想一想：肚子是身體的一部分，左邊和肉有關。' } }
    ],
    vocab: [
      { id: 'v-散步', word: '散步', meaning: '輕鬆的慢慢走路。', example: '吃完晚飯，我們去公園＿＿。', img: 'family-walk.png', options: ['散步', '倒立', '伸長', '指著'] },
      { id: 'v-白鵝', word: '白鵝', meaning: '全身白白、脖子長長、會游水的大鳥。', example: '池塘裡有一隻＿＿在游水。', img: 'white-goose.png', options: ['白鵝', '肚皮', '腳掌', '身體'] },
      { id: 'v-詩人', word: '詩人', meaning: '會寫詩的人。', example: '這位＿＿寫了很多好聽的詩。', img: 'poet-kid.png', options: ['詩人', '白鵝', '肚皮', '腳掌'] },
      { id: 'v-指著', word: '指著', meaning: '用手指對著東西。', example: '弟弟＿＿天上的飛機大叫。', img: 'point-plane.png', options: ['指著', '散步', '倒立', '接著'] },
      { id: 'v-伸長', word: '伸長', meaning: '把身體的一部分拉得長長的。', example: '長頸鹿＿＿脖子吃樹葉。', img: 'giraffe-neck.png', options: ['伸長', '散步', '變成', '指著'] },
      { id: 'v-脖子', word: '脖子', meaning: '頭和身體中間的部分。', example: '天氣冷，我用圍巾圍住＿＿。', img: 'scarf.png', options: ['脖子', '肚皮', '白鵝', '詩人'] },
      { id: 'v-身體', word: '身體', meaning: '從頭到腳整個人或整隻動物。', example: '多運動，＿＿會更健康。', img: 'pe-class.png', options: ['身體', '脖子', '詩人', '腳掌'] },
      { id: 'v-浮', word: '浮', meaning: '在水面上，不會沉下去。', example: '樹葉＿在水面上。', img: 'leaf-float.png', options: ['浮', '撥', '念', '伸'] },
      { id: 'v-腳掌', word: '腳掌', meaning: '腳底下踩地的那一面。', example: '小鴨用＿＿在水裡划。', img: 'duck-feet.png', options: ['腳掌', '脖子', '詩人', '白鵝'] },
      { id: 'v-撥', word: '撥', meaning: '用手或腳往旁邊推開。', example: '小鴨用腳＿著水，往前游。', img: 'duck-feet.png', options: ['撥', '浮', '念', '倒'] },
      { id: 'v-翻跟頭', word: '翻跟頭', meaning: '頭往下、腳往上，身體翻一圈。', example: '體操選手在墊子上＿＿＿。', img: 'somersault.png', options: ['翻跟頭', '伸懶腰', '問東西', '散散步'] },
      { id: 'v-倒立', word: '倒立', meaning: '頭在下面，腳在上面，用手撐住。', example: '哥哥靠著牆＿＿。', img: 'handstand.png', options: ['倒立', '散步', '指著', '伸長'] },
      { id: 'v-接著', word: '接著', meaning: '緊跟著前面的事，再做下一件。', example: '我先刷牙，＿＿洗臉。', img: 'brush-then-wash.png', options: ['接著', '倒立', '散步', '伸長'] },
      { id: 'v-變成', word: '變成', meaning: '從原來的樣子，換成另一個樣子。', example: '毛毛蟲長大，＿＿了蝴蝶。', img: 'butterfly-change.png', options: ['變成', '散步', '指著', '倒立'] }
    ],
    charwords: [
      { id: 'cw-鵝', char: '鵝', img: 'penguin.png', word: '企鵝', charMeaning: '一種會游水的大鳥。', meaning: '住在冷冷的地方、黑白色、走路搖搖擺擺的鳥。', example: '動物園的＿＿在冰上走來走去。', options: ['企鵝', '想念', '作業', '首先'] },
      { id: 'cw-念', char: '念', img: 'read-aloud2.png', word: '念書', charMeaning: '想著；讀出來。', meaning: '讀書、學習。', example: '哥哥在房間裡＿＿。', options: ['念書', '企鵝', '彎曲', '浮板'] },
      { id: 'cw-曲', char: '曲', img: 'bent-road.png', word: '彎曲', charMeaning: '彎彎的，不直。', meaning: '彎彎的，不是直直的。', example: '這條小河＿＿的流過山谷。', options: ['彎曲', '念書', '手掌', '項鍊'] },
      { id: 'cw-項', char: '項', img: 'necklace.png', word: '項鍊', charMeaning: '脖子。', meaning: '掛在脖子上的裝飾。', example: '姐姐戴上漂亮的＿＿。', options: ['項鍊', '彎曲', '浮板', '波浪'] },
      { id: 'cw-浮', char: '浮', img: 'kickboard.png', word: '浮板', charMeaning: '在水面上不沉下去。', meaning: '游泳時抱著、可以浮在水上的板子。', example: '我抱著＿＿學游泳。', options: ['浮板', '項鍊', '手掌', '詩人'] },
      { id: 'cw-掌', char: '掌', img: 'hand-print.png', word: '手掌', charMeaning: '手心或腳底的那一面。', meaning: '手心和手指那一面。', example: '我把＿＿印在圖畫紙上。', options: ['手掌', '浮板', '波浪', '作業'] },
      { id: 'cw-撥', char: '撥', img: 'phone-call.png', word: '撥電話', charMeaning: '用手推開或轉動。', meaning: '按下號碼打電話。', example: '我＿＿＿給爺爺說生日快樂。', options: ['撥電話', '壓歲錢', '伸懶腰', '長脖子'] },
      { id: 'cw-波', char: '波', img: 'waves.png', word: '波浪', charMeaning: '水面一起一伏的樣子。', meaning: '水面上一起一伏的水。', example: '海上的＿＿好大。', options: ['波浪', '手掌', '詩人', '首先'] },
      { id: 'cw-詩', char: '詩', img: 'poem-book.png', word: '童詩', charMeaning: '用短短美美的句子寫的作品。', meaning: '寫給小朋友看、念的詩。', example: '老師教我們念一首＿＿。', options: ['童詩', '波浪', '指甲', '轉身'] },
      { id: 'cw-作', char: '作', img: 'dad-work.png', word: '工作', charMeaning: '做事情。', meaning: '大人每天做的事、上的班。', example: '爸爸每天早上出門去＿＿。', options: ['工作', '童詩', '轉身', '體育'] },
      { id: 'cw-首', char: '首', img: 'first-in-line.png', word: '首先', charMeaning: '頭；最前面的。', meaning: '最先、第一個。', example: '＿＿，請大家把課本打開。', options: ['首先', '工作', '指甲', '一隻'] },
      { id: 'cw-歲', char: '歲', img: 'birthday-cake.png', word: '七歲', charMeaning: '算年紀的單位。', meaning: '出生以後過了七年。', example: '妹妹今年＿＿了。', options: ['七歲', '首先', '體育', '倒立'] },
      { id: 'cw-指', char: '指', img: 'nail-cut.png', word: '指甲', charMeaning: '手指。', meaning: '手指、腳趾前端硬硬的部分。', example: '＿＿太長了，要剪短。', options: ['指甲', '七歲', '一隻', '肚皮'] },
      { id: 'cw-伸', char: '伸', img: 'stretch.png', word: '伸懶腰', charMeaning: '拉長。', meaning: '把手往上拉，身體拉得長長的。', example: '小貓睡醒，＿＿＿。', options: ['伸懶腰', '撥電話', '壓歲錢', '長脖子'] },
      { id: 'cw-脖', char: '脖', img: 'giraffe-neck.png', word: '長脖子', charMeaning: '頭和身體中間。', meaning: '長長的脖子。', example: '長頸鹿有一條＿＿＿。', options: ['長脖子', '伸懶腰', '撥電話', '壓歲錢'] },
      { id: 'cw-身', char: '身', img: 'turn-around.png', word: '轉身', charMeaning: '身體。', meaning: '把身體轉過去。', example: '我＿＿看看後面是誰。', options: ['轉身', '指甲', '一隻', '倒立'] },
      { id: 'cw-體', char: '體', img: 'pe-class.png', word: '體育', charMeaning: '身體。', meaning: '讓身體健康的運動課。', example: '今天的＿＿課要跑步。', options: ['體育', '轉身', '肚皮', '首先'] },
      { id: 'cw-隻', char: '隻', img: 'one-bird.png', word: '一隻', charMeaning: '算動物的單位。', meaning: '用來算動物的數量。', example: '院子裡有＿＿小狗。', options: ['一隻', '體育', '轉身', '工作'] },
      { id: 'cw-倒', char: '倒', img: 'pour-water.png', word: '倒水', charMeaning: '頭下腳上；讓東西流出來。', meaning: '把水從瓶子流到杯子裡。', example: '我幫奶奶＿＿。', options: ['倒水', '一隻', '指甲', '體育'] },
      { id: 'cw-肚', char: '肚', img: 'full-belly.png', word: '肚子', charMeaning: '身體前面裝食物的地方。', meaning: '身體前面、胃在的地方。', example: '吃太多了，＿＿好撐。', options: ['肚子', '倒水', '首先', '工作'] }
    ],
    fix: [
      { id: 'fx-鵝', char: '鵝', wrong: '餓', sentence: '公園的池塘裡有白鵝。', options: ['鵝', '餓', '鴨'], clue: '會游水的大鳥，右邊要是「鳥」。', explain: '要改成「鵝」。白鵝的鵝右邊是鳥；「餓」左邊是食，是肚子餓的餓。' },
      { id: 'fx-念', char: '念', wrong: '今', sentence: '我很想念遠方的好朋友。', options: ['念', '今', '含'], clue: '心裡一直想著，下面要有心。', explain: '要改成「念」。想念的念下面是心；「今」是今天的今。' },
      { id: 'fx-浮', char: '浮', wrong: '俘', sentence: '樹葉在水面上浮著。', options: ['浮', '俘', '淨'], clue: '在水上不沉，左邊要是三點水。', explain: '要改成「浮」。浮的左邊是三點水；「俘」左邊是單人旁。' },
      { id: 'fx-掌', char: '掌', wrong: '堂', sentence: '大家為他熱烈的鼓掌。', options: ['掌', '堂', '賞'], clue: '拍手的意思，下面要是「手」。', explain: '要改成「掌」。鼓掌的掌下面是手；「堂」下面是土，是教堂的堂。' },
      { id: 'fx-撥', char: '撥', wrong: '潑', sentence: '我撥開長長的草，找到一隻蟋蟀。', options: ['撥', '潑', '發'], clue: '用手推開，左邊要是提手旁。', explain: '要改成「撥」。撥開的撥左邊是提手旁；「潑」左邊是三點水，是潑水的潑。' },
      { id: 'fx-波', char: '波', wrong: '坡', sentence: '湖面上有一圈一圈的水波。', options: ['波', '坡', '破'], clue: '水面一起一伏，左邊要是三點水。', explain: '要改成「波」。水波的波左邊是三點水；「坡」左邊是土，是山坡的坡。' },
      { id: 'fx-詩', char: '詩', wrong: '時', sentence: '老師教我們背一首詩。', options: ['詩', '時', '特'], clue: '用說的、念的作品，左邊要是言。', explain: '要改成「詩」。詩的左邊是言；「時」左邊是日，是時間的時。' },
      { id: 'fx-歲', char: '歲', wrong: '威', sentence: '我的妹妹今年五歲。', options: ['歲', '威', '咸'], clue: '算年紀的字，上面要有「止」。', explain: '要改成「歲」。歲的上面是止；「威」上面沒有止。' },
      { id: 'fx-指', char: '指', wrong: '招', sentence: '弟弟用手指著天上的月亮。', options: ['指', '招', '脂'], clue: '用手對著東西，右邊要是「旨」。', explain: '要改成「指」。指著的指右邊是旨；「招」右邊是召，是招手的招。' },
      { id: 'fx-伸', char: '伸', wrong: '神', sentence: '小烏龜慢慢伸出頭來。', options: ['伸', '神', '申'], clue: '把頭或手拉長，左邊要是單人旁。', explain: '要改成「伸」。伸出的伸左邊是單人旁；「神」左邊是示字旁。' },
      { id: 'fx-隻', char: '隻', wrong: '雙', sentence: '草地上有一隻小白兔。', options: ['隻', '雙', '售'], clue: '只有一個，上面只能有一個「隹」。', explain: '要改成「隻」。一隻的隻上面只有一個隹；「雙」上面有兩個，是一雙的雙。' },
      { id: 'fx-肚', char: '肚', wrong: '杜', sentence: '我吃得好飽，肚子圓滾滾。', options: ['肚', '杜', '吐'], clue: '身體裝食物的地方，左邊要是肉字旁。', explain: '要改成「肚」。肚子的肚左邊是月（肉）；「杜」左邊是木。' }
    ],
    similar: [
      { id: 's1', meaning: '「＿開」是用手往旁邊推開。', sentence: '小狗用腳＿開地上的落葉。', frame: '＿開', options: ['撥', '潑'], answer: '撥', clue: '提示：要用手，左邊是提手旁。', explain: '答案是「撥」；「潑」是潑水的潑，左邊是三點水。' },
      { id: 's2', meaning: '「＿水」是把水往外灑出去。', sentence: '過節的時候，大家互相＿水。', frame: '＿水', options: ['潑', '撥'], answer: '潑', clue: '提示：和水有關，左邊是三點水。', explain: '答案是「潑」；「撥」是撥開的撥。' },
      { id: 's3', meaning: '「水＿」是水面一起一伏的樣子。', sentence: '小石頭丟進湖裡，湖面起了水＿。', frame: '水＿', options: ['波', '坡'], answer: '波', clue: '提示：和水有關，左邊是三點水。', explain: '答案是「波」；「坡」是山坡的坡，左邊是土。' },
      { id: 's4', meaning: '「山＿」是山上斜斜的地方。', sentence: '我們騎腳踏車爬上山＿。', frame: '山＿', options: ['坡', '波'], answer: '坡', clue: '提示：和土地有關，左邊是土。', explain: '答案是「坡」；「波」是波浪的波。' },
      { id: 's5', meaning: '「童＿」是寫給小朋友的短短作品。', sentence: '我寫了一首童＿。', frame: '童＿', options: ['詩', '時'], answer: '詩', clue: '提示：要用說的、念的，左邊是言。', explain: '答案是「詩」；「時」是時間的時，左邊是日。' },
      { id: 's6', meaning: '「＿間」是幾點幾分。', sentence: '上課的＿間到了。', frame: '＿間', options: ['時', '詩'], answer: '時', clue: '提示：和太陽有關，左邊是日。', explain: '答案是「時」；「詩」是童詩的詩。' },
      { id: 's7', meaning: '「一＿」是用來算一個動物。', sentence: '樹上停著一＿麻雀。', frame: '一＿', options: ['隻', '雙'], answer: '隻', clue: '提示：上面只有一個「隹」。', explain: '答案是「隻」；「雙」上面有兩個隹。' },
      { id: 's8', meaning: '「一＿」是用來算兩個成對的東西，像鞋子。', sentence: '媽媽幫我買了一＿新鞋。', frame: '一＿', options: ['雙', '隻'], answer: '雙', clue: '提示：上面有兩個「隹」。', explain: '答案是「雙」；「隻」是一隻小鳥的隻。' }
    ],
    listen: [
      { id: 'l1', text: '吃完晚飯，一家人慢慢走一走。', answer: 0, options: [{ text: '散步', img: 'family-walk.png' }, { text: '倒立', img: 'handstand.png' }, { text: '鼓掌', img: 'clapping.png' }, { text: '浮板', img: 'kickboard.png' }] },
      { id: 'l2', text: '頭在下面，腳在上面，用手撐著。', answer: 0, options: [{ text: '倒立', img: 'handstand.png' }, { text: '散步', img: 'family-walk.png' }, { text: '轉身', img: 'turn-around.png' }, { text: '項鍊', img: 'necklace.png' }] },
      { id: 'l3', text: '頭往下、腳往上，身體翻了一圈。', answer: 0, options: [{ text: '翻跟頭', img: 'somersault.png' }, { text: '伸懶腰', img: 'stretch.png' }, { text: '指甲', img: 'nail-cut.png' }, { text: '波浪', img: 'waves.png' }] },
      { id: 'l4', text: '表演結束，大家拍手叫好。', answer: 0, options: [{ text: '鼓掌', img: 'clapping.png' }, { text: '倒水', img: 'pour-water.png' }, { text: '一隻', img: 'one-bird.png' }, { text: '天鵝', img: 'swan.png' }] },
      { id: 'l5', text: '游泳時抱著它，就不會沉下去。', answer: 0, options: [{ text: '浮板', img: 'kickboard.png' }, { text: '項鍊', img: 'necklace.png' }, { text: '童詩', img: 'poem-book.png' }, { text: '肚子', img: 'full-belly.png' }] },
      { id: 'l6', text: '長頸鹿把這裡伸得長長的，吃到高高的樹葉。', answer: 0, options: [{ text: '脖子', img: 'giraffe-neck.png' }, { text: '肚子', img: 'full-belly.png' }, { text: '指甲', img: 'nail-cut.png' }, { text: '手掌', img: 'hand-print.png' }] },
      { id: 'l7', text: '睡醒了，把手往上拉，身體拉得長長的。', answer: 0, options: [{ text: '伸懶腰', img: 'stretch.png' }, { text: '翻跟頭', img: 'somersault.png' }, { text: '散步', img: 'family-walk.png' }, { text: '倒水', img: 'pour-water.png' }] },
      { id: 'l8', text: '過年時，長輩給小朋友的紅包。', answer: 0, options: [{ text: '壓歲錢', img: 'red-envelope.png' }, { text: '項鍊', img: 'necklace.png' }, { text: '浮板', img: 'kickboard.png' }, { text: '企鵝', img: 'penguin.png' }] }
    ],
    phrase: {
      pickName: '看圖選一選',
      pickSay: '看圖，選出最適合的疊字，說說看圖裡的人怎麼做。',
      intro: { example: '輕輕摸著小狗', img: 'pr-pet-dog.png', parts: [{ text: '輕輕', role: '怎麼做' }, { text: '摸', role: '動作' }, { text: '著' }, { text: '小狗', role: '什麼東西' }],
        explain: '先用疊字說怎麼做，像「輕輕」，再說動作，加上「著」，最後說是什麼東西。疊字讓動作更清楚。' },
      pick: [
        { id: 'ph1', img: 'pr-pat-baby.png', before: '', join: '', noun: '拍著寶寶', ask: '怎麼樣拍著寶寶', look: '再看看圖片，寶寶快睡著了，媽媽的手怎麼動？', options: ['輕輕', '重重', '亂亂', '急急'], clue: '提示：她的手小小力的，怕把寶寶吵醒。', explain: '答案是「輕輕」，完整的短語是「輕輕拍著寶寶」。' },
        { id: 'ph2', img: 'pr-lick-ice.png', before: '', join: '', noun: '舔著冰淇淋', ask: '怎麼樣舔著冰淇淋', look: '再看看圖片，小男孩吃冰淇淋，是急著吃完嗎？', options: ['慢慢', '快快', '重重', '亂亂'], clue: '提示：他一小口一小口的舔，不急著吃完。', explain: '答案是「慢慢」，完整的短語是「慢慢舔著冰淇淋」。' },
        { id: 'ph3', img: 'pr-listen-story.png', before: '', join: '', noun: '聽著故事', ask: '怎麼樣聽著故事', look: '再看看圖片，老師在說故事，小朋友有沒有說話？', options: ['靜靜', '吵吵', '急急', '重重'], clue: '提示：大家都閉上嘴巴，認真的聽老師說。', explain: '答案是「靜靜」，完整的短語是「靜靜聽著故事」。' },
        { id: 'ph4', img: 'pr-hug-bear.png', before: '', join: '', noun: '抱著小熊', ask: '怎麼樣抱著小熊', look: '再看看圖片，妹妹抱著小熊，手有沒有放開？', options: ['緊緊', '亂亂', '吵吵', '急急'], clue: '提示：她用雙手抱得好用力，一點都捨不得放開。', explain: '答案是「緊緊」，完整的短語是「緊緊抱著小熊」。' }
      ],
      fill: [
        { id: 'pf1', img: 'pr-pat-baby.png', parts: ['輕輕', '拍', '著', '寶寶'] },
        { id: 'pf2', img: 'pr-lick-ice.png', parts: ['慢慢', '舔', '著', '冰淇淋'] },
        { id: 'pf3', img: 'pr-listen-story.png', parts: ['靜靜', '聽', '著', '故事'] },
        { id: 'pf4', img: 'pr-hug-bear.png', parts: ['緊緊', '抱', '著', '小熊'] }
      ],
      say: [],
      words: [{ word: '變成', meaning: '從原來的樣子，換成另一個樣子。', img: 'butterfly-change.png' }],
      choose: [
        { id: 'pw1', word: '變成', options: ['妹妹煮了一桌好菜，變成小廚師了！', '我每天變成走路去上學。'], clue: '提示：想一想，「變成」是說樣子、身分換了，還是說平常怎麼做？', explain: '第一句用得對：妹妹會煮菜，好像有了新身分。每天走路上學沒有變化，不能說變成。' }
      ],
      make: [
        { id: 'pm1', word: '變成', clue: '提示：想想看，有誰學會了一件本領，好像有了新的身分？', model: '弟弟每天練習跑步，變成跑步小高手了！' }
      ],
      phrase2: {
        intro: { example: '小鳥站在樹枝上', img: 'pz-bird-branch.png', parts: [{ text: '小鳥', role: '誰' }, { text: '站', role: '動作' }, { text: '在' }, { text: '樹枝上', role: '什麼地方' }],
          explain: '先說是誰，再說動作，加上「在」，最後說是在什麼地方。這樣就知道他在哪裡、在做什麼。' },
        pick: [
          { id: 'p2-pz1', img: 'pz-cat-sofa.png', before: '小貓躺在', join: '', noun: '。', ask: '小貓躺在哪裡', look: '再看看圖片，小貓睡在客廳軟軟的什麼東西上面？', options: ['沙發上', '天空中', '鍋子裡', '水面上'], clue: '提示：那是客廳裡給人坐的、軟軟的椅子。', explain: '答案是「沙發上」，完整的句子是「小貓躺在沙發上」。' },
          { id: 'p2-pz2', img: 'pz-duck-water.png', before: '鴨子浮在', join: '', noun: '。', ask: '鴨子浮在哪裡', look: '再看看圖片，鴨子在池塘的哪裡？', options: ['水面上', '沙發上', '天空中', '鍋子裡'], clue: '提示：牠沒有沉下去，身體露在池塘最頂層。', explain: '答案是「水面上」，完整的句子是「鴨子浮在水面上」。' },
          { id: 'p2-pz3', img: 'pz-kite-sky.png', before: '風箏飛在', join: '', noun: '。', ask: '風箏飛在哪裡', look: '再看看圖片，風箏被風吹到了哪裡？', options: ['天空中', '水面上', '沙發上', '鍋子裡'], clue: '提示：抬頭往高高的地方看，有藍藍的顏色和白雲。', explain: '答案是「天空中」，完整的句子是「風箏飛在天空中」。' }
        ],
        fill: [
          { id: 'pz1', img: 'pz-cat-sofa.png', parts: ['小貓', '躺', '在', '沙發上'] },
          { id: 'pz2', img: 'pz-duck-water.png', parts: ['鴨子', '浮', '在', '水面上'] },
          { id: 'pz3', img: 'pz-kite-sky.png', parts: ['風箏', '飛', '在', '天空中'] }
        ]
      }
    },
    pattern: [
      { key: 'cai2', id: 'cz', title: '……才……', img: 'cai2.png', meaning: '這裡的「才」是「只」、「只有」的意思，說明數量很少、很小。',
        examples: ['小狗來我家的時候，才兩個月大。'],
        match: [
          { id: 'pt-cz-m1', img: 'pt-tiny-cake.png', front: '這塊蛋糕好小，', options: ['才一口就吃完了。', '才變成大象了。', '才會飛上天。'], clue: '提示：看看圖片，蛋糕有多大？', explain: '答案是「才一口就吃完了」：蛋糕很小，只要一口。' },
          { id: 'pt-cz-m2', img: 'pt-young-piano.png', front: '小明開始學鋼琴的時候，', options: ['才五歲呢！', '才一百歲呢！', '才八十歲呢！'], clue: '提示：看看圖片，彈琴的小朋友年紀有多大？', explain: '答案是「才五歲呢」：他學琴的時候年紀很小。' },
          { id: 'pt-cz-m3', img: 'pt-quick-tidy.png', front: '哥哥整理房間，', options: ['才花了十分鐘。', '才吃了三碗飯。', '才唱了一首歌。'], clue: '提示：看看圖片，哥哥手上在做什麼？時鐘上過了多久？', explain: '答案是「才花了十分鐘」：整理房間只用了很短的時間。' }
        ],
        conj: [
          { id: 'pt-cz-c1', full: '小貓來我家的時候才兩個月大。', img: 'pt-kitten.png', sentence: '小貓來我家的時候＿兩個月大。', options: ['……才……', '……接著……', '一……立刻……'], clue: '提示：小貓年紀很小，只有兩個月。數數看有幾個空格。', explain: '答案是「……才……」：小貓來我家的時候才兩個月大。' },
          { id: 'pt-cz-c2', full: '這本書好薄，我才看十分鐘就看完了。', img: 'pt-thin-book.png', sentence: '這本書好薄，我＿看十分鐘就看完了。', options: ['……才……', '……接著……', '一……立刻……'], clue: '提示：只看了很短的時間。數數看有幾個空格。', explain: '答案是「……才……」：這本書好薄，我才看十分鐘就看完了。' },
          { id: 'pt-cz-c3', full: '奶奶包餃子，才一下子就包好一盤。', img: 'pt-dumplings.png', sentence: '奶奶包餃子，＿一下子就包好一盤。', options: ['……才……', '……接著……', '一……立刻……'], clue: '提示：只用了一下子。數數看有幾個空格。', explain: '答案是「……才……」：奶奶包餃子，才一下子就包好一盤。' }
        ],
        half: [
          { id: 'pt-cz-h1', front: '我第一次上學的時候，', clue: '提示：那時候你幾歲？年紀很小，記得要說「才」。', model: '才六歲。' },
          { id: 'pt-cz-h2', front: '這題好簡單，', clue: '提示：只想了一下子就會了，記得要說「才」。', model: '我才想一下就會了。' }
        ],
        whole: [
          { id: 'pt-cz-w1', clue: '提示：說一件事，再用「才」說出很小的數量，像幾歲、幾分鐘。', model: '我學會騎腳踏車的時候才五歲。' }
        ] },
      { key: 'jiezhe', id: 'jz', title: '……接著……', img: 'jiezhe.png', meaning: '先說做了一件事，再用「接著」說馬上跟著做的下一件事。',
        examples: ['我先洗手，接著吃飯。'],
        match: [
          { id: 'pt-jz-m1', img: 'pt-brush-wash.png', front: '我先刷牙，', options: ['接著洗臉。', '接著游泳。', '接著爬樹。'], clue: '提示：看看圖片，刷完牙以後，他在洗手臺做什麼？', explain: '答案是「接著洗臉」：刷完牙，馬上洗臉。' },
          { id: 'pt-jz-m2', img: 'pt-shoes-out.png', front: '弟弟穿好鞋子，', options: ['接著出門上學。', '接著上床睡覺。', '接著去洗澡。'], clue: '提示：看看圖片，弟弟背著書包往哪裡走？', explain: '答案是「接著出門上學」：穿好鞋，馬上出門。' },
          { id: 'pt-jz-m3', img: 'pt-wash-lunch.png', front: '我們先洗手，', options: ['接著吃午餐。', '接著玩泥巴。', '接著去游泳。'], clue: '提示：看看圖片，桌上擺著什麼？', explain: '答案是「接著吃午餐」：洗好手，馬上吃飯。' }
        ],
        conj: [
          { id: 'pt-jz-c1', full: '小鳥先喝水，接著洗澡。', img: 'pt-bird-bath.png', sentence: '小鳥先喝水，＿洗澡。', options: ['……接著……', '……才……', '一……立刻……'], clue: '提示：先喝水，跟著做下一件事。數數看有幾個空格。', explain: '答案是「……接著……」：小鳥先喝水，接著洗澡。' },
          { id: 'pt-jz-c2', full: '媽媽打好蛋，接著倒進鍋子裡。', img: 'pt-egg-pan.png', sentence: '媽媽打好蛋，＿倒進鍋子裡。', options: ['……接著……', '……才……', '一……立刻……'], clue: '提示：打好蛋，跟著做下一件事。數數看有幾個空格。', explain: '答案是「……接著……」：媽媽打好蛋，接著倒進鍋子裡。' },
          { id: 'pt-jz-c3', full: '老師先點名，接著開始上課。', img: 'pt-roll-call.png', sentence: '老師先點名，＿開始上課。', options: ['……接著……', '……才……', '一……立刻……'], clue: '提示：先點名，跟著做下一件事。數數看有幾個空格。', explain: '答案是「……接著……」：老師先點名，接著開始上課。' }
        ],
        half: [
          { id: 'pt-jz-h1', front: '我先寫完功課，', clue: '提示：寫完功課，下一件做什麼？記得要說「接著」。', model: '接著去看卡通。' },
          { id: 'pt-jz-h2', front: '早上起床後，我先摺棉被，', clue: '提示：摺好棉被，下一件做什麼？記得要說「接著」。', model: '接著去刷牙。' }
        ],
        whole: [
          { id: 'pt-jz-w1', clue: '提示：先說第一件事，再用「接著」說馬上做的下一件事。', model: '我先把書包整理好，接著去吃早餐。' }
        ] }
    ]
  };
  if (typeof module === 'object' && module.exports) module.exports = d;
  else { root.H3A_WORDS = root.H3A_WORDS || {}; root.H3A_WORDS.L12 = d; }
})(this);
