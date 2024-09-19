const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');

const CharaTalk = require('#/utils/chara-talk');
const { get_random_entry } = require('#/utils/list-utils');

const LunaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-17');
const event_hooks = require('#/data/event/event-hooks');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const color_17 = require('#/data/chara-colors').chara_colors[17];

function get_luna_or_emperor() {
  return new CharaTalk(17).set_color(color_17[new LunaEduMarks().emperor]);
}

/** @type {Record<string,function(stage_id:HookArg,extra_flag:*):Promise<boolean>>} */
const handlers = {};

handlers[event_hooks.select] = function () {
  let talk_list;
  if (sys_check_awake(17)) {
    const is_emperor = new LunaEduMarks().emperor;
    if (is_emperor) {
      talk_list = [
        '是你啊，弄臣。',
        '吾心情正好，别让我扫兴。',
        '万事万物有始有终，就算我终究凋零，也要给后辈们留下芬芳。',
      ];
    } else {
      talk_list = [
        `${CharaTalk.me.actual_name}？`,
        '想不出冷笑话呢……',
        '今天的行程是？',
      ];
    }
  } else {
    talk_list = ['嘶……呼……'];
  }
  get_luna_or_emperor().say(get_random_entry(talk_list));
};

handlers[event_hooks.good_morning] = function () {
  let talk_list;
  const is_emperor = new LunaEduMarks().emperor;
  if (is_emperor) {
    talk_list = ['不要浪费时间。', '不要犯下错误。', '不要让吾失望。'];
    if (era.get('status:17:精神损伤') || era.get('status:9017:精神损伤')) {
      talk_list.push(
        '沉睡的时间越来越少。很好。',
        '弄臣，趁我状态正佳，多安排几场狩猎！',
      );
    }
    if (era.get('status:17:神经衰弱') || era.get('status:9017:神经衰弱')) {
      talk_list.push(
        '消除软弱，让皇帝之名远扬！',
        '谁在吾脑海里聒噪？让她闭嘴。',
      );
    }
  } else {
    talk_list = [
      '谁会想到，我们竟然成了这样的关系……已经没有回头的机会了。',
      '那些信任着我、期待着我的人们……我实在没办法斥责他们的心意。',
      '多亏有你在我身旁，就算是被认为是虚无缥缈的伊甸，我也正一步步靠近。',
      '将心比心？我不认为有人能理解我的立场。',
      '把对学生会的要求写在纸条上给我们吧，我会尽可能满足大家的愿望的。',
      '你觉得我的决胜服很帅气？……我不喜欢用帅气，来形容一座监狱。',
    ];
    if (era.get('status:17:精神损伤') || era.get('status:9017:精神损伤')) {
      talk_list.push(
        '最近时不时，会觉得头疼难耐。',
        '我睡的时间是不是越来越多了？',
      );
    }
    if (era.get('status:17:神经衰弱') || era.get('status:9017:神经衰弱')) {
      talk_list.push(
        '不要离开我的视线！我要感觉不到你了……！',
        `${CharaTalk.me.actual_name}，你还在看着露娜吗？我好像……不再是自己了——`,
      );
    }
  }
  get_luna_or_emperor().say(get_random_entry(talk_list));
};

handlers[event_hooks.talk] = async function () {
  if (!sys_check_awake(17)) {
    throw new Error();
  }
  const talk_list = [],
    is_emperor = new LunaEduMarks().emperor;
  if (era.get('base:17:体力') < 0.4 * era.get('maxbase:17:体力')) {
    if (is_emperor) {
      talk_list.push('感觉疲劳正在堆积。', '你不必相信，你只需追随。');
    } else {
      talk_list.push(
        '我还能继续下去！',
        '再追加一轮训练吧，我的实力还远不止如此。',
      );
    }
  } else {
    switch (era.get('cflag:17:干劲')) {
      case 2:
        if (is_emperor) {
          talk_list.push('出征之时已至。', '让皇帝之名响彻云霄！');
        } else {
          talk_list.push(
            '状态『极其』好，『激起』了训练的心潮！呼呼……',
            '我的状态比平时还要好，看来会有不错的表现。',
          );
        }
        break;
      case 1:
        if (is_emperor) {
          talk_list.push('帝国，始于一砖一瓦。', '嗯……？弄臣，何不讲个笑话。');
        } else {
          talk_list.push(
            '平日里的积累很重要。',
            '等训练结束了，我们一起去散散步吧……如果有空闲时间的话。',
          );
        }
        break;
      case 0:
        if (is_emperor) {
          talk_list.push('兴致缺缺。', '不要让吾扫兴。');
        } else {
          talk_list.push(
            '虽然不能说是状态完美，但是我不能示弱。',
            '一步一步来吧，我会忍耐的。',
          );
        }
        break;
      case -1:
        if (is_emperor) {
          talk_list.push('哼……', '滚出我的视线。');
        } else {
          talk_list.push(
            '穿上决胜服是一种身份的切换，意味着我又要变成皇帝……',
            '唔……总觉得状态不太好，不过不能因为这点疲劳就说泄气话。',
          );
        }
        break;
      case -2:
        if (is_emperor) {
          talk_list.push('弄臣，你似乎把事情全搞糟了？', '不要对吾无礼。');
        } else {
          talk_list.push(
            '这下糟了……感觉身体很沉重。可是哪怕一天我都不想浪费……',
            '找不到平时的状态了……心里知道不能再这样下去，但是……',
          );
        }
    }
  }
  await get_luna_or_emperor().say_and_wait(get_random_entry(talk_list));
};

handlers[event_hooks.office_gift] = async function () {
  const talk_list = [];
  if (new LunaEduMarks().emperor) {
    talk_list.push(
      '哦？礼品？……哼，想要的，吾会自己去取。',
      '贡品就堆放到宝库中去。',
    );
  } else {
    talk_list.push(
      '我已经不是小孩子了……！嘿嘿，但谢谢你！',
      '我们是有相同理想的『共犯』，完成目标前，我们都不能停下……抱歉，是不是有点太沉重了？',
    );
  }
  await get_luna_or_emperor().say_and_wait(get_random_entry(talk_list));
};

handlers[event_hooks.office_cook] = async function () {
  const talk_list = [];
  if (new LunaEduMarks().emperor) {
    talk_list.push('食物的制成也大有学问。', '赏给你的，满怀敬畏地吃下去吧。');
  } else {
    talk_list.push(
      '做出大量令人愉快的美食吧，呼呼，其实烹饪的过程，也令人愉悦。特别是和你一起。',
      '我趁上午的时间把学生会的工作都做完，这下可以专心投入了。',
    );
  }
  await get_luna_or_emperor().say_and_wait(get_random_entry(talk_list));
};

handlers[event_hooks.office_study] = async function () {
  const talk_list = [];
  if (new LunaEduMarks().emperor) {
    talk_list.push(
      '吾不需要学艺不精的教授。',
      '无论何种时代，智者理应得到尊崇。',
    );
  } else {
    talk_list.push(
      '我都不知道，你会看心理学的书。教教我吧？',
      '训练员执照的考试，有些题还是我出的。',
    );
  }
  await get_luna_or_emperor().say_and_wait(get_random_entry(talk_list));
};

handlers[event_hooks.office_rest] = async function () {
  const talk_list = [];
  if (new LunaEduMarks().emperor) {
    talk_list.push('……沉睡……', '如果遇到棘手的事情，弄臣……吾允许你唤醒我。');
  } else {
    talk_list.push(
      '……真令人害羞啊，长大以后，过去寻常的拥抱，也变得有点火热了。',
      '嘶……呼……',
    );
  }
  await get_luna_or_emperor().say_and_wait(get_random_entry(talk_list));
};

handlers[event_hooks.office_prepare] = async function () {
  const talk_list = [];
  if (new LunaEduMarks().emperor) {
    talk_list.push(
      '美美此刻，血脉偾张！',
      '来，让我见识一下英雄和勇者的挣扎！！！',
    );
  } else {
    talk_list.push('我，曾经很喜欢奔跑……', '为了我们共同的理想，我不会退缩。');
  }
  await get_luna_or_emperor().say_and_wait(get_random_entry(talk_list));
};

handlers[event_hooks.office_game] = async function () {
  const talk_list = [];
  if (new LunaEduMarks().emperor) {
    talk_list.push('作为消遣而言，还算合格。', '还没准备好狩猎吗？');
  } else {
    talk_list.push(
      '游戏……？我记得小时候，你总是抱着我玩。',
      '玩归玩，可不能浪费时间。',
    );
  }
  await get_luna_or_emperor().say_and_wait(get_random_entry(talk_list));
};

handlers[event_hooks.school_atrium] = async function () {
  const talk_list = [];
  const temp = await select_action_in_atrium();
  if (new LunaEduMarks().emperor) {
    if (!temp) {
      talk_list.push(
        '吾能听见……失意和失败之人留存在此的苦恨。',
        '就算帝国终会崩塌，美景与古迹也会一直留存。',
      );
    } else {
      talk_list.push(
        '在吾沉睡时，你有以吾的意志，好好打理这行宫吗？',
        '弄臣，只要你好好侍奉吾，吾自会许给你无尽的荣耀。',
      );
    }
  } else {
    if (!temp) {
      talk_list.push(
        '萌芽的意志，是热情还是本能呢？有种看不见的力量在促我前行。',
        '三女神，倘若真的有伊甸存在，我会带领所有赛马娘都去往那里的。',
      );
    } else {
      talk_list.push(
        '这就是所谓的光阴似箭吧，好像我还没长大，我们都在象征家疯闹似的。',
        '我们离别了好几年，从现在开始，我们别离彼此太远为好。',
      );
    }
  }
  await get_luna_or_emperor().say_and_wait(get_random_entry(talk_list));
};

handlers[event_hooks.school_rooftop] = async function () {
  const talk_list = [];
  if (new LunaEduMarks().emperor) {
    talk_list.push('寻常的进食，能果腹即可。', '我对食物没有要求。');
  } else {
    talk_list.push(
      '呵呵呵……没有姜的话，不就成了脱『姜』之马……呵呵呵呵！',
      '其实我对口味的要求不高。但如果摆盘精致、气味宜人，更能让我食指大动。',
    );
  }
  await get_luna_or_emperor().say_and_wait(get_random_entry(talk_list));
};

handlers[event_hooks.out_river] = async function (hook) {
  const talk_list = [];
  hook.arg = !!(await select_action_around_river());
  if (new LunaEduMarks().emperor) {
    if (!hook.arg) {
      talk_list.push('在赛场上狩猎，又何尝不是一种垂钓？', '水中的生灵……');
    } else {
      talk_list.push(
        '视察疆土，也是皇帝的责任。',
        '前方何事喧闹？弄臣，去打听清楚。',
      );
    }
  } else {
    if (!hook.arg) {
      talk_list.push(
        '动心忍性，增益其所不能。钓鱼，是一门相当的学问呢。',
        '就算钓上了鱼，也只能拍照纪念哦，这是学园的财产。',
      );
    } else {
      talk_list.push(
        '我好像有点回想起小时候的时光了。你总是陪在我身边呢。',
        '如今，我们已经可以并肩前行了——你看，我长高了吧？',
      );
    }
  }
  await get_luna_or_emperor().say_and_wait(get_random_entry(talk_list));
};

handlers[event_hooks.out_shopping] = async function (hook) {
  const talk_list = [];
  hook.arg = await select_action_in_shopping_street();
  const is_emperor = new LunaEduMarks().emperor;
  switch (hook.arg) {
    case 0:
      if (is_emperor) {
        talk_list.push(
          '聒噪的地方。',
          '虚幻的游戏仅能带来虚无的抚慰，若想真正获得乐趣，不如去和勇者厮杀。',
        );
      } else {
        talk_list.push(
          '姆……再来一局！',
          `那个、还有那个！${CharaTalk.me.actual_name}，我们都去玩一遍吧！`,
        );
      }
      break;
    case 1:
      if (is_emperor) {
        talk_list.push(
          '概率学，是一门深奥的学问。',
          '既然决定要去温泉，何必要用这种方式？',
        );
      } else {
        talk_list.push(
          '看你喜欢的……要不，干脆我们把温泉酒店买下来？',
          '希望每个抽奖的孩子都能有好运气。',
        );
      }
      break;
    case 2:
      if (is_emperor) {
        talk_list.push(
          '和剧院不同，别有一般风味。',
          '聆听美妙的音乐，是绝佳的享受。',
        );
      } else {
        talk_list.push(
          '趁这个机会，小憩片刻吧。',
          '如果能把一切痛苦，都通过歌声呕吐出来都多好。',
        );
      }
      break;
    case 3:
      if (is_emperor) {
        talk_list.push('无趣。', '不会有下次了。');
      } else {
        talk_list.push(
          '非常好的片子。我本想睡一觉的，但电影的剧情确实吸引眼球。',
          '真想不到，如今的电影这么真实啊。我都捏了一把冷汗。',
        );
      }
  }
  await get_luna_or_emperor().say_and_wait(get_random_entry(talk_list));
  hook.arg = hook.arg <= 1;
};

handlers[event_hooks.out_church] = async function (hook) {
  const chara_talk = get_luna_or_emperor(),
    is_emperor = new LunaEduMarks().emperor;
  await era.printAndWait(
    `神社对于 ${CharaTalk.me.name} 和 ${chara_talk.name} 而言，并没有什么特别的地方。`,
  );
  await era.printAndWait(
    `${CharaTalk.me.name} 已过了祈祷好运的年纪，${chara_talk.name} 则一向是靠实力取得成绩。`,
  );
  if (is_emperor) {
    await era.printAndWait(
      `但令 ${CharaTalk.me.name} 惊喜的是，皇帝和露娜一样，对新鲜事物总有无尽的好奇。`,
    );
  } else {
    await era.printAndWait(
      `但令 ${CharaTalk.me.name} 欣慰的是，露娜和从前一样，对新鲜事物总有无尽的好奇。`,
    );
  }
  await era.printAndWait(
    `一年几次的祈福，足够${chara_talk.sex}保持足够的新鲜感。`,
  );
  await era.printAndWait(
    `${CharaTalk.me.name} 站在 ${chara_talk.name} 身边，等待着${chara_talk.sex}抽出象征『幸运』的签。`,
  );
  era.println();

  hook.arg = Math.random() < 0.5;
  if (hook.arg) {
    if (is_emperor) {
      await chara_talk.say_and_wait('只要有绝对的实力，连天也会眷顾。');
      await era.printAndWait(
        `皇帝随手将签往后一抛，${CharaTalk.me.name} 赶忙去接著，挂在了树上。`,
      );
    } else {
      await chara_talk.say_and_wait('似乎是相当的好的启示呢。');
      await era.printAndWait(
        `露娜笑盈盈地将好签展示给 ${CharaTalk.me.name}，然后将签挂在了树上。`,
      );
    }
    await era.printAndWait(
      `${CharaTalk.me.name} 突然想，要不自己也去抽个好签吧？`,
    );
    await era.printAndWait(
      `只要能让 ${chara_talk.name} 高兴，为你们看不见未来的曲折前路添加些许希望。`,
    );
    await era.printAndWait(
      `什么助力都好。啊啊……三女神，请保佑 ${chara_talk.name}！`,
    );
  } else {
    if (is_emperor) {
      await chara_talk.say_and_wait('有趣！吾喜欢挑战。');
      await era.printAndWait('皇帝饶有兴致地举起手中的签，哈哈大笑。');
    } else {
      await chara_talk.say_and_wait('看来我们这一路上还会遇到很多阻碍。');
      await era.printAndWait(
        `露娜没有向 ${CharaTalk.me.name} 展示签中写的是什么，只是将它仔细收好。`,
      );
    }
    await era.printAndWait(
      `${CharaTalk.me.name} 的脸色稍微有点阴沉，${CharaTalk.me.name} 知道的。`,
    );
    await era.printAndWait(
      `如果 ${CharaTalk.me.get_couple_title()} 看不见未来的曲折前路，还要平添神明的苛责……`,
    );
    await era.printAndWait('稍微，有点烦躁。');
  }
};

handlers[event_hooks.out_station] = async function (hook) {
  const talk_list = [];
  hook.arg = await select_action_in_station(17);
  const is_emperor = new LunaEduMarks().emperor;
  switch (hook.arg) {
    case 0:
      if (is_emperor) {
        talk_list.push(
          '征途的一大乐趣，就是品尝脚下土地所孕育的粮食。',
          '将美食和美酒呈上来！',
        );
      } else {
        talk_list.push(
          '后辈一直吵着要请我吃冰淇淋……呼呼，得找个时间和她一起去吃。',
          '最近好多孩子的食欲很旺盛，我得和计算一下，看如何增加食材的进货量。',
        );
      }
      break;
    case 1:
      if (is_emperor) {
        talk_list.push(
          '弄臣，既然决定要献殷勤，就好好地取悦吾。',
          '……哼，如果连踮脚都做不到，你也不必随侍了。',
        );
      } else {
        talk_list.push(
          '要是做了噩梦的话就告诉我，我会帮你守夜的。',
          '心情消沉时就来『赏枫』，让心情『防风』……呼呼，真是杰作。',
        );
      }
      break;
    case 2:
      if (is_emperor) {
        talk_list.push('吾喜欢有活力的城市。', '臣民其乐融融，不错。');
      } else {
        talk_list.push(
          '现在的商铺，已经这么时髦了？难怪孩子们会被吸引。',
          '那边好热闹啊，我们去看看吧？',
        );
      }
  }
  await get_luna_or_emperor().say_and_wait(get_random_entry(talk_list));
};

handlers[event_hooks.load_talk] = async () => {
  const event_marks = new LunaEduMarks(),
    chara = get_chara_talk(17);
  if (event_marks.good_end) {
    await chara.say_and_wait('愿太阳和月亮能继续陪伴着你');
    await chara.say_and_wait('……但，请不要忘了皇帝，和露娜');
    await chara.print_and_wait([chara.get_colored_name(), ' 转过身去，颤抖着']);
    await chara.say_and_wait('注意……安全，我们会再相遇的（抽泣）');
  } else if (event_marks.emperor) {
    await chara.say_and_wait('弄臣，无用功还要一次再一次了？');
  } else if (era.get('love:17') >= 75) {
    await chara.print_and_wait([
      chara.get_colored_name(),
      ' 嘴唇微张，但发不出一丝声音',
    ]);
    await chara.say_and_wait('——！');
    await chara.say_and_wait('——不要走……');
    await chara.print_and_wait([
      chara.get_colored_name(),
      ' 抽泣着，但 ',
      CharaTalk.me.get_colored_name(),
      ' 已远去……',
    ]);
    await chara.say_and_wait('明明你答应过我……无论发生什么都不会离开——');
  }
};

/**
 * 鲁铎象征 - 日常
 *
 * @author 露娜俘虏
 */
module.exports = {
  /**
   * @param {HookArg} stage_id
   * @param {any} [extra_flag]
   * @param {EventObject} [event_object]
   * @returns {Promise<boolean>}
   */
  async run(stage_id, extra_flag, event_object) {
    if (event_object || !handlers[stage_id.hook]) {
      throw new Error('unsupported hook!');
    }
    return !!(await handlers[stage_id.hook](stage_id, extra_flag));
  },
};
