const {
  get,
  input,
  printAndWait,
  printMultiColumns,
} = require('#/era-electron');

const {
  sys_get_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const god_love_common = require('#/event/love/snippets/god-love-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { skin_colors } = require('#/data/const.json');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const DarleyLifeMarks = require('#/data/event/life-event-marks/life-event-marks-340');
const { get_skin } = require('#/data/info-generator');

/** @type {Record<string,function(CharaTalk,CharaTalk,string):Promise<boolean|void>>} */
const handlers = {};

handlers[49] = async (god, me) => {
  await print_event_name('追寻女神像的「目光」', god);
  await printAndWait([
    '在似乎完全没有意义的一番搜索后，',
    me.get_colored_name(),
    ' 仍旧在被谁偷偷看着。',
  ]);
  await printAndWait('嗯…如果需要进一步描述的话，并不是那种带有恶意的目光吧。');
  await printAndWait('要说的话大概是猫舌头？');
  await printAndWait(
    '柔软……又温暖……但是有着能让肌肤发痒的柔韧倒刺，而且不知道什么时候就已经被缠上潜到了身后的感觉也很相似。',
  );
  await printAndWait('要不要向女神大人祈祷一下呢……');
  new DarleyLifeMarks().love = 1;
  if (get('love:340') === 49) {
    await sys_love_uma_in_event(340);
  }
};

handlers[50] = async (god, me, callname) => {
  await print_event_name('与你共同的梦', god);
  await printAndWait('轻巧矫健地攀上了床。');
  await printAndWait(['双手下撑将 ', me.get_colored_name(), ' 固定在了身下。']);
  await printAndWait('像是打量着该从哪里开始下手似的投来翠色的目光。');
  await printAndWait([
    '这也是梦的一环吗…以一个出奇淡漠的视角，',
    me.get_colored_name(),
    ' 看着自己的房间里多出了一只红色头发、肤色',
    { color: skin_colors['麦黄'], content: '麦黄' },
    '的马娘，看着',
    god.get_colored_sex(),
    '像雌豹一样将床上的 ',
    me.get_colored_name(),
    ' 扑在了身下，然后是kiss……',
  ]);
  await printAndWait([
    '再之后的……就是蒙进了雾中般的……汗淋淋纠缠在一起的',
    me.get_phy_sex_title(),
    '与马娘的身体……',
  ]);
  printMultiColumns(
    [
      { content: '亵渎（让祂怀上神胎）', type: 'button' },
      {
        config: { disabled: me.sex_code === 1 },
        content:
          get('cflag:0:妊娠阶段') >> pregnant_stage_enum.embryo
            ? '献身（将腹中胎儿变成神胎）'
            : '献身（自己怀上神胎）',
        type: 'button',
      },
      { content: '只是祈祷', type: 'button' },
    ].map((e, i) => {
      e.accelerator = i;
      e.config ||= {};
      e.config.width = 12;
      return e;
    }),
  );
  await god_love_common(
    await input(),
    god,
    me,
    callname,
    () =>
      printAndWait([
        '就算是梦中，就算是面对眼前莫名带着出尘高贵气质的马娘小姐，也没有屈居于身下的理由吧！',
      ])
        .then(() =>
          printAndWait([
            '在面前马娘小姐惊诧的目光下，因上涌的火烧似的的灼热感了失去理智的 ',
            me.get_colored_name(),
            '，同床上小羊羔似的被摆弄着的 ',
            me.get_colored_name(),
            ' 的身体合在了一起，睁开浑浊的眼睛反擒住了那双手。',
          ]),
        )
        .then(() =>
          printAndWait([
            '紧接着，激烈抵抗着的身体与身体，',
            ...(get('cflag:0:肤色深度') === get('cflag:340:肤色深度')
              ? ['褐肤的女神屈从在了那与自己有着相同的肤色的孩子之下。']
              : [
                  { color: skin_colors['麦黄'], content: '麦黄' },
                  '被',
                  { color: skin_colors[get_skin(0)], content: get_skin(0) },
                  '压倒',
                ]),
          ]),
        ),
    () =>
      printAndWait('完全没有力气抵抗。')
        .then(() =>
          printAndWait(
            '现在身体如此诉说着，面前的马娘小姐是毫无疑问的上位者。',
          ),
        )
        .then(() =>
          printAndWait(
            '就算身为训练员被这样平时视为学生的马娘小姐欺在身下相当羞耻，就算被骑上了床，就算被那熟练的唇舌夺去了吻，就算面前的狩猎者直到如此也不愿停下——',
          ),
        )
        .then(() =>
          printAndWait([me.get_colored_name(), ' 所能做的，也唯有献身……吧……']),
        ),
    () =>
      printAndWait('……').then(() => printAndWait(['嘶……今天也是……梦……吗。'])),
    () =>
      printAndWait('是梦吧。')
        .then(() =>
          printAndWait([
            '虽然在梦中发觉了自己是在做梦似乎有些奇怪，但现在这幅 ',
            me.get_colored_name(),
            ' 正看着 ',
            me.get_colored_name(),
            ' 与',
            god.get_colored_sex(),
            '的场景就是梦吧。',
          ]),
        )
        .then(() =>
          printAndWait([
            '所以，就算这边的唇也已感受到了那份柔软，就算那边的',
            me.sex,
            '与',
            god.get_colored_sex(),
            '已经变得赤裸而妖艳，就算 ',
            me.get_couple_title(),
            ' 已如蛇般将光滑的身体纠缠在了一起，',
          ]),
        )
        .then(() => printAndWait('只要……继续祈祷……')),
  );
};

/**
 * 达利阿拉伯 - 爱慕
 *
 * @author O口口口口口
 *
 * @param _
 * @param __
 * @param {EventObject} event_object
 */
module.exports = async (_, __, event_object) => {
  if (!handlers[event_object.arg]) {
    throw new Error();
  }
  return await handlers[event_object.arg](
    get_chara_talk(340),
    get_chara_talk(0),
    sys_get_callname(340, 0),
    event_object,
  );
};
