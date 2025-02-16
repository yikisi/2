/**
 * @file 米浴 - 日常
 * @author 梦露
 */
const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

/** @param {CharaTalk} rice */
function report_celebration(rice) {
  rice.say(
    Math.random() < 0.5
      ? '好像快要有活动了……不知道是要做什么样的事情呢？'
      : [
          '好像正在办活动……',
          sys_get_callname(30, 30),
          ' 会努力不制造麻烦的……可以去偷偷看一下吗……？',
        ],
  );
}

module.exports = class extends CustomizedDaily {
  select() {
    const rice = get_chara_talk(30);
    if (sys_check_awake(30)) {
      if (era.get('cflag:30:节日事件标记') === 1) {
        report_celebration(rice);
      } else {
        era.print(
          Math.random() < 0.5
            ? [
                rice.get_colored_name(),
                ' 被静电吓了一跳，抚弄了下耳朵后静等你的指令。',
              ]
            : [
                rice.get_colored_name(),
                ' 把刘海捋到一旁，让神采奕奕的双眸对上你的视线。',
              ],
        );
      }
    } else {
      era.print([rice.get_colored_name(), ' 带着比绘本还要精致的笑颜熟睡着。']);
    }
  }

  good_morning() {
    const rice = get_chara_talk(30);
    if (era.get('cflag:30:节日事件标记') === 1) {
      report_celebration(rice);
    } else {
      const buffer = [
        () => rice.say(['请一定……要好好看着 ', sys_get_callname(30, 30), '。']),
        () => rice.say([sys_get_callname(30, 30), '……也一定可以很耀眼的……']),
      ];
      if (!era.get('status:30:熬夜')) {
        buffer.push(
          () => {
            rice.say('昨晚做了一个很棒的梦……！');
            rice.say('和哥哥大人一起，在绚烂星空下的草原上。');
            rice.say('本来打算一起做训练来着……');
            rice.say('因为星星实在是太漂亮了，所以中途决定一起去看星星了。');
            rice.say('所以，就想着得早早起床，要好好地进行训练才行！');
          },
          () => {
            rice.say([sys_get_callname(30, 30), '，去了花店哦。']);
            rice.say('在凉爽的店里，被鲜花包围着，心情非常的平静。');
            rice.say([
              '呼呼～所以说今天的训练，',
              sys_get_callname(30, 30),
              ' 会好好努力的！',
            ]);
          },
        );
      }
      get_random_entry(buffer)();
    }
  }

  async talk() {
    if (!sys_check_awake(30)) {
      return super.talk();
    }
    const rice = get_chara_talk(30),
      callname = sys_get_callname(30, 0),
      motivation = era.get('cflag:30:干劲'),
      self_name = era.get('callname:30:30');
    const buffer = [];
    if (era.get('base:30:体力') < era.get('maxbase:30:体力') / 3) {
      buffer.push(
        () => rice.say_and_wait('呼……好像，有点累……的感觉……'),
        () => rice.say_and_wait([self_name, ' 没关系的！没有、感觉到累……']),
      );
    } else if (era.get('cflag:30:育成回合计时') < 3 * 48) {
      switch (motivation) {
        case -2: //干劲极差
          buffer.push(
            () =>
              rice.say_and_wait([
                '啊呜！明明不想给 ',
                callname,
                ' 添麻烦的……对不起。',
              ]),
            () => rice.say_and_wait([self_name, '……又要变回没用的孩子了吗…']),
          );
          break;
        case -1: //干劲较差
          buffer.push(
            () => rice.say_and_wait(['唔唔……加油 ', self_name, '……加油…']),
            () =>
              rice.say_and_wait([
                '有没有什么是 ',
                self_name,
                ' 能帮上忙的呢……',
              ]),
          );
          break;
        case 0: //干劲普通
          buffer.push(
            () => rice.say_and_wait('我们要做什么训练呢？'),
            () => rice.say_and_wait([self_name, ' 会努力不让人失望的。']),
          );
          break;
        case 1: //干劲良好
          buffer.push(
            () => rice.say_and_wait('要加油——喔！今天也请麻烦您多多指教了。'),
            () =>
              rice.say_and_wait([
                callname,
                '，我们开始训练吧？现在的 ',
                self_name,
                ' 感觉可以完成很多项目哦。',
              ]),
          );
          break;
        case 2: //干劲极佳
          buffer.push(
            () =>
              rice
                .say_and_wait([self_name, ' 现在觉得可以非常、非常地努力哦！'])
                .then(() =>
                  rice.say_and_wait([
                    '相信 ',
                    self_name,
                    ' 吧，',
                    callname,
                    '。',
                  ]),
                ),
            () =>
              rice
                .say_and_wait(['那个，', self_name, ' 已经做好热身运动了。'])
                .then(() =>
                  rice.say_and_wait('所以现在开始做什么都没问题哦。'),
                ),
          );
      }
    } else {
      buffer.push(
        () =>
          rice.say_and_wait(
            '每天，虽然只是一点点、但好像离理想中的自己越来越近了……的样子？',
          ),
        () =>
          rice.say_and_wait([
            callname,
            '……那个，跟你说哦……',
            self_name,
            ' 每天都会努力的……你要相信 ',
            self_name,
            ' 一定可以改变的。',
          ]),
        () =>
          rice.say_and_wait([
            '现在呀……',
            self_name,
            ' 也已经不会，那么讨厌自己了哦。',
          ]),
        () =>
          rice.say_and_wait([
            '……呃，',
            callname,
            '……今天也愿意继续照、照顾 ',
            self_name,
            ' 吗……？',
          ]),
        () =>
          rice.say_and_wait([
            '其……其实 ',
            self_name,
            ' 做了巧克力……',
            self_name,
            ' 做的巧克力你愿意吃吗……？你愿意收下的话，',
            self_name,
            ' 会很高兴的。',
          ]),
        () =>
          rice.say_and_wait([
            '星星可以实现大家的愿望，让大家都变得幸福，真的好厉害。',
            self_name,
            '……也要努力才行。',
          ]),
        () =>
          rice.say_and_wait([
            '自从遇到 ',
            callname,
            ' 之后，每天时间都过得好快……',
            self_name,
            ' 会努力的！',
          ]),
        () => rice.say_and_wait([self_name, ' 穿制服好看吗？']),
        () => rice.say_and_wait('一直被盯着看的话……感觉有点害羞。'),
      );
    }
    await get_random_entry(buffer)();
  }

  office_cook() {
    return get_chara_talk(30).say_and_wait(
      Math.random() < 0.5
        ? '诶嘿嘿，简直就像新婚夫妇呢。'
        : [
            '意外，吗？',
            sys_get_callname(30, 30),
            ' 因为胃口不小，所以有请母亲指导过。',
          ],
    );
  }

  office_study() {
    return get_chara_talk(30).say_and_wait(
      Math.random() < 0.5
        ? [
            '这是 ',
            sys_get_callname(30, 30),
            ' 精挑细选的绘本，还请 ',
            sys_get_callname(30, 0),
            ' 垂阅。',
          ]
        : [sys_get_callname(30, 0), '，和比赛有关的事情都好擅长……'],
    );
  }

  office_rest() {
    const callname = sys_get_callname(30, 0);
    return get_chara_talk(30).say_and_wait(
      Math.random() < 0.5
        ? [
            callname,
            '，那个……膝枕……哇啊啊，是 ',
            sys_get_callname(30, 30),
            ' 想给 ',
            callname,
            ' 做啦…',
          ]
        : [
            '真的不需要把外套给 ',
            sys_get_callname(30, 30),
            ' 当毯子的……好好闻…',
          ],
    );
  }

  office_game() {
    return get_chara_talk(30).say_and_wait(
      Math.random() < 0.5
        ? [
            '《',
            get_chara_talk(30).get_uma_sex_title(),
            '小顽皮爱洗澡》，嘻嘻，',
            sys_get_callname(30, 0),
            ' 也很喜欢哦。',
          ]
        : [
            sys_get_callname(30, 0),
            '，明明一副好学生的样子，游戏水平也好厉害！',
          ],
    );
  }

  async school_atrium(hook) {
    const callname = sys_get_callname(30, 0),
      rice = get_chara_talk(30),
      self_name = sys_get_callname(30, 30);
    hook.arg = !(await select_action_in_atrium(30));
    if (hook.arg) {
      await rice.say_and_wait(
        Math.random() < 0.5
          ? [
              '不能……哭，和 ',
              callname,
              ' 约好了，',
              self_name,
              ' 要成为坚强的孩子。',
            ]
          : ['三女神，', self_name, '，打算开始相信自己了。'],
      );
    } else {
      await rice.say_and_wait(
        Math.random() < 0.5
          ? '椅子上的大家，好大胆……有点羡慕。'
          : '明明是特雷森，却有这么适合约会的地方呢。',
      );
    }
  }

  school_rooftop() {
    return get_chara_talk(30).say_and_wait([
      sys_get_callname(30, 30),
      ' 虽然是早餐面包派，但对便当，还是有点自信的！',
    ]);
  }

  async out_river(hook, extra_flag) {
    const callname = era.get('callname:30:0'),
      rice = get_chara_talk(30);
    hook.arg = !!(await select_action_around_river());
    if (!hook.arg) {
      if (Math.random() < 0.1) {
        await rice.say_and_wait('呜啊啊啊！禁渔区钓上来这么多鱼，真的对不起！');
        extra_flag.jpy = 10;
      } else {
        await rice.say_and_wait([callname, '，现在是禁渔期哦？']);
        await rice.say_and_wait('欸……一人一杆一线一钩？改善生态环境？欸欸欸？');
      }
    } else {
      await rice.say_and_wait(
        Math.random() < 0.5
          ? [
              '以前一个人锻炼，可能会感到孤独。但是和 ',
              callname,
              ' 一起，就感觉像是心灵得到了慰藉一样！',
            ]
          : [
              sys_get_callname(30, 30),
              ' 最享受的，或者说最接近自己的时光，就是和 ',
              callname,
              ' 悠哉悠哉地走在一起的这段路程哦。',
            ],
      );
    }
  }

  async out_shopping(hook) {
    const callname = sys_get_callname(30, 0),
      rice = get_chara_talk(30),
      self_name = sys_get_callname(30, 30),
      temp = await select_action_in_shopping_street();
    hook.arg = temp <= 1;
    switch (temp) {
      case 0:
        await rice.say_and_wait(
          Math.random() < 0.5
            ? '为什么街机厅要用代币不直接用硬币呢？工作人员不会麻烦吗…'
            : [
                callname,
                '，这台机器可能有故障哦。因为，这么慢的弹幕，',
                callname,
                ' 怎么可能躲不过去啊？',
              ],
        );
        break;
      case 1:
        await rice.say_and_wait(
          Math.random() < 0.5
            ? [
                self_name,
                '，一直只能抽到纸巾呢……享受过程？那，',
                self_name,
                ' 再去试试看。',
              ]
            : [
                '那个，钱请让 ',
                self_name,
                ' 来出，',
                callname,
                ' 就请贡献自己的好运吧！',
              ],
        );
        break;
      case 2:
        await rice.say_and_wait(
          Math.random() < 0.5
            ? ['献给 ', callname, ' 的歌曲，要 ', self_name, ' 唱多少都行。']
            : [self_name, ' 小小的祈愿，有传达给 ', callname, ' 吗？'],
        );
        break;
      case 3:
        await rice.say_and_wait(
          Math.random() < 0.5
            ? [callname, '。为什么爱一个人，却会不喜欢对方呢？']
            : [
                '《火O忍者剧场版》，有很像 ',
                self_name,
                ' 的帅气角色？好期待！',
              ],
        );
    }
  }

  async out_station(hook) {
    const callname = sys_get_callname(30, 0),
      rice = get_chara_talk(30),
      self_name = sys_get_callname(30, 30);
    hook.arg = await select_action_in_station(30);
    switch (hook.arg) {
      case 0:
        await rice.say_and_wait(
          Math.random() < 0.5
            ? [
                '要要要、要吃 ',
                self_name,
                ' 什么的…啊，',
                callname,
                ' 是米饭派啊。',
              ]
            : ['果然还是aa吧？', self_name, ' 也知道自己的食量比较大。'],
        );
        break;
      case 1:
        await rice.say_and_wait(
          Math.random() < 0.5
            ? [
                '嘿嘿，',
                rice.get_colored_name(),
                ' 感觉自己就像绘本里的女主角一样。',
              ]
            : [callname, '，喜欢那种类型的雌性啊……'],
        );
        break;
      case 2:
        await rice.say_and_wait(
          Math.random() < 0.5
            ? '绘本区，一起逛逛吧？'
            : ['情侣限定……可是，', callname, ' 就是 ', callname, ' 啊。'],
        );
    }
  }
};
