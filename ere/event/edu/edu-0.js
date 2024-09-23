/**
 * @file 玩家 - 育成
 *
 * @author 雞雞
 * @author 天马闪光蹄
 */
const {
  add,
  get,
  input,
  print,
  printAndWait,
  printButton,
  printInColRows,
  println,
  replaceInColRows,
  set,
  waitAnyKey,
} = require('#/era-electron');

const check_team_limit = require('#/system/chara/sys-check-team-limit');
const sys_get_random_uma_god = require('#/system/chara/sys-get-random-uma-god');
const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_change_fame, sys_change_money } = require('#/system/sys-calc-flag');
const sys_filter_chara = require('#/system/sys-filter-chara');
const { reset_chara } = require('#/system/sys-init-chara');

const { get_custom_check } = require('#/event/check/check-factory');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { get_chara_color } = require('#/data/chara-colors');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const recruit_flags = require('#/data/event/recruit-flags');

/** @type {Record<string,function(CharaTalk):Promise>} */
const handlers = {};

/** @author 天马闪光蹄 */
handlers.second_chance = async (me) => {
  const team_limit = -check_team_limit();
  let second_list = sys_filter_chara(
    'cflag',
    '招募状态',
    recruit_flags.yes,
  ).filter((e) => get(`cflag:${e}:可再次育成`) > 0);
  if (second_list.length === 0 || team_limit <= 0) {
    return;
  }
  let yes_button = '继续前进',
    no_button = '就此回头';
  await print_event_name('「梦」', me);
  if (get('flag:初见重复育成') === 1) {
    await printAndWait('夜深人静。');
    await printAndWait([me.get_colored_name(), ' 独自前往特雷森的学院中心。']);
    await printAndWait('一尊三女神的雕塑安然竖立于此。');
    await printAndWait([
      me.get_colored_name(),
      ' 深呼吸，走向泉边，将自己先前所写的书信敬上，投入水中。',
    ]);
    await printAndWait([
      '池里倒映的月光霎时轻摇起来，一片幽光浮动，',
      me.get_colored_name(),
      ' 感觉到数个声音一齐在脑中回荡——',
    ]);
    await printAndWait(
      '人生无常，无论是一马当先的勇者，统治世代的霸主又或是制御领域的帝皇，所经之路都未必一帆风顺，无论光辉黑暗，终究是梦幻的泡影。',
    );
    await printAndWait(
      '不过，噩梦终会逝去，美梦也能成真。浮沫中，也有想要捞出保存的事物。',
    );
    await me.say_as_unknown_and_wait('那么，告诉我你的决心。');
    yes_button = '「我就是为此而来」';
    no_button = '「……已经够了」';
  } else {
    await printAndWait([me.get_colored_name(), ' 又一次回到了这个地方。']);
    await printAndWait([
      '这是……第几次？',
      me.get_colored_name(),
      ' 对此的记忆诡异地模糊起来。',
    ]);
    await printAndWait('不过，这不是关键……');
    await printAndWait([me.get_colored_name(), ' 心中所想之事，才是必需。']);
  }
  const second_dict = {};
  let second_count = 0,
    flag_print = true,
    flag_select = true;
  while (flag_select) {
    (flag_print ? printInColRows : replaceInColRows)(
      {
        columns: [
          {
            type: 'divider',
            config: {
              content: `请选择要再次育成的角色 (最多选择 ${team_limit} 名)`,
            },
          },
          ...second_list.map((e) => ({
            accelerator: e,
            config: {
              align: 'center',
              buttonType: second_dict[e] ? 'warning' : 'info',
              disabled: get(`cflag:${e}:被继承`),
              width: 8,
            },
            content: `${get(`callname:${e}:-1`)}${get(`cflag:${e}:被继承`) ? ' (已被继承)' : ''}`,
            type: 'button',
          })),
        ],
        config: { horizontalAlign: 'space-evenly' },
      },
      [
        {
          accelerator: 1001,
          config: {
            align: 'center',
            disabled: second_count === 0 || second_count > team_limit,
            width: 12,
          },
          content: yes_button,
          type: 'button',
        },
        {
          accelerator: 1002,
          config: { align: 'center', width: 12 },
          content: no_button,
          type: 'button',
        },
      ],
    );
    flag_print = false;
    const ret = await input({ hideInput: true });
    if (ret === 1001) {
      flag_select = false;
    } else if (ret === 1002) {
      Object.keys(second_dict).forEach((k) => delete second_dict[k]);
      flag_select = false;
    } else {
      if ((second_dict[ret] = !second_dict[ret])) {
        second_count++;
      } else {
        second_count--;
      }
    }
  }
  second_list = Object.entries(second_dict)
    .filter((e) => e[1])
    .map((e) => Number(e[0]));
  if (second_list.length > 0) {
    println();
    if (get('flag:初见重复育成') === 1) {
      await printAndWait([
        me.get_colored_name(),
        ' 望向雕像的面部，盯着那三对灵动似真的眼眸，俯首行礼。',
      ]);
      await printAndWait('随后，一片光彩绽放——');
      await printAndWait('是时候追寻「下一次」的真实了。');
    } else {
      await printAndWait([
        me.get_colored_name(),
        ' 看着三女神的塑像，水雾模糊了她们的面容，',
        me.get_colored_name(),
        ' 想做些什么，刚欲张口伸手，却——',
      ]);
      await printAndWait('眼前的一切在面前扭曲。');
      await printAndWait('随后立刻恢复，仿佛什么都没发生过。');
      await printAndWait('……');
      await printAndWait('一切如常……或有不同？');
      await printAndWait('自己……做了什么来着？');
    }
    second_list.forEach((e) => {
      set(`cflag:${e}:育成回合计时`, 'x');
      reset_chara(e);
      get_custom_check(e).check_second_chance();
    });
  }
  set('flag:初见重复育成', 2);
};

/** @author 雞雞 */
handlers.god_coin = async (me) => {
  const cur_weeks = get('flag:当前回合数'),
    next_year = Math.floor((cur_weeks + 47) / 48) * 48;
  new MyEduMarks().god = next_year + get_random_value(13, 40) - cur_weeks;
  if (cur_weeks % 48 >= 13 && cur_weeks % 48 <= 40) {
    await print_event_name('三女神雕像下的许愿池', me);
  }
  await printAndWait('投个硬币许个愿吧……');
  const dice = Math.random(),
    god = sys_get_random_uma_god();
  if (dice < 0.4 && god) {
    await printAndWait('是……幻听吗？听到了会让人莫名亲近并信赖的声音呢……');
    const color = get_chara_color(god);
    switch (god) {
      case 340:
        await printAndWait('热情的，红色的声音……', {
          color,
        });
        break;
      case 341:
        await printAndWait('包容的，蓝色的声音……', {
          color,
        });
        break;
      case 342:
        await printAndWait('严厉的，黄色的声音……', {
          color,
        });
    }
    println();
    sys_like_chara(god, 0, get_random_value(10, 20)) && (await waitAnyKey());
  } else if (dice < 0.7) {
    await printAndWait('啊……这个说不定可以……？');
    await printAndWait(
      '不过虽然这么说……好像什么都没想到，但是仔细想想似乎又明白了什么……',
    );
    const cur_chara = get('flag:当前互动角色');
    if (
      get(`cflag:${cur_chara}:育成回合计时`) < 3 * 48 ||
      (cur_chara === 0 && get('cflag:0:种族'))
    ) {
      get_attr_and_print_in_event(
        cur_chara,
        [0, 0, 0, 0, 3],
        get_random_value(0, 10),
      ) && (await waitAnyKey());
    }
  } else if (dice < 0.9) {
    await printAndWait('果然无事发生呢……');
  } else {
    await printAndWait('捡起来的时候变成了两枚！');
    sys_change_money(50);
  }
};

/** @author 雞雞 */
handlers.experiment = async (me) => {
  new MyEduMarks().experiment = get_random_value(36, 60);
  await print_event_name('废旧理科教室探险', me);
  await me.say_and_wait('有人吗……');
  println();
  await printAndWait('没听说这件教室有被另外采用啊……');
  await printAndWait([
    '唐突的大雨，唐突的雷声，像是被驱赶了似的，',
    me.get_colored_name(),
    ' 来到了这件小小的宝库。',
  ]);
  println();
  await me.say_and_wait('大概是，让我选一样的意思？');
  println();
  await printAndWait('一支装在束带中的酒红色药剂');
  await printAndWait('和一只有些破旧的黑猫玩偶');
  println();
  me.say('选哪个呢……', true);
  printButton('药剂（耐力+? or 体力+50）', 1);
  printButton('玩偶（智力+8，技能点数+?）', 2);
  let wait_flag;
  if ((await input()) === 1) {
    get_chara_talk(32);
    if (Math.random() < 0.5) {
      await printAndWait('好苦——');
      wait_flag = get_attr_and_print_in_event(
        0,
        [0, get_random_value(0, 10)],
        0,
      );
    } else {
      await printAndWait('好辣——');
      wait_flag = get_attr_and_print_in_event(
        0,
        undefined,
        0,
        JSON.parse('{"体力":50}'),
      );
    }
    wait_flag = sys_like_chara(32, 0, get_random_value(5, 15)) || wait_flag;
  } else {
    const coffee = get_chara_talk(25);
    await coffee.say_as_unknown_and_wait('呦西呦西呦西呦西——');
    await coffee.say_as_unknown_and_wait('嗯……？');
    await printAndWait(
      `好像有看见窗外有${coffee.get_uma_sex_title()}的影子掠过？怎么可能～这里可不是一楼啊。`,
    );
    wait_flag = get_attr_and_print_in_event(
      0,
      [0, 0, 0, 0, 8],
      get_random_value(0, 10),
    );
    wait_flag = sys_like_chara(25, 0, get_random_value(5, 15)) || wait_flag;
  }
  wait_flag && (await waitAnyKey());
};

/** @author 雞雞 */
handlers.custom = async (me) => {
  new MyEduMarks().custom = get_random_value(24, 48);
  await print_event_name('习惯成自然', me);
  await printAndWait([
    '某天下午 ',
    me.get_colored_name(),
    ' 在最近开始游玩的手机游戏《闪光的优秀少女》里又遇到低机率的训练失败了……习惯就好……',
  ]);
  printButton('「……习惯个屁！」（马币-50，育成中马娘体力+15%）', 1, {
    disabled: get('flag:当前马币') < 50,
  });
  printButton('「习惯就好！」', 2);
  if ((await input()) === 1) {
    await printAndWait([
      me.get_colored_name(),
      ' 直接使出了成年人的魔法・氪金！',
    ]);
    add('flag:当前马币', -50);
    sys_filter_chara('cflag', '招募状态', recruit_flags.yes)
      .filter((e) => get(`cflag:${e}:育成回合计时`) < 3 * 48)
      .forEach((e) =>
        sys_change_attr_and_print(e, '体力', get(`maxbase:${e}:体力`) * 0.15),
      );
  } else {
    await printAndWait([me.get_colored_name(), ' 按住了把手机摔烂的冲动……']);
  }
};

/** @author 雞雞 */
handlers.trainer_race = async (me) => {
  new MyEduMarks().trainer_race = get_random_value(24, 48);
  await print_event_name('随风飘扬的海报', me);
  await printAndWait([
    '前往特雷森学园的路上，一张海报随风哗啦一声地拍到了 ',
    me.get_colored_name(),
    ' 的脸上。',
  ]);
  await printAndWait([
    '把海报摘下来一看，似乎是只面向训练员的',
    get_random_entry(['短跑', '游泳', '登山）']),
    '比赛，上面写着哪怕对体质没自信现场也会有官方支援的样子，要参加吗？',
  ]);
  printButton('（试试也不会少块肉？）（体力&精力-25%，可能获得奖品）', 1);
  printButton('（忙死了，哪来的时间参加啊——！）', 2);
  if ((await input()) === 1) {
    await printAndWait(
      '在接受诡异的针炙后竟然顺利获胜了！还得到了主办方安排的奖品！',
    );
    await printAndWait(
      '但顺利得让人背脊发凉啊……就像是自己被当成什么实验品一样……',
    );
    println();
    sys_change_attr_and_print(0, '体力', -get('maxbase:0:体力') * 0.25);
    sys_change_attr_and_print(0, '精力', -get('maxbase:0:精力') * 0.25);
    const item = get_random_entry([
      ...new Array(4).fill(0).map((e) => 700 + e),
      ...new Array(4).fill(0).map((e) => 705 + e),
      ...new Array(7).fill(0).map((e) => 850 + e),
    ]);
    print([`获得了奖品：[${get(`itemname:${item}`)}]！`]);
    add(`item:${item}`, 1);
    sys_like_chara(305, 0, get_random_value(0, 10));
    await waitAnyKey();
  } else {
    await printAndWait([
      '后来听说是 ',
      get_chara_talk(304).get_colored_name(),
      ' 在没有支援的场合下获胜了的样子。',
    ]);
    await printAndWait('果然，那个人强得像鬼一样……');
  }
};

/** @author 雞雞 */
handlers.bankruptcy = async (me) => {
  new MyEduMarks().bankruptcy = 1;
  await print_event_name('破产', me);
  await printAndWait([
    '游手好闲不好好工作？抑或时运实在不站在 ',
    me.get_colored_name(),
    ' 身边？总之 ',
    me.get_colored_name(),
    ' 还是让银行户头的数字见底了！',
  ]);
  await printAndWait([
    '虽然很可悲，但只能请求负责马',
    get('flag:角色性别') === 1 ? '郎' : '娘',
    '慷慨解囊了……吗？',
  ]);
  printButton('「怎么会这样……」', 1);
  await input();
};

/** @author 雞雞 */
handlers.reject = async (me) => {
  await print_event_name('污蔑，都是污蔑！', me);
  await printAndWait('不知何故，最近在校园走路的时候总会引来窃窃私语。');
  await printAndWait([
    me.get_colored_name(),
    ' 尝试探查一番后发现，自己竟然在不知不觉间被当成了负心渣',
    me.get_phy_sex_title()[0],
    '？ ！',
  ]);
  printButton('「我不是，我没有！」', 1);
  await input();
  sys_change_fame(-20);
};

/** @author 雞雞 */
handlers.work_over = async (me) => {
  new MyEduMarks().work_over = get_random_value(12, 36);
  await print_event_name('人生无常之加班', me);
  await printAndWait('训练员这工作高薪厚职，但并不好做。');
  await printAndWait([
    '除了负责自己旗下赛马',
    get('flag:角色性别') === 1 ? '郎' : '娘',
    '的训练外，还有校园事务记者发布会财务管理撰写研究报告等等繁重职责。',
  ]);
  println();
  await printAndWait('今天也是喝能量饮料强撑、睡办公室桌下的一天。');
  printButton('「地板好硬……」', 1);
  get_attr_and_print_in_event(0, undefined, 0, JSON.parse('{"体力":-50}')) &&
    (await waitAnyKey());
};

/** @author 雞雞 */
handlers.sick = async (me) => {
  new MyEduMarks().sick = get_random_value(36, 60);
  await print_event_name('人生无常之生病', me);
  await printAndWait([
    me.get_colored_name(),
    ' 一觉起来便觉头昏脑胀、昏昏欲睡，总之便是浑身不对劲。',
  ]);
  printButton('「丢哪妈，顶硬上！」', 1);
  printButton('「打电话请假，然后去看医生吧……」', 2);
  if ((await input()) === 1) {
    get_attr_and_print_in_event(0, undefined, 0, JSON.parse('{"体力":-50}')) &&
      (await waitAnyKey());
    sys_change_money(get_random_value(10, 20));
  } else {
    sys_like_chara(305, 0, get_random_value(0, 10)) && (await waitAnyKey());
  }
};

/**
 * @param {HookArg} hook
 * @param _
 * @param {EventObject} event_object
 */
module.exports = async (hook, _, event_object) => {
  if (!handlers[event_object?.arg]) {
    throw new Error();
  }
  return await handlers[event_object?.arg](get_chara_talk(0));
};
