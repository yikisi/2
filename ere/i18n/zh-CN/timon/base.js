/**
 * @file 地下室地文
 * @author 露娜俘虏
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

module.exports = {
  /**
   * 被学园救援队救出
   * @param {CharaTalk} you
   * @param {number} fine
   */
  async school_rescue(you, fine) {
    await era.printAndWait([
      '在经历了惊魂的一周后 ',
      you.get_colored_name(),
      ' 被学园的救援队救出了地下室……',
    ]);
    if (fine > 0) {
      await era.printAndWait('……但是被扣除了一半存款作为上周误工的罚款。');
    }
  },
  /**
   * @param {number} hours
   * @param {number} minutes
   * @param {boolean} [base_12]
   */
  get_clock(hours, minutes, base_12 = false) {
    let p_hour;
    let p_minute;
    if (base_12) {
      if (hours < 12) {
        p_hour = '上午 ' + hours;
      } else {
        p_hour = `下午 ${hours % 12 || 12}`;
      }
    } else {
      p_hour = hours.toString();
    }
    if (minutes > 0) {
      p_minute = ` ${minutes} 分`;
    } else {
      p_minute = '整';
    }
    return `${p_hour} 点${p_minute}`;
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   */
  get_info_strike(chara) {
    return [
      chara.get_colored_name(),
      ' 刚刚回到这里，也许是一个偷袭的好机会……',
    ];
  },
  /**
   * @author 露娜俘虏
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {number} security_level
   * @param {number} love_level
   * @param {boolean} is_fix
   */
  get_info_awake(chara, you, security_level, love_level, is_fix) {
    const ret = [chara.get_colored_name(), ' '];
    switch (security_level) {
      case 1:
        ret.push('正处于一时冲动下的后悔');
        break;
      case 2:
        ret.push('看起来十分紧张，难以冷静');
        break;
      case 3:
        ret.push('的执念已经生根发芽');
        break;
      case 4:
        ret.push('的决心显然不可低估');
        break;
      case 5:
        ret.push('的心防俨然万无一失');
        break;
    }
    ret.push('……');
    switch (love_level) {
      case 0:
        ret.push(chara.sex, '还有其它的事要做，很快就会离开');
        break;
      case 1:
        ret.push(
          chara.sex,
          '紧紧地盯着 ',
          you.get_colored_name(),
          '，看来',
          chara.sex,
          '不会轻易离开',
        );
        break;
      case 2:
        ret.push(
          chara.sex,
          '死死地盯着 ',
          you.get_colored_name(),
          '，看来',
          chara.sex,
          '不会轻易离开',
        );
        break;
      case 3:
        ret.push(
          chara.sex,
          '向 ',
          you.get_colored_name(),
          ' 露出微笑，似乎并不打算离开 ',
          you.get_colored_name(),
        );
        break;
      case 4:
        ret.push(
          chara.sex,
          '的面容因心碎而扭曲，丝毫没有离开 ',
          you.get_colored_name(),
          ' 的打算',
        );
    }
    ret.push('……');
    if (is_fix) {
      ret.push('正在加固地下室……');
    }
    return ret;
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   */
  get_info_sleep: (chara) => [
    chara.get_colored_name(),
    // STATUSNAME:39 = 马跳S
    era.get(`status:${chara.id}:39`) > 0 ? ' 沉沉' : ' 静静',
    '地睡着……',
  ],
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   */
  first_time(you) {
    era.print([
      '不知过了多久，',
      you.get_colored_name(),
      ' 在一张简单的小床上悠悠醒转……',
    ]);
    era.print('眼前是陌生的天花板……');
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  welcome(chara, you) {
    if (LifeEventMarks.get_marks(0).b_start) {
      era.print([
        '不知过了多久，',
        you.get_colored_name(),
        ' 在一张简单的小床上悠悠醒转……',
      ]);
      era.print([
        '眼前是陌生的天花板……与微笑的 ',
        chara.get_colored_name(),
        '。',
      ]);
      era.print([
        '现在，',
        you.get_colored_name(),
        ' 成为了这座爱意牢笼中的囚徒……而 ',
        chara.get_colored_name(),
        ' 是唯一的狱卒……',
      ]);
    } else {
      era.print(['不知过了多久，', you.get_colored_name(), ' 悠悠醒转……']);
      era.print([
        '眼前是依然陌生的天花板……与微笑的 ',
        chara.get_colored_name(),
        '。',
      ]);
      era.print([
        '囚徒和',
        you.sex,
        '唯一的狱卒，终于在这爱意的囚笼中相会了……',
      ]);
    }
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   */
  async strike_success(you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 的偷袭奏效了！成功逃离了地下室！',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   */
  async strike_fail(you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 的偷袭失败了！被打晕了过去！',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async battle_success(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 对 ',
      chara.get_colored_name(),
      ' 的反抗成功了！',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async battle_fail(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 的反抗失败了！被 ',
      chara.get_colored_name(),
      ' 打晕了过去！',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   */
  async battle_escape(you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 成功解除了机关，逃离了地下室！',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   */
  async battle_prison(you) {
    await era.printAndWait([
      '但 ',
      you.get_colored_name(),
      ' 败给了机关……',
      { isBr: true },
      you.get_colored_name(),
      ' 被打晕后带回了地下室……',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} out_of_prison
   * @param {boolean} s_level_up
   * @param {boolean} [is_back]
   */
  find_escape(chara, you, out_of_prison, s_level_up, is_back) {
    if (out_of_prison) {
      era.print([
        you.get_colored_name(),
        ' 被刚',
        is_back ? '回来' : '醒来',
        '的 ',
        chara.get_colored_name(),
        ' 撞个正着！',
      ]);
    } else {
      era.print([you.get_colored_name(), ' 尝试逃离地下室的行为被当场撞破！']);
    }
    era.print([
      '愠怒的 ',
      chara.get_colored_name(),
      ' 将 ',
      you.get_colored_name(),
      ' 拖了回去！',
    ]);
    if (s_level_up) {
      era.print([
        chara.get_colored_name(),
        ' 对 ',
        you.get_colored_name(),
        ' 更加警惕了……',
      ]);
    }
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   */
  fix_prison(chara) {
    era.print([chara.get_colored_name(), ' 加固了地下室……']);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_up(chara, you) {
    if (LifeEventMarks.get_marks(chara.id).b_start > 0) {
      era.print([
        '在酣眠过后，这间地下室的主人——',
        chara.get_colored_name(),
        ' 终于醒来，开始享受与 ',
        you.get_colored_name(),
        ' 共度的时光……',
      ]);
    } else {
      era.print([chara.get_colored_name(), ' 悠悠醒转……']);
    }
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  back_basement(chara, you) {
    if (LifeEventMarks.get_marks(chara.id).b_start > 0) {
      era.print([
        '在漫长的等待后，这间地下室的主人——',
        chara.get_colored_name(),
        ' 终于现身，开始享受与 ',
        you.get_colored_name(),
        ' 共度的时光……',
      ]);
    } else {
      era.print([chara.get_colored_name(), ' 回到地下室了……']);
    }
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {CharaTalk} supporter
   */
  async rape(chara, you, supporter) {
    if (supporter) {
      await era.printAndWait([
        '在 ',
        chara.get_colored_name(),
        ' 的带领下，',
        supporter.get_colored_name(),
        ' 一起向 ',
        you.get_colored_name(),
        ' 缓缓逼近……',
      ]);
    } else {
      await era.printAndWait([
        chara.get_colored_name(),
        ' 向 ',
        you.get_colored_name(),
        ' 缓缓逼近……',
      ]);
    }
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async ask_release_agree(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' 面带愧疚地同意了 ',
      you.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' 摸了摸 ',
      chara.get_colored_name(),
      ' 的头，表示自己并未在意。',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async ask_release_reject(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' 浅笑着拒绝了 ',
      you.get_colored_name(),
      ' 的请求。',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async ask_time(chara, you) {
    await chara.say_and_wait('几点了呢？');
    await era.printAndWait([
      chara.get_colored_name(),
      ' 只是笑眯眯地看着 ',
      you.get_colored_name(),
      '。',
    ]);
  },
  rescue_fail_awake: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {CharaTalk} owner
     */
    const f = async (chara, you, owner) => {
      await era.printAndWait([
        chara.get_colored_name(),
        ' 闯进了 ',
        owner.get_colored_name(),
        ' 精心设计的地下室，但是未能救出心爱的 ',
        you.get_colored_name(),
        '……',
      ]);
      await era.printAndWait([
        '在 ',
        you.get_colored_name(),
        ' 绝望的目光中，',
        chara.get_colored_name(),
        ' 被 ',
        owner.get_colored_name(),
        ' 赶出了地下室……',
      ]);
    };
    f.title = '功败垂成';
    return f;
  })(),
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async rescue_fail_sleep(chara, you) {
    await era.printAndWait([you.get_colored_name(), ' 被一阵打斗声吵醒。']);
    await era.printAndWait([
      '地下室一片狼藉，但全须全尾的 ',
      chara.get_colored_name(),
      ' 仍然朝 ',
      you.get_colored_name(),
      ' 微笑着……',
    ]);
  },
  rescue_sneak_success: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {CharaTalk} owner
     * @param {boolean} awake
     * @param {boolean} o_awake
     */
    const f = async (chara, you, owner, awake, o_awake) => {
      if (awake) {
        await era.printAndWait([
          '趁 ',
          owner.get_colored_name(),
          o_awake ? ' 不在，' : ' 正在酣眠，',
          chara.get_colored_name(),
          ' 潜入了地下室，扶着 ',
          you.get_colored_name(),
          ' 扬长而去……',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' 在朦胧中感到正在被搬运。',
        ]);
        await era.printAndWait([
          '醒来之后，却已经身在训练室，面前则是微笑着的 ',
          chara.get_colored_name(),
          '。',
        ]);
      }
    };
    f.title = '英雄救美';
    return f;
  })(),
  rescue_sneak_prison: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {CharaTalk} owner
     * @param {boolean} awake
     * @param {boolean} o_awake
     */
    const f = async (chara, you, owner, awake, o_awake) => {
      if (awake) {
        await era.printAndWait([
          '趁 ',
          owner.get_colored_name(),
          o_awake ? ' 不在，' : ' 正在酣眠，',
          chara.get_colored_name(),
          ' 潜入了地下室，扶着 ',
          you.get_colored_name(),
          ' 扬长而去……',
        ]);
        await era.printAndWait([
          '在 ',
          you.get_colored_name(),
          ' 以为可以回归日常时，',
          chara.get_colored_name(),
          ' 却扶着 ',
          you.get_colored_name(),
          ' 来到另一个地方，然后传来了一声轻响……',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' 在朦胧中感到正在被搬运。',
        ]);
        await era.printAndWait([
          '醒来之后，却仍然身处地下室，布局与之前的有所不同，而面前站着微笑的 ',
          chara.get_colored_name(),
          '。',
        ]);
      }
      await era.printAndWait('「咔哒」', { fontSize: '1.5rem' });
    };
    f.title = '刚出虎口……';
    return f;
  })(),
  rescue_join: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {CharaTalk} owner
     * @param {boolean} awake
     */
    const f = async (chara, you, owner, awake) => {
      if (awake) {
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
          you.get_colored_name(),
          ' 以为会大打出手时，',
          chara.couple_title,
          '竟然握手言和了……',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' 从朦胧中清醒，意外地发现地下室内除了自己和 ',
          owner.get_colored_name(),
          ' 之外，还有第三个人——',
          chara.get_colored_name(),
          '。',
        ]);
      }
      await era.printAndWait([
        '现在，这间狭小的地下室，和其中的 ',
        you.get_colored_name(),
        ' 有了两个主人……',
      ]);
    };
    f.title = '天有二日';
    return f;
  })(),
  rescue_battle_success: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {CharaTalk} owner
     * @param {boolean} awake
     */
    const f = async (chara, you, owner, awake) => {
      if (awake) {
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
          you.get_colored_name(),
          ' 扬长而去……',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' 在朦胧中感到正在被搬运。',
        ]);
        await era.printAndWait([
          '醒来之后，却已经身在训练室，面前则是衣着有些褶皱，但仍然微笑着的 ',
          chara.get_colored_name(),
          '。',
        ]);
      }
    };
    f.title = '英雄救美';
    return f;
  })(),
  rescue_battle_prison: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {CharaTalk} owner
     * @param {boolean} awake
     */
    const f = async (chara, you, owner, awake) => {
      if (awake) {
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
          you.get_colored_name(),
          ' 以为可以回归日常时，',
          chara.get_colored_name(),
          ' 却扶着 ',
          you.get_colored_name(),
          ' 来到另一个地方，然后传来了一声轻响……',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' 在朦胧中感到正在被搬运。',
        ]);
        await era.printAndWait([
          '醒来之后，却仍然身处地下室，布局与之前的有所不同，而面前站着衣着有些褶皱、但仍在微笑的 ',
          chara.get_colored_name(),
          '……',
        ]);
      }
      await era.printAndWait('「咔哒」', { fontSize: '1.5rem' });
    };
    f.title = '刚出虎口……';
    return f;
  })(),
};
