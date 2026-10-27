/* 第 4 課字詞練習（公開、不加密）。句子和解釋都是 Claude 自己寫的，沒有課本原文。
   生字、語詞：options 的第一個是正確答案（作答時會打亂）。二年級：不放成語、修辭。 */
(function (root) {
  var d = {
    quizLevels: { qa: 'infer', qb: 'infer', qc: 'extract', qd: 'extract', qe: 'extract', qf: 'extract', qg: 'evaluate', qh: 'interpret', k1: 'evaluate', k2: 'evaluate' },
    quizHelp: {
      qg: { think: ['「頂呱呱」常常用來稱讚別人，是說很棒還是很差？', '「呱呱」是誰的叫聲？如果牠跳到你的頭頂上叫，會是什麼樣子？'],
        why: '「頂呱呱」可以是稱讚：你很棒、最好；也可以想成青蛙跳到你的頭頂上「呱呱」叫。詩人把兩個意思放在一起，很有趣。' },
      qh: { think: ['詩裡的小動物希望看牠的人怎麼做？是亂抓，還是乖乖不動？', '如果想好好看小動物，要怎麼做牠才不會被嚇跑？'],
        why: '小動物擔心被抓，希望人乖乖不動。所以觀察小動物要安靜、有耐心，不要亂抓，這樣才能看清楚，也是愛護牠們。' }
    },
    talkChoices: {
      k1: { good: ['我會蹲在旁邊，安靜的看牠。', '我會用眼睛看，不用手去抓牠。'], bad: ['我會用力把牠抓起來帶回家。', '我會大聲叫，把牠嚇出來。'],
        why: '觀察小動物要安靜、輕輕的，不要嚇到牠，也不要抓牠。用力抓、大聲叫，會讓小動物害怕，甚至受傷。' },
      k2: { good: ['我在公園看過一隻小松鼠在樹上跳來跳去。', '我在家裡的陽臺看過小麻雀在吃東西。'], bad: ['我最喜歡吃炸雞。', '我昨天看了一部卡通。'],
        why: '題目問的是在哪裡看過什麼小動物，牠在做什麼。小松鼠、小麻雀都是。吃炸雞、看卡通沒有說到看見小動物。' }
    },
    hanzi: [
      { id: 'h-呱', combo: { layout: 'lr', parts: [['口', 'm', '叫聲'], ['瓜', 's', '']] }, char: '呱', zhuyin: 'ㄍㄨㄚ', radical: '口', strokes: 8, words: ['呱呱', '頂呱呱'], say: '呱，呱呱叫的呱', cloze: '頂＿呱', img: 'frog-croak.png', options: ['呱', '瓜', '孤', '狐'], clue: '這個字的左邊是口，右邊是西瓜的「瓜」。', explain: '答案是「呱」，左邊是口，表示叫聲；「瓜」少了口，「狐」左邊是犬。', parts: ['口', '瓜'], story: '左邊是「口」，表示叫聲；右邊的「瓜」念起來像「呱」。青蛙叫的聲音就是「呱呱」。', sentence: '池塘裡的青蛙呱呱叫。', build: { layout: 'lr', show: ['？', '瓜'], answer: '口', options: ['口', '犭', '子', '木'], clue: '想一想：叫聲是從嘴巴發出來的，左邊是什麼？' } },
      { id: 'h-聞', combo: { layout: 'tb', parts: [['門', 's', ''], ['耳', 'm', '耳朵']] }, char: '聞', zhuyin: 'ㄨㄣˊ', radical: '耳', strokes: 14, words: ['新聞', '聽聞'], say: '聞，新聞的聞', cloze: '新＿', img: 'tv-news.png', options: ['聞', '問', '間', '閃'], clue: '這個字的外面是門，門裡面是耳朵的「耳」。', explain: '答案是「聞」，門裡是耳；「問」門裡是口，「間」門裡是日。', parts: ['門', '耳'], story: '外面的「門」念起來像「聞」，裡面是「耳」。把耳朵靠在門邊，聽到外面的聲音，就是「聞」。', sentence: '爸爸每天晚上看新聞。', build: { layout: 'tb', show: ['門', '？'], answer: '耳', options: ['耳', '口', '日', '人'], clue: '想一想：聽聲音要用什麼？門裡面放的就是它。' } },
      { id: 'h-聲', combo: { type: '形聲字', pict: '下面是「耳」，表示用耳朵聽；上面像古時候敲打的樂器。' }, char: '聲', zhuyin: 'ㄕㄥ', radical: '耳', strokes: 17, words: ['聲音', '大聲', '叫聲'], say: '聲，聲音的聲', cloze: '＿音', img: 'ear-listen.png', options: ['聲', '聖', '整', '馨'], clue: '這個字的最下面是耳朵的「耳」。', explain: '答案是「聲」，最下面是耳；「聖」下面是王，「整」下面是正。', parts: ['殸', '耳'], story: '上面像古時候用來敲打的樂器，下面是「耳」。敲一敲，耳朵就聽到了，就是「聲音」。', sentence: '我聽到小鳥的叫聲。' },
      { id: 'h-猜', combo: { layout: 'lr', parts: [['犭', 'm', '狗'], ['青', 's', '']] }, char: '猜', zhuyin: 'ㄘㄞ', radical: '犬', strokes: 11, words: ['猜一猜', '猜謎', '猜拳'], say: '猜，猜謎的猜', cloze: '＿謎', img: 'riddle.png', options: ['猜', '清', '情', '請'], clue: '這個字的左邊是反犬旁，右邊是「青」。', explain: '答案是「猜」，左邊是反犬旁；「清」左邊是三點水，「情」左邊是豎心旁。', parts: ['犭', '青'], story: '左邊是反犬旁，右邊的「青」念起來有點像「猜」。小狗東聞西聞，想知道是什麼，就是「猜」。', sentence: '你猜猜看，盒子裡是什麼？', build: { layout: 'lr', show: ['？', '青'], answer: '犭', options: ['犭', '氵', '忄', '言'], clue: '想一想：小狗東聞西聞的樣子，左邊是和狗有關的部首。' } },
      { id: 'h-蛙', combo: { layout: 'lr', parts: [['虫', 'm', '小動物'], ['圭', 's', '']] }, char: '蛙', zhuyin: 'ㄨㄚ', radical: '虫', strokes: 12, words: ['青蛙', '樹蛙'], say: '蛙，青蛙的蛙', cloze: '樹＿', img: 'tree-frog.png', options: ['蛙', '娃', '哇', '掛'], clue: '這個字的左邊是「虫」，右邊是兩個「土」。', explain: '答案是「蛙」，左邊是虫；「娃」左邊是女，「哇」左邊是口。', parts: ['虫', '圭'], story: '左邊的「虫」表示小動物，右邊的「圭」念起來像「蛙」。會跳、會呱呱叫的綠色小動物，就是「青蛙」。', sentence: '樹蛙趴在綠色的葉子上。', build: { layout: 'lr', show: ['？', '圭'], answer: '虫', options: ['虫', '女', '口', '扌'], clue: '想一想：古人把小動物都和「蟲」放在一起，左邊是哪一個部首？' } },
      { id: 'h-別', combo: { layout: 'lr', parts: [['另', 'm', '分開'], ['刂', 'm', '刀子']] }, char: '別', zhuyin: 'ㄅㄧㄝˊ', radical: '刀', strokes: 7, words: ['別人', '別再', '特別'], say: '別，別人的別', cloze: '＿人', img: 'others.png', options: ['別', '另', '拐', '判'], clue: '這個字的左邊是「另」，右邊是立刀旁。', explain: '答案是「別」，右邊是立刀；「另」少了右邊，「拐」左邊是提手旁。', parts: ['另', '刂'], story: '右邊的「刂」是刀，用刀把東西分開，就是「別」。不是自己的人，叫做「別人」。', sentence: '別人說話時，我們要安靜聽。', build: { layout: 'lr', show: ['另', '？'], answer: '刂', options: ['刂', '力', '寸', '攵'], clue: '想一想：用刀把東西分開，右邊是兩筆的刀。' } },
      { id: 'h-靠', combo: { layout: 'tb', parts: [['告', 's', ''], ['非', 'm', '兩邊相背']] }, char: '靠', zhuyin: 'ㄎㄠˋ', radical: '非', strokes: 15, words: ['靠近', '依靠'], say: '靠，依靠的靠', cloze: '依＿', img: 'lean.png', options: ['靠', '告', '菲', '罪'], clue: '這個字的上面是「告」，下面是「非」。', explain: '答案是「靠」，下面是非；「告」少了下面，「罪」上面是四。', parts: ['告', '非'], story: '上面的「告」念起來有點像「靠」，下面的「非」像兩個人背對背。兩個人背靠著背，就是「靠」。', sentence: '小貓靠在我的腳邊睡覺。', build: { layout: 'tb', show: ['告', '？'], answer: '非', options: ['非', '木', '心', '貝'], clue: '想一想：下面的字像兩個人背對背，左右各三橫。' } },
      { id: 'h-近', combo: { layout: 'lr', parts: [['辶', 'm', '走路'], ['斤', 's', '']] }, char: '近', zhuyin: 'ㄐㄧㄣˋ', radical: '辵', strokes: 8, words: ['靠近', '附近', '遠近'], say: '近，附近的近', cloze: '附＿', img: 'near-park.png', options: ['近', '進', '斤', '遠'], clue: '這個字外面是走路的「辶」，裡面是一把斧頭的「斤」。', explain: '答案是「近」，裡面是斤；「進」裡面是隹，「遠」是遠方的遠。', parts: ['辶', '斤'], story: '「辶」是走路，裡面的「斤」念起來像「近」。走沒幾步就到了，就是「近」。', sentence: '我家附近有一座公園。' },
      { id: 'h-抓', combo: { layout: 'lr', parts: [['扌', 'm', '手'], ['爪', 'm', '爪子']] }, char: '抓', zhuyin: 'ㄓㄨㄚ', radical: '手', strokes: 7, words: ['抓住', '抓緊', '抓魚'], say: '抓，抓住的抓', cloze: '＿住', img: 'catch-ball.png', options: ['抓', '爪', '爬', '抱'], clue: '這個字的左邊是提手旁，右邊是「爪」。', explain: '答案是「抓」，左邊是提手旁；「爪」少了左邊，「爬」是爬山的爬。', parts: ['扌', '爪'], story: '左邊是手，右邊的「爪」是爪子。用手像爪子一樣把東西拿住，就是「抓」。', sentence: '我伸手抓住飛過來的球。', build: { layout: 'lr', show: ['扌', '？'], answer: '爪', options: ['爪', '瓜', '包', '巴'], clue: '想一想：老鷹用來拿東西的腳叫什麼？' } },
      { id: 'h-如', combo: { layout: 'lr', parts: [['女', 'm', '女生'], ['口', 'm', '說話']] }, char: '如', zhuyin: 'ㄖㄨˊ', radical: '女', strokes: 6, words: ['如果', '如意'], say: '如，如果的如', cloze: '＿意', img: 'lucky.png', options: ['如', '知', '好', '奴'], clue: '這個字的左邊是女字旁，右邊是「口」。', explain: '答案是「如」，右邊是口；「知」左邊是矢，「好」右邊是子。', parts: ['女', '口'], story: '左邊是「女」，右邊是「口」，像照著別人說的話去做。「如果」是說假設的事。', sentence: '如果明天下雨，我們就在家玩。', build: { layout: 'lr', show: ['女', '？'], answer: '口', options: ['口', '子', '又', '日'], clue: '想一想：右邊是說話用的部位。' } },
      { id: 'h-果', combo: { type: '象形字', pict: '「果」像一棵樹上長著一顆圓圓的果子。' }, char: '果', zhuyin: 'ㄍㄨㄛˇ', radical: '木', strokes: 8, words: ['如果', '水果', '結果'], say: '果，水果的果', cloze: '水＿', img: 'fruits.png', options: ['果', '東', '呆', '某'], clue: '這個字上面是「田」，下面是「木」。', explain: '答案是「果」，上面是田；「東」中間是日，「呆」上面是口。', parts: ['田', '木'], story: '「果」像一棵樹上長出一顆圓圓的果子，上面的田就是果子。可以吃的果子，叫做「水果」。', sentence: '我每天都吃水果。' },
      { id: 'h-乖', combo: { type: '會意字', pict: '中間像一個人，兩邊像張開的翅膀，安安靜靜的不亂動。' }, char: '乖', zhuyin: 'ㄍㄨㄞ', radical: '丿', strokes: 8, words: ['乖乖', '乖巧'], say: '乖，乖巧的乖', cloze: '＿巧', img: 'good-kid.png', options: ['乖', '乘', '垂', '菲'], clue: '這個字中間是「千」，兩邊像「北」。', explain: '答案是「乖」；「乘」中間多了東西，是乘坐的乘。', parts: ['千', '北'], story: '「乖」中間像一個人，兩邊像翅膀收起來，安安靜靜的不亂動。聽話、不吵鬧，就是「乖」。', sentence: '弟弟今天很乖，自己收玩具。' },
      { id: 'h-腦', combo: { layout: 'lr', parts: [['月', 'm', '身體'], ['㐫', 's', '']] }, char: '腦', zhuyin: 'ㄋㄠˇ', radical: '肉', strokes: 13, words: ['腦袋', '電腦', '腦袋瓜'], say: '腦，電腦的腦', cloze: '電＿', img: 'computer.png', options: ['腦', '惱', '瑙', '胸'], clue: '這個字的左邊是肉字旁，和身體有關。', explain: '答案是「腦」，左邊是月（肉）；「惱」左邊是豎心旁，是煩惱的惱。', parts: ['月', '𡿺'], story: '左邊的「月」是肉，表示身體；右邊像頭上的頭髮。頭裡面用來想事情的地方，就是「腦」。', sentence: '我用電腦查資料。' },
      { id: 'h-袋', combo: { layout: 'tb', parts: [['代', 's', ''], ['衣', 'm', '布']] }, char: '袋', zhuyin: 'ㄉㄞˋ', radical: '衣', strokes: 11, words: ['口袋', '腦袋', '袋子'], say: '袋，口袋的袋', cloze: '口＿', img: 'pocket.png', options: ['袋', '貸', '代', '裝'], clue: '這個字的上面是「代」，下面是衣服的「衣」。', explain: '答案是「袋」，下面是衣；「貸」下面是貝，「裝」上面是壯。', parts: ['代', '衣'], story: '上面的「代」念起來像「袋」，下面是「衣」，表示用布做的。可以裝東西的布包，叫做「袋子」。', sentence: '我把手放進口袋裡。', build: { layout: 'tb', show: ['代', '？'], answer: '衣', options: ['衣', '貝', '木', '心'], clue: '想一想：袋子是用布縫的，下面的部件和穿在身上的東西有關。' } },
      { id: 'h-瓜', combo: { type: '象形字', pict: '「瓜」像藤上掛著一顆圓圓的瓜。' }, char: '瓜', zhuyin: 'ㄍㄨㄚ', radical: '瓜', strokes: 5, words: ['西瓜', '南瓜', '腦袋瓜'], say: '瓜，西瓜的瓜', cloze: '南＿', img: 'pumpkin.png', options: ['瓜', '爪', '呱', '孤'], clue: '這個字像藤上掛著圓圓的果實，中間多了一點一提。', explain: '答案是「瓜」，中間有一點一提；「爪」是爪子的爪，「呱」左邊多了口。', parts: ['瓜'], story: '「瓜」像彎彎的藤上掛著一顆圓圓的瓜。黃黃的、可以做成南瓜湯的，叫做「南瓜」。', sentence: '奶奶煮了一鍋南瓜湯。' },
      { id: 'h-證', combo: { layout: 'lr', parts: [['言', 'm', '說話'], ['登', 's', '']] }, char: '證', zhuyin: 'ㄓㄥˋ', radical: '言', strokes: 19, words: ['證明', '保證'], say: '證，保證的證', cloze: '保＿', img: 'promise.png', options: ['證', '登', '燈', '澄'], clue: '這個字的左邊是言字旁，右邊是「登」。', explain: '答案是「證」，左邊是言；「登」少了左邊，「燈」左邊是火。', parts: ['言', '登'], story: '左邊是「言」，表示說話；右邊的「登」念起來像「證」。拿出東西說明是真的，就是「證明」。', sentence: '我保證明天一定準時到。', build: { layout: 'lr', show: ['？', '登'], answer: '言', options: ['言', '火', '氵', '扌'], clue: '想一想：說出來讓別人相信，左邊是和說話有關的部首。' } },
      { id: 'h-明', combo: { layout: 'lr', type: '會意字', parts: [['日', 'm', '太陽'], ['月', 'm', '月亮']] }, char: '明', zhuyin: 'ㄇㄧㄥˊ', radical: '日', strokes: 8, words: ['明天', '聰明', '證明'], say: '明，明天的明', cloze: '＿天', img: 'tomorrow.png', options: ['明', '朋', '盟', '萌'], clue: '這個字的左邊是太陽，右邊是月亮。', explain: '答案是「明」，左邊是日；「朋」左右都是月。', parts: ['日', '月'], story: '左邊是太陽「日」，右邊是月亮「月」。太陽和月亮都會發光，很亮，就是「明」。', sentence: '明天我們要去動物園。', build: { layout: 'lr', show: ['日', '？'], answer: '月', options: ['月', '日', '目', '田'], clue: '想一想：晚上天上會發光的是什麼？' } },
      { id: 'h-頂', combo: { layout: 'lr', parts: [['丁', 's', ''], ['頁', 'm', '頭']] }, char: '頂', zhuyin: 'ㄉㄧㄥˇ', radical: '頁', strokes: 11, words: ['頂呱呱', '屋頂', '山頂'], say: '頂，屋頂的頂', cloze: '屋＿', img: 'roof-cat.png', options: ['頂', '項', '須', '頭'], clue: '這個字的左邊是「丁」，右邊是表示頭的「頁」。', explain: '答案是「頂」，左邊是丁；「項」左邊是工，「頭」左邊是豆。', parts: ['丁', '頁'], story: '左邊的「丁」念起來像「頂」，右邊的「頁」表示頭。頭最上面的地方，就是「頂」。最上面的地方都可以叫「頂」，像「屋頂」、「山頂」。', sentence: '小貓爬到屋頂上曬太陽。', build: { layout: 'lr', show: ['丁', '？'], answer: '頁', options: ['頁', '見', '貝', '口'], clue: '想一想：右邊是表示「頭」的部首。' } }
    ],
    vocab: [
      { id: 'v-水草', word: '水草', meaning: '長在水裡、或水邊的草。', example: '小魚躲在池塘的＿＿裡。', img: 'water-grass.png', options: ['水草', '青蛙', '口袋', '屋頂'] },
      { id: 'v-呱呱', word: '呱呱', meaning: '青蛙、鴨子的叫聲。', example: '池塘裡的青蛙＿＿叫。', img: 'frog-croak.png', options: ['呱呱', '汪汪', '喵喵', '咩咩'] },
      { id: 'v-聞', word: '聞', meaning: '聽到。', example: '我遠遠的＿到一陣鳥叫聲。', img: 'ear-listen.png', options: ['聞', '看', '抓', '猜'] },
      { id: 'v-猜', word: '猜', meaning: '不知道答案，用想的說出來。', example: '你＿我手裡拿的是什麼？', img: 'riddle.png', options: ['猜', '抓', '靠', '聞'] },
      { id: 'v-蝦蟆', word: '蝦蟆', meaning: '長得像青蛙，皮膚粗粗的、顏色比較暗的小動物。', example: '池塘邊有一隻褐色的＿＿。', img: 'toad.png', options: ['蝦蟆', '青蛙', '水草', '螃蟹'] },
      { id: 'v-青蛙', word: '青蛙', meaning: '綠色、會跳、會呱呱叫，住在水邊的小動物。', example: '＿＿一下子就跳進池塘裡。', img: 'frog.png', options: ['青蛙', '蝦蟆', '小貓', '小鳥'] },
      { id: 'v-靠近', word: '靠近', meaning: '走過去，離得很近。', example: '小貓慢慢＿＿我的腳邊。', img: 'cat-near.png', options: ['靠近', '證明', '擔心', '說不定'] },
      { id: 'v-擔心', word: '擔心', meaning: '怕會發生不好的事，心裡放不下。', example: '弟弟還沒回家，媽媽很＿＿。', img: 'worried-mom.png', options: ['擔心', '靠近', '證明', '乖乖'] },
      { id: 'v-抓', word: '抓', meaning: '用手把東西拿住。', example: '小男孩伸手想＿蝴蝶。', img: 'catch-butterfly.png', options: ['抓', '猜', '聞', '靠'] },
      { id: 'v-乖乖', word: '乖乖', meaning: '很聽話，安安靜靜的。', example: '小狗＿＿的坐著等主人。', img: 'good-dog.png', options: ['乖乖', '輕輕', '呱呱', '大大'] },
      { id: 'v-說不定', word: '說不定', meaning: '也許、可能會。', example: '天黑黑的，＿＿＿等一下會下雨。', img: 'maybe-rain.png', options: ['說不定', '腦袋瓜', '頂呱呱', '水草下'] },
      { id: 'v-腦袋瓜', word: '腦袋瓜', meaning: '頭。說得比較可愛的說法。', example: '媽媽摸摸我的＿＿＿說晚安。', img: 'pat-head.png', options: ['腦袋瓜', '說不定', '頂呱呱', '蝦蟆們'] },
      { id: 'v-證明', word: '證明', meaning: '拿出東西或做給大家看，說明是真的。', example: '他拿出獎牌，＿＿自己跑了第一名。', img: 'medal-show.png', options: ['證明', '擔心', '靠近', '水草'] },
      { id: 'v-頂呱呱', word: '頂呱呱', meaning: '非常好、最棒。', example: '老師說我寫的字＿＿＿。', img: 'thumb-best.png', options: ['頂呱呱', '腦袋瓜', '說不定', '乖乖的'] }
    ],
    charwords: [
      { id: 'cw-呱', char: '呱', img: 'duck-croak.png', word: '呱呱叫', charMeaning: '青蛙、鴨子的叫聲。', meaning: '形容青蛙、鴨子在叫；也有很棒的意思。', example: '池塘裡的小鴨子＿＿＿。', options: ['呱呱叫', '靠過去', '猜猜看', '明天見'] },
      { id: 'cw-聞', char: '聞', img: 'tv-news.png', word: '新聞', charMeaning: '聽到。', meaning: '電視、報紙告訴大家的新消息。', example: '電視上的＿＿說明天會下雨。', options: ['新聞', '口袋', '屋頂', '水果'] },
      { id: 'cw-聲', char: '聲', img: 'ear-listen.png', word: '聲音', charMeaning: '耳朵聽到的。', meaning: '用耳朵聽到的東西。', example: '我聽到門外有＿＿。', options: ['聲音', '附近', '電腦', '南瓜'] },
      { id: 'cw-猜', char: '猜', img: 'riddle.png', word: '猜謎', charMeaning: '想一想，說出答案。', meaning: '聽題目，想出答案的遊戲。', example: '我們來玩＿＿遊戲。', options: ['猜謎', '保證', '依靠', '抓住'] },
      { id: 'cw-蛙', char: '蛙', img: 'tree-frog.png', word: '樹蛙', charMeaning: '會跳、會呱呱叫的小動物。', meaning: '住在樹上的小青蛙。', example: '綠色的＿＿趴在樹葉上。', options: ['樹蛙', '南瓜', '口袋', '新聞'] },
      { id: 'cw-別', char: '別', img: 'others.png', word: '別人', charMeaning: '另外的；也有不要的意思。', meaning: '自己以外的人。', example: '要拿＿＿的東西前，先問一聲。', options: ['別人', '水果', '屋頂', '附近'] },
      { id: 'cw-靠', char: '靠', img: 'lean.png', word: '依靠', charMeaning: '貼著、挨著。', meaning: '靠著別人或東西幫忙。', example: '小樹苗要＿＿木棍才能站直。', options: ['依靠', '猜謎', '保證', '如意'] },
      { id: 'cw-近', char: '近', img: 'near-park.png', word: '附近', charMeaning: '距離短，不遠。', meaning: '離這裡不遠的地方。', example: '學校＿＿有一家書店。', options: ['附近', '聲音', '樹蛙', '電腦'] },
      { id: 'cw-抓', char: '抓', img: 'catch-ball.png', word: '抓住', charMeaning: '用手拿牢。', meaning: '用手拿住，不讓它跑掉。', example: '我用手＿＿掉下來的樹葉。', options: ['抓住', '依靠', '保證', '猜謎'] },
      { id: 'cw-如', char: '如', img: 'lucky.png', word: '如意', charMeaning: '依照、像。', meaning: '事情都照自己想的那樣，很順利。', example: '過年時，大家說「萬事＿＿」。', options: ['如意', '附近', '新聞', '別人'] },
      { id: 'cw-果', char: '果', img: 'fruits.png', word: '水果', charMeaning: '樹上長出來的果子。', meaning: '可以吃的果子，像蘋果、香蕉。', example: '媽媽買了很多新鮮的＿＿。', options: ['水果', '聲音', '屋頂', '別人'] },
      { id: 'cw-乖', char: '乖', img: 'good-kid.png', word: '乖巧', charMeaning: '聽話、懂事。', meaning: '聽話、懂事，讓人喜歡。', example: '妹妹很＿＿，會幫忙擺碗筷。', options: ['乖巧', '如意', '依靠', '附近'] },
      { id: 'cw-腦', char: '腦', img: 'computer.png', word: '電腦', charMeaning: '頭裡面用來想事情的地方。', meaning: '可以打字、查資料的機器。', example: '哥哥用＿＿做報告。', options: ['電腦', '口袋', '南瓜', '樹蛙'] },
      { id: 'cw-袋', char: '袋', img: 'pocket.png', word: '口袋', charMeaning: '可以裝東西的布包。', meaning: '衣服、褲子上可以放東西的小袋子。', example: '我的＿＿裡有兩顆糖果。', options: ['口袋', '電腦', '新聞', '水果'] },
      { id: 'cw-瓜', char: '瓜', img: 'pumpkin.png', word: '南瓜', charMeaning: '藤上長出來的大果實。', meaning: '黃黃的、圓圓的瓜，可以煮湯。', example: '萬聖節的時候，大家用＿＿做燈籠。', options: ['南瓜', '口袋', '屋頂', '聲音'] },
      { id: 'cw-證', char: '證', img: 'promise.png', word: '保證', charMeaning: '說明是真的。', meaning: '說一定會做到，讓人放心。', example: '我＿＿下次不會再遲到了。', options: ['保證', '抓住', '猜謎', '乖巧'] },
      { id: 'cw-明', char: '明', img: 'tomorrow.png', word: '明天', charMeaning: '亮；也指接下來的。', meaning: '今天過完以後的那一天。', example: '＿＿早上我們要去爬山。', options: ['明天', '附近', '別人', '水果'] },
      { id: 'cw-頂', char: '頂', img: 'roof-cat.png', word: '屋頂', charMeaning: '最上面的地方。', meaning: '房子最上面的部分。', example: '小鳥停在＿＿上唱歌。', options: ['屋頂', '口袋', '電腦', '南瓜'] }
    ],
    fix: [
      { id: 'fx-聞', char: '聞', wrong: '問', sentence: '爺爺每天早上看新聞。', options: ['聞', '問', '間'], clue: '電視上的新消息，門裡面是耳朵。', explain: '要改成「聞」。新聞的聞門裡是耳；「問」門裡是口。' },
      { id: 'fx-猜', char: '猜', wrong: '清', sentence: '你猜這個盒子裡裝什麼？', options: ['猜', '清', '情'], clue: '想想看答案是什麼，左邊是反犬旁。', explain: '要改成「猜」。猜的左邊是反犬旁；「清」左邊是三點水。' },
      { id: 'fx-蛙', char: '蛙', wrong: '娃', sentence: '池塘裡有一隻綠色的青蛙。', options: ['蛙', '娃', '哇'], clue: '會跳的小動物，左邊是「虫」。', explain: '要改成「蛙」。青蛙的蛙左邊是虫；「娃」是娃娃的娃。' },
      { id: 'fx-靠', char: '靠', wrong: '告', sentence: '下課時，大家靠在一起聊天。', options: ['靠', '告', '罪'], clue: '貼在一起，下面要有「非」。', explain: '要改成「靠」。靠的下面是非；「告」少了下面。' },
      { id: 'fx-近', char: '近', wrong: '進', sentence: '我家離學校很近。', options: ['近', '進', '斤'], clue: '距離短，裡面是斧頭的「斤」。', explain: '要改成「近」。近的裡面是斤；「進」是前進的進。' },
      { id: 'fx-抓', char: '抓', wrong: '爬', sentence: '妹妹伸手抓住氣球的線。', options: ['抓', '爬', '爪'], clue: '用手拿住，左邊是提手旁。', explain: '要改成「抓」。抓的左邊是提手旁；「爬」是爬山的爬。' },
      { id: 'fx-如', char: '如', wrong: '知', sentence: '如果天氣好，我們去野餐。', options: ['如', '知', '好'], clue: '說一件假設的事，左邊是女字旁。', explain: '要改成「如」。如果的如左邊是女；「知」是知道的知。' },
      { id: 'fx-乖', char: '乖', wrong: '乘', sentence: '小狗很乖，坐在門口等我。', options: ['乖', '乘', '垂'], clue: '很聽話的樣子，中間是「千」。', explain: '要改成「乖」。乖的中間是千；「乘」是乘坐的乘。' },
      { id: 'fx-腦', char: '腦', wrong: '惱', sentence: '哥哥在用電腦寫功課。', options: ['腦', '惱', '胸'], clue: '可以查資料的機器，左邊是肉字旁。', explain: '要改成「腦」。電腦的腦左邊是月（肉）；「惱」是煩惱的惱。' },
      { id: 'fx-袋', char: '袋', wrong: '貸', sentence: '我的口袋裡有一顆糖。', options: ['袋', '貸', '代'], clue: '可以裝東西的，下面是衣服的「衣」。', explain: '要改成「袋」。口袋的袋下面是衣；「貸」下面是貝。' },
      { id: 'fx-明', char: '明', wrong: '朋', sentence: '明天是星期六。', options: ['明', '朋', '萌'], clue: '今天過完的那一天，左邊是太陽。', explain: '要改成「明」。明天的明左邊是日；「朋」是朋友的朋。' },
      { id: 'fx-頂', char: '頂', wrong: '項', sentence: '我們終於爬到山頂了。', options: ['頂', '項', '頭'], clue: '最上面的地方，左邊是「丁」。', explain: '要改成「頂」。山頂的頂左邊是丁；「項」左邊是工。' }
    ],
    similar: [
      { id: 's1', meaning: '「附＿」是離這裡不遠的地方。', sentence: '學校附＿有一家麵包店。', frame: '附＿', options: ['近', '進'], answer: '近', clue: '提示：裡面是斧頭的「斤」。', explain: '答案是「近」；「進」是前進的進。' },
      { id: 's2', meaning: '「前＿」是往前面走。', sentence: '大家排好隊，一起向前＿。', frame: '前＿', options: ['進', '近'], answer: '進', clue: '提示：裡面是短尾巴的鳥「隹」。', explain: '答案是「進」；「近」是附近的近。' },
      { id: 's3', meaning: '「電＿」是可以打字、查資料的機器。', sentence: '我用電＿查恐龍的資料。', frame: '電＿', options: ['腦', '惱'], answer: '腦', clue: '提示：左邊是肉字旁，和身體有關。', explain: '答案是「腦」；「惱」是煩惱的惱。' },
      { id: 's4', meaning: '「煩＿」是心裡有放不下的事。', sentence: '作業太多，弟弟好煩＿。', frame: '煩＿', options: ['惱', '腦'], answer: '惱', clue: '提示：和心情有關，左邊是豎心旁。', explain: '答案是「惱」；「腦」是電腦的腦。' },
      { id: 's5', meaning: '「＿天」是今天過完的那一天。', sentence: '＿天要記得帶水壺。', frame: '＿天', options: ['明', '朋'], answer: '明', clue: '提示：左邊是太陽，右邊是月亮。', explain: '答案是「明」；「朋」是朋友的朋。' },
      { id: 's6', meaning: '「＿友」是常常一起玩的好夥伴。', sentence: '小美是我的好＿友。', frame: '＿友', options: ['朋', '明'], answer: '朋', clue: '提示：左右兩邊一樣，都是月。', explain: '答案是「朋」；「明」是明天的明。' },
      { id: 's7', meaning: '「＿住」是用手拿住不放。', sentence: '我緊緊＿住扶手。', frame: '＿住', options: ['抓', '爬'], answer: '抓', clue: '提示：左邊是提手旁。', explain: '答案是「抓」；「爬」是爬山的爬。' },
      { id: 's8', meaning: '「＿山」是走上高高的山。', sentence: '星期天我們去＿山。', frame: '＿山', options: ['爬', '抓'], answer: '爬', clue: '提示：左邊是爪子的「爪」。', explain: '答案是「爬」；「抓」是抓住的抓。' }
    ],
    listen: [
      { id: 'l1', text: '綠色、會跳、會呱呱叫，住在池塘邊。', answer: 0, options: [{ text: '青蛙', img: 'frog.png' }, { text: '水果', img: 'fruits.png' }, { text: '電腦', img: 'computer.png' }, { text: '南瓜', img: 'pumpkin.png' }] },
      { id: 'l2', text: '長得像青蛙，皮膚粗粗的，顏色比較暗。', answer: 0, options: [{ text: '蝦蟆', img: 'toad.png' }, { text: '樹蛙', img: 'tree-frog.png' }, { text: '口袋', img: 'pocket.png' }, { text: '水草', img: 'water-grass.png' }] },
      { id: 'l3', text: '長在水裡的草，小魚喜歡躲在裡面。', answer: 0, options: [{ text: '水草', img: 'water-grass.png' }, { text: '屋頂', img: 'roof-cat.png' }, { text: '南瓜', img: 'pumpkin.png' }, { text: '新聞', img: 'tv-news.png' }] },
      { id: 'l4', text: '弟弟還沒回家，媽媽一直看著窗外。', answer: 0, options: [{ text: '擔心', img: 'worried-mom.png' }, { text: '頂呱呱', img: 'thumb-best.png' }, { text: '猜謎', img: 'riddle.png' }, { text: '水果', img: 'fruits.png' }] },
      { id: 'l5', text: '媽媽輕輕摸摸我的頭。', answer: 0, options: [{ text: '腦袋瓜', img: 'pat-head.png' }, { text: '口袋', img: 'pocket.png' }, { text: '屋頂', img: 'roof-cat.png' }, { text: '水草', img: 'water-grass.png' }] },
      { id: 'l6', text: '老師說我做得非常好，最棒了！', answer: 0, options: [{ text: '頂呱呱', img: 'thumb-best.png' }, { text: '擔心', img: 'worried-mom.png' }, { text: '靠近', img: 'cat-near.png' }, { text: '蝦蟆', img: 'toad.png' }] },
      { id: 'l7', text: '衣服上可以放糖果的小袋子。', answer: 0, options: [{ text: '口袋', img: 'pocket.png' }, { text: '南瓜', img: 'pumpkin.png' }, { text: '電腦', img: 'computer.png' }, { text: '青蛙', img: 'frog.png' }] },
      { id: 'l8', text: '小貓慢慢走過來，走到我的腳邊。', answer: 0, options: [{ text: '靠近', img: 'cat-near.png' }, { text: '證明', img: 'medal-show.png' }, { text: '猜謎', img: 'riddle.png' }, { text: '新聞', img: 'tv-news.png' }] }
    ],
    phrase: {
      pickName: '看圖選一選',
      pickSay: '看圖，選出最適合的詞，說說看他只做什麼、不做什麼。',
      intro: { example: '只玩遊戲不寫功課', img: 'pr-game-no-hw.png', parts: [{ text: '只' }, { text: '玩遊戲', role: '做這件事' }, { text: '不' }, { text: '寫功課', role: '不做那件事' }],
        explain: '「只」後面說做了哪一件事，「不」後面說沒有做哪一件事。兩件事只做了其中一件。' },
      pick: [
        { id: 'ph1', img: 'pr-candy-no-veg.png', before: '只吃糖果不', join: '', noun: '。', ask: '只吃糖果不做什麼', look: '再看看圖片，盤子裡的青菜一口都沒動。', options: ['吃青菜', '吃糖果', '唱歌', '睡覺'], clue: '提示：盤子裡綠綠的那些，他碰都不碰。', explain: '答案是「吃青菜」，完整的短語是「只吃糖果不吃青菜」。' },
        { id: 'ph2', img: 'pr-look-no-buy.png', before: '只看不', join: '', noun: '。', ask: '只看不做什麼', look: '再看看圖片，媽媽在商店裡看衣服，錢包有沒有打開？', options: ['買', '看', '跑', '哭'], clue: '提示：她沒有付錢，也沒有把衣服帶走。', explain: '答案是「買」，完整的短語是「只看不買」。' },
        { id: 'ph3', img: 'pr-play-no-swim.png', before: '只玩水不', join: '', noun: '。', ask: '只玩水不做什麼', look: '再看看圖片，弟弟坐在池邊踢水，有沒有下去游？', options: ['游泳', '玩水', '吃飯', '寫字'], clue: '提示：他只用腳踢水花，身體沒有下水往前划。', explain: '答案是「游泳」，完整的短語是「只玩水不游泳」。' },
        { id: 'ph4', img: 'pr-talk-no-work.png', before: '只說話不', join: '', noun: '。', ask: '只說話不做什麼', look: '再看看圖片，大家都在打掃，他在做什麼？', options: ['做事', '說話', '唱歌', '跳舞'], clue: '提示：他拿著掃把一直聊天，地上還是髒髒的。', explain: '答案是「做事」，完整的短語是「只說話不做事」。' }
      ],
      fill: [
        { id: 'pf1', img: 'pr-candy-no-veg.png', parts: ['只', '吃糖果', '不', '吃青菜'] },
        { id: 'pf2', img: 'pr-look-no-buy.png', parts: ['只', '看', '不', '買'] },
        { id: 'pf3', img: 'pr-play-no-swim.png', parts: ['只', '玩水', '不', '游泳'] },
        { id: 'pf4', img: 'pr-talk-no-work.png', parts: ['只', '說話', '不', '做事'] }
      ],
      say: [],
      words: [{ word: '靠近', meaning: '走過去，離得很近。', img: 'cat-near.png' }],
      choose: [
        { id: 'pw1', word: '靠近', options: ['小貓慢慢靠近我，在我腳邊坐下。', '我想靠近那座山，所以往反方向走。'], clue: '提示：想一想，「靠近」是越走越近，還是越走越遠？', explain: '第一句用得對：小貓走到我身邊。往反方向走會越來越遠，不是靠近。' }
      ],
      make: [
        { id: 'pm1', word: '靠近', clue: '提示：想想看，有什麼東西或動物慢慢走到你身邊？', model: '小鴨子慢慢靠近我，想吃我手上的麵包。' }
      ],
      phrase2: {
        intro: { example: '不只會唱歌，還會跳舞', img: 'pz-sing-dance.png', parts: [{ text: '不只' }, { text: '會唱歌', role: '第一件事' }, { text: '，還' }, { text: '會跳舞', role: '第二件事' }],
          explain: '先用「不只」說第一件事，再用「還」說另一件事。表示能做兩件事。' },
        pick: [
          { id: 'p2-pz1', img: 'pz-draw-write.png', before: '不只會畫畫，還會', join: '', noun: '。', ask: '不只會畫畫，還會做什麼', look: '再看看圖片，姐姐一手拿畫筆，桌上還有什麼？', options: ['彈琴', '睡覺', '哭泣', '發呆'], clue: '提示：桌子旁邊有一臺黑白鍵的樂器，她的手指放在上面。', explain: '答案是「彈琴」，完整的短語是「不只會畫畫，還會彈琴」。' },
          { id: 'p2-pz2', img: 'pz-swim-dive.png', before: '不只會游泳，還會', join: '', noun: '。', ask: '不只會游泳，還會做什麼', look: '再看看圖片，哥哥在泳池邊做什麼動作？', options: ['跳水', '寫字', '煮飯', '開車'], clue: '提示：他站在高高的板子上，準備往下翻進池子裡。', explain: '答案是「跳水」，完整的短語是「不只會游泳，還會跳水」。' },
          { id: 'p2-pz3', img: 'pz-cook-wash.png', before: '不只會煮飯，還會', join: '', noun: '。', ask: '不只會煮飯，還會做什麼', look: '再看看圖片，爸爸吃完飯以後在水槽前做什麼？', options: ['洗碗', '唱歌', '跳繩', '跑步'], clue: '提示：他把盤子一個一個沖乾淨。', explain: '答案是「洗碗」，完整的短語是「不只會煮飯，還會洗碗」。' }
        ],
        fill: [
          { id: 'pz1', img: 'pz-draw-write.png', parts: ['不只', '會畫畫', '，還', '會彈琴'] },
          { id: 'pz2', img: 'pz-swim-dive.png', parts: ['不只', '會游泳', '，還', '會跳水'] },
          { id: 'pz3', img: 'pz-cook-wash.png', parts: ['不只', '會煮飯', '，還', '會洗碗'] }
        ]
      }
    },
    pattern: [
      { key: 'shihaishi', id: 'sh', title: '是……還是……', img: 'shihaishi.png', meaning: '用「是……還是……」說出兩個選擇，問別人是哪一個。',
        examples: ['你要喝的是牛奶還是果汁？'],
        match: [
          { id: 'pt-sh-m1', img: 'pt-two-shirts.png', front: '你明天要穿的是紅衣服，', options: ['還是藍衣服？', '還是吃蘋果？', '還是去睡覺？'], clue: '提示：看看圖片，床上放了哪兩件衣服？', explain: '答案是「還是藍衣服」：兩個選擇都是衣服。' },
          { id: 'pt-sh-m2', img: 'pt-ice-cream.png', front: '你想吃的是草莓冰淇淋，', options: ['還是巧克力的？', '還是去游泳？', '還是穿外套？'], clue: '提示：看看圖片，店裡有哪兩種口味？', explain: '答案是「還是巧克力的」：兩個選擇都是冰淇淋口味。' },
          { id: 'pt-sh-m3', img: 'pt-bus-train.png', front: '我們要搭的是公車，', options: ['還是火車？', '還是吃飯？', '還是唱歌？'], clue: '提示：看看圖片，有哪兩種車？', explain: '答案是「還是火車」：兩個選擇都是交通工具。' }
        ],
        conj: [
          { id: 'pt-sh-c1', full: '那隻動物是兔子還是小貓？', img: 'pt-far-animal.png', sentence: '那隻動物＿兔子＿＿小貓？', options: ['是……還是……', '只要……就……', '……卻……'], clue: '提示：問兩個選擇裡是哪一個。數數看有幾個空格。', explain: '答案是「是……還是……」：那隻動物是兔子還是小貓？' },
          { id: 'pt-sh-c2', full: '今天的點心是蛋糕還是餅乾？', img: 'pt-snack-box.png', sentence: '今天的點心＿蛋糕＿＿餅乾？', options: ['是……還是……', '只要……就……', '……卻……'], clue: '提示：問兩個選擇裡是哪一個。數數看有幾個空格。', explain: '答案是「是……還是……」：今天的點心是蛋糕還是餅乾？' },
          { id: 'pt-sh-c3', full: '你喜歡的是夏天還是冬天？', img: 'pt-seasons.png', sentence: '你喜歡的＿夏天＿＿冬天？', options: ['是……還是……', '只要……就……', '……卻……'], clue: '提示：問兩個選擇裡是哪一個。數數看有幾個空格。', explain: '答案是「是……還是……」：你喜歡的是夏天還是冬天？' }
        ],
        half: [
          { id: 'pt-sh-h1', front: '你最喜歡的動物是小狗，', clue: '提示：再說另一種動物，記得要說「還是」。', model: '還是小貓？' },
          { id: 'pt-sh-h2', front: '我們中午吃的是牛肉麵，', clue: '提示：再說另一種午餐，記得要說「還是」。', model: '還是炒飯？' }
        ],
        whole: [
          { id: 'pt-sh-w1', clue: '提示：用「是……還是……」問一個有兩個選擇的問題。想想看：要問朋友喜歡什麼？', model: '你喜歡的顏色是黃色還是綠色？' }
        ] }
    ]
  };
  if (typeof module === 'object' && module.exports) module.exports = d;
  else { root.H3A_WORDS = root.H3A_WORDS || {}; root.H3A_WORDS.L04 = d; }
})(this);
