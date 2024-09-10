const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const print_event_name = require('#/event/snippets/print-event-name');

const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const love_desc = [
    ['但', { t: 0 }, '还有其它的事要做，很快就会离开'],
    [
      '不过',
      { t: 0 },
      '紧紧地盯着 ',
      { t: 1 },
      '，看来',
      { t: 0 },
      '不会轻易离开',
    ],
    [
      '不过',
      { t: 0 },
      '死死地盯着 ',
      { t: 1 },
      '，看来',
      { t: 0 },
      '不会轻易离开',
    ],
    [{ t: 0 }, '向 ', { t: 1 }, ' 露出微笑，似乎并不打算离开 ', { t: 1 }],
    ['但', { t: 0 }, '的面容因心碎而扭曲，丝毫没有离开 ', { t: 1 }, ' 的打算'],
  ],
  security_desc = [
    '正处于一时冲动下的后悔',
    '看起来十分紧张，难以冷静',
    '的执念已经生根发芽',
    '的决心显然不可低估',
    '的心防俨然万无一失',
  ];

class CustomizedBase {
  constructor(chara_id) {
    this.id = chara_id;
  }

  get_basement_info(can_strike) {
    const chara = get_chara_talk(this.id),
      my_name = get_chara_talk(0).get_colored_name();
    if (can_strike) {
      return [
        chara.get_colored_name(),
        ' 刚刚回到这里，也许是一个偷袭的好机会……',
      ];
    } else if (sys_check_awake(this.id)) {
      const life_marks = new LifeEventMarks(this.id),
        relation = era.get(`relation:${this.id}:0`),
        love = era.get(`love:${this.id}`);
      let love_level =
        (love >= 85) * 2 +
        (relation < (era.get('flag:极端行为限制') || 1) * love);
      if (love_level === 3 && relation < 0) {
        love_level = 4;
      }
      return [
        chara.get_colored_name(),
        ' ',
        security_desc[life_marks.b_s_level - 1],
        '……',
        ...love_desc[love_level].map((e) => {
          switch (e.t) {
            case 0:
              return chara.sex;
            case 1:
              return my_name;
          }
          return e;
        }),
        '……',
      ];
    } else {
      return [
        chara.get_colored_name(),
        era.get('status:0:马跳S') ? '沉沉' : '静静',
        '地睡着……',
      ];
    }
  }

  async ask_release_agree() {
    const chara = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await era.printAndWait([
      chara.get_colored_name(),
      ' 面带愧疚地同意了 ',
      me.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 摸了摸 ',
      chara.get_colored_name(),
      ' 的头，表示自己并未在意。',
    ]);
  }

  async ask_release_reject() {
    const chara = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await era.printAndWait([
      chara.get_colored_name(),
      ' 浅笑着拒绝了 ',
      me.get_colored_name(),
      ' 的请求。',
    ]);
  }

  // eslint-disable-next-line no-unused-vars
  async ask_time(date, hours, minutes) {
    const chara = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await chara.say_and_wait('几点了呢？');
    await era.printAndWait([
      chara.get_colored_name(),
      ' 只是笑眯眯地看着 ',
      me.get_colored_name(),
      '。',
    ]);
  }

  /** @param {number} owner_id */
  async rescue_fail(owner_id) {
    const chara = get_chara_talk(this.id),
      owner = get_chara_talk(owner_id),
      me = get_chara_talk(0);
    if (sys_check_awake(0)) {
      await print_event_name('功败垂成', chara);
      await era.printAndWait([
        chara.get_colored_name(),
        ' 闯进了 ',
        owner.get_colored_name(),
        ' 精心设计的地下室，但是未能救出心爱的 ',
        me.get_colored_name(),
        '……',
      ]);
      await era.printAndWait([
        '在 ',
        me.get_colored_name(),
        ' 绝望的目光中，',
        chara.get_colored_name(),
        ' 被 ',
        owner.get_colored_name(),
        ' 赶出了地下室……',
      ]);
    } else {
      await era.printAndWait([me.get_colored_name(), ' 被一阵打斗声吵醒。']);
      await era.printAndWait([
        '地下室一片狼藉，但 ',
        owner.get_colored_name(),
        ' 仍然全须全尾，正朝 ',
        me.get_colored_name(),
        ' 微笑着……',
      ]);
    }
  }

  /** @param {number} owner_id */
  async rescue_sneak_success(owner_id) {
    const chara = get_chara_talk(this.id),
      owner = get_chara_talk(owner_id),
      me = get_chara_talk(0);
    await print_event_name('英雄救美', chara);
    if (sys_check_awake(0)) {
      await era.printAndWait([
        '趁 ',
        owner.get_colored_name(),
        sys_check_awake(owner_id) ? ' 不在，' : ' 正在酣眠，',
        chara.get_colored_name(),
        ' 潜入了地下室，扶着 ',
        me.get_colored_name(),
        ' 扬长而去……',
      ]);
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        ' 在朦胧中感到正在被搬运。',
      ]);
      await era.printAndWait([
        '醒来之后，却已经身在训练室，面前则是微笑着的 ',
        chara.get_colored_name(),
        '。',
      ]);
    }
  }

  /** @param {number} owner_id */
  async rescue_sneak_prison(owner_id) {
    const chara = get_chara_talk(this.id),
      owner = get_chara_talk(owner_id),
      me = get_chara_talk(0);
    await print_event_name('刚出虎口……', chara);
    if (sys_check_awake(0)) {
      await era.printAndWait([
        '趁 ',
        owner.get_colored_name(),
        sys_check_awake(owner_id) ? ' 不在，' : ' 正在酣眠，',
        chara.get_colored_name(),
        ' 潜入了地下室，扶着 ',
        me.get_colored_name(),
        ' 扬长而去……',
      ]);
      await era.printAndWait([
        '在 ',
        me.get_colored_name(),
        ' 以为可以回归日常时，',
        chara.get_colored_name(),
        ' 却扶着 ',
        me.get_colored_name(),
        ' 来到另一个地方，然后传来了一声轻响……',
      ]);
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        ' 在朦胧中感到正在被搬运。',
      ]);
      await era.printAndWait([
        '醒来之后，却仍然身处地下室，布局与之前的有所不同，而面前站着微笑的 ',
        chara.get_colored_name(),
        '。',
      ]);
    }
    await era.printAndWait('「咔哒」', { fontSize: '1.5rem' });
  }

  /** @param {number} owner_id */
  async rescue_join(owner_id) {
    const chara = get_chara_talk(this.id),
      owner = get_chara_talk(owner_id),
      me = get_chara_talk(0);
    await print_event_name('天有二日', chara);
    if (sys_check_awake(0)) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' 闯入了 ',
        owner.get_colored_name(),
        ' 精心设计的地下室，与 ',
        owner.get_colored_name(),
        ' 对峙。',
      ]);
      await era.printAndWait([
        '在 ',
        me.get_colored_name(),
        ' 以为会大打出手时，',
        chara.get_couple_title(),
        '竟然握手言和了……',
      ]);
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        ' 从朦胧中清醒，意外地发现地下室内除了自己和 ',
        owner.get_colored_name(),
        ' 之外，还有第三个人——',
        chara.get_colored_name(),
        '。',
      ]);
    }
    await era.printAndWait([
      '现在，这间狭小的地下室，和其中的 ',
      me.get_colored_name(),
      ' 有了两个主人……',
    ]);
  }

  /** @param {number} owner_id */
  async rescue_battle_success(owner_id) {
    const chara = get_chara_talk(this.id),
      owner = get_chara_talk(owner_id),
      me = get_chara_talk(0);
    await print_event_name('英雄救美', chara);
    if (sys_check_awake(0)) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' 闯进了 ',
        owner.get_colored_name(),
        ' 精心设计的地下室，将 ',
        owner.get_colored_name(),
        ' 击倒在地……',
      ]);
      await era.printAndWait([
        '在 ',
        owner.get_colored_name(),
        ' 的注视中，',
        chara.get_colored_name(),
        ' 扶着 ',
        me.get_colored_name(),
        ' 扬长而去……',
      ]);
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        ' 在朦胧中感到正在被搬运。',
      ]);
      await era.printAndWait([
        '醒来之后，却已经身在训练室，面前则是衣着有些褶皱，但仍然微笑着的 ',
        chara.get_colored_name(),
        '。',
      ]);
    }
  }

  /** @param {number} owner_id */
  async rescue_battle_prison(owner_id) {
    const chara = get_chara_talk(this.id),
      owner = get_chara_talk(owner_id),
      me = get_chara_talk(0);
    await print_event_name('刚出虎口……', chara);
    if (sys_check_awake(0)) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' 闯进了 ',
        owner.get_colored_name(),
        ' 精心设计的地下室，将 ',
        owner.get_colored_name(),
        ' 击倒在地……',
      ]);
      await era.printAndWait([
        '在 ',
        me.get_colored_name(),
        ' 以为可以回归日常时，',
        chara.get_colored_name(),
        ' 却扶着 ',
        me.get_colored_name(),
        ' 来到另一个地方，然后传来了一声轻响……',
      ]);
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        ' 在朦胧中感到正在被搬运。',
      ]);
      await era.printAndWait([
        '醒来之后，却仍然身处地下室，布局与之前的有所不同，而面前站着衣着有些褶皱、但仍在微笑的 ',
        chara.get_colored_name(),
        '。',
      ]);
    }
    await era.printAndWait('「咔哒」', { fontSize: '1.5rem' });
  }
}

module.exports = CustomizedBase;
