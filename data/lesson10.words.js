/* 第 10 課字詞練習（公開、不加密）。句子和解釋都是 Claude 自己寫的，沒有課本原文。
   生字、語詞：options 的第一個是正確答案（作答時會打亂）。二年級：不放成語、修辭。 */
(function (root) {
  var d = {
    /* 人事時地物：選項第一個是答案；paras 是提示要用到的段落 */
    wh: [
      { id: 'wh-ren', key: '人', options: ['我、姐姐和表弟', '我和爸爸媽媽', '老師和同學', '我和爺爺奶奶'], paras: [1, 3], why: '表弟到家裡來，「我」和姐姐陪他玩猜字謎。' },
      { id: 'wh-shi', key: '事', options: ['和表弟玩猜字謎', '一起寫數學作業', '去公園放風箏', '比賽誰跑得快'], paras: [1], why: '「我」和姐姐問表弟要不要玩猜字謎，表弟說好。' },
      { id: 'wh-time', key: '時', options: ['今天，表弟來家裡的時候', '過年的晚上', '學校上課的時候', '放暑假的第一天'], paras: [1], why: '課文一開始就說，表弟在今天來到家裡。' },
      { id: 'wh-di', key: '地', options: ['「我」的家裡', '學校的教室', '公園的草地', '圖書館'], paras: [1], why: '表弟到「我」的家裡來，大家在家裡玩。' },
      { id: 'wh-wu', key: '物', options: ['字謎和寫在紙上的字', '一盒彩色筆', '一顆足球', '一臺電視'], paras: [2, 3], why: '「我」出了好幾個字謎，姐姐把「王」和「三」寫下來給表弟看。' }
    ],
    quizLevels: { qa: 'extract', qb: 'infer', qc: 'extract', qd: 'infer', qe: 'extract', qf: 'extract', qg: 'interpret', qh: 'interpret', k1: 'evaluate', k2: 'evaluate' },
    quizHelp: {
      qg: { think: ['姐姐寫下的「王」和「三」，跟前面的題目有什麼關係？', '看到這兩個字以後，表弟發現要用數字算，還是要看字的樣子？'],
        why: '「王」是在「三」中間加一豎，「三」拿掉一橫還剩「二」，所以題目要看字的樣子，不是算數學。表弟看懂了，就知道一百拿掉上面一橫是「白」。' },
      qh: { think: ['猜這些字謎的時候，要把字的筆畫或部件怎麼樣？', '加一加、減一減，像不像在做加法和減法？'],
        why: '猜字謎要把字的部件或筆畫加上去、拿掉，好像在做加法和減法一樣，所以題目叫「加加減減」。' }
    },
    talkChoices: {
      k1: { good: ['「日」加「月」，是「明」。', '「木」加「木」，是「林」。'], bad: ['一加一等於二。', '「日」加「月」，是「星」。'],
        why: '字謎要把字的部件拼起來：日和月拼成明，兩個木拼成林。一加一等於二是數學題；日和月拼不出星。' },
      k2: { good: ['我會把字寫出來，看看它長什麼樣子。', '我會請別人給我一點提示。'], bad: ['我會生氣的把紙丟掉。', '我會說謎語都很無聊，不玩了。'],
        why: '猜不出來的時候，可以把字寫下來看一看，或是請人給提示。生氣丟東西、直接放棄，都沒辦法猜出答案。' }
    },
    hanzi: [
      { id: 'h-減', combo: { layout: 'lr', parts: [['氵', 'm', '水'], ['咸', 's', '']] }, char: '減', zhuyin: 'ㄐㄧㄢˇ', radical: '水', strokes: 12, words: ['減少', '減法', '加減'], say: '減，減少的減', cloze: '＿少', img: 'fewer-apples.png', options: ['減', '喊', '鹹', '感'], clue: '這個字的左邊是三點水，右邊是「咸」。', explain: '答案是「減」，左邊是三點水；「喊」左邊是口，「感」下面是心。', parts: ['氵', '咸'], story: '左邊是三點水，右邊的「咸」念起來有點像「減」。水慢慢變少，就是「減」。東西被拿走一些，叫做「減少」。', sentence: '杯子裡的水減少了一半。', build: { layout: 'lr', show: ['？', '咸'], answer: '氵', options: ['氵', '口', '扌', '木'], clue: '想一想：水慢慢變少，左邊和什麼有關？' } },
      { id: 'h-表', combo: { type: '會意字', pict: '上面像「毛」，下面是「衣」。古時候把有毛的皮衣穿在最外面，就是「表」。' }, char: '表', zhuyin: 'ㄅㄧㄠˇ', radical: '衣', strokes: 8, words: ['表弟', '表哥', '表演'], say: '表，表演的表', cloze: '＿演', img: 'show-stage.png', options: ['表', '衣', '麥', '袁'], clue: '這個字的上面是三橫一豎，下面和「衣」的下半部一樣。', explain: '答案是「表」；「衣」上面不一樣，「麥」下面是夂。', parts: ['表'], story: '「表」的上面像毛，下面是衣服。古時候把毛皮衣穿在最外面，所以看得到的外面叫「外表」。站在臺上給大家看，就是「表演」。', sentence: '我們在臺上表演唱歌。' },
      { id: 'h-讀', combo: { layout: 'lr', parts: [['言', 'm', '說話'], ['賣', 's', '']] }, char: '讀', zhuyin: 'ㄉㄨˊ', radical: '言', strokes: 22, words: ['讀書', '朗讀', '閱讀'], say: '讀，讀書的讀', cloze: '朗＿', img: 'read-aloud.png', options: ['讀', '續', '賣', '讚'], clue: '這個字的左邊是言字旁，右邊是「賣」。', explain: '答案是「讀」，左邊是言；「續」左邊是糸，「賣」少了左邊。', parts: ['言', '賣'], story: '左邊是「言」，表示說話；右邊的「賣」念起來有點像「讀」。用嘴巴把書上的字念出來，就是「讀」。', sentence: '我大聲朗讀一首兒歌。', build: { layout: 'lr', show: ['？', '賣'], answer: '言', options: ['言', '糸', '扌', '口'], clue: '想一想：把字念出來要說話，左邊是什麼？' } },
      { id: 'h-認', combo: { layout: 'lr', parts: [['言', 'm', '說話'], ['忍', 's', '']] }, char: '認', zhuyin: 'ㄖㄣˋ', radical: '言', strokes: 14, words: ['認識', '認真', '認得'], say: '認，認真的認', cloze: '＿真', img: 'focus-study.png', options: ['認', '忍', '訓', '忘'], clue: '這個字的左邊是言字旁，右邊是「忍」。', explain: '答案是「認」；「忍」少了言字旁，「訓」右邊是川。', parts: ['言', '忍'], story: '左邊是「言」，右邊的「忍」念起來像「認」。看到、聽到，就知道是誰、是什麼，叫做「認得」。做事很用心，叫做「認真」。', sentence: '弟弟寫功課很認真。', build: { layout: 'lr', show: ['？', '忍'], answer: '言', options: ['言', '木', '亻', '氵'], clue: '想一想：和新朋友見面要開口說話，左邊是什麼？' } },
      { id: 'h-識', combo: { layout: 'lr', parts: [['言', 'm', '說話'], ['戠', 's', '']] }, char: '識', zhuyin: 'ㄕˋ', radical: '言', strokes: 19, words: ['認識', '識字', '知識'], say: '識，認識的識', cloze: '＿字', img: 'learn-words.png', options: ['識', '織', '職', '幟'], clue: '這個字的左邊是言字旁，右邊是「戠」。', explain: '答案是「識」，左邊是言；「織」左邊是糸，「職」左邊是耳。', parts: ['言', '戠'], story: '左邊是「言」，右邊念起來像「識」。知道一個字怎麼念、怎麼寫，就是「識字」。', sentence: '妹妹已經識字，會自己看繪本了。', build: { layout: 'lr', show: ['？', '戠'], answer: '言', options: ['言', '糸', '耳', '木'], clue: '想一想：知道字怎麼念，要用嘴巴說，左邊是什麼？' } },
      { id: 'h-謎', combo: { layout: 'lr', parts: [['言', 'm', '說話'], ['迷', 's', '']] }, char: '謎', zhuyin: 'ㄇㄧˊ', radical: '言', strokes: 17, words: ['謎語', '字謎', '猜謎'], say: '謎，謎語的謎', cloze: '＿語', img: 'riddle-card.png', options: ['謎', '迷', '瞇', '咪'], clue: '這個字的左邊是言字旁，右邊是「迷」。', explain: '答案是「謎」；「迷」少了言字旁，「瞇」左邊是目。', parts: ['言', '迷'], story: '左邊是「言」，右邊的「迷」是走不出來、想不清楚。用話說出一個讓人想不透的題目，就是「謎語」。', sentence: '我們一起猜謎語。', build: { layout: 'lr', show: ['？', '迷'], answer: '言', options: ['言', '目', '口', '米'], clue: '想一想：謎語是用嘴巴說出來的，左邊是什麼？' } },
      { id: 'h-答', combo: { layout: 'tb', parts: [['竹', 'm', '竹子'], ['合', 's', '']] }, char: '答', zhuyin: 'ㄉㄚˊ', radical: '竹', strokes: 12, words: ['回答', '答案', '答對'], say: '答，回答的答', cloze: '＿案', img: 'answer-sheet.png', options: ['答', '塔', '搭', '合'], clue: '這個字的上面是竹字頭，下面是「合」。', explain: '答案是「答」，上面是竹字頭；「塔」左邊是土，「搭」左邊是提手旁。', parts: ['竹', '合'], story: '上面是竹字頭，下面的「合」念起來有點像「答」。古時候把字寫在竹片上回話，就是「答」。', sentence: '老師問問題，我舉手回答。', build: { layout: 'tb', show: ['？', '合'], answer: '竹', options: ['竹', '艹', '雨', '宀'], clue: '想一想：古時候把字寫在什麼植物做的片子上？' } },
      { id: 'h-搖', combo: { layout: 'lr', parts: [['扌', 'm', '手'], ['䍃', 's', '']] }, char: '搖', zhuyin: 'ㄧㄠˊ', radical: '手', strokes: 13, words: ['搖頭', '搖動', '搖籃'], say: '搖，搖頭的搖', cloze: '＿籃', img: 'cradle.png', options: ['搖', '遙', '謠', '瑤'], clue: '這個字的左邊是提手旁。', explain: '答案是「搖」，左邊是提手旁；「遙」外面是辶，「謠」左邊是言。', parts: ['扌', '䍃'], story: '左邊是提手旁，表示用手；右邊念起來像「搖」。用手讓東西左右晃來晃去，就是「搖」。', sentence: '小寶寶在搖籃裡睡得好香。', build: { layout: 'lr', show: ['？', '䍃'], answer: '扌', options: ['扌', '言', '辶', '王'], clue: '想一想：要讓東西晃來晃去，要用身體的哪裡？' } },
      { id: 'h-百', combo: { type: '形聲字', pict: '上面一橫表示「一」，下面的「白」念起來像「百」。' }, char: '百', zhuyin: 'ㄅㄞˇ', radical: '白', strokes: 6, words: ['一百', '百花', '百貨公司'], say: '百，一百的百', cloze: '＿花', img: 'many-flowers.png', options: ['百', '白', '自', '頁'], clue: '這個字的下面是「白」，上面多了一橫。', explain: '答案是「百」；「白」上面少了一橫，「自」裡面有兩橫。', parts: ['一', '白'], story: '上面的一橫是「一」，下面的「白」念起來像「百」。十個十，就是一百。', sentence: '春天到了，公園裡百花都開了。' },
      { id: 'h-嘴', combo: { layout: 'lr', parts: [['口', 'm', '嘴巴'], ['觜', 's', '']] }, char: '嘴', zhuyin: 'ㄗㄨㄟˇ', radical: '口', strokes: 15, words: ['嘴巴', '張嘴', '鳥嘴'], say: '嘴，嘴巴的嘴', cloze: '＿巴', img: 'open-mouth.png', options: ['嘴', '觜', '喘', '嚼'], clue: '這個字的左邊是口，右邊是「觜」。', explain: '答案是「嘴」；「觜」少了口，「喘」右邊不一樣。', parts: ['口', '觜'], story: '左邊是「口」，右邊的「觜」念起來像「嘴」，是鳥尖尖的嘴。吃東西、說話用的地方，就是「嘴巴」。', sentence: '吃飯的時候要閉上嘴巴慢慢嚼。', build: { layout: 'lr', show: ['？', '觜'], answer: '口', options: ['口', '目', '耳', '扌'], clue: '想一想：吃東西、說話用的地方，左邊是什麼？' } },
      { id: 'h-哥', combo: { type: '會意字', pict: '上下兩個「可」疊在一起。' }, char: '哥', zhuyin: 'ㄍㄜ', radical: '口', strokes: 10, words: ['哥哥', '表哥', '大哥'], say: '哥，哥哥的哥', cloze: '大＿', img: 'big-brother.png', options: ['哥', '歌', '可', '奇'], clue: '這個字是兩個「可」上下疊在一起。', explain: '答案是「哥」；「歌」右邊多了欠，「可」只有一個。', parts: ['可', '可'], story: '兩個「可」疊在一起，念起來和「歌」一樣。家裡比我大的男生，叫做「哥哥」。', sentence: '大哥帶我去公園踢球。' },
      { id: 'h-數', combo: { layout: 'lr', parts: [['婁', 's', ''], ['攵', 'm', '手拿東西']] }, char: '數', zhuyin: 'ㄕㄨˋ', radical: '攴', strokes: 15, words: ['數學', '數字', '算數'], say: '數，數學的數', cloze: '＿學', img: 'math-class.png', options: ['數', '樓', '教', '敢'], clue: '這個字的左邊是「婁」，右邊是「攵」。', explain: '答案是「數」；「樓」左邊是木，「教」左邊是孝。', parts: ['婁', '攵'], story: '右邊的「攵」像一隻手拿著東西，左邊的「婁」念起來有點像「數」。用手一個一個點著算，就是「數」。和數字有關的學問，叫做「數學」。', sentence: '數學課要學加法和減法。', build: { layout: 'lr', show: ['婁', '？'], answer: '攵', options: ['攵', '木', '口', '女'], clue: '想一想：用手一個一個點著算，右邊是像手拿東西的部件。' } },
      { id: 'h-題', combo: { layout: 'lr', parts: [['是', 's', ''], ['頁', 'm', '頭']] }, char: '題', zhuyin: 'ㄊㄧˊ', radical: '頁', strokes: 18, words: ['題目', '問題', '數學題'], say: '題，題目的題', cloze: '＿目', img: 'quiz-paper.png', options: ['題', '提', '顏', '堤'], clue: '這個字的左邊是「是」，右邊是「頁」。', explain: '答案是「題」；「提」左邊是提手旁，「顏」左邊是彥。', parts: ['是', '頁'], story: '右邊的「頁」是頭，左邊的「是」念起來有點像「題」。寫在最前面、最上頭的字，就是「題目」。', sentence: '這張考卷有十個題目。', build: { layout: 'lr', show: ['是', '？'], answer: '頁', options: ['頁', '扌', '土', '口'], clue: '想一想：寫在最上頭，右邊是表示「頭」的部件。' } },
      { id: 'h-趕', combo: { type: '形聲字', pict: '左下的「走」表示跑，右邊的「旱」念起來像「趕」。' }, char: '趕', zhuyin: 'ㄍㄢˇ', radical: '走', strokes: 14, words: ['趕快', '趕緊', '趕上'], say: '趕，趕快的趕', cloze: '＿快', img: 'run-bus.png', options: ['趕', '起', '超', '越'], clue: '這個字的左下是「走」，右邊是「旱」。', explain: '答案是「趕」；「起」右邊是己，「超」右邊是召。', parts: ['走', '旱'], story: '「走」表示快快的跑，「旱」念起來像「趕」。時間快來不及了，要快快的跑，就是「趕快」。', sentence: '公車來了，我們趕快跑過去。' },
      { id: 'h-突', combo: { layout: 'tb', type: '會意字', parts: [['穴', 'm', '洞'], ['犬', 'm', '狗']] }, char: '突', zhuyin: 'ㄊㄨˊ', radical: '穴', strokes: 9, words: ['突然', '突出'], say: '突，突然的突', cloze: '＿出', img: 'dog-out-hole.png', options: ['突', '空', '究', '哭'], clue: '這個字的上面是一個像洞的部件，下面是「犬」。', explain: '答案是「突」；「空」下面是工，「究」下面是九。', parts: ['穴', '犬'], story: '上面的「穴」是洞，下面的「犬」是狗。一隻狗從洞裡一下子跑出來，就是「突」。沒想到、一下子發生，叫做「突然」。', sentence: '牆上有一根釘子突出來，要小心。', build: { layout: 'tb', show: ['？', '犬'], answer: '穴', options: ['穴', '宀', '艹', '雨'], clue: '想一想：狗從哪裡跑出來？上面的部件像一個洞。' } },
      { id: 'h-異', combo: { layout: 'tb', parts: [['田', 'm', ''], ['共', 'm', '']] }, char: '異', zhuyin: 'ㄧˋ', radical: '田', strokes: 11, words: ['異口同聲', '奇異果', '怪異'], say: '異，奇異的異', cloze: '奇＿果', img: 'kiwi.png', options: ['異', '冀', '翼', '畢'], clue: '這個字的上面是「田」，下面是「共」。', explain: '答案是「異」；「翼」上面是羽，「畢」下面不一樣。', parts: ['田', '共'], story: '「異」的上面是田，下面是共。很久以前，它像一個人戴著奇怪的面具，看起來和別人不一樣。不一樣，就叫「異」。', sentence: '奇異果切開來，裡面綠綠的。', build: { layout: 'tb', show: ['？', '共'], answer: '田', options: ['田', '口', '日', '目'], clue: '想一想：上面的部件有四個小方格。' } },
      { id: 'h-口', combo: { type: '象形字', pict: '「口」像一張張開的嘴巴。' }, char: '口', zhuyin: 'ㄎㄡˇ', radical: '口', strokes: 3, words: ['門口', '一口', '異口同聲'], say: '口，門口的口', cloze: '門＿', img: 'door-front.png', options: ['口', '日', '曰', '回'], clue: '這個字像一張張開的嘴巴，是一個方方的框。', explain: '答案是「口」；「日」中間多一橫，「回」裡面還有一個框。', parts: ['口'], story: '「口」像一張張開的嘴巴。房子大門的前面，叫做「門口」。', sentence: '媽媽在門口等我放學。' },
      { id: 'h-對', combo: { type: '會意字', pict: '右邊的「寸」是手，手拿著東西，面向另一個人。' }, char: '對', zhuyin: 'ㄉㄨㄟˋ', radical: '寸', strokes: 14, words: ['答對', '對面', '對不起'], say: '對，對面的對', cloze: '＿面', img: 'across-street.png', options: ['對', '封', '射', '樹'], clue: '這個字的右邊是「寸」，左邊上面像一排小樹枝。', explain: '答案是「對」；「封」左邊是兩個土，「射」左邊是身。', parts: ['丵', '寸'], story: '右邊的「寸」是手。手拿著東西，面向另一個人，就是「對」。在路的另一邊，叫做「對面」。說得沒錯，也叫「對」。', sentence: '我家對面有一間麵包店。', build: { layout: 'lr', show: ['丵', '？'], answer: '寸', options: ['寸', '口', '土', '木'], clue: '想一想：右邊是表示手的部件，筆畫只有三畫。' } }
    ],
    vocab: [
      { id: 'v-表弟', word: '表弟', meaning: '姑姑、舅舅或阿姨家，年紀比我小的男生。', example: '舅舅帶＿＿來我家玩。', img: 'little-cousin.png', options: ['表弟', '老師', '同學', '鄰居'] },
      { id: 'v-讀書', word: '讀書', meaning: '看書，學新的知識。', example: '哥哥每天晚上都在書桌前＿＿。', img: 'read-book.png', options: ['讀書', '跳舞', '搖頭', '點頭'] },
      { id: 'v-認識', word: '認識', meaning: '知道是誰，或知道是什麼。', example: '我在新學校＿＿了好多朋友。', img: 'meet-friend.png', options: ['認識', '回答', '趕緊', '得意'] },
      { id: 'v-猜字謎', word: '猜字謎', meaning: '想一想題目說的是哪一個字。', example: '元宵節的時候，大家一起＿＿＿。', img: 'riddle-card.png', options: ['猜字謎', '數學題', '抓抓頭', '搖搖頭'] },
      { id: 'v-點頭', word: '點頭', meaning: '頭往下動一動，表示同意、說好。', example: '媽媽問我要不要吃蛋糕，我馬上＿＿。', img: 'nod-yes.png', options: ['點頭', '搖頭', '讀書', '突然'] },
      { id: 'v-回答', word: '回答', meaning: '別人問問題，說出想法或答案。', example: '老師問問題，大家都搶著＿＿。', img: 'raise-hand-answer.png', options: ['回答', '認識', '表弟', '讀書'] },
      { id: 'v-得意', word: '得意', meaning: '覺得自己很厲害，很開心的樣子。', example: '弟弟拼好了積木，＿＿的笑了。', img: 'proud-kid.png', options: ['得意', '趕緊', '突然', '認識'] },
      { id: 'v-搖搖頭', word: '搖搖頭', meaning: '頭往左右動一動，表示不是、不要。', example: '我問妹妹要不要吃苦瓜，她＿＿＿。', img: 'shake-head.png', options: ['搖搖頭', '抓抓頭', '猜字謎', '數學題'] },
      { id: 'v-抓抓頭', word: '抓抓頭', meaning: '用手在頭上抓幾下，不知道該怎麼辦的樣子。', example: '這題好難，弟弟想不出來，只好＿＿＿。', img: 'scratch-head.png', options: ['抓抓頭', '搖搖頭', '猜字謎', '數學題'] },
      { id: 'v-嘟著嘴', word: '嘟著嘴', meaning: '嘴巴翹起來，有點不高興的樣子。', example: '不能出去玩，妹妹＿＿＿坐在窗邊。', img: 'pout-kid.png', options: ['嘟著嘴', '抓抓頭', '搖搖頭', '猜字謎'] },
      { id: 'v-數學題', word: '數學題', meaning: '要用加、減來算答案的題目。', example: '這張考卷有十道＿＿＿。', img: 'math-class.png', options: ['數學題', '猜字謎', '抓抓頭', '搖搖頭'] },
      { id: 'v-趕緊', word: '趕緊', meaning: '動作很快，不慢慢來。', example: '下雨了，我們＿＿把衣服收進來。', img: 'rain-laundry.png', options: ['趕緊', '得意', '認識', '回答'] },
      { id: 'v-突然', word: '突然', meaning: '沒想到，一下子就發生了。', example: '天空＿＿打雷，大家都嚇了一跳。', img: 'thunder.png', options: ['突然', '得意', '點頭', '讀書'] },
      { id: 'v-異口同聲', word: '異口同聲', meaning: '好幾個人一起說出一樣的話。', example: '老師問誰要吃冰，大家＿＿＿＿的說：「我！」', img: 'say-together.png', options: ['異口同聲', '快快樂樂', '急急忙忙', '安安靜靜'] }
    ],
    charwords: [
      { id: 'cw-減', char: '減', img: 'fewer-apples.png', word: '減少', charMeaning: '拿掉一些、變少。', meaning: '本來比較多，後來變少了。', example: '天氣變冷，公園裡的人＿＿了。', options: ['減少', '回答', '突出', '對面'] },
      { id: 'cw-表', char: '表', img: 'show-stage.png', word: '表演', charMeaning: '外面、給別人看。', meaning: '在大家面前唱歌、跳舞或演戲。', example: '我們在晚會上＿＿跳舞。', options: ['表演', '減少', '門口', '數字'] },
      { id: 'cw-讀', char: '讀', img: 'read-aloud.png', word: '朗讀', charMeaning: '看著字念出來。', meaning: '大聲、清楚的把文章念出來。', example: '姐姐在臺上＿＿一首詩。', options: ['朗讀', '突出', '對面', '搖籃'] },
      { id: 'cw-認', char: '認', img: 'focus-study.png', word: '認真', charMeaning: '看出來、知道。', meaning: '做事很用心，不隨便。', example: '大家都很＿＿的聽老師說話。', options: ['認真', '減少', '門口', '奇異'] },
      { id: 'cw-識', char: '識', img: 'learn-words.png', word: '識字', charMeaning: '知道、明白。', meaning: '認得字，知道字怎麼念。', example: '弟弟還沒＿＿，要聽媽媽念故事。', options: ['識字', '對面', '門口', '搖籃'] },
      { id: 'cw-謎', char: '謎', img: 'riddle-card.png', word: '謎語', charMeaning: '讓人猜的題目。', meaning: '用話說出來、讓人猜答案的題目。', example: '爺爺出了一個＿＿給我們猜。', options: ['謎語', '門口', '突出', '對面'] },
      { id: 'cw-答', char: '答', img: 'answer-sheet.png', word: '答案', charMeaning: '回話、回應。', meaning: '問題的解答。', example: '這一題的＿＿是五。', options: ['答案', '表演', '數字', '搖籃'] },
      { id: 'cw-搖', char: '搖', img: 'cradle.png', word: '搖籃', charMeaning: '左右晃動。', meaning: '可以前後晃動、給小寶寶睡的小床。', example: '小寶寶在＿＿裡睡著了。', options: ['搖籃', '答案', '題目', '朗讀'] },
      { id: 'cw-百', char: '百', img: 'many-flowers.png', word: '一百', charMeaning: '十個十。', meaning: '十個十合起來的數目。', example: '我的存錢筒裡有＿＿元。', options: ['一百', '大哥', '門口', '題目'] },
      { id: 'cw-嘴', char: '嘴', img: 'open-mouth.png', word: '嘴巴', charMeaning: '吃東西、說話的地方。', meaning: '臉上用來吃東西、說話的地方。', example: '吃飯的時候，要閉上＿＿慢慢嚼。', options: ['嘴巴', '大哥', '題目', '答案'] },
      { id: 'cw-哥', char: '哥', img: 'big-brother.png', word: '大哥', charMeaning: '比我大的男生。', meaning: '家裡排行最大的哥哥。', example: '＿＿上國中了，長得好高。', options: ['大哥', '嘴巴', '題目', '一百'] },
      { id: 'cw-數', char: '數', img: 'number-cards.png', word: '數字', charMeaning: '算多少、點多少。', meaning: '像一、二、三這樣表示多少的字。', example: '我會從一寫到十的＿＿。', options: ['數字', '嘴巴', '大哥', '謎語'] },
      { id: 'cw-題', char: '題', img: 'quiz-paper.png', word: '題目', charMeaning: '要回答的問題。', meaning: '考試或練習時要回答的問題。', example: '這次考試的＿＿不太難。', options: ['題目', '一百', '嘴巴', '表演'] },
      { id: 'cw-趕', char: '趕', img: 'run-bus.png', word: '趕上', charMeaning: '加快，追上去。', meaning: '加快腳步，沒有來不及。', example: '我跑得很快，終於＿＿了公車。', options: ['趕上', '謎語', '識字', '嘴巴'] },
      { id: 'cw-突', char: '突', img: 'dog-out-hole.png', word: '突出', charMeaning: '一下子冒出來。', meaning: '比旁邊高出來、凸出來。', example: '牆上有一顆釘子＿＿來。', options: ['突出', '趕上', '識字', '朗讀'] },
      { id: 'cw-異', char: '異', img: 'kiwi.png', word: '奇異', charMeaning: '不一樣、特別。', meaning: '很特別，和平常看到的不一樣。', example: '海底有很多＿＿的魚。', options: ['奇異', '趕上', '認真', '數字'] },
      { id: 'cw-口', char: '口', img: 'door-front.png', word: '門口', charMeaning: '嘴巴；出入的地方。', meaning: '房子大門的前面。', example: '小狗坐在＿＿等主人回家。', options: ['門口', '奇異', '認真', '一百'] },
      { id: 'cw-對', char: '對', img: 'across-street.png', word: '對面', charMeaning: '面向著；沒有錯。', meaning: '在另一邊，面對著的地方。', example: '學校的＿＿有一間書店。', options: ['對面', '門口', '奇異', '趕上'] }
    ],
    fix: [
      { id: 'fx-減', char: '減', wrong: '喊', sentence: '我學會了加法和減法。', options: ['減', '喊', '感'], clue: '變少的意思，左邊要是三點水。', explain: '要改成「減」。減法的減左邊是三點水；「喊」左邊是口，是大喊的喊。' },
      { id: 'fx-表', char: '表', wrong: '衣', sentence: '小朋友在臺上表演跳舞。', options: ['表', '衣', '麥'], clue: '給大家看的意思，上面要有三橫一豎。', explain: '要改成「表」。表演的表上面有三橫一豎；「衣」是衣服的衣。' },
      { id: 'fx-讀', char: '讀', wrong: '續', sentence: '姐姐每天晚上都在讀書。', options: ['讀', '續', '賣'], clue: '把字念出來，左邊要是言字旁。', explain: '要改成「讀」。讀書的讀左邊是言；「續」左邊是糸，是繼續的續。' },
      { id: 'fx-謎', char: '謎', wrong: '迷', sentence: '爺爺出了一個謎語給我猜。', options: ['謎', '迷', '瞇'], clue: '用說的讓人猜，左邊要有言字旁。', explain: '要改成「謎」。謎語的謎左邊有言；「迷」是迷路的迷。' },
      { id: 'fx-答', char: '答', wrong: '塔', sentence: '這一題的答案是十。', options: ['答', '塔', '搭'], clue: '問題的解法，上面要是竹字頭。', explain: '要改成「答」。答案的答上面是竹字頭；「塔」左邊是土，是高塔的塔。' },
      { id: 'fx-搖', char: '搖', wrong: '遙', sentence: '風一吹，樹枝輕輕的搖動。', options: ['搖', '遙', '謠'], clue: '晃來晃去，左邊要是提手旁。', explain: '要改成「搖」。搖動的搖左邊是提手旁；「遙」外面是辶，是很遠的意思。' },
      { id: 'fx-百', char: '百', wrong: '白', sentence: '這本書有一百頁。', options: ['百', '白', '自'], clue: '十個十，上面要多一橫。', explain: '要改成「百」。一百的百上面多一橫；「白」是白色的白。' },
      { id: 'fx-哥', char: '哥', wrong: '歌', sentence: '我的表哥很會打球。', options: ['哥', '歌', '可'], clue: '家裡比我大的男生，右邊不要有欠。', explain: '要改成「哥」。哥哥的哥是兩個可；「歌」右邊有欠，是唱歌的歌。' },
      { id: 'fx-題', char: '題', wrong: '提', sentence: '老師在黑板上寫了一個題目。', options: ['題', '提', '顏'], clue: '考試時要寫的內容，右邊要是「頁」。', explain: '要改成「題」。題目的題右邊是頁；「提」左邊是提手旁，是提東西的提。' },
      { id: 'fx-趕', char: '趕', wrong: '起', sentence: '鐘聲響了，大家趕快進教室。', options: ['趕', '起', '超'], clue: '動作要快，右邊要是「旱」。', explain: '要改成「趕」。趕快的趕右邊是旱；「起」右邊是己，是起床的起。' },
      { id: 'fx-突', char: '突', wrong: '空', sentence: '我們正在玩，突然下起大雨。', options: ['突', '空', '究'], clue: '一下子發生，下面要是「犬」。', explain: '要改成「突」。突然的突下面是犬；「空」下面是工，是天空的空。' },
      { id: 'fx-對', char: '對', wrong: '封', sentence: '我家對面有一棵大樹。', options: ['對', '封', '射'], clue: '在另一邊、面向著，左邊上面像小樹枝。', explain: '要改成「對」。對面的對左邊不是土；「封」左邊是兩個土，是信封的封。' }
    ],
    similar: [
      { id: 's1', meaning: '「＿法」是拿掉一些、算剩下多少的算法。', sentence: '十拿掉三，要用＿法算。', frame: '＿法', options: ['減', '喊'], answer: '減', clue: '提示：左邊是三點水。', explain: '答案是「減」；「喊」是大聲叫，左邊是口。' },
      { id: 's2', meaning: '「大＿」是用很大的聲音叫。', sentence: '弟弟在操場上大＿我的名字。', frame: '大＿', options: ['喊', '減'], answer: '喊', clue: '提示：要用嘴巴叫，左邊是口。', explain: '答案是「喊」；「減」是減少的減。' },
      { id: 's3', meaning: '「一＿」是十個十。', sentence: '我跳繩跳了一＿下。', frame: '一＿', options: ['百', '白'], answer: '百', clue: '提示：上面多一橫。', explain: '答案是「百」；「白」是白色的白，上面少一橫。' },
      { id: 's4', meaning: '「＿雲」是天上像棉花的雲。', sentence: '藍藍的天上飄著＿雲。', frame: '＿雲', options: ['白', '百'], answer: '白', clue: '提示：是一種顏色，上面沒有多一橫。', explain: '答案是「白」；「百」是一百的百。' },
      { id: 's5', meaning: '「＿語」是讓人猜的題目。', sentence: '爸爸出了一個＿語考我。', frame: '＿語', options: ['謎', '迷'], answer: '謎', clue: '提示：要用說的，左邊有言字旁。', explain: '答案是「謎」；「迷」是迷路的迷。' },
      { id: 's6', meaning: '「＿路」是找不到回去的路。', sentence: '小狗在森林裡＿路了。', frame: '＿路', options: ['迷', '謎'], answer: '迷', clue: '提示：沒有言字旁。', explain: '答案是「迷」；「謎」是謎語的謎。' },
      { id: 's7', meaning: '「表＿」是姑姑、阿姨家比我大的男生。', sentence: '表＿教我下棋。', frame: '表＿', options: ['哥', '歌'], answer: '哥', clue: '提示：兩個「可」疊在一起。', explain: '答案是「哥」；「歌」右邊有欠，是唱歌的歌。' },
      { id: 's8', meaning: '「唱＿」是用聲音唱出好聽的曲子。', sentence: '我們一起在教室裡唱＿。', frame: '唱＿', options: ['歌', '哥'], answer: '歌', clue: '提示：右邊有一個張開嘴的「欠」。', explain: '答案是「歌」；「哥」是哥哥的哥。' }
    ],
    listen: [
      { id: 'l1', text: '想一想題目說的是哪一個字，猜出答案。', answer: 0, options: [{ text: '猜字謎', img: 'riddle-card.png' }, { text: '表演', img: 'show-stage.png' }, { text: '搖籃', img: 'cradle.png' }, { text: '門口', img: 'door-front.png' }] },
      { id: 'l2', text: '頭往左右動一動，表示不要。', answer: 0, options: [{ text: '搖搖頭', img: 'shake-head.png' }, { text: '點頭', img: 'nod-yes.png' }, { text: '讀書', img: 'read-book.png' }, { text: '突然', img: 'thunder.png' }] },
      { id: 'l3', text: '用手在頭上抓幾下，不知道該怎麼辦。', answer: 0, options: [{ text: '抓抓頭', img: 'scratch-head.png' }, { text: '嘟著嘴', img: 'pout-kid.png' }, { text: '回答', img: 'raise-hand-answer.png' }, { text: '表演', img: 'show-stage.png' }] },
      { id: 'l4', text: '嘴巴翹起來，看起來有點不高興。', answer: 0, options: [{ text: '嘟著嘴', img: 'pout-kid.png' }, { text: '得意', img: 'proud-kid.png' }, { text: '點頭', img: 'nod-yes.png' }, { text: '讀書', img: 'read-book.png' }] },
      { id: 'l5', text: '天空一下子打雷，大家都嚇了一跳。', answer: 0, options: [{ text: '突然', img: 'thunder.png' }, { text: '得意', img: 'proud-kid.png' }, { text: '搖籃', img: 'cradle.png' }, { text: '一百', img: 'many-flowers.png' }] },
      { id: 'l6', text: '老師問問題，小朋友舉手說出答案。', answer: 0, options: [{ text: '回答', img: 'raise-hand-answer.png' }, { text: '搖搖頭', img: 'shake-head.png' }, { text: '門口', img: 'door-front.png' }, { text: '嘴巴', img: 'open-mouth.png' }] },
      { id: 'l7', text: '好多人同時說出一樣的話。', answer: 0, options: [{ text: '異口同聲', img: 'say-together.png' }, { text: '抓抓頭', img: 'scratch-head.png' }, { text: '讀書', img: 'read-book.png' }, { text: '表演', img: 'show-stage.png' }] },
      { id: 'l8', text: '小寶寶睡的小床，可以前後晃動。', answer: 0, options: [{ text: '搖籃', img: 'cradle.png' }, { text: '門口', img: 'door-front.png' }, { text: '題目', img: 'quiz-paper.png' }, { text: '奇異果', img: 'kiwi.png' }] }
    ],
    phrase: {
      pickName: '看圖選一選',
      pickSay: '看圖，選出最適合的動作，說說看他連這個動作都不做。',
      intro: { example: '動也不動', img: 'pr-cat-still.png', parts: [{ text: '動', role: '動作' }, { text: '也不' }, { text: '動', role: '同一個動作' }],
        explain: '前面和後面放同一個動作，中間加上「也不」，表示連這個動作都不做，做得很快或很堅持。' },
      pick: [
        { id: 'ph1', img: 'pr-not-look.png', before: '', join: '也不', noun: '看', ask: '什麼也不看', look: '再看看圖片，媽媽拿新衣服給弟弟，弟弟的眼睛在哪裡？', options: ['看', '跑', '唱', '飛'], clue: '提示：他的眼睛一直盯著電視，沒有轉過來。', explain: '答案是「看」，完整的短語是「看也不看」。' },
        { id: 'ph2', img: 'pr-not-eat.png', before: '', join: '也不', noun: '吃', ask: '什麼也不吃', look: '再看看圖片，盤子裡有青菜，妹妹的嘴巴怎麼了？', options: ['吃', '跳', '寫', '洗'], clue: '提示：她把嘴巴閉得緊緊的，一口都不放進去。', explain: '答案是「吃」，完整的短語是「吃也不吃」。' },
        { id: 'ph3', img: 'pr-not-ask.png', before: '', join: '也不', noun: '問', ask: '什麼也不問', look: '再看看圖片，男孩伸手拿走同學的鉛筆，他有沒有開口？', options: ['問', '吃', '睡', '跑'], clue: '提示：他沒有先說「可以借我嗎」，就直接拿走了。', explain: '答案是「問」，完整的短語是「問也不問」。' },
        { id: 'ph4', img: 'pr-not-wash.png', before: '', join: '也不', noun: '洗', ask: '什麼也不洗', look: '再看看圖片，小男孩的手髒髒的，就要拿餅乾吃。', options: ['洗', '看', '唱', '飛'], clue: '提示：他沒有先去水龍頭那裡把手弄乾淨。', explain: '答案是「洗」，完整的短語是「洗也不洗」。' }
      ],
      fill: [
        { id: 'pf1', img: 'pr-not-look.png', parts: ['看', '也不', '看'] },
        { id: 'pf2', img: 'pr-not-eat.png', parts: ['吃', '也不', '吃'] },
        { id: 'pf3', img: 'pr-not-ask.png', parts: ['問', '也不', '問'] },
        { id: 'pf4', img: 'pr-not-wash.png', parts: ['洗', '也不', '洗'] }
      ],
      say: [],
      words: [{ word: '突然', meaning: '沒想到，一下子就發生了。', img: 'thunder.png' }, { word: '異口同聲', meaning: '好幾個人一起說出一樣的話。', img: 'say-together.png' }],
      choose: [
        { id: 'pw1', word: '突然', options: ['我正在看書，燈突然熄了。', '我每天突然七點起床刷牙。'], clue: '提示：想一想，「突然」是每天都一樣的事，還是沒想到、一下子發生的事？', explain: '第一句用得對：燈沒預料的一下子熄了。每天七點起床是天天都一樣的事，不是突然。' },
        { id: 'pw2', word: '異口同聲', options: ['老師問誰想去郊遊，全班異口同聲的說：「我想去！」', '我一個人在房間裡異口同聲的唱歌。'], clue: '提示：想一想，「異口同聲」要一個人，還是好幾個人？', explain: '第一句用得對：全班一起說出同樣的話。一個人沒辦法異口同聲。' }
      ],
      make: [
        { id: 'pm1', word: '突然', clue: '提示：想想看，有沒有一件事，你沒想到，一下子就發生了？', model: '我們在公園玩，突然下起一陣大雨。' },
        { id: 'pm2', word: '異口同聲', clue: '提示：想想看，什麼時候大家會一起說出一樣的話？', model: '媽媽問晚餐想吃什麼，我和弟弟異口同聲的說：「咖哩飯！」' }
      ]
    },
    pattern: [
      { key: 'keshi', id: 'ks', title: '……可是……', img: 'keshi.png', meaning: '先說誰說了或做了什麼，再用「可是」說出跟想的不一樣的結果。',
        examples: ['妹妹說要幫忙洗碗，可是一直在玩泡泡。'],
        match: [
          { id: 'pt-ks-m1', img: 'pt-umbrella.png', front: '爸爸說今天不會下雨，', options: ['可是下午就下大雨了。', '可是變成一隻貓。', '可是去刷牙了。'], clue: '提示：看看圖片，天空下雨了沒有？', explain: '答案是「可是下午就下大雨了」：說不會下雨，結果下了。' },
          { id: 'pt-ks-m2', img: 'pt-kite-tree.png', front: '弟弟說他很會放風箏，', options: ['可是風箏卡在樹上了。', '可是長出了翅膀。', '可是吃了一碗麵。'], clue: '提示：看看圖片，風箏在哪裡？', explain: '答案是「可是風箏卡在樹上了」：說自己很會放，結果卡住了。' },
          { id: 'pt-ks-m3', img: 'pt-messy-room.png', front: '哥哥說他要整理房間，', options: ['可是一直在看漫畫。', '可是飛到月亮上。', '可是變成大象。'], clue: '提示：看看圖片，房間整理好了沒有？', explain: '答案是「可是一直在看漫畫」：說要整理，結果沒有做。' }
        ],
        conj: [
          { id: 'pt-ks-c1', full: '我想吃冰淇淋，可是店已經關門了。', img: 'pt-closed-shop.png', sentence: '我想吃冰淇淋，＿店已經關門了。', options: ['……可是……', '只要……就……', '一會兒……一會兒……'], clue: '提示：想吃，結果吃不到。數數看有幾個空格。', explain: '答案是「……可是……」：我想吃冰淇淋，可是店已經關門了。' },
          { id: 'pt-ks-c2', full: '小狗說要乖乖等，可是一下子就跑走了。', img: 'pt-dog-run.png', sentence: '小狗說要乖乖等，＿一下子就跑走了。', options: ['……可是……', '只要……就……', '一會兒……一會兒……'], clue: '提示：說要等，結果跑走了。數數看有幾個空格。', explain: '答案是「……可是……」：小狗說要乖乖等，可是一下子就跑走了。' },
          { id: 'pt-ks-c3', full: '妹妹說她不怕打針，可是一看到針就哭了。', img: 'pt-shot-cry.png', sentence: '妹妹說她不怕打針，＿一看到針就哭了。', options: ['……可是……', '只要……就……', '一會兒……一會兒……'], clue: '提示：說不怕，結果哭了。數數看有幾個空格。', explain: '答案是「……可是……」：妹妹說她不怕打針，可是一看到針就哭了。' }
        ],
        half: [
          { id: 'pt-ks-h1', front: '弟弟說他要早點睡，', clue: '提示：說要早點睡，結果做了什麼不一樣的事？記得要說「可是」。', model: '可是一直玩到很晚。' },
          { id: 'pt-ks-h2', front: '我很想去游泳，', clue: '提示：想去游泳，結果發生了什麼事？記得要說「可是」。', model: '可是外面下起大雨。' }
        ],
        whole: [
          { id: 'pt-ks-w1', clue: '提示：先說誰說了或想做什麼，再用「可是」說出跟想的不一樣的結果。', model: '姐姐說她會準時回家，可是路上塞車遲到了。' }
        ] }
    ]
  };
  if (typeof module === 'object' && module.exports) module.exports = d;
  else { root.H3A_WORDS = root.H3A_WORDS || {}; root.H3A_WORDS.L10 = d; }
})(this);
