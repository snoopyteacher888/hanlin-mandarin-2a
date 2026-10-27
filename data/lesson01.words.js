/* 第 1 課字詞練習（公開、不加密）。句子和解釋都是 Claude 自己寫的，沒有課本原文。
   生字、語詞：options 的第一個是正確答案（作答時會打亂）。二年級：不放成語、修辭。 */
(function (root) {
  var d = {
    /* 理解提問的分類（照課本「閱讀理解提問」）：extract 提取訊息、infer 推論訊息、interpret 詮釋整合、evaluate 比較評估。只放題號，不放課文 */
    quizLevels: { qa: 'extract', qb: 'extract', qc: 'extract', qd: 'extract', qe: 'extract', qf: 'infer', qg: 'interpret', qh: 'interpret', k1: 'evaluate', k2: 'evaluate' },
    quizHelp: {
      qg: { think: ['害怕時是颳風，生氣時是閃電、打雷，難過時是下雨。這些是不是都和天空有關？', '颳風、打雷、下雨、出太陽，我們平常都叫它什麼？'],
        why: '作者用颳風、閃電、打雷、下雨、陽光來說心情，這些都是天氣。所以作者是用天氣來說心情，不是用動物、食物或顏色。' },
      qh: { think: ['下過大雨以後，天空會變成什麼樣子？會看到什麼漂亮的東西？', '心情不好的時候過去了，接下來心情會變成怎麼樣？'],
        why: '下完雨，天空放晴，還會出現彩虹。意思是：心情有好也有不好，不好的心情過去以後，又會變好、變開心。' }
    },
    talkChoices: {
      k1: { good: ['我拿到生日禮物的時候很開心，心裡好像出太陽。', '我和好朋友一起玩的時候很開心，心裡暖暖的。'],
        bad: ['我很開心，因為今天是星期三。', '我開心的時候，心裡下起大雨。'],
        why: '題目要說什麼時候開心，還有開心時心裡像什麼天氣。收到禮物、和朋友玩都會開心，心裡像出太陽。「今天是星期三」沒有說為什麼開心；下大雨是難過的樣子，不是開心。' },
      k2: { good: ['我難過的時候，可以找媽媽說說話。', '我難過的時候，可以抱抱我的小熊，深呼吸。'],
        bad: ['我難過的時候，就去打別人。', '我難過的時候，把玩具全部丟掉。'],
        why: '題目問的是讓心情變好的方法。找人說說話、抱抱小熊、深呼吸，都能讓自己好一點。打別人、亂丟東西會讓別人和自己更不開心，不是好方法。' }
    },
    hanzi: [
      { id: 'h-布', combo: { type: '會意字', pict: '上面像一隻手，下面的「巾」是一塊布。用手拿著一塊布，就是「布」。' }, char: '布', zhuyin: 'ㄅㄨˋ', radical: '巾', strokes: 5, words: ['布偶', '密布', '桌布'], say: '布，布偶的布', cloze: '＿偶', img: 'teddy.png', options: ['布', '市', '希', '巾'], clue: '這個字的下面是「巾」，可以用來做娃娃。', explain: '答案是「布」，布偶是用布做的娃娃；「市」是市場的市，「希」是希望的希。', parts: ['巾'], story: '上面像一隻手，下面的「巾」是一塊布。用手拿著布，就是「布」。用布縫成的娃娃，叫做「布偶」。', sentence: '妹妹抱著她的小熊布偶睡覺。' },
      { id: 'h-盆', combo: { layout: 'tb', parts: [['分', 's', ''], ['皿', 'm', '碗盤']] }, char: '盆', zhuyin: 'ㄆㄣˊ', radical: '皿', strokes: 9, words: ['花盆', '臉盆', '傾盆大雨'], say: '盆，花盆的盆', cloze: '臉＿', img: 'basin.png', options: ['盆', '分', '盤', '益'], clue: '這個字的上面是「分」，下面是裝東西的「皿」。', explain: '答案是「盆」，上面是「分」；「盤」是盤子的盤，「益」上面不一樣。', parts: ['分', '皿'], story: '上面的「分」念起來像「盆」，下面的「皿」是碗盤。可以裝水、種花的大碗，就是「盆」。', sentence: '奶奶在花盆裡種了一棵小番茄。', build: { layout: 'tb', show: ['分', '？'], answer: '皿', options: ['皿', '心', '貝', '木'], clue: '想一想：碗、盤子這種可以裝東西的器具，是哪一個部件？' } },
      { id: 'h-密', combo: { layout: 'tb', parts: [['宓', 's', ''], ['山', 'm', '山']] }, char: '密', zhuyin: 'ㄇㄧˋ', radical: '宀', strokes: 11, words: ['祕密', '密碼', '烏雲密布'], say: '密，祕密的密', cloze: '＿碼', img: 'lock-code.png', options: ['密', '蜜', '必', '您'], clue: '這個字的上面是寶蓋頭，最下面是「山」。', explain: '答案是「密」，最下面是「山」；「蜜」是蜂蜜的蜜，下面是「虫」。', parts: ['宓', '山'], story: '上面的「宓」念起來像「密」，下面是「山」。山裡的樹長得又多又擠，就是「密」。不讓別人知道的事，叫做「祕密」。', sentence: '我和好朋友有一個小祕密。' },
      { id: 'h-滿', combo: { type: '形聲字', pict: '左邊是三點水，表示和水有關。水裝到杯口，快要流出來了，就是「滿」。' }, char: '滿', zhuyin: 'ㄇㄢˇ', radical: '水', strokes: 14, words: ['充滿', '滿意', '裝滿'], say: '滿，滿意的滿', cloze: '＿意', img: 'thumbs-up.png', options: ['滿', '瞞', '蒲', '漏'], clue: '這個字的左邊是三點水，水裝到快要流出來。', explain: '答案是「滿」，滿意就是覺得很好；「漏」是漏水的漏，「瞞」左邊是目。', parts: ['氵'], story: '左邊是三點水，表示和水有關。水一直倒，倒到杯子的最上面，就是「滿」。', sentence: '媽媽把水壺裝滿了水。' },
      { id: 'h-放', combo: { layout: 'lr', parts: [['方', 's', ''], ['攵', 'm', '手拿東西']] }, char: '放', zhuyin: 'ㄈㄤˋ', radical: '攴', strokes: 8, words: ['放學', '放晴', '放假'], say: '放，放學的放', cloze: '＿學', img: 'after-school.png', options: ['放', '方', '房', '旅'], clue: '這個字的左邊是「方」，右邊是「反文」。', explain: '答案是「放」，左邊是「方」，右邊是反文；「方」少了右邊，「房」是房間的房。', parts: ['方', '攵'], story: '左邊的「方」念起來像「放」，右邊的「攵」像一隻手拿著東西。手一鬆，把東西放下來，就是「放」。', sentence: '放學了，我們排隊走出校門。', build: { layout: 'lr', show: ['方', '？'], answer: '攵', options: ['攵', '力', '又', '口'], clue: '想一想：右邊是表示用手做動作的「反文」。' } },
      { id: 'h-躲', combo: { layout: 'lr', parts: [['身', 'm', '身體'], ['朵', 's', '']] }, char: '躲', zhuyin: 'ㄉㄨㄛˇ', radical: '身', strokes: 13, words: ['躲起來', '躲雨', '躲貓貓'], say: '躲，躲雨的躲', cloze: '＿雨', img: 'shelter-rain.png', options: ['躲', '朵', '剁', '射'], clue: '這個字的左邊是「身」，右邊是一朵花的「朵」。', explain: '答案是「躲」，把身體藏起來；「朵」是一朵花的朵，「射」右邊是寸。', parts: ['身', '朵'], story: '左邊是「身」，表示身體；右邊的「朵」念起來像「躲」。把身體藏起來，不讓別人看到，就是「躲」。', sentence: '下大雨了，我們躲在屋簷下。', build: { layout: 'lr', show: ['？', '朵'], answer: '身', options: ['身', '足', '木', '口'], clue: '想一想：要把整個人藏起來，左邊是表示人體的哪一個字？' } },
      { id: 'h-電', combo: { layout: 'tb', parts: [['雨', 'm', '下雨天'], ['申', 'm', '閃電的樣子']] }, char: '電', zhuyin: 'ㄉㄧㄢˋ', radical: '雨', strokes: 13, words: ['閃電', '電燈', '電視'], say: '電，電燈的電', cloze: '＿燈', img: 'lamp.png', options: ['電', '雷', '雲', '需'], clue: '這個字的上面是雨字頭，下面像一道彎彎的閃光。', explain: '答案是「電」，下面像閃電的樣子；「雷」下面是田，「雲」下面是云。', parts: ['雨', '申'], story: '上面是「雨」，表示下雨天；下面像天空中一道彎彎的閃光。下雨天天空亮一下，就是「閃電」。', sentence: '天黑了，爸爸打開電燈。', build: { layout: 'tb', show: ['雨', '？'], answer: '申', options: ['申', '田', '由', '甲'], clue: '想一想：下面的部件，中間一豎穿出上下兩邊，像一道閃光。' } },
      { id: 'h-難', combo: { type: '形聲字', pict: '右邊的「隹」是一隻短尾巴的鳥，左邊念起來像「難」。' }, char: '難', zhuyin: 'ㄋㄢˊ', radical: '隹', strokes: 19, words: ['難過', '困難', '很難'], say: '難，難過的難', cloze: '＿過', img: 'sad-kid.png', options: ['難', '灘', '歡', '雖'], clue: '這個字的右邊是「隹」，左邊沒有三點水。', explain: '答案是「難」，難過就是傷心；「灘」多了三點水，「歡」是歡喜的歡。', parts: ['隹'], story: '右邊的「隹」是一隻短尾巴的鳥。心裡不開心、想哭的時候，就是「難過」。', sentence: '小狗生病了，我很難過。' },
      { id: 'h-冷', combo: { layout: 'lr', parts: [['冫', 'm', '冰'], ['令', 's', '']] }, char: '冷', zhuyin: 'ㄌㄥˇ', radical: '冫', strokes: 7, words: ['冷冷的', '冷氣', '冷水'], say: '冷，冷氣的冷', cloze: '＿氣', img: 'air-con.png', options: ['冷', '令', '零', '鈴'], clue: '這個字的左邊是兩點的冰字旁，右邊是「令」。', explain: '答案是「冷」，左邊是兩點；「令」少了左邊，「零」上面是雨。', parts: ['冫', '令'], story: '左邊的兩點是「冰」，右邊的「令」念起來像「冷」。像冰一樣涼涼的，就是「冷」。', sentence: '冬天的早上好冷，我穿上厚外套。', build: { layout: 'lr', show: ['？', '令'], answer: '冫', options: ['冫', '氵', '亻', '口'], clue: '想一想：結冰的時候很冷，左邊只有兩點。' } },
      { id: 'h-颳', combo: { type: '形聲字', pict: '右邊是「風」，表示和風有關。風吹得很大，就是「颳風」。' }, char: '颳', zhuyin: 'ㄍㄨㄚ', radical: '風', strokes: 15, words: ['颳風', '颳大風'], say: '颳，颳風的颳', cloze: '＿大風', img: 'windy.png', options: ['颳', '刮', '話', '括'], clue: '這個字的右邊是「風」。', explain: '答案是「颳」，右邊是風；「刮」右邊是立刀，「話」左邊是言。', parts: ['舌', '風'], story: '右邊是「風」，表示和風有關。大風呼呼的吹過來，就是「颳風」。', sentence: '外面颳起大風，樹葉都飛起來了。' },
      { id: 'h-候', combo: { type: '形聲字', pict: '左邊是單人旁，表示和人有關；中間有一小豎，右邊念起來像「候」。' }, char: '候', zhuyin: 'ㄏㄡˋ', radical: '人', strokes: 10, words: ['時候', '問候', '等候'], say: '候，時候的候', cloze: '時＿', img: 'clock.png', options: ['候', '侯', '喉', '猴'], clue: '這個字的左邊是單人旁，中間還有一小豎。', explain: '答案是「候」，中間有一小豎；「侯」少了這一豎，「猴」是猴子的猴。', parts: ['亻', '丨', '侯'], story: '左邊是單人旁，中間有一小豎，右邊的「侯」念起來像「候」。「時候」就是做一件事的那一段時間。', sentence: '我小的時候很怕打雷。' },
      { id: 'h-虹', combo: { layout: 'lr', parts: [['虫', 'm', '古人以為彩虹是天上的大蟲'], ['工', 's', '']] }, char: '虹', zhuyin: 'ㄏㄨㄥˊ', radical: '虫', strokes: 9, words: ['彩虹'], say: '虹，彩虹的虹', cloze: '彩＿', img: 'rainbow.png', options: ['虹', '紅', '江', '蟲'], clue: '這個字的左邊是「虫」，右邊是「工」。', explain: '答案是「虹」，左邊是虫；「紅」是紅色的紅，左邊是糸。', parts: ['虫', '工'], story: '很久以前的人以為，彩虹是天上一條彎彎的大蟲，所以左邊是「虫」；右邊的「工」念起來像「虹」。', sentence: '雨停了，天上出現一道彩虹。', build: { layout: 'lr', show: ['？', '工'], answer: '虫', options: ['虫', '糸', '氵', '言'], clue: '想一想：古人以為彩虹是天上的一條大蟲，左邊是哪一個部首？' } },
      { id: 'h-晴', combo: { layout: 'lr', parts: [['日', 'm', '太陽'], ['青', 's', '']] }, char: '晴', zhuyin: 'ㄑㄧㄥˊ', radical: '日', strokes: 12, words: ['放晴', '晴天', '晴朗'], say: '晴，晴天的晴', cloze: '＿天', img: 'sunny.png', options: ['晴', '睛', '清', '請'], clue: '這個字的左邊是太陽，右邊是「青」。', explain: '答案是「晴」，左邊是日；「睛」是眼睛的睛，左邊是目，「清」左邊是三點水。', parts: ['日', '青'], story: '左邊的「日」是太陽，右邊的「青」念起來像「晴」。天上出太陽、沒有雲，就是「晴天」。', sentence: '今天是晴天，我們去公園玩。', build: { layout: 'lr', show: ['？', '青'], answer: '日', options: ['日', '目', '氵', '言'], clue: '想一想：天氣好，天空出太陽，左邊是什麼？' } },
      { id: 'h-現', combo: { layout: 'lr', parts: [['王', 'm', '玉'], ['見', 's', '']] }, char: '現', zhuyin: 'ㄒㄧㄢˋ', radical: '玉', strokes: 11, words: ['出現', '現在', '發現'], say: '現，出現的現', cloze: '出＿', img: 'pop-out.png', options: ['現', '見', '規', '覺'], clue: '這個字的左邊是王字旁，右邊是「見」。', explain: '答案是「現」，左邊是王字旁；「見」少了左邊，「覺」是睡覺的覺。', parts: ['王', '見'], story: '左邊的王字旁是「玉」，右邊的「見」念起來像「現」。美玉的光一閃，被大家看到了，就是「出現」。', sentence: '月亮從雲後面出現了。', build: { layout: 'lr', show: ['王', '？'], answer: '見', options: ['見', '貝', '目', '頁'], clue: '想一想：右邊的字念起來像「現」，上面是目，下面有兩隻腳。' } },
      { id: 'h-充', combo: { type: '會意字', pict: '上面像小孩的頭，下面是兩隻腳。小孩慢慢長大，身體長得滿滿的，就是「充」。' }, char: '充', zhuyin: 'ㄔㄨㄥ', radical: '儿', strokes: 6, words: ['充滿', '充電', '補充'], say: '充，充電的充', cloze: '＿電', img: 'phone-charge.png', options: ['充', '允', '完', '究'], clue: '這個字的上面是一點一橫，下面是兩隻腳。', explain: '答案是「充」，充電就是把電裝滿；「允」上面沒有一點一橫，「完」是完成的完。', parts: ['亠', '厶', '儿'], story: '上面像小孩的頭，下面是兩隻腳。小孩吃飽飽、慢慢長大，身體長得滿滿的，就是「充」。把電裝滿，叫做「充電」。', sentence: '平板沒電了，要先充電。' },
      { id: 'h-閃', combo: { type: '會意字', pict: '外面是「門」，裡面是「人」。一個人在門口一閃就不見了，就是「閃」。' }, char: '閃', zhuyin: 'ㄕㄢˇ', radical: '門', strokes: 10, words: ['閃電', '閃亮', '閃開'], say: '閃，閃亮的閃', cloze: '＿亮', img: 'sparkle.png', options: ['閃', '問', '閒', '們'], clue: '這個字的外面是門，門裡面有一個人。', explain: '答案是「閃」，門裡面是人；「問」裡面是口，「閒」裡面是月。', parts: ['門', '人'], story: '外面是「門」，裡面是「人」。一個人從門口一閃，一下子就不見了。很快的亮一下，也叫「閃」。', sentence: '天上的星星一閃一閃的。' },
      { id: 'h-烏', combo: { type: '象形字', pict: '「烏」像一隻全身黑黑的烏鴉。烏鴉黑得連眼睛都看不清楚，所以比「鳥」少了一點。' }, char: '烏', zhuyin: 'ㄨ', radical: '火', strokes: 10, words: ['烏雲', '烏鴉', '烏黑'], say: '烏，烏鴉的烏', cloze: '＿鴉', img: 'crow.png', options: ['烏', '鳥', '鳴', '為'], clue: '這個字很像「鳥」，可是少了眼睛那一點。', explain: '答案是「烏」，比「鳥」少一點；「鳴」是鳥叫的鳴。', parts: ['烏'], story: '「烏」像一隻全身黑黑的烏鴉。烏鴉太黑了，看不到牠的眼睛，所以「烏」比「鳥」少了一點。黑色的雲，叫做「烏雲」。', sentence: '天上飄來一大片烏雲。' },
      { id: 'h-雲', combo: { layout: 'tb', parts: [['雨', 'm', '天上的水氣'], ['云', 's', '']] }, char: '雲', zhuyin: 'ㄩㄣˊ', radical: '雨', strokes: 12, words: ['白雲', '雲朵', '烏雲'], say: '雲，白雲的雲', cloze: '白＿', img: 'clouds.png', options: ['雲', '雪', '雷', '電'], clue: '這個字的上面是雨字頭，下面是「云」。', explain: '答案是「雲」，下面是云；「雪」下面像一隻手，「雷」下面是田。', parts: ['雨', '云'], story: '上面是「雨」，表示天上的水氣；下面的「云」念起來像「雲」。飄在天上、白白軟軟的，就是「雲」。', sentence: '藍藍的天上有幾朵白雲。', build: { layout: 'tb', show: ['雨', '？'], answer: '云', options: ['云', '田', '三', '木'], clue: '想一想：下面的部件念起來像「雲」，上面兩橫、下面一個像「厶」。' } }
    ],
    vocab: [
      { id: 'v-害怕', word: '害怕', meaning: '遇到可怕的事，心裡很慌、很緊張。', example: '打雷的時候，弟弟很＿＿，躲進被子裡。', img: 'scared.png', options: ['害怕', '開心', '溫暖', '充滿'] },
      { id: 'v-生氣', word: '生氣', meaning: '不高興，心裡有火，想大聲罵人。', example: '我的玩具被弄壞了，我好＿＿。', img: 'angry.png', options: ['生氣', '放晴', '開心', '溫暖'] },
      { id: 'v-難過', word: '難過', meaning: '心裡很傷心、不舒服，想要哭。', example: '好朋友搬家了，我覺得很＿＿。', img: 'sad-kid.png', options: ['難過', '溫暖', '放晴', '閃電'] },
      { id: 'v-開心', word: '開心', meaning: '高興、快樂。', example: '收到生日禮物，我好＿＿。', img: 'happy-kid.png', options: ['開心', '害怕', '生氣', '難過'] },
      { id: 'v-颳', word: '颳', meaning: '風很用力的吹。', example: '外面＿起大風，窗戶一直響。', img: 'windy.png', options: ['颳', '躲', '閃', '放'] },
      { id: 'v-躲', word: '躲', meaning: '把身體藏起來，不讓別人看到。', example: '玩捉迷藏的時候，我＿在門後面。', img: 'hide.png', options: ['躲', '颳', '閃', '放'] },
      { id: 'v-閃電', word: '閃電', meaning: '下雨天，天空中突然出現的一道亮光。', example: '天空劃過一道＿＿，好亮！', img: 'lightning.png', options: ['閃電', '彩虹', '烏雲', '陽光'] },
      { id: 'v-打雷', word: '打雷', meaning: '天空發出很大的轟隆隆聲音。', example: '天空一直＿＿，轟隆隆的好大聲。', img: 'thunder.png', options: ['打雷', '放晴', '充滿', '溫暖'] },
      { id: 'v-烏雲密布', word: '烏雲密布', meaning: '黑黑的雲又多又擠，把天空蓋住了。', example: '天空＿＿＿＿，好像快要下雨了。', img: 'dark-clouds.png', options: ['烏雲密布', '傾盆大雨', '溫暖陽光', '美麗彩虹'] },
      { id: 'v-傾盆大雨', word: '傾盆大雨', meaning: '雨下得很大，好像把整盆水倒下來。', example: '突然下起＿＿＿＿，大家都淋溼了。', img: 'heavy-rain.png', options: ['傾盆大雨', '烏雲密布', '溫暖陽光', '美麗彩虹'] },
      { id: 'v-忍不住', word: '忍不住', meaning: '想停下來也停不下來。', example: '這個笑話太好笑了，我＿＿＿笑出來。', img: 'giggle.png', options: ['忍不住', '躲起來', '叫出來', '放晴了'] },
      { id: 'v-充滿', word: '充滿', meaning: '裝得滿滿的，到處都是。', example: '生日派對上＿＿了笑聲。', img: 'party.png', options: ['充滿', '害怕', '放晴', '颳風'] },
      { id: 'v-溫暖', word: '溫暖', meaning: '暖暖的，讓人覺得很舒服。', example: '冬天的太陽照在身上，好＿＿。', img: 'warm-sun.png', options: ['溫暖', '害怕', '生氣', '閃電'] },
      { id: 'v-放晴', word: '放晴', meaning: '雨停了，太陽出來，天氣變好。', example: '下了一整天的雨，傍晚終於＿＿了。', img: 'sunny.png', options: ['放晴', '打雷', '颳風', '生氣'] },
      { id: 'v-彩虹', word: '彩虹', meaning: '雨後天上出現的彎彎的、有很多顏色的光。', example: '雨停了，天上掛著一道美麗的＿＿。', img: 'rainbow.png', options: ['彩虹', '閃電', '烏雲', '雷聲'] }
    ],
    charwords: [
      { id: 'cw-布', char: '布', img: 'tablecloth.png', word: '桌布', charMeaning: '用棉、麻等織成，可以做衣服的東西。', meaning: '鋪在桌子上的布。', example: '媽媽在餐桌上鋪了一條花＿＿。', options: ['桌布', '花盆', '冷氣', '晴天'] },
      { id: 'cw-盆', char: '盆', img: 'flowerpot.png', word: '花盆', charMeaning: '口大、底小，可以裝東西的器具。', meaning: '用來種花草的盆子。', example: '我把小花種在＿＿裡。', options: ['花盆', '桌布', '雲朵', '電視'] },
      { id: 'cw-密', char: '密', img: 'secret.png', word: '祕密', charMeaning: '不讓別人知道的。', meaning: '不想讓別人知道的事。', example: '這是我們兩個人的小＿＿，不能說出去。', options: ['祕密', '彩虹', '冷水', '花盆'] },
      { id: 'cw-滿', char: '滿', img: 'full-cup.png', word: '裝滿', charMeaning: '一點空的地方也沒有。', meaning: '放到沒有空的地方。', example: '哥哥把書包＿＿了課本。', options: ['裝滿', '放假', '躲藏', '閃開'] },
      { id: 'cw-放', char: '放', img: 'vacation.png', word: '放假', charMeaning: '停下來，不用做。', meaning: '不用上學、上班，可以休息。', example: '星期六＿＿，我們全家去爬山。', options: ['放假', '裝滿', '問候', '補充'] },
      { id: 'cw-躲', char: '躲', img: 'hide-seek.png', word: '躲貓貓', charMeaning: '藏起來，不讓人看到。', meaning: '一個人找，其他人藏起來的遊戲。', example: '下課時，我們在操場玩＿＿＿。', options: ['躲貓貓', '颳大風', '冷冰冰', '白雲朵'] },
      { id: 'cw-電', char: '電', img: 'tv.png', word: '電視', charMeaning: '可以讓電燈亮、機器動起來的能量。', meaning: '可以看卡通、新聞的機器。', example: '吃完晚飯，我們一起看＿＿。', options: ['電視', '花盆', '桌布', '烏鴉'] },
      { id: 'cw-難', char: '難', img: 'hard-puzzle.png', word: '困難', charMeaning: '不容易。', meaning: '很不容易做到的事。', example: '遇到＿＿的時候，不要怕，可以請老師幫忙。', options: ['困難', '晴朗', '放假', '雲朵'] },
      { id: 'cw-冷', char: '冷', img: 'cold-water.png', word: '冷水', charMeaning: '溫度低，涼涼的。', meaning: '涼涼的、沒有燒熱的水。', example: '天氣好熱，我用＿＿洗把臉。', options: ['冷水', '電視', '祕密', '晴天'] },
      { id: 'cw-颳', char: '颳', img: 'windy.png', word: '颳風', charMeaning: '風吹。', meaning: '風很用力的吹過來。', example: '外面在＿＿，帽子差一點被吹走。', options: ['颳風', '放假', '補充', '問候'] },
      { id: 'cw-候', char: '候', img: 'greeting.png', word: '問候', charMeaning: '等待；也有關心別人的意思。', meaning: '見面時問別人好不好，表示關心。', example: '早上見到鄰居，我會向他＿＿。', options: ['問候', '颳風', '冷水', '花盆'] },
      { id: 'cw-虹', char: '虹', img: 'rainbow.png', word: '彩虹', charMeaning: '雨後天上出現的彎彎的光。', meaning: '紅、橙、黃、綠、藍、靛、紫，彎彎的掛在天上。', example: '雨停了，天邊出現一道＿＿。', options: ['彩虹', '烏鴉', '電視', '桌布'] },
      { id: 'cw-晴', char: '晴', img: 'clear-sky.png', word: '晴朗', charMeaning: '天上沒有雲、出太陽。', meaning: '天空很亮、很乾淨，沒有雲。', example: '今天天氣＿＿，適合出去玩。', options: ['晴朗', '困難', '祕密', '裝滿'] },
      { id: 'cw-現', char: '現', img: 'now-clock.png', word: '現在', charMeaning: '這個時候；也有露出來的意思。', meaning: '說話的這個時候。', example: '＿＿是早上八點，要上課了。', options: ['現在', '晴朗', '冷水', '花盆'] },
      { id: 'cw-充', char: '充', img: 'drink-water.png', word: '補充', charMeaning: '裝滿、加滿。', meaning: '不夠了，再加進去。', example: '跑完步要＿＿水分，多喝一點水。', options: ['補充', '放假', '問候', '颳風'] },
      { id: 'cw-閃', char: '閃', img: 'dodge.png', word: '閃開', charMeaning: '身體很快的移開。', meaning: '很快的讓開，不被碰到。', example: '球飛過來了，我趕快＿＿。', options: ['閃開', '裝滿', '補充', '問候'] },
      { id: 'cw-烏', char: '烏', img: 'crow.png', word: '烏鴉', charMeaning: '黑色。', meaning: '全身黑黑的鳥，會「啊、啊」的叫。', example: '樹上停著一隻黑黑的＿＿。', options: ['烏鴉', '彩虹', '雲朵', '電視'] },
      { id: 'cw-雲', char: '雲', img: 'cloud-shape.png', word: '雲朵', charMeaning: '飄在天上，白白軟軟的東西。', meaning: '天上一團一團的雲。', example: '天上的＿＿像一隻大綿羊。', options: ['雲朵', '烏鴉', '冷水', '桌布'] }
    ],
    fix: [
      { id: 'fx-布', char: '布', wrong: '市', sentence: '妹妹抱著小熊布偶。', options: ['布', '市', '希'], clue: '用來縫娃娃的東西，下面是「巾」。', explain: '要改成「布」。布偶是用布做的娃娃；「市」是市場的市。' },
      { id: 'fx-盆', char: '盆', wrong: '分', sentence: '我每天幫花盆裡的花澆水。', options: ['盆', '分', '盤'], clue: '種花用的器具，下面要有「皿」。', explain: '要改成「盆」。花盆是裝東西的器具，下面有皿；「分」是分開的分。' },
      { id: 'fx-躲', char: '躲', wrong: '朵', sentence: '下雨了，我們快去躲雨。', options: ['躲', '朵', '剁'], clue: '把身體藏起來，左邊要有「身」。', explain: '要改成「躲」。藏起身體，左邊是身；「朵」是一朵花的朵。' },
      { id: 'fx-電', char: '電', wrong: '雷', sentence: '房間太暗了，請打開電燈。', options: ['電', '雷', '雲'], clue: '讓燈亮起來要用的東西，下面不是「田」。', explain: '要改成「電」。電燈要用電；「雷」是打雷的雷，下面是田。' },
      { id: 'fx-冷', char: '冷', wrong: '令', sentence: '冬天的風吹在臉上，好冷。', options: ['冷', '令', '鈴'], clue: '溫度很低，左邊要有兩點的冰字旁。', explain: '要改成「冷」。冷和冰有關，左邊是兩點；「令」少了左邊。' },
      { id: 'fx-虹', char: '虹', wrong: '紅', sentence: '雨停了，天上出現彩虹。', options: ['虹', '紅', '江'], clue: '天上彎彎的光，左邊是「虫」。', explain: '要改成「虹」。彩虹的虹左邊是虫；「紅」是紅色的紅。' },
      { id: 'fx-晴', char: '晴', wrong: '睛', sentence: '今天是大晴天，好多人去海邊。', options: ['晴', '睛', '清'], clue: '天氣好、出太陽，左邊要有太陽。', explain: '要改成「晴」。晴天有太陽，左邊是日；「睛」是眼睛的睛，左邊是目。' },
      { id: 'fx-現', char: '現', wrong: '見', sentence: '小貓突然從箱子裡出現。', options: ['現', '見', '覺'], clue: '跑出來讓人看到，左邊要有王字旁。', explain: '要改成「現」。出現的現左邊有王字旁；「見」是看見的見。' },
      { id: 'fx-充', char: '充', wrong: '允', sentence: '手機沒電了，要趕快充電。', options: ['充', '允', '完'], clue: '把電裝滿，上面要有一點一橫。', explain: '要改成「充」。充電的充上面有一點一橫；「允」上面沒有。' },
      { id: 'fx-閃', char: '閃', wrong: '問', sentence: '星星在天上閃著亮光。', options: ['閃', '問', '們'], clue: '很快的亮一下，門裡面是「人」。', explain: '要改成「閃」。門裡面是人；「問」門裡面是口。' },
      { id: 'fx-烏', char: '烏', wrong: '鳥', sentence: '天空飄來一片烏雲。', options: ['烏', '鳥', '為'], clue: '黑色的雲，這個字比小鳥的字少一點。', explain: '要改成「烏」。烏雲是黑色的雲，比「鳥」少一點。' },
      { id: 'fx-雲', char: '雲', wrong: '雪', sentence: '藍天上飄著白白的雲。', options: ['雲', '雪', '雷'], clue: '天上白白軟軟的東西，下面是「云」。', explain: '要改成「雲」。雲的下面是云；「雪」是下雪的雪。' }
    ],
    similar: [
      { id: 's1', meaning: '「＿天」是出太陽的好天氣。', sentence: '今天是＿天，我們去公園玩。', frame: '＿天', options: ['晴', '睛'], answer: '晴', clue: '提示：好天氣有太陽，左邊是日。', explain: '答案是「晴」；「睛」是眼睛的睛，左邊是目。' },
      { id: 's2', meaning: '「眼＿」是我們用來看東西的地方。', sentence: '我閉上眼＿，數到十。', frame: '眼＿', options: ['睛', '晴'], answer: '睛', clue: '提示：用來看東西的，左邊是目。', explain: '答案是「睛」；「晴」是晴天的晴，左邊是日。' },
      { id: 's3', meaning: '「＿雨」是把身體藏起來，不被雨淋到。', sentence: '下雨了，我們到屋簷下＿雨。', frame: '＿雨', options: ['躲', '朵'], answer: '躲', clue: '提示：要把身體藏起來，左邊有「身」。', explain: '答案是「躲」；「朵」是一朵花的朵。' },
      { id: 's4', meaning: '一「＿」花，是說花的數量。', sentence: '花園裡開了一＿紅花。', frame: '一＿', options: ['朵', '躲'], answer: '朵', clue: '提示：數花的時候用的字，下面是木。', explain: '答案是「朵」；「躲」是躲起來的躲。' },
      { id: 's5', meaning: '「＿燈」是房間裡、按下開關就會亮的燈。', sentence: '天黑了，請打開＿燈。', frame: '＿燈', options: ['電', '雷'], answer: '電', clue: '提示：下面像一道閃光，不是田。', explain: '答案是「電」；「雷」是打雷的雷。' },
      { id: 's6', meaning: '「打＿」是天空發出轟隆隆的大聲音。', sentence: '天空在打＿，聲音好大。', frame: '打＿', options: ['雷', '電'], answer: '雷', clue: '提示：雨字頭下面是田。', explain: '答案是「雷」；「電」是電燈的電。' },
      { id: 's7', meaning: '「＿雲」是黑黑的雲。', sentence: '天上飄來一片＿雲。', frame: '＿雲', options: ['烏', '鳥'], answer: '烏', clue: '提示：黑色的雲，比小鳥的字少一點。', explain: '答案是「烏」；「鳥」是小鳥的鳥。' },
      { id: 's8', meaning: '「小＿」是會飛、有羽毛的動物。', sentence: '樹上有一隻小＿在唱歌。', frame: '小＿', options: ['鳥', '烏'], answer: '鳥', clue: '提示：會飛的動物，有眼睛那一點。', explain: '答案是「鳥」；「烏」是烏雲的烏。' }
    ],
    listen: [
      { id: 'l1', text: '下雨天，天空突然亮了一下。', answer: 0, options: [{ text: '閃電', img: 'lightning.png' }, { text: '彩虹', img: 'rainbow.png' }, { text: '白雲', img: 'clouds.png' }, { text: '電燈', img: 'lamp.png' }] },
      { id: 'l2', text: '雨停了，天上掛著彎彎的、有很多顏色的光。', answer: 0, options: [{ text: '彩虹', img: 'rainbow.png' }, { text: '閃電', img: 'lightning.png' }, { text: '烏雲', img: 'dark-clouds.png' }, { text: '颳風', img: 'windy.png' }] },
      { id: 'l3', text: '黑黑的雲又多又擠，把天空蓋住了。', answer: 0, options: [{ text: '烏雲密布', img: 'dark-clouds.png' }, { text: '晴天', img: 'sunny.png' }, { text: '彩虹', img: 'rainbow.png' }, { text: '溫暖', img: 'warm-sun.png' }] },
      { id: 'l4', text: '雨下得好大，好像把一整盆水倒下來。', answer: 0, options: [{ text: '傾盆大雨', img: 'heavy-rain.png' }, { text: '晴天', img: 'sunny.png' }, { text: '閃電', img: 'lightning.png' }, { text: '白雲', img: 'clouds.png' }] },
      { id: 'l5', text: '他把身體藏在門後面，不讓別人找到。', answer: 0, options: [{ text: '躲', img: 'hide.png' }, { text: '開心', img: 'happy-kid.png' }, { text: '颳風', img: 'windy.png' }, { text: '電視', img: 'tv.png' }] },
      { id: 'l6', text: '收到禮物，她笑得好高興。', answer: 0, options: [{ text: '開心', img: 'happy-kid.png' }, { text: '難過', img: 'sad-kid.png' }, { text: '害怕', img: 'scared.png' }, { text: '生氣', img: 'angry.png' }] },
      { id: 'l7', text: '玩具被弄壞了，他皺著眉頭，好想大叫。', answer: 0, options: [{ text: '生氣', img: 'angry.png' }, { text: '開心', img: 'happy-kid.png' }, { text: '溫暖', img: 'warm-sun.png' }, { text: '彩虹', img: 'rainbow.png' }] },
      { id: 'l8', text: '冬天的太陽照在身上，暖暖的好舒服。', answer: 0, options: [{ text: '溫暖', img: 'warm-sun.png' }, { text: '颳風', img: 'windy.png' }, { text: '閃電', img: 'lightning.png' }, { text: '烏鴉', img: 'crow.png' }] }
    ],
    phrase: {
      fillLabels: { answer: '什麼心情' },
      pickName: '看圖選一選',
      pickSay: '看圖，選出圖裡小朋友的心情，說說看是什麼時候。',
      intro: { example: '高興的時候', img: 'pr-glad.png', parts: [{ text: '高興', role: '什麼心情' }, { text: '的' }, { text: '時候' }],
        explain: '先說是什麼心情，加上「的時候」，就是那個心情出現的時間。' },
      pick: [
        { id: 'ph1', img: 'pr-play-friends.png', before: '', noun: '時候', ask: '什麼心情的時候', look: '再看看圖片，小朋友和好朋友一起玩，臉上是什麼表情？', options: ['開心', '生氣', '害怕', '難過'], clue: '提示：她笑得好大聲，眼睛都瞇起來了。', explain: '答案是「開心」，完整的短語是「開心的時候」。' },
        { id: 'ph2', img: 'pr-broken-toy.png', before: '', noun: '時候', ask: '什麼心情的時候', look: '再看看圖片，玩具被弄壞了，小朋友的眉毛怎麼了？', options: ['生氣', '開心', '輕鬆', '溫暖'], clue: '提示：他的眉毛豎起來，臉紅紅的，雙手插腰。', explain: '答案是「生氣」，完整的短語是「生氣的時候」。' },
        { id: 'ph3', img: 'pr-worry-mom.png', before: '', noun: '時候', ask: '什麼心情的時候', look: '再看看圖片，媽媽生病躺在床上，小朋友在旁邊做什麼？', options: ['擔心', '開心', '得意', '輕鬆'], clue: '提示：他一直想著媽媽會不會好起來，睡不著覺。', explain: '答案是「擔心」，完整的短語是「擔心的時候」。' },
        { id: 'ph4', img: 'pr-lost-dog.png', before: '', noun: '時候', ask: '什麼心情的時候', look: '再看看圖片，小狗不見了，小朋友的眼睛怎麼了？', options: ['難過', '開心', '得意', '生氣'], clue: '提示：她一直流眼淚，看著小狗的照片。', explain: '答案是「難過」，完整的短語是「難過的時候」。' },
        { id: 'ph5', img: 'pr-surprise.png', before: '', noun: '時候', ask: '什麼心情的時候', look: '再看看圖片，小朋友打開門，大家一起為他慶生，他的嘴巴怎麼了？', options: ['驚喜', '生氣', '難過', '害怕'], clue: '提示：他張大嘴巴，沒想到大家幫他準備了派對。', explain: '答案是「驚喜」，完整的短語是「驚喜的時候」。' },
        { id: 'ph6', img: 'pr-first-prize.png', before: '', noun: '時候', ask: '什麼心情的時候', look: '再看看圖片，小朋友拿到第一名，他的頭抬得怎麼樣？', options: ['得意', '難過', '害怕', '生氣'], clue: '提示：他抬頭挺胸，認為自己好厲害。', explain: '答案是「得意」，完整的短語是「得意的時候」。' }
      ],
      say: [],
      words: [{ word: '充滿', meaning: '裝得滿滿的，到處都是。', img: 'party.png' }],
      choose: [
        { id: 'pw1', word: '充滿', options: ['春天到了，公園裡充滿了花香。', '杯子裡什麼都沒有，充滿了水。'], clue: '提示：想一想，「充滿」是滿滿的，還是空空的？', explain: '第一句用得對：花香到處都是。杯子裡什麼都沒有，是空的，不是充滿。' }
      ],
      make: [
        { id: 'pm1', word: '充滿', clue: '提示：想想看，什麼地方到處都是笑聲、香味或玩具？', model: '過年的時候，家裡充滿了笑聲。' }
      ],
      phrase2: {
        intro: { example: '小狗好想出去玩', img: 'pz-dog-door.png', parts: [{ text: '小狗', role: '誰' }, { text: '好想' }, { text: '出去玩', role: '做什麼' }],
          explain: '先說是誰，加上「好想」，再說他想做什麼。「好想」就是非常想。' },
        pick: [
          { id: 'p2-pz1', img: 'pz-sleepy.png', before: '哥哥好想', join: '', noun: '。', ask: '哥哥好想做什麼', look: '再看看圖片，哥哥一直打哈欠，眼睛快閉起來了。', options: ['睡覺', '跑步', '唱歌', '洗車'], clue: '提示：他好累好累，一直想躺到床上。', explain: '答案是「睡覺」，完整的句子是「哥哥好想睡覺」。' },
          { id: 'p2-pz2', img: 'pz-hungry.png', before: '弟弟好想', join: '', noun: '。', ask: '弟弟好想做什麼', look: '再看看圖片，弟弟摸著肚子，看著桌上的飯菜。', options: ['吃飯', '睡覺', '洗澡', '寫字'], clue: '提示：他的肚子咕嚕咕嚕叫。', explain: '答案是「吃飯」，完整的句子是「弟弟好想吃飯」。' },
          { id: 'p2-pz3', img: 'pz-pool.png', before: '我好想', join: '', noun: '。', ask: '我好想做什麼', look: '再看看圖片，天氣好熱，小朋友看著藍藍的游泳池。', options: ['游泳', '穿外套', '看書', '畫畫'], clue: '提示：好熱好熱，想跳進水裡涼一涼。', explain: '答案是「游泳」，完整的句子是「我好想游泳」。' },
          { id: 'p2-pz4', img: 'pz-grandma.png', before: '妹妹好想', join: '', noun: '。', ask: '妹妹好想做什麼', look: '再看看圖片，妹妹拿著奶奶的照片，看著窗外。', options: ['見奶奶', '吃冰', '打球', '洗碗'], clue: '提示：照片裡的人住得好遠，妹妹很久沒和她在一起了。', explain: '答案是「見奶奶」，完整的句子是「妹妹好想見奶奶」。' }
        ],
        fill: [
          { id: 'pz1', img: 'pz-sleepy.png', parts: ['哥哥', '好想', '睡覺'] },
          { id: 'pz2', img: 'pz-hungry.png', parts: ['弟弟', '好想', '吃飯'] },
          { id: 'pz3', img: 'pz-pool.png', parts: ['我', '好想', '游泳'] },
          { id: 'pz4', img: 'pz-grandma.png', parts: ['妹妹', '好想', '見奶奶'] }
        ]
      }
    },
    pattern: [
      { key: 'yihuier', id: 'yh', title: '一會兒……一會兒……', img: 'yihuier.png', meaning: '用兩個「一會兒」，說一個人或一樣東西，在很短的時間裡，一下子這樣、一下子那樣。',
        examples: ['小貓一會兒追球，一會兒舔舔腳。'],
        match: [
          { id: 'pt-yh-m1', img: 'pt-baby.png', front: '小寶寶一會兒哭，', options: ['一會兒笑。', '一會兒長大。', '一會兒上學。'], clue: '提示：看看圖片，寶寶的表情一下子變成什麼？', explain: '答案是「一會兒笑」：寶寶一下子哭、一下子笑。' },
          { id: 'pt-yh-m2', img: 'pt-sky-weather.png', front: '今天的天空一會兒出太陽，', options: ['一會兒下雨。', '一會兒吃飯。', '一會兒睡覺。'], clue: '提示：天空會有什麼不一樣的天氣？', explain: '答案是「一會兒下雨」：天氣一下子晴、一下子下雨。' },
          { id: 'pt-yh-m3', img: 'pt-puppy-play.png', front: '小狗一會兒追蝴蝶，', options: ['一會兒咬球。', '一會兒寫字。', '一會兒開車。'], clue: '提示：看看圖片，小狗還會玩什麼？', explain: '答案是「一會兒咬球」：小狗一下子追蝴蝶、一下子咬球。' }
        ],
        conj: [
          { id: 'pt-yh-c1', full: '弟弟一會兒跳繩，一會兒跑步，玩得好開心。', img: 'pt-boy-play.png', sentence: '弟弟＿＿＿跳繩，＿＿＿跑步，玩得好開心。', options: ['一會兒……一會兒……', '只要……就……', '是……還是……'], clue: '提示：一下子跳繩、一下子跑步。數數看有幾個空格。', explain: '答案是「一會兒……一會兒……」：弟弟一會兒跳繩，一會兒跑步。' },
          { id: 'pt-yh-c2', full: '紅綠燈一會兒變紅，一會兒變綠。', img: 'pt-traffic-light.png', sentence: '紅綠燈＿＿＿變紅，＿＿＿變綠。', options: ['一會兒……一會兒……', '只要……就……', '是……還是……'], clue: '提示：燈一下子這個顏色、一下子那個顏色。數數看有幾個空格。', explain: '答案是「一會兒……一會兒……」：紅綠燈一會兒變紅，一會兒變綠。' },
          { id: 'pt-yh-c3', full: '小魚一會兒游上來，一會兒游下去。', img: 'pt-fish.png', sentence: '小魚＿＿＿游上來，＿＿＿游下去。', options: ['一會兒……一會兒……', '只要……就……', '是……還是……'], clue: '提示：小魚一下子上、一下子下。數數看有幾個空格。', explain: '答案是「一會兒……一會兒……」：小魚一會兒游上來，一會兒游下去。' }
        ],
        half: [
          { id: 'pt-yh-h1', front: '風一會兒大，', clue: '提示：風一下子大，一下子會怎麼樣？記得要說「一會兒」。', model: '一會兒小。' },
          { id: 'pt-yh-h2', front: '小鳥一會兒飛到樹上，', clue: '提示：小鳥接著又飛到哪裡？記得要說「一會兒」。', model: '一會兒飛到屋頂。' }
        ],
        whole: [
          { id: 'pt-yh-w1', clue: '提示：先說是誰，再用兩個「一會兒」說他一下子做這個、一下子做那個。想想看：下課的時候，你和同學在做什麼？', model: '下課時，我一會兒盪秋千，一會兒溜滑梯。' }
        ] }
    ]
  };
  if (typeof module === 'object' && module.exports) module.exports = d;
  else { root.H3A_WORDS = root.H3A_WORDS || {}; root.H3A_WORDS.L01 = d; }
})(this);
