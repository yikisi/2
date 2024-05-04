const era = require('#/era-electron');

const print_fail_info_in_train = require('#/event/edu/snippets/print-fail-info-in-train');
const palace = require('#/event/snippets/palace');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const event_hooks = require('#/data/event/event-hooks');
const { location_name } = require('#/data/locations');
const { attr_enum, fumble_result } = require('#/data/train-const');
const palace_relation = require('#/event/snippets/palace-relation');

/** @type {Record<string,function(number,HookArg,Record<string,*>,EventObject):Promise<*>>} */
const handlers = {};

/**
 * @param {number} chara_id
 * @param _
 * @param {{attr:number}} extra_flag
 */
handlers[event_hooks.train] = async (chara_id, _, extra_flag) => {
  const chara = get_chara_talk(chara_id).get_colored_name();
  if (!chara_id) {
    chara.content = '自己';
  }
  switch (extra_flag.attr) {
    case attr_enum.speed:
      await era.printAndWait([
        '为了提高速度，',
        get_chara_talk(0).get_colored_name(),
        ' 安排 ',
        chara,
        ' 进行跑步训练……',
      ]);
      break;
    case attr_enum.endurance:
      await era.printAndWait([
        '为了提高耐力，',
        get_chara_talk(0).get_colored_name(),
        ' 安排 ',
        chara,
        ' 进行游泳训练……',
      ]);
      break;
    case attr_enum.strength:
      await era.printAndWait([
        '为了提高力量，',
        get_chara_talk(0).get_colored_name(),
        ' 安排 ',
        chara,
        ' 进行重量训练……',
      ]);
      break;
    case attr_enum.toughness:
      await era.printAndWait([
        '为了锻炼根性，',
        get_chara_talk(0).get_colored_name(),
        ' 安排 ',
        chara,
        ' 进行上坡训练……',
      ]);
      break;
    case attr_enum.intelligence:
      await era.printAndWait([
        '为了提高比赛触觉，',
        get_chara_talk(0).get_colored_name(),
        ' 安排 ',
        chara,
        ' 研究比赛录像……',
      ]);
  }
};

/**
 * @param {number} chara_id
 * @param {HookArg} hook
 * @param {{train:number,stamina_ratio:number}} extra_flag
 */
handlers[event_hooks.train_success] = async (chara_id, hook, extra_flag) => {
  const chara_talk = get_chara_talk(chara_id);
  era.print([chara_talk.get_colored_name(), ' 的训练顺利结束了！']);
  era.println();
  if (
    chara_id &&
    !era.get(`status:${chara_id}:摸鱼`) &&
    Math.random() < 0.2 * extra_flag.stamina_ratio
  ) {
    await era.waitAnyKey();
    await print_event_name('热血的追加训练！', chara_talk);

    await era.printAndWait([
      chara_talk.get_colored_name(),
      ' 似乎意犹未尽的样子，是想自主训练吗？',
    ]);
    ['许可！', '会超出计划的……'].forEach((e, i) => {
      era.printButton(`「${e}」`, i + 1);
    });
    if ((await era.input()) === 1) {
      await era.printAndWait([
        get_chara_talk(0).get_colored_name(),
        ' 默许了 ',
        chara_talk.get_colored_name(),
        ` 的自主训练，并称赞了${chara_talk.sex}的干劲`,
      ]);
      hook.arg = true;
    } else {
      await era.printAndWait([
        get_chara_talk(0).get_colored_name(),
        ' 出言禁止了 ',
        chara_talk.get_colored_name(),
        ' 的自主训练，并叮嘱要好好休息',
      ]);
      hook.arg = false;
    }
  }
};

/**
 * @param {number} chara_id
 * @param {HookArg} hook
 * @param {{args:*,fumble:boolean,train:number}} extra_flag
 */
handlers[event_hooks.train_fail] = async (chara_id, hook, extra_flag) => {
  await print_fail_info_in_train(chara_id, extra_flag.train, extra_flag.fumble);
  const chara_talk = get_chara_talk(chara_id);
  era.println();
  extra_flag.args = extra_flag.fumble
    ? fumble_result.fumble
    : fumble_result.fail;
  if (extra_flag.train !== attr_enum.intelligence) {
    await print_event_name(
      extra_flag.fumble ? '在保健室……' : '在训练室……',
      chara_talk,
    );

    await era.printAndWait([chara_talk.get_colored_name(), ' 训练失败了……']);
    era.println();
    era.print('该怎么办呢？');
    era.println();

    if (extra_flag.fumble) {
      era.printButton('「要好好休息！」', 1);
      era.printButton('「用毅力克服！」', 2);
    } else {
      era.printButton('「先在这休养一阵子吧。」', 1);
      era.printButton('「来检讨一下吧！」', 2);
    }
    if ((await era.input()) === 1) {
      hook.arg = 0;
    } else if (Math.random() < extra_flag['args'].ratio.fail_again) {
      hook.arg = -1;
    } else {
      hook.arg = 1;
    }
  }
};

handlers[event_hooks.week_start] = async (chara_id) => {
  const edu_weeks = era.get(`cflag:${chara_id}:育成回合计时`);
  if (edu_weeks !== 143 + 9 || era.get(`cflag:${chara_id}:可再次育成`)) {
    return false;
  }
  const chara = get_chara_talk(chara_id),
    me = get_chara_talk(0);
  await palace(chara, me);
  await palace_relation(chara, me);
};

/**
 * @param {number} chara_id
 * @param {HookArg} hook
 * @param {{lan:string}} extra_flag
 */
handlers[event_hooks.foreign_study] = async (chara_id, hook, extra_flag) => {
  const chara = get_chara_talk(chara_id),
    chara_name = chara.get_colored_name(),
    me = get_chara_talk(0);
  if (!chara_id) {
    chara_name.content = '自己';
  }
  await era.printAndWait([
    '为了能进行基本的外语交流，',
    me.get_colored_name(),
    ' 安排 ',
    chara_name,
    ' 在酒店房间学习……',
  ]);
  const abl = era.get(`abl:${chara_id}:${extra_flag.lan}语`);
  hook.arg =
    abl === 5 ||
    Math.random() <
      (5 - abl) / 5 + (era.get(`abl:0:${extra_flag.lan}语`) > abl) / 2;
  if (hook.arg) {
    await era.printAndWait('临急抱佛脚，起效了！');
  } else {
    await era.printAndWait(['不好！', chara.get_colored_name(), ' 看睡了！']);
  }
};

handlers[event_hooks.foreign_rest] = async (chara_id) => {
  const chara = get_chara_talk(chara_id),
    chara_name = chara.get_colored_name(),
    me = get_chara_talk(0);
  if (!chara_id) {
    chara_name.content = '自己';
  }
  await era.printAndWait([
    '为了恢复状态，',
    me.get_colored_name(),
    ' 订购了当地理疗服务，安排 ',
    chara_name,
    ' 在酒店调理修养……',
  ]);
  await era.printAndWait([
    chara.get_colored_name(),
    ' 的身体素质似乎逐渐恢复了！',
  ]);
};

handlers[event_hooks.foreign_train] = async (chara_id) => {
  const chara = get_chara_talk(chara_id),
    chara_name = chara.get_colored_name(),
    me = get_chara_talk(0);
  if (!chara_id) {
    chara_name.content = '自己';
  }
  await era.printAndWait([
    '为了习惯当地赛场，',
    me.get_colored_name(),
    ' 安排 ',
    chara_name,
    ' 在训练场进行适应训练……',
  ]);
  await era.printAndWait([
    chara.get_colored_name(),
    ' 似乎渐渐习惯当地赛道的质感了！',
  ]);
};

handlers[event_hooks.foreign_travel] = async (chara_id) => {
  const me = get_chara_talk(0);
  await era.printAndWait([
    '为了放松心情，',
    me.get_colored_name(),
    ...(chara_id
      ? [' 和 ', get_chara_talk(chara_id).get_colored_name()]
      : [' 独自']),
    ' 在',
    location_name[era.get('flag:当前位置')],
    '观光……',
  ]);
  await era.printAndWait('虽然花了不少钱，但还是值得的！');
};

handlers[event_hooks.race_start] = async (chara_id) => {
  const chara_talk = get_chara_talk(chara_id);
  await print_event_name('竞赛之前', chara_talk);
  era.printButton('「尽全力就好！」', 1);
  era.printButton('「跑出自己的气势来！」', 2);
  await era.input();
};

/**
 * @param {number} chara_id
 * @param _
 * @param {RaceEndParams} extra_flag
 */
handlers[event_hooks.race_end] = async (chara_id, _, extra_flag) => {
  const chara_talk = get_chara_talk(chara_id);
  if (extra_flag.rank === 1) {
    await print_event_name('竞赛获胜', chara_talk);
    era.printButton('「太棒了！」', 1);
    era.printButton('「往更高的目标迈进吧！」', 2);
  } else if (extra_flag.rank <= 5) {
    await print_event_name('竞赛上榜', chara_talk);
    era.printButton('「今天的表现也很好！」', 1);
    era.printButton('「绝对不能输给她们！」', 2);
  } else if (extra_flag.rank <= 10) {
    await print_event_name('竞赛败北', chara_talk);
    era.printButton('「下次表现一定更好！」', 1);
    era.printButton('「沮丧也不是办法！」', 2);
  } else {
    await print_event_name('下次不会输了！', chara_talk);
    era.printButton('「总有一天绝对会赢！」', 1);
    era.printButton('「你愿意就这样丢脸下去？」', 2);
  }
  await era.input();
};

handlers[event_hooks.crazy_fan_end] = async (chara_id) => {
  console.log(chara_id);
  const chara = get_chara_talk(chara_id),
    me = get_chara_talk(0);
  await era.printAndWait(
    era.get(`relation:${chara_id}:0`) < 0
      ? [
          '不管是参赛还是接受采访，',
          me.get_colored_name(),
          ' 和担当的紧张关系有目共睹，质疑这种紧张关系影响了担当发展的声音一直没有停息。校方对 ',
          me.get_couple_title(),
          ' 的组合开始失去耐心……但有些人比他们更缺乏耐性。',
        ]
      : [
          '或许是 ',
          me.get_colored_name(),
          ' 过于懈怠，又或许是负责马娘的天赋不足，胜利与 ',
          me.get_couple_title(),
          ' 始终遥遥无期。校方对 ',
          me.get_couple_title(),
          ' 的组合开始失去耐心……但有些人比他们更缺乏耐性。',
        ],
    {
      offset: 6,
      width: 12,
    },
  );
  await era.printAndWait(
    [
      me.get_colored_name(),
      ' 手上提着要送给 ',
      chara.get_colored_name(),
      ' 的蜂蜜蛋糕独自走在大雨的路上，只听身后传来一阵急促的脚步声，然后便是后腰钻心的痛楚。',
    ],
    {
      offset: 6,
      width: 12,
    },
  );
  await era.printAndWait(
    [
      me.get_colored_name(),
      ' 被推倒在地，身后来人不断刺向你的背部，直到 ',
      me.get_colored_name(),
      ' 一动也不动。',
    ],
    {
      offset: 6,
      width: 12,
    },
  );
  await era.printAndWait(
    '包裹着蛋糕盒的塑料袋被雨点猛烈地敲打着、敲打着、敲打着……',
    {
      offset: 6,
      width: 12,
    },
  );
  await era.printAndWait('被愤怒的粉丝报复，迎来了结局……', {
    offset: 6,
    width: 12,
  });
  await print_event_name(
    [{ content: '粉丝袭击', color: buff_colors[3] }],
    chara,
    undefined,
    6,
  );
};

/**
 * 通用育成事件
 *
 * @author 雞雞
 * @author 黑奴队长（改编）
 *
 * @param {number} chara_id
 * @param {HookArg} hook
 * @param {*} extra_flag
 * @param {EventObject} event_object
 * @returns {Promise<*>}
 */
module.exports = async (chara_id, hook, extra_flag, event_object) => {
  if (handlers[hook.hook]) {
    return await handlers[hook.hook](chara_id, hook, extra_flag, event_object);
  }
};
