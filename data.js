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
    scene: '厚重的雨云先在屋脊上方裂开窄窄的一道缝，清亮的日光顺着对街的青瓦沿慢慢往白墙上挪。刚被雨水洗过的石阶还是深色的，最外头一角却率先亮了起来；没过多久，墙根那湾浅浅的积水也映出了半截透亮的天空，微风吹过时泛起一圈圈金色的细纹。',
    closingScene: '雨刚停的时候，云缝里透下来的那束光走得很慢，一点点把潮湿的石阶晒干。很多时候心里的事也是这样，越是催促越容易乱，反倒安安静静坐下来等一等，原本遮住视线的云雾自己就会散开。',
  },
  fire_NF: {
    weather: 'copper-breeze', weatherName: '橘子晚霞', temperature: 27,
    weatherTag: '霞光满檐 · 晚风温软',
    scene: '天边先是漫开一层淡淡的橘粉，贴着老屋瓦顶的那一道渐渐染得温厚而明亮。对街有扇木窗轻轻推开，玻璃把柔和的霞光折进店里，连木桌边缘也跟着暖了一下。晚风不疾不徐地穿过小巷，街对面的暖黄路灯在暮色里一盏接一盏地亮了起来。',
    closingScene: '白日里匆忙的脚步，到了傍晚总会被满天晚霞轻轻劝慢下来。看着橘色的光一点点漫过老屋瓦檐，会忽然觉得，一天里哪怕只有这十几分钟什么都不去追赶，也已经足够温柔了。',
  },
  fire_SJ: {
    weather: 'warm-roof-cloud', weatherName: '暖云低垂', temperature: 22,
    weatherTag: '暮云柔和 · 檐灯初亮',
    scene: '蓬松的云层低低地贴着屋顶走，让整条小巷比平时更早安静下来。店门檐下的暖灯已经亮了，远处的瓦背笼着一层柔和的灰蓝，西边天际还留着一条窄窄的琥珀色亮边。空气里没有风的燥意，只有傍晚归家时分特有的温吞与安稳。',
    closingScene: '暮云低垂的傍晚没有刺眼的光，檐下那盏暖黄的灯却显得格外清楚。就像寻常日子里最让人安心的时刻，从来不是多么热闹的场面，而是天快黑的时候，知道有一盏灯正稳稳当当地亮着。',
  },
  fire_SP: {
    weather: 'copper-breeze', weatherName: '热风晚霞', temperature: 29,
    weatherTag: '余温未散 · 霞色鲜活',
    scene: '太阳刚刚落到屋脊后面，傍晚的风从巷口轻快地绕进来，拂过手背时还带着白日晒透的余温。窗边的白纱帘被风轻轻掀起一角，刚好露出远处瓦顶上那条鲜亮的红霞；等帘子软软落回窗台，满街树影还在晚风里自在摇晃。',
    closingScene: '太阳落山之后，吹进巷子的风里还留着白日晒透的余温，吹在人身上松快又自在。日子不必每一刻都紧绷着往前赶，趁着晚霞还在屋顶上发亮，去风里走走本身就是一件顶好的事。',
  },
  earth_NT: {
    weather: 'cloud', weatherName: '山间薄雾', temperature: 16,
    weatherTag: '雾漫远山 · 清凉静谧',
    scene: '方才还看得清轮廓的半山腰林木，转眼被一层乳白色的薄雾顺着山坡轻轻拢住。雾气走得很慢，先柔化了远处的屋脊，再漫到寂静的巷子口。近处窗外的枝叶洗得干干净净，叶尖悬着一滴透亮的水珠，四周安静得能听见自己的呼吸。',
    closingScene: '山雾漫上来的时候，远处的嘈杂好像一下子退得很远，只剩下窗前这一小片清清静静的天地。人偶尔也需要这样一段不被外界催促的留白，让脑海里纷杂的念头慢慢沉淀回它原本的位置。',
  },
  earth_NF: {
    weather: 'dawn-drizzle', weatherName: '檐外细雨', temperature: 18,
    weatherTag: '细雨润物 · 草木清香',
    scene: '雨丝细得隔着玻璃几乎看不真切，直到低头瞥见青石板缝隙里聚起浅浅的水光，才发觉整条巷子都已经被温柔润湿了。老屋瓦沿上的青苔在雨里显得愈发翠绿，对街人家半开的窗口飘出一缕温热的白气，慢慢融进带着草木香的微雨里。',
    closingScene: '细雨落得没有声张，不知不觉却把满巷的青苔和树叶都洗得鲜亮。生活里许多真正滋养人的瞬间也是这样，轻声细语，不争不抢，只是在某个安静的午后悄悄把干涸的心绪润湿。',
  },
  earth_SJ: {
    weather: 'snow', weatherName: '窗外初雪', temperature: 3,
    weatherTag: '初雪轻落 · 屋内融暖',
    scene: '第一片雪花轻轻贴上窗玻璃，眨眼间化成一小滴晶莹的水珠。不过片刻，对街青瓦的屋檐便先白了浅浅一道，巷子里的石板路还泛着湿润的微光。偶尔有行人放慢脚步从巷口走过，暖黄的路灯把飘落的雪丝照得格外安静，更衬得屋里暖意融融。',
    closingScene: '初雪落下来的时候，连路人的脚步都会不自觉地放轻，一扇木窗就把外头的寒意稳稳隔开了。平时总觉得要不停往前赶才算踏实，其实像这样在暖屋里静静看雪落一会儿，心也就跟着安稳下来了。',
  },
  earth_SP: {
    weather: 'sun', weatherName: '午后碎金', temperature: 24,
    weatherTag: '晴光穿叶 · 暖意融融',
    scene: '温煦的阳光从半敞的木门斜斜铺进来，先照亮门边的青石门槛，再一路漫到窗边的木桌角。外头行道树的叶子被微风轻轻一拨，桌面上的光斑就碎成好几片晃动的金影。把手搁在光影里坐一会儿，连指尖到手背都被晒得暖洋洋的。',
    closingScene: '平时总觉得日子推着人往前走，好像非得一直忙着什么才算没有辜负时间。其实偶尔像这样拐进街角，看一会儿树影怎么从门槛慢慢挪到桌边，原本缠在心头的事，不知不觉也就松快了许多。',
  },
  air_NT: {
    weather: 'wind', weatherName: '雨后阵风', temperature: 21,
    weatherTag: '雨歇风起 · 天色澄明',
    scene: '阵雨刚停的那一小会儿，巷子里静得像按下了暂停键，紧接着巷尾的高树先哗啦啦地响了起来。湿漉漉的叶片被清风翻了个面，抖落的水珠清脆地敲在石板上；抬头望去，屋檐外的云层正迅速散开，透出大片干净清朗的亮色。',
    closingScene: '雨停之后那阵清风来得干脆利落，把树叶上的积水和午后的闷气一扫而空，天色一下子变得澄明透亮。许多想不通的琐事其实也禁不起一阵好风吹，走出门呼吸两口新鲜空气，心里自然就敞亮了。',
  },
  air_NF: {
    weather: 'day-cloud', weatherName: '浅云漫过', temperature: 19,
    weatherTag: '云影舒卷 · 天光柔和',
    scene: '两排老楼屋檐之间留着一方干净的蓝天，一朵蓬松的白云正慢悠悠地从那儿飘过去。巷子里的白墙跟着暗了短短几秒，很快又重新亮了回来；再抬眼时，方才圆鼓鼓的云边已经被高处的微风吹散成轻柔的薄纱，看着就让人心头松快。',
    closingScene: '抬头看那朵浅云慢悠悠漫过屋檐的时候，会觉得时间好像并没有想象中那么急迫。墙面暗一会儿总会再亮回来，心头偶尔掠过的一点阴翳也是如此，顺着风看它过去就好。',
  },
  air_SJ: {
    weather: 'wind', weatherName: '穿堂微风', temperature: 23,
    weatherTag: '清风穿堂 · 白帘轻晃',
    scene: '温和的风从敞开的店门溜进来，顺着木桌边缘一路往窗口走。窗边的白纱帘轻轻鼓起一道柔和的弧度，露出外头洗净的绿树与街景。空气里带着雨后泥土和树叶的清爽气息，吹在脸上既不觉得凉，也没有半点闷意，舒服得刚刚好。',
    closingScene: '推开木窗的那一刻，雨后带着草木清气的风穿堂而过，屋里静了一下午的空气一下子就鲜活起来。有时候人需要的也不过是这么一阵刚好的微风，不疾不徐，吹散手边攒了一天的疲惫。',
  },
  air_SP: {
    weather: 'violet-breeze', weatherName: '起风的紫暮', temperature: 25,
    weatherTag: '暮色微醺 · 晚风自在',
    scene: '日落后的天空还留着一层温柔的淡紫色，巷子里的树叶被晚风吹得一阵轻响、一阵安静。对街小店已经亮起了暖黄的灯火，窗边的白纱帘往屋里轻轻鼓起，若隐若现地映着外头的灯影，傍晚独有的松弛感正顺着窗口漫进来。',
    closingScene: '白昼与黑夜交接的这十几分钟，天边总留着一抹格外柔和的紫暮，连吹进窗里的风都慢了半拍。把白天没做完的计较留在身后吧，傍晚本来就该是属于散步、吹风和放松的时间。',
  },
  water_NT: {
    weather: 'rain', weatherName: '静夜蓝雨', temperature: 17,
    weatherTag: '夜雨静谧 · 灯影温柔',
    scene: '暮色彻底沉下来之后，窗外的雨幕还泛着一层静谧的深蓝。偶有撑伞的人从街灯底下缓步走过，积水里那团暖黄的倒影被轻轻踩碎，过一会儿又安安静静地聚拢回来。雨点敲在木窗框上的声音很有规律，像替今晚的世界拉上了一道安心的帘幕。',
    closingScene: '入夜后的雨声总有一种奇妙的安静力量，把街巷的喧闹轻轻隔在窗外，只留下暖黄路灯在水洼里的倒影。在这样不被打扰的时刻，人终于不用急着回应任何人，只需安安静静和自己待一会儿。',
  },
  water_NF: {
    weather: 'moon-rain', weatherName: '月下细雨', temperature: 18,
    weatherTag: '薄云映月 · 细雨如丝',
    scene: '月亮隔着一层薄薄的云絮，透出温润而朦胧的银白微光。窗玻璃上的雨丝很细，有一滴顺着窗面慢慢滑到半途，轻轻并进另一滴水珠里，留下一道清亮的水痕。顺着水痕望出去，月光依旧安静地停在屋檐上，温柔得像一场不愿醒来的梦。',
    closingScene: '薄云后面的那点月光虽不耀眼，隔着细密的雨丝望过去，却让人心里格外平静。生活未必每天都是万里无云的大晴天，哪怕在微雨朦胧的夜晚，抬头也总能找到属于今晚的那一点亮光。',
  },
  water_SJ: {
    weather: 'harbor-fog', weatherName: '低云靠岸', temperature: 19,
    weatherTag: '水雾轻拢 · 万物安然',
    scene: '温润的雾气从不远处的水面慢慢漫上来，远处的街影先隐进了朦胧里，近处的树冠也化作柔和的轮廓。靠窗的枝条被微风轻轻拨动，偶尔贴着玻璃碰出极轻的声响。雾把远方的匆忙都挡在了外头，只留下眼前这一方让人安心的小天地。',
    closingScene: '雾气漫上来的时候，太远的地方暂时看不真切，眼前的木窗、枝叶与灯光反而变得格外清晰。其实日子也不必一眼望到很远的尽头，把眼前这一刻过得安稳温和，就已经很好了。',
  },
  water_SP: {
    weather: 'sunshower', weatherName: '轻快太阳雨', temperature: 24,
    weatherTag: '晴雨交织 · 水光跃动',
    scene: '明晃晃的太阳忽然从云朵后面钻了出来，细密的雨线反倒被照得一根根发亮，像无数银丝在屋檐外轻快跳跃。巷子地面的水洼还在漾着细小的圆圈，贴着白墙的那一截路却已经晒得透亮。整条小街在晴雨交织里显得格外鲜活，连空气都在发光。',
    closingScene: '一边落着细雨、一边出着太阳的天气，总让人忍不住会心一笑。原来阴雨和晴朗并不总是对立的，就像生活里那些措手不及的小插曲，换个眼光看过去，往往也藏着意想不到的明亮与鲜活。',
  },
};

const LIFE_REFLECTIONS = {
  ISTJ: '人和日子相处并没有统一的标准。把经手的事一件件落到实处、让日常保持清爽的秩序，本身就是一种沉静的力量；只是稳步往前走的时候，也不妨偶尔像今天这样停在窗边歇口气。外头天色正好，回去的路上慢慢走，愿今晚有个踏实安稳的好眠。',
  ISFJ: '生活里真正让人觉得温暖的，往往不是什么惊天动地的大事，而是记得旁人随口提过的一句话、把平凡的日子经营得细致妥帖。在照顾好周遭一切的同时，也别忘了把同样的耐心留给自己。推门走进晚风里的时候，愿今晚的夜色也能温柔地托住你。',
  INFJ: '在这个步履匆匆的世界里，还愿意安静地倾听、去体会话语背后细微的心意，是一件很珍贵的事。心里的念头不必急着向所有人解释，也不用勉强自己替未来想好全部答案。趁着窗外风色柔和，带着一身松快往回走吧，愿今夜安静而顺心。',
  INTJ: '心里有清晰的方向、不被外头的嘈杂轻易带偏，能让人在漫长的岁月里走得很稳。但生活除了既定的远方，也容得下几场不期而遇的微雨和毫无目的的停顿。把绷了一天的思绪轻轻放平，推门出去吹吹风吧，前头的路干净又敞亮。',
  ISTP: '面对迎面而来的变化，不慌张、不空谈，只管气定神闲地看清眼前的路再动手去试，是一份难得的松弛与清醒。日子本来就不必活得太紧绷，留足自由呼吸的空隙，反而处处都是从容。外头的空气正清爽，揣着这份自在慢慢逛回去吧。',
  ISFP: '能够为一束落在桌角的光、一杯温度刚好的茶、一阵雨后的清风而真心感到欢喜，是生活馈赠给人的好本领。不必迎合别人匆忙的节拍，守着眼前真切而细腻的感受，一步步按自己的心意走就很好。愿今晚一路的晚风，都让你觉得舒心自在。',
  INFP: '那些没有轻易说出口的细腻感受，还有偶然因为一句话、一片晚霞而驻足的时刻，从来都不是浪费时间，而是让日子变得有温度的地方。不用勉强自己去适应喧闹的标准，按舒服的步调慢慢走就很好。推门出去的时候，愿今晚的灯火让你觉得心安。',
  INTP: '在人人都急着寻找现成答案的时候，还能保有一份安静琢磨的好奇心，在自己的思绪里自得其乐，是一份很纯粹的自由。不必在意步调与旁人不同，偶尔发发呆、让念头随风飘一会儿，心里反而更澄澈。外头风轻云淡，愿你今晚过得清净而愉快。',
  ESTP: '无论遇上晴天还是阵雨，都能顺势找到当下的乐趣、干脆利落地迈开步子去体验，这份鲜活的劲头总能让平凡的日子生出光彩。走得尽兴之余，偶尔像这样坐在窗边静静歇上半晌，也别有一番滋味。趁着夜色温和，带着好心情出发吧。',
  ESFP: '能把注意力稳稳放在眼前的热茶、好看的风景和值得分享的人身上，不替还没发生的事徒增烦恼，是一种很通透的生活智慧。热闹有热闹的欢喜，安静也有安静的惬意。外头街灯已经亮了，推门出去走走吧，愿今晚的每一刻都轻松舒展。',
  ENFP: '对没走过的巷子、没见过的人和故事始终保有一份敞开的热忱，会让寻常的一天也多出许多鲜活的可能。不必把未来的每一步都提前写死，顺着心里的好奇往前走，总会有好风景在转角等着。晚风正轻柔，愿你今晚带着满心轻松归去。',
  ENTP: '不拘泥于死板的惯例，总能从寻常的小事里看出新鲜的角度与趣味，会让日子过得格外灵动开阔。累了就停在街角喝杯热茶，歇够了再转身去探看新的天地，原本就可以这么自在。外头的风已经吹散了闷意，愿今晚的夜路清朗又惬意。',
  ESTJ: '把纷繁的事情理出清晰的条理，和身边的人一起把日子过得有板有眼、踏实可靠，是一份让人信服的担当。只是再井井有条的生活，也值得留出几段不用计算时间的傍晚。把待办的事先放一放，推门走进晚风里，好好享受今晚的清闲吧。',
  ESFJ: '人与人之间最朴素的暖意，往往就藏在一句自然的问候、一顿热气腾腾的便饭和彼此记挂的分寸里。把身边的人事物照顾得妥帖温暖固然美好，今晚也请把这份体贴分一半给自己。外头灯火温和，慢慢走回去，愿这一晚过得舒心又安逸。',
  ENFJ: '愿意用真诚和耐心去倾听、去陪伴，让身处低谷的人也能感受到妥帖的暖意，是世间很温柔的一种力量。不过任何一段长久的好关系，都离不开先把自己照顾得松弛舒展。趁着暮色四合、晚风轻软，放下心头的牵挂，去享受一个轻松的夜晚吧。',
  ENTJ: '看准了目标便果断前行，遇到阻碍也习惯迎面拆解，这份笃定总能带你看到更辽阔的风景。但赶路的间隙，停在街角小店看一场雨落、等一抹晚霞，同样是生活不可或缺的章节。外头风清气爽，今晚不妨放慢脚步，安安静静享受这段归途。',
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
    prompt: '难得空出半天，顺着南门外的树影走到这家安静的小店，阳光正落在靠窗的木桌上。',
    question: '突然拥有一段不用赶时间的空白，你最想怎么度过？',
    options: [
      { score: -2, secondaryScore: -1, text: '一个人静静坐会儿，什么都不安排，让脑子彻底放空' },
      { score: -1, secondaryScore: 1, text: '找个角落看会儿书，或把最近想做的事慢慢理一理' },
      { score: 2, secondaryScore: -1, text: '给好久没见的朋友发条消息，看他刚好有没有空过来' },
      { score: 1, secondaryScore: 1, text: '先把这家店记下来，约朋友周末专门留出时间一起来' },
    ],
  },
  {
    chapter: 0,
    dimension: 'SN',
    secondaryDimension: 'TF',
    scene: '落座',
    prompt: '在窗边坐定，手边放着一本翻旧了的留言册，抬眼能看见远处山腰漫起一层薄雾。',
    question: '走进一个安静的地方时，什么最容易先打动你？',
    options: [
      { score: 2, secondaryScore: -1, text: '木桌温润的触感与柔和的光线，让身体先放松下来' },
      { score: 1, secondaryScore: 1, text: '店里干净妥帖的陈设，每样物件都摆在顺手的位置' },
      { score: -2, secondaryScore: -1, text: '窗外薄雾漫过屋脊的画面，让人想起很久以前的某天' },
      { score: -1, secondaryScore: 1, text: '翻看留言册里陌生人留下的字句，好奇背后的故事' },
    ],
  },
  {
    chapter: 1,
    dimension: 'JP',
    secondaryDimension: 'SN',
    scene: '遇雨',
    prompt: '屋檐外忽然飘起细雨，青石板路很快湿了一片，原本打算晚点去办的小事怕是要耽搁了。',
    question: '遇上这种计划外的小插曲，你心里通常会怎么想？',
    options: [
      { score: 2, secondaryScore: 1, text: '在心里重新排一下先后，把能改期的事妥当挪开' },
      { score: 1, secondaryScore: -1, text: '既然一时出不去，正好趁这段整块的时间专注做点事' },
      { score: -2, secondaryScore: 1, text: '顺其自然，先看会儿檐下的雨，等雨小了再决定去哪' },
      { score: -1, secondaryScore: -1, text: '反而悄悄松了口气，觉得这场雨刚好给了停下来的理由' },
    ],
  },
  {
    chapter: 1,
    dimension: 'TF',
    secondaryDimension: 'EI',
    scene: '倾听',
    prompt: '雨幕里亮起了街灯。一位熟识的朋友发来消息，说努力了很久的事还是没能如愿，有些迷茫。',
    question: '当在乎的人正处在低谷时，你更习惯怎么回应？',
    options: [
      { score: -2, secondaryScore: -1, text: '认真听他把情绪说完，告诉他难过很正常，不必勉强振作' },
      { score: -1, secondaryScore: 1, text: '问问他在哪儿，约他出来吃顿热乎饭，当面陪他坐坐' },
      { score: 2, secondaryScore: -1, text: '帮他平静地梳理眼下的处境，看看哪些付出其实并没白费' },
      { score: 1, secondaryScore: 1, text: '和他一起商量接下来能试的新办法，把难题拆成小步子' },
    ],
  },
  {
    chapter: 1,
    dimension: 'SN',
    secondaryDimension: 'JP',
    scene: '温茶',
    prompt: '桌上多了一杯温热的清茶，热气贴着杯沿散开，店里只有窗外的雨声和很轻的翻书声。',
    question: '平时让你觉得「日子还不错」的瞬间，大多是什么样的？',
    options: [
      { score: 2, secondaryScore: -1, text: '手边有一杯热茶、一顿合胃口的饭，眼前真切的温度' },
      { score: 1, secondaryScore: 1, text: '住处收拾得干净清爽，手头的事一件件稳稳落地的踏实' },
      { score: -1, secondaryScore: 1, text: '困惑了很久的一个问题，在安静的时刻忽然想通了' },
      { score: -2, secondaryScore: -1, text: '偶然读到的一句话或一段旋律，让心绪飘向远方的共鸣' },
    ],
  },
  {
    chapter: 2,
    dimension: 'EI',
    secondaryDimension: 'TF',
    scene: '晚风',
    prompt: '雨不知不觉停了，木窗被推开，带着草木清气的风吹起白纱帘，邻座看雨的人朝你温和一笑。',
    question: '在日常相处里，你觉得最舒服的距离感是怎样的？',
    options: [
      { score: -1, secondaryScore: -1, text: '点头微笑就好，彼此心照不宣，各自安静吹同一阵风' },
      { score: -2, secondaryScore: 1, text: '温和有礼但保留边界，不打扰别人，也守好自己的清净' },
      { score: 2, secondaryScore: -1, text: '顺着窗外放晴的风景自然聊上两句，分享此刻的好心情' },
      { score: 1, secondaryScore: 1, text: '碰到投缘的话题就坦率交流，聊完也能轻松道别无负担' },
    ],
  },
  {
    chapter: 2,
    dimension: 'TF',
    secondaryDimension: 'SN',
    scene: '晴光',
    prompt: '云层裂开一道缝，雨后的阳光重新照亮小巷。站在路口做选择时，人偶尔也会拿不定主意。',
    question: '每当犹豫不决的时候，你最终往往会听从什么？',
    options: [
      { score: 2, secondaryScore: 1, text: '先看清眼下最实在的条件与利弊，选最稳妥可行的路' },
      { score: 1, secondaryScore: -1, text: '跳出眼前的纠结，想想长远来看哪条路更接近心中所想' },
      { score: -1, secondaryScore: 1, text: '顾及身边重要之人的感受与近况，选彼此都安心的决定' },
      { score: -2, secondaryScore: -1, text: '听从内心最真实的向往，选那个日后回想起来不遗憾的' },
    ],
  },
  {
    chapter: 2,
    dimension: 'JP',
    secondaryDimension: 'EI',
    scene: '归途',
    prompt: '天边漫开温柔的橘色晚霞，店里的暖灯亮了起来。推门走回街巷时，傍晚的风比来时更轻了。',
    question: '走在这段回程的晚风里，你希望接下来的日子保持怎样的节奏？',
    options: [
      { score: 2, secondaryScore: -1, text: '心里有清晰的方向，每天踏实往前推进一点，安稳而笃定' },
      { score: 1, secondaryScore: 1, text: '把重要的约定和期盼都安排妥当，和在乎的人好好过日子' },
      { score: -2, secondaryScore: -1, text: '不必把未来写得太满，留足转身的余地，一个人也随遇而安' },
      { score: -1, secondaryScore: 1, text: '对下一站保持好奇，随时愿意推开门，遇见新的风景与人' },
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
