/**
 * @file 玩家 - 育成
 * @author 雞雞
 * @author 天马闪光蹄
 * @author イーウィヤ
 * @author 幽白書
 * @author Mr.E.
 */
const {
  add,
  get,
  getAddedCharacters,
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
const sys_rape_in_sleeping = require('#/system/ero/sys-rape-in-sleeping');
const global_achievement = require('#/system/global/sys-calc-achievement');
const {
  sys_change_attr_and_print,
  sys_change_lust,
  sys_change_motivation,
  sys_reg_race,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');
const {
  sys_check_awake,
  sys_check_remote,
} = require('#/system/sys-calc-chara-param');
const { sys_change_fame, sys_change_money } = require('#/system/sys-calc-flag');
const sys_filter_chara = require('#/system/sys-filter-chara');
const { reset_chara } = require('#/system/sys-init-chara');

const { get_custom_check } = require('#/event/check/check-factory');
const kojo = require('#/event/edu/edu-0.kojo');
const StrangeDayEvents = require('#/event/edu/edu-events-0/strange-day');
const { add_event } = require('#/event/queue');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const print_name_and_show_kojo = require('#/event/snippets/print-name-and-show-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_extremum_entry, get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { get_chara_color } = require('#/data/chara-colors');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const { max_chara_id } = require('#/data/other-const');
const { attr_enum } = require('#/data/train-const');

const { i18n } = require('#/i18n/selector');

module.exports = class extends StrangeDayEvents {
  get dict() {
    return {
      YOU: get('callname:0:-2'),
      ...(get('flag:角色性别') === 1
        ? { UMA: '马郎', SHE: '他' }
        : { UMA: '马娘', SHE: '她' }),
    };
  }

  /**
   * @author 天马闪光蹄
   * @param {CharaTalk} me
   */
  async second_chance(me) {
    const team_limit = -check_team_limit();
    let second_list = sys_filter_chara(
      'cflag',
      '招募状态',
      recruit_flags.yes,
    ).filter(
      (cid) =>
        cid > 0 &&
        get(`cflag:${cid}:种族`) > 0 &&
        get(`cflag:${cid}:可再次育成`) > 0,
    );
    if (second_list.length === 0 || team_limit <= 0) {
      return;
    }
    let yes_button = '继续前进',
      no_button = '就此回头';
    await print_event_name('「梦」', me);
    if (get('flag:初见重复育成') === 1) {
      await printAndWait('夜深人静。');
      await printAndWait([
        me.get_colored_name(),
        ' 独自前往特雷森的学院中心。',
      ]);
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
                disabled: get(`cflag:${e}:被继承`) > 0,
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
      second_list.forEach((cid) => {
        // CFLAGNAME:48 = 育成回合计时
        set(`cflag:${cid}:48`, 'x');
        // CFLAGNAME:49 = 育成次数
        if (get(`cflag:${cid}:49`) === 7) {
          global_achievement.chan_mor = 1;
        }
        reset_chara(cid);
        get_custom_check(cid).check_second_chance();
      });
    }
    // FLAGNAME:32 = 初见重复育成
    set('flag:32', 2);
  }

  /**
   * @author イーウィヤ
   * @param {CharaTalk} me
   */
  async god_coin(me) {
    const cur_weeks = get('flag:当前回合数'),
      next_year = Math.floor((cur_weeks + 47) / 48) * 48;
    new MyEduMarks().god = next_year + get_random_value(13, 40) - cur_weeks;
    await print_event_name('三女神雕像下的许愿池', me);
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
    return true;
  }

  /**
   * @author イーウィヤ
   * @param {CharaTalk} me
   */
  async experiment(me) {
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
        wait_flag = get_attr_and_print_in_event(0, undefined, 0, [50]);
      }
      wait_flag = sys_like_chara(32, 0, get_random_value(5, 15)) || wait_flag;
    } else {
      const coffee = get_chara_talk(25);
      await get_chara_talk(400).say_as_unknown_and_wait('呦西呦西呦西呦西——');
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
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} me
   */
  async custom(me) {
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
          sys_change_attr_and_print(
            e,
            attr_enum.hp,
            get(`maxbase:${e}:体力`) * 0.15,
          ),
        );
    } else {
      await printAndWait([me.get_colored_name(), ' 按住了把手机摔烂的冲动……']);
    }
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} me
   */
  async trainer_race(me) {
    new MyEduMarks().trainer_race = get_random_value(24, 48);
    await print_event_name('随风飘扬的海报', me);
    await printAndWait([
      '前往特雷森学园的路上，一张海报随风哗啦一声地拍到了 ',
      me.get_colored_name(),
      ' 的脸上。',
    ]);
    await printAndWait([
      '把海报摘下来一看，似乎是只面向训练员的',
      get_random_entry(['短跑', '游泳', '登山']),
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
      sys_change_attr_and_print(0, attr_enum.hp, -get('maxbase:0:体力') * 0.25);
      sys_change_attr_and_print(0, attr_enum.tp, -get('maxbase:0:精力') * 0.25);
      const item = get_random_entry([
        ...new Array(8).fill(0).map((_, i) => i),
        ...new Array(7).fill(0).map((_, i) => i + 10),
      ]);
      print(i18n().item.notify(item));
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
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} me
   */
  async bankruptcy(me) {
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
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} me
   */
  async reject(me) {
    await print_event_name('污蔑，都是污蔑！', me);
    await printAndWait('不知何故，最近在校园走路的时候总会引来窃窃私语。');
    await printAndWait([
      me.get_colored_name(),
      ' 尝试探查一番后发现，自己竟然在不知不觉间被当成了负心渣',
      me.get_phy_sex_title()[0],
      '？！',
    ]);
    printButton('「我不是，我没有！」', 1);
    await input();
    sys_change_fame(-10);
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} me
   */
  async work_over(me) {
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
    if (get_attr_and_print_in_event(0, undefined, 0, [-50])) {
      await waitAnyKey();
    }
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} me
   */
  async sick(me) {
    new MyEduMarks().sick = get_random_value(36, 60);
    await print_event_name('人生无常之生病', me);
    await printAndWait([
      me.get_colored_name(),
      ' 一觉起来便觉头昏脑胀、昏昏欲睡，总之便是浑身不对劲。',
    ]);
    printButton('「丢哪妈，顶硬上！」', 1);
    printButton('「打电话请假，然后去看医生吧……」', 2);
    if ((await input()) === 1) {
      get_attr_and_print_in_event(0, undefined, 0, [-50]) &&
        (await waitAnyKey());
      sys_change_money(get_random_value(10, 20));
    } else {
      sys_like_chara(305, 0, get_random_value(0, 10)) && (await waitAnyKey());
    }
  }

  /**
   * @author 幽白書
   * @param {CharaTalk} me
   * @param _me
   * @param _call
   * @param {HookArg} hook
   * @param _extra
   * @param {EventObject} event_object
   */
  async breakfast(me, _me, _call, hook, _extra, event_object) {
    const chara_id = get_random_entry(
      getAddedCharacters().filter(
        (e) =>
          e > 0 &&
          get(`cflag:${e}:招募状态`) === recruit_flags.yes &&
          get(`love:${e}`) >= 50 &&
          !sys_check_remote(e),
      ),
    );
    if (!chara_id || get('flag:当前位置') !== location_enum.office) {
      add_event(hook.hook, event_object);
      return;
    }
    const chara = get_chara_talk(chara_id);
    await print_event_name('「早餐」', chara);
    await printAndWait([
      '一进入训练员室，',
      me.get_colored_name(),
      ' 看见 ',
      chara.get_colored_name(),
      ' 刚吃完早餐，正在喝牛奶的样子。',
    ]);
    await printAndWait(['那瓶奶的包装……好像有些眼熟……']);
    await printAndWait([
      '还有，',
      chara.get_colored_name(),
      ' 的眼神不知为何有些奇怪……',
    ]);
    await printAndWait(['……一定是错觉吧。']);
    sys_change_lust(chara_id, (get('cflag:0:种族') ? 800 : 300) * 2);
    set('flag:当前互动角色', chara_id);
    println();
    if (sys_love_uma(chara_id, 1)) {
      await waitAnyKey();
    }
    add_event(hook.hook, event_object.set_arg('privacy_1'));
  }

  /**
   * @author Mr.E.
   * @param {CharaTalk} me
   */
  async wind_welcome(me) {
    await print_event_name(['风来访'], me);
    const god_id = sys_get_random_uma_god();
    await printAndWait([
      me.get_colored_name(),
      ' 感受到一股微风吹过身侧，带着操场青草的清香。',
    ]);
    const in_team_list = sys_filter_chara(
        'cflag',
        '招募状态',
        recruit_flags.yes,
      ),
      cur_week = get('flag:当前回合数');
    printButton('「今天真是个好天气啊」（担当干劲+1）', 1);
    printButton('「希望今天的比赛也顺利」（？？？好感+50）', 2, {
      disabled:
        !god_id ||
        in_team_list.findIndex(
          (e) => sys_reg_race(e).curr.week === cur_week,
        ) === -1,
    });
    if ((await input()) === 1) {
      for (const c of in_team_list) {
        if (get(`cflag:${c}:种族`) > 0) {
          if (sys_change_motivation(c, 1)) {
            await waitAnyKey();
          }
        }
      }
    } else {
      sys_like_chara(god_id, 0, 50) && (await waitAnyKey());
    }
  }

  /**
   * @author Mr.E.
   * @param {CharaTalk} me
   */
  async chocolate(me) {
    await print_event_name(['巧克力！'], me);
    await printAndWait(['情人节，可惜工作没有休假。']);
    await printAndWait([
      '训练员这工作有时候还得防备一些「别有用心」的对象，刷到马推还有一堆人在散发着恋爱的酸臭。',
    ]);
    printButton(
      '「一点风声罢了，今天也是为担当燃烧身体的一天」（体力&精力+50）',
      1,
    );
    printButton('「闲着也是闲着，不如发个推凑个热闹」', 2);
    if ((await input()) === 1) {
      get_attr_and_print_in_event(0, undefined, 0, [50, 50]) &&
        (await waitAnyKey());
    } else {
      const p_love =
          get('cflag:36:招募状态') === recruit_flags.yes ? get('love:36') : -1,
        t_love =
          get('cflag:80:招募状态') === recruit_flags.yes ? get('love:80') : -1,
        l_love =
          get('cflag:119:招募状态') === recruit_flags.yes
            ? get('love:119')
            : -1,
        max = get_extremum_entry(
          [
            [36, p_love],
            [80, t_love],
            [119, l_love],
          ],
          (e) => e[1],
        );
      if (max.max[1] === -1) {
        await printAndWait(['「打开冰箱发现最浪漫的果然是浓缩咖啡」']);
        await printAndWait('随手编辑了一条推文，用小号发出去。');
      } else if (max.max[1] < 60) {
        await printAndWait([
          '「今天也是努力工作的一天，什么？都情人节了？刚准备下单巧克力发现通讯列表是空的！」',
        ]);
        await printAndWait('随手编辑了一条推文，用小号发出去。');
        println();
        await printAndWait([
          '第二天收到了匿名寄来的包裹，拆开一看原来是一块精装巧克力',
        ]);
        println();
        await printAndWait(['真是奇怪，会是谁寄的呢……']);
        sys_like_chara(max.max[0], 0, 20, false) && (await waitAnyKey());
      } else {
        await printAndWait([
          '「本命巧克力迷路第 N 年，在便利店买了根青汁味百奇自我应援」',
        ]);
        await printAndWait('随手编辑了一条推文，用小号发出去。');
        println();
        await printAndWait([
          '第二天收到了匿名寄来的包裹，拆开一看原来是巧克力，感觉是很',
          max.max[0] === 119
            ? '华贵的'
            : max.max[0] === 80
              ? '很像吧唧的'
              : '精致小巧的',
          '巧克力',
        ]);
        println();
        await printAndWait(['真是奇怪，会是谁寄的呢……']);
        sys_change_lust(max.max[0], 2000);
      }
    }
  }

  /** @author Mr.E. */
  async sakura_regret() {
    const my_marks = new MyEduMarks();
    const cid = get_random_entry(my_marks.pity || []);
    if (cid !== undefined) {
      const chara = get_chara_talk(cid);
      await print_event_name('樱花的遗憾', chara);
      await printAndWait([
        '夜晚，在床上的 ',
        chara.get_colored_name(),
        ' 用被子把自己藏起来',
      ]);
      println();
      await chara.say_and_wait([
        sys_get_colored_callname(chara.id, 0),
        '，为什么……就不愿意接受我的爱呢……',
      ]);
      println();
      await chara.say_and_wait(['明明那些美好的记忆，都是我们一起创造的……']);
      println();
      await chara.say_and_wait(['真是……孤独啊……']);
      println();
      await printAndWait(['在', chara.sex, '没注意到的地方，枕头悄悄的湿了。']);
      println();
      sys_change_motivation(chara.id, -2) && (await waitAnyKey());
    }
  }

  /**
   * @author Mr.E.
   * @param {CharaTalk} me
   */
  async nice_weekend(me) {
    const my_marks = new MyEduMarks(),
      chara_id = get_random_entry(
        [19, 59].filter(
          (e) => get(`cflag:${e}:殿堂`) > 0 && sys_check_awake(e),
        ),
      );
    if (chara_id !== undefined && get('cflag:0:位置') === 0) {
      const chara = get_chara_talk(chara_id);
      my_marks.nice_weekend = 0;
      await print_event_name(['欢乐周末开始啦！'], chara);
      await printAndWait([
        chara.get_colored_name(),
        ' 因为同人作品的死线将至，邀请 ',
        me.get_colored_name(),
        ' 周末去',
        chara.sex,
        '的工作室里赶稿',
      ]);
      printButton('为了不影响训练，这也是必要的（同意）', 1);
      printButton('假期就是假期，加班是不可能的！（拒绝）', 2);
      if ((await input()) === 1) {
        await printAndWait([
          '身为社畜，对死线的厌恶早就刻在了骨子里；作为训练员，帮助担当也责无旁贷！',
        ]);
        await printAndWait([
          '终于，在周日即将结束的时候，',
          me.get_couple_title(),
          ' 完成了这本作品。',
        ]);
        const love = get(`love:${chara.id}`),
          relation = get(`relation:${chara.id}:0`);
        if (love >= 50 && love * (get('flag:极端行为限制') || 1) >= relation) {
          await printAndWait([
            me.get_colored_name(),
            ' 记不清是什么时候睡着的了，只记得担当带着 ',
            me.get_colored_name(),
            ' 开始工作，也许是 ',
            me.get_colored_name(),
            ' 实在不擅长这方面的东西，也许是 ',
            me.get_colored_name(),
            ' 实在是太累了。总之，在 ',
            me.get_colored_name(),
            ' 睡醒之后，已经是周一的凌晨了，身上还不断传来劳累过度的酸痛。',
          ]);
          println();
          await printAndWait([
            '突然，',
            me.get_colored_name(),
            ' 感觉身上好像沉重很多',
          ]);
          println();
          printButton('太累了吗？还是继续休息吧（不去看异样）', 1);
          printButton('睡麻了吗？稍微活动一下吧（看一下异样）', 2);
          if ((await input()) === 1) {
            await printAndWait([
              me.get_colored_name(),
              ' 昏昏沉沉的，在 ',
              chara.get_colored_name(),
              ' 的工作室里醒来，对方已经给 ',
              me.get_colored_name(),
              ' 准备好了晚饭，可惜 ',
              me.get_colored_name(),
              ' 还是感觉干劲不足……',
            ]);
            get_attr_and_print_in_event(0, undefined, 0, [
              // BASENAME:0 = 体力
              -get('maxbase:0:0') * 0.2,
              // BASENAME:1 = 精力
              -get('maxbase:0:1') * 0.2,
            ]) && (await waitAnyKey());
            set('status:0:马跳S', 1);
            await sys_rape_in_sleeping(chara.id);
            set('status:0:马跳S', 0);
          } else {
            await printAndWait([
              me.get_colored_name(),
              ' 活动了一下身体，发现原来是 ',
              chara.get_colored_name(),
              ' 趴在 ',
              me.get_colored_name(),
              ' 的身侧。',
            ]);
            await printAndWait([
              '裸 着 趴 在 ',
              me.get_colored_name(),
              ' 的 身 侧',
            ]);
            await printAndWait([
              me.get_colored_name(),
              ' 本来还想说些什么，但是听到了眼前一黑腰上一酸的话',
            ]);
            await chara.say_and_wait([
              sys_get_colored_callname(chara.id, 0),
              '已经醒了？那我们就开始第二轮吧❤️～',
            ]);
            set('base:0:体力', Math.floor(get('base:0:体力') / 2));
            set('base:0:精力', Math.floor(get('base:0:精力') / 2));
            set(
              `base:${chara.id}:体力`,
              Math.floor(get(`base:${chara.id}:体力`) / 2),
            );
            set(
              `base:${chara.id}:精力`,
              Math.floor(get(`base:${chara.id}:精力`) / 2),
            );
            await quick_into_sex(chara.id);
          }
        } else {
          if (love >= 50) {
            await printAndWait([
              '作品内容是训练员与',
              chara.get_uma_sex_title(),
              '的甜蜜日常，大受好评！就是不知道为什么训练员的脸好像有点……和 ',
              me.get_colored_name(),
              ' 相似？（马币+150）',
            ]);
            add('flag:当前马币', 150);
          }
          if (relation >= 550) {
            await printAndWait([
              '贩售结束之后，',
              chara.get_colored_name(),
              ' 想要请 ',
              me.get_colored_name(),
              ' 吃甜品来感谢 ',
              me.get_colored_name(),
              '。（获得[浓缩咖啡]×5）',
            ]);
            add('item:浓缩咖啡', 5);
          }
        }
      }
    }
  }

  /** @param {CharaTalk} me */
  async big_sale(me) {
    let ret = (
      await print_name_and_show_kojo('商店街大甩卖', me, kojo, this.dict)
    )[0];
    if (ret !== 6) {
      const attr = new Array(5).fill(0);
      attr[ret - 1] = 20;
      sys_change_money(-10);
      if (
        getAddedCharacters()
          .filter(
            (cid) =>
              cid > 0 &&
              cid < max_chara_id &&
              get(`cflag:${cid}:育成回合计时`) < 3 * 48,
          )
          .reduce((p, cid) => all_reward_in_event(cid, { attr }) || p, false)
      ) {
        await waitAnyKey();
      }
    }
    new MyEduMarks().big_sale = get_random_value(10, 15);
    return true;
  }

  /** @param {CharaTalk} me */
  async justice(me) {
    const dict = this.dict;
    dict.T_SEX = get('cflag:301:性别') === 1 ? '秘书' : '小姐';
    dict.TOKINO = sys_get_callname(0, 301);
    dict.Y_A_TITLE = me.adult_sex_title;
    await print_event_name('路见不平', me);
    switch ((await kojo['JUSTICE'](dict))[0]) {
      case 1:
        println();
        add('flag:当前马币', 100);
        await printAndWait('获得了 100 马币！');
        break;
      case 2:
        println();
        // ITEMNAME:31 = 马跳Z
        print(i18n().item.notify(31));
        add('item:31', 1);
        break;
      case 3:
        add('maxbase:0:精力', 100);
        if (all_reward_in_event(0, { base: [0, 200] })) {
          await waitAnyKey();
        }
    }
  }
};
