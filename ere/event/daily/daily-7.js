/**
 * @file 黄金船 - 日常
 * @author 雞雞
 */
const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const lines = require('#/event/daily/daily-7.kojo');
const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const chara_colors = require('#/data/chara-colors').chara_colors[7];
const { escape_enum } = require('#/data/basement-const');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

module.exports = class extends CustomizedDaily {
  get #dict() {
    const o = {};
    const gold_ship = get_chara_talk(this.id);
    o['她'] = gold_ship.sex;
    o['马娘'] = gold_ship.uma_sex_title;
    o['代表色'] = gold_ship.color;
    o['你'] = era.get('callname:0:-2');
    o['玩家名'] = era.get('callname:0:-1');
    return o;
  }

  good_morning() {
    const gold_ship = get_chara_talk(7);
    const life_marks = LifeEventMarks.get_marks(7);
    if (life_marks.b_escape) {
      switch (life_marks.b_escape) {
        case escape_enum.sneak:
          gold_ship.say('少侠果真好身手，竟然乘小金船不注意的时候就溜走了。');
          gold_ship.say([
            { color: chara_colors[1], content: '呵呵，下次得加紧严防了哪……' },
          ]);
          break;
        case escape_enum.beat:
          gold_ship.say('不愧是你啊，竟然正面打败了金船大魔王。');
          gold_ship.say([
            {
              color: chara_colors[1],
              content: '那么厉害的勇者应该不会害怕更多挑战的，你说对吗？',
            },
          ]);
          break;
        case escape_enum.strike:
          gold_ship.say('呵呵呵，没想到竟然栽在你手里了。');
          gold_ship.say([
            { color: chara_colors[1], content: '『下次』可得更努力点哦。' },
          ]);
      }
      life_marks.b_escape = 0;
    } else if (era.get('base:7:体力') < 0.45 * era.get('maxbase:7:体力')) {
      gold_ship.say(
        Math.random() < 0.5
          ? '好累啊……累得就像蝉生已经到达第二周的蝉子一样……'
          : '我不行啦～求你啦……今天就放个假吧。',
      );
    } else {
      gold_ship.say(
        get_random_entry([
          [
            {
              color: chara_colors[1],
              content: 'RED・HOT・小金船出场！我要让这个世界染成一片火红！！！',
            },
          ],
          [
            {
              content: '今天有什么行程吗？练习相扑吗？',
            },
            {
              color: chara_colors[1],
              content: '好哦，交给我吧！',
            },
          ],
          '下次要不吐着舌头跑步好了',
          [
            {
              color: chara_colors[1],
              content:
                '哦，你放假是吧？放假是吧？！跟我一起去尚蒂伊的森林探险吧！',
            },
          ],
          [
            {
              color: chara_colors[1],
              content:
                '我一开始只是想着『有个看起来很闲的家伙……』哦。不过，遇到我之后，你的人生有趣了很多对吧？',
            },
          ],
        ]),
      );
    }
  }

  office_cook() {
    return get_chara_talk(7).say_and_wait(
      get_random_entry([
        [
          { content: '嗯？阿训要请我吃饭吗？' },
          {
            color: chara_colors[1],
            content: '什么，是那种中学特有的便宜营养套餐！不要啊！！！',
          },
        ],
        [
          { content: '训练员，把盐传给我吧！' },
          {
            color: chara_colors[1],
            content: '呜哦，好香的炒面味！',
          },
        ],
      ]),
    );
  }

  office_game() {
    return get_chara_talk(7).say_and_wait(
      get_random_entry([
        [
          '阿训～今天要玩什么？《赛马娘大亨》？《URA2K》？还是说……',
          { color: chara_colors[1], content: '小、金、船？' },
        ],
        [
          '阿训，',
          { color: chara_colors[1], content: '世嘉三四郎在窗外看着我们哎。' },
        ],
      ]),
    );
  }

  async office_gift() {
    return get_chara_talk(7).say_and_wait(
      get_random_entry([
        '官人你也真是坏心眼哦～嗬嗬嗬～',
        [
          {
            content: '怎么会这样……竟然送小金船这么贵重的礼物……',
          },
          {
            content: '好！那我也要好好跑给你看！',
            color: chara_colors[1],
          },
        ],
      ]),
    );
  }

  office_prepare() {
    return get_chara_talk(7).say_and_wait(
      get_random_entry([
        [
          {
            color: chara_colors[1],
            content: '嗨呀～人人有功练哟～有功夫无懦夫哦～',
          },
        ],
        [
          {
            color: chara_colors[1],
            content: '今天，我便要踏上太阳系第九行星了！上吧，训练员！',
          },
        ],
      ]),
    );
  }

  office_rest() {
    return get_chara_talk(7).say_and_wait(
      get_random_entry([
        '阿船我已经心累了——抱我——',
        [
          {
            content: '——吓！！！',
            color: chara_colors[1],
          },
          {
            content: '数着数着蚂蚁，就不小心失去意识了……',
          },
        ],
      ]),
    );
  }

  office_study() {
    return get_chara_talk(7).say_and_wait(
      get_random_entry([
        '你知道吗？有一种打工的内容就是往面团上打洞然后做成甜甜圈。那玩意可厉害了……在虚无感这方面……',
        '你知道吗？三文鱼虽然看起来是红色的，但其实是白身鱼哦……在生物学的定义上。',
      ]),
    );
  }

  async school_atrium(hook) {
    const gold_ship = get_chara_talk(7);
    hook.arg = !(await select_action_in_atrium());
    let buffer;
    if (hook.arg) {
      await era.printAndWait(`与 ${gold_ship.name} 一同去了枯树洞……`);
      buffer = [
        `${
          era.get('cflag:7:性别') === 1 ? '马郎' : '马娘'
        }啊，要到了最后关头才能落泪哦……」`,
        [
          '假如三女神在听着的话，',
          {
            content: '她们的耳膜是否还安好呢？',
            color: chara_colors[1],
          },
        ],
      ];
    } else {
      await era.printAndWait(`与 ${gold_ship.name} 一同去约会了……`);
      buffer = [
        '你说回忆吗？……真怀念我们一起在海底度过的七天假期啊～',
        [
          {
            content: '讨厌～衣袂摆来摆去的好羞人哦～',
          },
          {
            content: '喂，好好盯着老娘看啊。',
            color: chara_colors[1],
          },
        ],
      ];
    }
    await gold_ship.say_and_wait(get_random_entry(buffer));
  }

  async school_rooftop() {
    const gold_ship = get_chara_talk(7);
    await era.printAndWait(`与 ${gold_ship.name} 一起吃了便当……`);
    await gold_ship.say_and_wait(
      get_random_entry([
        '这个土豆泥好吃吧？是用粉末泡出来的哦。',
        [
          {
            content: '看我这份完美的宝塔肉！真是一份精雕细琢的',
          },
          {
            content: '……梅菜扣肉啊。',
            color: chara_colors[1],
          },
        ],
      ]),
    );
  }

  select() {
    const life_marks = LifeEventMarks.get_marks(7);
    if (sys_check_awake(7)) {
      const gold_ship = get_chara_talk(7);
      if (sys_check_awake(0) && life_marks.b_escape) {
        switch (life_marks.b_escape) {
          case escape_enum.sneak:
            gold_ship.say([
              sys_get_colored_callname(this.id, 0),
              ' 是那种会自己溜出去玩，然后自觉回家的宠物吗？',
            ]);
            gold_ship.say([
              { color: chara_colors[1], content: '也好，省得麻烦。' },
            ]);
            break;
          case escape_enum.beat:
            gold_ship.say('呵呵呵，没想到竟然栽在你手里了。');
            gold_ship.say([
              { color: chara_colors[1], content: '『下次』可得更努力点哦。' },
            ]);
            break;
          case escape_enum.strike:
            gold_ship.say('喂喂，对自己的爱马下手那么狠，也太绝情了吧？');
            gold_ship.say([
              {
                color: chara_colors[1],
                content: '不过小金船我可能喜欢有魄力的训练员呢❤️',
              },
            ]);
        }
        life_marks.b_escape = 0;
      } else {
        gold_ship.say(
          Math.random() < 0.5
            ? '噢！你找本金船大人有事吗？'
            : '跟本金船大人走吧！',
        );
      }
    } else {
      return super.select();
    }
  }

  talk() {
    if (!sys_check_awake(7)) {
      return super.talk();
    }
    const gold_ship = get_chara_talk(7);
    let talk_arr;
    if (era.get('base:7:体力') < 0.45 * era.get('maxbase:7:体力')) {
      return gold_ship.say_and_wait(
        Math.random() < 0.5
          ? '好累啊……累得就像蝉生已经到达第二周的蝉子一样……'
          : '我不行啦～求你啦……今天就放个假吧。',
      );
    } else {
      switch (era.get('cflag:7:干劲')) {
        case 2:
          talk_arr = [
            {
              color: chara_colors[1],
              content: '快点……快点对我下达指示！我已经迫不急待了，搞快点！！！',
            },
            {
              color: chara_colors[1],
              content: '黄金船大・喷・火！干劲MAX，真是嗨到不行啦！！！',
            },
          ];
          break;
        case 1:
          talk_arr = [
            {
              color: chara_colors[1],
              content: `你再不干点啥，${
                era.get('cflag:7:性别') === 1 ? '老子' : '老娘'
              }就随便溜街去咯——！`,
            },
            {
              color: chara_colors[1],
              content: `喂喂，我能不能开跑啊！？再不让我跑的话，我的精力就要被浪费掉了！`,
            },
          ];
          break;
        case 0:
          talk_arr = [
            {
              color: chara_colors[1],
              content: `哦，要打架吗？可以啊，来打啊！`,
            },
            { content: '咋——？要是有预定日程的话我姑且听一下。' },
          ];
          break;
        case -1:
          talk_arr = [
            { content: '嗯…啊啊，训练员……？抱歉，在想『eraUMA』的事……' },
            { content: '唏唷唏唷……！不行啊……提不起劲！' },
          ];
          break;
        case -2:
          talk_arr = [
            { content: '糟糕……意识融化掉嘞……' },
            { content: '呜哇……好困……你完事了就叫我起来吧……' },
          ];
      }
      return gold_ship.say_and_wait([get_random_entry(talk_arr)]);
    }
  }

  async out_church(hook) {
    const gold_ship = get_chara_talk(7);
    await gold_ship.say_and_wait([
      { color: chara_colors[1], content: '哈——唏唷唏唷！' },
    ]);
    await era.printAndWait(
      `只见 ${gold_ship.name} 在人家神社的大门口开始如从劲风下的草根一样摇摆，嘴中念念有词。`,
    );
    await gold_ship.say_and_wait([
      { color: chara_colors[1], content: '放马娘过来！放马娘过来！' },
    ]);
    era.printButton('「你在干嘛呢？」', 1);
    await era.input();
    await gold_ship.say_and_wait([
      { color: chara_colors[1], content: '看了还不懂吗？我在跳大神啦。' },
    ]);
    await era.printAndWait(
      `${gold_ship.sex}一脸得意洋洋的表情让你觉得有点烦躁，但${gold_ship.sex}并没有在意`,
    );
    await gold_ship.say_and_wait([
      {
        color: chara_colors[1],
        content: '古往今来，在神的面前舞蹈以取悦神明是常识吧！',
      },
    ]);
    await gold_ship.say_and_wait([
      {
        color: chara_colors[1],
        content: '我这个神的宠儿黄金船来蹦个迪，那请神上身也湿湿碎嘞！',
      },
    ]);
    await era.printAndWait(`此时，${gold_ship.name} 浑身僵住，双目圆瞪！`);
    hook.arg = Math.random() < 0.5;
    if (hook.arg) {
      await gold_ship.say_and_wait([
        {
          color: chara_colors[1],
          content:
            '耶稣啊！我已明白祢的意愿了，祢要我『吃好睡好，保持心境开朗』是吧！',
        },
      ]);
      await era.printAndWait([
        '右脸抽搐着的 ',
        get_chara_talk(0).get_colored_name(),
        ' 很想吐槽为什么神社会有耶稣，也很想吐槽耶稣的指示活像是临终关怀。',
      ]);
      await era.printAndWait(
        `但${gold_ship.sex}看起来挺开心的，随${gold_ship.sex}去吧。`,
      );
    } else {
      await gold_ship.say_and_wait([
        {
          color: chara_colors[1],
          content: '佛祖哦！祢为何离弃我？！竟要我『好好听训练员的话』……',
        },
      ]);
      await era.printAndWait(
        `看到 ${gold_ship.name} 失落的姿态，你左脸上的神经也不住抽搐。`,
      );
      await era.printAndWait(
        `但只要${gold_ship.sex}能乖乖听话，那也没什么不好的。`,
      );
      await era.printAndWait('……不行，还是有点烦躁。');
    }
  }

  async out_river(hook) {
    const gold_ship = get_chara_talk(7);
    let talk_arr;
    hook.arg = (await select_action_around_river()) > 0;
    if (hook.arg) {
      await era.printAndWait(`与 ${gold_ship.name} 一同去散步了……`);
      talk_arr = [
        {
          color: chara_colors[1],
          content:
            '糟了，忘了把房间里养着的画纸交给别人寄养！哎呀，要是我不在的话它会很寂寞的……',
        },
        {
          color: chara_colors[1],
          content:
            '只要遥望赛道后面那远方的天空，就能看到老身的故乡黄金星哦……嗬嗬嗬……',
        },
      ];
    } else {
      await era.printAndWait(`与 ${gold_ship.name} 一同去钓鱼了……`);
      talk_arr = [
        {
          color: chara_colors[1],
          content:
            '钓鱼讲究的是精神力……是与自己进行的斗争！而当我成功钓上老辣的水池之主时，我的内心便已然战胜『氯』了！',
        },
        {
          color: chara_colors[1],
          content:
            '呼呼～我在衣服下还穿了防弹背心，不论天上掉鱼叉还是三文鱼都伤不了我分毫哦！',
        },
      ];
    }
    await gold_ship.say_and_wait([get_random_entry(talk_arr)]);
  }

  async out_shopping(hook) {
    const gold_ship = get_chara_talk(7),
      temp = await select_action_in_shopping_street();
    let talk_arr;
    hook.arg = temp <= 1;
    switch (temp) {
      case 0:
        await era.printAndWait(`与 ${gold_ship.name} 一同去了街机厅……`);
        talk_arr = [
          '噢啦！看我一爪子把这些家伙全部抓……掉光了？！',
          '阿训！我没子弹了，快掩护我！呜哦！',
        ];
        break;
      case 1:
        await era.printAndWait(`与 ${gold_ship.name} 一同去抽奖了……`);
        talk_arr = [
          [
            {
              content: '阿训！快给我钱，我的十连之心已经无法停止了！！！',
              color: chara_colors[1],
            },
          ],
          '你说我们会不会抽到乘坐超小型潜艇探索泰坦尼克残骸的旅行券啊？',
        ];
        break;
      case 2:
        await era.printAndWait(`与 ${gold_ship.name} 一同去了卡啦OK……`);
        talk_arr = [
          [
            {
              content: '任谁都会被你夺去眼球～♪你就是完美且究极的～',
            },
            {
              content: '盖塔！！！',
              color: chara_colors[1],
            },
          ],
          '现在的年轻人连Nico Nico超组曲都没听过……阿训你还是个小少爷啊……',
        ];
        break;
      case 3:
        await era.printAndWait(`与 ${gold_ship.name} 一同去看电影了……`);
        talk_arr = [
          '哦！这不是重炮爸爸演出的电影吗？阿训要一起看吗？',
          [
            {
              content: '最近的超级英雄电影都好无聊啊……',
            },
            {
              content: '有了，我们就来拍一部《归来的黄金船》吧！',
              color: chara_colors[1],
            },
          ],
        ];
    }
    await gold_ship.say_and_wait(get_random_entry(talk_arr));
  }

  async out_station(hook) {
    const gold_ship = get_chara_talk(7);
    hook.arg = await select_action_in_station(7);
    let talk_arr;
    switch (hook.arg) {
      case 0:
        await era.printAndWait(`与 ${gold_ship.name} 一同去吃饭了……`);
        talk_arr = [
          [
            {
              content: '要喝咖啡嗎？',
            },
            {
              color: chara_colors[1],
              content: '我幫你把牛奶換成辣・油・哦♪',
            },
          ],
          [
            {
              content: '说起来，米浴那家伙竟然是面包派的……',
            },
            {
              color: chara_colors[1],
              content: '难道她是自己的黑子吗？！',
            },
          ],
        ];
        break;
      case 1:
        await era.printAndWait(`与 ${gold_ship.name} 一同去约会了……`);
        talk_arr = [
          '我说，你一百年后有空吗？有空的话咱们一起上太空。',
          [
            {
              color: chara_colors[1],
              content:
                '你可不要从小金船身上移开视线哦！不然我也不知道一秒之后会发生什么事！',
            },
          ],
        ];
        break;
      case 2:
        await era.printAndWait(`与 ${gold_ship.name} 一同去逛商场了……`);
        talk_arr = [
          [
            {
              content: '我说阿训，要不要牵个手？',
            },
            {
              color: chara_colors[1],
              content: '……那边的店有情侣八折哦！',
            },
          ],
          '阿训，哪怕是我也不会做出在麦当劳点原味鸡这种行为吧？',
        ];
    }
    await gold_ship.say_and_wait(get_random_entry(talk_arr));
  }

  load_talk() {
    const gold_ship = get_chara_talk(7);
    if (Math.random() < 0.5) {
      return gold_ship.say_and_wait([
        { content: '你要使用『那个』吗？记得不要滥用哦，' },
        {
          content: '毕竟玩弄时空的人最后都会遭到时空连续性的报应呢。',
          color: chara_colors[1],
        },
      ]);
    } else {
      return gold_ship.say_and_wait([
        { content: '我知道『那个』确实很方便啦，但有时候' },
        {
          content: '顺其自然会更好玩吧，不是吗？',
          color: chara_colors[1],
        },
      ]);
    }
  }

  async basement_end() {
    await lines['basement_end'](this.#dict);
  }

  async slave_end() {
    await lines['slave_end'](this.#dict);
  }
};
