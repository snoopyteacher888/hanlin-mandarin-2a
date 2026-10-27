/* 第 9 課字詞練習（公開、不加密）。句子和解釋都是 Claude 自己寫的，沒有課本原文。
   生字、語詞：options 的第一個是正確答案（作答時會打亂）。二年級：不放成語、修辭。這一課課本沒有句型。 */
(function (root) {
  var d = {
    quizLevels: { qa: 'infer', qb: 'infer', qc: 'infer', qd: 'extract', qe: 'infer', qf: 'interpret', qg: 'interpret', qh: 'evaluate', k1: 'evaluate', k2: 'evaluate' },
    quizHelp: {
      qf: { think: ['詩一開始，媽媽和爸爸分別在準備什麼？', '材料都準備好以後，最後大家一起做了什麼動作？'],
        why: '先洗小黃瓜和紅蘿蔔，再把米煮成飯，接著把海苔、米飯、蛋皮、蔬菜排好，最後細心的捲起來，就做成了壽司。' },
      qg: { think: ['全家人一起洗菜、煮飯、捲壽司，心情怎麼樣？', '是真的用膠水黏住，還是大家的感情變得更好了？'],
        why: '不是真的用膠水黏。全家人一起動手做美食，很快樂，感情變得更好，就好像緊緊黏在一起。' },
      qh: { think: ['小黃瓜真的會洗澡嗎？米粒真的會泡澡嗎？', '把食物寫得像人一樣，讀起來是不是比較好玩？'],
        why: '作者把洗菜寫成小黃瓜在沖澡，把煮飯寫成米粒在泡澡，好像食物都活起來了。這樣寫很有想像力，讀起來很有趣。' }
    },
    talkChoices: {
      k1: { good: ['我會幫忙洗青菜。', '我會幫忙擺碗筷，再一起捲壽司。'], bad: ['我會坐在旁邊玩手機。', '我會把食材偷偷吃光。'],
        why: '題目問可以幫什麼忙。洗菜、擺碗筷、一起捲壽司都是幫忙。玩手機沒有幫忙；把食材吃光，大家就沒辦法做了。' },
      k2: { good: ['我最愛的味道是媽媽煮的番茄湯。', '我最愛的味道是外婆滷的豬腳。'], bad: ['我最愛的顏色是藍色。', '我最愛的地方是公園。'],
        why: '題目問最愛的味道，要說一種食物。番茄湯、滷豬腳都是。顏色和地方不是味道。' }
    },
    hanzi: [
      { id: 'h-黃', combo: { type: '象形字', pict: '「黃」像古時候的人身上掛著一塊玉。' }, char: '黃', zhuyin: 'ㄏㄨㄤˊ', radical: '黃', strokes: 12, words: ['小黃瓜', '黃色', '金黃'], say: '黃，黃色的黃', cloze: '＿色', img: 'yellow-duck.png', options: ['黃', '橫', '廣', '黑'], clue: '這個字上面是廿字頭，中間是「由」，最下面是八。', explain: '答案是「黃」；「橫」左邊多了木，「廣」上面是广。', parts: ['廿', '由', '八'], story: '「黃」像古時候的人身上掛著一塊黃色的玉。像香蕉、像小鴨的顏色，就是「黃色」。', sentence: '浴缸裡有一隻黃色的小鴨子。' },
      { id: 'h-沖', combo: { layout: 'lr', parts: [['氵', 'm', '水'], ['中', 's', '']] }, char: '沖', zhuyin: 'ㄔㄨㄥ', radical: '水', strokes: 7, words: ['沖澡', '沖洗', '沖水'], say: '沖，沖洗的沖', cloze: '＿洗', img: 'rinse-veg.png', options: ['沖', '忠', '仲', '衝'], clue: '這個字的左邊是三點水，右邊是「中」。', explain: '答案是「沖」，左邊是三點水；「忠」下面是心，「仲」左邊是單人旁。', parts: ['氵', '中'], story: '左邊是水，右邊的「中」念起來像「沖」。用水一直流過去，把東西洗乾淨，就是「沖」。', sentence: '媽媽用水把青菜沖洗乾淨。', build: { layout: 'lr', show: ['？', '中'], answer: '氵', options: ['氵', '亻', '心', '口'], clue: '想一想：要讓什麼流過去，才能洗乾淨？' } },
      { id: 'h-澡', combo: { layout: 'lr', parts: [['氵', 'm', '水'], ['喿', 's', '']] }, char: '澡', zhuyin: 'ㄗㄠˇ', radical: '水', strokes: 16, words: ['洗澡', '沖澡', '泡澡'], say: '澡，洗澡的澡', cloze: '洗＿', img: 'bath.png', options: ['澡', '操', '燥', '躁'], clue: '這個字的左邊是三點水，右邊上面有三個口。', explain: '答案是「澡」，左邊是三點水；「操」左邊是提手旁，「燥」左邊是火。', parts: ['氵', '喿'], story: '左邊是水，右邊念起來像「澡」，上面三個口像小鳥在樹上吱吱叫。用水把身體洗乾淨，就是「洗澡」。', sentence: '我每天晚上都洗澡。', build: { layout: 'lr', show: ['？', '喿'], answer: '氵', options: ['氵', '扌', '火', '足'], clue: '想一想：把身體洗乾淨要用什麼？' } },
      { id: 'h-蘿', combo: { layout: 'tb', parts: [['艹', 'm', '植物'], ['羅', 's', '']] }, char: '蘿', zhuyin: 'ㄌㄨㄛˊ', radical: '艸', strokes: 23, words: ['紅蘿蔔', '白蘿蔔'], say: '蘿，蘿蔔的蘿', cloze: '白＿蔔', img: 'white-radish.png', options: ['蘿', '羅', '籮', '邏'], clue: '這個字的上面是草字頭，下面是「羅」。', explain: '答案是「蘿」，上面是草字頭；「羅」少了草字頭，「籮」上面是竹字頭。', parts: ['艹', '羅'], story: '上面是草字頭，表示植物；下面的「羅」念起來像「蘿」。長在土裡、根可以吃的「蘿蔔」，就用這個字。', sentence: '奶奶用白蘿蔔煮了一鍋湯。', build: { layout: 'tb', show: ['？', '羅'], answer: '艹', options: ['艹', '竹', '雨', '宀'], clue: '想一想：蘿蔔是植物，上面是哪一個部首？' } },
      { id: 'h-蔔', combo: { layout: 'tb', parts: [['艹', 'm', '植物'], ['匐', 's', '']] }, char: '蔔', zhuyin: '˙ㄅㄛ', radical: '艸', strokes: 15, words: ['紅蘿蔔', '白蘿蔔'], say: '蔔，蘿蔔的蔔', cloze: '紅蘿＿', img: 'carrot.png', options: ['蔔', '葡', '匐', '富'], clue: '這個字的上面是草字頭，下面像「匐」。', explain: '答案是「蔔」；「葡」是葡萄的葡，下面不一樣，「富」上面是寶蓋頭。', parts: ['艹', '匐'], story: '上面是草字頭，下面念起來像「蔔」。和「蘿」放在一起，就是長在土裡的「蘿蔔」。', sentence: '兔子最愛吃紅蘿蔔。', build: { layout: 'tb', show: ['？', '匐'], answer: '艹', options: ['艹', '宀', '竹', '雨'], clue: '想一想：蘿蔔是植物，上面是哪一個部首？' } },
      { id: 'h-哪', combo: { layout: 'lr', parts: [['口', 'm', '說話'], ['那', 's', '']] }, char: '哪', zhuyin: 'ㄋㄚˇ', radical: '口', strokes: 10, words: ['哪裡', '哪個', '好暖哪'], say: '哪，哪裡的哪', cloze: '＿個', img: 'which-one.png', options: ['哪', '那', '娜', '挪'], clue: '這個字的左邊是口，右邊是「那」。', explain: '答案是「哪」，左邊有口；「那」少了口，「挪」左邊是提手旁。', parts: ['口', '那'], story: '左邊是「口」，表示說話；右邊的「那」念起來像「哪」。用嘴巴問「是哪一個」，就用這個字。', sentence: '你喜歡哪個顏色？', build: { layout: 'lr', show: ['？', '那'], answer: '口', options: ['口', '扌', '女', '木'], clue: '想一想：問問題要用嘴巴，左邊是什麼？' } },
      { id: 'h-粒', combo: { layout: 'lr', parts: [['米', 'm', '米'], ['立', 's', '']] }, char: '粒', zhuyin: 'ㄌㄧˋ', radical: '米', strokes: 11, words: ['米粒', '一粒', '顆粒'], say: '粒，米粒的粒', cloze: '米＿', img: 'rice-grains.png', options: ['粒', '拉', '位', '泣'], clue: '這個字的左邊是「米」，右邊是「立」。', explain: '答案是「粒」，左邊是米；「拉」左邊是提手旁，「位」左邊是單人旁。', parts: ['米', '立'], story: '左邊是「米」，右邊的「立」念起來像「粒」。一顆一顆小小的米，就是「米粒」。', sentence: '碗裡還剩幾顆米粒。', build: { layout: 'lr', show: ['？', '立'], answer: '米', options: ['米', '扌', '亻', '氵'], clue: '想一想：一顆一顆小小的，和吃的什麼東西有關？' } },
      { id: 'h-熱', combo: { type: '形聲字', pict: '下面四點是「火」，表示熱；上面念起來像「熱」。' }, char: '熱', zhuyin: 'ㄖㄜˋ', radical: '火', strokes: 15, words: ['發熱', '熱水', '熱鬧'], say: '熱，熱水的熱', cloze: '＿水', img: 'hot-water.png', options: ['熱', '熟', '勢', '執'], clue: '這個字的下面有四點，上面右邊是「丸」。', explain: '答案是「熱」，上面右邊是丸；「熟」上面右邊也有丸，但左邊是享。', parts: ['埶', '灬'], story: '下面的四點是「火」，用火燒，溫度變高，就是「熱」。', sentence: '小心，杯子裡是熱水。' },
      { id: 'h-浴', combo: { layout: 'lr', parts: [['氵', 'm', '水'], ['谷', 's', '']] }, char: '浴', zhuyin: 'ㄩˋ', radical: '水', strokes: 10, words: ['浴室', '浴缸', '沐浴'], say: '浴，浴缸的浴', cloze: '＿缸', img: 'bathtub.png', options: ['浴', '俗', '裕', '谷'], clue: '這個字的左邊是三點水，右邊是「谷」。', explain: '答案是「浴」，左邊是三點水；「俗」左邊是單人旁，「裕」左邊是衣字旁。', parts: ['氵', '谷'], story: '左邊是水，右邊的「谷」念起來有點像「浴」。用水洗身體，就是「浴」。洗澡的房間叫「浴室」。', sentence: '浴缸裡放滿了溫溫的水。', build: { layout: 'lr', show: ['？', '谷'], answer: '氵', options: ['氵', '亻', '衤', '口'], clue: '想一想：洗身體要用什麼？' } },
      { id: 'h-蒸', combo: { layout: 'tb', parts: [['艹', 'm', '植物'], ['烝', 's', '']] }, char: '蒸', zhuyin: 'ㄓㄥ', radical: '艸', strokes: 14, words: ['蒸飯', '蒸氣', '蒸包子'], say: '蒸，蒸氣的蒸', cloze: '＿氣', img: 'steamer.png', options: ['蒸', '承', '葉', '燕'], clue: '這個字的上面是草字頭，最下面有四點。', explain: '答案是「蒸」，最下面有四點火；「承」上面沒有草字頭，「葉」下面是木。', parts: ['艹', '丞', '灬'], story: '上面是草字頭，下面的四點是火。用火把水燒開，用熱熱的水氣把食物弄熟，就是「蒸」。', sentence: '鍋子冒出白白的蒸氣。', build: { layout: 'tb', show: ['？', '烝'], answer: '艹', options: ['艹', '竹', '雨', '宀'], clue: '想一想：上面是和植物有關的部首。' } },
      { id: 'h-胖', combo: { layout: 'lr', parts: [['月', 'm', '身體'], ['半', 's', '']] }, char: '胖', zhuyin: 'ㄆㄤˋ', radical: '肉', strokes: 9, words: ['白胖', '胖嘟嘟', '胖胖的'], say: '胖，胖嘟嘟的胖', cloze: '＿嘟嘟', img: 'chubby-baby.png', options: ['胖', '伴', '拌', '判'], clue: '這個字的左邊是肉字旁，右邊是「半」。', explain: '答案是「胖」，左邊是月（肉）；「伴」左邊是單人旁，「拌」左邊是提手旁。', parts: ['月', '半'], story: '左邊的「月」是肉，表示身體；右邊的「半」念起來像「胖」。身上的肉多多的，就是「胖」。', sentence: '小寶寶的臉胖嘟嘟的。', build: { layout: 'lr', show: ['？', '半'], answer: '月', options: ['月', '亻', '扌', '刂'], clue: '想一想：和身體的肉有關，左邊是什麼？' } },
      { id: 'h-名', combo: { layout: 'tb', type: '會意字', parts: [['夕', 'm', '晚上'], ['口', 'm', '嘴巴']] }, char: '名', zhuyin: 'ㄇㄧㄥˊ', radical: '口', strokes: 6, words: ['點名', '名字', '有名'], say: '名，名字的名', cloze: '＿字', img: 'name-tag.png', options: ['名', '各', '多', '夕'], clue: '這個字的上面是「夕」，下面是「口」。', explain: '答案是「名」，上面是夕；「各」上面是夂，「多」是兩個夕。', parts: ['夕', '口'], story: '上面的「夕」是晚上，下面是「口」。晚上黑黑的看不見人，要用嘴巴叫他的名字，就是「名」。', sentence: '老師叫我的名字，我大聲說「有」。', build: { layout: 'tb', show: ['夕', '？'], answer: '口', options: ['口', '日', '夕', '子'], clue: '想一想：天黑看不到人，要用什麼叫他？' } },
      { id: 'h-苔', combo: { layout: 'tb', parts: [['艹', 'm', '植物'], ['台', 's', '']] }, char: '苔', zhuyin: 'ㄊㄞˊ', radical: '艸', strokes: 9, words: ['海苔', '青苔'], say: '苔，海苔的苔', cloze: '青＿', img: 'moss-rock.png', options: ['苔', '抬', '台', '胎'], clue: '這個字的上面是草字頭，下面是「台」。', explain: '答案是「苔」，上面是草字頭；「抬」左邊是提手旁，「台」少了草字頭。', parts: ['艹', '台'], story: '上面是草字頭，下面的「台」念起來像「苔」。長在溼溼的石頭上、綠綠小小的植物，就是「青苔」。', sentence: '溪邊的石頭長滿了青苔，好滑。', build: { layout: 'tb', show: ['？', '台'], answer: '艹', options: ['艹', '竹', '扌', '月'], clue: '想一想：青苔是植物，上面是哪一個部首？' } },
      { id: 'h-蛋', combo: { layout: 'tb', parts: [['疋', 's', ''], ['虫', 'm', '小動物']] }, char: '蛋', zhuyin: 'ㄉㄢˋ', radical: '虫', strokes: 11, words: ['蛋皮', '雞蛋', '蛋糕'], say: '蛋，雞蛋的蛋', cloze: '＿糕', img: 'cake.png', options: ['蛋', '蚤', '旦', '但'], clue: '這個字的下面是「虫」，上面是「疋」。', explain: '答案是「蛋」，上面是疋；「蚤」上面是叉，「旦」是元旦的旦。', parts: ['疋', '虫'], story: '下面的「虫」表示小動物，上面念起來像「蛋」。鳥和雞生出來、圓圓的東西，就是「蛋」。', sentence: '生日那天，我吃到大大的蛋糕。' },
      { id: 'h-蔬', combo: { layout: 'tb', parts: [['艹', 'm', '植物'], ['疏', 's', '']] }, char: '蔬', zhuyin: 'ㄕㄨ', radical: '艸', strokes: 15, words: ['蔬菜'], say: '蔬，蔬菜的蔬', cloze: '＿菜', img: 'veg-basket.png', options: ['蔬', '疏', '梳', '流'], clue: '這個字的上面是草字頭，下面是「疏」。', explain: '答案是「蔬」，上面是草字頭；「疏」少了草字頭，「梳」左邊是木。', parts: ['艹', '疏'], story: '上面是草字頭，下面的「疏」念起來像「蔬」。可以吃的植物，就是「蔬菜」。', sentence: '多吃蔬菜，身體才會健康。', build: { layout: 'tb', show: ['？', '疏'], answer: '艹', options: ['艹', '竹', '木', '雨'], clue: '想一想：可以吃的植物，上面是哪一個部首？' } },
      { id: 'h-通', combo: { layout: 'lr', parts: [['辶', 'm', '走路'], ['甬', 's', '']] }, char: '通', zhuyin: 'ㄊㄨㄥ', radical: '辵', strokes: 11, words: ['通通', '交通', '通過'], say: '通，交通的通', cloze: '交＿', img: 'traffic.png', options: ['通', '桶', '痛', '捅'], clue: '這個字的外面是走路的「辶」，裡面是「甬」。', explain: '答案是「通」，外面是辶；「桶」左邊是木，「痛」外面是病字旁。', parts: ['辶', '甬'], story: '「辶」是走路，裡面的「甬」念起來像「通」。路沒有被擋住，走得過去，就是「通」。路上的車和人來來去去，叫做「交通」。', sentence: '早上的交通好擁擠。' },
      { id: 'h-細', combo: { layout: 'lr', parts: [['糸', 'm', '絲線'], ['田', 's', '']] }, char: '細', zhuyin: 'ㄒㄧˋ', radical: '糸', strokes: 11, words: ['細心', '仔細', '細細的'], say: '細，仔細的細', cloze: '仔＿', img: 'magnifier.png', options: ['細', '紐', '畫', '思'], clue: '這個字的左邊是絞絲旁，右邊是「田」。', explain: '答案是「細」，左邊是絞絲旁；「思」上面是田、下面是心。', parts: ['糸', '田'], story: '左邊的「糸」是很細的絲線，右邊是「田」。像絲一樣小小的，就是「細」。很小心、很用心的看，叫做「仔細」。', sentence: '我仔細的看清楚每一個字。', build: { layout: 'lr', show: ['？', '田'], answer: '糸', options: ['糸', '亻', '心', '木'], clue: '想一想：很細很細的東西，左邊是和絲線有關的部首。' } },
      { id: 'h-淡', combo: { layout: 'lr', parts: [['氵', 'm', '水'], ['炎', 's', '']] }, char: '淡', zhuyin: 'ㄉㄢˋ', radical: '水', strokes: 11, words: ['淡淡', '清淡', '淡水'], say: '淡，清淡的淡', cloze: '清＿', img: 'plain-soup.png', options: ['淡', '談', '炎', '痰'], clue: '這個字的左邊是三點水，右邊是兩個火。', explain: '答案是「淡」，左邊是三點水；「談」左邊是言，「炎」少了左邊。', parts: ['氵', '炎'], story: '左邊是水，右邊的「炎」是兩個火。加了很多水，味道就不濃了，就是「淡」。', sentence: '生病的時候要吃清淡的食物。', build: { layout: 'lr', show: ['？', '炎'], answer: '氵', options: ['氵', '言', '火', '扌'], clue: '想一想：加了什麼，味道就變淡了？' } },
      { id: 'h-飄', combo: { layout: 'lr', parts: [['票', 's', ''], ['風', 'm', '風']] }, char: '飄', zhuyin: 'ㄆㄧㄠ', radical: '風', strokes: 20, words: ['飄出來', '飄落', '飄動'], say: '飄，飄落的飄', cloze: '＿落', img: 'falling-leaf.png', options: ['飄', '漂', '票', '標'], clue: '這個字的左邊是「票」，右邊是「風」。', explain: '答案是「飄」，右邊是風；「漂」左邊是三點水，「標」左邊是木。', parts: ['票', '風'], story: '左邊的「票」念起來像「飄」，右邊是「風」。東西被風吹著，在空中輕輕的動，就是「飄」。', sentence: '秋天到了，樹葉一片片飄落。', build: { layout: 'lr', show: ['票', '？'], answer: '風', options: ['風', '氵', '木', '頁'], clue: '想一想：樹葉在空中動，是被什麼吹的？' } }
    ],
    vocab: [
      { id: 'v-涼', word: '涼', meaning: '溫度有一點低，讓人覺得舒服。', example: '樹下好＿，我們在這裡休息。', img: 'tree-shade.png', options: ['涼', '暖', '熱', '淡'] },
      { id: 'v-沖澡', word: '沖澡', meaning: '用水從頭往下沖，把身體洗乾淨。', example: '運動完，我去＿＿。', img: 'shower.png', options: ['沖澡', '點名', '細心', '通通'] },
      { id: 'v-小黃瓜', word: '小黃瓜', meaning: '綠綠的、長長的，可以生吃的蔬菜。', example: '媽媽把＿＿＿切成一片一片。', img: 'cucumber.png', options: ['小黃瓜', '紅蘿蔔', '蛋皮捲', '海苔片'] },
      { id: 'v-紅蘿蔔', word: '紅蘿蔔', meaning: '橘紅色、長在土裡的蔬菜，兔子很愛吃。', example: '小兔子抱著一根＿＿＿。', img: 'carrot.png', options: ['紅蘿蔔', '小黃瓜', '海苔片', '蛋皮捲'] },
      { id: 'v-暖', word: '暖', meaning: '溫溫熱熱的，很舒服。', example: '冬天穿上外套，身體好＿。', img: 'warm-coat.png', options: ['暖', '涼', '淡', '細'] },
      { id: 'v-米粒', word: '米粒', meaning: '一顆一顆的米。', example: '吃飯時，要把碗裡的＿＿吃乾淨。', img: 'rice-grains.png', options: ['米粒', '蔬菜', '海苔', '浴室'] },
      { id: 'v-浴室', word: '浴室', meaning: '洗澡的房間。', example: '我在＿＿裡刷牙洗臉。', img: 'bathroom.png', options: ['浴室', '蔬菜', '米粒', '海苔'] },
      { id: 'v-蒸', word: '蒸', meaning: '用熱熱的水氣把食物弄熟。', example: '奶奶用大鍋子＿包子。', img: 'steamer.png', options: ['蒸', '飄', '黏', '捲'] },
      { id: 'v-點名', word: '點名', meaning: '叫每個人的名字，看看有沒有到。', example: '上課前，老師先＿＿。', img: 'roll-call.png', options: ['點名', '沖澡', '細心', '通通'] },
      { id: 'v-海苔', word: '海苔', meaning: '長在海裡、做成薄片的綠黑色食物。', example: '我用＿＿把飯糰包起來。', img: 'seaweed.png', options: ['海苔', '米粒', '蔬菜', '浴室'] },
      { id: 'v-蔬菜', word: '蔬菜', meaning: '可以吃的植物，像青菜、蘿蔔。', example: '多吃＿＿，身體好。', img: 'veg-basket.png', options: ['蔬菜', '海苔', '米粒', '浴室'] },
      { id: 'v-通通', word: '通通', meaning: '全部、一個都不少。', example: '玩具＿＿收進箱子裡了。', img: 'toy-box.png', options: ['通通', '淡淡', '細心', '點名'] },
      { id: 'v-細心', word: '細心', meaning: '很小心、很仔細。', example: '姐姐很＿＿的把破掉的書補好。', img: 'fix-book.png', options: ['細心', '通通', '淡淡', '沖澡'] },
      { id: 'v-黏', word: '黏', meaning: '像有膠水一樣，貼在一起分不開。', example: '糖果＿在手上，好難洗掉。', img: 'sticky-hand.png', options: ['黏', '蒸', '飄', '捲'] },
      { id: 'v-淡淡', word: '淡淡', meaning: '不濃、輕輕的。', example: '花園裡有＿＿的花香。', img: 'flower-smell.png', options: ['淡淡', '通通', '細心', '點名'] },
      { id: 'v-飄', word: '飄', meaning: '在空中輕輕的移動。', example: '烤麵包的香味＿到了房間裡。', img: 'bread-smell.png', options: ['飄', '蒸', '黏', '捲'] }
    ],
    charwords: [
      { id: 'cw-黃', char: '黃', img: 'golden-field.png', word: '金黃', charMeaning: '像香蕉的顏色。', meaning: '黃得發亮，像金子一樣。', example: '秋天的稻田一片＿＿。', options: ['金黃', '沖洗', '洗澡', '熱水'] },
      { id: 'cw-沖', char: '沖', img: 'rinse-veg.png', word: '沖洗', charMeaning: '用水一直流過去。', meaning: '用水沖，把東西洗乾淨。', example: '玩完沙子，要把手＿＿乾淨。', options: ['沖洗', '浴缸', '蒸氣', '交通'] },
      { id: 'cw-澡', char: '澡', img: 'bath.png', word: '洗澡', charMeaning: '把身體洗乾淨。', meaning: '用水把身體洗乾淨。', example: '弟弟最喜歡在浴缸裡＿＿。', options: ['洗澡', '沖洗', '仔細', '清淡'] },
      { id: 'cw-蘿', char: '蘿', img: 'white-radish.png', word: '白蘿蔔', charMeaning: '長在土裡的蔬菜。', meaning: '白白的、長在土裡的蘿蔔。', example: '冬天喝＿＿＿湯，暖呼呼的。', options: ['白蘿蔔', '胖嘟嘟', '蒸包子', '淡淡的'] },
      { id: 'cw-蔔', char: '蔔', img: 'carrot.png', word: '紅蘿蔔', charMeaning: '和蘿一起，是一種蔬菜。', meaning: '橘紅色的蘿蔔。', example: '兔子咬著一根＿＿＿。', options: ['紅蘿蔔', '白蘿蔔', '胖嘟嘟', '飄出來'] },
      { id: 'cw-哪', char: '哪', img: 'which-one.png', word: '哪裡', charMeaning: '問是什麼地方、哪一個。', meaning: '問在什麼地方。', example: '你的家住在＿＿？', options: ['哪裡', '名字', '交通', '蛋糕'] },
      { id: 'cw-粒', char: '粒', img: 'grape-one.png', word: '一粒', charMeaning: '一顆一顆小小的。', meaning: '一顆小小的東西。', example: '我吃了＿＿葡萄，好甜。', options: ['一粒', '洗澡', '熱水', '名字'] },
      { id: 'cw-熱', char: '熱', img: 'busy-street.png', word: '熱鬧', charMeaning: '溫度高；也有人很多的意思。', meaning: '人很多、聲音很多，很熱烈。', example: '過年的夜市好＿＿。', options: ['熱鬧', '清淡', '仔細', '交通'] },
      { id: 'cw-浴', char: '浴', img: 'bathtub.png', word: '浴缸', charMeaning: '洗身體。', meaning: '洗澡時裝水泡澡的大缸。', example: '＿＿裡有好多泡泡。', options: ['浴缸', '蛋糕', '名字', '青苔'] },
      { id: 'cw-蒸', char: '蒸', img: 'steamer.png', word: '蒸氣', charMeaning: '用水氣把東西弄熟。', meaning: '水燒開以後冒出來的白白的氣。', example: '水燒開了，冒出好多＿＿。', options: ['蒸氣', '浴缸', '青苔', '名字'] },
      { id: 'cw-胖', char: '胖', img: 'chubby-baby.png', word: '胖嘟嘟', charMeaning: '身上的肉多。', meaning: '胖胖的、圓圓的，很可愛。', example: '小豬的身體＿＿＿的。', options: ['胖嘟嘟', '白蘿蔔', '紅蘿蔔', '飄出來'] },
      { id: 'cw-名', char: '名', img: 'name-tag.png', word: '名字', charMeaning: '叫一個人用的稱呼。', meaning: '每個人自己的稱呼。', example: '請在作業本上寫上你的＿＿。', options: ['名字', '交通', '蛋糕', '熱水'] },
      { id: 'cw-苔', char: '苔', img: 'moss-rock.png', word: '青苔', charMeaning: '長在溼溼地方的小植物。', meaning: '長在溼溼石頭上的綠色小植物。', example: '石頭上長滿＿＿，走路要小心。', options: ['青苔', '浴缸', '蒸氣', '蛋糕'] },
      { id: 'cw-蛋', char: '蛋', img: 'cake.png', word: '蛋糕', charMeaning: '鳥、雞生的圓圓的東西。', meaning: '用雞蛋和麵粉做的、軟軟甜甜的點心。', example: '媽媽買了一個草莓＿＿。', options: ['蛋糕', '名字', '青苔', '浴缸'] },
      { id: 'cw-蔬', char: '蔬', img: 'veg-basket.png', word: '蔬菜', charMeaning: '可以吃的植物。', meaning: '可以吃的植物，像青菜、蘿蔔。', example: '菜園裡種了很多＿＿。', options: ['蔬菜', '蛋糕', '名字', '交通'] },
      { id: 'cw-通', char: '通', img: 'traffic.png', word: '交通', charMeaning: '走得過去、沒有擋住。', meaning: '路上車子、行人來來去去的情形。', example: '下雨天，＿＿特別擁擠。', options: ['交通', '熱鬧', '仔細', '清淡'] },
      { id: 'cw-細', char: '細', img: 'magnifier.png', word: '仔細', charMeaning: '小小的；也有用心的意思。', meaning: '很用心、很小心，一點也不馬虎。', example: '寫完作業，要＿＿檢查一遍。', options: ['仔細', '交通', '熱鬧', '沖洗'] },
      { id: 'cw-淡', char: '淡', img: 'plain-soup.png', word: '清淡', charMeaning: '味道不濃。', meaning: '味道不重、不油、不鹹。', example: '感冒的時候，要吃＿＿一點。', options: ['清淡', '熱鬧', '交通', '金黃'] },
      { id: 'cw-飄', char: '飄', img: 'falling-leaf.png', word: '飄落', charMeaning: '被風吹著在空中動。', meaning: '輕輕的從空中掉下來。', example: '櫻花一片片＿＿下來。', options: ['飄落', '沖洗', '洗澡', '仔細'] }
    ],
    fix: [
      { id: 'fx-黃', char: '黃', wrong: '橫', sentence: '香蕉是黃色的。', options: ['黃', '橫', '廣'], clue: '像香蕉的顏色，左邊沒有木字旁。', explain: '要改成「黃」。黃色的黃沒有木字旁；「橫」是橫線的橫。' },
      { id: 'fx-澡', char: '澡', wrong: '操', sentence: '我每天晚上都要洗澡。', options: ['澡', '操', '燥'], clue: '用水洗身體，左邊是三點水。', explain: '要改成「澡」。洗澡的澡左邊是三點水；「操」是體操的操。' },
      { id: 'fx-粒', char: '粒', wrong: '拉', sentence: '碗裡還有幾顆米粒。', options: ['粒', '拉', '位'], clue: '一顆一顆的米，左邊是「米」。', explain: '要改成「粒」。米粒的粒左邊是米；「拉」左邊是提手旁。' },
      { id: 'fx-熱', char: '熱', wrong: '熟', sentence: '夏天的中午好熱。', options: ['熱', '熟', '執'], clue: '溫度很高，左上不是「享」。', explain: '要改成「熱」。熱的左上是坴；「熟」是煮熟的熟。' },
      { id: 'fx-浴', char: '浴', wrong: '俗', sentence: '浴室的地板好滑，要小心。', options: ['浴', '俗', '谷'], clue: '洗澡的地方，左邊是三點水。', explain: '要改成「浴」。浴室的浴左邊是三點水；「俗」左邊是單人旁。' },
      { id: 'fx-胖', char: '胖', wrong: '伴', sentence: '小豬長得圓滾滾的，好胖。', options: ['胖', '伴', '拌'], clue: '身上的肉多，左邊是肉字旁。', explain: '要改成「胖」。胖的左邊是月（肉）；「伴」是夥伴的伴。' },
      { id: 'fx-名', char: '名', wrong: '各', sentence: '請在作業本上寫名字。', options: ['名', '各', '多'], clue: '叫一個人用的，上面是「夕」。', explain: '要改成「名」。名字的名上面是夕；「各」上面是夂。' },
      { id: 'fx-苔', char: '苔', wrong: '抬', sentence: '石頭上長了綠綠的青苔。', options: ['苔', '抬', '台'], clue: '長在石頭上的小植物，上面是草字頭。', explain: '要改成「苔」。青苔的苔上面是草字頭；「抬」是抬頭的抬。' },
      { id: 'fx-蛋', char: '蛋', wrong: '旦', sentence: '早餐我吃了一顆荷包蛋。', options: ['蛋', '旦', '但'], clue: '雞生出來的，下面是「虫」。', explain: '要改成「蛋」。荷包蛋的蛋下面是虫；「旦」是元旦的旦。' },
      { id: 'fx-通', char: '通', wrong: '桶', sentence: '這條路已經打通了。', options: ['通', '桶', '痛'], clue: '走得過去，外面是走路的「辶」。', explain: '要改成「通」。打通的通外面是辶；「桶」是水桶的桶。' },
      { id: 'fx-淡', char: '淡', wrong: '談', sentence: '這碗湯的味道太淡了。', options: ['淡', '談', '炎'], clue: '味道不濃，左邊是三點水。', explain: '要改成「淡」。淡的左邊是三點水；「談」是談話的談。' },
      { id: 'fx-飄', char: '飄', wrong: '漂', sentence: '白雲在天上慢慢飄。', options: ['飄', '漂', '票'], clue: '被風吹著在空中動，右邊是「風」。', explain: '要改成「飄」。飄的右邊是風；「漂」左邊是三點水，是在水上漂的漂。' }
    ],
    similar: [
      { id: 's1', meaning: '「發＿」是身上的肉變多了。', sentence: '爸爸最近發＿了，褲子變緊。', frame: '發＿', options: ['胖', '伴'], answer: '胖', clue: '提示：和身體有關，左邊是肉字旁。', explain: '答案是「胖」；「伴」是夥伴的伴。' },
      { id: 's2', meaning: '「夥＿」是一起做事、一起玩的人。', sentence: '小明是我的好夥＿。', frame: '夥＿', options: ['伴', '胖'], answer: '伴', clue: '提示：和人有關，左邊是單人旁。', explain: '答案是「伴」；「胖」是發胖的胖。' },
      { id: 's3', meaning: '「＿水」是溫度很高的水。', sentence: '泡茶要用＿水。', frame: '＿水', options: ['熱', '熟'], answer: '熱', clue: '提示：左上是坴，右上是丸。', explain: '答案是「熱」；「熟」是煮熟的熟。' },
      { id: 's4', meaning: '「煮＿」是食物煮好、可以吃了。', sentence: '雞蛋要煮＿才能吃。', frame: '煮＿', options: ['熟', '熱'], answer: '熟', clue: '提示：左上是享受的「享」。', explain: '答案是「熟」；「熱」是熱水的熱。' },
      { id: 's5', meaning: '「＿落」是輕輕的從空中掉下來。', sentence: '雪花一片片＿落下來。', frame: '＿落', options: ['飄', '漂'], answer: '飄', clue: '提示：和風有關，右邊是「風」。', explain: '答案是「飄」；「漂」是在水上漂的漂。' },
      { id: 's6', meaning: '「＿浮」是浮在水面上。', sentence: '樹葉在小河上＿浮。', frame: '＿浮', options: ['漂', '飄'], answer: '漂', clue: '提示：和水有關，左邊是三點水。', explain: '答案是「漂」；「飄」是飄落的飄。' },
      { id: 's7', meaning: '「海＿」是做成薄片的海裡植物。', sentence: '飯糰外面包著一片海＿。', frame: '海＿', options: ['苔', '抬'], answer: '苔', clue: '提示：是植物，上面是草字頭。', explain: '答案是「苔」；「抬」是抬頭的抬。' },
      { id: 's8', meaning: '「＿頭」是把頭往上看。', sentence: '我＿頭看天上的星星。', frame: '＿頭', options: ['抬', '苔'], answer: '抬', clue: '提示：要用手出力，左邊是提手旁。', explain: '答案是「抬」；「苔」是海苔的苔。' }
    ],
    listen: [
      { id: 'l1', text: '綠綠長長的蔬菜，切開可以直接吃，脆脆的。', answer: 0, options: [{ text: '小黃瓜', img: 'cucumber.png' }, { text: '紅蘿蔔', img: 'carrot.png' }, { text: '海苔', img: 'seaweed.png' }, { text: '蛋糕', img: 'cake.png' }] },
      { id: 'l2', text: '橘紅色、長在土裡，兔子最愛吃。', answer: 0, options: [{ text: '紅蘿蔔', img: 'carrot.png' }, { text: '小黃瓜', img: 'cucumber.png' }, { text: '白蘿蔔', img: 'white-radish.png' }, { text: '米粒', img: 'rice-grains.png' }] },
      { id: 'l3', text: '黑黑綠綠、薄薄一片，可以把飯包起來。', answer: 0, options: [{ text: '海苔', img: 'seaweed.png' }, { text: '青苔', img: 'moss-rock.png' }, { text: '蔬菜', img: 'veg-basket.png' }, { text: '蛋糕', img: 'cake.png' }] },
      { id: 'l4', text: '用熱熱的水氣把包子弄熟。', answer: 0, options: [{ text: '蒸', img: 'steamer.png' }, { text: '飄', img: 'falling-leaf.png' }, { text: '黏', img: 'sticky-hand.png' }, { text: '涼', img: 'tree-shade.png' }] },
      { id: 'l5', text: '上課前，老師一個一個叫大家的名字。', answer: 0, options: [{ text: '點名', img: 'roll-call.png' }, { text: '沖澡', img: 'shower.png' }, { text: '細心', img: 'fix-book.png' }, { text: '交通', img: 'traffic.png' }] },
      { id: 'l6', text: '糖果把手弄得黏黏的，分不開。', answer: 0, options: [{ text: '黏', img: 'sticky-hand.png' }, { text: '蒸', img: 'steamer.png' }, { text: '飄', img: 'falling-leaf.png' }, { text: '暖', img: 'warm-coat.png' }] },
      { id: 'l7', text: '洗澡、刷牙的房間。', answer: 0, options: [{ text: '浴室', img: 'bathroom.png' }, { text: '廚房', img: 'steamer.png' }, { text: '交通', img: 'traffic.png' }, { text: '蛋糕', img: 'cake.png' }] },
      { id: 'l8', text: '玩具全部都收好了，一個都沒有少。', answer: 0, options: [{ text: '通通', img: 'toy-box.png' }, { text: '淡淡', img: 'flower-smell.png' }, { text: '細心', img: 'fix-book.png' }, { text: '點名', img: 'roll-call.png' }] }
    ],
    phrase: {
      fillLabels: { answer: '疊字怎麼樣', noun: '什麼東西' },
      pickName: '看圖選一選',
      pickSay: '看圖，選出最適合的疊字，說說看是什麼樣的東西。',
      intro: { example: '甜甜的蛋糕', img: 'pr-sweet-cake.png', parts: [{ text: '甜甜', role: '疊字怎麼樣' }, { text: '的' }, { text: '蛋糕', role: '什麼東西' }],
        explain: '把形容的字說兩次，像「甜甜」，加上「的」，最後說是什麼東西。這樣聽起來更生動。' },
      pick: [
        { id: 'ph1', img: 'pr-quilt.png', before: '', noun: '棉被', ask: '什麼樣的棉被', look: '再看看圖片，小朋友躺在棉被裡，表情怎麼樣？', options: ['軟軟', '硬硬', '尖尖', '刺刺'], clue: '提示：躺上去好舒服，一壓就凹下去。', explain: '答案是「軟軟」，完整的短語是「軟軟的棉被」。' },
        { id: 'ph2', img: 'pr-moon.png', before: '', noun: '月亮', ask: '什麼樣的月亮', look: '再看看圖片，中秋節的月亮是什麼形狀？', options: ['圓圓', '方方', '尖尖', '扁扁'], clue: '提示：它像一個大盤子，沒有角。', explain: '答案是「圓圓」，完整的短語是「圓圓的月亮」。' },
        { id: 'ph3', img: 'pr-lemon.png', before: '', noun: '檸檬', ask: '什麼樣的檸檬', look: '再看看圖片，小朋友咬了一口檸檬，表情怎麼樣？', options: ['酸酸', '甜甜', '辣辣', '苦苦'], clue: '提示：咬一口，眼睛瞇起來，口水一直流。', explain: '答案是「酸酸」，完整的短語是「酸酸的檸檬」。' },
        { id: 'ph4', img: 'pr-giraffe.png', before: '', noun: '長頸鹿', ask: '什麼樣的長頸鹿', look: '再看看圖片，長頸鹿和旁邊的樹比起來怎麼樣？', options: ['高高', '矮矮', '短短', '小小'], clue: '提示：牠的脖子長長的，可以吃到樹頂的葉子。', explain: '答案是「高高」，完整的短語是「高高的長頸鹿」。' },
        { id: 'ph5', img: 'pr-sun-warm.png', before: '', noun: '太陽', ask: '什麼樣的太陽', look: '再看看圖片，冬天的太陽照在身上，感覺怎麼樣？', options: ['暖暖', '冷冷', '溼溼', '黑黑'], clue: '提示：照在身上好舒服，一點也不冷。', explain: '答案是「暖暖」，完整的短語是「暖暖的太陽」。' }
      ],
      say: [],
      words: [],
      choose: [],
      make: [],
      phrase2: {
        intro: { example: '爸爸來洗洗碗', img: 'pz-dad-dishes.png', parts: [{ text: '爸爸', role: '誰' }, { text: '來' }, { text: '洗洗', role: '疊字動作' }, { text: '碗', role: '什麼東西' }],
          explain: '先說是誰，加上「來」，再把動作說兩次，最後說做什麼東西。聽起來很輕鬆、很有趣。' },
        pick: [
          { id: 'p2-pz1', img: 'pz-cat-lick.png', before: '小貓來', join: '', noun: '。', ask: '小貓來做什麼', look: '再看看圖片，小貓用舌頭在做什麼？', options: ['舔舔毛', '洗洗碗', '掃掃地', '澆澆花'], clue: '提示：牠用舌頭把身上整理乾淨。', explain: '答案是「舔舔毛」，完整的句子是「小貓來舔舔毛」。' },
          { id: 'p2-pz2', img: 'pz-boy-sweep.png', before: '弟弟來', join: '', noun: '。', ask: '弟弟來做什麼', look: '再看看圖片，弟弟拿著長長的工具在做什麼？', options: ['掃掃地', '舔舔毛', '澆澆花', '洗洗碗'], clue: '提示：他把灰塵集中起來，倒進畚箕。', explain: '答案是「掃掃地」，完整的句子是「弟弟來掃掃地」。' },
          { id: 'p2-pz3', img: 'pz-girl-water.png', before: '我來', join: '', noun: '。', ask: '我來做什麼', look: '再看看圖片，我拿著水壺在做什麼？', options: ['澆澆花', '掃掃地', '舔舔毛', '洗洗碗'], clue: '提示：我讓陽臺上的植物喝飽飽。', explain: '答案是「澆澆花」，完整的句子是「我來澆澆花」。' }
        ],
        fill: [
          { id: 'pz1', img: 'pz-cat-lick.png', parts: ['小貓', '來', '舔舔', '毛'] },
          { id: 'pz2', img: 'pz-boy-sweep.png', parts: ['弟弟', '來', '掃掃', '地'] },
          { id: 'pz3', img: 'pz-girl-water.png', parts: ['我', '來', '澆澆', '花'] }
        ]
      }
    },
    pattern: []
  };
  if (typeof module === 'object' && module.exports) module.exports = d;
  else { root.H3A_WORDS = root.H3A_WORDS || {}; root.H3A_WORDS.L09 = d; }
})(this);
