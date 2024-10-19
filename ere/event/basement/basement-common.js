/**
 * @file 地下室地文
 *
 * @author 露娜俘虏
 * @author 无名黑奴
 */
const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { basement_status_enum } = require('#/data/basement-const');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

const desc_replace_type = { chara_sex: 0, my_name: 1 };

const love_desc = [
    [{ t: desc_replace_type.chara_sex }, '还有其它的事要做，很快就会离开'],
    [
      { t: desc_replace_type.chara_sex },
      '紧紧地盯着 ',
      { t: desc_replace_type.my_name },
      '，看来',
      { t: desc_replace_type.chara_sex },
      '不会轻易离开',
    ],
    [
      { t: desc_replace_type.chara_sex },
      '死死地盯着 ',
      { t: desc_replace_type.my_name },
      '，看来',
      { t: desc_replace_type.chara_sex },
      '不会轻易离开',
    ],
    [
      { t: desc_replace_type.chara_sex },
      '向 ',
      { t: desc_replace_type.my_name },
      ' 露出微笑，似乎并不打算离开 ',
      { t: desc_replace_type.my_name },
    ],
    [
      { t: desc_replace_type.chara_sex },
      '的面容因心碎而扭曲，丝毫没有离开 ',
      { t: desc_replace_type.my_name },
      ' 的打算',
    ],
  ],
  security_desc = [
    '正处于一时冲动下的后悔',
    '看起来十分紧张，难以冷静',
    '的执念已经生根发芽',
    '的决心显然不可低估',
    '的心防俨然万无一失',
  ];

class CustomizedBase {
  /**
   * @param {number} hours
   * @param {number} minutes
   * @param {boolean} [base_12]
   */
  static get_cur_time(hours, minutes, base_12) {
    return `${base_12 ? hours % 12 || 12 : hours} 点${minutes ? ` ${minutes} 分` : '整'}`;
  }

  constructor(chara_id) {
    this.id = chara_id;
  }

  /**
   * 初入地下室的欢迎 - 无人版本
   *
   * @author 无名黑奴
   */
  first_time() {
    era.print([
      '不知过了多久，',
      get_chara_talk(0).get_colored_name(),
      ' 在一张简单的小床上悠悠醒转……',
    ]);
    era.print('眼前是陌生的天花板……');
  }

  /**
   * 初入地下室的欢迎
   *
   * @author 无名黑奴
   */
  welcome() {
    const me = get_chara_talk(0),
      chara = get_chara_talk(this.id);
    if (new LifeEventMarks(0).b_start) {
      era.print([
        '不知过了多久，',
        me.get_colored_name(),
        ' 在一张简单的小床上悠悠醒转……',
      ]);
      era.print([
        '眼前是陌生的天花板……与微笑的 ',
        chara.get_colored_name(),
        '。',
      ]);
      era.print([
        '现在，',
        me.get_colored_name(),
        ' 成为了这座爱意牢笼中的囚徒……而 ',
        chara.get_colored_name(),
        ' 是唯一的狱卒……',
      ]);
    } else {
      era.print(['不知过了多久，', me.get_colored_name(), ' 悠悠醒转……']);
      era.print([
        '眼前是依然陌生的天花板……与微笑的 ',
        chara.get_colored_name(),
        '。',
      ]);
      era.print(['囚徒和', me.sex, '唯一的狱卒，终于在这爱意的囚笼中相会了……']);
    }
  }

  /**
   * 地下室的基础情报，显示在当前互动角色情报下面，说明角色当前的警戒度和独占力情况
   *
   * @author 露娜俘虏
   * @author 无名黑奴
   *
   * @param {boolean} [can_strike]
   */
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
            case desc_replace_type.chara_sex:
              return chara.sex;
            case desc_replace_type.my_name:
              return my_name;
          }
          return e;
        }),
        '……',
        new LifeEventMarks(this.id).b_status === 1 << basement_status_enum.fix
          ? '正在加固地下室……'
          : '',
      ];
    } else {
      return [
        chara.get_colored_name(),
        era.get('status:0:马跳S') ? ' 沉沉' : ' 静静',
        '地睡着……',
      ];
    }
  }

  /**
   * 讨好角色后的反应
   *
   * @author 无名黑奴
   *
   * @param {number} [supporter]
   */
  // eslint-disable-next-line no-unused-vars
  async flatter(supporter) {}

  /**
   * 趁角色刚回到地下室偷袭成功
   *
   * @author 无名黑奴
   */
  async strike_success() {
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      ' 的偷袭奏效了！成功逃离了地下室！',
    ]);
  }

  /**
   * 趁角色刚回到地下室偷袭失败，被打晕了
   *
   * @author 无名黑奴
   */
  async strike_fail() {
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      ' 的偷袭失败了！被打晕了过去！',
    ]);
  }

  /**
   * 正面击败角色，但还不知道能不能解除机关
   *
   * @author 无名黑奴
   */
  async battle_success() {
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      ' 对 ',
      get_chara_talk(this.id).get_colored_name(),
      ' 的反抗成功了！',
    ]);
  }

  /**
   * 没能正面击败角色，直接就被打晕了
   *
   * @author 无名黑奴
   */
  async battle_fail() {
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      ' 的反抗失败了！被 ',
      get_chara_talk(this.id).get_colored_name(),
      ' 打晕了过去！',
    ]);
  }

  /**
   * 正面击败角色后当面成功解除机关
   *
   * @author 无名黑奴
   */
  async battle_escape() {
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      ' 成功解除了机关，逃离了地下室！',
    ]);
  }

  /**
   * 正面击败角色后解除机关失败，没跑出去又被打晕了
   *
   * @author 无名黑奴
   */
  async battle_prison() {
    const me = get_chara_talk(0);
    await era.printAndWait([
      '但 ',
      me.get_colored_name(),
      ' 败给了机关……',
      { isBr: true },
      me.get_colored_name(),
      ' 被打晕后带回了地下室……',
    ]);
  }

  /**
   * 角色回到地下室/醒来发现玩家在逃离地下室
   *
   * @author 无名黑奴
   *
   * @param {boolean} out_of_prison
   * @param {boolean} s_level_up
   * @param {boolean} [is_back]
   */
  find_escape(out_of_prison, s_level_up, is_back) {
    const chara = get_chara_talk(this.id),
      me = get_chara_talk(0);
    if (out_of_prison) {
      era.print([
        me.get_colored_name(),
        ' 被刚',
        is_back ? '回来' : '醒来',
        '的 ',
        chara.get_colored_name(),
        ' 撞个正着！',
      ]);
    } else {
      era.print([me.get_colored_name(), ' 尝试逃离地下室的行为被当场撞破！']);
    }
    era.print([
      '愠怒的 ',
      chara.get_colored_name(),
      ' 将 ',
      me.get_colored_name(),
      ' 拖了回去！',
    ]);
    if (s_level_up) {
      era.print([
        chara.get_colored_name(),
        ' 对 ',
        me.get_colored_name(),
        ' 更加警惕了……',
      ]);
    }
  }

  /**
   * 加固地下室
   *
   * @author 无名黑奴
   */
  fix_prison() {
    era.print([get_chara_talk(this.id).get_colored_name(), ' 加固了地下室……']);
  }

  /**
   * 从沉睡中清醒
   *
   * @author 无名黑奴
   */
  get_up() {
    const chara = get_chara_talk(this.id),
      life_marks = new LifeEventMarks(this.id);
    if (life_marks.b_start) {
      era.print([
        '在酣眠过后，这间地下室的主人——',
        chara.get_colored_name(),
        ' 终于醒来，开始享受与 ',
        get_chara_talk(0).get_colored_name(),
        ' 共度的时光……',
      ]);
      life_marks.b_start = 0;
    } else {
      era.print([chara.get_colored_name(), ' 悠悠醒转……']);
    }
  }

  /**
   * 回到地下室
   *
   * @author 无名黑奴
   */
  back_basement() {
    const chara = get_chara_talk(this.id),
      life_marks = new LifeEventMarks(this.id);
    if (life_marks.b_start) {
      era.print([
        '在漫长的等待后，这间地下室的主人——',
        chara.get_colored_name(),
        ' 终于现身，开始享受与 ',
        get_chara_talk(0).get_colored_name(),
        ' 共度的时光……',
      ]);
    } else {
      era.print([chara.get_colored_name(), ' 回到地下室了……']);
    }
  }

  /**
   * 因精力不足而昏睡
   *
   * @author 无名黑奴
   */
  deep_sleep() {
    era.print([
      get_chara_talk(this.id).get_colored_name(),
      ' 因精力不济昏睡了过去！',
    ]);
  }

  /**
   * 进食
   *
   * @author 无名黑奴
   */
  eat_something() {
    era.print([
      get_chara_talk(this.id).get_colored_name(),
      ' 肚子饿了，吃了点东西……',
    ]);
  }

  /**
   * 因精力不足而主动选择睡眠
   *
   * @author 无名黑奴
   */
  sleep() {
    era.print([
      get_chara_talk(this.id).get_colored_name(),
      ' 有点累了，躺在床上睡着了……',
    ]);
  }

  /**
   * 角色主动调情
   *
   * @author 无名黑奴
   */
  lure() {
    era.print([
      get_chara_talk(this.id).get_colored_name(),
      ' 挑逗着 ',
      get_chara_talk(0).get_colored_name(),
      ' ……',
    ]);
  }

  /**
   * 选择雷普玩家
   *
   * @author 无名黑奴
   */
  async rape(supporter) {
    if (supporter) {
      await era.printAndWait([
        '在 ',
        get_chara_talk(this.id).get_colored_name(),
        ' 的带领下，',
        get_chara_talk(supporter).get_colored_name(),
        ' 一起向 ',
        get_chara_talk(0).get_colored_name(),
        ' 缓缓逼近……',
      ]);
    } else {
      await era.printAndWait([
        get_chara_talk(this.id).get_colored_name(),
        ' 向 ',
        get_chara_talk(0).get_colored_name(),
        ' 缓缓逼近……',
      ]);
    }
  }

  /**
   * 开始加固地下室
   *
   * @author 无名黑奴
   */
  start_fixing() {
    era.print([
      get_chara_talk(this.id).get_colored_name(),
      ' 开始加固地下室了……',
    ]);
  }

  /**
   * 刚刚离开
   *
   * @author 无名黑奴
   */
  out() {
    era.print([get_chara_talk(this.id).get_colored_name(), ' 要出去一趟……']);
  }

  /**
   * 请求对方释放，对方同意
   *
   * @author 无名黑奴
   */
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

  /**
   * 请求对方释放，对方拒绝
   *
   * @author 无名黑奴
   */
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

  /**
   * 询问时间
   *
   * @author 无名黑奴
   */
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

  /**
   * 救援事件 - 失败
   *
   * @author 无名黑奴
   *
   * @param {number} owner_id
   */
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
        '地下室一片狼藉，但全须全尾的 ',
        owner.get_colored_name(),
        ' 仍然朝 ',
        me.get_colored_name(),
        ' 微笑着……',
      ]);
    }
  }

  /**
   * 救援事件 - 趁主人不在时救援成功
   *
   * @author 无名黑奴
   *
   * @param {number} owner_id
   */
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

  /**
   * 救援事件 - 趁主人不在时救援成功，但是将玩家关到自己的地下室
   *
   * @author 无名黑奴
   *
   * @param {number} owner_id
   */
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

  /**
   * 救援事件 - 和玩家关系不睦，因此同流合污
   *
   * @author 无名黑奴
   *
   * @param {number} owner_id
   */
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

  /**
   * 救援事件 - 正面击败主人，救援成功
   *
   * @author 无名黑奴
   *
   * @param {number} owner_id
   */
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

  /**
   * 救援事件 - 正面击败主人，但是把玩家关到自己的地下室
   *
   * @author 无名黑奴
   *
   * @param {number} owner_id
   */
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
        '……',
      ]);
    }
    await era.printAndWait('「咔哒」', { fontSize: '1.5rem' });
  }

  handle_escape() {}
}

module.exports = CustomizedBase;
