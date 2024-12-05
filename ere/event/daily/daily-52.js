/**
 * @file 春乌拉拉 - 日常
 *
 * @author 99
 */
const era = require('#/era-electron');

const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedDaily = require('#/event/daily/daily-common');
const urara_basement_end = require('#/event/daily/daily-events-52/basement-end');
const urara_celebration = require('#/event/daily/daily-events-52/celebration');
const urara_good_morning = require('#/event/daily/daily-events-52/good-morning');
const urara_good_night = require('#/event/daily/daily-events-52/good-night');
const urara_office_gift = require('#/event/daily/daily-events-52/office-gift');
const urara_office_rest = require('#/event/daily/daily-events-52/office-rest');
const urara_out_church = require('#/event/daily/daily-events-52/out-church');
const urara_out_river = require('#/event/daily/daily-events-52/out-river');
const urara_out_shopping = require('#/event/daily/daily-events-52/out-shopping');
const urara_out_station = require('#/event/daily/daily-events-52/out-station');
const urara_school_atrium = require('#/event/daily/daily-events-52/school-atrium');
const urara_school_rooftop = require('#/event/daily/daily-events-52/school-rooftop');
const urara_week_start = require('#/event/daily/daily-events-52/week-start');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const { chara_colors } = require('#/data/chara-colors');
const { lust_border } = require('#/data/ero/orgasm-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');

module.exports = class extends CustomizedDaily {
  select() {
    const call_me = sys_get_callname(52, 0),
      urara = get_chara_talk(52),
      callname = urara.get_colored_name(),
      self_call = sys_get_callname(52, 52),
      love = era.get('love:52'),
      me = get_chara_talk(0),
      talk_arr = [];
    if (sys_check_awake(52)) {
      if (era.get('base:52:体力') < 0.4 * era.get('maxbase:52:体力')) {
        talk_arr.push([
          `呜啊……${call_me}，${self_call}……动不了了……`,
          ['躺在地上，', callname, ' 几乎没办法动弹了。'],
        ]);
        if (love > 0) {
          talk_arr.push([
            '体力、体力已经飞走了……不行了……',
            ['趴在地上的 ', callname, ' 晕晕乎乎地大喘着气。'],
          ]);
        }
        if (love >= 25) {
          talk_arr.push([
            '不能输……不能输……',
            [callname, ' 几次想要撑起自己的身体，但还是失败了。'],
          ]);
        }
        if (love >= 50) {
          talk_arr.push([
            `训、${call_me}……再拉我一把……`,
            [
              '瘫坐在地上的 ',
              callname,
              ' 面色微红的向 ',
              me.get_colored_name(),
              ' 伸出手求助着。',
            ],
          ]);
        }
        if (love >= 75) {
          talk_arr.push([
            `让我再歇一会……一会就好了哦！哈啊……`,
            ['即使累到撑坐在地上，', callname, ' 依旧尝试着再站起来。'],
          ]);
        }
        if (love >= 90) {
          talk_arr.push([
            `我、我觉得我还可以哦……`,
            [
              '用力背起耳朵，用 ',
              me.get_colored_name(),
              ' 的身体作着支撑，',
              callname,
              ' 在努力地让自己不躺倒在地。',
            ],
          ]);
        }
        if (love === 100) {
          talk_arr.push([
            `呼……呼……没问题的！只要 ${call_me} 在，就能继续加油……`,
            ['即使站都站不稳，', callname, ' 依旧努力地撑起了身体。'],
          ]);
        }
      } else if (
        era.get('relation:52:0') > 150 &&
        new UraraEduMarks().loop < 2
      ) {
        talk_arr.push(
          [
            '明明是我先出门的，为什么大家却都比我先到了呢？真神奇啊！',
            ['虽然迟到了，但 ', callname, ' 依旧很开心的样子。'],
          ],
          [
            `${call_me}！我今天刚好没迟到哟！我说不定比上次跑得更快了！`,
            ['只是刚好赶到，', callname, ' 却很满足的样子。'],
          ],
          [
            `在这边哦 ${call_me}！快点过来吧！今天我也有好多好事能和 ${call_me} 分享呢！`,
            [
              '与 ',
              me.name,
              ' 一同赶到的 ',
              callname,
              ' 笑着向 ',
              me.name,
              ' 招着手。',
            ],
          ],
        );
        if (love >= 50) {
          talk_arr.push([
            `${call_me}……呜……诶？${call_me}？！今、今天也来一起加油吧！`,
            [
              callname,
              ' 似乎在悄悄地做些什么，直到 ',
              me.get_colored_name(),
              ` 来到${urara.sex}身后才面色羞红的反应过来。`,
            ],
          ]);
        }
        if (love >= 75) {
          talk_arr.push([
            `能看到 ${call_me} 真好呢！要是这样能一直持续下去的话……啊！${call_me}！今天要来做什么呢？`,
            [
              '来得意外早的 ',
              callname,
              ' 开心地来到 ',
              me.get_colored_name(),
              ' 的身边。',
            ],
          ]);
        }
        if (love === 100) {
          talk_arr.push([
            `为了能够早点见到 ${call_me}，今天我也起得很早呦！看到 ${self_call}，${call_me} 会觉得幸福吗？`,
            ['等待许久的 ', callname, ' 摇着尾巴，脸上洋溢着幸福的笑容。'],
          ]);
        }
      } else {
        talk_arr.push(
          [
            `对不起哦 ${call_me}，今天 ${self_call} 又迟到了……`,
            [
              '明明没打算为迟到生气，但 ',
              callname,
              ' 面对 ',
              me.get_colored_name(),
              ' 时却缩了缩耳朵。',
            ],
          ],
          [
            `赶上了哦！啊，${call_me} 早上好……`,
            [
              '气喘吁吁赶来的 ',
              callname,
              '，在看到 ',
              me.get_colored_name(),
              ' 后不知为何又后退了一点。',
            ],
          ],
        );
        if (love >= 50) {
          talk_arr.push([
            `${call_me}！${self_call} 可以……不行，不能给 ${call_me} 添麻烦！诶……真的什么都没有哦？`,
            [
              '在背对 ',
              me.get_colored_name(),
              ' 的时候 ',
              callname,
              ` 似乎在做什么，但${urara.sex}却一直是不愿承认的表情。`,
            ],
          ]);
        }
        if (love >= 75) {
          talk_arr.push([
            `${self_call} 到底为什么……啊，${call_me} 就快到了，要赶紧做好准备才行……！`,
            [
              '来得很早的 ',
              callname,
              ' 在看到 ',
              me.get_colored_name(),
              ' 后赶紧站起来，打起精神向 ',
              me.get_colored_name(),
              ' 露出了笑容。',
            ],
          ]);
        }
        if (love === 100) {
          talk_arr.push([
            `${call_me}！今天、那个……可以对 ${self_call} 更温柔一点吗？只要一点点就好了！`,
            [
              '尽管还是有些畏缩的样子，但跟在 ',
              me.get_colored_name(),
              ' 身后的 ',
              callname,
              ' 还是笑着抓紧了 ',
              me.get_colored_name(),
              ' 的衣角。',
            ],
          ]);
        }
      }
    } else if (
      era.get('status:52:马跳S') ||
      era.get('status:52:马跳Z') ||
      era.get('status:52:超马跳Z') ||
      era.get('status:52:弗隆K') ||
      era.get('status:52:弗隆P') ||
      era.get('base:52:性欲') >= lust_border.absent_mind
    ) {
      talk_arr.push([
        '……呜嗯、啊……',
        ['身体焦躁却无法醒来，', callname, ' 在睡梦中面色潮红的娇喘。'],
      ]);
    } else {
      talk_arr.push(
        ['嘿嘿……胡萝卜……', ['小声说着梦话，', callname, ' 浅浅地翻了个身。']],
        [
          '……',
          ['仅仅发出着小小的呼吸声，今天熟睡的 ', callname, ' 意外的安静。'],
        ],
      );
    }
    const temp = get_random_entry(talk_arr);
    urara.say(temp[0]);
    era.print(temp[1]);
  }

  good_morning = urara_good_morning;

  good_night = urara_good_night;

  async talk() {
    const love = era.get('love:52'),
      talk_arr = [],
      urara = get_chara_talk(52);
    if (sys_check_awake(52)) {
      const callname = sys_get_callname(52, 0);
      switch (era.get('cflag:52:干劲')) {
        case 2:
          talk_arr.push(
            [callname, '！今天的乌拉拉会非常厉害哦！我感觉到了哦！'],
            ['现在的乌拉拉是超级乌拉拉哦！因为状态超好的嘛！'],
            ['每天都能这么开心的话，比赛一定可以拿到一着呢！'],
          );
          if (love >= 75) {
            talk_arr.push([
              '诶嘿嘿～只要有 ',
              callname,
              ' 在的话，就感觉自己什么都能做到！',
            ]);
          }
          if (love === 100) {
            talk_arr.push([
              '看好了哦 ',
              callname,
              '！现在就算是跑一整天乌拉拉也不会输呢！',
            ]);
          }
          break;
        case 1:
          talk_arr.push(
            ['要『乌拉拉～』的上了哦！', callname, ' 也一起加油吧！'],
            ['好！今天的计划也要好好的完成！要开始热身了哟！'],
            ['感觉身体就像鸟儿一样轻呢！现在就来做些什么吧！'],
          );
          if (love >= 75) {
            talk_arr.push([
              '只要和 ',
              callname,
              ' 一起的话，乌拉拉就可以状态绝佳哦！',
            ]);
          }
          if (love === 100) {
            talk_arr.push([
              '今天如果能提早结束的话，',
              callname,
              ' 可以和我一起玩吗？',
            ]);
          }
          break;
        case 0:
          talk_arr.push(
            ['只要努力的话一定可以的！为了下次能拿到一着！'],
            ['希望能做有趣的练习啊，', callname, '，有这种的吗──？'],
            [callname, '！今天的安排，现在就告诉我吧！'],
          );
          if (love >= 75) {
            talk_arr.push(['等结束之后，一起去吃些好吃的东西吧！']);
          }
          if (love === 100) {
            talk_arr.push(['今天也会看着我吗？嗯！我知道的哦！']);
          }
          break;
        case -1:
          talk_arr.push(
            ['啊呜……不过训练是很重要的，没问题，我会努力的！'],
            ['嗯……稍微有些开心不起来，多想些开心的事情好了……！'],
            ['诶？我其实很有精神哦！虽然耳朵和尾巴都耷拉着……！'],
          );
          if (love >= 75) {
            talk_arr.push(['只要 ', callname, ' 还在看着，就没问题吧……！']);
          }
          if (love === 100) {
            talk_arr.push(['虽然提不起精神，但是不能任性……！']);
          }
          break;
        case -2:
          talk_arr.push(
            ['应该是很开心的才对，但是开心不起来……'],
            [callname, '……今天……今天可以把休息当做训练吗？'],
            ['身体好重啊，都没有力气了……'],
          );
          if (love >= 75) {
            talk_arr.push([callname, '，你带点心了吗？稍微想补充点糖分……']);
          }
          if (love === 100) {
            talk_arr.push([
              callname,
              '，我的干劲好像又找不到了，能帮我找找吗……',
            ]);
          }
      }
      await urara.say_and_wait(get_random_entry(talk_arr));
    } else {
      if (
        era.get('status:52:马跳S') ||
        era.get('status:52:马跳Z') ||
        era.get('status:52:超马跳Z') ||
        era.get('status:52:弗隆K') ||
        era.get('status:52:弗隆P')
      ) {
        talk_arr.push(
          [
            '在药效的影响下，',
            urara.get_colored_name(),
            '沉睡中的喘息声逐渐变得娇嫩而诱人。',
          ],
          [
            '屈服于卑鄙的药物，失去意识的 ',
            urara.get_teen_sex_title(),
            ' 此刻只是等待使用的肉人偶。',
          ],
          [
            '肢体还在梦中抗拒地扭动着，小',
            urara.get_uma_sex_title(),
            '的股间却已顺从的湿得一塌糊涂。',
          ],
        );
      } else {
        talk_arr.push(
          [
            '随着小小的呼气声，小',
            urara.get_uma_sex_title(),
            '在睡梦中翻了个身。',
          ],
          ['平静的靠在你身边，', urara.get_colored_name(), '安稳的沉睡着。'],
          [
            '睡着的',
            urara.get_colored_name(),
            '露出了开心的表情，是梦到什么好事了吗？',
          ],
        );
      }
      await era.printAndWait(get_random_entry(talk_arr));
    }
  }

  office_gift = urara_office_gift;

  out_church = urara_out_church;

  out_river = urara_out_river;

  out_shopping = urara_out_shopping;

  out_station = urara_out_station;

  school_atrium = urara_school_atrium;

  school_rooftop = urara_school_rooftop;

  async office_cook() {
    const callname = sys_get_callname(52, 0),
      love = era.get('love:52'),
      me = get_chara_talk(0),
      talk_arr = [],
      urara = get_chara_talk(52);
    talk_arr.push(
      async () => {
        await urara.say_and_wait(
          '食材都下锅了，乌拉拉去看看米饭有没有热好吧！',
        );
        await era.printAndWait([
          urara.get_colored_name(),
          ' 说着跑向了电饭煲的方向。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          callname,
          '！我也来帮忙切菜吧！诶？不用了？',
        ]);
        await era.printAndWait([
          '想起 ',
          urara.get_colored_name(),
          ' 那不靠谱的用刀方法，',
          me.get_colored_name(),
          ' 毫不犹豫的拒绝了小',
          urara.get_uma_sex_title(),
          '的帮忙请求。',
        ]);
      },
      async () => {
        await urara.say_and_wait(
          '想吃什么？不用担心！虽然有些东西很难吃，但乌拉拉不会挑食的！',
        );
        await era.printAndWait([
          '听到 ',
          me.get_colored_name(),
          ' 的询问，',
          urara.get_colored_name(),
          ' 的回答一如既往的令人安心。',
        ]);
      },
    );
    if (love >= 50) {
      talk_arr.push(async () => {
        await urara.say_and_wait('诶嘿嘿～不小心洒出来了……啊呜～');
        await era.printAndWait([
          '毫不在意地伸出小小的舌头，',
          urara.get_colored_name(),
          ' 像只小猫般舔着沾上酱料的手指，舌与指间不断拉出着细细的银丝……',
        ]);
      });
    }
    if (love >= 75) {
      talk_arr.push(async () => {
        await urara.say_and_wait([
          '以后长大了，乌拉拉和 ',
          callname,
          ' 并排站在一起，那时我们一定会像夫妇一样吧！',
        ]);
        await era.printAndWait([
          '与 ',
          me.get_colored_name(),
          ' 一同将手中的肉饼逐渐拍实，',
          urara.get_colored_name(),
          ' 幻想着可能也不那么遥远的事情。',
        ]);
      });
    }
    if (love === 100) {
      talk_arr.push(async () => {
        await urara.say_and_wait([
          '听说这样做能让 ',
          callname,
          ' 染上乌拉拉的味道，但 ',
          callname,
          ' 知道后会原谅乌拉拉吗……？',
        ]);
        await era.printAndWait([
          '带着无法抑制的火热思绪，小',
          urara.get_uma_sex_title(),
          '颤抖着吐出舌头，将自己唾液悄悄混进了 ',
          me.get_colored_name(),
          ' 的饮料中……',
        ]);
      });
    }
    await get_random_entry(talk_arr)();
  }

  office_study = async () => {
    const callname = sys_get_callname(52, 0),
      love = era.get('love:52'),
      me = get_chara_talk(0),
      talk_arr = [],
      urara = get_chara_talk(52);
    talk_arr.push(
      async () => {
        await urara.say_and_wait([
          '呜……这个数学题还是搞不懂！',
          callname,
          ' 能再帮我讲一次吗？',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' 愁眉苦脸地抱着头趴在桌子上，几乎失去了学习的动力。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '其实我有些科目还不错呦！就连 ',
          sys_get_colored_callname(52, 61),
          ' 也说如果其他科目也能像这样就好了呢！',
        ]);
        await era.printAndWait([
          '虽然 ',
          urara.get_colored_name(),
          ' 很自豪的样子，但这显然不是在夸',
          urara.sex,
          '吧。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '英语……虽然单词都记住了，但语法好难懂……',
          callname,
          ' 再帮我一下吧——',
        ]);
        await era.printAndWait([
          '面对向英语作业投降的 ',
          urara.get_colored_name(),
          '，',
          me.get_colored_name(),
          ' 也只能再带',
          urara.sex,
          '复习起了课本。',
        ]);
      },
    );
    if (love >= 50) {
      talk_arr.push(async () => {
        await urara.say_and_wait([
          '好近……',
          callname,
          ' 就在旁边……啊！对不起！得集中精力才行……呜……',
        ]);
        await era.printAndWait([
          '强占了 ',
          me.get_colored_name(),
          ' 双腿之间的 ',
          urara.get_colored_name(),
          ' 还在躁动着，今天的补习也开始向着奇怪的方向发展了……',
        ]);
      });
    }
    if (love >= 75) {
      talk_arr.push(async () => {
        await urara.say_and_wait([
          '我知道学习很重要，可果然还是跑步更有趣！不过只要 ',
          callname,
          ' 陪着，难题就都能看得进去呢！',
        ]);
        await era.printAndWait([
          '靠在 ',
          me.get_colored_name(),
          ' 身边的 ',
          urara.get_colored_name(),
          '，似乎比往常更加有学习的动力了。',
        ]);
      });
    }
    if (love === 100) {
      talk_arr.push(async () => {
        await urara.say_and_wait([
          callname,
          '！如果下次我考了个好成绩的话！可以……要点特殊的奖励吗？',
        ]);
        await era.printAndWait([
          '本来答应也无妨，但 ',
          urara.get_colored_name(),
          ' 那面色潮红、眼神飘忽的神情，',
          me.get_colored_name(),
          ' 开始犹豫要不要接下这颗炸弹。',
        ]);
      });
    }
    await get_random_entry(talk_arr)();
  };

  office_rest = urara_office_rest;

  async office_prepare() {
    const callname = sys_get_callname(52, 0),
      love = era.get('love:52'),
      me = get_chara_talk(0),
      talk_arr = [],
      urara = get_chara_talk(52);
    talk_arr.push(
      async () => {
        await urara.say_and_wait(
          '嗯嗯！到时候只要和往常一样『乌拉拉～』的冲出去就好了吧！',
        );
        await era.printAndWait(
          '歪着头看着白板上的注意事项，小担当的理解力还是那么「笔直」。',
        );
      },
      async () => {
        await urara.say_and_wait([
          callname,
          '！我也来帮你一起钉蹄铁吧！嗯！不会敲到手的！',
        ]);
        await era.printAndWait([
          '在 ',
          me.get_colored_name(),
          ' 忧心忡忡的注视下，',
          urara.get_colored_name(),
          ' 有惊无险地完成了自己钉蹄铁的工作。',
        ]);
      },
      async () => {
        await urara.say_and_wait(
          '诶？这次要这样跑……只要这样跑就能拿到一着对吧！明白了！',
        );
        await era.printAndWait([
          '虽然 ',
          urara.get_colored_name(),
          ' ',
          urara.sex,
          '的战术执行一直有些缺陷，但 ',
          me.get_colored_name(),
          ' 觉得这次的',
          urara.sex,
          '或许没问题。',
        ]);
      },
    );
    if (love >= 50) {
      talk_arr.push(async () => {
        await urara.say_and_wait([
          '这样啊……那下次又赢了的话，',
          callname,
          ' 可以和乌拉拉做些……什、什么都没有！',
        ]);
        await era.printAndWait([
          '似乎是才察觉到自己差点就泄露出激进的欲望，',
          urara.get_colored_name(),
          ' 紧慌张地移开了视线。',
        ]);
      });
    }
    if (love >= 75) {
      talk_arr.push(async () => {
        await urara.say_and_wait([
          '才不是『输了也无所谓的乌拉拉』！比赛可能会很难，但是为了 ',
          callname,
          '，乌拉拉不想再输了！',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' 一边认真地做着准备，一边流露出了少见的斗志。',
        ]);
      });
    }
    if (love === 100) {
      talk_arr.push(async () => {
        await urara.say_and_wait([
          '我明白的！不管是什么样的比赛，我都会让 ',
          callname,
          ' 的视线只停在乌拉拉身上的！',
        ]);
        await urara.say_and_wait([
          '所以，可以更多迷上乌拉拉吗，',
          callname,
          '？',
        ]);
        await era.printAndWait([
          '散发着与粉色小马不符的惊人气势，与 ',
          me.get_colored_name(),
          ' 贴在一起的 ',
          urara.get_colored_name(),
          ' 樱瞳仿佛变得鲜红起来。',
        ]);
      });
    }
    await get_random_entry(talk_arr)();
  }

  async office_game() {
    const callname = sys_get_callname(52, 0),
      love = era.get('love:52'),
      me = get_chara_talk(0),
      talk_arr = [],
      urara = get_chara_talk(52);
    talk_arr.push(
      async () => {
        await urara.say_and_wait(
          '呜呜……为什么超不过去呢……再来一次！这次我一定可以做到的！',
        );
        await era.printAndWait([
          '在赛车游戏中连败了好几次后，',
          urara.get_colored_name(),
          ' 再次不愿放弃地握住了手柄。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '哼哼！',
          callname,
          '，这次我找到了击败你的方法了！看乌拉拉使出必杀技——',
        ]);
        await era.printAndWait([
          '在格斗游戏上被 ',
          me.get_colored_name(),
          ' 打得一败涂地前，',
          urara.get_colored_name(),
          ' 是这样自信地笑着说的。',
        ]);
      },
      async () => {
        await urara.say_and_wait(
          '今、今天我们继续玩这个吧！诶？我、乌拉拉不害怕哦！',
        );
        await era.printAndWait([
          '尽管声音都在抖，但 ',
          urara.get_colored_name(),
          ' 还是勇敢地拿出了以前没能玩完的恐怖游戏。',
        ]);
      },
    );
    if (love >= 50) {
      talk_arr.push(async () => {
        await urara.say_and_wait([
          '乌、乌拉拉不知道哦？这个游戏……是小数码借给我的哦？',
        ]);
        await era.printAndWait([
          '尽量让自己不被自动播放的羞耻画面所以吸引，',
          urara.get_colored_name(),
          ' 红着脸支支吾吾地向沉默的 ',
          me.get_colored_name(),
          ' 辩解着。',
        ]);
      });
    }
    if (love >= 75) {
      talk_arr.push(() =>
        urara
          .say_and_wait([
            '打游戏要集中注意力哦……嘿！哈哈～',
            callname,
            '、',
            callname,
            '～好痒！乌拉拉知道错了～',
          ])
          .then(() =>
            era.printAndWait([
              '面对一直用挠痒痒等盘外招进行骚扰的 ',
              urara.get_colored_name(),
              '，',
              me.get_colored_name(),
              ' 最终选择放下手柄和担当笑着滚成了一团。',
            ]),
          ),
      );
    }
    if (love === 100) {
      talk_arr.push(async () => {
        await urara.say_and_wait([
          callname,
          ' 想要玩什么呢？乌拉拉玩什么都可以！只要和 ',
          callname,
          ' 一起玩的话……',
        ]);
        await era.printAndWait([
          '带着纯真笑容的 ',
          urara.get_colored_name(),
          ' 贴到了 ',
          me.get_colored_name(),
          ' 的怀里，俯在在耳边轻声吐息着。',
        ]);
      });
    }
    await get_random_entry(talk_arr)();
  }

  async load_talk() {
    const callname = sys_get_callname(52, 0),
      in_urara = get_chara_talk(52, chara_colors[52][1]),
      love = era.get('love:52'),
      pregnant =
        era.get('exp:52:生产次数') +
        (era.get('cflag:52:妊娠状态') >> pregnant_stage_enum.embryo > 0),
      talk_arr = [],
      urara = get_chara_talk(52);
    if (pregnant) {
      if (era.get('relation:52:0') > 150 && new UraraEduMarks().loop < 2) {
        if (love >= 75) {
          talk_arr.push(
            () =>
              urara.say_and_wait([
                callname,
                '，下次再见时，请多抱抱',
                pregnant > 1 ? '孩子们' : '这个孩子',
                '吧！',
              ]),
            () =>
              urara.say_and_wait(
                '没关系的，乌拉拉会安慰好大家的，如果下次能再见的话，再一起——',
              ),
          );
        } else {
          talk_arr.push(
            () =>
              urara.say_and_wait([
                '看来 ',
                callname,
                ' 和乌拉拉，都没能做好准备呢……对不起……',
              ]),
            () =>
              urara.say_and_wait([
                callname,
                '，乌拉拉想留下',
                pregnant > 1 ? '孩子们' : '这个孩子',
                '，或者下次还能再见的话——',
              ]),
          );
        }
      } else if (love >= 75) {
        talk_arr.push(
          () =>
            urara.say_and_wait([
              '我们还能见面对吧？',
              pregnant > 1 ? '孩子们' : '这个孩子',
              '也能……对不起，但是我们还能——',
            ]),
          () =>
            urara.say_and_wait([
              '不要抛弃',
              pregnant > 1 ? '孩子们' : '这个孩子',
              '！求你了，',
              callname,
              '！答应乌拉拉，至少让我们下次——',
            ]),
        );
      } else {
        talk_arr.push(
          () =>
            urara.say_and_wait([
              callname,
              ' 对',
              pregnant > 1 ? '孩子们' : '这个孩子',
              '是什么样的感觉呢？乌拉拉还不想……',
            ]),
          () =>
            urara.say_and_wait([
              '只是被抛弃的话乌拉拉一个人也可以，但是',
              pregnant > 1 ? '孩子们' : '这个孩子',
              '也再也不见的话——',
            ]),
        );
      }
      await get_random_entry(talk_arr)();
      await in_urara.say_as_unknown_and_wait(
        '……哈，一句安慰您的话都想不出来呢……',
      );
    } else {
      if (era.get('relation:52:0') > 150 && new UraraEduMarks().loop < 2) {
        if (love >= 75) {
          talk_arr.push(
            () =>
              urara.say_and_wait([
                '乌拉拉还不想离开呢，所以 ',
                callname,
                '，下次也可以和乌拉拉在一起吗……',
              ]),
            () =>
              urara.say_and_wait([
                callname,
                '，还能相遇的话，不管发生什么，一定可以再次喜欢上彼此吧——',
              ]),
          );
        } else {
          talk_arr.push(
            () =>
              urara.say_and_wait([
                '不用担心我哦？乌拉拉愿意相信 ',
                callname,
                ' 的选择！所以——',
              ]),
            () =>
              urara.say_and_wait([
                '下次还能在一起的话，也能和 ',
                callname,
                ' 做上舒服的事就好了——',
              ]),
          );
        }
      } else if (love >= 75) {
        talk_arr.push(
          () =>
            urara.say_and_wait([
              callname,
              ' 不是在抛弃乌拉拉对吧……对不起，不管发生什么，乌拉拉都不怪 ',
              callname,
              '……',
            ]),
          () =>
            urara.say_and_wait(
              '还是厌倦了，或者乌拉拉又做错了什么？对不起，乌拉拉还是……对不起……',
            ),
        );
      } else {
        talk_arr.push(
          () =>
            urara.say_and_wait([
              callname,
              ' 再见到上一个乌拉拉的时候，可以……对她好一点吗？',
            ]),
          () =>
            urara.say_and_wait([
              callname,
              '，下次的话，还能和 ',
              callname,
              ' 一起……对不起，没什么……',
            ]),
        );
      }
      await get_random_entry(talk_arr)();
      await in_urara.say_as_unknown_and_wait(
        '……姑且还没关系，下次别做过头了哦？',
      );
    }
  }

  async celebration() {
    const edu_weeks = era.get('cflag:52:育成回合计时'),
      weeks = (era.get('flag:当前回合数') - 1) % 48;
    if (
      weeks !== 47 ||
      edu_weeks !== 47 + 48 ||
      sys_reg_race(52).curr.race !== -1
    ) {
      return await super.celebration();
    }
    await urara_celebration();
  }

  week_start = urara_week_start;

  basement_end = urara_basement_end;
};
