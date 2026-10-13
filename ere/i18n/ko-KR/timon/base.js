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
      '소름 끼치는 일주일을 보낸 뒤 ',
      you.get_colored_name(),
      '은(는) 학원의 구조대에 의해 지하실에서 구출되었다……',
    ]);
    if (fine > 0) {
      await era.printAndWait(
        '……하지만 지난주 결근에 대한 벌금으로 예금의 절반이 공제되었다.',
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
        p_hour = '오전' + hours;
      } else {
        p_hour = `오후${hours % 12 || 12}`;
      }
    } else {
      p_hour = hours.toString();
    }
    if (minutes > 0) {
      p_minute = ` ${minutes}분`;
    } else {
      p_minute = ' 정각';
    }
    return `${p_hour}시${p_minute}`;
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   */
  get_info_strike(chara) {
    return [
      chara.get_colored_name(),
      '은(는) 방금 돌아왔다. 기습할 좋은 기회일지도 모른다……',
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
    const ret = [chara.get_colored_name(), '은(는)'];
    switch (security_level) {
      case 1:
        ret.push('일시적인 충동으로 인한 후회에 젖어 있다');
        break;
      case 2:
        ret.push('매우 긴장한 기색이며, 좀처럼 진정하지 못하고 있다');
        break;
      case 3:
        ret.push('내면의 집착이 이미 깊게 뿌리를 내렸다');
        break;
      case 4:
        ret.push('그 결심은 결코 과소평가할 수 없어 보인다');
        break;
      case 5:
        ret.push('마음의 장벽은 그야말로 철통같다');
        break;
    }
    ret.push('……');
    switch (love_level) {
      case 0:
        ret.push(chara.sex, '에게는 다른 볼일도 있으니 곧 떠날 것이다');
        break;
      case 1:
        ret.push(
          chara.sex,
          '은(는)',
          you.get_colored_name(),
          '을(를) 빤히 바라보며 쉽게 떠날 생각이 없는 듯하다',
        );
        break;
      case 2:
        ret.push(
          chara.sex,
          '은(는)',
          you.get_colored_name(),
          '을(를) 뚫어지게 바라보며 쉽게 떠날 생각이 없는 듯하다',
        );
        break;
      case 3:
        ret.push(
          chara.sex,
          '은(는)',
          you.get_colored_name(),
          '에게 미소를 짓고,',
          you.get_colored_name(),
          '의 곁을 떠날 생각이 없어 보인다',
        );
        break;
      case 4:
        ret.push(
          chara.sex,
          '의 얼굴이 슬픔으로 일그러졌고,',
          you.get_colored_name(),
          '의 곁을 떠날 기미가 없다',
        );
    }
    ret.push('……');
    if (is_fix) {
      ret.push('현재 지하실을 보강하는 중이다……');
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
    era.get(`status:${chara.id}:39`) > 0
      ? '은(는) 깊은 잠에 빠져 있다……'
      : '은(는) 고요한 잠에 빠져 있다……',
    '자고 있다……',
  ],
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   */
  first_time(you) {
    era.print([
      '얼마나 시간이 지났을까,',
      you.get_colored_name(),
      '은(는) 소박한 작은 침대 위에서 천천히 눈을 떴다……',
    ]);
    era.print('눈앞에는 낯선 천장이 있었다……');
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  welcome(chara, you) {
    if (LifeEventMarks.get_marks(0).b_start) {
      era.print([
        '얼마나 시간이 지났을까,',
        you.get_colored_name(),
        '은(는) 소박한 작은 침대 위에서 천천히 눈을 떴다……',
      ]);
      era.print([
        '눈앞에는 낯선 천장……그리고 미소 짓는',
        chara.get_colored_name(),
        '。',
      ]);
      era.print([
        '이제,',
        you.get_colored_name(),
        '은(는) 이 사랑의 감옥에 갇힌 죄수가 되었다……그리고',
        chara.get_colored_name(),
        '이(가) 유일한 간수다……',
      ]);
    } else {
      era.print([
        '얼마나 시간이 지났을까,',
        you.get_colored_name(),
        '은(는) 천천히 눈을 떴다……',
      ]);
      era.print([
        '눈앞에는 여전히 낯선 천장……그리고 미소 짓는',
        chara.get_colored_name(),
        '。',
      ]);
      era.print([
        '죄수와,',
        you.sex,
        '유일한 간수가 마침내 이 사랑의 감옥에서 마주했다……',
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
      '의 기습이 성공했다! 지하실에서 무사히 탈출하였다!',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   */
  async strike_fail(you) {
    await era.printAndWait([
      you.get_colored_name(),
      '의 기습은 실패로 돌아갔다! 충격으로 인해 정신을 잃고 쓰러졌다!',
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
      '의',
      chara.get_colored_name(),
      '에 대한 저항은 성공했다!',
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
      '의 저항은 실패했다!',
      chara.get_colored_name(),
      '에게 맞아 정신을 잃었다!',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   */
  async battle_escape(you) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 성공적으로 장치를 해제하고 지하실에서 탈출하였다!',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   */
  async battle_prison(you) {
    await era.printAndWait([
      '그러나 ',
      you.get_colored_name(),
      '은(는) 끝내 장치를 풀어내지 못했다……',
      { isBr: true },
      you.get_colored_name(),
      '은(는) 다시 붙잡혀 지하실 깊숙한 곳으로 끌려갔다……',
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
        '은(는) 방금',
        is_back ? '돌아온' : '깨어난',
        ' ',
        chara.get_colored_name(),
        '과(와) 딱 마주쳤다!',
      ]);
    } else {
      era.print([
        you.get_colored_name(),
        '의 탈출 시도가 현장에서 발각되었다!',
      ]);
    }
    era.print([
      '분노한',
      chara.get_colored_name(),
      '은(는)',
      you.get_colored_name(),
      '을(를) 끌고 돌아왔다!',
    ]);
    if (s_level_up) {
      era.print([
        chara.get_colored_name(),
        '은(는)',
        you.get_colored_name(),
        '에 대한 경계를 더욱 강화했다……',
      ]);
    }
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   */
  fix_prison(chara) {
    era.print([
      chara.get_colored_name(),
      '이(가) 지하실의 설비를 보강하였다……',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_up(chara, you) {
    if (LifeEventMarks.get_marks(chara.id).b_start > 0) {
      era.print([
        '푹 자고 난 뒤, 이 지하실의 주인——',
        chara.get_colored_name(),
        '은(는) 마침내 깨어나,',
        you.get_colored_name(),
        '과(와) 보내는 시간을 즐기기 시작했다……',
      ]);
    } else {
      era.print([chara.get_colored_name(), '은(는) 천천히 눈을 떴다……']);
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
        '오랜 기다림 끝에, 이 지하실의 주인——',
        chara.get_colored_name(),
        '은(는) 마침내 모습을 드러내,',
        you.get_colored_name(),
        '과(와) 보내는 시간을 즐기기 시작했다……',
      ]);
    } else {
      era.print([chara.get_colored_name(), '은(는) 지하실로 돌아왔다……']);
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
        '에게 이끌려,',
        supporter.get_colored_name(),
        '도 함께',
        you.get_colored_name(),
        '에게 천천히 다가온다……',
      ]);
    } else {
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는)',
        you.get_colored_name(),
        '에게 천천히 다가온다……',
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
      '은(는) 부끄러운 기색으로,',
      you.get_colored_name(),
      '의 부탁을 들어주었다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는)',
      chara.get_colored_name(),
      '의 머리를 쓰다듬으며 괜찮다는 뜻을 전했다.',
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
      '은(는) 옅게 미소 지으며,',
      you.get_colored_name(),
      '의 부탁을 거절했다.',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async ask_time(chara, you) {
    await chara.say_and_wait('지금 몇 시야?');
    await era.printAndWait([
      chara.get_colored_name(),
      '은(는) 그저 미소를 지으며',
      you.get_colored_name(),
      '을(를) 바라보고 있다.',
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
        '은(는)',
        owner.get_colored_name(),
        '이(가) 치밀하게 꾸민 지하실에 들어갔지만, 가장 사랑하는',
        you.get_colored_name(),
        '을(를) 구해 내지 못했다……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 절망한 시선 속에서,',
        chara.get_colored_name(),
        '은(는)',
        owner.get_colored_name(),
        '에게 지하실에서 쫓겨났다……',
      ]);
    };
    f.title = '성공을 눈앞에 두고 실패하다';
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
      '은(는) 싸우는 소리에 눈을 떴다.',
    ]);
    await era.printAndWait([
      '지하실은 엉망이었다. 하지만 상처 하나 없는',
      chara.get_colored_name(),
      '은(는) 여전히',
      you.get_colored_name(),
      '에게 미소 짓고 있었다……',
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
          o_awake ? '의 부재를 틈타,' : '이(가) 깊이 잠든 사이에,',
          chara.get_colored_name(),
          '은(는) 지하실에 숨어들어,',
          you.get_colored_name(),
          '을(를) 부축하고 유유히 떠났다……',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 몽롱한 와중에 어딘가로 옮겨지는 듯한 느낌을 받았다.',
        ]);
        await era.printAndWait([
          '눈을 뜨자 이미 트레이너실이었다. 눈앞에서는',
          chara.get_colored_name(),
          '이(가) 미소 짓고 있었다.',
        ]);
      }
    };
    f.title = '영웅이 미인을 구하다';
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
          o_awake ? '의 부재를 틈타,' : '이(가) 깊이 잠든 사이에,',
          chara.get_colored_name(),
          '은(는) 지하실에 숨어들어,',
          you.get_colored_name(),
          '을(를) 부축하고 유유히 떠났다……',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 일상으로 돌아갈 수 있으리라 생각한 순간,',
          chara.get_colored_name(),
          '은(는)',
          you.get_colored_name(),
          '을(를) 부축한 채 다른 곳으로 데려갔고, 곧 작은 소리가 났다……',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 몽롱한 와중에 어딘가로 옮겨지는 듯한 느낌을 받았다.',
        ]);
        await era.printAndWait([
          '눈을 뜨자 여전히 지하실이었다. 구조는 전과 달랐고, 눈앞에는 미소 짓는',
          chara.get_colored_name(),
          '이(가) 서 있었다.',
        ]);
      }
      await era.printAndWait('「찰칵」', { fontSize: '1.5rem' });
    };
    f.title = '호랑이 굴을 벗어났나 했더니……';
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
          '은(는)',
          owner.get_colored_name(),
          '이(가) 치밀하게 꾸민 지하실에 들어가,',
          owner.get_colored_name(),
          '과(와) 대치했다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 난투가 벌어지리라 생각한 순간,',
          chara.couple_title,
          '은(는) 놀랍게도 악수하며 화해했다……',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 몽롱함에서 깨어나, 지하실에 자신과',
          owner.get_colored_name(),
          '외에 제삼자인——',
          chara.get_colored_name(),
          '이(가) 있다는 사실을 알아차렸다.',
        ]);
      }
      await era.printAndWait([
        '이제 이 좁은 지하실과 그 안의',
        you.get_colored_name(),
        '에게는 주인이 둘이다……',
      ]);
    };
    f.title = '하늘에 뜬 두 태양';
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
          '은(는)',
          owner.get_colored_name(),
          '이(가) 치밀하게 꾸민 지하실에 들어가,',
          owner.get_colored_name(),
          '을(를) 쓰러뜨렸다……',
        ]);
        await era.printAndWait([
          owner.get_colored_name(),
          '이(가) 지켜보는 가운데,',
          chara.get_colored_name(),
          '은(는)',
          you.get_colored_name(),
          '을(를) 부축하고 유유히 떠났다……',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 몽롱한 와중에 어딘가로 옮겨지는 듯한 느낌을 받았다.',
        ]);
        await era.printAndWait([
          '눈을 뜨자 이미 트레이너실이었다. 눈앞에는 옷이 구겨졌지만 여전히 미소 짓는',
          chara.get_colored_name(),
          '이(가) 서 있었다.',
        ]);
      }
    };
    f.title = '영웅이 미인을 구하다';
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
          '은(는)',
          owner.get_colored_name(),
          '이(가) 치밀하게 꾸민 지하실에 들어가,',
          owner.get_colored_name(),
          '을(를) 쓰러뜨렸다……',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 일상으로 돌아갈 수 있으리라 생각한 순간,',
          chara.get_colored_name(),
          '은(는)',
          you.get_colored_name(),
          '을(를) 부축한 채 다른 곳으로 데려갔고, 곧 작은 소리가 났다……',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 몽롱한 와중에 어딘가로 옮겨지는 듯한 느낌을 받았다.',
        ]);
        await era.printAndWait([
          '눈을 뜨자 여전히 지하실이었다. 구조는 전과 달랐고, 눈앞에는 옷이 구겨졌지만 미소 짓는',
          chara.get_colored_name(),
          '이(가) 서 있었다……',
        ]);
      }
      await era.printAndWait('「찰칵」', { fontSize: '1.5rem' });
    };
    f.title = '호랑이 굴을 벗어났나 했더니……';
    return f;
  })(),
};
