/* 第 11 課字詞練習（公開、不加密）。句子和解釋都是 Claude 自己寫的，沒有課本原文。
   生字、語詞：options 的第一個是正確答案（作答時會打亂）。二年級：不放成語、修辭。 */
(function (root) {
  var d = {
    quizLevels: { qa: 'infer', qb: 'extract', qc: 'extract', qd: 'extract', qe: 'infer', qf: 'infer', qg: 'interpret', qh: 'interpret', k1: 'evaluate', k2: 'evaluate' },
    quizHelp: {
      qg: { think: ['把「人」放進「門」裡，會變成什麼字？把「馬」放進去呢？', '這些東西進了門以後，是不是都變成一個新的字？'],
        why: '人進門是「閃」，月亮進門是「閒」，馬進門是「闖」，耳朵進門是「聞」。這些東西和「門」合在一起，都會變成新的字，所以詩裡寫的都和門有關。' },
      qh: { think: ['詩裡出現了好多有「門」的字，你找到了哪幾個？', '作者用好玩的故事寫這些字，是想讓我們學會什麼？'],
        why: '作者把「門」和別的字放在一起，變成閃、閒、闖、聞、間、問。他用好玩的詩，讓我們認識這些字是怎麼組成的。' }
    },
    talkChoices: {
      k1: { good: ['「心」走進門，變成「悶」。', '「才」走進門，變成「閉」。'], bad: ['「口」走出門，變成「吃」。', '「門」變成一棵大樹。'],
        why: '題目要找能和「門」合成新字的東西：心進門是悶，才進門是閉。「吃」不是有門的字；門變成大樹，沒有組成新的字。' },
      k2: { good: ['不是妖怪，是字和門組成了新的字。', '我覺得是一扇魔法門，會把東西變成新的字。'], bad: ['我覺得門裡面在賣冰淇淋。', '我不想猜，所以什麼都沒有。'],
        why: '想一想詩裡發生的事：東西一進門就變了樣，其實是變成了新的字。賣冰淇淋和詩裡的事沒有關係；不想猜也沒有說出理由。' }
    },
    hanzi: [
      { id: 'h-怪', combo: { layout: 'lr', parts: [['忄', 'm', '心'], ['圣', 's', '']] }, char: '怪', zhuyin: 'ㄍㄨㄞˋ', radical: '心', strokes: 8, words: ['奇怪', '妖怪', '怪事'], say: '怪，奇怪的怪', cloze: '奇＿', img: 'strange-door.png', options: ['怪', '快', '性', '經'], clue: '這個字的左邊是豎心旁，右邊上面是「又」，下面是「土」。', explain: '答案是「怪」；「快」右邊是夬，「性」右邊是生。', parts: ['忄', '圣'], story: '左邊是豎心旁，表示心裡的感覺。看到和平常不一樣的東西，心裡覺得很特別，就是「奇怪」。', sentence: '這隻小狗今天好奇怪，一直不吃飯。', build: { layout: 'lr', show: ['？', '圣'], answer: '忄', options: ['忄', '扌', '亻', '氵'], clue: '想一想：覺得奇怪是心裡的感覺，左邊是什麼？' } },
      { id: 'h-門', combo: { type: '象形字', pict: '「門」像左右兩片打開的門板。' }, char: '門', zhuyin: 'ㄇㄣˊ', radical: '門', strokes: 8, words: ['大門', '門口', '開門'], say: '門，大門的門', cloze: '開＿', img: 'open-door.png', options: ['門', '鬥', '問', '間'], clue: '這個字像左右兩片打開的木板。', explain: '答案是「門」；「鬥」是打鬥的鬥，「問」裡面多了口。', parts: ['門'], story: '「門」像左右兩片門板。房子、車子可以開、可以關的出入口，就是「門」。', sentence: '有人在按門鈴，我去開門。' },
      { id: 'h-扇', combo: { layout: 'tb', type: '會意字', parts: [['戶', 'm', '門'], ['羽', 'm', '羽毛']] }, char: '扇', zhuyin: 'ㄕㄢˋ', radical: '戶', strokes: 10, words: ['一扇門', '扇子', '電風扇'], say: '扇，扇子的扇', cloze: '電風＿', img: 'fan.png', options: ['扇', '搧', '房', '肩'], clue: '這個字的上面是「戶」，下面是「羽」。', explain: '答案是「扇」；「房」下面是方，「肩」下面是月。', parts: ['戶', '羽'], story: '上面的「戶」是門，下面的「羽」是羽毛。像門板一樣能開合、像羽毛一樣能搧風，就是「扇」。一片門也可以說「一扇門」。', sentence: '天氣好熱，我打開電風扇。', build: { layout: 'tb', show: ['？', '羽'], answer: '戶', options: ['戶', '雨', '艹', '宀'], clue: '想一想：上面的部件是「門」的一半。' } },
      { id: 'h-立', combo: { type: '象形字', pict: '「立」像一個人張開手腳，站在地上。' }, char: '立', zhuyin: 'ㄌㄧˋ', radical: '立', strokes: 5, words: ['立刻', '站立', '立正'], say: '立，立正的立', cloze: '＿正', img: 'stand-straight.png', options: ['立', '位', '拉', '粒'], clue: '這個字像一個人站在地上，最下面是一長橫。', explain: '答案是「立」；「位」左邊多了人，「拉」左邊是提手旁。', parts: ['立'], story: '「立」像一個人張開手腳，站在地上。站得直直的，叫做「立正」。', sentence: '升旗的時候，大家都要立正站好。' },
      { id: 'h-刻', combo: { layout: 'lr', parts: [['亥', 's', ''], ['刂', 'm', '刀']] }, char: '刻', zhuyin: 'ㄎㄜˋ', radical: '刀', strokes: 8, words: ['立刻', '刻字', '深刻'], say: '刻，立刻的刻', cloze: '＿字', img: 'carve-wood.png', options: ['刻', '該', '孩', '刺'], clue: '這個字的右邊是立刀旁，左邊是「亥」。', explain: '答案是「刻」；「該」左邊是言，「孩」左邊是子。', parts: ['亥', '刂'], story: '右邊的「刂」是刀，左邊的「亥」念起來有點像「刻」。用刀在木頭上挖出字，就是「刻字」。', sentence: '爺爺在木頭上刻字。', build: { layout: 'lr', show: ['亥', '？'], answer: '刂', options: ['刂', '口', '子', '言'], clue: '想一想：要用什麼工具在木頭上挖出字？' } },
      { id: 'h-閒', combo: { type: '會意字', pict: '「門」裡面有一個「月」，月光從門縫照進來。' }, char: '閒', zhuyin: 'ㄒㄧㄢˊ', radical: '門', strokes: 12, words: ['空閒', '休閒', '閒得發慌'], say: '閒，空閒的閒', cloze: '空＿', img: 'relax-hammock.png', options: ['閒', '間', '閃', '開'], clue: '這個字的外面是門，裡面是月亮的「月」。', explain: '答案是「閒」；「間」裡面是日，「閃」裡面是人。', parts: ['門', '月'], story: '「門」裡面有一個「月」。晚上沒事，可以在門口看月亮，表示有空、沒事做，就是「閒」。', sentence: '放假的時候，我很空閒。' },
      { id: 'h-馬', combo: { type: '象形字', pict: '「馬」像一匹馬，有長長的臉、飄飄的鬃毛和四條腿。' }, char: '馬', zhuyin: 'ㄇㄚˇ', radical: '馬', strokes: 10, words: ['斑馬', '馬上', '騎馬'], say: '馬，斑馬的馬', cloze: '斑＿', img: 'zebra.png', options: ['馬', '鳥', '烏', '媽'], clue: '這個字像一匹站著的動物，上面有三橫，下面有四點。', explain: '答案是「馬」；「鳥」上面多一撇，「媽」左邊多了女。', parts: ['馬'], story: '「馬」像一匹站著的馬，下面的四點是四條腿。很快、不等一下，也可以說「馬上」。', sentence: '動物園裡的斑馬身上有黑白條紋。' },
      { id: 'h-闖', combo: { type: '會意字', pict: '一匹「馬」從「門」裡衝出來。' }, char: '闖', zhuyin: 'ㄔㄨㄤˇ', radical: '門', strokes: 18, words: ['闖關', '闖進', '闖來闖去'], say: '闖，闖關的闖', cloze: '＿關', img: 'obstacle-course.png', options: ['闖', '閩', '聞', '間'], clue: '這個字的外面是門，裡面是一匹會跑的動物。', explain: '答案是「闖」；「聞」裡面是耳，「間」裡面是日。', parts: ['門', '馬'], story: '一匹「馬」從「門」裡猛衝出來，就是「闖」。一關一關衝過去，叫做「闖關」。', sentence: '我們玩闖關遊戲，大家都好開心。' },
      { id: 'h-耳', combo: { type: '象形字', pict: '「耳」像一隻耳朵的樣子。' }, char: '耳', zhuyin: 'ㄦˇ', radical: '耳', strokes: 6, words: ['耳朵', '耳機', '木耳'], say: '耳，耳朵的耳', cloze: '＿朵', img: 'ear.png', options: ['耳', '目', '且', '自'], clue: '這個字像人聽聲音的器官，右邊一豎長長的。', explain: '答案是「耳」；「目」是眼睛，「且」下面一橫比較長。', parts: ['耳'], story: '「耳」像一隻耳朵的樣子。用來聽聲音的地方，叫做「耳朵」。', sentence: '大象有一對大大的耳朵。' },
      { id: 'h-主', combo: { type: '象形字', pict: '「主」像一盞燈，上面一點是火苗。' }, char: '主', zhuyin: 'ㄓㄨˇ', radical: '丶', strokes: 5, words: ['主人', '主播', '主角'], say: '主，主人的主', cloze: '＿人', img: 'dog-owner.png', options: ['主', '王', '玉', '住'], clue: '這個字是「王」的上面多了一點。', explain: '答案是「主」；「王」上面沒有點，「玉」的點在右下。', parts: ['丶', '王'], story: '「主」像一盞燈，上面一點是火苗。家裡管事的人，像燈一樣重要，叫做「主人」。', sentence: '小貓的主人每天幫牠梳毛。' },
      { id: 'h-播', combo: { layout: 'lr', parts: [['扌', 'm', '手'], ['番', 's', '']] }, char: '播', zhuyin: 'ㄅㄛ', radical: '手', strokes: 15, words: ['廣播', '播報', '主播'], say: '播，廣播的播', cloze: '廣＿', img: 'radio.png', options: ['播', '番', '翻', '潘'], clue: '這個字的左邊是提手旁，右邊是「番」。', explain: '答案是「播」；「翻」右邊是羽，「潘」左邊是三點水。', parts: ['扌', '番'], story: '左邊是提手旁，右邊的「番」念起來有點像「播」。古時候用手把種子撒出去，叫「播種」。把聲音傳到很遠的地方，叫做「廣播」。', sentence: '學校在廣播，請大家到操場集合。', build: { layout: 'lr', show: ['？', '番'], answer: '扌', options: ['扌', '氵', '口', '木'], clue: '想一想：把種子撒出去要用什麼？' } },
      { id: 'h-報', combo: { type: '會意字', pict: '左邊是「幸」，右邊像一隻手。' }, char: '報', zhuyin: 'ㄅㄠˋ', radical: '土', strokes: 12, words: ['報紙', '播報', '報告'], say: '報，報紙的報', cloze: '＿紙', img: 'newspaper.png', options: ['報', '服', '幸', '執'], clue: '這個字的左邊是「幸」，右邊和「服」的右邊一樣。', explain: '答案是「報」；「服」左邊是月，「幸」少了右邊。', parts: ['幸', '𠬝'], story: '左邊是「幸」，右邊像一隻手。把發生的事告訴大家，就是「報」。印著每天新聞的紙，叫做「報紙」。', sentence: '爺爺每天早上都看報紙。' },
      { id: 'h-力', combo: { type: '象形字', pict: '「力」像一隻彎起來用力的手臂。' }, char: '力', zhuyin: 'ㄌㄧˋ', radical: '力', strokes: 2, words: ['用力', '力氣', '努力'], say: '力，力氣的力', cloze: '＿氣', img: 'strong-kid.png', options: ['力', '刀', '九', '加'], clue: '這個字只有兩畫，像一隻彎起來的手臂。', explain: '答案是「力」；「刀」上面不出頭，「加」右邊多了口。', parts: ['力'], story: '「力」像一隻彎起來用力的手臂。把東西舉起來要用的勁，叫做「力氣」。', sentence: '哥哥的力氣好大，搬得動大箱子。' },
      { id: 'h-竟', combo: { layout: 'tb', type: '會意字', parts: [['音', 'm', '音樂'], ['儿', 'm', '人']] }, char: '竟', zhuyin: 'ㄐㄧㄥˋ', radical: '立', strokes: 11, words: ['竟然', '畢竟'], say: '竟，竟然的竟', cloze: '＿然', img: 'surprised-kid.png', options: ['竟', '意', '章', '音'], clue: '這個字的上面是「音」，下面是兩條彎彎的腳。', explain: '答案是「竟」；「意」下面是心，「章」下面是十。', parts: ['音', '儿'], story: '上面是「音」，下面是人的兩條腿。音樂奏完了，人才離開，表示「結束」。沒想到會這樣，叫做「竟然」。', sentence: '小貓竟然自己打開了櫃子。', build: { layout: 'tb', show: ['？', '儿'], answer: '音', options: ['音', '立', '日', '口'], clue: '想一想：上面的部件念「ㄧㄣ」，和唱歌、彈琴有關。' } },
      { id: 'h-巴', combo: { type: '象形字', pict: '「巴」像一條張開嘴的大蛇。' }, char: '巴', zhuyin: 'ㄅㄚ', radical: '己', strokes: 4, words: ['嘴巴', '尾巴', '下巴'], say: '巴，尾巴的巴', cloze: '尾＿', img: 'dog-tail.png', options: ['巴', '把', '爸', '色'], clue: '這個字只有四畫，像一條捲起來的蛇。', explain: '答案是「巴」；「把」左邊是提手旁，「爸」上面是父。', parts: ['巴'], story: '「巴」像一條張開嘴的大蛇。動物身體後面長長的，叫做「尾巴」。', sentence: '小狗開心的搖尾巴。' },
      { id: 'h-東', combo: { type: '會意字', pict: '太陽「日」從樹「木」的後面升起來。' }, char: '東', zhuyin: 'ㄉㄨㄥ', radical: '木', strokes: 8, words: ['東方', '東西', '問東問西'], say: '東，東方的東', cloze: '＿方', img: 'sunrise.png', options: ['東', '束', '果', '車'], clue: '這個字是「木」的中間有一個「日」。', explain: '答案是「東」；「束」中間是口，「果」上面是田。', parts: ['木', '日'], story: '太陽「日」從樹「木」的後面升起來，太陽出來的方向，就是「東方」。', sentence: '太陽從東方升起來。' },
      { id: 'h-西', combo: { type: '象形字', pict: '「西」像一個鳥巢，太陽下山時鳥兒回巢。' }, char: '西', zhuyin: 'ㄒㄧ', radical: '襾', strokes: 6, words: ['西瓜', '西方', '東西'], say: '西，西瓜的西', cloze: '＿瓜', img: 'watermelon.png', options: ['西', '四', '酉', '百'], clue: '這個字的上面是一橫，下面像一個方框，裡面有兩條彎線。', explain: '答案是「西」；「四」上面沒有一橫，「酉」裡面多一橫。', parts: ['西'], story: '「西」像一個鳥巢。太陽往西邊下山時，鳥兒都回巢了，所以這個方向叫「西」。', sentence: '夏天吃西瓜好涼快。' },
      { id: 'h-底', combo: { type: '形聲字', pict: '外面的「广」像屋子，裡面的「氐」念起來像「底」。' }, char: '底', zhuyin: 'ㄉㄧˇ', radical: '广', strokes: 8, words: ['海底', '到底', '底下'], say: '底，海底的底', cloze: '海＿', img: 'sea-floor.png', options: ['底', '低', '抵', '庭'], clue: '這個字的外面是「广」，裡面是「氐」。', explain: '答案是「底」；「低」左邊是單人旁，「抵」左邊是提手旁。', parts: ['广', '氐'], story: '外面的「广」像屋子，裡面的「氐」念起來像「底」。最下面的地方，就是「底」。海最深的地方，叫「海底」。', sentence: '海底住著很多魚和珊瑚。' }
    ],
    vocab: [
      { id: 'v-奇怪', word: '奇怪', meaning: '和平常不一樣，讓人想不通。', example: '這隻貓好＿＿，喜歡泡在水裡。', img: 'strange-door.png', options: ['奇怪', '用力', '仔細', '好奇'] },
      { id: 'v-怪事', word: '怪事', meaning: '很少見、說不出原因的事情。', example: '我的襪子一直不見一隻，真是＿＿。', img: 'lost-sock.png', options: ['怪事', '主播', '耳朵', '新聞'] },
      { id: 'v-立刻', word: '立刻', meaning: '馬上，一點都不等。', example: '聽到媽媽叫我，我＿＿跑過去。', img: 'run-to-mom.png', options: ['立刻', '奇怪', '仔細', '到底'] },
      { id: 'v-閒得發慌', word: '閒得發慌', meaning: '沒事可以做，心裡很無聊、很不安。', example: '下雨天不能出去，弟弟在家＿＿＿＿。', img: 'bored-kid.png', options: ['閒得發慌', '問東問西', '闖來闖去', '異口同聲'] },
      { id: 'v-注意', word: '注意', meaning: '把心思放在一件事上。', example: '過馬路要＿＿來往的車子。', img: 'crosswalk.png', options: ['注意', '奇怪', '主播', '妖怪'] },
      { id: 'v-仔細', word: '仔細', meaning: '很小心，一點一點看清楚。', example: '寫完考卷，要＿＿檢查一遍。', img: 'magnifier.png', options: ['仔細', '奇怪', '用力', '好奇'] },
      { id: 'v-主播', word: '主播', meaning: '在電視上報新聞的人。', example: '電視上的＿＿正在說今天的天氣。', img: 'tv-anchor.png', options: ['主播', '妖怪', '耳朵', '怪事'] },
      { id: 'v-新聞', word: '新聞', meaning: '最近發生的、大家想知道的事。', example: '爸爸每天晚上都看電視＿＿。', img: 'tv-news.png', options: ['新聞', '妖怪', '耳朵', '注意'] },
      { id: 'v-用力', word: '用力', meaning: '使出很多力氣。', example: '拔河的時候，大家一起＿＿拉。', img: 'tug-of-war.png', options: ['用力', '注意', '到底', '好奇'] },
      { id: 'v-擠', word: '擠', meaning: '很多人或東西在小小的地方推來推去。', example: '電梯裡好多人，我們＿在一起。', img: 'crowded-elevator.png', options: ['擠', '閃', '闖', '刻'] },
      { id: 'v-竟然', word: '竟然', meaning: '沒想到會這樣。', example: '我以為會下雨，＿＿出大太陽了。', img: 'surprised-kid.png', options: ['竟然', '立刻', '仔細', '用力'] },
      { id: 'v-好奇', word: '好奇', meaning: '對沒看過、不知道的事很想知道。', example: '弟弟很＿＿，什麼東西都想摸一摸。', img: 'curious-kid.png', options: ['好奇', '用力', '主播', '立刻'] },
      { id: 'v-問東問西', word: '問東問西', meaning: '一直問很多問題。', example: '妹妹第一次去動物園，一路上＿＿＿＿。', img: 'ask-many.png', options: ['問東問西', '閒得發慌', '闖來闖去', '異口同聲'] },
      { id: 'v-妖怪', word: '妖怪', meaning: '故事裡很奇特、會變法術的怪物。', example: '故事書裡的＿＿長著三隻眼睛。', img: 'friendly-monster.png', options: ['妖怪', '主播', '新聞', '耳朵'] }
    ],
    charwords: [
      { id: 'cw-怪', char: '怪', img: 'friendly-monster.png', word: '妖怪', charMeaning: '奇特、和平常不一樣。', meaning: '故事裡會變法術的怪物。', example: '故事裡的＿＿住在山洞裡。', options: ['妖怪', '大門', '扇子', '休閒'] },
      { id: 'cw-門', char: '門', img: 'open-door.png', word: '大門', charMeaning: '可以開關的出入口。', meaning: '房子或學校最大的出入口。', example: '學校的＿＿早上七點開。', options: ['大門', '扇子', '馬上', '耳機'] },
      { id: 'cw-扇', char: '扇', img: 'hand-fan.png', word: '扇子', charMeaning: '搧風的東西；也用來算門窗。', meaning: '用手拿著搧風的工具。', example: '奶奶拿著＿＿搧風。', options: ['扇子', '大門', '耳機', '主角'] },
      { id: 'cw-立', char: '立', img: 'stand-straight.png', word: '站立', charMeaning: '站著。', meaning: '直直的站著。', example: '小鹿一出生，很快就能＿＿。', options: ['站立', '扇子', '下巴', '西瓜'] },
      { id: 'cw-刻', char: '刻', img: 'run-to-mom.png', word: '立刻', charMeaning: '用刀挖；也指很短的時間。', meaning: '馬上，一點都不等。', example: '鈴聲響了，大家＿＿排好隊。', options: ['立刻', '站立', '東方', '努力'] },
      { id: 'cw-閒', char: '閒', img: 'relax-hammock.png', word: '休閒', charMeaning: '有空、沒事做。', meaning: '放下工作，輕鬆的休息、玩。', example: '假日我們全家去海邊＿＿。', options: ['休閒', '站立', '報紙', '努力'] },
      { id: 'cw-馬', char: '馬', img: 'run-to-mom.png', word: '馬上', charMeaning: '一種會跑的動物；也有很快的意思。', meaning: '很快，不等一下。', example: '你先等我，我＿＿就來。', options: ['馬上', '主角', '海底', '下巴'] },
      { id: 'cw-闖', char: '闖', img: 'obstacle-course.png', word: '闖關', charMeaning: '用力往前衝。', meaning: '一關一關的往前挑戰。', example: '園遊會有＿＿遊戲。', options: ['闖關', '耳機', '西瓜', '海底'] },
      { id: 'cw-耳', char: '耳', img: 'headphones.png', word: '耳機', charMeaning: '聽聲音的地方。', meaning: '戴在耳朵上聽聲音的東西。', example: '哥哥戴著＿＿聽音樂。', options: ['耳機', '闖關', '報紙', '東方'] },
      { id: 'cw-主', char: '主', img: 'play-stage.png', word: '主角', charMeaning: '最重要的。', meaning: '故事或表演裡最重要的人。', example: '我在話劇裡演＿＿。', options: ['主角', '耳機', '下巴', '扇子'] },
      { id: 'cw-播', char: '播', img: 'tv-news.png', word: '播報', charMeaning: '把聲音、消息傳出去。', meaning: '把消息說給大家聽。', example: '電視正在＿＿明天的天氣。', options: ['播報', '馬上', '站立', '休閒'] },
      { id: 'cw-報', char: '報', img: 'newspaper.png', word: '報紙', charMeaning: '告訴大家消息。', meaning: '印著每天新聞的紙。', example: '爸爸邊吃早餐邊看＿＿。', options: ['報紙', '扇子', '主角', '西瓜'] },
      { id: 'cw-力', char: '力', img: 'study-hard.png', word: '努力', charMeaning: '力氣。', meaning: '用盡心力，認真去做。', example: '他每天＿＿練習跑步。', options: ['努力', '馬上', '休閒', '闖關'] },
      { id: 'cw-竟', char: '竟', img: 'surprised-kid.png', word: '竟然', charMeaning: '沒想到。', meaning: '結果和想的不一樣，讓人驚訝。', example: '這麼小的狗，＿＿跳得這麼高。', options: ['竟然', '努力', '馬上', '站立'] },
      { id: 'cw-巴', char: '巴', img: 'chin.png', word: '下巴', charMeaning: '用在嘴巴、尾巴這些語詞。', meaning: '臉最下面、嘴巴下方的地方。', example: '爺爺的＿＿有白白的鬍子。', options: ['下巴', '主角', '耳機', '海底'] },
      { id: 'cw-東', char: '東', img: 'sunrise.png', word: '東方', charMeaning: '太陽升起的方向。', meaning: '太陽出來的那一邊。', example: '早上的太陽在＿＿。', options: ['東方', '下巴', '扇子', '報紙'] },
      { id: 'cw-西', char: '西', img: 'watermelon.png', word: '西瓜', charMeaning: '太陽下山的方向。', meaning: '綠皮紅肉、水分很多的大水果。', example: '夏天吃＿＿好涼快。', options: ['西瓜', '東方', '主角', '耳機'] },
      { id: 'cw-底', char: '底', img: 'sea-floor.png', word: '海底', charMeaning: '最下面的地方。', meaning: '大海最下面、最深的地方。', example: '潛水的人看到＿＿有好多魚。', options: ['海底', '西瓜', '大門', '休閒'] }
    ],
    fix: [
      { id: 'fx-怪', char: '怪', wrong: '快', sentence: '這個故事好奇怪。', options: ['怪', '快', '性'], clue: '和平常不一樣，右邊下面是「土」。', explain: '要改成「怪」。奇怪的怪右邊是又和土；「快」是很快的快。' },
      { id: 'fx-門', char: '門', wrong: '鬥', sentence: '我輕輕的把門關上。', options: ['門', '鬥', '問'], clue: '可以開關的出入口，像兩片木板。', explain: '要改成「門」。「鬥」是打鬥的鬥，裡面不一樣。' },
      { id: 'fx-扇', char: '扇', wrong: '房', sentence: '奶奶用扇子搧風。', options: ['扇', '房', '肩'], clue: '搧風的東西，下面要是「羽」。', explain: '要改成「扇」。扇子的扇下面是羽；「房」下面是方，是房子的房。' },
      { id: 'fx-立', char: '立', wrong: '位', sentence: '升旗時要立正站好。', options: ['立', '位', '拉'], clue: '站得直直的，左邊不要有人。', explain: '要改成「立」。立正的立左邊沒有人；「位」是座位的位。' },
      { id: 'fx-刻', char: '刻', wrong: '該', sentence: '聽到哨音，大家立刻停下來。', options: ['刻', '該', '孩'], clue: '馬上的意思，右邊要是立刀旁。', explain: '要改成「刻」。立刻的刻右邊是刂；「該」左邊是言，是應該的該。' },
      { id: 'fx-閒', char: '閒', wrong: '間', sentence: '週末我很空閒，可以去公園玩。', options: ['閒', '間', '閃'], clue: '有空、沒事做，門裡面是月。', explain: '要改成「閒」。空閒的閒門裡是月；「間」門裡是日，是時間的間。' },
      { id: 'fx-馬', char: '馬', wrong: '鳥', sentence: '叔叔在草原上騎馬。', options: ['馬', '鳥', '烏'], clue: '會跑的大動物，上面不要多一撇。', explain: '要改成「馬」。「鳥」上面多一撇，是小鳥的鳥。' },
      { id: 'fx-耳', char: '耳', wrong: '目', sentence: '小兔子豎起耳朵聽聲音。', options: ['耳', '目', '且'], clue: '聽聲音的地方，右邊一豎長長的。', explain: '要改成「耳」。耳朵的耳右邊一豎比較長；「目」是眼睛。' },
      { id: 'fx-播', char: '播', wrong: '翻', sentence: '學校正在廣播重要的消息。', options: ['播', '翻', '番'], clue: '把聲音傳出去，左邊要是提手旁。', explain: '要改成「播」。廣播的播左邊是提手旁；「翻」右邊是羽，是翻書的翻。' },
      { id: 'fx-竟', char: '竟', wrong: '意', sentence: '小狗竟然會自己開門。', options: ['竟', '意', '章'], clue: '沒想到的意思，下面是兩條腳，不是心。', explain: '要改成「竟」。竟然的竟下面是儿；「意」下面是心，是意思的意。' },
      { id: 'fx-東', char: '東', wrong: '束', sentence: '太陽從東邊升起來。', options: ['東', '束', '果'], clue: '太陽升起的方向，木的中間是「日」。', explain: '要改成「東」。東邊的東中間是日；「束」中間是口，是一束花的束。' },
      { id: 'fx-底', char: '底', wrong: '低', sentence: '我的球滾到床底下了。', options: ['底', '低', '抵'], clue: '最下面的地方，外面要是「广」。', explain: '要改成「底」。底下的底外面是广；「低」左邊是單人旁，是高低的低。' }
    ],
    similar: [
      { id: 's1', meaning: '「開＿」是把出入口打開。', sentence: '有人來了，我去開＿。', frame: '開＿', options: ['門', '鬥'], answer: '門', clue: '提示：像兩片打開的木板。', explain: '答案是「門」；「鬥」是打鬥的鬥。' },
      { id: 's2', meaning: '「打＿」是兩邊打來打去。', sentence: '兩隻公雞在院子裡打＿。', frame: '打＿', options: ['鬥', '門'], answer: '鬥', clue: '提示：裡面的部件不一樣，像兩個人在打架。', explain: '答案是「鬥」；「門」是大門的門。' },
      { id: 's3', meaning: '「立＿」是馬上。', sentence: '聽到鈴聲，大家立＿回到教室。', frame: '立＿', options: ['刻', '該'], answer: '刻', clue: '提示：右邊是立刀旁。', explain: '答案是「刻」；「該」是應該的該，左邊是言。' },
      { id: 's4', meaning: '「應＿」是本來就要這樣做。', sentence: '吃飯前應＿先洗手。', frame: '應＿', options: ['該', '刻'], answer: '該', clue: '提示：左邊是言字旁。', explain: '答案是「該」；「刻」是立刻的刻。' },
      { id: 's5', meaning: '「＿方」是太陽升起的那一邊。', sentence: '早上，太陽在＿方。', frame: '＿方', options: ['東', '束'], answer: '東', clue: '提示：「木」的中間是「日」。', explain: '答案是「東」；「束」中間是口。' },
      { id: 's6', meaning: '「一＿花」是綁成一把的花。', sentence: '我送媽媽一＿花。', frame: '一＿', options: ['束', '東'], answer: '束', clue: '提示：「木」的中間是「口」。', explain: '答案是「束」；「東」是東方的東。' },
      { id: 's7', meaning: '「海＿」是大海最深的地方。', sentence: '海＿有好多漂亮的魚。', frame: '海＿', options: ['底', '低'], answer: '底', clue: '提示：外面是「广」。', explain: '答案是「底」；「低」是高低的低，左邊是單人旁。' },
      { id: 's8', meaning: '「＿頭」是把頭往下。', sentence: '弟弟做錯事，難過的＿頭。', frame: '＿頭', options: ['低', '底'], answer: '低', clue: '提示：左邊是單人旁。', explain: '答案是「低」；「底」是海底的底。' }
    ],
    listen: [
      { id: 'l1', text: '在電視上報新聞的人。', answer: 0, options: [{ text: '主播', img: 'tv-anchor.png' }, { text: '妖怪', img: 'friendly-monster.png' }, { text: '扇子', img: 'hand-fan.png' }, { text: '斑馬', img: 'zebra.png' }] },
      { id: 'l2', text: '沒事可以做，心裡覺得好無聊。', answer: 0, options: [{ text: '閒得發慌', img: 'bored-kid.png' }, { text: '問東問西', img: 'ask-many.png' }, { text: '用力', img: 'tug-of-war.png' }, { text: '好奇', img: 'curious-kid.png' }] },
      { id: 'l3', text: '電梯裡好多人，大家推來推去。', answer: 0, options: [{ text: '擠', img: 'crowded-elevator.png' }, { text: '閃', img: 'lightning.png' }, { text: '用力', img: 'tug-of-war.png' }, { text: '仔細', img: 'magnifier.png' }] },
      { id: 'l4', text: '拔河的時候，大家使出好多力氣。', answer: 0, options: [{ text: '用力', img: 'tug-of-war.png' }, { text: '好奇', img: 'curious-kid.png' }, { text: '主播', img: 'tv-anchor.png' }, { text: '海底', img: 'sea-floor.png' }] },
      { id: 'l5', text: '拿著放大鏡，一點一點看清楚。', answer: 0, options: [{ text: '仔細', img: 'magnifier.png' }, { text: '奇怪', img: 'strange-door.png' }, { text: '主播', img: 'tv-anchor.png' }, { text: '西瓜', img: 'watermelon.png' }] },
      { id: 'l6', text: '一直問很多問題，什麼都想知道。', answer: 0, options: [{ text: '問東問西', img: 'ask-many.png' }, { text: '閒得發慌', img: 'bored-kid.png' }, { text: '扇子', img: 'hand-fan.png' }, { text: '報紙', img: 'newspaper.png' }] },
      { id: 'l7', text: '太陽從這個方向升起來。', answer: 0, options: [{ text: '東方', img: 'sunrise.png' }, { text: '海底', img: 'sea-floor.png' }, { text: '大門', img: 'open-door.png' }, { text: '尾巴', img: 'dog-tail.png' }] },
      { id: 'l8', text: '天氣好熱，打開它就有涼涼的風。', answer: 0, options: [{ text: '電風扇', img: 'fan.png' }, { text: '報紙', img: 'newspaper.png' }, { text: '耳機', img: 'headphones.png' }, { text: '大門', img: 'open-door.png' }] }
    ],
    phrase: {
      pickName: '看圖選一選',
      pickSay: '看圖，選出最適合的短語，說說看圖裡發生了什麼事。',
      intro: { example: '繞來繞去繞不出來', img: 'pr-car-loop.png', parts: [{ text: '繞', role: '動作' }, { text: '來' }, { text: '繞', role: '動作' }, { text: '去' }, { text: '繞', role: '動作' }, { text: '不出來' }],
        explain: '三個地方放同一個動作，中間加上「來」、「去」，最後說「不出來」。表示一直做這個動作，還是出不來。' },
      pick: [
        { id: 'ph1', img: 'pr-maze.png', before: '', join: '', noun: '。', ask: '圖裡的人怎麼了', look: '再看看圖片，小男孩在迷宮裡，他用什麼方法前進？', options: ['走來走去走不出來', '飛來飛去飛不出來', '爬來爬去爬不出來', '游來游去游不出來'], clue: '提示：他用兩條腿在迷宮裡繞，還是沒找到路口。', explain: '答案是「走來走去走不出來」：他在迷宮裡一直走，還是出不去。' },
        { id: 'ph2', img: 'pr-bee-jar.png', before: '', join: '', noun: '。', ask: '圖裡的小蜜蜂怎麼了', look: '再看看圖片，小蜜蜂在玻璃瓶裡，牠用什麼方法動？', options: ['飛來飛去飛不出來', '走來走去走不出來', '爬來爬去爬不出來', '游來游去游不出來'], clue: '提示：牠拍著翅膀在瓶子裡轉圈圈，一直撞到瓶子。', explain: '答案是「飛來飛去飛不出來」：小蜜蜂在瓶子裡一直飛，還是出不去。' },
        { id: 'ph3', img: 'pr-ant-bowl.png', before: '', join: '', noun: '。', ask: '圖裡的小螞蟻怎麼了', look: '再看看圖片，小螞蟻掉進滑滑的碗裡，牠用什麼方法動？', options: ['爬來爬去爬不出來', '飛來飛去飛不出來', '走來走去走不出來', '游來游去游不出來'], clue: '提示：牠用六隻腳往上，一直滑回碗底。', explain: '答案是「爬來爬去爬不出來」：小螞蟻在碗裡一直爬，還是出不去。' },
        { id: 'ph4', img: 'pr-fish-net.png', before: '', join: '', noun: '。', ask: '圖裡的小魚怎麼了', look: '再看看圖片，小魚被網子圍住了，牠用什麼方法動？', options: ['游來游去游不出來', '飛來飛去飛不出來', '爬來爬去爬不出來', '走來走去走不出來'], clue: '提示：牠在水裡擺著尾巴繞圈圈，網子把牠圍住了。', explain: '答案是「游來游去游不出來」：小魚在網子裡一直游，還是出不去。' }
      ],
      fill: [
        { id: 'pf1', img: 'pr-maze.png', parts: ['走', '來', '走', '去', '走', '不出來'] },
        { id: 'pf2', img: 'pr-bee-jar.png', parts: ['飛', '來', '飛', '去', '飛', '不出來'] },
        { id: 'pf3', img: 'pr-ant-bowl.png', parts: ['爬', '來', '爬', '去', '爬', '不出來'] },
        { id: 'pf4', img: 'pr-fish-net.png', parts: ['游', '來', '游', '去', '游', '不出來'] }
      ],
      say: [],
      words: [{ word: '竟然', meaning: '沒想到會這樣。', img: 'surprised-kid.png' }],
      choose: [
        { id: 'pw1', word: '竟然', options: ['我以為弟弟會哭，他竟然笑了。', '我每天竟然七點起床。'], clue: '提示：想一想，「竟然」是每天都一樣的事，還是沒想到的事？', explain: '第一句用得對：以為會哭，沒想到笑了。每天七點起床是平常的事，不用「竟然」。' }
      ],
      make: [
        { id: 'pm1', word: '竟然', clue: '提示：想想看，有沒有一件事，結果和你想的不一樣，讓你很驚訝？', model: '我以為考卷很難，竟然全部都會寫。' }
      ]
    },
    pattern: [
      { key: 'yilike', id: 'yl', title: '一……立刻……', img: 'yilike.png', meaning: '先用「一」說做了什麼事，再用「立刻」說馬上發生的結果。',
        examples: ['小狗一看到我，立刻跑過來。'],
        match: [
          { id: 'pt-yl-m1', img: 'pt-recess.png', front: '下課鈴一響，', options: ['同學立刻衝出教室。', '同學立刻變成小鳥。', '同學立刻長出鬍子。'], clue: '提示：看看圖片，下課了，同學往哪裡跑？', explain: '答案是「同學立刻衝出教室」：鈴聲一響，馬上去玩。' },
          { id: 'pt-yl-m2', img: 'pt-cockroach.png', front: '妹妹一看到蟑螂，', options: ['立刻嚇得大叫。', '立刻把牠吃掉。', '立刻去游泳。'], clue: '提示：看看圖片，妹妹的表情怎麼樣？', explain: '答案是「立刻嚇得大叫」：一看到蟑螂，馬上嚇到。' },
          { id: 'pt-yl-m3', img: 'pt-fridge.png', front: '弟弟一回到家，', options: ['立刻打開冰箱。', '立刻飛上天空。', '立刻變成大人。'], clue: '提示：看看圖片，弟弟站在廚房的哪裡？', explain: '答案是「立刻打開冰箱」：一回家，馬上找東西吃。' }
        ],
        conj: [
          { id: 'pt-yl-c1', full: '弟弟一聽到音樂，立刻跳起舞來。', img: 'pt-dance.png', sentence: '弟弟＿聽到音樂，＿跳起舞來。', options: ['一……立刻……', '只要……就……', '……可是……'], clue: '提示：聽到音樂，馬上就跳舞。數數看有幾個空格。', explain: '答案是「一……立刻……」：弟弟一聽到音樂，立刻跳起舞來。' },
          { id: 'pt-yl-c2', full: '小貓一聽到開罐頭的聲音，立刻跑過來。', img: 'pt-cat-can.png', sentence: '小貓＿聽到開罐頭的聲音，＿跑過來。', options: ['一……立刻……', '只要……就……', '……可是……'], clue: '提示：聽到聲音，馬上跑過來。數數看有幾個空格。', explain: '答案是「一……立刻……」：小貓一聽到開罐頭的聲音，立刻跑過來。' },
          { id: 'pt-yl-c3', full: '天空一打雷，小狗立刻躲到床下。', img: 'pt-dog-hide.png', sentence: '天空＿打雷，小狗＿躲到床下。', options: ['一……立刻……', '只要……就……', '……可是……'], clue: '提示：打雷了，小狗馬上躲起來。數數看有幾個空格。', explain: '答案是「一……立刻……」：天空一打雷，小狗立刻躲到床下。' }
        ],
        half: [
          { id: 'pt-yl-h1', front: '我一放學，', clue: '提示：放學以後，你馬上會做什麼事？記得要說「立刻」。', model: '立刻跑去找好朋友玩。' },
          { id: 'pt-yl-h2', front: '媽媽一打開電視，', clue: '提示：電視打開以後，馬上發生了什麼事？記得要說「立刻」。', model: '弟弟立刻跑過來看。' }
        ],
        whole: [
          { id: 'pt-yl-w1', clue: '提示：先用「一」說做了什麼，再用「立刻」說馬上發生的事。', model: '我一說要吃冰，妹妹立刻舉手說她也要。' }
        ] }
    ]
  };
  if (typeof module === 'object' && module.exports) module.exports = d;
  else { root.H3A_WORDS = root.H3A_WORDS || {}; root.H3A_WORDS.L11 = d; }
})(this);
