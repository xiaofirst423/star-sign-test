const DIMENSIONS = [
  { key: 'EI', name: '第一位', options: [['E', '外向'], ['I', '内向']] },
  { key: 'SN', name: '第二位', options: [['S', '实感'], ['N', '直觉']] },
  { key: 'TF', name: '第三位', options: [['T', '思考'], ['F', '情感']] },
  { key: 'JP', name: '第四位', options: [['J', '判断'], ['P', '感知']] },
];

const ZODIACS = [
  { name: '白羊座', symbol: '♈', dates: '03.21–04.19', element: 'fire' },
  { name: '金牛座', symbol: '♉', dates: '04.20–05.20', element: 'earth' },
  { name: '双子座', symbol: '♊', dates: '05.21–06.21', element: 'air' },
  { name: '巨蟹座', symbol: '♋', dates: '06.22–07.22', element: 'water' },
  { name: '狮子座', symbol: '♌', dates: '07.23–08.22', element: 'fire' },
  { name: '处女座', symbol: '♍', dates: '08.23–09.22', element: 'earth' },
  { name: '天秤座', symbol: '♎', dates: '09.23–10.23', element: 'air' },
  { name: '天蝎座', symbol: '♏', dates: '10.24–11.22', element: 'water' },
  { name: '射手座', symbol: '♐', dates: '11.23–12.21', element: 'fire' },
  { name: '摩羯座', symbol: '♑', dates: '12.22–01.19', element: 'earth' },
  { name: '水瓶座', symbol: '♒', dates: '01.20–02.18', element: 'air' },
  { name: '双鱼座', symbol: '♓', dates: '02.19–03.20', element: 'water' },
];

const RESULTS = {
  fire_NT: {
    weather: 'sunbreak', weatherName: '破云日光', temperature: 26,
    weatherTag: '云隙生光 · 空气清透',
    scene: '厚云在屋脊上方裂开一道窄缝，清亮的日光顺着青瓦慢慢挪上白墙。雨后的石阶先亮了一角，墙根浅水也映出半截透亮的天空。',
    closingScene: '云缝里的光走得很慢，一点点晒干潮湿的石阶。心里的事也是如此，安静坐下来等一等，遮住视线的云雾自会散开。',
  },
  fire_NF: {
    weather: 'copper-breeze', weatherName: '橘子晚霞', temperature: 27,
    weatherTag: '霞光满檐 · 晚风温软',
    scene: '天边漫开温厚的橘粉霞光，对街木窗折进一束暖亮，轻轻落在桌沿。晚风穿过小巷，街对面的暖黄路灯在暮色里一盏盏亮起。',
    closingScene: '白日匆忙的脚步，总会被满天晚霞轻轻劝慢。一天里哪怕只有这片刻什么都不追赶，也已经足够温柔。',
  },
  fire_SJ: {
    weather: 'warm-roof-cloud', weatherName: '暖云低垂', temperature: 22,
    weatherTag: '暮云柔和 · 檐灯初亮',
    scene: '蓬松的云层低贴着屋顶，小巷比往常更早安静下来。檐下暖灯已亮，西边天际留着一条窄窄的琥珀亮边，空气温吞而安稳。',
    closingScene: '暮云低垂时没有刺眼的光，檐下那盏暖灯却格外清楚。最让人安心的，莫过于天快黑时总有一盏灯稳稳亮着。',
  },
  fire_SP: {
    weather: 'copper-breeze', weatherName: '热风晚霞', temperature: 29,
    weatherTag: '余温未散 · 霞色鲜活',
    scene: '太阳刚落到屋脊后，绕进巷口的晚风还带着白日晒透的余温。白纱帘被掀起一角，露出远处瓦顶鲜亮的红霞与摇晃的树影。',
    closingScene: '日落后的晚风里还留着阳光的余温，吹在身上松快自在。日子不必时刻紧绷，趁霞光还在，去风里走走就是顶好的事。',
  },
  earth_NT: {
    weather: 'cloud', weatherName: '山间薄雾', temperature: 16,
    weatherTag: '雾漫远山 · 清凉静谧',
    scene: '乳白的薄雾顺着半山腰慢慢拢下，柔化了远处的屋脊与巷口。窗外枝叶洗得干净，叶尖悬着一滴透亮的水珠，四周格外静谧。',
    closingScene: '山雾漫上来时，远处的嘈杂退得很远。人偶尔也需要这样一段不被催促的留白，让纷杂的念头慢慢落回原处。',
  },
  earth_NF: {
    weather: 'dawn-drizzle', weatherName: '檐外细雨', temperature: 18,
    weatherTag: '细雨润物 · 草木清香',
    scene: '细雨无声地润湿了整条青石巷，老屋瓦沿的青苔愈发翠绿。对街半开的窗口飘出一缕温热白气，慢慢融进带着草木香的微雨里。',
    closingScene: '细雨不声不响，却把满巷草木都洗得鲜亮。生活里真正滋养人的瞬间也是这样，安静无声，却能把倦意轻轻抚平。',
  },
  earth_SJ: {
    weather: 'snow', weatherName: '窗外初雪', temperature: 3,
    weatherTag: '初雪轻落 · 屋内融暖',
    scene: '初雪轻轻贴上窗玻璃化作水珠，对街青瓦屋檐先白了浅浅一道。暖黄路灯照着缓步走过的行人，一扇木窗把寒意稳稳隔在外头。',
    closingScene: '初雪落下时，连路人的脚步都放轻了。平时总觉得不停赶路才踏实，其实在暖屋里静看片刻落雪，心也就跟着安稳下来。',
  },
  earth_SP: {
    weather: 'sun', weatherName: '午后碎金', temperature: 24,
    weatherTag: '晴光穿叶 · 暖意融融',
    scene: '温煦的阳光从半敞的木门斜铺进来，一路漫到窗边桌角。树叶随风轻晃，桌面光斑碎成几片金影，连手背都被晒得暖洋洋的。',
    closingScene: '平时总觉得日子推着人往前赶，偶尔像这样拐进街角，看一会儿树影从门槛挪到桌边，缠在心头的事不知不觉就松快了。',
  },
  air_NT: {
    weather: 'wind', weatherName: '雨后阵风', temperature: 21,
    weatherTag: '雨歇风起 · 天色澄明',
    scene: '阵雨刚停，巷尾高树哗啦响起，清风翻开湿润的叶片，水珠清脆落在石板上。屋檐外的云层迅速散开，透出大片澄明的亮色。',
    closingScene: '雨后清风把午后的闷气一扫而空，天色顿时澄明。许多琐事其实也禁不起一阵好风吹，推门透口气，心里自然就敞亮了。',
  },
  air_NF: {
    weather: 'day-cloud', weatherName: '浅云漫过', temperature: 19,
    weatherTag: '云影舒卷 · 天光柔和',
    scene: '两排老屋檐间留着一方干净蓝天，蓬松的白云慢悠悠飘过。白墙暗了短短几秒又重新亮回来，云边被高处的微风吹散成薄纱。',
    closingScene: '抬头看浅云漫过屋檐时，会发觉时间并没有那么急迫。墙面暗一会儿总会再亮回来，心头掠过的微云也是如此。',
  },
  air_SJ: {
    weather: 'wind', weatherName: '穿堂微风', temperature: 23,
    weatherTag: '清风穿堂 · 白帘轻晃',
    scene: '温和的风从店门溜进来，托起窗边的白纱帘，露出外头洗净的绿树与街景。空气里满是雨后草木的清爽，吹在脸上不凉也不闷。',
    closingScene: '穿堂微风吹进来的那一刻，静了一下午的屋子顿时鲜活起来。有时候人需要的也不过是一阵刚好的风，吹散攒了一天的疲惫。',
  },
  air_SP: {
    weather: 'violet-breeze', weatherName: '起风的紫暮', temperature: 25,
    weatherTag: '暮色微醺 · 晚风自在',
    scene: '日落后的天空留着一层淡紫，对街小店亮起暖黄灯火。白纱帘在晚风里轻轻鼓起，若隐若现地映着外头的灯影与树声。',
    closingScene: '昼夜交接的这片刻，天边紫暮柔和，连风都慢了半拍。把白天没做完的计较留在身后吧，傍晚本就属于散步与吹风。',
  },
  water_NT: {
    weather: 'rain', weatherName: '静夜蓝雨', temperature: 17,
    weatherTag: '夜雨静谧 · 灯影温柔',
    scene: '暮色沉下后，雨幕泛着静谧的深蓝。撑伞的人从街灯下走过，水洼里的暖黄倒影散开又聚拢，规律的雨声替世界拉上安心的帘幕。',
    closingScene: '夜雨把街巷的喧闹轻轻隔在窗外。在这样不被打扰的时刻，终于不用急着回应任何人，只需安安静静和自己待一会儿。',
  },
  water_NF: {
    weather: 'moon-rain', weatherName: '月下细雨', temperature: 18,
    weatherTag: '薄云映月 · 细雨如丝',
    scene: '月亮隔着薄云透出温润微光，玻璃上的细雨慢慢滑落，并作一道清亮水痕。顺着水痕望去，月色依旧安静地停在老屋檐上。',
    closingScene: '薄云后的月光虽不耀眼，隔着雨丝望去却让人格外平静。哪怕在微雨朦胧的夜晚，抬头也总能找到属于今晚的那一点亮。',
  },
  water_SJ: {
    weather: 'harbor-fog', weatherName: '低云靠岸', temperature: 19,
    weatherTag: '水雾轻拢 · 万物安然',
    scene: '温润雾气从水面漫上来，远街隐入朦胧，靠窗的枝条随风轻碰玻璃。雾把远方的匆忙挡在外头，只留眼前这一方安心天地。',
    closingScene: '雾气漫起时，太远的地方暂时隐去，眼前的木窗与灯光反而格外清晰。日子不必一眼望到尽头，把当下过安稳就很好。',
  },
  water_SP: {
    weather: 'sunshower', weatherName: '轻快太阳雨', temperature: 24,
    weatherTag: '晴雨交织 · 水光跃动',
    scene: '太阳忽然从云后钻出，细密的雨线被照得根根发亮，像银丝在檐外跳跃。地面水洼漾着细圈，白墙边却已晒得透亮鲜活。',
    closingScene: '一边落雨一边出太阳的天气，总让人会心一笑。生活里措手不及的小插曲，换个眼光看过去，往往也藏着意想不到的明亮。',
  },
};

const LIFE_REFLECTIONS = {
  ISTJ: '把经手的事一件件落到实处，本就是一种沉静的力量；只是稳步前行时，也不妨偶尔像这样停下来歇口气。回去路上慢慢走，愿今晚踏实好眠。',
  ISFJ: '记得旁人随口提过的话、把日常经营得妥帖温暖，是很珍贵的心意。照顾周遭之余，也别忘了把同样的耐心留给自己，愿今夜温柔安稳。',
  INFJ: '在这个匆忙的世界里，还愿意安静倾听、体会细微的心意，十分难得。心头的事不必急着找齐所有答案，趁晚风柔和，带着一身松快归去吧。',
  INTJ: '心里有方向、不被嘈杂轻易带偏，让人走得很稳；但生活除了远方，也容得下几场微雨和无目的的停顿。放平思绪，推门去吹吹清爽的晚风吧。',
  ISTP: '面对变化不慌不忙、看清眼前的路再动手去试，是一份难得的松弛。日子本就不必紧绷，留足自由呼吸的空隙，处处都是从容与自在。',
  ISFP: '能为一束桌角的光、一杯温茶、一阵清风而真心欢喜，是生活给人的好本领。不必迎合匆忙的节拍，按自己舒服的心意慢慢走就很好。',
  INFP: '那些细腻的感受，以及为一片晚霞驻足的时刻，正是让日子有温度的地方。不用勉强适应喧闹的标准，愿今晚归途的灯火让你觉得心安。',
  INTP: '在人人都急着找现成答案时，还能保有一份安静琢磨的好奇心，是很纯粹的自由。偶尔发发呆、让念头随风飘一会儿，心里反而更澄澈。',
  ESTP: '无论晴雨都能顺势找到当下的乐趣、干脆迈步去体验，总能让平凡日子生出光彩。静歇半晌之后，趁着夜色温和，带着好心情重新出发吧。',
  ESFP: '把心放在眼前的热茶、好风景与值得分享的人身上，不替未发生的事徒增烦恼，是很通透的智慧。街灯已亮，愿今晚每一刻都轻松舒展。',
  ENFP: '对未见过的风景和故事保有敞开的热忱，会让寻常日子多出许多可能。不必把未来提前写满，顺着好奇心往前走，转角自有好风光。',
  ENTP: '不拘泥于惯例、总能从日常小事里看出新鲜趣味，会让日子格外开阔。喝完这杯热茶，外头的风已吹散闷意，愿今晚的夜路清朗惬意。',
  ESTJ: '把纷繁的事理出条理、把日子过得踏实可靠，是一份让人信服的担当。只是再有序的生活也值得留出几段清闲傍晚，放下待办去吹吹风吧。',
  ESFJ: '人与人之间最朴素的暖意，就藏在一句自然问候和彼此记挂的分寸里。今晚也请把这份体贴分一半给自己，慢慢走回去，愿一夜舒心安逸。',
  ENFJ: '愿意用真诚与耐心去陪伴别人，是很温柔的力量；而长久的好关系，也离不开先把自己照顾得松弛舒展。放下牵挂，享受今晚的微风吧。',
  ENTJ: '看准目标便果断前行，这份笃定总能带你看见辽阔风景；而赶路间隙停下来看一场雨落晚霞，同样不可或缺。今晚不妨放慢脚步，静享归途。',
};

const CHAPTERS = [
  { name: '南门外 · 初进小店', weather: 'sun' },
  { name: '窗边 · 听雨饮茶', weather: 'rain' },
  { name: '店里 · 风来云散', weather: 'wind' },
];

const QUESTIONS = [
  {
    chapter: 0,
    dimension: 'EI',
    secondaryDimension: 'JP',
    scene: '推门',
    prompt: '难得空出半天，阳光正落在小店靠窗的木桌上。',
    question: '这段不用赶时间的空白，你想怎么过？',
    options: [
      { score: -2, secondaryScore: -1, text: '一个人静坐放空，什么都不去安排' },
      { score: -1, secondaryScore: 1, text: '安安静静看会儿书，理一理近期的思绪' },
      { score: 2, secondaryScore: -1, text: '发消息问问老友，刚好有空就来坐坐' },
      { score: 1, secondaryScore: 1, text: '把小店记下来，约朋友周末专门一起来' },
    ],
  },
  {
    chapter: 0,
    dimension: 'SN',
    secondaryDimension: 'TF',
    scene: '落座',
    prompt: '在窗边坐定，抬眼望见远处山腰漫起一层薄雾。',
    question: '走进安静的地方，什么最先打动你？',
    options: [
      { score: 2, secondaryScore: -1, text: '温润的木桌与柔光，让身体先放松下来' },
      { score: 1, secondaryScore: 1, text: '干净妥帖的陈设，每样物件都恰到好处' },
      { score: -2, secondaryScore: -1, text: '薄雾漫过屋脊，勾起很久以前的某段记忆' },
      { score: -1, secondaryScore: 1, text: '翻看桌上的留言册，好奇陌生人的故事' },
    ],
  },
  {
    chapter: 1,
    dimension: 'JP',
    secondaryDimension: 'SN',
    scene: '遇雨',
    prompt: '屋檐忽然飘起细雨，原本待会儿的安排怕要耽搁。',
    question: '遇上计划外的小插曲，你通常会怎么想？',
    options: [
      { score: 2, secondaryScore: 1, text: '重新排一下先后，把能改期的事挪开' },
      { score: 1, secondaryScore: -1, text: '既然出不去，正好趁整块时间专注做点事' },
      { score: -2, secondaryScore: 1, text: '顺其自然先看雨，等雨小了再决定去哪' },
      { score: -1, secondaryScore: -1, text: '悄悄松口气，这场雨刚好给了停下的理由' },
    ],
  },
  {
    chapter: 1,
    dimension: 'TF',
    secondaryDimension: 'EI',
    scene: '倾听',
    prompt: '雨中街灯亮起，朋友发来消息倾诉近来的失意。',
    question: '在乎的人低落时，你更习惯怎么回应？',
    options: [
      { score: -2, secondaryScore: -1, text: '安静听他说完，告诉他不必勉强马上振作' },
      { score: -1, secondaryScore: 1, text: '约他出来吃顿热乎饭，当面陪他散散心' },
      { score: 2, secondaryScore: -1, text: '陪他平静梳理处境，看见没白费的付出' },
      { score: 1, secondaryScore: 1, text: '一起商量新办法，把眼前的难题拆成小步' },
    ],
  },
  {
    chapter: 1,
    dimension: 'SN',
    secondaryDimension: 'JP',
    scene: '温茶',
    prompt: '桌上端来一杯温茶，店里只有雨声和轻微翻书声。',
    question: '让你觉得日子还不错的瞬间，常是什么样？',
    options: [
      { score: 2, secondaryScore: -1, text: '一杯热茶、一顿好饭，眼前真切的温度' },
      { score: 1, secondaryScore: 1, text: '住处干净清爽，手头的事一件件稳稳落地' },
      { score: -1, secondaryScore: 1, text: '困惑很久的问题，在安静时刻忽然想通了' },
      { score: -2, secondaryScore: -1, text: '偶然读到一句话或旋律，心绪飘向远方' },
    ],
  },
  {
    chapter: 2,
    dimension: 'EI',
    secondaryDimension: 'TF',
    scene: '晚风',
    prompt: '雨停开窗，清风吹起白纱帘，邻座朝你温和一笑。',
    question: '日常相处里，怎样的距离感最让你舒服？',
    options: [
      { score: -1, secondaryScore: -1, text: '点头微笑就好，各自安静吹同一阵风' },
      { score: -2, secondaryScore: 1, text: '温和有礼但保留边界，守好彼此的清净' },
      { score: 2, secondaryScore: -1, text: '顺着雨后好风景聊两句，分享轻松心情' },
      { score: 1, secondaryScore: 1, text: '投缘就坦率交流，聊完也能无负担道别' },
    ],
  },
  {
    chapter: 2,
    dimension: 'TF',
    secondaryDimension: 'SN',
    scene: '晴光',
    prompt: '云层裂开一道缝，雨后的阳光重新照亮了小巷。',
    question: '站在路口犹豫不决时，你最终会听从什么？',
    options: [
      { score: 2, secondaryScore: 1, text: '看清眼下实在的条件，选最稳妥可行的路' },
      { score: 1, secondaryScore: -1, text: '跳出眼前纠结，看长远哪条路更合本心' },
      { score: -1, secondaryScore: 1, text: '顾及重要之人的感受，选彼此安心的决定' },
      { score: -2, secondaryScore: -1, text: '听从内心的向往，选日后回想不遗憾的路' },
    ],
  },
  {
    chapter: 2,
    dimension: 'JP',
    secondaryDimension: 'EI',
    scene: '归途',
    prompt: '橘色晚霞漫过屋檐，推门走回街巷时晚风正轻。',
    question: '你希望接下来的日子，保持怎样的节奏？',
    options: [
      { score: 2, secondaryScore: -1, text: '方向清晰，每天踏实往前推进一点点' },
      { score: 1, secondaryScore: 1, text: '把期盼安排妥当，和在乎的人好好过日子' },
      { score: -2, secondaryScore: -1, text: '不必把未来写满，留足余地随遇而安' },
      { score: -1, secondaryScore: 1, text: '保持好奇，随时推开门遇见新风景与人' },
    ],
  },
];

function getStoryOption(answers, index) {
  return QUESTIONS[index]?.options[answers[index]];
}

function getOutcome(zodiac, selfType, answers = []) {
  const normalizedType = typeof selfType === 'string' ? selfType.trim().toUpperCase() : '';
  const declaredType = /^[EI][SN][TF][JP]$/.test(normalizedType) ? normalizedType : '';
  const fireOrAir = zodiac.element === 'fire' || zodiac.element === 'air';
  const elementTies = fireOrAir ? { EI: 'E', SN: 'N', JP: 'P' } : { EI: 'I', SN: 'S', JP: 'J' };
  const totals = { EI: 0, SN: 0, TF: 0, JP: 0 };
  let firstThinkingChoice;

  for (const [index, { dimension, secondaryDimension }] of QUESTIONS.entries()) {
    const option = getStoryOption(answers, index);
    if (!option) continue;
    totals[dimension] += option.score;
    totals[secondaryDimension] += option.secondaryScore;
    if (dimension === 'TF') firstThinkingChoice ??= option.score > 0 ? 'T' : 'F';
  }

  const type = DIMENSIONS.map(({ key, options }, index) => {
    const [[positive], [negative]] = options;
    const declared = declaredType[index];
    const score = totals[key] + (declared ? (declared === positive ? 1 : -1) : 0);
    if (score === 0) return declared ?? elementTies[key] ?? firstThinkingChoice ?? positive;
    return score > 0 ? positive : negative;
  }).join('');

  const group = type[1] === 'N' ? type.slice(1, 3) : type[1] + type[3];
  const resultKey = zodiac.element + '_' + group;
  const result = RESULTS[resultKey];
  const verdictParagraphs = [
    result.closingScene,
    LIFE_REFLECTIONS[type],
  ];
  const verdict = verdictParagraphs.join('\n\n');

  return { ...result, type, verdictParagraphs, verdict };
}
