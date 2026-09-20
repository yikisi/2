/**
 * @file 地下室の地の文
 * @author 露娜俘虏
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

module.exports = {
  /**
   * 学園の救援隊に救出される
   * @param {CharaTalk} you
   * @param {number} fine
   */
  async school_rescue(you, fine) {
    await era.printAndWait([
      '肝を冷やす一週間のあと、',
      you.get_colored_name(),
      ' は学園の救援隊に地下室から救い出された……',
    ]);
    if (fine > 0) {
      await era.printAndWait(
        '……ただし、先週の欠勤に対する罰金として、預金の半分が差し引かれた。',
      );
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
        p_hour = '午前 ' + hours;
      } else {
        p_hour = `午後 ${hours % 12 || 12}`;
      }
    } else {
      p_hour = hours.toString();
    }
    if (minutes > 0) {
      p_minute = ` ${minutes} 分`;
    } else {
      p_minute = 'ちょうど';
    }
    return `${p_hour} 時${p_minute}`;
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   */
  get_info_strike(chara) {
    return [
      chara.get_colored_name(),
      ' はいま戻ってきたばかりだ。奇襲の好機かもしれない……',
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
    const ret = [chara.get_colored_name(), ' は'];
    switch (security_level) {
      case 1:
        ret.push('一時の衝動をすでに後悔している');
        break;
      case 2:
        ret.push('ひどく緊張し、落ち着きを失っている');
        break;
      case 3:
        ret.push('執念が根を張り始めている');
        break;
      case 4:
        ret.push('決意を、到底甘く見られない');
        break;
      case 5:
        ret.push('心の守りがすでに万全だ');
        break;
    }
    ret.push('……');
    switch (love_level) {
      case 0:
        ret.push(chara.sex, 'にはほかの用事もあり、すぐに立ち去るだろう');
        break;
      case 1:
        ret.push(
          chara.sex,
          'は ',
          you.get_colored_name(),
          ' をじっと見つめ、そう簡単には離れないつもりらしい',
        );
        break;
      case 2:
        ret.push(
          chara.sex,
          'は ',
          you.get_colored_name(),
          ' を食い入るように見つめ、そう簡単には離れないつもりらしい',
        );
        break;
      case 3:
        ret.push(
          chara.sex,
          'は ',
          you.get_colored_name(),
          ' に微笑み、',
          you.get_colored_name(),
          ' のもとから去る気はなさそうだ',
        );
        break;
      case 4:
        ret.push(
          chara.sex,
          'の顔は心碎で歪み、',
          you.get_colored_name(),
          ' のもとから離れる気配はない',
        );
    }
    ret.push('……');
    if (is_fix) {
      ret.push('地下室を補強している……');
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
    era.get(`status:${chara.id}:39`) > 0 ? ' は深く' : ' は静かに',
    '眠っている……',
  ],
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   */
  first_time(you) {
    era.print([
      'どれほどの時が経ったのか、',
      you.get_colored_name(),
      ' は簡素な小ベッドの上で、ゆっくりと目を覚ました……',
    ]);
    era.print('目の前は見知らぬ天井だ……');
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  welcome(chara, you) {
    if (LifeEventMarks.get_marks(0).b_start) {
      era.print([
        'どれほどの時が経ったのか、',
        you.get_colored_name(),
        ' は簡素な小ベッドの上で、ゆっくりと目を覚ました……',
      ]);
      era.print([
        '目の前は見知らぬ天井……と、微笑む ',
        chara.get_colored_name(),
        '。',
      ]);
      era.print([
        'いま、',
        you.get_colored_name(),
        ' はこの愛の牢獄の囚人になった……そして ',
        chara.get_colored_name(),
        ' が、唯一の看守だ……',
      ]);
    } else {
      era.print([
        'どれほどの時が経ったのか、',
        you.get_colored_name(),
        ' はゆっくりと目を覚ました……',
      ]);
      era.print([
        '目の前は、相変わらず見知らぬ天井……と、微笑む ',
        chara.get_colored_name(),
        '。',
      ]);
      era.print([
        '囚人と、',
        you.sex,
        '唯一の看守は、ついにこの愛の牢獄で顔を合わせた……',
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
      ' の奇襲は成功した！ 地下室から逃れた！',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   */
  async strike_fail(you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' の奇襲は失敗した！ 殴られて気を失った！',
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
      ' の ',
      chara.get_colored_name(),
      ' への反抗は成功した！',
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
      ' の反抗は失敗した！ ',
      chara.get_colored_name(),
      ' に殴られて気を失った！',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   */
  async battle_escape(you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は機関を解き、地下室から逃れた！',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   */
  async battle_prison(you) {
    await era.printAndWait([
      'だが ',
      you.get_colored_name(),
      ' は機関に敗れた……',
      { isBr: true },
      you.get_colored_name(),
      ' は殴られて気を失い、地下室へ連れ戻された……',
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
        ' は、いま',
        is_back ? '戻ってきた' : '目覚めた',
        ' ',
        chara.get_colored_name(),
        ' に鉢合わせした！',
      ]);
    } else {
      era.print([
        you.get_colored_name(),
        ' が地下室から逃れようとしたところを、その場で見つかった！',
      ]);
    }
    era.print([
      '怒りを帯びた ',
      chara.get_colored_name(),
      ' は ',
      you.get_colored_name(),
      ' を引きずり戻した！',
    ]);
    if (s_level_up) {
      era.print([
        chara.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' への警戒をさらに強めた……',
      ]);
    }
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   */
  fix_prison(chara) {
    era.print([chara.get_colored_name(), ' は地下室を補強した……']);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_up(chara, you) {
    if (LifeEventMarks.get_marks(chara.id).b_start > 0) {
      era.print([
        '熟睡のあと、この地下室の主人——',
        chara.get_colored_name(),
        ' はようやく目覚め、',
        you.get_colored_name(),
        ' と過ごす時間を楽しみ始めた……',
      ]);
    } else {
      era.print([chara.get_colored_name(), ' はゆっくりと目を覚ました……']);
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
        '長い待ちのあと、この地下室の主人——',
        chara.get_colored_name(),
        ' はようやく姿を現し、',
        you.get_colored_name(),
        ' と過ごす時間を楽しみ始めた……',
      ]);
    } else {
      era.print([chara.get_colored_name(), ' は地下室へ戻ってきた……']);
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
        chara.get_colored_name(),
        ' に導かれ、',
        supporter.get_colored_name(),
        ' も一緒に ',
        you.get_colored_name(),
        ' へゆっくりと迫ってくる……',
      ]);
    } else {
      await era.printAndWait([
        chara.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' へゆっくりと迫ってくる……',
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
      ' は愧じらいを浮かべ、',
      you.get_colored_name(),
      ' の願いを聞き入れた。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' の頭を撫で、気にしていないと示した。',
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
      ' は薄く微笑み、',
      you.get_colored_name(),
      ' の願いを拒んだ。',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async ask_time(chara, you) {
    await chara.say_and_wait('いま、何時？');
    await era.printAndWait([
      chara.get_colored_name(),
      ' はただ、にこやかに ',
      you.get_colored_name(),
      ' を見つめている。',
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
        ' は ',
        owner.get_colored_name(),
        ' が丹念に仕組んだ地下室へ踏み込んだが、最愛の ',
        you.get_colored_name(),
        ' を救い出すことはできなかった……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の絶望した視線のなか、',
        chara.get_colored_name(),
        ' は ',
        owner.get_colored_name(),
        ' に地下室から追い出された……',
      ]);
    };
    f.title = '功成りて垂れんとして成らず';
    return f;
  })(),
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async rescue_fail_sleep(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は格闘の物音で目を覚ました。',
    ]);
    await era.printAndWait([
      '地下室は荒れ果てている。だが無傷の ',
      chara.get_colored_name(),
      ' は、なおも ',
      you.get_colored_name(),
      ' に微笑んでいる……',
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
          owner.get_colored_name(),
          o_awake ? ' の不在を狙い、' : ' が熟睡しているあいだに、',
          chara.get_colored_name(),
          ' は地下室へ潜り込み、',
          you.get_colored_name(),
          ' を支えて悠々と去っていった……',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' は朦朧のなか、運ばれている感覚を覚えた。',
        ]);
        await era.printAndWait([
          '目を覚ますと、すでにトレーナー室にいた。眼前では ',
          chara.get_colored_name(),
          ' が微笑んでいる。',
        ]);
      }
    };
    f.title = '英雄、美を救う';
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
          owner.get_colored_name(),
          o_awake ? ' の不在を狙い、' : ' が熟睡しているあいだに、',
          chara.get_colored_name(),
          ' は地下室へ潜り込み、',
          you.get_colored_name(),
          ' を支えて悠々と去っていった……',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' が日常へ戻れると思ったそのとき、',
          chara.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' を支えたまま別の場所へ連れていき、それから小さな音がした……',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' は朦朧のなか、運ばれている感覚を覚えた。',
        ]);
        await era.printAndWait([
          '目を覚ますと、まだ地下室にいた。間取りは以前と違い、眼前には微笑む ',
          chara.get_colored_name(),
          ' が立っている。',
        ]);
      }
      await era.printAndWait('「カチッ」', { fontSize: '1.5rem' });
    };
    f.title = '虎口を出たと思えば……';
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
          ' は ',
          owner.get_colored_name(),
          ' が丹念に仕組んだ地下室へ踏み込み、',
          owner.get_colored_name(),
          ' と対峙した。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' が乱闘になると思ったそのとき、',
          chara.couple_title,
          'はなんと握手して和睦した……',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' は朦朧から覚めると、地下室に自分と ',
          owner.get_colored_name(),
          ' 以外の第三の人物——',
          chara.get_colored_name(),
          ' がいるのに気づいた。',
        ]);
      }
      await era.printAndWait([
        'いま、この狭い地下室と、そのなかの ',
        you.get_colored_name(),
        ' には、主人がふたりいる……',
      ]);
    };
    f.title = '天に日が二つ';
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
          ' は ',
          owner.get_colored_name(),
          ' が丹念に仕組んだ地下室へ踏み込み、',
          owner.get_colored_name(),
          ' を地に倒した……',
        ]);
        await era.printAndWait([
          owner.get_colored_name(),
          ' の視線のなか、',
          chara.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' を支えて悠々と去っていった……',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' は朦朧のなか、運ばれている感覚を覚えた。',
        ]);
        await era.printAndWait([
          '目を覚ますと、すでにトレーナー室にいた。眼前では、服に皺が寄っているが、なお微笑む ',
          chara.get_colored_name(),
          ' が立っている。',
        ]);
      }
    };
    f.title = '英雄、美を救う';
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
          ' は ',
          owner.get_colored_name(),
          ' が丹念に仕組んだ地下室へ踏み込み、',
          owner.get_colored_name(),
          ' を地に倒した……',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' が日常へ戻れると思ったそのとき、',
          chara.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' を支えたまま別の場所へ連れていき、それから小さな音がした……',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' は朦朧のなか、運ばれている感覚を覚えた。',
        ]);
        await era.printAndWait([
          '目を覚ますと、まだ地下室にいた。間取りは以前と違い、眼前には服に皺が寄りつつも微笑む ',
          chara.get_colored_name(),
          ' が立っている……',
        ]);
      }
      await era.printAndWait('「カチッ」', { fontSize: '1.5rem' });
    };
    f.title = '虎口を出たと思えば……';
    return f;
  })(),
};
