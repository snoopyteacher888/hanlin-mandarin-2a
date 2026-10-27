/* 第 3 課字詞練習（公開、不加密）。句子和解釋都是 Claude 自己寫的，沒有課本原文。
   生字、語詞：options 的第一個是正確答案（作答時會打亂）。二年級：不放成語、修辭。 */
(function (root) {
  var d = {
    wh: [
      { id: 'wh-ren', key: '人', options: ['國王和大臣', '國王和公主', '老師和學生', '農夫和小狗'], paras: [2, 3], why: '故事裡有喜歡穿新衣的國王，還有幫國王想辦法的大臣。' },
      { id: 'wh-shi', key: '事', options: ['國王想天天穿新衣，大臣把舊衣服改成新的', '國王要去森林裡打獵', '國王舉辦一場跑步比賽', '大臣把國王的衣服全部丟掉'], paras: [1, 3], why: '國王想天天有新衣穿，大臣改舊衣服，國王也跟著一起做。' },
      { id: 'wh-time', key: '時', options: ['有一天，一直到現在', '下雨的晚上', '過年的早上', '放暑假的時候'], paras: [2, 4], why: '故事從「有一天」大臣送新衣開始，一直說到「現在」國王的改變。' },
      { id: 'wh-di', key: '地', options: ['國王住的王宮', '學校的教室', '海邊的沙灘', '公園的草地'], paras: [1, 2], why: '國王和大臣在國王住的地方做衣服，故事發生在王宮裡。' },
      { id: 'wh-wu', key: '物', options: ['衣服（袖子、衣領）', '皇冠和寶石', '書本和鉛筆', '汽車和腳踏車'], paras: [3], why: '大臣改的是國王穿過的衣服：改了袖子，加了衣領。' }
    ],
    quizLevels: { qa: 'extract', qb: 'extract', qc: 'extract', qd: 'infer', qe: 'extract', qf: 'infer', qg: 'evaluate', qh: 'interpret', k1: 'evaluate', k2: 'evaluate' },
    quizHelp: {
      qg: { think: ['故事一開始，國王少了新衣服的時候，心情怎麼樣？', '故事最後，國王做了什麼事讓自己開心？他把衣服怎麼了？'],
        why: '國王一開始只想穿新衣，沒有新衣就不開心；最後他自己動手設計衣服，找到讓自己開心的新方法，還把衣服送給大家，分享快樂。' },
      qh: { think: ['國王看到大臣改衣服，他是只在旁邊看，還是也一起做？', '一個願意自己動手、學新本領的人，是什麼樣的人？'],
        why: '國王看到大臣改衣服，自己也跟著做，後來還愛上設計衣服。所以國王是一個願意嘗試新事情的人。' }
    },
    talkChoices: {
      k1: { good: ['我會在舊衣服上縫一個可愛的小熊。', '我會把舊褲子剪短，變成短褲。'], bad: ['我會把舊衣服直接丟進垃圾桶。', '我會叫媽媽再去買很多新衣服。'],
        why: '題目問的是怎麼把舊衣服「變新」。縫上小熊、剪成短褲，都是動手改。丟掉或再買新的，都沒有把舊衣服變新。' },
      k2: { good: ['我想把我做的餅乾分享給同學吃。', '我想跟大家分享我養的小烏龜。'], bad: ['我要把好吃的餅乾藏起來，自己吃。', '我不想跟任何人說話。'],
        why: '分享是把好東西、好心情給別人一起享受。分給同學吃、介紹小烏龜都是分享；藏起來自己吃、不跟人說話，就不是分享。' }
    },
    hanzi: [
      { id: 'h-國', combo: { type: '會意字', pict: '外面的大框像國家的邊界，裡面的「或」像拿著武器守護土地。' }, char: '國', zhuyin: 'ㄍㄨㄛˊ', radical: '囗', strokes: 11, words: ['國王', '國家', '中國'], say: '國，國家的國', cloze: '＿家', img: 'flags.png', options: ['國', '圖', '園', '團'], clue: '這個字的外面是一個大框，裡面是「或」。', explain: '答案是「國」，框裡是或；「圖」是圖畫的圖，「園」是公園的園。', parts: ['囗', '或'], story: '外面的大框像國家的邊界，裡面的「或」像有人拿著武器守護土地。有土地、有人民，就是「國家」。', sentence: '我們的國家有很多高山。' },
      { id: 'h-王', combo: { type: '會意字', pict: '三橫是天、人、地，中間一豎把它們連起來。能管天下的人，就是「王」。' }, char: '王', zhuyin: 'ㄨㄤˊ', radical: '玉', strokes: 4, words: ['國王', '王子', '大王'], say: '王，國王的王', cloze: '＿子', img: 'prince.png', options: ['王', '玉', '主', '土'], clue: '這個字是三橫一豎，沒有點。', explain: '答案是「王」；「玉」右下多一點，「主」上面多一點。', parts: ['王'], story: '三橫是天、人、地，中間一豎把它們連在一起。能管理天下的人，就是「王」。國王的兒子叫「王子」。', sentence: '故事裡的王子騎著白馬。' },
      { id: 'h-喜', combo: { type: '會意字', pict: '上面像一面鼓，下面是「口」。打鼓唱歌，大家都很開心，就是「喜」。' }, char: '喜', zhuyin: 'ㄒㄧˇ', radical: '口', strokes: 12, words: ['喜歡', '歡喜', '喜事'], say: '喜，喜歡的喜', cloze: '＿歡', img: 'love-dog.png', options: ['喜', '善', '嘉', '吉'], clue: '這個字的上面像一面鼓，最下面是「口」。', explain: '答案是「喜」；「善」是善良的善，「吉」上面是士。', parts: ['壴', '口'], story: '上面像一面鼓，下面是「口」。大家打鼓、唱歌，好開心，就是「喜」。很愛一樣東西，叫做「喜歡」。', sentence: '我喜歡畫畫。' },
      { id: 'h-歡', combo: { layout: 'lr', parts: [['雚', 's', ''], ['欠', 'm', '張開嘴巴']] }, char: '歡', zhuyin: 'ㄏㄨㄢ', radical: '欠', strokes: 22, words: ['喜歡', '歡樂', '歡迎'], say: '歡，歡樂的歡', cloze: '＿樂', img: 'happy-party.png', options: ['歡', '觀', '勸', '權'], clue: '這個字的右邊是張開嘴巴的「欠」。', explain: '答案是「歡」，右邊是欠；「觀」右邊是見，「勸」右邊是力。', parts: ['雚', '欠'], story: '左邊念起來像「歡」，右邊的「欠」像一個人張開嘴巴。開心得張大嘴巴笑，就是「歡」。', sentence: '同學們拍手歡迎新老師。', build: { layout: 'lr', show: ['雚', '？'], answer: '欠', options: ['欠', '見', '力', '隹'], clue: '想一想：開心得張大嘴巴笑，右邊是哪一個部件？' } },
      { id: 'h-穿', combo: { layout: 'tb', type: '會意字', parts: [['穴', 'm', '洞'], ['牙', 'm', '牙齒']] }, char: '穿', zhuyin: 'ㄔㄨㄢ', radical: '穴', strokes: 9, words: ['穿衣服', '穿過', '穿鞋'], say: '穿，穿過的穿', cloze: '＿過', img: 'tunnel.png', options: ['穿', '窗', '究', '空'], clue: '這個字的上面是「穴」，下面是牙齒的「牙」。', explain: '答案是「穿」，下面是牙；「窗」是窗戶的窗，「空」下面是工。', parts: ['穴', '牙'], story: '上面的「穴」是洞，下面是「牙」。老鼠用牙齒咬出一個洞，從這邊到那邊，就是「穿」。把衣服套在身上，也叫「穿」。', sentence: '火車穿過長長的山洞。', build: { layout: 'tb', show: ['穴', '？'], answer: '牙', options: ['牙', '工', '心', '木'], clue: '想一想：用來咬東西的，是嘴巴裡的什麼？' } },
      { id: 'h-只', combo: { type: '會意字', pict: '上面是「口」，下面兩筆像說話時吐出的氣。' }, char: '只', zhuyin: 'ㄓˇ', radical: '口', strokes: 5, words: ['只要', '只有', '只是'], say: '只，只要的只', cloze: '＿有', img: 'last-cookie.png', options: ['只', '兄', '叭', '足'], clue: '這個字的上面是「口」，下面是一撇一點。', explain: '答案是「只」；「兄」下面是儿，「足」下面多了。', parts: ['口', '八'], story: '上面是「口」，下面兩筆像說話時吐出的氣。「只有」就是數量很少，只剩下這些。', sentence: '盤子裡只剩一塊餅乾。' },
      { id: 'h-件', combo: { layout: 'lr', type: '會意字', parts: [['亻', 'm', '人'], ['牛', 'm', '牛']] }, char: '件', zhuyin: 'ㄐㄧㄢˋ', radical: '人', strokes: 6, words: ['一件', '事件', '零件'], say: '件，一件衣服的件', cloze: '零＿', img: 'parts-box.png', options: ['件', '伴', '什', '休'], clue: '這個字的左邊是單人旁，右邊是「牛」。', explain: '答案是「件」，右邊是牛；「伴」右邊是半，「休」右邊是木。', parts: ['亻', '牛'], story: '左邊是人，右邊是牛。古時候人把牛分成一塊一塊，一塊就是一「件」。數衣服、數事情，都可以用「件」。', sentence: '媽媽送我一件新外套。', build: { layout: 'lr', show: ['亻', '？'], answer: '牛', options: ['牛', '半', '木', '十'], clue: '想一想：右邊是一種會耕田、會「哞哞」叫的動物。' } },
      { id: 'h-點', combo: { layout: 'lr', parts: [['黑', 'm', '黑色'], ['占', 's', '']] }, char: '點', zhuyin: 'ㄉㄧㄢˇ', radical: '黑', strokes: 17, words: ['一點', '點心', '點名'], say: '點，點心的點', cloze: '＿心', img: 'snack.png', options: ['點', '站', '黑', '店'], clue: '這個字的左邊是黑色的「黑」，右邊是「占」。', explain: '答案是「點」，左邊是黑；「站」左邊是立，「店」是商店的店。', parts: ['黑', '占'], story: '左邊是「黑」，右邊的「占」念起來像「點」。用黑墨水在紙上滴一小滴，就是「點」。小小的食物叫「點心」。', sentence: '下午我吃了一塊點心。', build: { layout: 'lr', show: ['？', '占'], answer: '黑', options: ['黑', '立', '口', '木'], clue: '想一想：用墨水滴一小滴，左邊是哪一個顏色的字？' } },
      { id: 'h-改', combo: { layout: 'lr', parts: [['己', 's', ''], ['攵', 'm', '手拿東西']] }, char: '改', zhuyin: 'ㄍㄞˇ', radical: '攴', strokes: 7, words: ['改正', '修改', '改變'], say: '改，改正的改', cloze: '＿正', img: 'erase-fix.png', options: ['改', '攻', '收', '放'], clue: '這個字的左邊是自己的「己」，右邊是反文。', explain: '答案是「改」，左邊是己；「攻」左邊是工，「收」左邊不一樣。', parts: ['己', '攵'], story: '左邊是「己」，右邊的「攵」像手拿著東西。用手把錯的地方變對，就是「改」。', sentence: '我把寫錯的字擦掉改正。', build: { layout: 'lr', show: ['？', '攵'], answer: '己', options: ['己', '工', '方', '口'], clue: '想一想：左邊的部件，和「記」的右邊一樣。' } },
      { id: 'h-越', combo: { type: '形聲字', pict: '左邊是「走」，表示走路、跑步；右邊念起來像「越」。跑得超過前面，就是「越過」。' }, char: '越', zhuyin: 'ㄩㄝˋ', radical: '走', strokes: 12, words: ['越來越', '越過', '越做越'], say: '越，越來越的越', cloze: '＿來越', img: 'hurdle.png', options: ['越', '趕', '超', '起'], clue: '這個字的左邊是「走」，右邊像一把斧頭。', explain: '答案是「越」；「趕」右邊是干，「起」右邊是己。', parts: ['走', '戉'], story: '左邊是「走」，右邊的「戉」念起來像「越」。跑步跳過前面的東西，叫做「越過」。', sentence: '小狗越過小水溝。' },
      { id: 'h-設', combo: { layout: 'lr', parts: [['言', 'm', '說話'], ['殳', 'm', '手拿工具']] }, char: '設', zhuyin: 'ㄕㄜˋ', radical: '言', strokes: 11, words: ['設計', '設法'], say: '設，設計的設', cloze: '＿法', img: 'find-way.png', options: ['設', '投', '沒', '說'], clue: '這個字的左邊是言字旁，右邊是「殳」。', explain: '答案是「設」；「投」左邊是提手旁，「沒」左邊是三點水。', parts: ['言', '殳'], story: '左邊是「言」，表示說話；右邊的「殳」像手拿著工具。先說好要怎麼做，再動手安排，就是「設」。', sentence: '我們一起設法把小貓救下來。', build: { layout: 'lr', show: ['？', '殳'], answer: '言', options: ['言', '扌', '氵', '木'], clue: '想一想：先用說的來安排，左邊是和說話有關的部首。' } },
      { id: 'h-計', combo: { layout: 'lr', type: '會意字', parts: [['言', 'm', '說話'], ['十', 'm', '數字']] }, char: '計', zhuyin: 'ㄐㄧˋ', radical: '言', strokes: 9, words: ['設計', '計算', '計畫'], say: '計，計算的計', cloze: '＿算', img: 'math.png', options: ['計', '針', '討', '記'], clue: '這個字的左邊是言字旁，右邊是數字「十」。', explain: '答案是「計」，右邊是十；「針」左邊是金，「記」右邊是己。', parts: ['言', '十'], story: '左邊是「言」，右邊是「十」。一邊說一邊數數，就是「計算」。', sentence: '我用手指計算有幾顆蘋果。', build: { layout: 'lr', show: ['言', '？'], answer: '十', options: ['十', '己', '寸', '干'], clue: '想一想：數數的時候會用到數字，右邊是哪一個數字？' } },
      { id: 'h-發', combo: { type: '形聲字', pict: '上面的「癶」像兩隻腳往外走，下面念起來像「發」。' }, char: '發', zhuyin: 'ㄈㄚ', radical: '癶', strokes: 12, words: ['發現', '出發', '發明'], say: '發，出發的發', cloze: '出＿', img: 'set-off.png', options: ['發', '登', '撥', '廢'], clue: '這個字的上面像兩隻腳往外走，下面有「弓」。', explain: '答案是「發」，下面有弓；「登」下面是豆，「撥」左邊多了提手旁。', parts: ['癶', '弓', '殳'], story: '上面像兩隻腳往外走，下面有「弓」，像把箭射出去。動身離開，叫做「出發」。', sentence: '我們早上七點出發去爬山。' },
      { id: 'h-方', combo: { type: '象形字', pict: '「方」像一把耕田用的鋤頭，也像四四方方的樣子。' }, char: '方', zhuyin: 'ㄈㄤ', radical: '方', strokes: 4, words: ['方法', '方向', '地方'], say: '方，方向的方', cloze: '＿向', img: 'compass.png', options: ['方', '萬', '放', '房'], clue: '這個字上面一點一橫，下面像一把彎彎的鋤頭。', explain: '答案是「方」；「放」右邊多了反文，「房」上面多了戶。', parts: ['方'], story: '「方」像一把耕田的鋤頭，也有四四方方的意思。東、西、南、北，叫做「方向」。', sentence: '請問車站在哪一個方向？' },
      { id: 'h-法', combo: { layout: 'lr', parts: [['氵', 'm', '水'], ['去', 's', '']] }, char: '法', zhuyin: 'ㄈㄚˇ', radical: '水', strokes: 8, words: ['方法', '辦法', '想法'], say: '法，辦法的法', cloze: '辦＿', img: 'idea.png', options: ['法', '去', '活', '注'], clue: '這個字的左邊是三點水，右邊是「去」。', explain: '答案是「法」，右邊是去；「活」右邊是舌，「注」右邊是主。', parts: ['氵', '去'], story: '左邊是三點水，右邊是「去」。水往低的地方流，有一定的規矩，就是「法」。做事的好主意，叫做「辦法」。', sentence: '我想到一個好辦法。', build: { layout: 'lr', show: ['氵', '？'], answer: '去', options: ['去', '舌', '主', '可'], clue: '想一想：右邊的字和「來」意思相反。' } },
      { id: 'h-分', combo: { layout: 'tb', type: '會意字', parts: [['八', 'm', '分開'], ['刀', 'm', '刀子']] }, char: '分', zhuyin: 'ㄈㄣ', radical: '刀', strokes: 4, words: ['分享', '分開', '分數'], say: '分，分開的分', cloze: '＿開', img: 'cut-cake.png', options: ['分', '今', '公', '介'], clue: '這個字的上面是「八」，下面是「刀」。', explain: '答案是「分」，下面是刀；「今」下面不一樣，「公」下面是厶。', parts: ['八', '刀'], story: '上面的「八」像東西被分成兩邊，下面是「刀」。用刀把東西切開，就是「分」。', sentence: '媽媽把蛋糕分成八塊。', build: { layout: 'tb', show: ['八', '？'], answer: '刀', options: ['刀', '力', '口', '厶'], clue: '想一想：要用什麼把蛋糕切開？' } },
      { id: 'h-享', combo: { type: '會意字', pict: '上面像一座高高的房子，下面是「子」。孩子在房子裡吃好吃的東西，就是「享受」。' }, char: '享', zhuyin: 'ㄒㄧㄤˇ', radical: '亠', strokes: 8, words: ['分享', '享受'], say: '享，分享的享', cloze: '＿受', img: 'enjoy-bath.png', options: ['享', '亨', '京', '學'], clue: '這個字的上面像房子，最下面是「子」。', explain: '答案是「享」，下面是子；「亨」下面不一樣，「京」下面是小。', parts: ['亠', '口', '子'], story: '上面像一座房子，下面是「子」。孩子在家裡吃好吃的、玩好玩的，就是「享受」。把好東西給大家一起享受，叫做「分享」。', sentence: '爸爸躺在沙發上享受音樂。' }
    ],
    vocab: [
      { id: 'v-國王', word: '國王', meaning: '一個國家最大、管理全國的人。', example: '童話故事裡的＿＿頭上戴著皇冠。', img: 'king.png', options: ['國王', '大臣', '設計', '方法'] },
      { id: 'v-大臣', word: '大臣', meaning: '幫國王管理國家事情的官員。', example: '國王請＿＿去找最好的廚師。', img: 'minister.png', options: ['大臣', '國王', '衣領', '袖子'] },
      { id: 'v-喜歡', word: '喜歡', meaning: '很愛，覺得很好。', example: '妹妹最＿＿粉紅色的裙子。', img: 'love-dog.png', options: ['喜歡', '發現', '分享', '設計'] },
      { id: 'v-滿意', word: '滿意', meaning: '覺得很好，心裡很高興。', example: '我畫好了一張圖，自己很＿＿。', img: 'thumbs-up.png', options: ['滿意', '驚喜', '動手', '分享'] },
      { id: 'v-得意', word: '得意', meaning: '覺得自己很厲害，很高興的樣子。', example: '弟弟拼好了拼圖，＿＿的笑了。', img: 'proud.png', options: ['得意', '袖子', '方法', '大臣'] },
      { id: 'v-袖子', word: '袖子', meaning: '衣服上套住手臂的地方。', example: '洗手前，先把＿＿捲起來。', img: 'sleeve.png', options: ['袖子', '衣領', '國王', '方法'] },
      { id: 'v-衣領', word: '衣領', meaning: '衣服上圍著脖子的地方。', example: '爸爸把襯衫的＿＿翻好。', img: 'collar.png', options: ['衣領', '袖子', '大臣', '驚喜'] },
      { id: 'v-驚喜', word: '驚喜', meaning: '沒有想到的好事，讓人又驚訝又高興。', example: '生日那天，同學送我一個＿＿。', img: 'surprise-gift.png', options: ['驚喜', '袖子', '方法', '國王'] },
      { id: 'v-動手', word: '動手', meaning: '自己用手去做。', example: '我們一起＿＿做風箏。', img: 'make-kite.png', options: ['動手', '發現', '喜歡', '得意'] },
      { id: 'v-設計', word: '設計', meaning: '先想好樣子，再畫出來或做出來。', example: '姐姐＿＿了一張很漂亮的卡片。', img: 'design-dress.png', options: ['設計', '分享', '得意', '大臣'] },
      { id: 'v-發現', word: '發現', meaning: '看到或找到以前不知道的東西。', example: '我在花叢裡＿＿一隻小瓢蟲。', img: 'ladybug.png', options: ['發現', '設計', '動手', '滿意'] },
      { id: 'v-方法', word: '方法', meaning: '做一件事的辦法和步驟。', example: '老師教我們記生字的好＿＿。', img: 'idea.png', options: ['方法', '袖子', '國王', '驚喜'] },
      { id: 'v-分享', word: '分享', meaning: '把好東西或快樂，和別人一起享受。', example: '我把糖果＿＿給好朋友。', img: 'share-candy.png', options: ['分享', '設計', '發現', '動手'] }
    ],
    charwords: [
      { id: 'cw-國', char: '國', img: 'flags.png', word: '國家', charMeaning: '有土地、有人民的地方。', meaning: '有土地、有人民、有政府的地方。', example: '世界上有很多不同的＿＿。', options: ['國家', '王子', '點心', '方向'] },
      { id: 'cw-王', char: '王', img: 'prince.png', word: '王子', charMeaning: '一個國家最大的人。', meaning: '國王的兒子。', example: '故事裡的＿＿救了小公主。', options: ['王子', '國家', '計算', '辦法'] },
      { id: 'cw-喜', char: '喜', img: 'love-dog.png', word: '喜歡', charMeaning: '高興、愛。', meaning: '很愛一樣東西或一件事。', example: '我很＿＿我的小狗。', options: ['喜歡', '出發', '改正', '分開'] },
      { id: 'cw-歡', char: '歡', img: 'happy-party.png', word: '歡樂', charMeaning: '開心、高興。', meaning: '快樂、開心。', example: '派對上充滿了＿＿的笑聲。', options: ['歡樂', '零件', '方向', '計算'] },
      { id: 'cw-穿', char: '穿', img: 'tunnel.png', word: '穿過', charMeaning: '從這一邊到那一邊。', meaning: '從一邊通到另一邊。', example: '我們＿＿小樹林，來到河邊。', options: ['穿過', '出發', '分開', '享受'] },
      { id: 'cw-只', char: '只', img: 'last-cookie.png', word: '只有', charMeaning: '僅僅、很少。', meaning: '就這些，沒有別的。', example: '教室裡＿＿我一個人。', options: ['只有', '越過', '計算', '點心'] },
      { id: 'cw-件', char: '件', img: 'parts-box.png', word: '零件', charMeaning: '一個一個的東西。', meaning: '組成機器的一個個小東西。', example: '爸爸用小＿＿把壞掉的玩具修好。', options: ['零件', '國家', '王子', '辦法'] },
      { id: 'cw-點', char: '點', img: 'snack.png', word: '點心', charMeaning: '小小的、少少的。', meaning: '正餐以外吃的小東西，像餅乾、蛋糕。', example: '下午肚子餓了，媽媽拿＿＿給我吃。', options: ['點心', '方向', '零件', '國家'] },
      { id: 'cw-改', char: '改', img: 'erase-fix.png', word: '改正', charMeaning: '把錯的變成對的。', meaning: '把錯的地方變成對的。', example: '寫錯字了，要趕快＿＿。', options: ['改正', '分開', '出發', '穿過'] },
      { id: 'cw-越', char: '越', img: 'hurdle.png', word: '越過', charMeaning: '跳過去、超過。', meaning: '從上面跳過去。', example: '小馬＿＿了一道矮牆。', options: ['越過', '改正', '享受', '分開'] },
      { id: 'cw-設', char: '設', img: 'design-dress.png', word: '設計', charMeaning: '安排、先想好。', meaning: '先想好樣子，再畫或做出來。', example: '我們一起＿＿班上的旗子。', options: ['設計', '計算', '點心', '零件'] },
      { id: 'cw-計', char: '計', img: 'math.png', word: '計算', charMeaning: '算數目。', meaning: '用數學的方法算出答案。', example: '我們來＿＿一共有幾個人。', options: ['計算', '設計', '王子', '歡樂'] },
      { id: 'cw-發', char: '發', img: 'set-off.png', word: '出發', charMeaning: '開始走、開始做。', meaning: '動身離開，往要去的地方走。', example: '遊覽車八點＿＿去動物園。', options: ['出發', '改正', '越過', '只有'] },
      { id: 'cw-方', char: '方', img: 'compass.png', word: '方向', charMeaning: '東、南、西、北這些位置。', meaning: '往前走時朝著的那一邊。', example: '迷路的時候，可以看指南針找＿＿。', options: ['方向', '辦法', '點心', '國家'] },
      { id: 'cw-法', char: '法', img: 'idea.png', word: '辦法', charMeaning: '做事的方式。', meaning: '解決問題的主意。', example: '鑰匙不見了，大家一起想＿＿。', options: ['辦法', '方向', '王子', '零件'] },
      { id: 'cw-分', char: '分', img: 'cut-cake.png', word: '分開', charMeaning: '把一個變成好幾份。', meaning: '把連在一起的東西拆成兩邊。', example: '老師把紅球和藍球＿＿放。', options: ['分開', '享受', '出發', '改正'] },
      { id: 'cw-享', char: '享', img: 'enjoy-bath.png', word: '享受', charMeaning: '得到好的東西、感覺很舒服。', meaning: '舒舒服服的過，覺得很快樂。', example: '泡在溫泉裡，好＿＿喔！', options: ['享受', '分開', '越過', '計算'] }
    ],
    fix: [
      { id: 'fx-國', char: '國', wrong: '圖', sentence: '我們的國家很美麗。', options: ['國', '圖', '園'], clue: '有土地、有人民的地方，框裡面是「或」。', explain: '要改成「國」。國家的國框裡是或；「圖」是圖畫的圖。' },
      { id: 'fx-王', char: '王', wrong: '玉', sentence: '小王子住在城堡裡。', options: ['王', '玉', '主'], clue: '皇帝的兒子，這個字三橫一豎，沒有點。', explain: '要改成「王」。王子的王是三橫一豎；「玉」多了一點。' },
      { id: 'fx-歡', char: '歡', wrong: '觀', sentence: '大家拍手歡迎新同學。', options: ['歡', '觀', '勸'], clue: '開心的迎接，右邊是張開嘴巴的「欠」。', explain: '要改成「歡」。歡迎的歡右邊是欠；「觀」右邊是見。' },
      { id: 'fx-穿', char: '穿', wrong: '窗', sentence: '天氣冷，記得穿外套。', options: ['穿', '窗', '空'], clue: '把衣服套在身上，下面是牙齒的「牙」。', explain: '要改成「穿」。穿的下面是牙；「窗」是窗戶的窗。' },
      { id: 'fx-點', char: '點', wrong: '站', sentence: '老師在上課前點名。', options: ['點', '站', '店'], clue: '叫名字看人有沒有到，左邊是「黑」。', explain: '要改成「點」。點名的點左邊是黑；「站」左邊是立。' },
      { id: 'fx-改', char: '改', wrong: '攻', sentence: '這件衣服太長，要修改一下。', options: ['改', '攻', '收'], clue: '把它變得不一樣，左邊是自己的「己」。', explain: '要改成「改」。修改的改左邊是己；「攻」左邊是工。' },
      { id: 'fx-設', char: '設', wrong: '投', sentence: '她設計了一件好看的裙子。', options: ['設', '投', '說'], clue: '先想好樣子再做出來，左邊是言字旁。', explain: '要改成「設」。設計的設左邊是言；「投」左邊是提手旁。' },
      { id: 'fx-計', char: '計', wrong: '針', sentence: '我們來計算一下要買幾顆蘋果。', options: ['計', '針', '記'], clue: '算數目，左邊是言字旁，右邊是數字。', explain: '要改成「計」。計算的計左邊是言；「針」左邊是金，是縫衣服的針。' },
      { id: 'fx-發', char: '發', wrong: '登', sentence: '早上六點，我們出發去海邊。', options: ['發', '登', '撥'], clue: '動身離開，下面有一把「弓」。', explain: '要改成「發」。出發的發下面有弓；「登」下面是豆。' },
      { id: 'fx-法', char: '法', wrong: '活', sentence: '你有沒有好辦法？', options: ['法', '活', '去'], clue: '解決問題的主意，右邊是「去」。', explain: '要改成「法」。辦法的法右邊是去；「活」右邊是舌。' },
      { id: 'fx-分', char: '分', wrong: '今', sentence: '我把餅乾分給弟弟一半。', options: ['分', '今', '公'], clue: '把東西切開給別人，下面是「刀」。', explain: '要改成「分」。分的下面是刀；「今」是今天的今。' },
      { id: 'fx-享', char: '享', wrong: '亨', sentence: '我和同學分享我的故事書。', options: ['享', '亨', '京'], clue: '一起快樂的用，下面是「子」。', explain: '要改成「享」。分享的享下面是子；「亨」下面不一樣。' }
    ],
    similar: [
      { id: 's1', meaning: '「國＿」是一個國家最大的人。', sentence: '國＿戴著金色的皇冠。', frame: '國＿', options: ['王', '玉'], answer: '王', clue: '提示：三橫一豎，沒有點。', explain: '答案是「王」；「玉」右下多一點。' },
      { id: 's2', meaning: '「＿米」是黃黃的、一粒一粒的食物。', sentence: '我最愛吃烤＿米。', frame: '＿米', options: ['玉', '王'], answer: '玉', clue: '提示：右下多了一點。', explain: '答案是「玉」；「王」是國王的王。' },
      { id: 's3', meaning: '「＿迎」是開心的迎接別人。', sentence: '大家拍手＿迎新老師。', frame: '＿迎', options: ['歡', '觀'], answer: '歡', clue: '提示：右邊是張開嘴巴的「欠」。', explain: '答案是「歡」；「觀」是觀察的觀，右邊是見。' },
      { id: 's4', meaning: '「＿察」是仔細的看。', sentence: '我們用放大鏡＿察螞蟻。', frame: '＿察', options: ['觀', '歡'], answer: '觀', clue: '提示：右邊是看見的「見」。', explain: '答案是「觀」；「歡」是歡迎的歡。' },
      { id: 's5', meaning: '「＿算」是算數目。', sentence: '請＿算一共要付多少錢。', frame: '＿算', options: ['計', '針'], answer: '計', clue: '提示：左邊是言字旁。', explain: '答案是「計」；「針」是縫衣服的針，左邊是金。' },
      { id: 's6', meaning: '「別＿」是可以把東西別在衣服上的小東西。', sentence: '我用別＿把名牌別在衣服上。', frame: '別＿', options: ['針', '計'], answer: '針', clue: '提示：和金屬有關，左邊是金字旁。', explain: '答案是「針」；「計」是計算的計。' },
      { id: 's7', meaning: '「修＿」是把東西變得不一樣、變得更好。', sentence: '這篇作文還要再修＿。', frame: '修＿', options: ['改', '攻'], answer: '改', clue: '提示：左邊是自己的「己」。', explain: '答案是「改」；「攻」是攻打的攻，左邊是工。' },
      { id: 's8', meaning: '「＿打」是打仗時向前打過去。', sentence: '小兵們向城堡＿打過去。', frame: '＿打', options: ['攻', '改'], answer: '攻', clue: '提示：左邊是工人的「工」。', explain: '答案是「攻」；「改」是改正的改。' }
    ],
    listen: [
      { id: 'l1', text: '一個國家最大的人，頭上戴著皇冠。', answer: 0, options: [{ text: '國王', img: 'king.png' }, { text: '大臣', img: 'minister.png' }, { text: '王子', img: 'prince.png' }, { text: '廚師', img: 'snack.png' }] },
      { id: 'l2', text: '衣服上套住手臂的地方。', answer: 0, options: [{ text: '袖子', img: 'sleeve.png' }, { text: '衣領', img: 'collar.png' }, { text: '點心', img: 'snack.png' }, { text: '零件', img: 'parts-box.png' }] },
      { id: 'l3', text: '衣服上圍著脖子的地方。', answer: 0, options: [{ text: '衣領', img: 'collar.png' }, { text: '袖子', img: 'sleeve.png' }, { text: '方向', img: 'compass.png' }, { text: '國家', img: 'flags.png' }] },
      { id: 'l4', text: '先想好衣服的樣子，再把它畫出來。', answer: 0, options: [{ text: '設計', img: 'design-dress.png' }, { text: '計算', img: 'math.png' }, { text: '出發', img: 'set-off.png' }, { text: '分開', img: 'cut-cake.png' }] },
      { id: 'l5', text: '把好吃的糖果分給好朋友一起吃。', answer: 0, options: [{ text: '分享', img: 'share-candy.png' }, { text: '發現', img: 'ladybug.png' }, { text: '改正', img: 'erase-fix.png' }, { text: '穿過', img: 'tunnel.png' }] },
      { id: 'l6', text: '在草叢裡找到一隻小瓢蟲。', answer: 0, options: [{ text: '發現', img: 'ladybug.png' }, { text: '分享', img: 'share-candy.png' }, { text: '設計', img: 'design-dress.png' }, { text: '享受', img: 'enjoy-bath.png' }] },
      { id: 'l7', text: '打開禮物，沒想到是我最想要的玩具。', answer: 0, options: [{ text: '驚喜', img: 'surprise-gift.png' }, { text: '得意', img: 'proud.png' }, { text: '方法', img: 'idea.png' }, { text: '袖子', img: 'sleeve.png' }] },
      { id: 'l8', text: '用剪刀和膠水，自己做一個風箏。', answer: 0, options: [{ text: '動手', img: 'make-kite.png' }, { text: '國王', img: 'king.png' }, { text: '方向', img: 'compass.png' }, { text: '點心', img: 'snack.png' }] }
    ],
    phrase: {
      pickName: '看圖選一選',
      pickSay: '看圖，選出最適合的詞，說說看越來越怎麼樣。',
      intro: { example: '越跑越快', img: 'pr-run-fast.png', parts: [{ text: '越' }, { text: '跑', role: '做什麼' }, { text: '越' }, { text: '快', role: '怎麼樣' }],
        explain: '「越」說兩次：第一個「越」後面說做什麼，第二個「越」後面說變得怎麼樣。表示一直做，就一直變化。' },
      pick: [
        { id: 'ph1', img: 'pr-eat-more.png', before: '越吃越', join: '', noun: '。', ask: '越吃越怎麼樣', look: '再看看圖片，小豬一直吃，肚子變成什麼樣子？', options: ['胖', '瘦', '冷', '小'], clue: '提示：牠的肚子圓滾滾，一直變大。', explain: '答案是「胖」，完整的短語是「越吃越胖」。' },
        { id: 'ph2', img: 'pr-tree-grow.png', before: '越長越', join: '', noun: '。', ask: '越長越怎麼樣', look: '再看看圖片，小樹一年一年長大，變得怎麼樣？', options: ['高', '矮', '短', '慢'], clue: '提示：它比屋頂還要上面了。', explain: '答案是「高」，完整的短語是「越長越高」。' },
        { id: 'ph3', img: 'pr-rain-heavy.png', before: '越下越', join: '', noun: '。', ask: '越下越怎麼樣', look: '再看看圖片，雨一直下，雨點變得怎麼樣？', options: ['大', '小', '乾', '輕'], clue: '提示：雨點又多又重，地上積了好多水。', explain: '答案是「大」，完整的短語是「越下越大」。' },
        { id: 'ph4', img: 'pr-balloon-fly.png', before: '越飛越', join: '', noun: '。', ask: '越飛越怎麼樣', look: '再看看圖片，氣球一直往上飛，離地面怎麼樣？', options: ['遠', '近', '重', '胖'], clue: '提示：氣球變得小小的，快要看不見了。', explain: '答案是「遠」，完整的短語是「越飛越遠」。' },
        { id: 'ph5', img: 'pr-snowball.png', before: '越滾越', join: '', noun: '。', ask: '越滾越怎麼樣', look: '再看看圖片，雪球在雪地上一直滾，變得怎麼樣？', options: ['大', '小', '瘦', '輕'], clue: '提示：雪球黏了好多雪，比小朋友還要高。', explain: '答案是「大」，完整的短語是「越滾越大」。' },
        { id: 'ph6', img: 'pr-write-better.png', before: '越寫越', join: '', noun: '。', ask: '越寫越怎麼樣', look: '再看看圖片，小朋友每天練習寫字，字變得怎麼樣？', options: ['漂亮', '難看', '髒亂', '歪斜'], clue: '提示：字一筆一畫都很整齊，老師給他一個大大的讚。', explain: '答案是「漂亮」，完整的短語是「越寫越漂亮」。' }
      ],
      fill: [
        { id: 'pf1', img: 'pr-eat-more.png', parts: ['越', '吃', '越', '胖'] },
        { id: 'pf2', img: 'pr-tree-grow.png', parts: ['越', '長', '越', '高'] },
        { id: 'pf3', img: 'pr-rain-heavy.png', parts: ['越', '下', '越', '大'] },
        { id: 'pf4', img: 'pr-balloon-fly.png', parts: ['越', '飛', '越', '遠'] },
        { id: 'pf5', img: 'pr-write-better.png', parts: ['越', '寫', '越', '漂亮'] }
      ],
      say: [],
      words: [],
      choose: [],
      make: [],
      phrase2: {
        intro: { example: '小狗喜歡追球', img: 'pz-dog-ball.png', parts: [{ text: '小狗', role: '誰' }, { text: '喜歡' }, { text: '追球', role: '做什麼' }],
          explain: '先說是誰，加上「喜歡」，再說他喜歡做什麼事。' },
        pick: [
          { id: 'p2-pz1', img: 'pz-fishing.png', before: '爺爺喜歡', join: '', noun: '。', ask: '爺爺喜歡做什麼', look: '再看看圖片，爺爺坐在河邊，手裡拿著什麼？', options: ['釣魚', '跳舞', '溜冰', '盪秋千'], clue: '提示：他拿著一根長長的竿子，等水裡的東西上鉤。', explain: '答案是「釣魚」，完整的句子是「爺爺喜歡釣魚」。' },
          { id: 'p2-pz2', img: 'pz-cat-sleep.png', before: '小貓喜歡', join: '', noun: '。', ask: '小貓喜歡做什麼', look: '再看看圖片，小貓躺在陽光下，眼睛閉起來。', options: ['睡覺', '游泳', '寫字', '唱歌'], clue: '提示：牠縮成一團，呼嚕呼嚕的打呼。', explain: '答案是「睡覺」，完整的句子是「小貓喜歡睡覺」。' },
          { id: 'p2-pz3', img: 'pz-sister-paint.png', before: '姐姐喜歡', join: '', noun: '。', ask: '姐姐喜歡做什麼', look: '再看看圖片，姐姐拿著彩色筆和圖畫紙。', options: ['畫畫', '洗碗', '跑步', '睡覺'], clue: '提示：她在紙上塗出好多顏色。', explain: '答案是「畫畫」，完整的句子是「姐姐喜歡畫畫」。' },
          { id: 'p2-pz4', img: 'pz-dad-cook.png', before: '爸爸喜歡', join: '', noun: '。', ask: '爸爸喜歡做什麼', look: '再看看圖片，爸爸在廚房拿著鍋鏟。', options: ['煮飯', '看書', '游泳', '跳繩'], clue: '提示：鍋子裡香香的，等一下全家要吃。', explain: '答案是「煮飯」，完整的句子是「爸爸喜歡煮飯」。' }
        ],
        fill: [
          { id: 'pz1', img: 'pz-fishing.png', parts: ['爺爺', '喜歡', '釣魚'] },
          { id: 'pz2', img: 'pz-cat-sleep.png', parts: ['小貓', '喜歡', '睡覺'] },
          { id: 'pz3', img: 'pz-sister-paint.png', parts: ['姐姐', '喜歡', '畫畫'] },
          { id: 'pz4', img: 'pz-dad-cook.png', parts: ['爸爸', '喜歡', '煮飯'] }
        ]
      }
    },
    pattern: [
      { key: 'zhiyao', id: 'zy', title: '只要……就……', img: 'zhiyao.png', meaning: '先用「只要」說一件要做到的事，再用「就」說做到以後會有的結果。',
        examples: ['只要按下開關，電燈就會亮。'],
        match: [
          { id: 'pt-zy-m1', img: 'pt-water-flower.png', front: '只要每天幫花澆水，', options: ['花就會開得好美。', '花就會飛走。', '花就會唱歌。'], clue: '提示：看看圖片，花喝了水會怎麼樣？', explain: '答案是「花就會開得好美」：每天澆水，花就長得好。' },
          { id: 'pt-zy-m2', img: 'pt-sleep-early.png', front: '只要早一點睡覺，', options: ['明天就不會遲到。', '明天就會下雪。', '明天就變成大人。'], clue: '提示：早點睡，第二天早上會怎麼樣？', explain: '答案是「明天就不會遲到」：早點睡，就能早點起床。' },
          { id: 'pt-zy-m3', img: 'pt-dog-door.png', front: '小狗只要聽到開門的聲音，', options: ['就會跑過來搖尾巴。', '就會變成小貓。', '就會去寫功課。'], clue: '提示：看看圖片，主人回家時小狗做什麼？', explain: '答案是「就會跑過來搖尾巴」：聽到開門聲，小狗就跑來迎接。' }
        ],
        conj: [
          { id: 'pt-zy-c1', full: '只要多喝水，身體就會更健康。', img: 'pt-drink.png', sentence: '＿＿多喝水，身體＿會更健康。', options: ['只要……就……', '……卻……', '一會兒……一會兒……'], clue: '提示：做了一件事，就會有好結果。數數看有幾個空格。', explain: '答案是「只要……就……」：只要多喝水，身體就會更健康。' },
          { id: 'pt-zy-c2', full: '只要大家一起打掃，教室就會很乾淨。', img: 'pt-clean-class.png', sentence: '＿＿大家一起打掃，教室＿會很乾淨。', options: ['只要……就……', '……卻……', '一會兒……一會兒……'], clue: '提示：大家做到一件事，教室就會變乾淨。數數看有幾個空格。', explain: '答案是「只要……就……」：只要大家一起打掃，教室就會很乾淨。' },
          { id: 'pt-zy-c3', full: '只要天氣好，我們就去公園野餐。', img: 'pt-picnic.png', sentence: '＿＿天氣好，我們＿去公園野餐。', options: ['只要……就……', '……卻……', '一會兒……一會兒……'], clue: '提示：天氣好，就去做一件事。數數看有幾個空格。', explain: '答案是「只要……就……」：只要天氣好，我們就去公園野餐。' }
        ],
        half: [
          { id: 'pt-zy-h1', front: '只要每天練習跳繩，', clue: '提示：每天練習，會有什麼好結果？記得要說「就」。', model: '就能跳得越來越多下。' },
          { id: 'pt-zy-h2', front: '只要看到妹妹哭，', clue: '提示：看到妹妹哭，你會做什麼？記得要說「就」。', model: '我就會去抱抱她。' }
        ],
        whole: [
          { id: 'pt-zy-w1', clue: '提示：先用「只要」說一件要做到的事，再用「就」說會有的結果。想想看：你想學會什麼？要怎麼做？', model: '只要我認真練習，就一定能學會騎腳踏車。' }
        ] }
    ]
  };
  if (typeof module === 'object' && module.exports) module.exports = d;
  else { root.H3A_WORDS = root.H3A_WORDS || {}; root.H3A_WORDS.L03 = d; }
})(this);
