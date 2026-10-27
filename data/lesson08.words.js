/* 第 8 課字詞練習（公開、不加密）。句子和解釋都是 Claude 自己寫的，沒有課本原文。
   生字、語詞：options 的第一個是正確答案（作答時會打亂）。二年級：不放成語、修辭。 */
(function (root) {
  var d = {
    wh: [
      { id: 'wh-ren', key: '人', options: ['明光、明光的媽媽、老師和同學', '國王和大臣', '小真和妹妹', '爺爺和奶奶'], paras: [1, 2, 3], why: '明光請媽媽來介紹，老師和小星、小花等同學一起參加。' },
      { id: 'wh-shi', key: '事', options: ['明光的媽媽教大家包越南春捲', '大家一起去郊外野餐', '老師帶大家去爬山', '同學們比賽跳繩'], paras: [1, 2], why: '美食分享日這天，明光的媽媽示範包越南春捲。' },
      { id: 'wh-time', key: '時', options: ['班上的美食分享日', '放學後的傍晚', '下雨的早上', '過年的晚上'], paras: [1], why: '事情發生在班上的美食分享日那一天。' },
      { id: 'wh-di', key: '地', options: ['班上的教室', '明光的家裡', '海邊的沙灘', '奶奶家的竹林'], paras: [1, 3], why: '美食分享日在班上舉行，老師也在教室裡發春捲。' },
      { id: 'wh-wu', key: '物', options: ['米紙、蝦子、米線和青菜', '竹筒、米飯和艾粄', '蛋糕、蠟燭和氣球', '彩色筆和圖畫紙'], paras: [2], why: '包越南春捲要用米紙，裡面有蝦子、米線，還有青菜。' }
    ],
    quizLevels: { qa: 'extract', qb: 'extract', qc: 'extract', qd: 'extract', qe: 'extract', qf: 'infer', qg: 'evaluate', qh: 'interpret', k1: 'evaluate', k2: 'evaluate' },
    quizHelp: {
      qg: { think: ['小花說的話和老師說的話，都提到了什麼？', '誰說得比較完整、比較清楚？'],
        why: '兩個人都說：有了故事，春捲吃起來更好吃。不一樣的是，老師把意思說得比較完整、比較清楚。' },
      qh: { think: ['美食分享日這一天，大家吃到了什麼？聽到了什麼？', '請家人來班上分享，同學會認識哪些新的東西？'],
        why: '老師辦美食分享日，讓大家認識不同地方的食物，也聽到家人的故事，知道更多不一樣的生活。' }
    },
    talkChoices: {
      k1: { good: ['我會帶外婆做的粽子，跟大家說端午節的故事。', '我會帶爸爸煎的蔥油餅，說說他小時候的事。'], bad: ['我什麼都不想帶。', '我要帶一顆石頭。'],
        why: '題目問想分享什麼美食和故事。粽子、蔥油餅都是美食，也說了故事。什麼都不帶沒有回答；石頭不是美食。' },
      k2: { good: ['吃飯的時候聽故事，會覺得飯菜更好吃。', '和家人一邊吃一邊聊天，心情會很好。'], bad: ['吃飯時一定要很安靜，不能聽故事。', '故事很難聽，我不喜歡。'],
        why: '題目問為什麼有了故事會覺得更好吃。邊吃邊聽故事、和家人聊天，心情好，覺得更好吃。另外兩個沒有回答這個問題。' }
    },
    hanzi: [
      { id: 'h-介', combo: { type: '會意字', pict: '「介」像一個人站在中間，兩邊都有東西。' }, char: '介', zhuyin: 'ㄐㄧㄝˋ', radical: '人', strokes: 4, words: ['介紹', '簡介'], say: '介，介紹的介', cloze: '＿紹', img: 'introduce.png', options: ['介', '今', '令', '分'], clue: '這個字的上面是人字頭，下面是一撇一豎。', explain: '答案是「介」；「今」下面是一橫一折，「令」下面多了一點。', parts: ['人', '丿', '丨'], story: '「介」像一個人站在兩邊的中間，幫兩邊的人認識。把人或東西說給大家知道，就是「介紹」。', sentence: '老師向大家介紹新同學。' },
      { id: 'h-圓', combo: { layout: 'tb', parts: [['囗', 'm', '圍起來'], ['員', 's', '']] }, char: '圓', zhuyin: 'ㄩㄢˊ', radical: '囗', strokes: 13, words: ['圓形', '圓圈', '團圓'], say: '圓，圓圈的圓', cloze: '＿圈', img: 'circle-draw.png', options: ['圓', '園', '團', '圖'], clue: '這個字的外面是大框，裡面是「員」。', explain: '答案是「圓」，裡面是員；「園」裡面是袁，「團」裡面是專。', parts: ['囗', '員'], story: '外面的大框表示圍起來，裡面的「員」念起來像「圓」。一圈繞回來、沒有角的形狀，就是「圓」。', sentence: '我在紙上畫了一個大圓圈。' },
      { id: 'h-形', combo: { layout: 'lr', parts: [['开', 's', ''], ['彡', 'm', '花紋']] }, char: '形', zhuyin: 'ㄒㄧㄥˊ', radical: '彡', strokes: 7, words: ['圓形', '形狀', '方形'], say: '形，形狀的形', cloze: '＿狀', img: 'shapes.png', options: ['形', '刑', '型', '彩'], clue: '這個字的右邊是三撇的「彡」。', explain: '答案是「形」，右邊是三撇；「刑」右邊是立刀，「型」下面多了土。', parts: ['开', '彡'], story: '左邊念起來像「形」，右邊的三撇像畫出來的花紋。東西看起來的樣子，就是「形狀」。', sentence: '這塊餅乾是星星的形狀。', build: { layout: 'lr', show: ['开', '？'], answer: '彡', options: ['彡', '刂', '攵', '力'], clue: '想一想：右邊像畫出來的三條花紋。' } },
      { id: 'h-白', combo: { type: '象形字', pict: '「白」像太陽剛出來時，發出白白的亮光。' }, char: '白', zhuyin: 'ㄅㄞˊ', radical: '白', strokes: 5, words: ['白紙', '白色', '白雲'], say: '白，白色的白', cloze: '＿色', img: 'white-rabbit.png', options: ['白', '百', '自', '日'], clue: '這個字像「日」，上面多了一撇。', explain: '答案是「白」，上面一撇；「百」上面多一橫，「自」中間多一橫。', parts: ['白'], story: '「白」像太陽剛出來，發出白白的光。像雪、像雲的顏色，就是「白色」。', sentence: '白色的小兔子在草地上跳。' },
      { id: 'h-紙', combo: { layout: 'lr', parts: [['糸', 'm', '絲線'], ['氏', 's', '']] }, char: '紙', zhuyin: 'ㄓˇ', radical: '糸', strokes: 10, words: ['白紙', '紙條', '米紙'], say: '紙，紙條的紙', cloze: '＿條', img: 'note-paper.png', options: ['紙', '低', '底', '紅'], clue: '這個字的左邊是絞絲旁，右邊是「氏」。', explain: '答案是「紙」，左邊是絞絲旁；「低」左邊是單人旁，「底」上面是广。', parts: ['糸', '氏'], story: '左邊的「糸」是絲線，古時候用絲和麻做紙；右邊的「氏」念起來像「紙」。薄薄的、可以寫字的，就是「紙」。', sentence: '我在紙條上寫了一句悄悄話。', build: { layout: 'lr', show: ['？', '氏'], answer: '糸', options: ['糸', '亻', '广', '氵'], clue: '想一想：古時候用絲和麻做紙，左邊是和絲線有關的部首。' } },
      { id: 'h-米', combo: { type: '象形字', pict: '「米」像稻穗上散開的一粒一粒的米。' }, char: '米', zhuyin: 'ㄇㄧˇ', radical: '米', strokes: 6, words: ['米紙', '米線', '白米', '米飯'], say: '米，米飯的米', cloze: '＿飯', img: 'rice-bowl.png', options: ['米', '半', '來', '未'], clue: '這個字像一個十字，四個角各有一點。', explain: '答案是「米」；「半」上面是兩點，「來」裡面有兩個人。', parts: ['米'], story: '「米」像一個十字，四邊是散開的一粒一粒米。稻子去了殼，就是「米」。', sentence: '媽媽煮了一鍋香香的米飯。' },
      { id: 'h-變', combo: { type: '形聲字', pict: '下面的「攵」像手拿著東西在動，上面念起來像「變」。' }, char: '變', zhuyin: 'ㄅㄧㄢˋ', radical: '言', strokes: 23, words: ['變成', '變軟', '改變'], say: '變，變成的變', cloze: '＿成', img: 'caterpillar.png', options: ['變', '戀', '蠻', '彎'], clue: '這個字的上面中間是言字，最下面是反文。', explain: '答案是「變」，下面是反文；「戀」下面是心，「彎」下面是弓。', parts: ['䜌', '攵'], story: '上面念起來像「變」，下面的「攵」像手在動。把東西動一動，樣子就不一樣了，這就是「變」。', sentence: '毛毛蟲長大以後變成蝴蝶。' },
      { id: 'h-軟', combo: { layout: 'lr', parts: [['車', 'm', '車子'], ['欠', 's', '']] }, char: '軟', zhuyin: 'ㄖㄨㄢˇ', radical: '車', strokes: 11, words: ['變軟', '軟糖', '柔軟'], say: '軟，軟糖的軟', cloze: '＿糖', img: 'gummy.png', options: ['軟', '較', '輕', '欠'], clue: '這個字的左邊是車字旁，右邊是「欠」。', explain: '答案是「軟」，右邊是欠；「較」右邊是交，「輕」右邊不一樣。', parts: ['車', '欠'], story: '左邊是「車」，右邊是「欠」。用手一壓就會凹下去、不硬的，就是「軟」。', sentence: '我最喜歡吃QQ的軟糖。', build: { layout: 'lr', show: ['車', '？'], answer: '欠', options: ['欠', '交', '工', '力'], clue: '想一想：右邊像一個人張開嘴巴。' } },
      { id: 'h-搶', combo: { layout: 'lr', parts: [['扌', 'm', '手'], ['倉', 's', '']] }, char: '搶', zhuyin: 'ㄑㄧㄤˇ', radical: '手', strokes: 13, words: ['搶著', '搶答', '搶先'], say: '搶，搶答的搶', cloze: '＿答', img: 'quiz-hands.png', options: ['搶', '槍', '倉', '創'], clue: '這個字的左邊是提手旁，右邊是「倉」。', explain: '答案是「搶」，左邊是提手旁；「槍」左邊是木，「創」右邊是立刀。', parts: ['扌', '倉'], story: '左邊是手，右邊的「倉」念起來像「搶」。用手很快的去拿、去做，比別人先，就是「搶」。', sentence: '老師一問，大家都搶著回答。', build: { layout: 'lr', show: ['？', '倉'], answer: '扌', options: ['扌', '木', '亻', '口'], clue: '想一想：很快的伸出去拿東西，左邊是和什麼有關的部首？' } },
      { id: 'h-材', combo: { layout: 'lr', parts: [['木', 'm', '木頭'], ['才', 's', '']] }, char: '材', zhuyin: 'ㄘㄞˊ', radical: '木', strokes: 7, words: ['食材', '材料', '木材'], say: '材，材料的材', cloze: '＿料', img: 'craft-items.png', options: ['材', '財', '村', '林'], clue: '這個字的左邊是木字旁，右邊是「才」。', explain: '答案是「材」，右邊是才；「財」左邊是貝，「村」右邊是寸。', parts: ['木', '才'], story: '左邊是「木」，右邊的「才」念起來像「材」。蓋房子要用的木頭，叫做「木材」；做東西要用的東西，叫做「材料」。', sentence: '我們準備好做勞作的材料。', build: { layout: 'lr', show: ['？', '才'], answer: '木', options: ['木', '貝', '扌', '氵'], clue: '想一想：蓋房子要用的，左邊是什麼？' } },
      { id: 'h-蝦', combo: { layout: 'lr', parts: [['虫', 'm', '小動物'], ['叚', 's', '']] }, char: '蝦', zhuyin: 'ㄒㄧㄚ', radical: '虫', strokes: 15, words: ['蝦子', '龍蝦', '炒蝦仁'], say: '蝦，蝦子的蝦', cloze: '龍＿', img: 'lobster.png', options: ['蝦', '假', '暇', '霞'], clue: '這個字的左邊是「虫」，右邊和「假」的右邊一樣。', explain: '答案是「蝦」，左邊是虫；「假」左邊是單人旁，「霞」上面是雨。', parts: ['虫', '叚'], story: '左邊的「虫」表示小動物，右邊念起來像「蝦」。住在水裡、身體彎彎的、有長鬚的，就是「蝦」。', sentence: '水族館裡有一隻大龍蝦。', build: { layout: 'lr', show: ['？', '叚'], answer: '虫', options: ['虫', '亻', '日', '雨'], clue: '想一想：小動物的字，左邊常常是哪一個部首？' } },
      { id: 'h-線', combo: { layout: 'lr', parts: [['糸', 'm', '絲線'], ['泉', 's', '']] }, char: '線', zhuyin: 'ㄒㄧㄢˋ', radical: '糸', strokes: 15, words: ['米線', '毛線', '線條'], say: '線，毛線的線', cloze: '毛＿', img: 'yarn.png', options: ['線', '綠', '泉', '錢'], clue: '這個字的左邊是絞絲旁，右邊是「泉」。', explain: '答案是「線」，右邊是泉；「綠」右邊是彔，「錢」左邊是金。', parts: ['糸', '泉'], story: '左邊的「糸」是絲線，右邊的「泉」念起來有點像「線」。細細長長的絲，就是「線」。', sentence: '奶奶用毛線織了一條圍巾。', build: { layout: 'lr', show: ['？', '泉'], answer: '糸', options: ['糸', '金', '氵', '木'], clue: '想一想：細細長長的東西，左邊是和絲有關的部首。' } },
      { id: 'h-各', combo: { type: '會意字', pict: '上面像一隻腳走過來，下面是「口」，表示走到每一個地方。' }, char: '各', zhuyin: 'ㄍㄜˋ', radical: '口', strokes: 6, words: ['各種', '各位', '各自'], say: '各，各位的各', cloze: '＿位', img: 'class-greet.png', options: ['各', '名', '客', '冬'], clue: '這個字的上面是「夂」，下面是「口」。', explain: '答案是「各」；「名」上面是夕，「客」上面多了寶蓋頭。', parts: ['夂', '口'], story: '上面像一隻腳，下面是「口」。腳走到每一家門口，一家一家都到，就是「各」。', sentence: '各位小朋友，請排好隊。' },
      { id: 'h-種', combo: { layout: 'lr', parts: [['禾', 'm', '稻子'], ['重', 's', '']] }, char: '種', zhuyin: 'ㄓㄨㄥˇ', radical: '禾', strokes: 14, words: ['各種', '種類', '種子'], say: '種，種類的種', cloze: '＿類', img: 'many-fruits.png', options: ['種', '重', '鐘', '衝'], clue: '這個字的左邊是「禾」，右邊是「重」。', explain: '答案是「種」，左邊是禾；「重」少了左邊，「鐘」左邊是金。', parts: ['禾', '重'], story: '左邊的「禾」是稻子，右邊的「重」念起來像「種」。稻子有很多不一樣的，分成一種一種，就是「種類」。', sentence: '水果店裡有好多種類的水果。', build: { layout: 'lr', show: ['？', '重'], answer: '禾', options: ['禾', '金', '木', '亻'], clue: '想一想：和稻子、植物有關，左邊是什麼？' } },
      { id: 'h-菜', combo: { layout: 'tb', parts: [['艹', 'm', '植物'], ['采', 's', '']] }, char: '菜', zhuyin: 'ㄘㄞˋ', radical: '艸', strokes: 12, words: ['青菜', '蔬菜', '買菜'], say: '菜，青菜的菜', cloze: '青＿', img: 'vegetables.png', options: ['菜', '采', '採', '彩'], clue: '這個字的上面是草字頭，下面是「采」。', explain: '答案是「菜」，上面是草字頭；「採」左邊是提手旁，「彩」右邊是三撇。', parts: ['艹', '采'], story: '上面是草字頭，表示植物；下面的「采」像一隻手在摘。從田裡摘下來可以吃的植物，就是「菜」。', sentence: '多吃青菜，身體才會健康。', build: { layout: 'tb', show: ['？', '采'], answer: '艹', options: ['艹', '竹', '雨', '宀'], clue: '想一想：青菜是植物，上面是哪一個部首？' } },
      { id: 'h-接', combo: { layout: 'lr', parts: [['扌', 'm', '手'], ['妾', 's', '']] }, char: '接', zhuyin: 'ㄐㄧㄝ', radical: '手', strokes: 11, words: ['接著', '接球', '迎接'], say: '接，接球的接', cloze: '＿球', img: 'catch-ball2.png', options: ['接', '按', '妾', '掛'], clue: '這個字的左邊是提手旁，右邊上面是立，下面是女。', explain: '答案是「接」，右邊是妾；「按」右邊是安，「掛」右邊是卦。', parts: ['扌', '妾'], story: '左邊是手，右邊念起來像「接」。用手把丟過來的東西拿住，就是「接」。一件事後面緊跟著另一件事，叫「接著」。', sentence: '我用雙手接住哥哥丟來的球。', build: { layout: 'lr', show: ['？', '妾'], answer: '扌', options: ['扌', '女', '木', '口'], clue: '想一想：把球拿住要用什麼？' } },
      { id: 'h-聽', combo: { type: '會意字', pict: '左邊有「耳」，表示用耳朵；右邊有「心」，表示用心。' }, char: '聽', zhuyin: 'ㄊㄧㄥ', radical: '耳', strokes: 22, words: ['聽故事', '好聽', '聽話'], say: '聽，好聽的聽', cloze: '好＿', img: 'music-listen.png', options: ['聽', '廳', '聲', '德'], clue: '這個字的左邊有「耳」，右邊下面有「心」。', explain: '答案是「聽」，左邊是耳；「廳」外面多了广，「聲」上面不一樣。', parts: ['耳', '王', '十', '罒', '一', '心'], story: '左邊有「耳」，表示用耳朵；右邊下面有「心」，表示用心。用耳朵、用心去聽，就是「聽」。', sentence: '這首歌好好聽。' },
      { id: 'h-更', combo: { type: '會意字', pict: '「更」像一隻手拿著東西在改變它。' }, char: '更', zhuyin: 'ㄍㄥˋ', radical: '曰', strokes: 7, words: ['更好', '更美味', '更多'], say: '更，更好的更', cloze: '＿好', img: 'better-drawing.png', options: ['更', '便', '硬', '吏'], clue: '這個字和「便」的右邊一樣，左邊沒有單人旁。', explain: '答案是「更」；「便」左邊多了單人旁，「硬」左邊是石。', parts: ['更'], story: '「更」像一隻手拿著東西在改變它。比原來的還要多、還要好，就是「更」。', sentence: '今天的天氣比昨天更好。' }
    ],
    vocab: [
      { id: 'v-介紹', word: '介紹', meaning: '把人或東西說給大家知道。', example: '請你＿＿一下你的家人。', img: 'introduce.png', options: ['介紹', '圓形', '食材', '接著'] },
      { id: 'v-圓形', word: '圓形', meaning: '圓圓的，像一個圈圈的形狀。', example: '鐘面是＿＿的。', img: 'clock-round.png', options: ['圓形', '介紹', '米線', '舉手'] },
      { id: 'v-米紙', word: '米紙', meaning: '用米做的、薄薄的像紙一樣的皮。', example: '越南春捲是用＿＿包起來的。', img: 'rice-paper.png', options: ['米紙', '米線', '蝦子', '青菜'] },
      { id: 'v-變軟', word: '變軟', meaning: '本來硬硬的，後來變得軟軟的。', example: '冰淇淋放在太陽下，一下子就＿＿了。', img: 'melt-ice-cream.png', options: ['變軟', '舉手', '接著', '介紹'] },
      { id: 'v-搶著', word: '搶著', meaning: '大家都想比別人先做。', example: '下課鈴一響，大家＿＿去溜滑梯。', img: 'rush-slide.png', options: ['搶著', '接著', '介紹', '變軟'] },
      { id: 'v-舉手', word: '舉手', meaning: '把手抬高。', example: '想回答問題，要先＿＿。', img: 'raise-hand.png', options: ['舉手', '搶著', '接著', '變軟'] },
      { id: 'v-食材', word: '食材', meaning: '煮菜要用的材料。', example: '媽媽去市場買煮火鍋的＿＿。', img: 'ingredients.png', options: ['食材', '米紙', '圓形', '各種'] },
      { id: 'v-蝦子', word: '蝦子', meaning: '住在水裡、身體彎彎、有長鬚的小動物。', example: '爸爸剝了一隻＿＿給我吃。', img: 'shrimp.png', options: ['蝦子', '米線', '青菜', '米紙'] },
      { id: 'v-米線', word: '米線', meaning: '用米做的、細細長長的食物。', example: '我中午吃了一碗＿＿湯。', img: 'rice-noodle.png', options: ['米線', '米紙', '蝦子', '青菜'] },
      { id: 'v-各種', word: '各種', meaning: '每一種、很多不一樣的種類。', example: '花園裡開著＿＿顏色的花。', img: 'flower-colors.png', options: ['各種', '圓形', '食材', '接著'] },
      { id: 'v-青菜', word: '青菜', meaning: '綠綠的、可以吃的蔬菜。', example: '多吃＿＿，身體好。', img: 'vegetables.png', options: ['青菜', '蝦子', '米線', '米紙'] },
      { id: 'v-接著', word: '接著', meaning: '緊跟著前面的事，再做下一件事。', example: '我先洗手，＿＿吃飯。', img: 'wash-then-eat.png', options: ['接著', '搶著', '舉手', '介紹'] },
      { id: 'v-美味', word: '美味', meaning: '很好吃的味道。', example: '媽媽做的蛋糕好＿＿。', img: 'yummy-cake.png', options: ['美味', '圓形', '介紹', '各種'] }
    ],
    charwords: [
      { id: 'cw-介', char: '介', img: 'introduce.png', word: '介紹', charMeaning: '在中間，讓兩邊認識。', meaning: '把人或東西說給大家知道。', example: '班長向大家＿＿學校的花園。', options: ['介紹', '圓圈', '白色', '材料'] },
      { id: 'cw-圓', char: '圓', img: 'circle-draw.png', word: '圓圈', charMeaning: '沒有角、繞一圈的形狀。', meaning: '圓圓的一個圈。', example: '大家手牽手圍成一個大＿＿。', options: ['圓圈', '紙條', '軟糖', '毛線'] },
      { id: 'cw-形', char: '形', img: 'shapes.png', word: '形狀', charMeaning: '東西的樣子。', meaning: '東西看起來的樣子，像圓的、方的。', example: '這朵雲的＿＿像一隻兔子。', options: ['形狀', '材料', '種類', '圓圈'] },
      { id: 'cw-白', char: '白', img: 'white-rabbit.png', word: '白色', charMeaning: '像雪的顏色。', meaning: '像雪、像牛奶的顏色。', example: '天上的雲是＿＿的。', options: ['白色', '毛線', '軟糖', '紙條'] },
      { id: 'cw-紙', char: '紙', img: 'note-paper.png', word: '紙條', charMeaning: '薄薄的、可以寫字的。', meaning: '小小一張、可以寫字的紙。', example: '我在＿＿上寫下電話號碼。', options: ['紙條', '白色', '毛線', '形狀'] },
      { id: 'cw-米', char: '米', img: 'rice-bowl.png', word: '白米', charMeaning: '稻子去殼後的粒。', meaning: '白白的、可以煮成飯的米。', example: '媽媽用＿＿煮了一鍋飯。', options: ['白米', '軟糖', '毛線', '圓圈'] },
      { id: 'cw-變', char: '變', img: 'caterpillar.png', word: '變成', charMeaning: '樣子不一樣了。', meaning: '從這個樣子，換成另一個樣子。', example: '水放進冰箱，就會＿＿冰塊。', options: ['變成', '搶答', '接球', '介紹'] },
      { id: 'cw-軟', char: '軟', img: 'gummy.png', word: '軟糖', charMeaning: '一壓就凹下去，不硬。', meaning: '咬起來軟軟的糖果。', example: '我最喜歡水果口味的＿＿。', options: ['軟糖', '白米', '紙條', '毛線'] },
      { id: 'cw-搶', char: '搶', img: 'quiz-hands.png', word: '搶答', charMeaning: '比別人先。', meaning: '比別人先舉手回答問題。', example: '老師出題目，大家都想＿＿。', options: ['搶答', '接球', '變成', '介紹'] },
      { id: 'cw-材', char: '材', img: 'craft-items.png', word: '材料', charMeaning: '做東西要用的東西。', meaning: '做東西時要用到的東西。', example: '做風箏的＿＿有紙、竹子和線。', options: ['材料', '種類', '形狀', '圓圈'] },
      { id: 'cw-蝦', char: '蝦', img: 'lobster.png', word: '龍蝦', charMeaning: '水裡身體彎彎的小動物。', meaning: '很大隻、有大鉗子的蝦。', example: '餐廳的魚缸裡有一隻＿＿。', options: ['龍蝦', '白米', '軟糖', '紙條'] },
      { id: 'cw-線', char: '線', img: 'yarn.png', word: '毛線', charMeaning: '細細長長的絲。', meaning: '用羊毛做的線，可以織衣服。', example: '小貓在玩一顆＿＿球。', options: ['毛線', '紙條', '白米', '龍蝦'] },
      { id: 'cw-各', char: '各', img: 'class-greet.png', word: '各位', charMeaning: '每一個。', meaning: '大家、在場的每一個人。', example: '＿＿同學，早安！', options: ['各位', '更好', '好聽', '白色'] },
      { id: 'cw-種', char: '種', img: 'many-fruits.png', word: '種類', charMeaning: '一類一類的。', meaning: '不同的一類一類。', example: '動物園裡動物的＿＿好多。', options: ['種類', '材料', '形狀', '圓圈'] },
      { id: 'cw-菜', char: '菜', img: 'veg-market.png', word: '蔬菜', charMeaning: '可以吃的植物。', meaning: '可以煮來吃的植物，像青菜、蘿蔔。', example: '市場裡有各式各樣的＿＿。', options: ['蔬菜', '龍蝦', '白米', '軟糖'] },
      { id: 'cw-接', char: '接', img: 'catch-ball2.png', word: '接球', charMeaning: '用手拿住。', meaning: '用手把丟過來的球拿住。', example: '我和爸爸在公園玩＿＿。', options: ['接球', '搶答', '介紹', '變成'] },
      { id: 'cw-聽', char: '聽', img: 'music-listen.png', word: '好聽', charMeaning: '用耳朵接收聲音。', meaning: '聲音讓人聽了很舒服。', example: '小鳥的歌聲好＿＿。', options: ['好聽', '更好', '各位', '白色'] },
      { id: 'cw-更', char: '更', img: 'better-drawing.png', word: '更好', charMeaning: '比原來的還要。', meaning: '比原來的還要好。', example: '多練習，你會畫得＿＿。', options: ['更好', '好聽', '各位', '白色'] }
    ],
    fix: [
      { id: 'fx-圓', char: '圓', wrong: '園', sentence: '十五的月亮又大又圓。', options: ['圓', '園', '團'], clue: '沒有角的形狀，框裡面是「員」。', explain: '要改成「圓」。圓的框裡是員；「園」是公園的園。' },
      { id: 'fx-形', char: '形', wrong: '型', sentence: '這個盒子是方形的。', options: ['形', '型', '刑'], clue: '東西的樣子，下面沒有土。', explain: '要改成「形」。方形的形下面沒有土；「型」下面多了土。' },
      { id: 'fx-白', char: '白', wrong: '百', sentence: '天上飄著一朵白雲。', options: ['白', '百', '自'], clue: '像雪的顏色，上面只有一撇。', explain: '要改成「白」。白色的白上面一撇；「百」上面多一橫。' },
      { id: 'fx-紙', char: '紙', wrong: '低', sentence: '請拿一張紙給我。', options: ['紙', '低', '底'], clue: '可以寫字的，左邊是絞絲旁。', explain: '要改成「紙」。紙的左邊是絞絲旁；「低」左邊是單人旁。' },
      { id: 'fx-軟', char: '軟', wrong: '較', sentence: '這顆枕頭好軟好舒服。', options: ['軟', '較', '輕'], clue: '一壓就凹下去，右邊是「欠」。', explain: '要改成「軟」。軟的右邊是欠；「較」右邊是交。' },
      { id: 'fx-搶', char: '搶', wrong: '槍', sentence: '大家搶著回答問題。', options: ['搶', '槍', '倉'], clue: '想比別人先，左邊是提手旁。', explain: '要改成「搶」。搶著的搶左邊是提手旁；「槍」左邊是木。' },
      { id: 'fx-材', char: '材', wrong: '財', sentence: '做勞作的材料都準備好了。', options: ['材', '財', '村'], clue: '做東西要用的，左邊是木字旁。', explain: '要改成「材」。材料的材左邊是木；「財」左邊是貝。' },
      { id: 'fx-線', char: '線', wrong: '綠', sentence: '請沿著虛線剪下來。', options: ['線', '綠', '泉'], clue: '細細長長的，右邊是「泉」。', explain: '要改成「線」。虛線的線右邊是泉；「綠」是綠色的綠。' },
      { id: 'fx-種', char: '種', wrong: '重', sentence: '爺爺在田裡撒下種子。', options: ['種', '重', '鐘'], clue: '和植物有關，左邊要有「禾」。', explain: '要改成「種」。種子的種左邊是禾；「重」少了左邊。' },
      { id: 'fx-菜', char: '菜', wrong: '採', sentence: '媽媽去市場買菜。', options: ['菜', '採', '彩'], clue: '可以吃的植物，上面是草字頭。', explain: '要改成「菜」。買菜的菜上面是草字頭；「採」左邊是提手旁。' },
      { id: 'fx-接', char: '接', wrong: '按', sentence: '奶奶到車站接我們回家。', options: ['接', '按', '掛'], clue: '去迎回來，右邊上面是立，下面是女。', explain: '要改成「接」。接人的接右邊是妾；「按」右邊是安。' },
      { id: 'fx-聽', char: '聽', wrong: '廳', sentence: '睡前，媽媽講故事給我聽。', options: ['聽', '廳', '聲'], clue: '用耳朵接收聲音，外面沒有「广」。', explain: '要改成「聽」。聽的外面沒有广；「廳」是客廳的廳。' }
    ],
    similar: [
      { id: 's1', meaning: '「＿料」是做東西要用的東西。', sentence: '做蛋糕的＿料有麵粉和雞蛋。', frame: '＿料', options: ['材', '財'], answer: '材', clue: '提示：左邊是木字旁。', explain: '答案是「材」；「財」是錢財的財。' },
      { id: 's2', meaning: '「錢＿」是錢和值錢的東西。', sentence: '海盜把錢＿藏在山洞裡。', frame: '錢＿', options: ['財', '材'], answer: '財', clue: '提示：和錢有關，左邊是貝。', explain: '答案是「財」；「材」是材料的材。' },
      { id: 's3', meaning: '「＿糖」是ＱＱ的、咬起來不硬的糖。', sentence: '我吃了一顆草莓口味的＿糖。', frame: '＿糖', options: ['軟', '較'], answer: '軟', clue: '提示：右邊是「欠」。', explain: '答案是「軟」；「較」是比較的較。' },
      { id: 's4', meaning: '「比＿」是把兩樣東西放在一起，看哪一個大、哪一個小。', sentence: '我們來比＿誰的手比較大。', frame: '比＿', options: ['較', '軟'], answer: '較', clue: '提示：右邊是交通的「交」。', explain: '答案是「較」；「軟」是軟糖的軟。' },
      { id: 's5', meaning: '「＿答」是比別人先回答。', sentence: '大家舉手＿答，好熱鬧。', frame: '＿答', options: ['搶', '槍'], answer: '搶', clue: '提示：左邊是提手旁。', explain: '答案是「搶」；「槍」是水槍的槍。' },
      { id: 's6', meaning: '「水＿」是可以噴水的玩具。', sentence: '夏天我們用水＿互相噴水。', frame: '水＿', options: ['槍', '搶'], answer: '槍', clue: '提示：左邊是木字旁。', explain: '答案是「槍」；「搶」是搶答的搶。' },
      { id: 's7', meaning: '「青＿」是綠綠的、可以吃的植物。', sentence: '我每天都吃很多青＿。', frame: '青＿', options: ['菜', '彩'], answer: '菜', clue: '提示：上面是草字頭。', explain: '答案是「菜」；「彩」是彩色的彩。' },
      { id: 's8', meaning: '「＿色」是很多種顏色。', sentence: '我用＿色筆畫一道彩虹。', frame: '＿色', options: ['彩', '菜'], answer: '彩', clue: '提示：右邊是三撇。', explain: '答案是「彩」；「菜」是青菜的菜。' }
    ],
    listen: [
      { id: 'l1', text: '用米做的、薄薄的、圓圓的，泡水就會變軟。', answer: 0, options: [{ text: '米紙', img: 'rice-paper.png' }, { text: '米線', img: 'rice-noodle.png' }, { text: '紙條', img: 'note-paper.png' }, { text: '軟糖', img: 'gummy.png' }] },
      { id: 'l2', text: '用米做的，細細長長，可以煮成湯。', answer: 0, options: [{ text: '米線', img: 'rice-noodle.png' }, { text: '米紙', img: 'rice-paper.png' }, { text: '毛線', img: 'yarn.png' }, { text: '蝦子', img: 'shrimp.png' }] },
      { id: 'l3', text: '住在水裡，身體彎彎的，有長長的鬚。', answer: 0, options: [{ text: '蝦子', img: 'shrimp.png' }, { text: '青菜', img: 'vegetables.png' }, { text: '米線', img: 'rice-noodle.png' }, { text: '白米', img: 'rice-bowl.png' }] },
      { id: 'l4', text: '想回答問題的時候，要先這樣做。', answer: 0, options: [{ text: '舉手', img: 'raise-hand.png' }, { text: '接球', img: 'catch-ball2.png' }, { text: '變軟', img: 'melt-ice-cream.png' }, { text: '介紹', img: 'introduce.png' }] },
      { id: 'l5', text: '下課鈴一響，大家都想第一個去溜滑梯。', answer: 0, options: [{ text: '搶著', img: 'rush-slide.png' }, { text: '接著', img: 'wash-then-eat.png' }, { text: '舉手', img: 'raise-hand.png' }, { text: '變軟', img: 'melt-ice-cream.png' }] },
      { id: 'l6', text: '把新同學的名字和喜歡的東西說給大家聽。', answer: 0, options: [{ text: '介紹', img: 'introduce.png' }, { text: '搶答', img: 'quiz-hands.png' }, { text: '接球', img: 'catch-ball2.png' }, { text: '圓圈', img: 'circle-draw.png' }] },
      { id: 'l7', text: '綠綠的，可以炒來吃，對身體很好。', answer: 0, options: [{ text: '青菜', img: 'vegetables.png' }, { text: '蝦子', img: 'shrimp.png' }, { text: '軟糖', img: 'gummy.png' }, { text: '龍蝦', img: 'lobster.png' }] },
      { id: 'l8', text: '冰淇淋放在太陽下，一下子就軟軟的了。', answer: 0, options: [{ text: '變軟', img: 'melt-ice-cream.png' }, { text: '圓形', img: 'clock-round.png' }, { text: '接著', img: 'wash-then-eat.png' }, { text: '各種', img: 'flower-colors.png' }] }
    ],
    phrase: {
      pickName: '看圖選一選',
      pickSay: '看圖，選出最適合的詞，說說看他一邊怎麼樣、一邊做什麼。',
      intro: { example: '笑著說話', img: 'pr-smile-talk.png', parts: [{ text: '笑', role: '第一個動作' }, { text: '著' }, { text: '說話', role: '同時做的事' }],
        explain: '先說一個動作，加上「著」，再說同時在做的事。表示做事的時候是什麼樣子。' },
      pick: [
        { id: 'ph1', img: 'pr-lie-read.png', before: '躺著', join: '', noun: '。', ask: '躺著做什麼', look: '再看看圖片，他躺在沙發上，手裡拿著什麼？', options: ['看書', '游泳', '跑步', '跳繩'], clue: '提示：他手裡拿著一本有圖畫的故事本。', explain: '答案是「看書」，完整的短語是「躺著看書」。' },
        { id: 'ph2', img: 'pr-cry-run.png', before: '哭著', join: '', noun: '。', ask: '哭著做什麼', look: '再看看圖片，他一邊流眼淚，一邊往哪裡去？', options: ['跑回家', '吃蛋糕', '唱歌', '畫畫'], clue: '提示：他一邊掉眼淚，一邊往屋子的方向衝。', explain: '答案是「跑回家」，完整的短語是「哭著跑回家」。' },
        { id: 'ph3', img: 'pr-hold-hands.png', before: '牽著手', join: '', noun: '。', ask: '牽著手做什麼', look: '再看看圖片，媽媽和小孩在斑馬線上做什麼？', options: ['過馬路', '睡覺', '洗澡', '寫字'], clue: '提示：綠燈亮了，他們從這一頭走到對面。', explain: '答案是「過馬路」，完整的短語是「牽著手過馬路」。' },
        { id: 'ph4', img: 'pr-smile-wave.png', before: '笑著', join: '', noun: '。', ask: '笑著做什麼', look: '再看看圖片，奶奶在車窗外做什麼動作？', options: ['揮手', '哭泣', '生氣', '發抖'], clue: '提示：她把掌心舉高，左右擺動說再見。', explain: '答案是「揮手」，完整的短語是「笑著揮手」。' },
        { id: 'ph5', img: 'pr-sing-walk.png', before: '唱著歌', join: '', noun: '。', ask: '唱著歌做什麼', look: '再看看圖片，小朋友們排著隊，在路上做什麼？', options: ['走路', '睡覺', '洗碗', '寫作業'], clue: '提示：他們一步一步的往前，嘴巴還在唱。', explain: '答案是「走路」，完整的短語是「唱著歌走路」。' }
      ],
      fill: [
        { id: 'pf1', img: 'pr-lie-read.png', parts: ['躺', '著', '看書'] },
        { id: 'pf2', img: 'pr-cry-run.png', parts: ['哭', '著', '跑回家'] },
        { id: 'pf3', img: 'pr-hold-hands.png', parts: ['牽', '著', '過馬路'] },
        { id: 'pf4', img: 'pr-smile-wave.png', parts: ['笑', '著', '揮手'] }
      ],
      say: [],
      words: [{ word: '一下子', meaning: '很短的時間，很快。', img: 'quick-roll.png' }],
      choose: [
        { id: 'pw1', word: '一下子', options: ['小狗跑得好快，一下子就不見了。', '烏龜爬了好久好久，一下子才爬到。'], clue: '提示：想一想，「一下子」是很快，還是很久？', explain: '第一句用得對：小狗很快就不見了。烏龜爬了好久，就不是一下子。' }
      ],
      make: [
        { id: 'pm1', word: '一下子', clue: '提示：想想看，有什麼事很快就做完、很快就不見了？', model: '下課時間一下子就過去了。' }
      ]
    },
    pattern: [
      { key: 'yibian2', id: 'yb', title: '一邊……一邊……', img: 'yibian.png', meaning: '用兩個「一邊」，說一個人同時做兩件事。',
        examples: ['弟弟一邊洗澡，一邊唱歌。'],
        match: [
          { id: 'pt-yb-m1', img: 'pt-walk-talk.png', front: '我和好朋友一邊走路，', options: ['一邊聊天。', '一邊睡覺。', '一邊洗澡。'], clue: '提示：看看圖片，他們走路的時候在做什麼？', explain: '答案是「一邊聊天」：走路的時候也在聊天。' },
          { id: 'pt-yb-m2', img: 'pt-eat-tv.png', front: '爸爸一邊吃早餐，', options: ['一邊看報紙。', '一邊游泳。', '一邊騎車。'], clue: '提示：看看圖片，爸爸手上拿著什麼？', explain: '答案是「一邊看報紙」：吃早餐時同時看報紙。' },
          { id: 'pt-yb-m3', img: 'pt-sing-dance.png', front: '姐姐一邊唱歌，', options: ['一邊跳舞。', '一邊睡覺。', '一邊刷牙。'], clue: '提示：看看圖片，姐姐的腳在做什麼？', explain: '答案是「一邊跳舞」：唱歌的時候也在跳舞。' }
        ],
        conj: [
          { id: 'pt-yb-c1', full: '奶奶一邊煮飯，一邊哼歌。', img: 'pt-grandma-cook.png', sentence: '奶奶＿＿煮飯，＿＿哼歌。', options: ['一邊……一邊……', '有了……更……', '不但……還……'], clue: '提示：奶奶同時做兩件事。數數看有幾個空格。', explain: '答案是「一邊……一邊……」：奶奶一邊煮飯，一邊哼歌。' },
          { id: 'pt-yb-c2', full: '小明一邊畫畫，一邊想故事。', img: 'pt-draw-think.png', sentence: '小明＿＿畫畫，＿＿想故事。', options: ['一邊……一邊……', '有了……更……', '不但……還……'], clue: '提示：小明同時做兩件事。數數看有幾個空格。', explain: '答案是「一邊……一邊……」：小明一邊畫畫，一邊想故事。' },
          { id: 'pt-yb-c3', full: '我們一邊看煙火，一邊拍手歡呼。', img: 'pt-fireworks.png', sentence: '我們＿＿看煙火，＿＿拍手歡呼。', options: ['一邊……一邊……', '有了……更……', '不但……還……'], clue: '提示：同時做兩件事。數數看有幾個空格。', explain: '答案是「一邊……一邊……」：我們一邊看煙火，一邊拍手歡呼。' }
        ],
        half: [
          { id: 'pt-yb-h1', front: '弟弟一邊吃冰淇淋，', clue: '提示：弟弟吃冰淇淋的時候，還在做什麼？記得要說「一邊」。', model: '一邊看卡通。' },
          { id: 'pt-yb-h2', front: '媽媽一邊開車，', clue: '提示：媽媽開車的時候，還在做什麼？記得要說「一邊」。', model: '一邊聽音樂。' }
        ],
        whole: [
          { id: 'pt-yb-w1', clue: '提示：先說是誰，再用兩個「一邊」說他同時做兩件事。想想看：你寫功課的時候，會不會一邊做別的事？', model: '我一邊吃點心，一邊和妹妹聊天。' }
        ] },
      { key: 'youlegeng', id: 'yg', title: '有了……更……', img: 'youlegeng.png', meaning: '先用「有了」說多了什麼新東西，再用「更」說原來的東西變得更怎麼樣。',
        examples: ['有了雨傘，下雨天更不怕了。'],
        match: [
          { id: 'pt-yg-m1', img: 'pt-lamp-room.png', front: '有了檯燈，', options: ['書桌更亮了。', '書桌更吵了。', '書桌更冷了。'], clue: '提示：看看圖片，檯燈打開以後，書桌怎麼樣？', explain: '答案是「書桌更亮了」：多了檯燈，書桌變得更亮。' },
          { id: 'pt-yg-m2', img: 'pt-friend-play.png', front: '有了好朋友一起玩，', options: ['遊戲更好玩了。', '遊戲更無聊了。', '遊戲更難過了。'], clue: '提示：和好朋友一起玩，心情怎麼樣？', explain: '答案是「遊戲更好玩了」：多了好朋友，遊戲更好玩。' },
          { id: 'pt-yg-m3', img: 'pt-fan-cool.png', front: '有了電風扇，', options: ['房間更涼快了。', '房間更熱了。', '房間更暗了。'], clue: '提示：電風扇吹出來的風，讓房間怎麼樣？', explain: '答案是「房間更涼快了」：多了電風扇，房間更涼快。' }
        ],
        conj: [
          { id: 'pt-yg-c1', full: '有了小狗，家裡更熱鬧了。', img: 'pt-puppy-home.png', sentence: '＿＿小狗，家裡＿熱鬧了。', options: ['有了……更……', '一邊……一邊……', '不但……還……'], clue: '提示：多了小狗，家裡變得怎麼樣？數數看有幾個空格。', explain: '答案是「有了……更……」：有了小狗，家裡更熱鬧了。' },
          { id: 'pt-yg-c2', full: '有了眼鏡，爺爺看書更清楚了。', img: 'pt-glasses.png', sentence: '＿＿眼鏡，爺爺看書＿清楚了。', options: ['有了……更……', '一邊……一邊……', '不但……還……'], clue: '提示：多了眼鏡，看書變得怎麼樣？數數看有幾個空格。', explain: '答案是「有了……更……」：有了眼鏡，爺爺看書更清楚了。' },
          { id: 'pt-yg-c3', full: '有了音樂，派對更好玩了。', img: 'pt-party-music.png', sentence: '＿＿音樂，派對＿好玩了。', options: ['有了……更……', '一邊……一邊……', '不但……還……'], clue: '提示：多了音樂，派對變得怎麼樣？數數看有幾個空格。', explain: '答案是「有了……更……」：有了音樂，派對更好玩了。' }
        ],
        half: [
          { id: 'pt-yg-h1', front: '有了新書包，', clue: '提示：有了新書包，上學變得怎麼樣？記得要說「更」。', model: '我上學更開心了。' },
          { id: 'pt-yg-h2', front: '有了大樹，', clue: '提示：有了大樹，公園變得怎麼樣？記得要說「更」。', model: '公園更涼快了。' }
        ],
        whole: [
          { id: 'pt-yg-w1', clue: '提示：先用「有了」說多了什麼，再用「更」說變得更怎麼樣。想想看：你的房間多了什麼，會變得更好？', model: '有了書架，我的房間更整齊了。' }
        ] }
    ]
  };
  if (typeof module === 'object' && module.exports) module.exports = d;
  else { root.H3A_WORDS = root.H3A_WORDS || {}; root.H3A_WORDS.L08 = d; }
})(this);
