const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');

const event_hooks = require('#/data/event/event-hooks');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const sys_filter_chara = require('#/system/sys-filter-chara');
const recruit_flags = require('#/data/event/recruit-flags');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');

/** @type {Record<string,function(HookArg,*):Promise<boolean|void>>} */
const handlers = {};

handlers[event_hooks.select] = () => {
  if (!sys_check_awake(205)) {
    throw new Error();
  }
  const arr = [`Bonjour～有指示吗 ${sys_get_callname(205, 0)}？`];
  if (era.get('love:205') >= 50) {
    arr.push('叫我的时候不准戳这种地方啦。');
  }
  if (era.get('love:205') >= 75) {
    arr.push('呵呵，可以哦。');
  }
  get_chara_talk(205).say(get_random_entry(arr));
};

handlers[event_hooks.good_morning] = () => {
  const arr = [
    '那么接下来，要玩什么呢？',
    '因为我现在很有精神，精力余裕得有点困扰呢。',
  ];
  if (era.get('love:205') >= 50) {
    arr.push(
      '你太宠着我了吧……有点溺爱了？',
      '从清晨到傍晚，我每分每秒都惦记着你，无时无刻不思念着你。',
    );
  }
  if (era.get('love:205') >= 75) {
    arr.push(
      '我以为我会是个专一的人，在遇到你之前。',
      '我朝你走过去的时候，感觉心脏像情窦初开一样砰砰直跳。',
    );
  }
  get_chara_talk(205).say(get_random_entry(arr));
};

handlers[event_hooks.talk] = async () => {
  if (!sys_check_awake(205)) {
    throw new Error();
  }
  const vp = get_chara_talk(205);
  if (era.get('base:205:体力') < 0.3 * era.get('maxbase:205:体力')) {
    await vp.say_and_wait(
      get_random_entry(['把你的胸膛借给我，好吗？', '我现在连走路都不行啦～']),
    );
  } else {
    const arr = [];
    switch (era.get('cflag:205:干劲')) {
      case 2:
        arr.push('刚刚是我自己在训练，是训练哦。');
        era
          .getAddedCharacters()
          .filter((e) => e !== 205 && era.get(`love:${e}`) >= 50).length > 0 &&
          arr.push(`不能给我讲讲你和${vp.sex}们是怎么相识的吗？`);
        era.get('love:205') >= 50 &&
          arr.push('能对你说『我的爱人』，这种感觉真好。');
        break;
      case 1:
        arr.push(
          '每个人的故事都不一样，我特别喜欢听。',
          '我想让你继续照顾我。',
        );
        break;
      case 0:
        arr.push(
          '等到你可真是太不容易了。',
          '我还是来给『新手』训练员做个示范吧。',
        );
        break;
      case -1:
        arr.push(
          '如果您能抱抱我的话，说不定我的情况能有所好转。',
          '我的热情，无影无踪，无声无息……',
        );
        break;
      case -2:
        arr.push(
          '你要是能送我去休息就再好不过了。',
          '死亡，就是生活的赋税……',
          '你不仅仅是训练员，你还是情场浪子……',
        );
    }
    await vp.say_and_wait(get_random_entry(arr));
  }
};

handlers[event_hooks.office_gift] = () =>
  get_chara_talk(205).say_and_wait(
    get_random_entry(['世事变迁，唯爱永痕。', '我可以把这当成爱吗？']),
  );

handlers[event_hooks.office_study] = () =>
  get_chara_talk(205).say_and_wait(
    get_random_entry([
      '奇怪，你学法语时候也这么磕磕绊绊吗？没有……可恶的天才。',
      '总觉的有你在身边会跳的更好……怎么样，不错吧？',
      '快住手，你是变态也不能这么指导！',
    ]),
  );

handlers[event_hooks.office_cook] = () =>
  get_chara_talk(205).say_and_wait(
    get_random_entry([
      '法国的料理怎么说呢……啊哈哈哈，不聊这个先。',
      '呜，胃要被坏人给抓住啦。',
    ]),
  );

handlers[event_hooks.office_rest] = () =>
  get_chara_talk(205).say_and_wait(
    get_random_entry(['不知道以后会咋样。', '和我一起休息开心吗？']),
  );

handlers[event_hooks.office_prepare] = () =>
  get_chara_talk(205).say_and_wait(
    get_random_entry([
      '请让我为你献上最好的礼物。',
      `今日的胜利，将由我拿下，为了 ${sys_get_callname(205, 0)}。`,
    ]),
  );

handlers[event_hooks.office_game] = () =>
  get_chara_talk(205).say_and_wait(
    get_random_entry([
      `${sys_get_callname(205, 0)}！为什么有人会把Umaisoft叫育婊啊？ `,
      '《刺客信条：特雷森》……从各个方面来说都是对系列所有前作进行的一次全面超越——',
    ]),
  );

handlers[event_hooks.school_atrium] = async () => {
  const vp = get_chara_talk(205),
    temp = await select_action_in_atrium();
  if (temp) {
    await vp.say_and_wait(
      get_random_entry([
        '熟练得可怕……这才是你的老本行吗难道！',
        '和现在比，以前的生活只能说是“等死”呢。',
      ]),
    );
  } else {
    await vp.say_and_wait(
      get_random_entry(['远方我的吻，苦涩伤感。', '我们的命运艰难曲折。']),
    );
  }
};

handlers[event_hooks.school_rooftop] = () =>
  get_chara_talk(205).say_and_wait(
    get_random_entry([
      '锵锵！今天的品质还算蛮在线的。',
      '龙虾大虾烤虾青口贝和烤鱿鱼，配菜是薯条和海鲜泡饭，请好好补补身体。',
    ]),
  );

handlers[event_hooks.out_river] = async (hook) => {
  hook.arg = (await select_action_around_river()) > 0;
  if (hook.arg) {
    await get_chara_talk(205).say_and_wait(
      get_random_entry([
        '请放心牵起我的手，哪怕要远走高飞都行哦。',
        '咕……要被你这种浪漫过敏的直男气死了啦。',
      ]),
    );
  } else {
    await get_chara_talk(205).say_and_wait(
      get_random_entry([
        `钓不上来啦……哼，谢 ${get_chara_talk(0).actual_name} 爷打赏小女。`,
        '大鱼终于上钩了……你前不久也钓到了一条品种不错的？骗人，我都没看到。',
      ]),
    );
  }
};

handlers[event_hooks.out_shopping] = async (hook) => {
  const temp = await select_action_in_shopping_street();
  hook.arg = temp <= 1;
  switch (temp) {
    case 0:
      await get_chara_talk(205).say_and_wait(
        get_random_entry([
          '知道吗？法国的游戏厅除了小情侣，还经常能看到很多小小青梅竹马的。',
          [
            `${sys_get_callname(205, 0)}！是 `,
            sys_get_colored_callname(
              205,
              get_random_entry(
                sys_filter_chara('cflag', '招募状态', recruit_flags.yes).filter(
                  (e) => e !== 205 && era.get(`cflag:${e}:种族`),
                ),
              ),
            ),
            ' 的公仔诶！我可以夹一个吗？',
          ],
          `嗯，输了输了……${
            get_chara_talk(0).actual_name
          }，我们去那边的【挥拳测力机】再战吧。`,
        ]),
      );
      break;
    case 1:
      await get_chara_talk(205).say_and_wait(
        get_random_entry([
          `哇哇哇……${sys_get_callname(205, 0)}！请预支我零花钱。`,
          '巴黎5天4晚豪华游……真抽到了我们怎么安排？',
        ]),
      );
      break;
    case 2:
      await get_chara_talk(205).say_and_wait(
        get_random_entry([
          '你歌唱的可真迷人，或许你该学学《远去的列车》、《玫瑰人生》什么的……',
          '先说好，我喉咙很累了，更不可能在这里和你……',
        ]),
      );
      break;
    case 3:
      await get_chara_talk(205).say_and_wait(
        get_random_entry([
          '非常有沉浸感的佳作，impeccable a tous les sens',
          '师傅说有部老电影很适合我们，叫《Un homme et une femme》——一个男人和一个女人，好奇怪啊，哈哈哈……',
        ]),
      );
  }
};

handlers[event_hooks.out_church] = async () => {
  const me = get_chara_talk(0),
    vp = get_chara_talk(205);
  await era.printAndWait([
    me.get_colored_name(),
    ' 邀请 ',
    sys_get_colored_callname(0, 205),
    `去附近的神社，${vp.sex}开心地答应了。`,
  ]);
  await vp.say_and_wait('你在想什么呢，看上去心不在焉的。');
  await vp.say_and_wait('我先去抽签啦！');
  await vp.say_and_wait(
    Math.random() < 0.5
      ? `【大吉】诶，能再来一次吗？这个我想送给 ${sys_get_callname(205, 0)}`
      : '呜哦哦，这种事，体验一次就够了……',
  );
};

handlers[event_hooks.out_station] = async () => {
  const temp = await select_action_in_station(205);
  switch (temp) {
    case 0:
      await get_chara_talk(205).say_and_wait(
        get_random_entry([
          '这种餐厅，像小情侣约会来的……',
          '这种好地方你怎么找到的！？便宜分量大，根本吃不完！',
        ]),
      );
      break;
    case 1:
      await get_chara_talk(205).say_and_wait(
        get_random_entry([
          '我得好好看看你平时是怎么度过一天的。',
          '怎么不送我花呢？我也喜欢花啊。',
        ]),
      );
      break;
    case 2:
      await get_chara_talk(205).say_and_wait(
        get_random_entry([
          `西瓜……好贵！？而且按块卖的，这合理吗 ${sys_get_callname(205, 0)}？`,
          '我，各种东西都不太会挑…',
          '今天竟然有优惠诶，chanceux～',
        ]),
      );
  }
};

/**
 * 金星公园的日常事件，角色id=205
 *
 * @author 梦露
 */
module.exports = {
  /**
   * @param {HookArg} stage_id
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise<boolean>}
   */
  async run(stage_id, extra_flag, event_object) {
    if (event_object || !handlers[stage_id.hook]) {
      throw new Error('unsupported hook!');
    }
    return !!(await handlers[stage_id.hook](stage_id, extra_flag));
  },
};
