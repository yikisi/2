/**
 * @file 比赛相关 - 系统提示
 * @author 黑奴队长
 */
const { get } = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  contestants_conjunction: ' 与 ',
  prepare_report_sim: '选手检查蹄铁……',
  /** @param {PrintedSpan} chara 第一人气选手名 */
  get_prepare_report_high_mot: (chara) => [
    '第 1 人气，',
    chara,
    ' 今天看上去干劲满满！',
  ],
  /** @param {PrintedSpan} chara 第一人气选手名 */
  get_prepare_report_low_mot: (chara) => [
    '第 1 人气，',
    chara,
    ' 今天看上去干劲不是很好！',
  ],
  /** @param {PrintedSpan} chara 第一人气选手名 */
  get_prepare_report_normal_mot: (chara) => [
    '第 1 人气，',
    chara,
    ' 今天看上去干劲似乎一般！',
  ],
  prepare_record_sim: '正在检查跑道……',
  /**
   * @param {PrintedSpan} race 比赛名
   * @param {string} uma 马娘 or 马郎
   */
  get_prepare_record_default: (race, uma) => [
    '在这 ',
    race,
    ' 的赛场上，各位赛',
    uma,
    '也会全力以赴为大家带来梦想。',
  ],
  /**
   * @param {PrintedSpan} chara 第一人气选手名
   * @param {string} uma 马娘 or 马郎
   */
  get_prepare_record_sats_sho: (chara, uma) => [
    chara,
    ' 顺利入闸，感觉之后会成为名',
    uma,
    '呢。',
  ],
  /** @param {string} uma 马娘 or 马郎 */
  get_prepare_record_toky_yus: (uma) => [
    '赛',
    uma,
    '一生一度的德比，马上就要决出赢家了。',
  ],
  /** @param {PrintedSpan} race 比赛名 */
  get_prepare_record_kiku_sho: (race) => [
    '今年的 ',
    race,
    ' 可谓战国时代，群雄辈出。',
  ],
  /** @param {PrintedSpan} chara 第一人气选手名 */
  get_prepare_record_takz_kin: (chara) => [
    '各位的梦想是谁呢？我的梦想是 ',
    chara,
  ],
  beginning_report_sim: [
    '正在检查马闸……',
    '正在检查令枪……',
    '选手入闸……',
    '开赛！',
  ],
  /**
   * @param {PrintedSpan} race 比赛名
   * @param {string} gates 参赛选手人数
   * @param {string} uma 马娘 or 马郎
   * @returns {TextContent}
   */
  get_beginning_report(race, gates, uma) {
    const buffer = [
      [
        ['赛', uma, '请入闸……'],
        ['全部', uma, '准备妥当……'],
        '准备……',
        '——开闸！',
      ],
      [['赛', uma, '准备好……'], '随时预备起步……', '预备……', '——起步！'],
      [
        '比赛马上开始……',
        ['参赛', uma, ' ', gates, ' 名……'],
        [get('flag:当前年').toString(), ' 年度 ', race, '……'],
        '——开始！',
      ],
    ];
    return get_random_entry(buffer);
  },
  /** @param {string} uma 马娘 or 马郎 */
  get_first_report_no_bad_start: (uma) => ['比赛开始，所有', uma, '平排出闸！'],
  /**
   * @param {PrintedSpan} first 率先出闸选手名
   * @param {PrintedSpan} last 出迟选手名
   * @param {string} uma 马娘 or 马郎
   */
  get_first_report: (first, last, uma) => [
    '比赛开始，',
    first,
    ' 首先跑出！其他',
    uma,
    '紧随其后，最后是',
    Math.random() < 0.5 ? '出闸慢了的 ' : '落后了的 ',
    last,
    '！',
  ],
  location_change_location_report_template: '进入%LANE%',
  get_location_change_slope_report: (up_slope) =>
    `正在${up_slope ? '爬坡' : '下坡'}`,
  get_location_change_slope_over_report: (up_slope) =>
    `经过${up_slope ? '爬坡' : '下坡'}`,
  location_change_report_template: '现在%MESSAGE%',
  location_in_order_report_template: '现在是%LANE%',
  /**
   * @param {PrintedSpan} chara
   * @param {string} rank
   * @param {string} no
   * @returns {TextContent}
   */
  get_order_report(chara, rank, no) {
    return [`第 ${rank} 位是 ${no} 号 `, chara];
  },
  full_speed_push_reports: [
    (contestants) => [...contestants, ' 开始全力冲刺！'],
    (contestants) => [...contestants, ' 为了最后的胜利开始继续加速！'],
    (contestants) => ['超越极限！', ...contestants, ' 仍然在加速！'],
  ],
  lost_stamina_reports: [
    (contestants) => [...contestants, '，失速！'],
    (contestants) => [
      ...contestants,
      ' 的步伐踉跄了起来，已经无法维持速度了！',
    ],
    (contestants) => [...contestants, ' 速度变慢了！'],
    (contestants) => [...contestants, ' 到极限了吗！？'],
  ],
  orgasm_reports: [
    (contestants) => [...contestants, ' 脸色好红，是拼尽全力了吗……'],
    (contestants) => ['蒸汽正从 ', ...contestants, ' 的身上不断冒出！'],
    (contestants) => ['是什么让 ', ...contestants, ' 的决胜服如此湿润……？'],
    (contestants) => [...contestants, ' 脚步踉跄了一下，所幸没有失速！'],
  ],
  loc_mind_nige_ex_reports: [
    (contestants) => ['逃马怎容他马在前！冲啊，', ...contestants, '！'],
    (contestants) => ['那不是你的位置！', ...contestants, ' 在用奔跑警告着！'],
    (contestants) => [...contestants, ' 正在夺回自己的头马之位！'],
    (contestants) => [...contestants, ' 持续加速，要比其他选手逃得更前！'],
  ],
  loc_mind_other_ex_reports: [
    (contestants) => [...contestants, ' 大步奔向自己应处的位置！'],
    (contestants) => [
      '这才不是',
      contestants.length > 1 ? '你' : '你们',
      '的位置！加油啊 ',
      ...contestants,
      '！',
    ],
    (contestants) => [...contestants, ' 正在为夺回位置而战！'],
  ],
  loc_mind_nige_over_take_reports: [
    (contestants) => [...contestants, ' 毫不犹豫向头位进发！'],
    (contestants) => [...contestants, ' 正在争取头位！'],
    (contestants) => [...contestants, ' 的眼里只有头位！'],
  ],
  loc_mind_nige_speed_up_reports: [
    (contestants) => [...contestants, ' 持续加速，想要拉开更多距离！'],
    (contestants) => [...contestants, ' 要逃得更远了！'],
    (contestants) => ['逃下去，逃到世界尽头吧，', ...contestants, '！'],
  ],
  loc_mind_other_quick_reports: [
    (contestants) => [...contestants, ' 不甘于被拉开距离，在奋起直追！'],
    (contestants) => ['被拉得太远了！', ...contestants, ' 奋起直追！'],
    (contestants) => [...contestants, ' 紧紧保持着距离！'],
  ],
  loc_mind_other_relax_reports: [
    (contestants) => [...contestants, ' 似乎在保持体力，很大胆的战术！！'],
    (contestants) => [...contestants, ' 的节奏变慢了，要小心啊！！'],
    (contestants) => [...contestants, '，松懈可是大敌！'],
  ],
  blocked_reports: [
    (contestants) => [...contestants, ' 被阻挡了，真是可惜！'],
    (contestants) => [...contestants, ' 突围失败！'],
    (contestants) => [...contestants, ' 身陷马群无法自拔！'],
  ],
  temptation_reports: [
    (contestants) => [...contestants, ' 的节奏略显凌乱，似乎有点焦躁！'],
    (contestants) => [...contestants, ' 有点气急了吗！'],
    (contestants) => [...contestants, ' 陷入焦躁！'],
  ],
  temp_end_reports: [
    (contestants) => [...contestants, ' 终于回归了正常的节奏！'],
    (contestants) => [...contestants, ' 好像冷静下来了！'],
    (contestants) => [...contestants, ' 摆脱焦躁了！'],
  ],
  temp_continue_reports: [
    (contestants) => [...contestants, ' 的节奏持续紊乱，有点糟糕！'],
    (contestants) => [...contestants, ' 深陷焦躁无法自拔！'],
    (contestants) => ['冷静下来啊 ', ...contestants, '！小心错失时机！'],
  ],
  temp_wrong_style_reports: [
    (contestants) => [...contestants, ' 似乎改变了跑法！'],
    (contestants) => [...contestants, ' 怎么在拼命前冲！'],
  ],
  /**
   * @param {PrintedSpan} target
   * @param {PrintedSpan} aim
   * @returns {TextContent}
   */
  get_compete_fight_report(target, aim) {
    return ['以 ', aim, ' 为目标，', target, ' 加快了自己的速度！'];
  },
  /**
   * @param {PrintedSpan} chara
   * @returns {TextContent}
   */
  get_final_push_report: (chara) => [chara, ' 开始最终冲刺！'],
  /**
   * @param {TextContent} contestants
   * @param {boolean} at_same_time
   * @returns {TextContent}
   */
  get_final_push_multi_report(contestants, at_same_time) {
    return [
      ...contestants,
      at_same_time ? ' 同时开始最终冲刺！' : ' 几乎同时开始最终冲刺！',
    ];
  },
  /**
   * @param {TextContent} contestants
   * @returns {TextContent}
   */
  get_final_push_follow_report(contestants) {
    return [...contestants, ' 也开始最终冲刺了！'];
  },
  overtake_reports: [
    (top, over) => [over, ' 一下子就超越了 ', top, '！'],
    (top, over) => [over, ' 在与 ', top, ' 的交战中占优！'],
    (top, over) => ['超越 ', top, ' 之后，正是 ', over, ' 的制胜时刻！'],
    (top) => [top, ' 领先！要锁定胜局了吗！'],
  ],
  /**
   * @param {PrintedSpan} first
   * @param {PrintedSpan} second
   * @returns {TextContent}
   */
  get_battle_start_report(first, second) {
    return [first, ' 与 ', second, ' 展开激烈交战！'];
  },
  battle_reports: [
    { w: 0.6, h: (first, second) => [first, '！', second, '！'] },
    {
      w: 0.3,
      h: (first, second) => [
        first,
        ' 与 ',
        second,
        ' 的交战还在继续！双方都为了胜利拼尽全力！',
      ],
    },
    {
      w: 0.1,
      h: (first, second) => [
        '焦灼！焦灼！',
        first,
        ' 和 ',
        second,
        ' 都无法独善其身！',
      ],
    },
    {
      w: 0.1,
      h: (first, second) => [
        '究竟会是 ',
        first,
        ' 还是 ',
        second,
        '！要到最后一刻才会揭晓悬念了吗！',
      ],
    },
  ],
  top_reports: [
    (top) => [top, ' 牢牢把持着头位！'],
    (top) => ['太快了太快了！', top, ' 一骑绝尘！'],
    (top) => [top, ' 状态绝佳！要一路冲下去了吗！'],
    (top) => ['持续领先！终盘的 ', top, ' 似乎已无人能敌！'],
    (top) => [top, ' 即将迎来胜利！'],
    (top) => [top, '！', top, '！'],
  ],
  /**
   * @param {PrintedSpan} champion
   * @param {string} bashin_behind
   * @returns {TextContent}
   */
  get_finish_report(champion, bashin_behind) {
    return [champion, ' 以 ', bashin_behind, ' 率先冲线！'];
  },
  /**
   * @param {PrintedSpan} champion
   * @param {string} bashin_behind
   * @returns {TextContent}
   */
  get_finish_report_begin_race(champion, bashin_behind) {
    return [
      champion,
      ' 以 ',
      bashin_behind,
      ' 率先冲线！',
      Math.random() < 0.5 ? '恭喜出道！' : '期待后续的表现！',
    ];
  },
  ero_common_reports: [
    '呃呃呃呃呃嗯唔唔……',
    '什么东西混着汗一起流下去了……那是我的口水吗❤️❤️❤️',
    '喘气声……会被听到吗……不要再喘了❤️❤️❤️',
    '不够……完全不够啊❤️❤️❤️',
    '哪怕就在现在，在比赛之中高潮也无所谓吧，因为看不出来的——❤️❤️❤️',
    '啊啊❤️❤️❤️热流在体内乱窜，快受不了了❤️❤️❤️',
  ],
  ero_team_reports: ['有看着吗❤️❤️❤️一定特别明显吧❤️❤️❤️'],
  ero_breast_reports: [
    '被欺负个不停的乳头❤️❤️❤️又红又肿，硬得像石子一样❤️❤️❤️',
  ],
  ero_penis_reports: [
    '好丢脸❤️❤️❤️但是想射精的念头完全停不下来❤️❤️❤️',
    '被摄像机对准着奔跑的下半身……想射精❤️❤️❤️想丢脸地被注视着射精到腿软到站不起来啊啊啊啊啊❤️❤️❤️',
    '闻到先走汁的味道了，好难受噢噢噢噢噢啊啊啊啊❤️❤️❤️',
    '嗯❤️❤️❤️……精子要溢出来了……',
  ],
  ero_clitoris_reports: [
    '阴核被强迫接触着空气硬挺着，太羞耻了——❤️❤️❤️',
    '阴蒂被夹得好痛……但好爽——湿答答的淫水直流下来❤️❤️❤️',
    '阴蒂硬梆梆地勃起着，像被电击一样……❤️❤️❤️',
    '淫水黏答答地流到大腿上❤️❤️❤️大家都看得见……！',
  ],
  ero_vagina_reports: [
    '哈啊，这玩具一进去，里面收缩得喘不过气，嗯哈……❤️❤️❤️',
    '腿上和小穴里都是水❤️❤️❤️滑溜溜的触感好羞耻！',
    '不行了，体内抽搐着的感觉太强烈❤️❤️❤️……！',
    '怎么可能❤️❤️❤️夹着这种东西就能满足啊啊啊——❤️❤️❤️',
  ],
  ero_vagina_dildo_reports: [
    '玩具❤️❤️❤️在使劲震着子宫……但还是不够啊……❤️❤️❤️',
    '嗯❤️❤️❤️被顶到深处了❤️❤️❤️咕噜咕噜的……要融化了～❤️❤️❤️',
    '边插边磨，越是不想在意，就越是有感觉❤️❤️❤️不要……！',
    '要边赛跑边被假鸡巴插到高潮了啦嗯噢噢❤️❤️❤️！',
  ],
  ero_anal_reports: [
    '屁眼被撑开了❤️❤️❤️火辣辣的抽搐着……❤️❤️❤️',
    '哈啊❤️❤️❤️菊花的摩擦好难受哦哦哦❤️❤️❤️',
    '不要被甩脱出来呀❤️❤️❤️『排泄』出来的紧张感真不妙啊❤️❤️❤️',
  ],
  ero_tail_reports: ['蠕动的感觉❤️❤️❤️好强烈……像是第二条尾巴❤️❤️❤️'],
  ero_in_body_reports: ['啊呜❤️❤️❤️一边跑步，里面的玩具就一边在动——❤️❤️❤️！'],
  ero_multi_item_reports: ['嗯哦哦哦❤️❤️❤️全身上下都在震动的感觉❤️❤️❤️——！'],
  orgasm_common_reports: ['哦齁齁齁❤️❤️❤️齁齁齁齁❤️❤️❤️——'],
  orgasm_breast_reports: [
    '乳头变硬了……啊❤️❤️❤️身体在颤抖……',
    '乳头、乳头硬得感觉要裂开了嗯哦哦哦❤️❤️❤️！',
  ],
  orgasm_penis_reports: [
    '下面好硬……出来了❤️❤️❤️……！',
    '！！！——好想射更多——❤️❤️❤️！',
  ],
  orgasm_clitoris_reports: ['哦哦啊❤️❤️❤️阴蒂要被捏碎了❤️❤️❤️'],
  orgasm_vagina_reports: ['子宫抽搐得像要撕裂一样了齁噢噢噢噢噢❤️❤️❤️——！'],
  orgasm_vagina_dildo_reports: ['小穴❤️❤️❤️要被假鸡巴戳得肿起来了——❤️❤️❤️'],
  orgasm_anal_reports: [
    '如果在这里出来的话，人生会❤️❤️❤️不要❤️❤️❤️',
    '啊～❤️❤️❤️屁眼被干得发烫❤️❤️❤️塞进塞出的～❤️❤️❤️',
  ],
  orgasm_bv_reports: [
    '奶子和小穴全被玩具占据着❤️❤️❤️淫水在看不见的地方乱喷❤️❤️❤️要喘得像野兽一样了❤️❤️❤️！',
  ],
  orgasm_va_reports: [
    '小穴和屁眼要被硬东西插爆了噢噢噢噢❤️❤️❤️全身像要被撕裂了❤️❤️❤️——！',
  ],

  in_race_pregnant_info: '【选手大着肚子参赛的行为让社会各界议论纷纷】',
  in_race_orgasm_info: '【选手在比赛中公然高潮的行为在社会各界引起轩然大波】',
};
