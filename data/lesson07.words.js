/* 第 7 課字詞練習（公開、不加密）。句子和解釋都是 Claude 自己寫的，沒有課本原文。
   生字、語詞：options 的第一個是正確答案（作答時會打亂）。二年級：不放成語、修辭。 */
(function (root) {
  var d = {
    wh: [
      { id: 'wh-ren', key: '人', options: ['老師、明光、小星和小花', '爸爸、媽媽和妹妹', '國王和大臣', '小真和螃蟹'], paras: [1, 3], why: '老師帶大家去活動，明光、小星和小花在吃飯時聊天。' },
      { id: 'wh-shi', key: '事', options: ['郊外活動吃午餐，大家分享不一樣的美食', '在教室裡考數學', '在操場上比賽跑步', '去動物園看熊貓'], paras: [1, 3], why: '吃飯時，大家拿出自己帶的美食，說一說它的故事。' },
      { id: 'wh-time', key: '時', options: ['到郊外活動的吃飯時間', '晚上睡覺前', '下雨的早上', '放暑假的時候'], paras: [1], why: '老師帶大家到郊外活動，事情發生在吃飯的時候。' },
      { id: 'wh-di', key: '地', options: ['郊外', '教室裡', '餐廳裡', '家裡的廚房'], paras: [1], why: '老師帶大家到郊外活動，在那裡吃午餐。' },
      { id: 'wh-wu', key: '物', options: ['竹筒飯、艾粄和越南春捲', '漢堡、薯條和可樂', '蛋糕、餅乾和糖果', '西瓜、香蕉和蘋果'], paras: [2, 3], why: '小星帶竹筒飯，小花帶艾粄，明光帶越南春捲。' }
    ],
    quizLevels: { qa: 'extract', qb: 'extract', qc: 'extract', qd: 'extract', qe: 'extract', qf: 'extract', qg: 'infer', qh: 'interpret', k1: 'evaluate', k2: 'evaluate' },
    quizHelp: {
      qh: { think: ['小星、小花、明光的家人，各自說了什麼樣的故事？', '每個人的家人來自不同的地方，吃的東西會一樣嗎？'],
        why: '小星的竹筒飯有祖先的故事，小花的艾粄是客家人的美食，明光帶的是越南春捲。大家的家人來自不同的地方，有不同的生活習慣，所以帶的美食都不一樣。' }
    },
    talkChoices: {
      k1: { good: ['我家過年都會吃奶奶包的水餃。', '我最愛吃媽媽煮的番茄蛋花湯。'], bad: ['我喜歡去公園溜滑梯。', '我昨天看了一本書。'],
        why: '題目問的是家裡特別的美食。水餃、番茄蛋花湯都是。溜滑梯、看書不是食物。' },
      k2: { good: ['我想學做壽司，因為可以包很多種料。', '我想學做蛋餅，早上可以自己做早餐。'], bad: ['我想學開飛機。', '我什麼都不想學。'],
        why: '題目問想學做什麼美食。壽司、蛋餅都是食物，也說了原因。開飛機不是美食；什麼都不想學沒有回答問題。' }
    },
    hanzi: [
      { id: 'h-樣', combo: { layout: 'lr', parts: [['木', 'm', '木頭'], ['羕', 's', '']] }, char: '樣', zhuyin: 'ㄧㄤˋ', radical: '木', strokes: 15, words: ['不一樣', '樣子', '模樣'], say: '樣，樣子的樣', cloze: '模＿', img: 'mirror-look.png', options: ['樣', '羨', '漾', '洋'], clue: '這個字的左邊是木字旁，右上像一隻羊。', explain: '答案是「樣」，左邊是木；「洋」左邊是三點水，「羨」下面是次。', parts: ['木', '羕'], story: '左邊是「木」，右邊念起來像「樣」。古時候用木頭做成的模子，照著它做出一樣的東西，就是「樣子」。', sentence: '我和雙胞胎哥哥長得一模一樣。', build: { layout: 'lr', show: ['？', '羕'], answer: '木', options: ['木', '氵', '扌', '亻'], clue: '想一想：古時候的模子是用什麼做的？' } },
      { id: 'h-食', combo: { type: '象形字', pict: '「食」像一個裝滿飯的碗，上面有蓋子。' }, char: '食', zhuyin: 'ㄕˊ', radical: '食', strokes: 9, words: ['美食', '食物', '零食'], say: '食，食物的食', cloze: '＿物', img: 'food-table.png', options: ['食', '良', '飲', '貪'], clue: '這個字像一個裝滿飯、蓋著蓋子的碗。', explain: '答案是「食」；「良」上面少了人字頭，「飲」右邊多了欠。', parts: ['人', '良'], story: '「食」像一個裝滿飯的碗，上面還有蓋子。可以吃的東西，就是「食物」。', sentence: '野餐的時候，大家帶了很多食物。' },
      { id: 'h-郊', combo: { layout: 'lr', parts: [['交', 's', ''], ['阝', 'm', '城市']] }, char: '郊', zhuyin: 'ㄐㄧㄠ', radical: '邑', strokes: 9, words: ['郊外', '郊遊'], say: '郊，郊遊的郊', cloze: '＿遊', img: 'picnic-field.png', options: ['郊', '交', '效', '校'], clue: '這個字的左邊是「交」，右邊是耳朵旁。', explain: '答案是「郊」，右邊是耳朵旁；「效」右邊是反文，「校」左邊是木。', parts: ['交', '阝'], story: '左邊的「交」念起來像「郊」，右邊的「阝」表示城市。城市外面、有草地有樹的地方，就是「郊外」。', sentence: '星期天我們全家去郊遊。', build: { layout: 'lr', show: ['交', '？'], answer: '阝', options: ['阝', '攵', '力', '頁'], clue: '想一想：右邊是像耳朵的部首，和地方有關。' } },
      { id: 'h-活', combo: { layout: 'lr', parts: [['氵', 'm', '水'], ['舌', 's', '']] }, char: '活', zhuyin: 'ㄏㄨㄛˊ', radical: '水', strokes: 9, words: ['活動', '生活', '快活'], say: '活，生活的活', cloze: '生＿', img: 'daily-life.png', options: ['活', '話', '舌', '括'], clue: '這個字的左邊是三點水，右邊是舌頭的「舌」。', explain: '答案是「活」，左邊是三點水；「話」左邊是言，「括」左邊是提手旁。', parts: ['氵', '舌'], story: '左邊是水，右邊的「舌」念起來有點像「活」。水一直流動，好像活的一樣，就是「活」。每天過日子，叫做「生活」。', sentence: '我們的生活越來越方便。', build: { layout: 'lr', show: ['？', '舌'], answer: '氵', options: ['氵', '言', '扌', '口'], clue: '想一想：流動的東西才是活的，左邊和什麼有關？' } },
      { id: 'h-奇', combo: { layout: 'tb', parts: [['大', 'm', '人'], ['可', 's', '']] }, char: '奇', zhuyin: 'ㄑㄧˊ', radical: '大', strokes: 8, words: ['好奇', '奇怪', '神奇'], say: '奇，奇怪的奇', cloze: '＿怪', img: 'strange-cat.png', options: ['奇', '哥', '寄', '騎'], clue: '這個字的上面是「大」，下面是「可」。', explain: '答案是「奇」，上面是大；「寄」上面多了寶蓋頭，「騎」左邊是馬。', parts: ['大', '可'], story: '上面的「大」像一個人，下面的「可」念起來像「奇」。看到少見、特別的東西，就是「奇」。', sentence: '這隻小貓的叫聲好奇怪。', build: { layout: 'tb', show: ['？', '可'], answer: '大', options: ['大', '宀', '口', '木'], clue: '想一想：上面像一個張開手腳的人。' } },
      { id: 'h-筒', combo: { layout: 'tb', parts: [['竹', 'm', '竹子'], ['同', 's', '']] }, char: '筒', zhuyin: 'ㄊㄨㄥˇ', radical: '竹', strokes: 12, words: ['竹筒', '手電筒', '郵筒'], say: '筒，手電筒的筒', cloze: '手電＿', img: 'flashlight.png', options: ['筒', '洞', '同', '桶'], clue: '這個字的上面是竹字頭，下面是「同」。', explain: '答案是「筒」，上面是竹字頭；「洞」左邊是三點水，「桶」左邊是木。', parts: ['竹', '同'], story: '上面是「竹」，下面的「同」念起來像「筒」。竹子中間空空的一段，就是「筒」。', sentence: '晚上停電，爸爸拿出手電筒。', build: { layout: 'tb', show: ['？', '同'], answer: '竹', options: ['竹', '艹', '宀', '雨'], clue: '想一想：中間空空、一節一節的植物，上面是哪一個部首？' } },
      { id: 'h-香', combo: { layout: 'tb', type: '會意字', parts: [['禾', 'm', '稻子'], ['日', 'm', '甜甜的']] }, char: '香', zhuyin: 'ㄒㄧㄤ', radical: '香', strokes: 9, words: ['香味', '香蕉', '香香的'], say: '香，香蕉的香', cloze: '＿蕉', img: 'banana.png', options: ['香', '杳', '秀', '季'], clue: '這個字的上面是「禾」，下面是「日」。', explain: '答案是「香」，下面是日；「秀」下面是乃，「季」下面是子。', parts: ['禾', '日'], story: '上面的「禾」是稻子，下面的「日」像甜甜的味道。剛煮好的米飯聞起來好香，就是「香」。', sentence: '媽媽買了一串香蕉。', build: { layout: 'tb', show: ['禾', '？'], answer: '日', options: ['日', '子', '乃', '口'], clue: '想一想：下面是天上發光的那個字。' } },
      { id: 'h-味', combo: { layout: 'lr', parts: [['口', 'm', '嘴巴'], ['未', 's', '']] }, char: '味', zhuyin: 'ㄨㄟˋ', radical: '口', strokes: 8, words: ['香味', '味道', '美味'], say: '味，味道的味', cloze: '＿道', img: 'taste-soup.png', options: ['味', '妹', '昧', '未'], clue: '這個字的左邊是口，右邊是「未」。', explain: '答案是「味」，左邊是口；「妹」左邊是女，「未」少了左邊。', parts: ['口', '未'], story: '左邊是「口」，右邊的「未」念起來像「味」。東西放進嘴巴裡嘗到的感覺，就是「味道」。', sentence: '這碗湯的味道好鮮美。', build: { layout: 'lr', show: ['？', '未'], answer: '口', options: ['口', '女', '日', '木'], clue: '想一想：嘗東西要用嘴巴，左邊是什麼？' } },
      { id: 'h-便', combo: { layout: 'lr', parts: [['亻', 'm', '人'], ['更', 's', '']] }, char: '便', zhuyin: 'ㄅㄧㄢˋ', radical: '人', strokes: 9, words: ['方便', '便當', '順便'], say: '便，方便的便', cloze: '方＿', img: 'store-near.png', options: ['便', '更', '使', '硬'], clue: '這個字的左邊是單人旁，右邊是「更」。', explain: '答案是「便」，左邊是單人旁；「使」右邊是吏，「硬」左邊是石。', parts: ['亻', '更'], story: '左邊是人，右邊的「更」念起來有點像「便」。讓人做事很順、很容易，就是「方便」。', sentence: '家旁邊有超市，買東西很方便。', build: { layout: 'lr', show: ['？', '更'], answer: '亻', options: ['亻', '石', '木', '氵'], clue: '想一想：讓人做事順利，左邊是和人有關的部首。' } },
      { id: 'h-當', combo: { layout: 'tb', parts: [['尚', 's', ''], ['田', 'm', '田地']] }, char: '當', zhuyin: 'ㄉㄤ', radical: '田', strokes: 13, words: ['便當', '當然', '當時'], say: '當，當然的當', cloze: '＿然', img: 'nod-yes.png', options: ['當', '常', '堂', '嘗'], clue: '這個字的上面是「尚」的樣子，下面是田地的「田」。', explain: '答案是「當」，下面是田；「常」下面是巾，「堂」下面是土。', parts: ['尚', '田'], story: '上面念起來像「當」，下面是「田」。兩塊田一樣大，彼此相當。「當然」就是本來就應該這樣。', sentence: '你要一起來玩嗎？當然好！' },
      { id: 'h-盒', combo: { layout: 'tb', parts: [['合', 's', ''], ['皿', 'm', '碗盤']] }, char: '盒', zhuyin: 'ㄏㄜˊ', radical: '皿', strokes: 11, words: ['盒子', '便當盒', '鉛筆盒'], say: '盒，盒子的盒', cloze: '＿子', img: 'box.png', options: ['盒', '合', '盆', '答'], clue: '這個字的上面是「合」，下面是「皿」。', explain: '答案是「盒」，上面是合；「盆」上面是分，「答」上面是竹字頭。', parts: ['合', '皿'], story: '上面的「合」念起來像「盒」，也表示蓋起來；下面的「皿」是裝東西的器具。可以蓋起來裝東西的，就是「盒子」。', sentence: '我把蠟筆放進盒子裡。', build: { layout: 'tb', show: ['合', '？'], answer: '皿', options: ['皿', '口', '心', '木'], clue: '想一想：裝東西的器具，和「盆」的下面一樣。' } },
      { id: 'h-客', combo: { layout: 'tb', parts: [['宀', 'm', '房子'], ['各', 's', '']] }, char: '客', zhuyin: 'ㄎㄜˋ', radical: '宀', strokes: 9, words: ['客人', '客家人', '請客'], say: '客，客人的客', cloze: '＿人', img: 'guests.png', options: ['客', '各', '容', '答'], clue: '這個字的上面是寶蓋頭，下面是「各」。', explain: '答案是「客」，上面是寶蓋頭；「各」少了上面，「容」下面是谷。', parts: ['宀', '各'], story: '上面的「宀」是房子，下面的「各」念起來有點像「客」。從外面來到家裡的人，就是「客人」。', sentence: '今天家裡來了好多客人。', build: { layout: 'tb', show: ['？', '各'], answer: '宀', options: ['宀', '竹', '雨', '艹'], clue: '想一想：來到家裡的人，上面是表示房子的部首。' } },
      { id: 'h-清', combo: { layout: 'lr', parts: [['氵', 'm', '水'], ['青', 's', '']] }, char: '清', zhuyin: 'ㄑㄧㄥ', radical: '水', strokes: 11, words: ['清明節', '清楚', '清水'], say: '清，清楚的清', cloze: '＿楚', img: 'clear-glass.png', options: ['清', '請', '情', '晴'], clue: '這個字的左邊是三點水，右邊是「青」。', explain: '答案是「清」，左邊是三點水；「請」左邊是言，「晴」左邊是日。', parts: ['氵', '青'], story: '左邊是水，右邊的「青」念起來像「清」。水很乾淨，可以看到底，就是「清」。看得很明白，叫做「清楚」。', sentence: '請把字寫得清楚一點。', build: { layout: 'lr', show: ['？', '青'], answer: '氵', options: ['氵', '言', '日', '忄'], clue: '想一想：乾乾淨淨、看得到底的是什麼？' } },
      { id: 'h-節', combo: { layout: 'tb', parts: [['竹', 'm', '竹子'], ['即', 's', '']] }, char: '節', zhuyin: 'ㄐㄧㄝˊ', radical: '竹', strokes: 15, words: ['清明節', '節日', '節目'], say: '節，節目的節', cloze: '＿目', img: 'tv-show.png', options: ['節', '即', '範', '筍'], clue: '這個字的上面是竹字頭，下面是「即」。', explain: '答案是「節」，下面是即；「範」下面是車，「筍」下面是旬。', parts: ['竹', '即'], story: '上面是「竹」，竹子一段一段的，每段中間鼓起來的地方就是「節」。一年中特別的日子，叫做「節日」。', sentence: '電視上正在播卡通節目。', build: { layout: 'tb', show: ['？', '即'], answer: '竹', options: ['竹', '艹', '宀', '雨'], clue: '想一想：一段一段的植物，上面是哪一個部首？' } },
      { id: 'h-保', combo: { layout: 'lr', parts: [['亻', 'm', '人'], ['呆', 's', '']] }, char: '保', zhuyin: 'ㄅㄠˇ', radical: '人', strokes: 9, words: ['保護', '保平安', '保持'], say: '保，保護的保', cloze: '＿護', img: 'protect-chick.png', options: ['保', '呆', '堡', '褓'], clue: '這個字的左邊是單人旁，右邊是「呆」。', explain: '答案是「保」，左邊是單人旁；「呆」少了左邊，「堡」下面是土。', parts: ['亻', '呆'], story: '左邊是人，右邊像一個小寶寶。大人把小寶寶背在身上照顧，就是「保護」。', sentence: '母雞張開翅膀保護小雞。', build: { layout: 'lr', show: ['？', '呆'], answer: '亻', options: ['亻', '土', '木', '口'], clue: '想一想：照顧小寶寶的是誰？左邊是和他有關的部首。' } },
      { id: 'h-平', combo: { type: '象形字', pict: '「平」像水面上漂著的平平的浮萍。' }, char: '平', zhuyin: 'ㄆㄧㄥˊ', radical: '干', strokes: 5, words: ['平安', '公平', '平平的'], say: '平，公平的平', cloze: '公＿', img: 'fair-share.png', options: ['平', '半', '乎', '手'], clue: '這個字上面是一橫，中間兩點，一豎直直往下。', explain: '答案是「平」；「半」中間多一橫，「乎」最下面是彎鉤。', parts: ['平'], story: '「平」像水面上平平的浮萍。沒有高低、大家一樣，就是「公平」。', sentence: '我們把糖果平分，很公平。' },
      { id: 'h-安', combo: { layout: 'tb', type: '會意字', parts: [['宀', 'm', '房子'], ['女', 'm', '女生']] }, char: '安', zhuyin: 'ㄢ', radical: '宀', strokes: 6, words: ['平安', '安靜', '安全'], say: '安，安靜的安', cloze: '＿靜', img: 'quiet-library.png', options: ['安', '女', '宴', '案'], clue: '這個字的上面是寶蓋頭，下面是「女」。', explain: '答案是「安」，下面是女；「宴」中間多了日，「案」下面多了木。', parts: ['宀', '女'], story: '上面是房子，下面是「女」。女生安心的待在屋子裡，就是「安」。不吵不鬧，叫做「安靜」。', sentence: '圖書館裡要保持安靜。', build: { layout: 'tb', show: ['？', '女'], answer: '宀', options: ['宀', '竹', '艹', '雨'], clue: '想一想：待在屋子裡才安心，上面是表示房子的部首。' } },
      { id: 'h-南', combo: { type: '象形字', pict: '「南」像古時候吊起來敲打的樂器。' }, char: '南', zhuyin: 'ㄋㄢˊ', radical: '十', strokes: 9, words: ['南部', '越南', '南瓜'], say: '南，南部的南', cloze: '＿部', img: 'map-south.png', options: ['南', '男', '難', '楠'], clue: '這個字的上面是「十」，下面像一個框，裡面有一個「羊」少一橫。', explain: '答案是「南」；「男」是男生的男，「難」是困難的難。', parts: ['十', '冂', '𢆉'], story: '「南」像古時候吊起來敲的樂器。東、南、西、北的南，就是這個字。', sentence: '外婆住在南部。' }
    ],
    vocab: [
      { id: 'v-郊外', word: '郊外', meaning: '城市外面，有草地、樹林的地方。', example: '春天到了，我們去＿＿看花。', img: 'picnic-field.png', options: ['郊外', '祖先', '竹筒', '香味'] },
      { id: 'v-活動', word: '活動', meaning: '大家一起做的事；也有動一動身體的意思。', example: '學校的園遊會＿＿好熱鬧。', img: 'school-fair.png', options: ['活動', '祖先', '香味', '竹筒'] },
      { id: 'v-好奇', word: '好奇', meaning: '對不知道的事很想知道。', example: '小貓＿＿的看著盒子裡的東西。', img: 'curious-cat.png', options: ['好奇', '平安', '郊外', '祖先'] },
      { id: 'v-竹筒', word: '竹筒', meaning: '竹子中間空空的一段，可以裝東西。', example: '奶奶用＿＿做了一個筆筒。', img: 'bamboo-tube.png', options: ['竹筒', '郊外', '香味', '活動'] },
      { id: 'v-香味', word: '香味', meaning: '聞起來很香的味道。', example: '廚房飄出炒菜的＿＿。', img: 'smell-cook.png', options: ['香味', '竹筒', '祖先', '平安'] },
      { id: 'v-祖先', word: '祖先', meaning: '很久很久以前的家人，像爺爺的爺爺。', example: '過節時，我們會拜拜，紀念＿＿。', img: 'family-tree.png', options: ['祖先', '郊外', '活動', '好奇'] },
      { id: 'v-便當盒', word: '便當盒', meaning: '裝飯菜、可以帶出門吃的盒子。', example: '我的＿＿＿裡有飯、有菜，還有一顆蛋。', img: 'lunch-box.png', options: ['便當盒', '客家人', '清明節', '保平安'] },
      { id: 'v-客家人', word: '客家人', meaning: '台灣的族群之一，有自己的語言和美食。', example: '我的外婆是＿＿＿，很會做粄條。', img: 'hakka-grandma.png', options: ['客家人', '清明節', '便當盒', '保平安'] },
      { id: 'v-清明節', word: '清明節', meaning: '春天的節日，大家會去紀念祖先。', example: '＿＿＿的時候，我們全家回老家。', img: 'tomb-sweep.png', options: ['清明節', '便當盒', '客家人', '保平安'] },
      { id: 'v-保平安', word: '保平安', meaning: '保佑大家都平平安安，不會出事。', example: '奶奶給我一個香包，說可以＿＿＿。', img: 'charm.png', options: ['保平安', '便當盒', '清明節', '客家人'] },
      { id: 'v-春捲', word: '春捲', meaning: '用薄薄的皮包著菜和肉捲起來的食物。', example: '越南＿＿是用米紙包的。', img: 'spring-roll.png', options: ['春捲', '竹筒', '艾粄', '便當'] },
      { id: 'v-正好', word: '正好', meaning: '剛剛好。', example: '我到車站的時候，公車＿＿來了。', img: 'bus-arrive.png', options: ['正好', '好奇', '平安', '活動'] }
    ],
    charwords: [
      { id: 'cw-樣', char: '樣', img: 'mirror-look.png', word: '樣子', charMeaning: '外表、形狀。', meaning: '看起來的模樣。', example: '小狗睡覺的＿＿好可愛。', options: ['樣子', '食物', '客人', '盒子'] },
      { id: 'cw-食', char: '食', img: 'food-table.png', word: '食物', charMeaning: '可以吃的東西。', meaning: '可以吃的東西。', example: '我們不可以浪費＿＿。', options: ['食物', '樣子', '節目', '南部'] },
      { id: 'cw-郊', char: '郊', img: 'picnic-field.png', word: '郊遊', charMeaning: '城市外面的地方。', meaning: '到城市外面去遊玩。', example: '天氣晴朗，最適合去＿＿。', options: ['郊遊', '保護', '安靜', '生活'] },
      { id: 'cw-活', char: '活', img: 'daily-life.png', word: '生活', charMeaning: '有生命的、會動的。', meaning: '每天過日子、做事情。', example: '鄉下的＿＿很悠閒。', options: ['生活', '食物', '盒子', '客人'] },
      { id: 'cw-奇', char: '奇', img: 'strange-cat.png', word: '奇怪', charMeaning: '特別、少見。', meaning: '和平常不一樣，讓人想不通。', example: '門外傳來＿＿的聲音。', options: ['奇怪', '方便', '安靜', '公平'] },
      { id: 'cw-筒', char: '筒', img: 'flashlight.png', word: '手電筒', charMeaning: '中間空空的圓柱。', meaning: '拿在手上、可以照亮的燈。', example: '停電了，快拿＿＿＿來照亮。', options: ['手電筒', '清明節', '便當盒', '客家人'] },
      { id: 'cw-香', char: '香', img: 'banana.png', word: '香蕉', charMeaning: '聞起來很好聞。', meaning: '黃黃的、彎彎的水果。', example: '猴子最愛吃＿＿。', options: ['香蕉', '盒子', '食物', '南部'] },
      { id: 'cw-味', char: '味', img: 'taste-soup.png', word: '味道', charMeaning: '嘗到或聞到的感覺。', meaning: '吃東西時嘗到的感覺。', example: '這顆檸檬的＿＿好酸。', options: ['味道', '樣子', '節目', '客人'] },
      { id: 'cw-便', char: '便', img: 'store-near.png', word: '方便', charMeaning: '容易、順手。', meaning: '做起來很容易、很順利。', example: '有了電梯，上下樓很＿＿。', options: ['方便', '奇怪', '公平', '安靜'] },
      { id: 'cw-當', char: '當', img: 'nod-yes.png', word: '當然', charMeaning: '應該、本來就是。', meaning: '本來就應該這樣。', example: '你幫了我，我＿＿要說謝謝。', options: ['當然', '方便', '奇怪', '保護'] },
      { id: 'cw-盒', char: '盒', img: 'box.png', word: '盒子', charMeaning: '有蓋子、可以裝東西的器具。', meaning: '可以裝東西、蓋起來的器具。', example: '我把彈珠放進＿＿裡。', options: ['盒子', '食物', '香蕉', '節目'] },
      { id: 'cw-客', char: '客', img: 'guests.png', word: '客人', charMeaning: '從外面來的人。', meaning: '來家裡或店裡的人。', example: '媽媽泡茶招待＿＿。', options: ['客人', '香蕉', '南部', '樣子'] },
      { id: 'cw-清', char: '清', img: 'clear-glass.png', word: '清楚', charMeaning: '乾淨、明白。', meaning: '看得、聽得很明白。', example: '老師說話很大聲，大家都聽得很＿＿。', options: ['清楚', '方便', '奇怪', '當然'] },
      { id: 'cw-節', char: '節', img: 'tv-show.png', word: '節目', charMeaning: '一段一段的；也指特別的日子。', meaning: '電視上、舞臺上表演的內容。', example: '晚會上有好多精采的＿＿。', options: ['節目', '客人', '盒子', '食物'] },
      { id: 'cw-保', char: '保', img: 'protect-chick.png', word: '保護', charMeaning: '照顧，不讓它受傷。', meaning: '照顧好，不讓它受到傷害。', example: '我們要＿＿小動物。', options: ['保護', '郊遊', '清楚', '生活'] },
      { id: 'cw-平', char: '平', img: 'fair-share.png', word: '公平', charMeaning: '沒有高低，一樣。', meaning: '對每個人都一樣，沒有偏心。', example: '玩遊戲要輪流，這樣才＿＿。', options: ['公平', '當然', '安靜', '方便'] },
      { id: 'cw-安', char: '安', img: 'quiet-library.png', word: '安靜', charMeaning: '平靜、穩穩的。', meaning: '沒有吵鬧的聲音。', example: '弟弟睡著了，請大家＿＿。', options: ['安靜', '公平', '奇怪', '清楚'] },
      { id: 'cw-南', char: '南', img: 'map-south.png', word: '南部', charMeaning: '東南西北的南邊。', meaning: '南邊的地方。', example: '暑假我們去＿＿看海。', options: ['南部', '客人', '樣子', '節目'] }
    ],
    fix: [
      { id: 'fx-樣', char: '樣', wrong: '洋', sentence: '我的筆和他的筆長得不一樣。', options: ['樣', '洋', '羨'], clue: '外表、形狀，左邊是木字旁。', explain: '要改成「樣」。不一樣的樣左邊是木；「洋」是海洋的洋。' },
      { id: 'fx-郊', char: '郊', wrong: '校', sentence: '老師帶我們去郊外玩。', options: ['郊', '校', '交'], clue: '城市外面的地方，右邊是耳朵旁。', explain: '要改成「郊」。郊外的郊右邊是阝；「校」是學校的校。' },
      { id: 'fx-活', char: '活', wrong: '話', sentence: '運動會的活動好熱鬧。', options: ['活', '話', '括'], clue: '動起來的，左邊是三點水。', explain: '要改成「活」。活動的活左邊是三點水；「話」是說話的話。' },
      { id: 'fx-奇', char: '奇', wrong: '寄', sentence: '這個魔術好神奇。', options: ['奇', '寄', '騎'], clue: '特別少見，上面沒有寶蓋頭。', explain: '要改成「奇」。神奇的奇上面是大；「寄」是寄信的寄。' },
      { id: 'fx-筒', char: '筒', wrong: '洞', sentence: '我把信放進郵筒裡。', options: ['筒', '洞', '桶'], clue: '中間空空的圓柱，上面是竹字頭。', explain: '要改成「筒」。郵筒的筒上面是竹字頭；「洞」是山洞的洞。' },
      { id: 'fx-味', char: '味', wrong: '妹', sentence: '這道菜的味道真好。', options: ['味', '妹', '未'], clue: '嘗到的感覺，左邊是口。', explain: '要改成「味」。味道的味左邊是口；「妹」是妹妹的妹。' },
      { id: 'fx-便', char: '便', wrong: '更', sentence: '學校旁邊有書店，買書很方便。', options: ['便', '更', '使'], clue: '很順手、很容易，左邊要有單人旁。', explain: '要改成「便」。方便的便左邊是單人旁；「更」少了左邊。' },
      { id: 'fx-盒', char: '盒', wrong: '合', sentence: '我把鉛筆收進鉛筆盒。', options: ['盒', '合', '盆'], clue: '可以裝東西的，下面要有「皿」。', explain: '要改成「盒」。鉛筆盒的盒下面有皿；「合」少了下面。' },
      { id: 'fx-客', char: '客', wrong: '容', sentence: '今天家裡來了三位客人。', options: ['客', '容', '各'], clue: '從外面來的人，下面是「各」。', explain: '要改成「客」。客人的客下面是各；「容」下面是谷。' },
      { id: 'fx-節', char: '節', wrong: '即', sentence: '中秋節的時候，大家一起賞月。', options: ['節', '即', '範'], clue: '特別的日子，上面要有竹字頭。', explain: '要改成「節」。中秋節的節上面有竹字頭；「即」少了上面。' },
      { id: 'fx-保', char: '保', wrong: '呆', sentence: '媽媽說要好好保護眼睛。', options: ['保', '呆', '堡'], clue: '照顧好、不讓它受傷，左邊要有單人旁。', explain: '要改成「保」。保護的保左邊是單人旁；「呆」少了左邊。' },
      { id: 'fx-安', char: '安', wrong: '案', sentence: '上課的時候，教室很安靜。', options: ['安', '案', '宴'], clue: '不吵不鬧，下面只有「女」。', explain: '要改成「安」。安靜的安下面是女；「案」下面多了木。' }
    ],
    similar: [
      { id: 's1', meaning: '「＿道」是嘗到的感覺。', sentence: '這顆糖的＿道是甜的。', frame: '＿道', options: ['味', '妹'], answer: '味', clue: '提示：和嘴巴有關，左邊是口。', explain: '答案是「味」；「妹」是妹妹的妹。' },
      { id: 's2', meaning: '「姐＿」是同一家的女孩子們。', sentence: '她們兩個是好姐＿。', frame: '姐＿', options: ['妹', '味'], answer: '妹', clue: '提示：和女生有關，左邊是女。', explain: '答案是「妹」；「味」是味道的味。' },
      { id: 's3', meaning: '「生＿」是每天過日子。', sentence: '奶奶在鄉下的生＿很快樂。', frame: '生＿', options: ['活', '話'], answer: '活', clue: '提示：左邊是三點水。', explain: '答案是「活」；「話」是說話的話。' },
      { id: 's4', meaning: '「說＿」是用嘴巴把想法講出來。', sentence: '上課時要舉手再說＿。', frame: '說＿', options: ['話', '活'], answer: '話', clue: '提示：和講出來有關，左邊是言字旁。', explain: '答案是「話」；「活」是生活的活。' },
      { id: 's5', meaning: '「竹＿」是竹子空空的一段。', sentence: '小星用竹＿裝米飯。', frame: '竹＿', options: ['筒', '洞'], answer: '筒', clue: '提示：上面是竹字頭。', explain: '答案是「筒」；「洞」是山洞的洞。' },
      { id: 's6', meaning: '「山＿」是山裡面空空的、可以走進去的地方。', sentence: '火車開進了山＿。', frame: '山＿', options: ['洞', '筒'], answer: '洞', clue: '提示：左邊是三點水。', explain: '答案是「洞」；「筒」是竹筒的筒。' },
      { id: 's7', meaning: '「＿人」是來家裡的人。', sentence: '家裡來了＿人，我幫忙倒茶。', frame: '＿人', options: ['客', '容'], answer: '客', clue: '提示：寶蓋頭下面是「各」。', explain: '答案是「客」；「容」是笑容的容。' },
      { id: 's8', meaning: '「笑＿」是笑的樣子。', sentence: '奶奶的臉上露出笑＿。', frame: '笑＿', options: ['容', '客'], answer: '容', clue: '提示：寶蓋頭下面是「谷」。', explain: '答案是「容」；「客」是客人的客。' }
    ],
    listen: [
      { id: 'l1', text: '竹子空空的一段，裡面裝著米飯。', answer: 0, options: [{ text: '竹筒飯', img: 'bamboo-rice.png' }, { text: '春捲', img: 'spring-roll.png' }, { text: '香蕉', img: 'banana.png' }, { text: '盒子', img: 'box.png' }] },
      { id: 'l2', text: '用薄薄的米紙，包著蝦子和青菜。', answer: 0, options: [{ text: '越南春捲', img: 'spring-roll.png' }, { text: '竹筒飯', img: 'bamboo-rice.png' }, { text: '艾粄', img: 'ai-ban.png' }, { text: '香蕉', img: 'banana.png' }] },
      { id: 'l3', text: '用米和艾草做成，綠綠的客家點心。', answer: 0, options: [{ text: '艾粄', img: 'ai-ban.png' }, { text: '春捲', img: 'spring-roll.png' }, { text: '便當', img: 'lunch-box.png' }, { text: '香蕉', img: 'banana.png' }] },
      { id: 'l4', text: '城市外面，有草地、有樹林的地方。', answer: 0, options: [{ text: '郊外', img: 'picnic-field.png' }, { text: '客廳', img: 'guests.png' }, { text: '南部', img: 'map-south.png' }, { text: '節目', img: 'tv-show.png' }] },
      { id: 'l5', text: '裝著飯和菜，中午帶去學校吃。', answer: 0, options: [{ text: '便當盒', img: 'lunch-box.png' }, { text: '手電筒', img: 'flashlight.png' }, { text: '竹筒', img: 'bamboo-tube.png' }, { text: '盒子', img: 'box.png' }] },
      { id: 'l6', text: '廚房飄出炒菜好聞的味道。', answer: 0, options: [{ text: '香味', img: 'smell-cook.png' }, { text: '安靜', img: 'quiet-library.png' }, { text: '奇怪', img: 'strange-cat.png' }, { text: '公平', img: 'fair-share.png' }] },
      { id: 'l7', text: '小貓一直盯著盒子，很想知道裡面是什麼。', answer: 0, options: [{ text: '好奇', img: 'curious-cat.png' }, { text: '安靜', img: 'quiet-library.png' }, { text: '保護', img: 'protect-chick.png' }, { text: '方便', img: 'store-near.png' }] },
      { id: 'l8', text: '晚上停電，拿出來照亮的東西。', answer: 0, options: [{ text: '手電筒', img: 'flashlight.png' }, { text: '便當盒', img: 'lunch-box.png' }, { text: '竹筒', img: 'bamboo-tube.png' }, { text: '節目', img: 'tv-show.png' }] }
    ],
    phrase: {
      pickName: '看圖選一選',
      pickSay: '看圖，選出最適合的詞，說說看要教誰做什麼。',
      intro: { example: '教弟弟綁鞋帶', img: 'pr-teach-shoelace.png', parts: [{ text: '教' }, { text: '弟弟', role: '誰' }, { text: '綁鞋帶', role: '做什麼' }],
        explain: '先說「教」，再說教誰，最後說教他做什麼事。' },
      pick: [
        { id: 'ph1', img: 'pr-teach-phone.png', before: '教奶奶', join: '', noun: '。', ask: '教奶奶做什麼', look: '再看看圖片，孫女拿著什麼東西在教奶奶？', options: ['用手機', '跳繩', '游泳', '爬樹'], clue: '提示：奶奶拿著一個小小的螢幕，想打視訊。', explain: '答案是「用手機」，完整的短語是「教奶奶用手機」。' },
        { id: 'ph2', img: 'pr-teach-bike.png', before: '教妹妹', join: '', noun: '。', ask: '教妹妹做什麼', look: '再看看圖片，爸爸扶著妹妹坐在什麼上面？', options: ['騎腳踏車', '寫字', '洗碗', '唱歌'], clue: '提示：妹妹坐在兩個輪子上，爸爸在後面扶著。', explain: '答案是「騎腳踏車」，完整的短語是「教妹妹騎腳踏車」。' },
        { id: 'ph3', img: 'pr-teach-dog.png', before: '教小狗', join: '', noun: '。', ask: '教小狗做什麼', look: '再看看圖片，主人舉起手，小狗做了什麼動作？', options: ['握手', '煮飯', '畫畫', '寫信'], clue: '提示：小狗把前腳放在主人的掌心上。', explain: '答案是「握手」，完整的短語是「教小狗握手」。' },
        { id: 'ph4', img: 'pr-teach-fold.png', before: '教同學', join: '', noun: '。', ask: '教同學做什麼', look: '再看看圖片，桌上有彩色的紙，他們在做什麼？', options: ['摺紙', '游泳', '睡覺', '跑步'], clue: '提示：彩色的方形薄片，變成了一隻小鶴。', explain: '答案是「摺紙」，完整的短語是「教同學摺紙」。' }
      ],
      fill: [
        { id: 'pf1', img: 'pr-teach-phone.png', parts: ['教', '奶奶', '用手機'] },
        { id: 'pf2', img: 'pr-teach-bike.png', parts: ['教', '妹妹', '騎腳踏車'] },
        { id: 'pf3', img: 'pr-teach-dog.png', parts: ['教', '小狗', '握手'] },
        { id: 'pf4', img: 'pr-teach-fold.png', parts: ['教', '同學', '摺紙'] }
      ],
      say: [],
      words: [],
      choose: [],
      make: [],
      phrase2: {
        intro: { example: '弟弟怎麼哭了？', img: 'pz-boy-cry.png', parts: [{ text: '弟弟', role: '誰' }, { text: '怎麼' }, { text: '哭了', role: '做什麼' }, { text: '？' }],
          explain: '先說是誰，加上「怎麼」，再說他做了什麼，最後加上問號，就變成一個問題。' },
        pick: [
          { id: 'p2-pz1', img: 'pz-wet-dog.png', before: '小狗怎麼', join: '', noun: '？', ask: '小狗怎麼了', look: '再看看圖片，小狗全身溼答答的。', options: ['溼透了', '睡著了', '變胖了', '飛走了'], clue: '提示：牠剛剛跑到雨裡玩，身上都在滴水。', explain: '答案是「溼透了」，完整的問句是「小狗怎麼溼透了？」' },
          { id: 'p2-pz2', img: 'pz-flower-wilt.png', before: '花怎麼', join: '', noun: '？', ask: '花怎麼了', look: '再看看圖片，花垂下頭，葉子黃黃的。', options: ['枯萎了', '長高了', '開花了', '變紅了'], clue: '提示：好幾天沒澆水，它變得乾乾的。', explain: '答案是「枯萎了」，完整的問句是「花怎麼枯萎了？」' },
          { id: 'p2-pz3', img: 'pz-sister-late.png', before: '姐姐怎麼', join: '', noun: '？', ask: '姐姐怎麼了', look: '再看看圖片，時鐘指著很晚的時間，門口沒有人。', options: ['還沒回來', '在睡覺', '在吃飯', '在洗澡'], clue: '提示：天都黑了，門口一直等不到她的身影。', explain: '答案是「還沒回來」，完整的問句是「姐姐怎麼還沒回來？」' }
        ],
        fill: [
          { id: 'pz1', img: 'pz-wet-dog.png', parts: ['小狗', '怎麼', '溼透了', '？'] },
          { id: 'pz2', img: 'pz-flower-wilt.png', parts: ['花', '怎麼', '枯萎了', '？'] },
          { id: 'pz3', img: 'pz-sister-late.png', parts: ['姐姐', '怎麼', '還沒回來', '？'] }
        ]
      }
    },
    pattern: [
      { key: 'youyouhaiyou', id: 'yy', title: '有……有……還有……', img: 'youyouhaiyou.png', meaning: '用「有……有……還有……」，一口氣說出一樣東西裡的三個特別的地方。',
        examples: ['書包裡有課本，有鉛筆盒，還有水壺。'],
        match: [
          { id: 'pt-yy-m1', img: 'pt-fruit-basket.png', front: '籃子裡有蘋果，有香蕉，', options: ['還有葡萄。', '還有鉛筆。', '還有拖鞋。'], clue: '提示：看看圖片，籃子裡還有哪一種水果？', explain: '答案是「還有葡萄」：三個都是水果。' },
          { id: 'pt-yy-m2', img: 'pt-zoo.png', front: '動物園裡有大象，有長頸鹿，', options: ['還有獅子。', '還有冰箱。', '還有書包。'], clue: '提示：看看圖片，動物園裡還有哪一種動物？', explain: '答案是「還有獅子」：三個都是動物。' },
          { id: 'pt-yy-m3', img: 'pt-pencil-case.png', front: '鉛筆盒裡有鉛筆，有橡皮擦，', options: ['還有尺。', '還有小狗。', '還有蛋糕。'], clue: '提示：看看圖片，鉛筆盒裡還有哪一種文具？', explain: '答案是「還有尺」：三個都是文具。' }
        ],
        conj: [
          { id: 'pt-yy-c1', full: '花園裡有玫瑰，有百合，還有向日葵。', img: 'pt-garden.png', sentence: '花園裡＿玫瑰，＿百合，＿＿向日葵。', options: ['有……有……還有……', '是……還是……', '只要……就……'], clue: '提示：一口氣說出三種花。數數看有幾個空格。', explain: '答案是「有……有……還有……」：花園裡有玫瑰，有百合，還有向日葵。' },
          { id: 'pt-yy-c2', full: '早餐有牛奶，有麵包，還有荷包蛋。', img: 'pt-breakfast.png', sentence: '早餐＿牛奶，＿麵包，＿＿荷包蛋。', options: ['有……有……還有……', '是……還是……', '只要……就……'], clue: '提示：一口氣說出三樣早餐。數數看有幾個空格。', explain: '答案是「有……有……還有……」：早餐有牛奶，有麵包，還有荷包蛋。' },
          { id: 'pt-yy-c3', full: '池塘裡有小魚，有青蛙，還有烏龜。', img: 'pt-pond.png', sentence: '池塘裡＿小魚，＿青蛙，＿＿烏龜。', options: ['有……有……還有……', '是……還是……', '只要……就……'], clue: '提示：一口氣說出三種小動物。數數看有幾個空格。', explain: '答案是「有……有……還有……」：池塘裡有小魚，有青蛙，還有烏龜。' }
        ],
        half: [
          { id: 'pt-yy-h1', front: '冰箱裡有牛奶，有雞蛋，', clue: '提示：冰箱裡還有什麼？記得要說「還有」。', model: '還有西瓜。' },
          { id: 'pt-yy-h2', front: '操場上有人跑步，有人跳繩，', clue: '提示：操場上還有人在做什麼？記得要說「還有」。', model: '還有人在打球。' }
        ],
        whole: [
          { id: 'pt-yy-w1', clue: '提示：用「有……有……還有……」說出一個地方的三樣東西。想想看：你的房間裡有什麼？', model: '我的房間裡有書桌，有小床，還有一隻小熊。' }
        ] },
      { key: 'budanhai', id: 'bd', title: '不但……還……', img: 'budanhai.png', meaning: '先用「不但」說一個好地方，再用「還」說另一個更進一步的好地方。',
        examples: ['這家店的麵不但便宜，還很好吃。'],
        match: [
          { id: 'pt-bd-m1', img: 'pt-big-brother.png', front: '哥哥不但會游泳，', options: ['還會溜冰。', '還會睡覺。', '還會哭哭。'], clue: '提示：看看圖片，哥哥還會什麼運動？', explain: '答案是「還會溜冰」：兩件都是哥哥會的本領。' },
          { id: 'pt-bd-m2', img: 'pt-strawberry.png', front: '這顆草莓不但很大，', options: ['還很甜。', '還很硬。', '還很吵。'], clue: '提示：草莓吃起來的味道怎麼樣？', explain: '答案是「還很甜」：又大又甜，兩個好地方。' },
          { id: 'pt-bd-m3', img: 'pt-sister-help.png', front: '姐姐不但幫我寫功課，', options: ['還陪我玩積木。', '還搶我的糖。', '還把我推倒。'], clue: '提示：姐姐對我好不好？她還做了什麼好事？', explain: '答案是「還陪我玩積木」：兩件都是姐姐做的好事。' }
        ],
        conj: [
          { id: 'pt-bd-c1', full: '這件外套不但好看，還很保暖。', img: 'pt-coat.png', sentence: '這件外套＿＿好看，＿很保暖。', options: ['不但……還……', '有……有……還有……', '……卻……'], clue: '提示：先說一個好地方，再說另一個好地方。數數看有幾個空格。', explain: '答案是「不但……還……」：這件外套不但好看，還很保暖。' },
          { id: 'pt-bd-c2', full: '小狗不但會撿球，還會握手。', img: 'pt-smart-dog.png', sentence: '小狗＿＿會撿球，＿會握手。', options: ['不但……還……', '有……有……還有……', '……卻……'], clue: '提示：小狗會兩種本領。數數看有幾個空格。', explain: '答案是「不但……還……」：小狗不但會撿球，還會握手。' },
          { id: 'pt-bd-c3', full: '多喝水不但對身體好，還能讓皮膚更漂亮。', img: 'pt-drink-water.png', sentence: '多喝水＿＿對身體好，＿能讓皮膚更漂亮。', options: ['不但……還……', '有……有……還有……', '……卻……'], clue: '提示：多喝水有兩個好處。數數看有幾個空格。', explain: '答案是「不但……還……」：多喝水不但對身體好，還能讓皮膚更漂亮。' }
        ],
        half: [
          { id: 'pt-bd-h1', front: '我的好朋友不但很聰明，', clue: '提示：好朋友還有什麼好地方？記得要說「還」。', model: '還很會幫助別人。' },
          { id: 'pt-bd-h2', front: '這座公園不但很大，', clue: '提示：公園還有什麼好地方？記得要說「還」。', model: '還有很多好玩的設施。' }
        ],
        whole: [
          { id: 'pt-bd-w1', clue: '提示：先用「不但」說一個好地方，再用「還」說另一個好地方。想想看：你最喜歡的人或東西有什麼好？', model: '媽媽不但很會煮飯，還會講好聽的故事。' }
        ] }
    ]
  };
  if (typeof module === 'object' && module.exports) module.exports = d;
  else { root.H3A_WORDS = root.H3A_WORDS || {}; root.H3A_WORDS.L07 = d; }
})(this);
