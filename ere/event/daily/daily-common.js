/**
 * @file 日常地文
 *
 * @author 雞雞
 * @author 无名黑奴
 */
const era = require('#/era-electron');

const { sys_get_billings } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const { sys_change_money } = require('#/system/sys-calc-flag');
const sys_filter_chara = require('#/system/sys-filter-chara');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { get_custom_check } = require('#/event/check/check-factory');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const { buff_colors, money_color } = require('#/data/color-const');
const { unexpected_pregnant_enum } = require('#/data/ero/status-const');
const event_hooks = require('#/data/event/event-hooks');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_name } = require('#/data/locations');

/** @type {Record<string,function(number,HookArg,*):Promise<boolean|void>>} */
const handlers = {};

/** @author 雞雞 */
handlers[event_hooks.select] = (chara_id) => {
  const chara = get_chara_talk(chara_id),
    me = get_chara_talk(0);
  if (sys_check_awake(chara_id)) {
    const growth = era.get(`cflag:${chara_id}:成长阶段`);
    if (growth === 0) {
      era.print(
        get_random_entry([
          [
            '幼小的孩子还在牙牙学语，一看到 ',
            me.get_colored_name(),
            ' 就欢快地踏着小碎步奔跑过来。',
          ],
          [
            chara.get_colored_name(),
            ' 在地上不住滚动，',
            me.get_colored_name(),
            ' 担心 ',
            chara.get_colored_name(),
            ' 会不会一滚直接滚到地球的另一端。',
          ],
        ]),
      );
    } else if (growth === 1) {
      let temp =
        era.get(`cflag:${chara_id}:父方角色`) ||
        era.get(`cflag:${chara_id}:母方角色`);
      if (!era.get(`cflag:${temp}:种族`)) {
        temp = get_random_entry(
          sys_filter_chara('cflag', '招募状态', recruit_flags.yes).filter((e) =>
            era.get(`cflag:${e}:种族`),
          ),
        );
      }
      era.print(
        get_random_entry([
          [
            chara.get_colored_name(),
            ' 在认真地翻阅着赛马娘相关的知识书籍，当问起 ',
            chara.get_colored_name(),
            ' 最喜欢的赛马娘时，',
            chara.get_colored_name(),
            ' 总会骄傲地提到 ',
            get_chara_talk(temp).get_colored_name(),
          ],
          [
            chara.get_colored_name(),
            ' 在 ',
            me.get_colored_name(),
            ' 带领下练习奔跑，夕阳下的河边步道映照出两个长长的影子。',
          ],
        ]),
      );
    } else {
      const talk_arr = [
        [
          chara.get_colored_name(),
          ' 向 ',
          get_chara_talk(0).get_colored_name(),
          ' 打了个招呼。',
        ],
        [
          chara.get_colored_name(),
          ' 向 ',
          get_chara_talk(0).get_colored_name(),
          ' 点了点头，表示已经随时候命了。',
        ],
      ];
      if (
        era.get(`cflag:${chara_id}:成长阶段`) === 2 &&
        era.get(`cflag:${chara_id}:育成回合计时`) >= 144
      ) {
        talk_arr.push([
          chara.get_colored_name(),
          ' 随着年龄渐长，已经出落成了如同 ',
          get_chara_talk(
            era.get(`cflag:${chara_id}:母方角色`) ||
              era.get(`cflag:${chara_id}:父方角色`),
          ).get_colored_name(),
          ' 一样的大美人，想必在赛跑生涯上也能青出于蓝吧。',
        ]);
      }
      era.print(get_random_entry(talk_arr));
    }
  } else {
    era.print([chara.get_colored_name(), ' 正沉睡着。']);
  }
};

/** @author 雞雞 */
handlers[event_hooks.good_morning] = (chara_id) => {
  const buffer = [
    [' 竖起了大拇指。'],
    [' 正在专心地阅读着什么。'],
    [' 正在与同学们愉快地聊天。'],
    [' 看起来吃撑了，肚子变得圆鼓鼓的。'],
  ];
  if (!(era.get('cflag:301:育成回合计时') <= 143 + 10)) {
    buffer.push([
      ' 正在接待处向 ',
      sys_get_colored_callname(0, 301),
      ' 查询着什么。',
    ]);
  }
  era.print([
    get_chara_talk(chara_id).get_colored_name(),
    ...get_random_entry(buffer),
  ]);
};

/**
 * @author 雞雞
 * @author 无名黑奴
 */
handlers[event_hooks.good_night] = async (chara_id, hook) => {
  const chara = get_chara_talk(chara_id),
    me = get_chara_talk(0),
    awake = 2 * sys_check_awake(chara_id) + sys_check_awake(0);
  if (awake === 3) {
    const check = get_custom_check(chara_id).is_want_make_love();
    if (check) {
      if (
        await select_yes_or_no(
          [
            '繁忙的一天结束，',
            me.get_colored_name(),
            ' 把 ',
            chara.get_colored_name(),
            ' 送到学生宿舍门口，',
            chara.get_colored_name(),
            ' 扭扭捏捏地提出了一起睡觉的邀请……',
          ],
          '答应',
          '拒绝',
        )
      ) {
        hook.arg = 1;
        await era.printAndWait([
          '在其他人温暖的目光中，脸色绯红的 ',
          chara.get_colored_name(),
          ' 挽着 ',
          me.get_colored_name(),
          ` 的手向${location_name[era.get('flag:当前位置')]}走去……`,
        ]);
      } else if (check === 2) {
        await era.printAndWait([
          '哗，那 ',
          chara.get_colored_name(),
          ' 脸色一变，挟着 ',
          me.get_colored_name(),
          ` 强行向外走，定是要迫${chara.sex}的 `,
          sys_get_colored_callname(chara_id, 0),
          ' 跪地做星努力呀！',
        ]);
        hook.arg = 2;
      } else {
        await era.printAndWait([
          chara.get_colored_name(),
          ' 失落地转身向学生宿舍走去……',
        ]);
        hook.arg = 0;
      }
    } else {
      era.print([
        '繁忙的一天结束，',
        get_chara_talk(0).get_colored_name(),
        ' 把 ',
        chara.get_colored_name(),
        ' 送到学生宿舍门口互道晚安后便各自回去了。',
      ]);
    }
  } else if (awake === 1) {
    era.print([
      '看着睡得正香的 ',
      chara.get_colored_name(),
      '，',
      get_chara_talk(0).get_colored_name(),
      ' 无论如何也做不出把人叫醒的行为，只好亲自送到学生宿舍，才揉着酸痛的肩膀回到训练员公寓。',
    ]);
  } else {
    era.print([
      get_chara_talk(0).get_colored_name(),
      ' 睡得人事不知，只在朦胧中似乎听到了 ',
      chara.get_colored_name(),
      ' 道别的声音。',
    ]);
  }
};

/**
 * @author 雞雞
 * @author 无名黑奴
 */
handlers[event_hooks.talk] = async (chara_id) => {
  const chara = get_chara_talk(chara_id);
  let talk_arr, father_id;
  if (!sys_check_awake(chara_id)) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' 发出轻微的鼾声，睡得正香。',
    ]);
  } else if (era.get(`cflag:${chara_id}:成长阶段`) === 0) {
    await chara.say_and_wait(
      `${!era.get(`cflag:${chara_id}:父方角色`) ? '叭叭' : '麻麻'}……！我是 ${
        chara.name
      } 哦！`,
    );
  } else if (era.get(`cflag:${chara_id}:成长阶段`) === 1) {
    await chara.say_and_wait(
      `${!era.get(`cflag:${chara_id}:父方角色`) ? '爸爸' : '妈妈'}！我饿了！`,
    );
  } else if (
    era.get(`cflag:${chara_id}:成长阶段`) === 2 &&
    era.get(`cflag:${chara_id}:育成回合计时`) >= 144
  ) {
    father_id = era.get(`cflag:${chara_id}:父方角色`);
    const temp = [];
    if (era.get(`talent:${chara_id}:腋毛成长`)) {
      temp.push('腋下长出毛了……');
    }
    if (era.get(`talent:${chara_id}:阴毛成长`)) {
      temp.push('下面长出毛了……');
    }
    if (era.get(`cflag:${chara_id}:性别`) - 1) {
      temp.push('胸部变大了……');
      if (era.get(`talent:${chara_id}:泌乳`)) {
        temp.push('胸部流出白白的东西了……');
      }
    }
    if (era.get(`cflag:${chara_id}:性别`)) {
      temp.push('下面变大了……');
    }
    await chara.say_and_wait([
      !father_id ? '爸爸' : '妈妈',
      '我的身体感觉有点不对劲……那个，',
      get_random_entry(temp),
    ]);
  } else if (
    era.get(`status:${chara_id}:发情`) &&
    (!(father_id = era.get(`cflag:${chara_id}:父方角色`)) ||
      !era.get(`cflag:${chara_id}:母方角色`))
  ) {
    chara.say(
      `哈啊……哈啊……${!father_id ? '爸爸' : '妈妈'}……我好热啊……这就是发情期……？`,
    );
    await era.printAndWait([
      '之后，',
      get_chara_talk(0).get_colored_name(),
      ' 连忙去给 ',
      chara.get_colored_name(),
      ' 买来发情抑制剂。',
    ]);
  } else {
    if (
      era.get(`base:${chara_id}:体力`) <
      0.45 * era.get(`maxbase:${chara_id}:体力`)
    ) {
      talk_arr = [
        [
          chara.get_colored_name(),
          ' 看起来没精打采的，需要让 ',
          chara.get_colored_name(),
          ' 休息了。',
        ],
        [
          chara.get_colored_name(),
          ' 用热切的眼神看向 ',
          get_chara_talk(0).get_colored_name(),
          '，希望得到休息的许可。',
        ],
      ];
    } else if (era.get(`cflag:${chara_id}:育成回合计时`) < 3 * 48) {
      talk_arr = [
        [
          chara.get_colored_name(),
          ' 印堂发黑，全身上下的毛发蓬乱毛躁，看起来干劲极差。',
        ],
        [
          chara.get_colored_name(),
          ' 脸色阴沉，热身运动也做得不太顺利，看起来干劲不足。',
        ],
        [
          chara.get_colored_name(),
          ' 脸部表情相当僵硬，似乎有点紧张，看起来干劲一般。',
        ],
        [
          chara.get_colored_name(),
          ' 愉快地在赛道上进行着热身运动，看起来干劲不错。',
        ],
        [
          chara.get_colored_name(),
          ' 兴高采烈地在赛道上蹦蹦跳跳的，看起来干劲满满。',
        ],
      ];
      talk_arr = [talk_arr[era.get(`cflag:${chara_id}:干劲`) + 2]];
    } else {
      talk_arr = [[chara.get_colored_name(), ' 一直保持着轻松的表情。']];
    }
    await era.printAndWait(get_random_entry(talk_arr));
  }
};

/** @author 雞雞 */
handlers[event_hooks.office_gift] = async (chara_id) => {
  await era.printAndWait([
    get_chara_talk(chara_id).get_colored_name(),
    ' 收到了 ',
    get_chara_talk(0).get_colored_name(),
    ' 的礼物，感到十分的高兴。',
  ]);
};

/** @author 雞雞 */
handlers[event_hooks.office_cook] = async (chara_id) => {
  const me = get_chara_talk(0);
  await era.printAndWait([
    me.get_colored_name(),
    ' 与 ',
    get_chara_talk(chara_id).get_colored_name(),
    ' 在训练员室里一起做饭，',
    me.get_couple_title(),
    ' 决定今天来点健康有机的胡萝卜。',
  ]);
};

/** @author 雞雞 */
handlers[event_hooks.office_study] = async (chara_id) => {
  const chara = get_chara_talk(chara_id);
  await era.printAndWait([
    get_chara_talk(0).get_colored_name(),
    ' 在训练员室里指导 ',
    chara.get_colored_name(),
    ' 学习，成功指导',
    chara.sex,
    '解开了不会的题目。',
  ]);
};

/** @author 雞雞 */
handlers[event_hooks.office_rest] = (chara_id) =>
  era.printAndWait([
    get_chara_talk(0).get_colored_name(),
    ' 与 ',
    get_chara_talk(chara_id).get_colored_name(),
    ' 在训练员室里一起休息，二人脑子放空着度过了一段时间。',
  ]);

/** @author 雞雞 */
handlers[event_hooks.office_prepare] = async (chara_id) => {
  await era.printAndWait([
    get_chara_talk(0).get_colored_name(),
    ' 与 ',
    get_chara_talk(chara_id).get_colored_name(),
    ' 在训练员室里赛前准备，为了迎战接下来的比赛，必须打起十二分精神。',
  ]);
};

/** @author 雞雞 */
handlers[event_hooks.office_game] = (chara_id) =>
  era.printAndWait([
    get_chara_talk(0).get_colored_name(),
    ' 与 ',
    get_chara_talk(chara_id).get_colored_name(),
    ' 在训练员室里一起打游戏机，二人度过了一段快乐的时光。',
  ]);

const money_list = [0, 1500, 5000, 10000];

/**
 * @author 无名黑奴
 *
 * @param {number} chara_id
 */
handlers[event_hooks.borrow_money] = async (chara_id) => {
  const billing = sys_get_billings()[0];
  era.printInColRows(
    { columns: [{ content: '要借多少钱？', type: 'text' }] },
    {
      columns: ['算了', '1500 马币', '5000 马币', '10000 马币'].map((e, i) => {
        return {
          accelerator: i,
          config: { align: 'center', width: 6 },
          content: e,
          type: 'button',
        };
      }),
    },
  );
  let amount = await era.input();
  amount = money_list[amount];
  if (amount) {
    era.printInColRows(
      { columns: [{ content: '要借多久？', type: 'text' }] },
      {
        columns: ['算了', '1 个月', '3 个月', '6 个月'].map((e, i) => {
          return {
            accelerator: i,
            config: { align: 'center', width: 6 },
            content: e,
            type: 'button',
          };
        }),
      },
    );
    let time = await era.input();
    time = (time - 1) * 12 + (time === 1) * 4;
    if (time > 0) {
      let love_buff = era.get(`love:${chara_id}`);
      if (love_buff > 75) {
        love_buff = (love_buff - 75) / 25;
      } else {
        love_buff = 0;
      }
      const repay = Math.ceil(
        (amount * (1 + 0.0125 * (1 - love_buff) * time)) / time,
      );
      if (
        await select_yes_or_no(
          [
            '借款 ',
            { content: amount.toLocaleString(), color: money_color },
            ' 马币，此后 ',
            { content: time.toLocaleString(), color: buff_colors[3] },
            ' 周内每周还款 ',
            { content: repay.toLocaleString(), color: money_color },
            ' 马币，共 ',
            {
              content: (repay * time).toLocaleString(),
              color: money_color,
            },
            ' 马币，接受吗？',
          ],
          '算了',
          '好吧',
        )
      ) {
        sys_change_money(amount);
        billing.creditor = chara_id;
        billing.repay = -repay;
        billing.timer = time;
        era.add('flag:收支', -repay);
        await era.printAndWait([
          get_chara_talk(0).get_colored_name(),
          ' 向 ',
          get_chara_talk(chara_id).get_colored_name(),
          ' 借了 ',
          { content: amount.toLocaleString(), color: money_color },
          ' 马币……',
        ]);
      }
    }
  }
};

/** @author 雞雞 */
handlers[event_hooks.school_atrium] = async (chara_id, hook) => {
  const me = get_chara_talk(0),
    chara = get_chara_talk(chara_id);
  hook.arg = !(await select_action_in_atrium());
  await era.printAndWait(
    hook.arg
      ? [
          me.get_colored_name(),
          ' 与 ',
          chara.get_colored_name(),
          ` 一起来到中庭枯树洞，看着${chara.sex}朝枯树洞里咆哮的样子，`,
          me.get_colored_name(),
          ' 也坚定了要帮助 ',
          chara.get_colored_name(),
          ' 成为最强的决心。',
        ]
      : [
          me.get_colored_name(),
          ' 与 ',
          chara.get_colored_name(),
          ' 一起来到中庭约会，',
          me.get_couple_title(),
          ' 的组合让周围的学生忍不住议论纷纷。',
        ],
  );
};

/** @author 雞雞 */
handlers[event_hooks.school_rooftop] = (chara_id) =>
  era.printAndWait([
    get_chara_talk(0).get_colored_name(),
    ' 与 ',
    get_chara_talk(chara_id).get_colored_name(),
    ' 一起来到天台吃便当，你们互相交换了便当盒里的美食。',
  ]);

/** @author 雞雞 */
handlers[event_hooks.out_river] = async (chara_id, hook) => {
  hook.arg = (await select_action_around_river()) > 0;
  await era.printAndWait([
    get_chara_talk(0).get_colored_name(),
    ' 与 ',
    get_chara_talk(chara_id).get_colored_name(),
    hook.arg
      ? ' 一起来到河边散步，今天也是好心情呢。'
      : ' 一起来到河边钓鱼，希望能钓到大丰收。',
  ]);
};

/** @author 雞雞 */
handlers[event_hooks.out_shopping] = async (chara_id, hook) => {
  const temp = await select_action_in_shopping_street();
  hook.arg = temp <= 1;
  let talk;
  switch (temp) {
    case 0:
      talk = '街机厅，祈祷夹娃娃机不要松开爪子。';
      break;
    case 1:
      talk = '抽奖，会抽到好东西吗？';
      break;
    case 2:
      talk = '卡拉OK，山顶的朋友嗨起来！';
      break;
    case 3:
      talk = '看电影，最近有什么好电影吗？';
  }
  await era.printAndWait([
    get_chara_talk(0).get_colored_name(),
    ' 与 ',
    get_chara_talk(chara_id).get_colored_name(),
    ` 一起来到商店街${talk}`,
  ]);
};

/** @author 雞雞 */
handlers[event_hooks.out_church] = async (chara_id) => {
  await era.printAndWait([
    get_chara_talk(0).get_colored_name(),
    ' 与 ',
    get_chara_talk(chara_id).get_colored_name(),
    ' 一起来到神社祈福。',
  ]);
  if (Math.random() < 0.5) {
    await era.printAndWait([
      '抽到了吉利的签文！此行让 ',
      get_chara_talk(0).get_couple_title(),
      ' 感觉很高兴。',
    ]);
  } else {
    await era.printAndWait([
      '抽到了不吉的签文！此行让 ',
      get_chara_talk(0).get_couple_title(),
      ' 处处提防天降厄运。',
    ]);
  }
};

/** @author 雞雞 */
handlers[event_hooks.out_station] = async (chara_id, hook) => {
  hook.arg = await select_action_in_station(chara_id);
  let talk;
  switch (hook.arg) {
    case 0:
      talk = '吃饭，要吃中华、日料，还是西餐呢？';
      break;
    case 1:
      talk = '约会，两人手牵手的景象吸引了不少眼红群众。';
      break;
    case 2:
      talk = '逛商场，买一点小心意吧。';
  }
  await era.printAndWait([
    get_chara_talk(0).get_colored_name(),
    ' 与 ',
    get_chara_talk(chara_id).get_colored_name(),
    ` 一起来到车站附近${talk}`,
  ]);
};

/**
 * @author 雞雞
 *
 * @param {number} chara_id
 * @param _
 * @param {{stage:number}} extra_flag
 */
handlers[event_hooks.growth] = async (chara_id, _, extra_flag) => {
  const child = get_chara_talk(chara_id),
    father = get_chara_talk(era.get(`cflag:${chara_id}:父方角色`)),
    mother = get_chara_talk(era.get(`cflag:${chara_id}:母方角色`)),
    love = era.get(`love:${mother.id || father.id}`),
    stockholm = era.get(`mark:${mother.id || father.id}:同心`),
    is_pregnant_slave = !mother.id && era.get('flag:惩戒力度') === 3;
  era.drawLine();
  if (extra_flag.stage === 0) {
    // 育儿
    await print_event_name('成长', child);
    if (love >= 90) {
      await era.printAndWait([
        mother.get_colored_name(),
        ' 与 ',
        father.get_colored_name(),
        ' 一起愉快地和孩子玩，三人度过了一段快乐的亲子时光。',
      ]);
      if (
        new LifeEventMarks(chara_id).unexpected_child ===
        unexpected_pregnant_enum.father_sleep
      ) {
        await era.printAndWait([
          father.get_colored_name(),
          ' 看向与自己有点神似的 ',
          child.get_colored_name(),
          '，思考着以后的家庭生活……',
        ]);
      }
    } else {
      if (is_pregnant_slave) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 露出温暖的笑容与孩子玩耍，',
          child.get_colored_name(),
          ' 这孩子也成为了 ',
          mother.get_colored_name(),
          ' 悲惨人生中少数的慰藉。',
        ]);
      } else {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 没有抗拒 ',
          father.get_colored_name(),
          ' 想要和孩子相处的举动，但对 ',
          father.get_colored_name(),
          ' 爱搭不理。',
        ]);
      }
      if (stockholm >= 2) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 最后还是放下了防备，与 ',
          father.get_colored_name(),
          ' 一起跟孩子玩耍。',
        ]);
      }
    }
  } else if (extra_flag.stage === 1) {
    // 本格化
    await print_event_name('本格化', child);
    new LifeEventMarks(chara_id).unexpected_child = 0;
    if (love >= 90) {
      await era.printAndWait([
        mother.get_colored_name(),
        ' 依在 ',
        father.get_colored_name(),
        ' 的肩上看着孩子一天一天成长，露出了幸福的笑容。',
      ]);
    } else {
      if (is_pregnant_slave) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 一想到与自己如此亲昵的孩子很快也会长出羽翼离开自己便感觉失落。',
        ]);
      } else {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 看着孩子一天一天成长，心里对 ',
          father.get_colored_name(),
          ' 的想法就越是复杂。',
        ]);
      }
      if (stockholm >= 2) {
        await era.printAndWait([
          '不过 ',
          mother.get_colored_name(),
          ' 依在 ',
          father.get_colored_name(),
          ' 的肩上看着孩子一天一天成长，还是稍微品尝到了满足感。',
        ]);
      }
    }
  } else if (extra_flag.stage === 2) {
    // 入学
    await print_event_name('入学', child);
    if (love >= 90) {
      await era.printAndWait([
        mother.get_colored_name(),
        ' 与 ',
        father.get_colored_name(),
        ' 在孩子的入学同意书上各自签上了自己的名字。',
      ]);
      await era.printAndWait([
        '下完笔后，',
        mother.get_colored_name(),
        ' 便开始积极地为孩子准备上学需要用的东西。',
      ]);
    } else {
      if (is_pregnant_slave) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 得知孩子也要入学特雷森学园后，突然感到背脊一阵发凉……',
        ]);
      } else {
        await era.printAndWait([
          mother.get_colored_name(),
          ' 与 ',
          father.get_colored_name(),
          ' 在孩子的入学同意书上各自签上了自己的名字。',
        ]);
        await era.printAndWait([
          '直到下完笔后，',
          mother.get_colored_name(),
          ' 仍然会感到一股非现实的虚幻感。',
        ]);
      }
      if (stockholm >= 2) {
        await era.printAndWait([
          '不过 ',
          mother.get_colored_name(),
          ' 还是把这些念头抛开，积极地为孩子准备上学需要用的东西。',
        ]);
      }
    }
  }
};

handlers[
  event_hooks.celebration
] = require('#/event/daily/common-lines/common-celebration');

/** @author 雞雞 */
handlers[event_hooks.slave_end] = async (chara_id) => {
  const me = get_chara_talk(0);
  await era.printAndWait(
    [
      '被金钱腐朽的 ',
      me.get_colored_name(),
      ' 踏上了不能选择的道路——抛弃自尊与自己的学生借钱……',
    ],
    {
      offset: 6,
      width: 12,
    },
  );
  await era.printAndWait('然而所有命运的馈赠，都在背地里标好了价码。', {
    offset: 6,
    width: 12,
  });
  await era.printAndWait(
    [
      me.get_colored_name(),
      ' 的借款，在如雪球一般的利滚利下终于超越了你所能承受之重。',
    ],
    {
      offset: 6,
      width: 12,
    },
  );
  await era.printAndWait(
    ['接下来便是 ', me.get_colored_name(), ' 偿还代价的时候了……'],
    {
      offset: 6,
      width: 12,
    },
  );
  await era.printAndWait(
    ['因成为金钱的奴隶，', me.get_colored_name(), ' 迎来了结局……'],
    {
      offset: 6,
      width: 12,
    },
  );
  await print_event_name(
    [{ content: '金钱奴隶', color: buff_colors[3] }],
    get_chara_talk(chara_id),
    undefined,
    6,
  );
};

/** @author 雞雞 */
handlers[event_hooks.basement_end] = async (chara_id) => {
  const chara = get_chara_talk(chara_id),
    me = get_chara_talk(0);
  await era.printAndWait('在特雷森，一个任何探测器都检测不到的地下室中……', {
    offset: 6,
    width: 12,
  });
  await era.printAndWait(
    [
      me.get_colored_name(),
      ' 拼命地想要挣脱绑住手脚的绳子，却只勒得自己生疼。',
    ],
    {
      offset: 6,
      width: 12,
    },
  );
  await era.printAndWait(
    [
      chara.get_colored_name(),
      ' 坐到床边对 ',
      me.get_colored_name(),
      ' 露出嫣然一笑，并且温柔地呵护着 ',
      me.get_colored_name(),
    ],
    {
      offset: 6,
      width: 12,
    },
  );
  await era.printAndWait(
    ['但 ', me.get_colored_name(), ' 的心中唯有对未知未来的深邃恐惧……'],
    {
      offset: 6,
      width: 12,
    },
  );
  await era.printAndWait(
    [
      '被 ',
      chara.get_colored_name(),
      ' 的爱意所囚禁，',
      me.get_colored_name(),
      ' 迎来了结局……',
    ],
    {
      offset: 6,
      width: 12,
    },
  );
  await print_event_name(
    [{ content: '情爱囹圄', color: buff_colors[3] }],
    chara,
    undefined,
    6,
  );
};

/**
 * @author 无名黑奴
 *
 * @param {number} chara_id
 */
handlers[event_hooks.load_talk] = async (chara_id) => {
  let temp;
  switch (era.get(`cflag:${chara_id}:成长阶段`)) {
    case 0:
      temp = era.get(`cflag:${chara_id}:父方角色`) ? '麻麻' : '叭叭';
      await get_chara_talk(chara_id).say_and_wait(
        `呜呜哇哇哇——${temp}——我要${temp}——`,
      );
      break;
    case 1:
      await get_chara_talk(chara_id).say_and_wait(
        `${sys_get_callname(
          chara_id,
          0,
        )}……啊喏……能不能，不要丢下${sys_get_callname(0, chara_id)}……（抽泣）`,
      );
  }
};

/**
 * @param {number} chara_id
 * @param {HookArg} hook
 * @param {*} extra_flag
 */
module.exports = async (chara_id, hook, extra_flag) => {
  if (handlers[hook.hook]) {
    return await handlers[hook.hook](chara_id, hook, extra_flag);
  }
  return false;
};
