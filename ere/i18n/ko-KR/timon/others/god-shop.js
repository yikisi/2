/**
 * @file 三女神の祈り - システム提示
 * @author 阿格尼斯数码公司
 * @author 黑奴队长
 */
const {
  get,
  input,
  print,
  printAndWait,
  printButton,
  println,
} = require('#/era-electron');

const { money_color } = require('#/data/color-const');

module.exports = {
  /**
   * 三女神像。同行キャラの気性ごとの反応
   * @param {CharaTalk} chara 同行キャラ。id が 0 なら同行なし
   * @param {CharaTalk} you プレイヤー
   * @param {number} chara_chara 気性。淫紋で歪められている場合あり
   * @returns {TextContent}
   */
  get_chara_react(chara, you, chara_chara) {
    switch (chara_chara) {
      case 1:
      case 3:
        return [
          '옆에 있는',
          chara.get_colored_name(),
          '은(는) 자신감 넘치는 미소를 지으며,',
          you.get_colored_name(),
          '에게 신뢰 어린 눈빛을 보냈다.',
        ];
      case -1:
      case 0:
      case 2:
        return [
          '옆에 있는',
          chara.get_colored_name(),
          '은(는) 세 여신상을 빤히 바라보다 시선을',
          you.get_colored_name(),
          '에게 돌리고,',
          you.get_colored_name(),
          '의 다음 행동을 기다리는 듯하다.',
        ];
      case -3:
      case -2:
        return [
          '옆에 있는',
          chara.get_colored_name(),
          '은(는) 조용히 꼬리를 흔들며,',
          you.get_colored_name(),
          '의 다음 행동을 기다리고 있다.',
        ];
    }
  },
  /**
   * 三女神像に到着。祈りの前
   * @param {CharaTalk} chara 同行キャラ。id が 0 なら同行なし
   * @param {CharaTalk} god 三女神のうち一人
   * @param {CharaTalk} you プレイヤー
   * @param {boolean} has_prayed すでに祈ったか
   * @param {TextContent} chara_react 同行キャラの反応
   */
  start(chara, god, you, has_prayed, chara_react) {
    if (chara.id > 0) {
      if (has_prayed) {
        god.say_as_unknown('……');
        print('세 여신상 위에서 신비로운 기운이 감돈다……');
        print([
          '누군가가',
          you.get_colored_name(),
          '과(와)',
          chara.get_colored_name(),
          '을(를) 바라보고 있다……',
        ]);
      } else {
        print([
          you.get_colored_name(),
          '은(는)',
          chara.get_colored_name(),
          '과(와) 함께 세 여신상 앞으로 왔다.',
        ]);
        print(chara_react);
      }
    } else if (has_prayed) {
      god.say_as_unknown('……');
      print('세 여신상 위에서 신비로운 기운이 감돈다……');
      print(['누군가가', you.get_colored_name(), '을(를) 바라보고 있다……']);
    } else {
      print([you.get_colored_name(), '은(는) 혼자 세 여신상 앞으로 왔다.']);
      print(
        '장엄한 세 여신상의 어깨 위 항아리에서 물이 끊임없이 흘러내리고 있다.',
      );
      god.say_as_unknown('……');
    }
  },
  bt_pray_honour_buff: '유명해지기를 기도한다 (명성 1,000)',
  bt_pray_money_buff: '부유해지기를 기도한다 (명성 500)',
  bt_pray_money: '당장 돈이 생기기를 기도한다 (명성 50+)',
  bt_pray_your_power: '더 강해지기를 기도한다 (명성 200)',
  get_bt_pray_over_limit: (name) =>
    `${name}의 한계 돌파를 기도한다 (명성 50-500)`,
  bt_pray_self_over_limit: '한계 돌파를 기도한다 (명성 50-500)',
  get_bt_pray_heal: (name) => `${name}의 건강 회복을 기도한다 (명성 800)`,
  bt_pray_self_heal: '건강 회복을 기도한다 (명성 800)',
  /**
   * 名声ボーナスを祈る
   * @param {CharaTalk} you プレイヤー
   * @param {string} uma ウマ郎 or ウマ娘
   * @param {function:Promise} finish_cb 祈りのあとの反応
   */
  async pray_honour_buff(you, uma, finish_cb) {
    print('(이것이 내가 원하는 것일까?)\n머릿속에 문득 그런 생각이 스친다……');
    printButton(
      `그렇다 (명성 획득 +${get('global:声望加成')}%→${get('global:声望加成') + 1}%）`,
      1,
    );
    printButton('아닐지도 모른다……', 2);
    const ret = await input();
    if (ret === 1) {
      await printAndWait('사람들에게 둘러싸여 칭찬받는 모습을 떠올린다……');
      await finish_cb();
      println();
      const honour = get('flag:当前声望');
      if (honour >= 2000) {
        await printAndWait([
          you.get_colored_name(),
          '은(는) 스마트폰을 열고, 명성이 일본을 넘어 세계까지 닿지는 못했다며 한탄했다.',
        ]);
      } else if (honour >= 1000) {
        await printAndWait([
          you.get_colored_name(),
          '은(는) 스마트폰을 열고, 명성이 우수한 학생을 직접 데려다주지는 못한다며 한탄했다.',
        ]);
      } else if (honour >= 500) {
        await printAndWait([
          you.get_colored_name(),
          '은(는) 스마트폰을 열고, 친한 친구와 가족 외에는 자신을 진심으로 바라봐 주는 사람이 적다는 사실에 한탄했다.',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          '은(는) 스마트폰을 열고, 친한 친구와 가족 외에는 연락처가 거의 없다는 사실에 한탄했다.',
        ]);
      }
      await printAndWait(
        '그런 생각을 하고 있을 때 모르는 사람에게 메시지가 왔다.',
      );
      await printAndWait([
        you.get_colored_name(),
        '이(가) 어떻게',
        uma,
        '을(를) 육성하는지 궁금하며, 육성한',
        uma,
        '의 성적을 보고 싶다는 내용이었다.',
      ]);
      await printAndWait(
        '그 후로 비슷한 연락이 전보다 더 많이 오기 시작했다……',
      );
    }
    return ret;
  },
  /**
   * 金銭ボーナスを祈る
   * @param {CharaTalk} you プレイヤー
   * @param {function:Promise} finish_cb 祈りのあとの反応
   */
  async pray_money_buff(you, finish_cb) {
    print('(이것이 내가 원하는 것일까?)\n머릿속에 문득 그런 생각이 스친다……');
    printButton(
      `그렇다 (우마 코인 획득 +${get('global:金钱加成')}%→${get('global:金钱加成') + 1}%）`,
      1,
    );
    printButton('아닐지도 모른다……', 2);
    const ret = await input();
    if (ret === 1) {
      await printAndWait([
        you.get_colored_name(),
        '은(는) 저금통이 나날이 무거워지는 모습을 떠올린다……',
      ]);
      await finish_cb();
      println();
      await printAndWait(
        '어째서인지 급여와 수당 액수가 머릿속에 떠오르고, 전보다 조금 많아진 듯했다.',
      );
      await printAndWait('트레센의 급여는 원래 높다. 착각이겠지……');
    }
    return ret;
  },
  /**
   * 金銭を祈る
   * @param {CharaTalk} you プレイヤー
   * @param {string} uma ウマ郎 or ウマ娘
   * @param {function:Promise} finish_cb 祈りのあとの反応
   */
  async pray_money(you, uma, finish_cb) {
    print(
      '(그렇다면 대략 얼마쯤 원하는가?)\n머릿속에 갑자기 그런 질문이 떠오른다……',
    );
    const honour = get('flag:当前声望');
    printButton('우마 코인 250이면 된다…… (명성 50)', 1, {
      disabled: honour <= 50,
    });
    printButton('우마 코인 500이면 된다…… (명성 100)', 2, {
      disabled: honour <= 100,
    });
    printButton('우마 코인 750이면 된다…… (명성 150)', 3, {
      disabled: honour <= 150,
    });
    printButton('우마 코인 1,000이면 된다…… (명성 200)', 4, {
      disabled: honour <= 200,
    });
    printButton('그만둔다', 99);
    const ret = await input();
    switch (ret) {
      case 1:
      case 2:
        await printAndWait([
          you.get_colored_name(),
          '은(는) 손에 넣은 돈으로',
          uma,
          '에게 트레이닝 기구를 사 주는 모습을 떠올린다……',
        ]);
        await finish_cb();
        println();
        await printAndWait([
          '얼마 후,',
          you.get_colored_name(),
          '은(는) 학원으로부터 지도 방식이 부상으로 이어질 수 있다는 연락을 받았다.',
        ]);
        await printAndWait([
          '이어서',
          (250 * ret).toString(),
          '우마 코인이 지급되었고, ',
          you.get_colored_name(),
          '은(는) 이 돈으로 트레이닝 방침을 개선하라는 요청을 받았다……',
        ]);
        break;
      case 3:
      case 4:
        await printAndWait([
          you.get_colored_name(),
          '은(는) 돈의 바다에서 헤엄치는 자신을 떠올린다……',
        ]);
        await finish_cb();
        println();
        await printAndWait([
          '얼마 후,',
          you.get_colored_name(),
          '은(는) 학원에서 연락을 받았다. ',
          you.get_colored_name(),
          '에게 특별 수당으로 ',
          (250 * ret).toString(),
          '우마 코인을 지급한다는 내용이었다.',
        ]);
        await printAndWait([
          '다만 트레센 학원의 트레이너로서 더는 이상한 소문을 만들지 말라는 조건인 듯하다……',
        ]);
    }
    return ret;
  },
  /**
   * 自分の強化を祈る
   * @param {CharaTalk} you プレイヤー
   * @param {CharaTalk} god 三女神のうち一人
   * @param {string} uma ウマ郎 or ウマ娘
   * @param {boolean[]} disabled_list その能力が上限か
   * @param {number} random_select ランダム選択時に実際に選ばれた能力
   * @param {function:Promise} pray_cb 自分が強くなったあとの共通反応
   * @param {function:Promise} finish_cb 祈りのあとの反応
   * @returns {Promise<[number,number]>} 一つ目は選択、二つ目は実際の能力
   */
  async pray_your_power(
    you,
    god,
    uma,
    disabled_list,
    random_select,
    pray_cb,
    finish_cb,
  ) {
    print('(가장 높이고 싶은 것은 무엇일까?)');
    print('머릿속에 그런 의문이 떠오른다……');
    printButton('스피드 (+80)', 0, { disabled: disabled_list[0] });
    printButton('스태미나 (+80)', 1, { disabled: disabled_list[1] });
    printButton('파워 (+80)', 2, { disabled: disabled_list[2] });
    printButton('근성 (+80)', 3, { disabled: disabled_list[3] });
    printButton('지능 (+80)', 4, { disabled: disabled_list[4] });
    printButton('모두 아직 부족하다…… (무작위 능력 +100)', 5);
    printButton('더 높일 곳은 없다', 99);
    const ret = [await input(), 0];
    ret[1] = ret[0];
    if (ret[0] <= 5) {
      switch (ret[0]) {
        // スピード
        case 0:
          await printAndWait([
            '조깅하는 담당',
            uma,
            '과(와) 나란히 달리며 지도하는 모습을 떠올린다……',
          ]);
          break;
        // スタミナ
        case 1:
          await printAndWait([
            '지치지도 게을러지지도 않고',
            uma,
            '들을 가르치는 모습을 떠올린다……',
          ]);
          break;
        // パワー
        case 2:
          await printAndWait([
            '담당',
            uma,
            '이(가) 줄다리기에서 우승하도록 돕는 모습을 떠올린다……',
          ]);
          break;
        // 根性
        case 3:
          await printAndWait([
            '목이 쉬도록 담당',
            uma,
            '을(를) 응원하는 자신을 떠올린다……',
          ]);
          break;
        // 賢さ
        case 4:
          await printAndWait([
            '담당',
            uma,
            '을(를) 위해 완벽한 트레이닝 계획을 잇달아 세우는 모습을 떠올린다……',
          ]);
          break;
        // ランダム
        case 5:
          await printAndWait([
            '담당',
            uma,
            '에게 위로받는 모습이 머릿속에 떠오른다……',
          ]);
          ret[1] = random_select;
      }
      await pray_cb();
      println();
      await finish_cb();
      switch (ret[1]) {
        // スピード
        case 0:
          await printAndWait([
            '따뜻한 여운이 머릿속에 남은 채,',
            you.get_colored_name(),
            '은(는) 몸이 가벼워진 듯했다……',
          ]);
          break;
        // スタミナ
        case 1:
          await printAndWait([
            '따뜻한 여운이 머릿속에 남은 채,',
            you.get_colored_name(),
            '은(는) 호흡이 차분해진 듯했다……',
          ]);
          break;
        // パワー
        case 2:
          await printAndWait([
            '따뜻한 여운이 머릿속에 남은 채,',
            you.get_colored_name(),
            '은(는) 근육이 충실해진 듯했다……',
          ]);
          break;
        // 根性
        case 3:
          await printAndWait([
            '따뜻한 여운이 머릿속에 남은 채,',
            you.get_colored_name(),
            '은(는) 가슴속에서 열기가 솟아오르는 것을 느꼈다……',
          ]);
          break;
        // 賢さ
        case 4:
          await printAndWait([
            '따뜻한 여운이 머릿속에 남은 채,',
            you.get_colored_name(),
            '은(는) 머리가 유난히 맑아진 듯했다……',
          ]);
      }
    } else {
      await god.say_as_unknown_and_wait('앞으로도 힘내거라……');
      await printAndWait('그런 목소리가 들린 듯했다.');
      println();
      await finish_cb();
      await printAndWait('세 여신상은 지금도 조용히 서 있다……');
    }
    return ret;
  },
  /**
   * 限界突破を祈る
   * @param {CharaTalk} chara 同行キャラ。id が 0 なら同行なし
   * @param {CharaTalk} you プレイヤー
   * @param {string} uma ウマ郎 or ウマ娘
   * @param {string} limited 上限に達した能力の数
   * @param {string} cost 名声消費
   */
  async pray_over_limit(chara, you, uma, limited, cost) {
    print([
      '（',
      limited,
      '개나 되는 능력이 극에 달한',
      chara.get_colored_name(),
      '에게 더 큰 한계를 요구하는가?)',
      { isBr: 1 },
      '머릿속에 그런 질문이 떠오른다……',
    ]);
    printButton(`동의한다 (${cost}명성, 트레이닝 보정 -10%)`, 1);
    printButton('조금 더 천천히 나아가도 좋다', 2);
    const ret = await input();
    if (ret === 1) {
      if (chara.id > 0) {
        await printAndWait([
          '옆에 있는',
          chara.uma_sex_title,
          '이(가) 선배들을 뛰어넘고 레이스 기록을 새로 쓰는 모습을 떠올린다……',
        ]);
        await printAndWait([
          '기도를 마치고 옆의',
          chara.get_colored_name(),
          '과(와) 거의 동시에 눈을 떴다.',
        ]);
        println();
        await printAndWait([
          '눈을 뜬',
          you.get_colored_name(),
          '은(는) 옆에 있는',
          chara.get_colored_name(),
          '의 몸짓 하나하나에서 새로운 성장 가능성을 분명히 느꼈다!',
        ]);
      } else {
        await printAndWait(
          '밤을 새우며 새로운 트레이닝 계획을 잇달아 써 내려가는 자신을 떠올린다……',
        );
        await printAndWait([
          '어둠 속에서 희미한 빛이 흔들리며, 천천히',
          you.get_colored_name(),
          '의 몸으로 흘러들었다!',
        ]);
        println();
        await printAndWait('기도를 마치고 천천히 눈을 뜬다……');
        await printAndWait([
          '따뜻한 여운이 머릿속에 남은 채,',
          you.get_colored_name(),
          '은(는) 자신이 더 성장할 수 있다고 확신했다.',
        ]);
      }
    } else if (chara.id > 0) {
      await printAndWait([
        '옆에 있는',
        chara.get_colored_name(),
        '이(가) 매일 꾸준히 트레이닝하는 모습을 떠올린다……',
      ]);
      await printAndWait([
        '기도를 마치고,',
        you.get_colored_name(),
        '은(는) 옆에 있는',
        chara.get_colored_name(),
        '과(와) 거의 동시에 눈을 떴다.',
      ]);
    } else {
      await printAndWait([
        '자신과',
        uma,
        '들이 함께 보낸 셀 수 없는 날들을 떠올린다……',
      ]);
      await printAndWait('기도를 마치고 천천히 눈을 떴다.');
    }
    return ret;
  },
  /**
   * 健康回復を祈る
   * @param {CharaTalk} chara 同行キャラ。id が 0 なら同行なし
   * @param {CharaTalk} god 三女神のうち一人
   * @param {CharaTalk} you プレイヤー
   * @param {string} uma ウマ郎 or ウマ娘
   * @param {TextContent} chara_react 同行キャラの反応
   * @param {function:Promise} finish_cb 祈りのあとの反応
   */
  async pray_heal(chara, god, you, uma, chara_react, finish_cb) {
    print([
      '(역시 가장 바라는 것은……)',
      { isBr: true },
      you.get_colored_name(),
      '은(는)',
      chara.get_colored_name(),
      '의 건강을 걱정하고 있다……',
    ]);
    printButton('기도가 도움이 된다면……', 1);
    printButton('기도보다 다른 노력이 필요할 것이다', 2);
    const ret = await input();
    if (ret === 1) {
      await printAndWait([
        chara.get_colored_name(),
        '이(가) 다시 건강하고 활기찬 모습을 떠올린다……',
      ]);
      await printAndWait([
        '기도를 마치고,',
        you.get_colored_name(),
        '은(는) 눈을 떴다.',
      ]);
      println();
      if (chara.id > 0) {
        await printAndWait([
          '활기 넘치는 몸을 느끼며,',
          you.get_colored_name(),
          '은(는) 자신이 세 여신상 앞에 온 이유가 조금 의아해졌다.',
        ]);
      } else {
        await printAndWait(chara_react);
        println();
        await printAndWait([
          '아까까지 활기 넘치던',
          chara.get_colored_name(),
          '을(를) 데리고 세 여신상 앞에 온',
          you.get_colored_name(),
          '은(는) 대체 무엇을 하러 온 것일까?',
        ]);
        await printAndWait([
          you.get_colored_name(),
          '은(는) 다음 행동을 생각한다.',
        ]);
      }
    } else {
      await printAndWait([
        chara.get_colored_name(),
        '이(가) 휴식하며 점점 회복하는 모습을 떠올린다……',
      ]);
      println();
      await god.say_as_unknown_and_wait('너라면……할 수 있다……');
      await printAndWait('그런 목소리가 들린 듯했다.');
      println();
      await finish_cb();
      println();
      await printAndWait('세 여신상은 지금도 조용히 서 있다……');
    }
    return ret;
  },
  /**
   * 健康回復を祈るが、もともと健康
   * @param {CharaTalk} chara 同行キャラ。id が 0 なら同行なし
   * @param {CharaTalk} you プレイヤー
   * @param {function:Promise} finish_cb 祈りのあとの反応
   */
  async pray_heal_no_need(chara, you, finish_cb) {
    await printAndWait([
      '여신님들이 앞으로도',
      chara.get_colored_name(),
      '의 건강을 지켜 주시기를 기도한다……',
    ]);
    println();
    await finish_cb();
    println();
    await printAndWait('세 여신상은 지금도 조용히 서 있다……');
  },
  /**
   * 祈りの前の共通行動
   * @param {CharaTalk} chara 同行キャラ。id が 0 なら同行なし
   * @param {CharaTalk} you プレイヤー
   */
  common_start_pray(chara, you) {
    if (chara.id > 0) {
      print([
        you.get_colored_name(),
        '의 지시에,',
        chara.get_colored_name(),
        '도 눈을 감고 세 여신상 앞에서 조용히 기도했다……',
      ]);
    } else {
      print([
        you.get_colored_name(),
        '은(는) 혼자 세 여신상 앞에서 조용히 기도했다……',
      ]);
    }
  },
  /**
   * 祈りのあとの共通反応
   * @param {CharaTalk} chara 同行キャラ。id が 0 なら同行なし
   * @param {CharaTalk} you プレイヤー
   */
  async common_finish_pray(chara, you) {
    if (chara.id > 0) {
      await printAndWait([
        '기도를 마치고,',
        you.get_colored_name(),
        '은(는) 옆에 있는',
        chara.get_colored_name(),
        '과(와) 거의 동시에 눈을 떴다.',
      ]);
    } else {
      await printAndWait([
        '기도를 마치고,',
        you.get_colored_name(),
        '은(는) 천천히 눈을 떴다.',
      ]);
    }
  },
  /**
   * 自分が強くなったあとの共通反応
   * @param {CharaTalk} you プレイヤー
   */
  async common_pray_your_power(you) {
    await printAndWait([
      '어둠 속에서 희미한 빛이 흔들리며, 천천히',
      you.get_colored_name(),
      '의 몸으로 흘러들었다!',
    ]);
  },
  /** 選択を諦めたあとに平和を祈る */
  async common_pray_peace() {
    await printAndWait('트레센 학원의 평안을 기도한다……');
  },
  /**
   * 三女神像を離れる
   * @param {CharaTalk} chara 同行キャラ。id が 0 なら同行なし
   * @param {CharaTalk} you プレイヤー
   * @param {boolean} has_prayed すでに祈ったか
   */
  async leave(chara, you, has_prayed) {
    if (chara.id > 0) {
      if (has_prayed) {
        await printAndWait([
          chara.get_colored_name(),
          '과(와)',
          you.get_colored_name(),
          '은(는) 함께 세 여신상을 떠났다.',
        ]);
      } else {
        await printAndWait([
          '세 여신상에 가볍게 예를 올린 뒤,',
          chara.get_colored_name(),
          '과(와)',
          you.get_colored_name(),
          '은(는) 함께 세 여신상을 떠났다.',
        ]);
      }
    } else if (has_prayed) {
      await printAndWait([
        you.get_colored_name(),
        '은(는) 돌아서서 트레이너실로 향했다.',
      ]);
    } else {
      await printAndWait([
        '세 여신상에 가볍게 예를 올린 뒤,',
        you.get_colored_name(),
        '은(는) 돌아서서 트레이너실로 향했다.',
      ]);
    }
  },
  /**
   * 三女神像の前へ来たが、三女神はすでに受肉している
   * @param {CharaTalk} you プレイヤー
   * @param {CharaTalk} god 受肉した女神のひとり
   */
  async start_with_no_god(you, god) {
    await printAndWait('세 여신상은 조용히 서 있다……');
    if (typeof god === 'object') {
      await printAndWait([
        you.get_colored_name(),
        '은(는) 갑자기 뒤에서 부르는 소리를 들었다……',
      ]);
      await printAndWait([
        '돌아보니 어느새',
        god.get_colored_name(),
        '이(가)',
        you.get_colored_name(),
        '의 뒤에 서 있었다……',
      ]);
    }
  },
  /**
   * 以下は三女神受肉後、肉体の三女神へ祈る文
   * <br>受肉後は女神像へ行かなくてよい
   */
  bt_pray: '여신에게 기도하기',
  pray_select: '무엇을 빌까?',
  /**
   * 肉体の三女神へ名声ボーナスを祈る
   * @returns {Promise<number>}
   */
  async handle_pray_honour_buff() {
    print('정말인가요?');
    printButton(
      `확정 (명성 획득 +${get('global:声望加成')}%→${get('global:声望加成') + 1}%）`,
      1,
    );
    printButton('그만둔다', 2);
    return await input();
  },
  /**
   * 肉体の三女神へ金銭ボーナスを祈る
   * @returns {Promise<number>}
   */
  async handle_pray_money_buff() {
    print('정말인가요?');
    printButton(
      `확정 (우마 코인 획득 +${get('global:金钱加成')}%→${get('global:金钱加成') + 1}%）`,
      1,
    );
    printButton('그만둔다', 2);
    return await input();
  },
  /**
   * 肉体の三女神へ強化を祈る
   * @param {boolean[]} disabled_list その能力が上限か
   * @param {number} random_select ランダム選択時に実際に選ばれた能力
   * @returns {Promise<[number,number]>}
   */
  async handle_pray_your_power(disabled_list, random_select) {
    print('어떤 능력을 원하나요?');
    printButton('스피드 (+80)', 0, { disabled: disabled_list[0] });
    printButton('스태미나 (+80)', 1, { disabled: disabled_list[1] });
    printButton('파워 (+80)', 2, { disabled: disabled_list[2] });
    printButton('근성 (+80)', 3, { disabled: disabled_list[3] });
    printButton('지능 (+80)', 4, { disabled: disabled_list[4] });
    printButton('무엇이든 좋다! (무작위 능력 +100)', 5);
    printButton('그만둔다', 99);
    const ret = [await input(), 0];
    ret[1] = ret[0];
    if (ret[0] === 5) {
      ret[1] = random_select;
    }
    return ret;
  },
  select_target: '대상을 선택해 주세요',
  no_targets: '조건을 충족하는 대상이 없습니다',
  get_target_entry_over_limit: (name, cost) =>
    `${name}（-${cost}명성, 트레이닝 보정 -10%)`,
  get_target_entry_heal: (name, cost) => `${name}（${cost}명성)`,
  /**
   * 限界突破を祈る
   * @param {CharaTalk} chara
   */
  handle_pray_over_limit(chara) {
    print([chara.get_colored_name(), '은(는) 한계를 뛰어넘은 듯하다']);
  },
  /**
   * 祈りの終わり
   * @param {CharaTalk} god 三女神のうち一人
   * @param {CharaTalk} you プレイヤー
   * @param {boolean} has_prayed 祈りを行ったか
   */
  handle_pray_end(god, you, has_prayed) {
    if (has_prayed) {
      print([
        god.get_colored_name(),
        '은(는)',
        you.get_colored_name(),
        '의 소원을 이루어 주었다',
      ]);
    } else {
      print([
        you.get_colored_name(),
        '은(는)',
        god.get_colored_name(),
        '을(를) 위한 기도를 포기했다……',
      ]);
    }
  },
  /**
   * 三女神受肉後、借金は金運の祈りになる
   * @param {CharaTalk} god 三女神のうち一人
   * @param {CharaTalk} you プレイヤー
   */
  async borrow_money(god, you) {
    const honour = get('flag:当前声望');
    if (honour < 50) {
      return await printAndWait('명성이 부족합니다');
    }
    print('우마 코인을 얼마나 원하나요?');
    printButton('우마 코인 400 (명성 50)', 1);
    printButton('우마 코인 800 (명성 100)', 2, { disabled: honour < 100 });
    printButton('우마 코인 1200 (명성 150)', 2, { disabled: honour < 150 });
    printButton('우마 코인 1600 (명성 200)', 2, { disabled: honour < 200 });
    printButton('그만둔다', 99);
    const ret = await input();
    if (ret === 99) {
      await printAndWait([
        you.get_colored_name(),
        '은(는)',
        god.get_colored_name(),
        '에게 우마 코인을 구하는 기도를 포기했다……',
      ]);
    } else {
      await printAndWait([
        you.get_colored_name(),
        '은(는) 트레센에서 추가 수당',
        { color: money_color, content: (400 * ret).toLocaleString() },
        '우마 코인 지급 통지를 받았다……다만 그 문구에는 업신여기는 듯한 뉘앙스가 있었다……',
      ]);
    }
    return ret;
  },
};
