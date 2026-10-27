/* 第 5 課字詞練習（公開、不加密）。句子和解釋都是 Claude 自己寫的，沒有課本原文。
   生字、語詞：options 的第一個是正確答案（作答時會打亂）。二年級：不放成語、修辭。這一課課本沒有句型。 */
(function (root) {
  var d = {
    wh: [
      { id: 'wh-ren', key: '人', options: ['小真、妹妹和爸爸媽媽', '小真和老師同學', '小真和奶奶', '小真一個人'], paras: [1, 4], why: '小真一家人一起到海邊玩，有小真、妹妹和媽媽。' },
      { id: 'wh-shi', key: '事', options: ['學螃蟹橫著走，在沙灘留下腳印', '在海裡游泳比賽', '在沙灘上堆沙堡', '坐船出海釣魚'], paras: [4, 5], why: '他們學螃蟹走路，沙灘上多了好多腳印。' },
      { id: 'wh-time', key: '時', options: ['夕陽下的傍晚', '一大早太陽剛出來', '下大雨的中午', '半夜大家睡覺時'], paras: [5, 6], why: '天上有紅紅的夕陽，是傍晚的時候。' },
      { id: 'wh-di', key: '地', options: ['海邊的沙灘', '學校的操場', '家裡的客廳', '高高的山上'], paras: [1], why: '小真一家人到海邊，在沙灘上玩。' },
      { id: 'wh-wu', key: '物', options: ['螃蟹挖的小洞和腳印', '貝殼和海星', '風箏和氣球', '沙堡和水桶'], paras: [2, 6], why: '沙灘上有螃蟹挖的小洞，還有一家人留下的腳印。' }
    ],
    quizLevels: { qa: 'infer', qb: 'extract', qc: 'extract', qd: 'extract', qe: 'extract', qf: 'infer', qg: 'evaluate', qh: 'interpret', k1: 'evaluate', k2: 'evaluate' },
    quizHelp: {
      qg: { think: ['一般的畫是用什麼畫的？畫在哪裡？', '沙灘上的這幅畫，是用什麼「畫」出來的？是誰一起畫的？'],
        why: '一般的畫是用筆畫在紙上。沙灘上的畫是用一家人的腳印，加上螃蟹挖的小洞，在夕陽下的沙灘完成的，是人和大自然一起畫的。' },
      qh: { think: ['小真一家人在沙灘上，仔細看了什麼？', '如果他們沒有注意看，還會發現沙灘上的畫嗎？'],
        why: '他們注意看螃蟹怎麼走，還學螃蟹走路，才發現腳印和小洞像一幅畫。只要用心觀察大自然，就能發現美麗又有趣的東西。' }
    },
    talkChoices: {
      k1: { good: ['我在海邊撿到好多漂亮的貝殼。', '我在海邊堆了一座大沙堡。'], bad: ['我在海邊寫數學作業。', '我在海邊睡了一整天，什麼都沒看。'],
        why: '題目問在海邊玩了什麼、看到什麼。撿貝殼、堆沙堡都是海邊好玩的事。寫作業、整天睡覺，沒有說到海邊的樂趣。' },
      k2: { good: ['我會用落葉在地上排成一隻蝴蝶。', '我會用小石頭排成一個大笑臉。'], bad: ['我會把公園的花全部摘下來。', '我會在牆上亂畫。'],
        why: '題目要用大自然的東西做一幅畫，也要愛護環境。用落葉、小石頭排圖案都很好；摘光花、在牆上亂畫會破壞環境。' }
    },
    hanzi: [
      { id: 'h-沙', combo: { layout: 'lr', type: '會意字', parts: [['氵', 'm', '水'], ['少', 'm', '小小的']] }, char: '沙', zhuyin: 'ㄕㄚ', radical: '水', strokes: 7, words: ['沙灘', '沙子', '沙發'], say: '沙，沙子的沙', cloze: '＿發', img: 'sofa.png', options: ['沙', '吵', '炒', '妙'], clue: '這個字的左邊是三點水，右邊是「少」。', explain: '答案是「沙」，左邊是三點水；「吵」左邊是口，「炒」左邊是火。', parts: ['氵', '少'], story: '左邊是水，右邊是「少」。水邊一粒一粒、小小的石頭，就是「沙」。', sentence: '我坐在軟軟的沙發上看書。', build: { layout: 'lr', show: ['？', '少'], answer: '氵', options: ['氵', '口', '火', '女'], clue: '想一想：海邊、河邊才有沙，左邊和什麼有關？' } },
      { id: 'h-灘', combo: { layout: 'lr', parts: [['氵', 'm', '水'], ['難', 's', '']] }, char: '灘', zhuyin: 'ㄊㄢ', radical: '水', strokes: 22, words: ['沙灘', '海灘'], say: '灘，沙灘的灘', cloze: '海＿', img: 'beach.png', options: ['灘', '難', '攤', '歎'], clue: '這個字的左邊是三點水，右邊是「難」。', explain: '答案是「灘」，左邊是三點水；「難」少了左邊，「攤」左邊是提手旁。', parts: ['氵', '難'], story: '左邊是水，右邊的「難」念起來像「灘」。水邊平平的、都是沙子的地方，就是「沙灘」。', sentence: '我們在海灘上撿貝殼。', build: { layout: 'lr', show: ['？', '難'], answer: '氵', options: ['氵', '扌', '亻', '口'], clue: '想一想：沙灘就在海水旁邊，左邊和什麼有關？' } },
      { id: 'h-海', combo: { layout: 'lr', parts: [['氵', 'm', '水'], ['每', 's', '']] }, char: '海', zhuyin: 'ㄏㄞˇ', radical: '水', strokes: 10, words: ['海邊', '大海', '海水'], say: '海，大海的海', cloze: '大＿', img: 'sea.png', options: ['海', '梅', '莓', '悔'], clue: '這個字的左邊是三點水，右邊是「每」。', explain: '答案是「海」，左邊是三點水；「梅」左邊是木，「莓」上面是草字頭。', parts: ['氵', '每'], story: '左邊是水，右邊的「每」念起來有點像「海」。很大很大、看不到邊的水，就是「大海」。', sentence: '大海藍藍的，好漂亮。', build: { layout: 'lr', show: ['？', '每'], answer: '氵', options: ['氵', '木', '忄', '艹'], clue: '想一想：大海裡都是什麼？' } },
      { id: 'h-邊', combo: { type: '形聲字', pict: '外面是走路的「辶」，表示走到很遠的地方；裡面念起來像「邊」。' }, char: '邊', zhuyin: 'ㄅㄧㄢ', radical: '辵', strokes: 19, words: ['海邊', '旁邊', '邊緣'], say: '邊，旁邊的邊', cloze: '旁＿', img: 'beside.png', options: ['邊', '過', '進', '遍'], clue: '這個字外面是走路的「辶」，裡面上面是「自」。', explain: '答案是「邊」；「過」裡面是咼，「進」裡面是隹。', parts: ['辶', '臱'], story: '外面的「辶」是走路，一直走、走到最外面的地方，就是「邊」。', sentence: '小狗坐在我旁邊。' },
      { id: 'h-退', combo: { layout: 'lr', parts: [['辶', 'm', '走路'], ['艮', 's', '']] }, char: '退', zhuyin: 'ㄊㄨㄟˋ', radical: '辵', strokes: 10, words: ['後退', '退潮'], say: '退，後退的退', cloze: '後＿', img: 'step-back.png', options: ['退', '腿', '很', '追'], clue: '這個字外面是走路的「辶」，裡面是「艮」。', explain: '答案是「退」，外面是辶；「腿」左邊是月，「很」左邊是雙人旁。', parts: ['辶', '艮'], story: '「辶」是走路，裡面的「艮」念起來有點像「退」。往後面走，就是「後退」。海水往外流走，叫「退潮」。', sentence: '看到大狗，我趕緊往後退。' },
      { id: 'h-遠', combo: { layout: 'lr', parts: [['辶', 'm', '走路'], ['袁', 's', '']] }, char: '遠', zhuyin: 'ㄩㄢˇ', radical: '辵', strokes: 14, words: ['很遠', '遠方', '永遠'], say: '遠，遠方的遠', cloze: '＿方', img: 'far-mountain.png', options: ['遠', '園', '近', '圓'], clue: '這個字外面是走路的「辶」，裡面是「袁」。', explain: '答案是「遠」；「園」外面是大框，「近」裡面是斤。', parts: ['辶', '袁'], story: '「辶」是走路，裡面的「袁」念起來像「遠」。要走很久才到的地方，就是「遠」。', sentence: '遠方有一座高高的山。' },
      { id: 'h-螃', combo: { layout: 'lr', parts: [['虫', 'm', '小動物'], ['旁', 's', '']] }, char: '螃', zhuyin: 'ㄆㄤˊ', radical: '虫', strokes: 16, words: ['螃蟹'], say: '螃，螃蟹的螃', cloze: '＿蟹', img: 'crab.png', options: ['螃', '旁', '傍', '膀'], clue: '這個字的左邊是「虫」，右邊是「旁」。', explain: '答案是「螃」，左邊是虫；「旁」少了左邊，「膀」左邊是月。', parts: ['虫', '旁'], story: '左邊的「虫」表示小動物，右邊的「旁」念起來像「螃」。橫著走路的小動物，就是「螃蟹」。', sentence: '石頭下面躲著一隻螃蟹。', build: { layout: 'lr', show: ['？', '旁'], answer: '虫', options: ['虫', '亻', '月', '木'], clue: '想一想：古人把很多小動物都歸在哪一個部首？' } },
      { id: 'h-蟹', combo: { layout: 'tb', parts: [['解', 's', ''], ['虫', 'm', '小動物']] }, char: '蟹', zhuyin: 'ㄒㄧㄝˋ', radical: '虫', strokes: 19, words: ['螃蟹', '寄居蟹'], say: '蟹，螃蟹的蟹', cloze: '寄居＿', img: 'hermit-crab.png', options: ['蟹', '解', '懈', '蠍'], clue: '這個字上面是「解」，下面是「虫」。', explain: '答案是「蟹」，下面是虫；「解」少了下面，「懈」左邊是豎心旁。', parts: ['解', '虫'], story: '上面的「解」念起來像「蟹」，下面是「虫」。有硬殼、兩隻大鉗子的小動物，就是「蟹」。', sentence: '寄居蟹背著貝殼慢慢爬。', build: { layout: 'tb', show: ['解', '？'], answer: '虫', options: ['虫', '心', '木', '口'], clue: '想一想：螃蟹是小動物，下面的部件和「蛙」的左邊一樣。' } },
      { id: 'h-愛', combo: { type: '形聲字', pict: '中間有一顆「心」，下面是走路的腳。心裡想著一個人，走過去看他，就是「愛」。' }, char: '愛', zhuyin: 'ㄞˋ', radical: '心', strokes: 13, words: ['可愛', '愛心', '喜愛'], say: '愛，可愛的愛', cloze: '可＿', img: 'cute-puppy.png', options: ['愛', '受', '憂', '夏'], clue: '這個字的中間有一顆心，最下面像走路的腳。', explain: '答案是「愛」，中間有心；「受」中間沒有心，「夏」是夏天的夏。', parts: ['爫', '冖', '心', '夂'], story: '「愛」的中間有一顆「心」。心裡很喜歡、很想對他好，就是「愛」。討人喜歡的樣子，叫做「可愛」。', sentence: '小狗搖著尾巴，好可愛。' },
      { id: 'h-注', combo: { layout: 'lr', parts: [['氵', 'm', '水'], ['主', 's', '']] }, char: '注', zhuyin: 'ㄓㄨˋ', radical: '水', strokes: 8, words: ['注意', '注音'], say: '注，注意的注', cloze: '＿音', img: 'zhuyin-card.png', options: ['注', '住', '柱', '往'], clue: '這個字的左邊是三點水，右邊是「主」。', explain: '答案是「注」，左邊是三點水；「住」左邊是單人旁，「柱」左邊是木。', parts: ['氵', '主'], story: '左邊是水，右邊的「主」念起來像「注」。把水倒進去，要仔細看著，就是「注」。把心思放在一件事上，叫「注意」。', sentence: '上課要注意聽老師說話。', build: { layout: 'lr', show: ['？', '主'], answer: '氵', options: ['氵', '亻', '木', '虫'], clue: '想一想：倒水進杯子要仔細看，左邊和什麼有關？' } },
      { id: 'h-夕', combo: { type: '象形字', pict: '「夕」像一個彎彎的、剛出來的月亮，表示傍晚。' }, char: '夕', zhuyin: 'ㄒㄧˋ', radical: '夕', strokes: 3, words: ['夕陽', '七夕'], say: '夕，夕陽的夕', cloze: '＿陽', img: 'sunset.png', options: ['夕', '多', '歹', '名'], clue: '這個字只有三畫，像一個彎彎的月亮。', explain: '答案是「夕」；「多」是兩個夕疊在一起，「名」下面多了口。', parts: ['夕'], story: '「夕」像一個彎彎的月亮剛剛出來，表示天快黑了。傍晚快下山的太陽，叫做「夕陽」。', sentence: '紅紅的夕陽慢慢下山了。' },
      { id: 'h-腳', combo: { layout: 'lr', parts: [['月', 'm', '身體'], ['却', 's', '']] }, char: '腳', zhuyin: 'ㄐㄧㄠˇ', radical: '肉', strokes: 13, words: ['腳印', '腳丫', '腳踏車'], say: '腳，腳踏車的腳', cloze: '＿踏車', img: 'bike.png', options: ['腳', '卻', '腿', '胸'], clue: '這個字的左邊是肉字旁，和身體有關。', explain: '答案是「腳」，左邊是月（肉）；「卻」左邊是谷，「腿」是大腿的腿。', parts: ['月', '却'], story: '左邊的「月」是肉，表示身體；右邊念起來像「腳」。身體最下面、用來走路的地方，就是「腳」。', sentence: '我騎腳踏車去公園。' },
      { id: 'h-丫', combo: { type: '象形字', pict: '「丫」像一根樹枝，上面分成兩叉。' }, char: '丫', zhuyin: 'ㄧㄚ', radical: '丨', strokes: 3, words: ['腳丫', '丫頭'], say: '丫，腳丫的丫', cloze: '腳＿', img: 'bare-feet.png', options: ['丫', '了', '子', '小'], clue: '這個字只有三畫，像一根分成兩叉的樹枝。', explain: '答案是「丫」；「了」是好了的了，「子」多了一橫。', parts: ['丫'], story: '「丫」像一根樹枝，上面分成兩叉。腳趾頭張開來像分叉一樣，所以腳也叫「腳丫」。', sentence: '我光著腳丫在草地上跑。' },
      { id: 'h-橫', combo: { layout: 'lr', parts: [['木', 'm', '木頭'], ['黃', 's', '']] }, char: '橫', zhuyin: 'ㄏㄥˊ', radical: '木', strokes: 16, words: ['橫著', '橫線'], say: '橫，橫線的橫', cloze: '＿線', img: 'line-draw.png', options: ['橫', '黃', '廣', '模'], clue: '這個字的左邊是木字旁，右邊是「黃」。', explain: '答案是「橫」，左邊是木；「黃」少了左邊，「廣」上面是廣字頭。', parts: ['木', '黃'], story: '左邊是「木」，右邊的「黃」念起來像「橫」。門上那根左右擺的木頭，就是「橫」。左右方向的，都叫「橫」。', sentence: '請把字寫在橫線上。', build: { layout: 'lr', show: ['？', '黃'], answer: '木', options: ['木', '氵', '扌', '口'], clue: '想一想：門上左右擺的那根，是用什麼做的？' } },
      { id: 'h-留', combo: { layout: 'tb', parts: [['卯', 's', ''], ['田', 'm', '田地']] }, char: '留', zhuyin: 'ㄌㄧㄡˊ', radical: '田', strokes: 10, words: ['留下', '停留', '留言'], say: '留，停留的留', cloze: '停＿', img: 'bird-rest.png', options: ['留', '溜', '榴', '貿'], clue: '這個字的下面是田地的「田」。', explain: '答案是「留」，下面是田；「溜」左邊多了三點水，「貿」下面是貝。', parts: ['卯', '田'], story: '上面念起來像「留」，下面是「田」。人在田裡工作，待著不走，就是「留」。', sentence: '小鳥在樹枝上停留了一會兒。', build: { layout: 'tb', show: ['卯', '？'], answer: '田', options: ['田', '貝', '心', '木'], clue: '想一想：農夫待在種稻子的地方，下面是什麼？' } },
      { id: 'h-印', combo: { type: '會意字', pict: '左邊像一隻手，右邊像一個跪著的人。用手把人往下壓，壓出痕跡，就是「印」。' }, char: '印', zhuyin: 'ㄧㄣˋ', radical: '卩', strokes: 6, words: ['腳印', '印章', '手印'], say: '印，印章的印', cloze: '＿章', img: 'stamp.png', options: ['印', '迎', '卯', '仰'], clue: '這個字的右邊是「卩」，左邊像一隻手。', explain: '答案是「印」；「迎」外面多了辶，「仰」左邊是單人旁。', parts: ['𠂎', '卩'], story: '左邊像一隻手，右邊像一個跪著的人。用手壓下去，留下痕跡，就是「印」。蓋在紙上的小圖章，叫做「印章」。', sentence: '老師在我的本子上蓋了一個印章。' },
      { id: 'h-挖', combo: { layout: 'lr', parts: [['扌', 'm', '手'], ['空', 's', '']] }, char: '挖', zhuyin: 'ㄨㄚ', radical: '手', strokes: 9, words: ['挖洞', '挖土'], say: '挖，挖土的挖', cloze: '＿土', img: 'dig-soil.png', options: ['挖', '蛙', '控', '空'], clue: '這個字的左邊是提手旁，右邊是「空」。', explain: '答案是「挖」，左邊是提手旁；「蛙」左邊是虫，「空」少了左邊。', parts: ['扌', '空'], story: '左邊是手，右邊是「空」。用手把土挖走，留下一個空空的洞，就是「挖」。', sentence: '小狗在院子裡挖洞。', build: { layout: 'lr', show: ['？', '空'], answer: '扌', options: ['扌', '虫', '木', '氵'], clue: '想一想：要用什麼把土弄出來？' } },
      { id: 'h-麗', combo: { type: '形聲字', pict: '下面是一隻「鹿」，上面像鹿頭上兩支漂亮的角。' }, char: '麗', zhuyin: 'ㄌㄧˋ', radical: '鹿', strokes: 19, words: ['美麗', '亮麗'], say: '麗，美麗的麗', cloze: '美＿', img: 'deer.png', options: ['麗', '鹿', '麓', '灑'], clue: '這個字下面是一隻鹿，上面像兩支漂亮的角。', explain: '答案是「麗」；「鹿」少了上面，「麓」上面是林。', parts: ['丽', '鹿'], story: '下面是「鹿」，上面像鹿頭上兩支漂亮的角。鹿角很好看，所以「麗」就是漂亮。', sentence: '花園裡開滿美麗的花。' }
    ],
    vocab: [
      { id: 'v-海邊', word: '海邊', meaning: '靠近大海的地方。', example: '夏天我們全家去＿＿玩水。', img: 'sea.png', options: ['海邊', '腳印', '夕陽', '螃蟹'] },
      { id: 'v-沙灘', word: '沙灘', meaning: '水邊平平的、都是沙子的地方。', example: '我們在＿＿上堆沙堡。', img: 'beach.png', options: ['沙灘', '腳丫', '夕陽', '注意'] },
      { id: 'v-退', word: '退', meaning: '往後面移動。', example: '海水＿得好遠，沙灘變得好大。', img: 'low-tide.png', options: ['退', '挖', '留', '橫'] },
      { id: 'v-遠', word: '遠', meaning: '距離很長，要走很久。', example: '外婆家好＿，要坐兩個小時的車。', img: 'far-mountain.png', options: ['遠', '退', '挖', '橫'] },
      { id: 'v-螃蟹', word: '螃蟹', meaning: '有硬殼、兩隻大鉗子，橫著走路的小動物。', example: '一隻＿＿從石頭下面爬出來。', img: 'crab.png', options: ['螃蟹', '海邊', '夕陽', '腳印'] },
      { id: 'v-爬進爬出', word: '爬進爬出', meaning: '一下子爬進去，一下子又爬出來。', example: '螞蟻在洞口＿＿＿＿，好忙碌。', img: 'ant-hole.png', options: ['爬進爬出', '閃閃發亮', '大大小小', '好遠好遠'] },
      { id: 'v-可愛', word: '可愛', meaning: '討人喜歡的樣子。', example: '小貓咪睡覺的樣子好＿＿。', img: 'cute-puppy.png', options: ['可愛', '注意', '美麗', '橫著'] },
      { id: 'v-注意', word: '注意', meaning: '把心思放在一件事上，仔細看、仔細聽。', example: '過馬路的時候要＿＿車子。', img: 'cross-road.png', options: ['注意', '可愛', '美麗', '挖洞'] },
      { id: 'v-夕陽', word: '夕陽', meaning: '傍晚快下山的太陽。', example: '我們坐在海邊看＿＿慢慢下山。', img: 'sunset.png', options: ['夕陽', '腳印', '螃蟹', '沙灘'] },
      { id: 'v-閃閃發亮', word: '閃閃發亮', meaning: '一閃一閃的發出亮光。', example: '天上的星星＿＿＿＿。', img: 'sparkle-sea.png', options: ['閃閃發亮', '爬進爬出', '大大小小', '好遠好遠'] },
      { id: 'v-腳丫', word: '腳丫', meaning: '腳。', example: '我光著＿＿在草地上跑。', img: 'bare-feet.png', options: ['腳丫', '夕陽', '螃蟹', '海邊'] },
      { id: 'v-橫', word: '橫', meaning: '左右方向的，和「直」相反。', example: '螃蟹都是＿著走路的。', img: 'crab-walk.png', options: ['橫', '退', '挖', '遠'] },
      { id: 'v-腳印', word: '腳印', meaning: '腳踩過留下的痕跡。', example: '雪地上有一排小狗的＿＿。', img: 'footprints.png', options: ['腳印', '夕陽', '沙灘', '注意'] },
      { id: 'v-美麗', word: '美麗', meaning: '漂亮、好看。', example: '春天的花園好＿＿。', img: 'flower-garden.png', options: ['美麗', '可愛', '注意', '遠方'] }
    ],
    charwords: [
      { id: 'cw-沙', char: '沙', img: 'sand-castle.png', word: '沙子', charMeaning: '一粒一粒很小的石頭。', meaning: '細細小小、一粒一粒的石頭。', example: '我用＿＿堆了一座城堡。', options: ['沙子', '大海', '旁邊', '印章'] },
      { id: 'cw-灘', char: '灘', img: 'beach.png', word: '海灘', charMeaning: '水邊的沙地。', meaning: '海邊平平的沙地。', example: '我們在＿＿上撿貝殼。', options: ['海灘', '夕陽', '後退', '注音'] },
      { id: 'cw-海', char: '海', img: 'sea.png', word: '大海', charMeaning: '很大很大的水。', meaning: '很大很大，看不到邊的水。', example: '＿＿裡住著好多魚。', options: ['大海', '腳丫', '印章', '停留'] },
      { id: 'cw-邊', char: '邊', img: 'beside.png', word: '旁邊', charMeaning: '東西的外圍、靠近的地方。', meaning: '很靠近的地方。', example: '我的座位在窗戶＿＿。', options: ['旁邊', '遠方', '大海', '挖土'] },
      { id: 'cw-退', char: '退', img: 'step-back.png', word: '後退', charMeaning: '往後移動。', meaning: '往後面走。', example: '請大家＿＿一步，排好隊。', options: ['後退', '停留', '挖土', '注音'] },
      { id: 'cw-遠', char: '遠', img: 'far-mountain.png', word: '遠方', charMeaning: '距離很長。', meaning: '很遠的地方。', example: '我看到＿＿有一艘大船。', options: ['遠方', '旁邊', '沙子', '印章'] },
      { id: 'cw-螃', char: '螃', img: 'crab.png', word: '螃蟹', charMeaning: '橫著走路的小動物。', meaning: '有硬殼和大鉗子，橫著走的小動物。', example: '＿＿舉起大鉗子，好威風。', options: ['螃蟹', '沙子', '夕陽', '大海'] },
      { id: 'cw-蟹', char: '蟹', img: 'hermit-crab.png', word: '寄居蟹', charMeaning: '有硬殼的小動物。', meaning: '背著貝殼當家的小動物。', example: '＿＿＿背著貝殼在沙灘上爬。', options: ['寄居蟹', '腳踏車', '沙發椅', '印章盒'] },
      { id: 'cw-愛', char: '愛', img: 'love-heart.png', word: '愛心', charMeaning: '很喜歡、想對他好。', meaning: '關心別人、想幫助別人的心。', example: '他把零用錢捐出去，很有＿＿。', options: ['愛心', '注音', '停留', '後退'] },
      { id: 'cw-注', char: '注', img: 'zhuyin-card.png', word: '注音', charMeaning: '把心放在上面；也有標上記號的意思。', meaning: '標在國字旁邊，幫忙念出字音的符號。', example: '不會念的字，可以看＿＿。', options: ['注音', '愛心', '印章', '旁邊'] },
      { id: 'cw-夕', char: '夕', img: 'sunset.png', word: '夕陽', charMeaning: '傍晚。', meaning: '傍晚快下山的太陽。', example: '紅紅的＿＿把天空染紅了。', options: ['夕陽', '大海', '腳丫', '沙子'] },
      { id: 'cw-腳', char: '腳', img: 'bike.png', word: '腳踏車', charMeaning: '身體最下面、用來走路的地方。', meaning: '用腳踩踏板，讓輪子轉的車子。', example: '哥哥騎＿＿＿去上學。', options: ['腳踏車', '寄居蟹', '沙發椅', '印章盒'] },
      { id: 'cw-丫', char: '丫', img: 'bare-feet.png', word: '腳丫', charMeaning: '分叉的樣子。', meaning: '腳。', example: '小寶寶的＿＿好小好可愛。', options: ['腳丫', '夕陽', '旁邊', '遠方'] },
      { id: 'cw-橫', char: '橫', img: 'line-draw.png', word: '橫線', charMeaning: '左右方向的。', meaning: '從左畫到右的線。', example: '老師在黑板上畫了一條＿＿。', options: ['橫線', '大海', '停留', '注音'] },
      { id: 'cw-留', char: '留', img: 'bird-rest.png', word: '停留', charMeaning: '待著不走。', meaning: '停下來，在一個地方待一下。', example: '蝴蝶在花上＿＿了一會兒。', options: ['停留', '後退', '挖土', '橫線'] },
      { id: 'cw-印', char: '印', img: 'stamp.png', word: '印章', charMeaning: '壓出來的痕跡。', meaning: '可以蓋在紙上的小圖章。', example: '老師在聯絡簿上蓋了一個＿＿。', options: ['印章', '注音', '夕陽', '沙子'] },
      { id: 'cw-挖', char: '挖', img: 'dig-soil.png', word: '挖土', charMeaning: '用手或工具把東西弄出來。', meaning: '用鏟子把土弄起來。', example: '我拿小鏟子＿＿種花。', options: ['挖土', '後退', '停留', '橫線'] },
      { id: 'cw-麗', char: '麗', img: 'flower-garden.png', word: '美麗', charMeaning: '漂亮、好看。', meaning: '很漂亮、很好看。', example: '公園裡開滿了＿＿的花。', options: ['美麗', '愛心', '注音', '旁邊'] }
    ],
    fix: [
      { id: 'fx-沙', char: '沙', wrong: '吵', sentence: '我在海邊玩沙子。', options: ['沙', '吵', '炒'], clue: '一粒一粒的小石頭，左邊是三點水。', explain: '要改成「沙」。沙子的沙左邊是三點水；「吵」是吵鬧的吵。' },
      { id: 'fx-海', char: '海', wrong: '梅', sentence: '我們坐船到大海上看鯨魚。', options: ['海', '梅', '悔'], clue: '很大很大的水，左邊是三點水。', explain: '要改成「海」。大海的海左邊是三點水；「梅」是梅花的梅。' },
      { id: 'fx-退', char: '退', wrong: '腿', sentence: '請大家往後退一步。', options: ['退', '腿', '追'], clue: '往後移動，外面要有走路的「辶」。', explain: '要改成「退」。後退的退外面是辶；「腿」是大腿的腿。' },
      { id: 'fx-螃', char: '螃', wrong: '旁', sentence: '沙灘上有一隻小螃蟹。', options: ['螃', '旁', '膀'], clue: '有大鉗子的小動物，左邊要有「虫」。', explain: '要改成「螃」。螃蟹的螃左邊是虫；「旁」是旁邊的旁。' },
      { id: 'fx-愛', char: '愛', wrong: '受', sentence: '這隻小兔子好可愛。', options: ['愛', '受', '夏'], clue: '討人喜歡，中間要有一顆心。', explain: '要改成「愛」。可愛的愛中間有心；「受」中間沒有心。' },
      { id: 'fx-注', char: '注', wrong: '住', sentence: '上課要注意聽講。', options: ['注', '住', '柱'], clue: '把心思放在上面，左邊是三點水。', explain: '要改成「注」。注意的注左邊是三點水；「住」是住家的住。' },
      { id: 'fx-夕', char: '夕', wrong: '多', sentence: '傍晚的夕陽紅紅的。', options: ['夕', '多', '名'], clue: '傍晚快下山的太陽，這個字只有三畫。', explain: '要改成「夕」。夕陽的夕只有三畫；「多」是兩個夕。' },
      { id: 'fx-腳', char: '腳', wrong: '卻', sentence: '雪地上有好多腳印。', options: ['腳', '卻', '腿'], clue: '用來走路的身體部位，左邊是肉字旁。', explain: '要改成「腳」。腳印的腳左邊是月（肉）；「卻」左邊是谷。' },
      { id: 'fx-橫', char: '橫', wrong: '黃', sentence: '螃蟹是橫著走路的。', options: ['橫', '黃', '模'], clue: '左右方向的，左邊要有木字旁。', explain: '要改成「橫」。橫著的橫左邊是木；「黃」是黃色的黃。' },
      { id: 'fx-留', char: '留', wrong: '溜', sentence: '下課後，我留在教室幫忙。', options: ['留', '溜', '榴'], clue: '待著不走，這個字沒有三點水。', explain: '要改成「留」。留下的留沒有三點水；「溜」是溜冰的溜。' },
      { id: 'fx-印', char: '印', wrong: '迎', sentence: '老師在本子上蓋印章。', options: ['印', '迎', '仰'], clue: '蓋在紙上的圖章，外面沒有「辶」。', explain: '要改成「印」。印章的印外面沒有辶；「迎」是歡迎的迎。' },
      { id: 'fx-挖', char: '挖', wrong: '蛙', sentence: '小狗在院子裡挖洞。', options: ['挖', '蛙', '空'], clue: '用手把土弄出來，左邊是提手旁。', explain: '要改成「挖」。挖洞的挖左邊是提手旁；「蛙」是青蛙的蛙。' }
    ],
    similar: [
      { id: 's1', meaning: '「＿子」是一粒一粒很小的石頭。', sentence: '鞋子裡跑進了＿子。', frame: '＿子', options: ['沙', '吵'], answer: '沙', clue: '提示：和水有關，左邊是三點水。', explain: '答案是「沙」；「吵」是吵鬧的吵，左邊是口。' },
      { id: 's2', meaning: '「＿鬧」是聲音很大、很亂。', sentence: '圖書館裡不可以＿鬧。', frame: '＿鬧', options: ['吵', '沙'], answer: '吵', clue: '提示：和聲音有關，左邊是口。', explain: '答案是「吵」；「沙」是沙子的沙。' },
      { id: 's3', meaning: '「後＿」是往後面走。', sentence: '看到小蛇，大家嚇得後＿。', frame: '後＿', options: ['退', '腿'], answer: '退', clue: '提示：外面是走路的「辶」。', explain: '答案是「退」；「腿」是大腿的腿。' },
      { id: 's4', meaning: '「大＿」是膝蓋上面的那一段。', sentence: '我跑步跑到大＿好痠。', frame: '大＿', options: ['腿', '退'], answer: '腿', clue: '提示：和身體有關，左邊是肉字旁。', explain: '答案是「腿」；「退」是後退的退。' },
      { id: 's5', meaning: '「＿意」是把心思放在上面。', sentence: '過馬路要＿意紅綠燈。', frame: '＿意', options: ['注', '住'], answer: '注', clue: '提示：左邊是三點水。', explain: '答案是「注」；「住」是住家的住，左邊是單人旁。' },
      { id: 's6', meaning: '「＿家」是一家人生活的房子。', sentence: '我的＿家旁邊有一間超商。', frame: '＿家', options: ['住', '注'], answer: '住', clue: '提示：和人有關，左邊是單人旁。', explain: '答案是「住」；「注」是注意的注。' },
      { id: 's7', meaning: '「停＿」是停下來待一會兒。', sentence: '小鳥在電線上停＿。', frame: '停＿', options: ['留', '溜'], answer: '留', clue: '提示：下面是田，左邊沒有水。', explain: '答案是「留」；「溜」是溜冰的溜。' },
      { id: 's8', meaning: '「＿冰」是穿著冰鞋在冰上滑。', sentence: '冬天我們去＿冰場玩。', frame: '＿冰', options: ['溜', '留'], answer: '溜', clue: '提示：滑滑的，左邊有三點水。', explain: '答案是「溜」；「留」是停留的留。' }
    ],
    listen: [
      { id: 'l1', text: '有硬殼、兩隻大鉗子，橫著走路。', answer: 0, options: [{ text: '螃蟹', img: 'crab.png' }, { text: '腳丫', img: 'bare-feet.png' }, { text: '夕陽', img: 'sunset.png' }, { text: '沙發', img: 'sofa.png' }] },
      { id: 'l2', text: '傍晚快要下山、紅紅的太陽。', answer: 0, options: [{ text: '夕陽', img: 'sunset.png' }, { text: '大海', img: 'sea.png' }, { text: '腳印', img: 'footprints.png' }, { text: '印章', img: 'stamp.png' }] },
      { id: 'l3', text: '腳踩過去，留下一個一個的痕跡。', answer: 0, options: [{ text: '腳印', img: 'footprints.png' }, { text: '螃蟹', img: 'crab.png' }, { text: '沙灘', img: 'beach.png' }, { text: '夕陽', img: 'sunset.png' }] },
      { id: 'l4', text: '海邊平平的地上，都是一粒一粒的沙。', answer: 0, options: [{ text: '沙灘', img: 'beach.png' }, { text: '印章', img: 'stamp.png' }, { text: '腳踏車', img: 'bike.png' }, { text: '橫線', img: 'line-draw.png' }] },
      { id: 'l5', text: '背著貝殼當家，慢慢的爬。', answer: 0, options: [{ text: '寄居蟹', img: 'hermit-crab.png' }, { text: '螃蟹', img: 'crab.png' }, { text: '小狗', img: 'cute-puppy.png' }, { text: '小鳥', img: 'bird-rest.png' }] },
      { id: 'l6', text: '過馬路的時候，要看清楚左右有沒有車。', answer: 0, options: [{ text: '注意', img: 'cross-road.png' }, { text: '可愛', img: 'cute-puppy.png' }, { text: '挖土', img: 'dig-soil.png' }, { text: '後退', img: 'step-back.png' }] },
      { id: 'l7', text: '用小鏟子把土弄起來，挖出一個洞。', answer: 0, options: [{ text: '挖土', img: 'dig-soil.png' }, { text: '停留', img: 'bird-rest.png' }, { text: '注意', img: 'cross-road.png' }, { text: '橫線', img: 'line-draw.png' }] },
      { id: 'l8', text: '海水一閃一閃的，好像撒滿了星星。', answer: 0, options: [{ text: '閃閃發亮', img: 'sparkle-sea.png' }, { text: '爬進爬出', img: 'ant-hole.png' }, { text: '後退', img: 'step-back.png' }, { text: '印章', img: 'stamp.png' }] }
    ],
    phrase: {
      pickName: '看圖選一選',
      pickSay: '看圖，選出最適合的短語，說說看牠在做什麼。',
      intro: { example: '跑上跑下', img: 'pr-run-stairs.png', parts: [{ text: '跑', role: '動作' }, { text: '上' }, { text: '跑', role: '同一個動作' }, { text: '下' }],
        explain: '同一個動作說兩次，後面加上意思相反的字，像「上、下」、「進、出」、「來、去」，表示一直動來動去。' },
      pick: [
        { id: 'ph1', img: 'pr-monkey-tree.png', before: '', join: '', noun: '。', ask: '牠在做什麼', look: '再看看圖片，小猴子在樹幹上做什麼？', options: ['爬上爬下', '游來游去', '飛來飛去', '走進走出'], clue: '提示：牠抓著樹幹，一會兒往高處、一會兒往低處。', explain: '答案是「爬上爬下」：小猴子在樹上爬上爬下。' },
        { id: 'ph2', img: 'pr-fish-tank.png', before: '', join: '', noun: '。', ask: '牠們在做什麼', look: '再看看圖片，魚缸裡的小魚在做什麼？', options: ['游來游去', '爬上爬下', '走進走出', '跳上跳下'], clue: '提示：小魚從魚缸這頭到那頭，不停的划水。', explain: '答案是「游來游去」：小魚在魚缸裡游來游去。' },
        { id: 'ph3', img: 'pr-butterfly-garden.png', before: '', join: '', noun: '。', ask: '牠們在做什麼', look: '再看看圖片，花園裡的蝴蝶在做什麼？', options: ['飛來飛去', '游來游去', '爬上爬下', '走進走出'], clue: '提示：牠們拍著翅膀，這朵花停一下、那朵花停一下。', explain: '答案是「飛來飛去」：蝴蝶在花園裡飛來飛去。' },
        { id: 'ph4', img: 'pr-mom-door.png', before: '', join: '', noun: '。', ask: '她在做什麼', look: '再看看圖片，媽媽在門口忙著做什麼？', options: ['走進走出', '飛來飛去', '游來游去', '爬上爬下'], clue: '提示：她搬著東西在門口忙，一趟又一趟。', explain: '答案是「走進走出」：媽媽忙著搬東西，走進走出。' },
        { id: 'ph5', img: 'pr-trampoline.png', before: '', join: '', noun: '。', ask: '他在做什麼', look: '再看看圖片，小男孩在軟墊上做什麼？', options: ['跳上跳下', '游來游去', '飛來飛去', '走進走出'], clue: '提示：他站在軟軟的墊子中間，一會兒彈高、一會兒落低。', explain: '答案是「跳上跳下」：小男孩在軟墊上跳上跳下。' }
      ],
      fill: [
        { id: 'pf1', img: 'pr-monkey-tree.png', parts: ['爬', '上', '爬', '下'] },
        { id: 'pf2', img: 'pr-fish-tank.png', parts: ['游', '來', '游', '去'] },
        { id: 'pf3', img: 'pr-mom-door.png', parts: ['走', '進', '走', '出'] },
        { id: 'pf4', img: 'pr-trampoline.png', parts: ['跳', '上', '跳', '下'] }
      ],
      say: [],
      words: [{ word: '注意', meaning: '把心思放在一件事上，仔細看、仔細聽。', img: 'cross-road.png' }],
      choose: [
        { id: 'pw1', word: '注意', options: ['上課時，我注意聽老師說話。', '我一邊看電視，一邊很注意的寫功課。'], clue: '提示：想一想，「注意」的時候，心思是放在一件事上，還是分給很多事？', explain: '第一句用得對：專心聽老師說話。一邊看電視一邊寫功課，心思沒有放在功課上。' }
      ],
      make: [
        { id: 'pm1', word: '注意', clue: '提示：想想看，做什麼事的時候要特別小心、仔細看？', model: '下樓梯的時候要注意腳下。' }
      ],
      phrase2: {
        intro: { example: '高高低低的房子', img: 'pz-houses.png', parts: [{ text: '高高低低', role: '疊字怎麼樣' }, { text: '的' }, { text: '房子', role: '什麼東西' }],
          explain: '用兩組疊字，像「高高」和「低低」，說出東西有很多不一樣的樣子，加上「的」，最後說是什麼東西。' },
        pick: [
          { id: 'p2-pz1', img: 'pz-night-market.png', before: '', noun: '夜市', ask: '什麼樣的夜市', look: '再看看圖片，夜市裡人多不多、聲音大不大？', options: ['熱熱鬧鬧', '安安靜靜', '冷冷清清', '乾乾淨淨'], clue: '提示：人好多，到處都是叫賣聲。', explain: '答案是「熱熱鬧鬧」，完整的短語是「熱熱鬧鬧的夜市」。' },
          { id: 'p2-pz2', img: 'pz-library.png', before: '', noun: '圖書館', ask: '什麼樣的圖書館', look: '再看看圖片，大家在圖書館裡做什麼？', options: ['安安靜靜', '熱熱鬧鬧', '吵吵鬧鬧', '紅紅綠綠'], clue: '提示：大家都在看書，連一點聲音都沒有。', explain: '答案是「安安靜靜」，完整的短語是「安安靜靜的圖書館」。' },
          { id: 'p2-pz3', img: 'pz-balloons.png', before: '', noun: '氣球', ask: '什麼樣的氣球', look: '再看看圖片，氣球是什麼顏色？', options: ['紅紅綠綠', '安安靜靜', '乾乾淨淨', '冷冷清清'], clue: '提示：氣球有好多種顏色，像彩虹一樣。', explain: '答案是「紅紅綠綠」，完整的短語是「紅紅綠綠的氣球」。' },
          { id: 'p2-pz4', img: 'pz-clean-room.png', before: '', noun: '教室', ask: '什麼樣的教室', look: '再看看圖片，打掃完的教室怎麼樣？', options: ['乾乾淨淨', '吵吵鬧鬧', '紅紅綠綠', '冷冷清清'], clue: '提示：地上沒有垃圾，桌子也擦得亮亮的。', explain: '答案是「乾乾淨淨」，完整的短語是「乾乾淨淨的教室」。' }
        ],
        fill: [
          { id: 'pz1', img: 'pz-night-market.png', parts: ['熱熱鬧鬧', '的', '夜市'] },
          { id: 'pz2', img: 'pz-library.png', parts: ['安安靜靜', '的', '圖書館'] },
          { id: 'pz3', img: 'pz-balloons.png', parts: ['紅紅綠綠', '的', '氣球'] },
          { id: 'pz4', img: 'pz-clean-room.png', parts: ['乾乾淨淨', '的', '教室'] }
        ]
      }
    },
    pattern: []
  };
  if (typeof module === 'object' && module.exports) module.exports = d;
  else { root.H3A_WORDS = root.H3A_WORDS || {}; root.H3A_WORDS.L05 = d; }
})(this);
