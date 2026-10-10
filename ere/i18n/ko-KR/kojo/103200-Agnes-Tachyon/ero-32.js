/**
 * @file アグネスタキオン - 調教
 * @author 幽白書
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { part_enum } = require('#/data/ero/part-const');

module.exports = {
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {CharaTalk} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   */
  async kiss(tachyon, you, y_call_t) {
    await you.print_and_wait([
      y_call_t,
      '의 부드러운 입술이 자신의 입술과 포개진다.',
    ]);
    await tachyon.say_and_wait('응츄……츄파……츄……');
    await you.print_and_wait(
      '처음에는 가볍게 쪼듯 닿았던 입술이, 이윽고 서로 혀를 얽는 입맞춤으로 바뀌어 간다……',
    );
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   */
  async lure_by_tachyon(tachyon, you, y_call_t) {
    await you.print_and_wait([y_call_t, '이 요염한 눈빛으로 이쪽을 유혹한다.']);
    if (tachyon.sex_code > 0 && era.get('tcvar:32:发情') > 0) {
      await you.print_and_wait(
        '벌어진 입술도, 아래쪽 입도, 즙을 떨어뜨리며 채워지기를 기다리고 있다……',
      );
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   * @param {boolean} is_success 誘惑が成功したか
   */
  async lure(tachyon, you, callname, y_call_t, is_success) {
    await you.print_and_wait([
      '손을 뻗어 ',
      y_call_t,
      '의 엉덩이를 쓰다듬는다……',
    ]);
    if (is_success || era.get('tcvar:32:发情') > 0) {
      era.println();
      await tachyon.say_and_wait(['응……', callname, '❤️']);
      era.println();
      await you.print_and_wait([
        '쓰다듬기 편하도록 ',
        y_call_t,
        '은 스스로 엉덩이를 내밀었다.',
      ]);
      await you.print_and_wait('손바닥 가득 엉덩이의 감촉이 전해진다……');
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   */
  async pet_breast(tachyon, you) {
    await tachyon.say_and_wait('그렇게 가슴이 좋은 건가……❤️');
    era.println();
    await you.print_and_wait(
      '눈앞의 무르익은 과실이 양손의 움직임에 맞춰 끊임없이 흔들린다.',
    );
    await you.print_and_wait(
      '부드러운 젖가슴이 능숙한 손가락 아래에서 모양을 바꾼다.',
    );
    era.println();
    await tachyon.say_and_wait('앗……머리를, 그렇게……');
    era.println();
    await you.print_and_wait('가슴골에 얼굴을 묻고 깊이 숨을 들이쉰다.');
    await you.print_and_wait(
      '그녀의 향기와 발정한 우마무스메의 냄새가 뒤섞인다……',
    );
    await you.print_and_wait(
      '이미 무르익을 대로 익은 과실이다. 이제 맛보아도 좋다.',
    );
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   * @param {boolean} is_first 連続行動の初回か
   */
  async finger_fuck(tachyon, you, callname, y_call_t, is_first) {
    if (is_first) {
      await you.print_and_wait(
        '손가락을 넣는 순간, 출구를 찾은 듯 애액이 구멍 가장자리에서 주르르 흘러넘쳤다.',
      );
      era.println();
      await you.say_and_wait([y_call_t, ', 꽤나 음란하군.']);
      await you.say_and_wait('여기, 이렇게 젖어 있잖아.');
      era.println();
      await tachyon.say_and_wait([
        callname,
        '……그런 건 굳이 말하지 않아도 되지 않나……',
      ]);
    } else {
      await tachyon.say_and_wait('응……❤️');
      era.println();
      await you.print_and_wait(
        '손가락이 습지에 잠기는 듯하다. 촉촉한 땅이 개척을 기다리고 있다.',
      );
      era.println();
      await tachyon.say_and_wait(['어서……오게나, ', callname, '❤️']);
      era.println();
      await you.print_and_wait(
        '투명한 애액이 비밀스러운 틈에서 끊임없이 떨어진다.',
      );
      await you.print_and_wait([
        '엉덩이도 계속 흔들며 ',
        you.get_colored_name(),
        '이 손을 대도록 유도하고 있다.',
      ]);
      await you.print_and_wait('교미할 준비는 이미 완전히 끝난 모양이다.');
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   */
  async prepare_virgin(tachyon, you, callname, y_call_t) {
    if (era.get('mark:32:同心') <= 1) {
      await tachyon.say_and_wait('……짓궂군……');
      era.println();
      await you.print_and_wait([
        '얼굴은 붉히고 있지만 거부하지 않는 이상, ',
        y_call_t,
        '의 속마음은 뻔히 보인다.',
      ]);
      await you.print_and_wait('하지만 이것만으로는 부족하다……');
      await you.print_and_wait('조르는 말, 들려주겠어?');
      era.println();
      await tachyon.say_and_wait('취향이 너무 고약하군……');
      await tachyon.say_and_wait([
        '부디……',
        callname,
        ' 전용의 음란한 구멍이 ',
        callname,
        '을 모실 수 있도록……',
      ]);
      await tachyon.say_and_wait('마음껏 괴롭혀 주게……이 음란한 구멍을❤️');
      era.println();
      await you.print_and_wait('자신이 시켜서 한 말인데도……');
      await you.print_and_wait([
        y_call_t,
        '의 모습을 보니, 그 음담패설에 본인도 흥분한 모양이다……',
      ]);
    } else {
      await tachyon.say_and_wait([callname, '❤️']);
      era.println();
      await you.print_and_wait(
        '지금도 계속 흘러내리는 즙이 끈적하게 달라붙어 있다.',
      );
      await you.print_and_wait([y_call_t, '은 아래쪽의 부드러운 입을 벌렸다.']);
      await you.print_and_wait(
        '그토록 기다리던 것이 들어오기를 기다리고 있다……',
      );
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   */
  async pet_anal(tachyon, you, callname, y_call_t) {
    await you.print_and_wait([
      y_call_t,
      '의 발정한 구멍에서 흐른 즙을 윤활제로 바르고, 손을 ',
      y_call_t,
      '의 뒷구멍 앞에 댄다.',
    ]);
    if (era.get('abl:32:肛门耐性') >= 3) {
      await you.print_and_wait(
        '본래 출구여야 할 곳이 눌리는 것만으로 저절로 살짝 벌어진다.',
      );
      await you.print_and_wait(
        '엉덩이도 누르는 박자에 맞춰 무의식적으로 흔들리기 시작했다.',
      );
      era.println();
      await tachyon.say_and_wait([callname, '❤️거긴 안 되네❤️']);
      era.println();
      await you.print_and_wait(
        '거부하는 말인데도, 목소리가 전하는 것은 계속해 달라는 유혹이다.',
      );
      await you.print_and_wait(
        '하지만 더 나아가지는 않고, 애태우듯 살며시 누르기만 한다……',
      );
    } else {
      era.println();
      await tachyon.say_and_wait('잠깐! 거기는!');
      era.println();
      await you.print_and_wait([
        '못 들은 척하며 손끝으로 ',
        y_call_t,
        '의 뒷구멍을 가볍게 누른다.',
      ]);
      await you.print_and_wait('닫힌 입구가 익숙하지 않은 감각에 떨리고 있다.');
      await you.print_and_wait(
        '하지만 바로 이런 서투름이 있어야 길들이는 보람도 있지 않겠는가?',
      );
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   */
  async prepare_anal(tachyon, you, callname, y_call_t) {
    if (era.get('abl:32:肛门耐性') >= 3) {
      await tachyon.say_and_wait(
        '어서……이 상스럽게 욱신거리는 음란한 뒷구멍을 벌해 주게❤️',
      );
      era.println();
      await you.print_and_wait([
        '뒷구멍을 필사적으로 벌리는 ',
        y_call_t,
        '이 갈망하는 말을 내뱉으며 육봉의 삽입을 재촉한다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '에게 개발된……',
        callname,
        '의 취향대로 어떻게 써도 되는 뒷구멍……어서 넣어 주게❤️',
      ]);
      await tachyon.say_and_wait([
        callname,
        '의 굵은 육봉으로, 세게……찔러 줘❤️',
      ]);
      await tachyon.say_and_wait([
        '뒷구멍만으로 몇 번이고 가는 음란한 ',
        tachyon.uma_sex_title,
        '로……만들어 주게❤️',
      ]);
      era.println();
      await you.print_and_wait([
        '여유롭게 ',
        y_call_t,
        '이 미친 듯이 조르는 모습을 바라본다. 떨리는 뒷구멍의 주름에 입김을 불어 ',
        y_call_t,
        '이 온몸을 떠는 반응을 지켜본다.',
      ]);
      await you.print_and_wait([
        '언제나 당당한 ',
        y_call_t,
        '이 이렇게 조르는 모습은 좀처럼 보기 어렵다.',
      ]);
      await you.print_and_wait(
        '게다가 그저 즐기기 위해, 생식의 의미도 없는 행위를 조르고 있는 것이다.',
      );
      await you.print_and_wait([
        '다만 ',
        y_call_t,
        '을 정말로 화나게 하지 않도록 주의해야 한다……그래도 조금만 더 즐겨 두자……',
      ]);
    } else {
      await tachyon.say_and_wait([
        '……정말 그렇게 할 생각인가, ',
        callname,
        '……',
      ]);
      await tachyon.say_and_wait('이런 곳에……들어갈 리가 없네……절대로……');
      era.println();
      await you.print_and_wait([
        y_call_t,
        '은 시키는 대로 엉덩이를 붙잡아 뒷구멍을 완전히 벌리고 있다.',
      ]);
      await you.print_and_wait('하지만 얼굴에는 아직 두려움이 남아 있다.');
      await you.print_and_wait(
        '배설구를 성기처럼 쓰겠다는 말을 듣고 두렵지 않을 사람이 어디 있겠는가.',
      );
      await you.print_and_wait('하지만……');
      era.println();
      await you.print_and_wait('기분 좋아질 거야. 안심해도 돼.');
      await you.print_and_wait([
        y_call_t,
        '의 엉덩이를 가볍게 두드리며 장담한다.',
      ]);
      await you.print_and_wait(
        '뒷구멍의 주름이 한 차례 떨려, 그 말에 답하는 듯했다.',
      );
    }
  },
  /** @param {CharaTalk} tachyon アグネスタキオン */
  async ask_blow_job(tachyon) {
    await tachyon.say_and_wait('정말……어쩔 수 없군……');
    await tachyon.say_and_wait('오게나……내 입에 자네의 흔적을 남길 생각으로……');
    await tachyon.say_and_wait('마음껏 식도도 위도, 자네의 인자로 채워 주게❤️');
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   */
  async ask_deep_blow_job(tachyon, you, callname) {
    await tachyon.print_and_wait([
      '자신이 인정한 ',
      you.phy_sex_title,
      '이 자신을 미치게 만드는 냄새를 풍기고 있다.',
    ]);
    await tachyon.print_and_wait(
      '그리고 자신을 미치게 만드는 부탁을 입에 담았다.',
    );
    era.println();
    await tachyon.say_and_wait('응……앗❤️');
    era.println();
    await tachyon.print_and_wait(
      '「이렇게 기분 좋게 해 줄 수 있는 건 나뿐이야」——그 생각을 상대의 머릿속에 새기려는 듯……',
    );
    await tachyon.print_and_wait(
      '때때로 침을 머금고 음란한 물소리를 내며 열심히 빤다.',
    );
    await tachyon.print_and_wait(
      '때때로 목 깊숙이 삼키며, 수컷 냄새가 짙은 털이 콧속을 간질이는 감촉을 음미하고, 생사를 맡긴 감각에 취한다.',
    );
    await tachyon.print_and_wait([
      callname,
      '에 대한 갈망과 이토록 비천한 짓을 하고 싶다는 충동——그 외에는 영리한 머릿속에 아무것도 들어오지 않는다……',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   */
  async force_blow_job(tachyon, you, callname, y_call_t) {
    await tachyon.say_and_wait([
      '왜 그러나? ',
      callname,
      ', 들어오지 않을 건가?',
    ]);
    await tachyon.say_and_wait('설마 너무 짧아서 비웃음당할까 두려운 건가?');
    await tachyon.say_and_wait(
      '괜찮네. 개체 차이의 문제라면 나도 이해……읍……응푸……푸츄……',
    );
    era.println();
    await you.print_and_wait([y_call_t, '의 도발에 더는 참을 수 없었다.']);
    await you.print_and_wait([
      '시끄러운 입구멍을 겨냥해 억지로 육봉을 밀어 넣는다.',
    ]);
    await you.print_and_wait('촉촉하고 매끄러운 입안을 거칠게 앞뒤로 찌른다.');
    await you.print_and_wait('이 입……말하는 데 쓰기에는 아깝군……');
    await you.print_and_wait('살구멍으로서의 가치가 훨씬 높다.');
    if (
      era.get('talent:32:喜欢责骂') > 0 ||
      era.get('talent:32:喜欢痛苦') > 0
    ) {
      era.println();
      await you.print_and_wait('응?');
      await you.print_and_wait(
        '정신을 차려 보니, 마음껏 입구멍을 찌르는 감촉 외에도——',
      );
      await you.print_and_wait([
        y_call_t,
        '의 입 역시 움직임에 맞춰 스스로 빨며 쾌감을 돌려주고 있었다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '더……더 범해 주게……이 비천한 입구멍을……',
        true,
      );
      era.println();
      await you.print_and_wait([y_call_t, '은 황홀한 표정을 짓고 있다……']);
    }
  },
  /**
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   */
  async force_deep_blow_job(you, y_call_t) {
    await you.print_and_wait([
      '강압적인 행위인데도 ',
      y_call_t,
      '역시 스스로 움직임에 맞춰 빨아 온다.',
    ]);
    await you.print_and_wait('혀로 육봉을 감아 목 깊숙한 곳으로 이끈다.');
    await you.print_and_wait(
      '황홀한 표정이 괴롭히고 싶은 욕망을 몇 번이고 부추긴다……',
    );
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   * @param {boolean} is_first 連続行動の初回か
   */
  async blow_job(tachyon, you, callname, y_call_t, is_first) {
    if (is_first) {
      await you.print_and_wait('육봉이 툭 하고 튀었다.');
      await you.print_and_wait([
        '요도 끝에서 배어 나온 정액 냄새가 ',
        y_call_t,
        '의 코를 자극한다.',
      ]);
      era.println();
      await tachyon.say_and_wait('후후, 튀었군.');
      await tachyon.say_and_wait([
        callname,
        '……그렇게 내 입구멍이 기대되는 건가?',
      ]);
      era.println();
      await you.print_and_wait([
        y_call_t,
        '은 ',
        you.get_colored_name(),
        '의 얼굴을 올려다보며 요염한 표정으로 말한다.',
      ]);
      await you.print_and_wait(
        '블라인드 같은 광기 어린 두 눈이 지금은 색기를 띠며 유혹하고 있다.',
      );
    } else if (
      Array.isArray(era.get('tcvar:0:接近高潮')) &&
      era.get('tcvar:0:接近高潮').includes(part_enum.penis)
    ) {
      await you.print_and_wait(
        '혀의 감촉으로 허리 움직임을 재촉한 것이 전해진다.',
      );
      await you.print_and_wait([
        y_call_t,
        '도 속도를 높여, 얼굴을 움직이며 육봉을 거듭 삼킨다. 육봉에 밀려 부푼 뺨이 귀두 끝에 더욱 큰 쾌감을 준다.',
      ]);
      await you.print_and_wait(
        '찌르는 움직임과 빠는 움직임이 주는 이중의 쾌감에 극락으로 빠져든다……',
      );
      era.println();
      await tachyon.say_and_wait('응……응츄……응포……');
      await tachyon.say_and_wait([callname, '의……전부……']);
    } else {
      await you.print_and_wait(
        '작은 입구멍 안에서 촉촉하고 매끄러운 혀가 귀두 위를 돌며 쾌감을 한곳에 모은다.',
      );
      await you.print_and_wait([
        '계속 허리를 움직여, 육봉이 더 깊이 ',
        y_call_t,
        '의 지극한 쾌감을 맛볼 수 있도록 한다.',
      ]);
    }
  },
  /** @param {CharaTalk} tachyon アグネスタキオン */
  async ask_hand_job(tachyon) {
    await tachyon.say_and_wait('정말……');
    await tachyon.say_and_wait('어차피 얼굴에 쌀 생각이지❤️');
    await tachyon.say_and_wait(
      '좋네……내 얼굴을 모르모트 군의 냄새나는 정액으로 뒤덮어 줘……',
    );
    await tachyon.say_and_wait('짙은 냄새군❤️');
    await tachyon.say_and_wait('마음껏 내게 뿌려 주게❤️');
    if (era.get('tcvar:32:喜欢责骂') || era.get('tcvar:32:喜欢痛苦')) {
      await tachyon.say_and_wait('걸레처럼 마음대로 닦아 내도 상관없네❤️');
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   */
  async ask_tit_job(tachyon, you, callname, y_call_t) {
    await tachyon.say_and_wait(
      '이해할 수 없군. 이런 지방 덩어리의 무엇이 좋다는 건지……',
    );
    await tachyon.say_and_wait('좋네, 오게나❤️');
    era.println();
    await you.print_and_wait([
      '젖가슴에 감싸인 육봉이 ',
      y_call_t,
      '이 가슴을 주무르는 마찰에 더욱 단단해진다.',
    ]);
    await you.print_and_wait('하지만 이것만으로는……부족하다……');
    era.println();
    await you.print_and_wait([
      '양손으로 ',
      y_call_t,
      '의 유방을 붙잡고, 서로 맞누르듯 가슴으로 육봉을 끼운다.',
    ]);
    await you.print_and_wait([
      '눈앞의 담당 ',
      tachyon.uma_sex_title,
      '를 성욕 처리 도구로 철저히 쓰고 있다……',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   * @param {boolean} is_first 連続行動の初回か
   */
  async fuck_tit(tachyon, you, callname, y_call_t, is_first) {
    if (is_first) {
      await tachyon.say_and_wait('앗, 잠깐……');
      era.println();
      await you.say_and_wait([
        y_call_t,
        '의 호소는 듣지 않고 ',
        y_call_t,
        '의 탄력 있는 가슴을 향해 격렬하게 찌르기 시작했다.',
      ]);
      await you.print_and_wait([
        '그동안 ',
        y_call_t,
        '은 자신의 성욕을 쏟아 내는 도구가 된 듯 순순히 따른다.',
      ]);
      await you.print_and_wait([
        '담당 ',
        tachyon.uma_sex_title,
        '를 도구로 쓰는 감각에 흥분해 몸이 떨린다……',
      ]);
    } else {
      await tachyon.say_and_wait('응으……❤️');
      era.println();
      await you.print_and_wait(
        '먼저 유방 전체를 들어 올려 문질러 누르면, 말캉거리며 제자리로 돌아간다.',
      );
      await you.print_and_wait(
        '그런 다음 가차 없이, 거의 폭력에 가까운 왕복 운동을 한다……',
      );
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   * @param {boolean} is_you_erect プレイヤーが勃起しているか
   */
  async tit_job(tachyon, you, callname, y_call_t, is_you_erect) {
    if (is_you_erect) {
      await you.print_and_wait([
        y_call_t,
        '의 가슴으로 아플 만큼 단단한 육봉을 감싼다.',
      ]);
    }
    await you.print_and_wait([
      y_call_t,
      '은 양손으로 자신의 두 가슴을 받친다.',
    ]);
    await you.print_and_wait('가슴 사이가 육봉을 크게 감싸 주물러 준다.');
    await you.print_and_wait(
      '흘러넘친 쿠퍼액이 가슴 사이의 움직임을 매끄럽게 한다.',
    );
    era.println();
    await tachyon.say_and_wait([callname, '……기분 좋은가?❤️']);
    era.println();
    await you.print_and_wait('대답할 필요가 있을까?');
    await you.print_and_wait('이보다 더 기분 좋은 일이 있을까?');
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   */
  async tit_and_blow_job(tachyon, callname) {
    await tachyon.print_and_wait([
      callname,
      '이 조금 위로 내밀자, 끝만 나와 있던 육봉이 자신의 목에 닿는다.',
    ]);
    await tachyon.print_and_wait(
      '요도 끝에서 떨어지는 쿠퍼액이 육봉의 움직임을 따라 턱에서 목으로 번지고, 가슴 사이로 흘러내려 윤기를 더한다.',
    );
    await tachyon.print_and_wait(
      '육봉과 유방이 음란하게 비벼지는 소리에 가슴을 때리는 소리가 섞인다.',
    );
    await tachyon.print_and_wait('실내의 정액 냄새도 차츰 짙어진다.');
    era.println();
    await tachyon.say_and_wait('츄……츄츄……');
    era.println();
    await tachyon.print_and_wait('입이 마른다……혀가 마른다……');
    await tachyon.print_and_wait('이렇게 즙이 많은데 흘려보내면……아깝지……');
    await tachyon.print_and_wait('그러니 입을 맞추고 머금는 건 당연하다네……');
    await tachyon.print_and_wait(
      '귀두가 침으로 젖어 갈수록 유방의 움직임도 더욱 매끄러워진다……',
    );
  },
  /** @param {CharaTalk} tachyon アグネスタキオン */
  async ask_non_penetrative(tachyon) {
    await tachyon.say_and_wait('후후, 원숭이 같군……');
    await tachyon.say_and_wait(
      '아니, 이렇게 허리만 흔드는 건……강아지에 더 가깝겠네❤️',
    );
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   * @param {boolean} is_lubrication アグネスタキオンの膣が潤滑しているか
   */
  async self_finger_fuck(tachyon, you, callname, y_call_t, is_lubrication) {
    if (Math.random() < 0.5) {
      await tachyon.say_and_wait(['보게나……', callname, '……']);
      await tachyon.say_and_wait('내 구멍, 어떻게 보이나❤️');
      era.println();
      await you.print_and_wait([
        y_call_t,
        '의 능숙한 손가락이 자신의 구멍을 희롱하며 쾌감을 준다.',
      ]);
      await you.print_and_wait(
        '두 다리를 좌우로 벌리고, 유혹하듯 손가락이 구멍 속으로 더 깊이 들어간다.',
      );
      await you.print_and_wait([
        tachyon.sex,
        '의 손끝이 빛 아래 반짝이며 구멍에서 음란한 실을 늘어뜨린다.',
      ]);
      if (is_lubrication) {
        era.println();
        await tachyon.say_and_wait('이미 준비는 끝났네……들어오지 않을 건가❤️');
        era.println();
        await you.print_and_wait(
          '애액에 흠뻑 젖은 아래는 언제든 교접할 준비가 되어 있다……',
        );
      }
    } else {
      await tachyon.say_and_wait([callname, '……❤️']);
      await tachyon.say_and_wait('어서……넣어 주게❤️');
      era.println();
      await you.print_and_wait([y_call_t, '은 스스로 엉덩이를 벌렸다.']);
      await you.print_and_wait(
        '흠뻑 젖은 구멍과 살짝 벌어졌다 닫히는 뒷구멍이, 눈앞의 암컷에게서 복종에 가까운 자세로 내밀어진다.',
      );
      if (is_lubrication) {
        era.println();
        await you.print_and_wait('구퍽……');
        await you.print_and_wait(
          '구멍이 젖은 소리를 내며 두 손가락에 몇 번이고 벌어졌다 닫힌다.',
        );
        await you.print_and_wait(
          '음란한 즙이 벌어진 구멍의 살에서 천천히 흘러나온다……',
        );
      }
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   * @param {boolean} is_first 連続行動の初回か
   */
  async missionary(tachyon, you, callname, y_call_t, is_first) {
    if (is_first) {
      await tachyon.say_and_wait(['와앗, ', callname, ', 잠깐……❤️']);
      era.println();
      await you.print_and_wait([
        '참지 못하고 ',
        y_call_t,
        '을 바닥에 밀어 눕힌다.',
      ]);
      await you.print_and_wait([
        tachyon.sex,
        '의 엉덩이와 허벅지가 삽입과 함께 계속 경련한다……',
      ]);
    } else {
      await you.print_and_wait(
        '들어가기 전부터 과민해져 있던 구멍은 침입당한 뒤 작은 절정을 몇 번이고 되풀이한다.',
      );
      await you.print_and_wait([
        '찌를 때마다 ',
        y_call_t,
        '은 통제하지 못하고 떨면서도 육봉을 놓지 않고 계속 조인다……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   * @param {boolean} is_first 連続行動の初回か
   */
  async doggy_style(tachyon, you, callname, y_call_t, is_first) {
    if (is_first) {
      await tachyon.say_and_wait(
        '이 자세라면 수컷을 가장 온전히 받아들일 수 있다네.',
      );
      await tachyon.say_and_wait('인체공학적 관점에서 말하자면……읏!');
      era.println();
      await you.print_and_wait([
        y_call_t,
        '이 계속 떠드는 틈을 타, 때를 노려 ',
        tachyon.sex,
        '의 드러난 밀혈에 삽입한다.',
      ]);
      era.println();
      await you.say_and_wait('그래서, 다음은?');
      await you.print_and_wait(['일부러 ', y_call_t, '에게 묻는다.']);
      await you.print_and_wait([
        y_call_t,
        '은 얼굴을 붉히며 빈틈없이 채워진 기쁨에 빠져 있다.',
      ]);
    } else {
      await tachyon.say_and_wait('깊군❤️ 한 번에 가득……❤️');
      era.println();
      await tachyon.print_and_wait(
        '육봉이 구멍 입구에 깊이 파묻히며, 진작 방어를 잃은 자신의 밀혈을 꿰뚫는다.',
      );
      await tachyon.print_and_wait(
        '좁은 암컷의 구멍이 기쁘게 수축하며 육봉에 달라붙는다……',
      );
    }
  },
  /** @param {CharaTalk} tachyon アグネスタキオン */
  async hug_standing(tachyon) {
    await tachyon.say_and_wait('좋아하네❤️');
    await tachyon.say_and_wait('실험동물처럼, 그저 교미하는 쾌락❤️');
    await tachyon.say_and_wait(
      '어서, 어서, 짐승처럼 내 성욕을 처리하는 음란한 구멍을 채워 주게❤️',
    );
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   */
  async stimulate_g_spot(tachyon, callname) {
    await tachyon.say_and_wait('앗❤️');
    await tachyon.say_and_wait(
      '안 되네❤️머리가 망가지겠어❤️기분 좋네❤️가겠어❤️간다네❤️뇌까지 쏟아 버리겠어❤️',
    );
    era.println();
    await tachyon.print_and_wait(
      '깊이 찔려 G스폿에 닿을 때마다 머리가 새하얘진다.',
    );
    await tachyon.print_and_wait([
      '생각할 수 있는 것도, 느낄 수 있는 것도 ',
      callname,
      '과 교미하는 것과 ',
      callname,
      '에게 거세게 범해지는 쾌감뿐……',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   */
  async ask_stimulate_glans_by_virgin(tachyon, you) {
    await tachyon.say_and_wait('너무하군……');
    era.println();
    await you.print_and_wait(
      '너무하다고 외치면서도 솔직한 밀혈은 쪽 하고 한층 더 조여들며, 비협조적으로 버티는 육봉에게 모든 방향에서 봉사하려 든다……',
    );
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   * @param {boolean} is_first 連続行動の初回か
   */
  async hit_anal(tachyon, you, callname, y_call_t, is_first) {
    if (is_first) {
      if (era.get('mark:32:同心') > era.get('mark:32:反抗')) {
        await you.print_and_wait([
          y_call_t,
          '의 엉덩이를 세게 때리자, 듣기 좋은 울림이 퍼진다.',
        ]);
        await you.print_and_wait('하얀 두 엉덩이에 옅은 손바닥 자국이 남는다.');
        era.println();
        await tachyon.say_and_wait(['아얏!?……', callname, '……？']);
        era.println();
        await you.print_and_wait([
          y_call_t,
          '은 가엾게 흐느꼈지만, 그래도 엉덩이를 높이 들고 반항할 기색을 보이지 않는다.',
        ]);
      } else if (era.get('talent:32:喜欢痛苦') > 0) {
        await you.print_and_wait('정말 음란하군……');
        await you.print_and_wait([
          y_call_t,
          '의 엉덩이를 세게 때리자, 듣기 좋은 울림이 퍼진다.',
        ]);
        await you.print_and_wait('한쪽 엉덩이에 옅은 손바닥 자국이 남는다.');
        era.println();
        await tachyon.say_and_wait('세게……더 세게 해 주게……❤️');
        era.println();
        await you.print_and_wait([y_call_t, '이 음란한 신음을 낸다.']);
        await you.print_and_wait(
          '붉어진 엉덩이가 살짝 비틀리며 좌우로 흔들려, 더 짓밟히기를 기다린다.',
        );
        await you.print_and_wait('참지 못하고 손으로 주무른 뒤——');
        era.println();
        await you.print_and_wait('짝!');
        era.println();
        await tachyon.say_and_wait('아앗~~❤️');
        era.println();
        await you.print_and_wait(
          '촉촉한 엉덩이에 물결이 일고, 신음이 이어진다.',
        );
        await you.print_and_wait(
          '이제 양쪽 엉덩이 모두 잘 익은 복숭아처럼 촉촉하다.',
        );
      } else {
        await you.print_and_wait([
          y_call_t,
          '의 엉덩이를 세게 때리자, 듣기 좋은 울림이 퍼진다.',
        ]);
        await you.print_and_wait('하얀 두 엉덩이에 옅은 손바닥 자국이 남는다.');
        era.println();
        await tachyon.say_and_wait(['아얏!?……', callname, '……？']);
        era.println();
        await you.print_and_wait([
          y_call_t,
          '은 저도 모르게 아파서 소리를 질렀다.',
        ]);
        await you.print_and_wait(
          '조금 가엾기는 하지만, 저렇게 내민 엉덩이를……때리지 않고 내버려 두는 편이 오히려 아깝지 않겠는가?',
        );
      }
    } else {
      await you.print_and_wait(
        '타키온의 눈처럼 하얗고 탄력 있는 엉덩이를 계속 때리자, 듣기 좋은 울림이 퍼진다.',
      );
      await you.print_and_wait('지금은 새빨간 손바닥 자국투성이다.');
      await you.print_and_wait([
        '때릴 때마다 ',
        y_call_t,
        '의 다리 사이 틈에서 애액이 뿜어져 나와, 어느새 자신의 두 손까지 적시고 있다……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   */
  async hit_face(tachyon, you, callname, y_call_t) {
    await you.print_and_wait([y_call_t, '의 뺨을 한 차례 때린다.']);
    if (era.get('mark:32:同心') > era.get('mark:32:反抗')) {
      await you.print_and_wait([
        y_call_t,
        '의 뺨이 붉어지고, 복종하는 눈빛으로 아래에서 이쪽을 올려다본다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '……아니, 주인님이 더 때리고 싶다면……',
      ]);
      era.println();
      await you.print_and_wait([
        y_call_t,
        '은 양손으로 ',
        you.get_colored_name(),
        '의 손을 감싸 ',
        tachyon.sex,
        '의 반대쪽 뺨에 댄다……',
      ]);
    } else if (era.get('talent:32:喜欢痛苦') > 0) {
      await you.print_and_wait([
        y_call_t,
        '의 뺨이 붉어지고, 양손으로 ',
        you.get_colored_name(),
        '의 손을 감싼 채 손가락을 살짝 핥아 복종을 바친다.',
      ]);
      era.println();
      await tachyon.say_and_wait('주인님……이 암퇘지에게 상을 더……❤️');
      era.println();
      await you.print_and_wait([
        '다시 ',
        tachyon.sex,
        '의 뺨을 한 차례 때린다.',
      ]);
      await you.print_and_wait([
        '분홍빛 손바닥 자국이 순식간에 ',
        tachyon.sex,
        '의 얼굴에 피어난다.',
      ]);
    } else {
      await you.print_and_wait('믿을 수 없다는 눈으로 바라본다.');
      era.println();
      await tachyon.say_and_wait([callname, '……어째서……']);
      era.println();
      await you.print_and_wait([
        '붉어지기 시작한 뺨을 감싸는 ',
        y_call_t,
        '。',
      ]);
      await you.print_and_wait([
        '미안하지만……',
        tachyon.sex,
        '의 이토록 사랑스러운 표정을 보면 흥분하지 않을 수 없다……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   */
  async use_love_eggs_in_anal(tachyon, you, y_call_t) {
    await tachyon.say_and_wait('오옷❤️뒷구멍이❤️안 되네❤️');
    era.println();
    await you.print_and_wait([
      '진동기를 넣는 순간, 장 안의 진동에 ',
      y_call_t,
      '은 저도 모르게 고개를 젖혔다.',
    ]);
    era.println();
    await tachyon.say_and_wait('안 되네❤️몸이❤️이상해지겠어❤️');
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
   */
  async ask_fuck(tachyon, you, callname, y_call_t) {
    await tachyon.say_and_wait([callname, '……어서, 어서❤️']);
    await tachyon.say_and_wait('세게……내 구멍을 채워 주게❤️');
    era.println();
    await you.print_and_wait([
      y_call_t,
      '은 엉덩이를 들고 계속 허리를 흔든다.',
    ]);
    await you.print_and_wait(
      '풍만한 엉덩이가 음란하게 춤추며 정욕을 부추긴다……',
    );
  },
  betrayed1: (() => {
    /**
     * 仕組み上はマンハッタンカフェの調教終了イベント
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} callname_25 マンハッタンカフェがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, coffee, you, callname, callname_25) => {
      await tachyon.say_and_wait(['하앗……하앗……']);
      era.println();

      await tachyon.print_and_wait(['손발이 뜨겁다.']);
      await tachyon.print_and_wait(['머리가 뜨겁다.']);
      era.println();

      await tachyon.say_and_wait(['스으……하앗……하앗……']);
      era.println();

      await tachyon.print_and_wait(['가슴이 뜨겁다.']);
      await tachyon.print_and_wait(['은밀한 곳이 타오른다.']);
      era.println();

      await tachyon.say_and_wait([callname, '……', callname, '……']);
      era.println();

      await tachyon.print_and_wait(['목이 뜨겁다.']);
      await tachyon.print_and_wait(['혀끝이 뜨겁다.']);
      await tachyon.print_and_wait(['그래서 참지 못하고 부르고 만다.']);
      await tachyon.print_and_wait(['자신을, 온몸을 뜨겁게 만드는 근원을.']);
      era.println();

      await tachyon.say_and_wait([callname, '……주게……부탁이야……']);
      era.println();

      await tachyon.print_and_wait([
        '몽롱한 의식 속에서 ',
        you.sex,
        '의 모습이 눈앞에 나타난다.',
      ]);
      await tachyon.print_and_wait([
        you.sex,
        '의 손, ',
        you.sex,
        '의 눈, ',
        you.sex,
        '의 입, ',
        you.sex,
        '의 피부.',
      ]);
      await tachyon.print_and_wait([you.sex, '의 모든 것이 자신을 매혹한다.']);
      await tachyon.print_and_wait([
        '그러니 ',
        you.sex,
        '를 원한다. ',
        you.sex,
        '를 원한다.',
      ]);
      await tachyon.print_and_wait([
        you.sex,
        '에게 농락당하고 싶다. ',
        you.sex,
        '에게 망가지고 싶다.',
      ]);
      await tachyon.print_and_wait(['어차피……이제 달릴 수 없는 몸이니.']);
      await tachyon.print_and_wait([
        '모두 버리고 색욕에 빠진들 무슨 문제가 있겠나.',
      ]);
      era.println();

      await tachyon.say_and_wait([
        callname,
        '……쓰다듬어 줘……안아 줘……입 맞춰 줘……사랑해 줘……',
      ]);
      era.println();

      await tachyon.print_and_wait(['아아, 거침없이 파고드는 애무.']);
      await tachyon.print_and_wait([
        '하지만 실제로 움직이는 것은 자신의 가늘고 힘없는 손가락이다.',
      ]);
      await tachyon.print_and_wait([
        '지금 자신을 쓰다듬는 것이 ',
        you.sex,
        '의 손가락이라면.',
      ]);
      await tachyon.print_and_wait([
        '만약 ',
        you.sex,
        '의 혀가 자신을 핥아 준다면.',
      ]);
      await tachyon.print_and_wait([
        '만약 ',
        you.sex,
        '의 입맞춤으로 위로받을 수 있다면.',
      ]);
      await tachyon.print_and_wait([
        '만약 안팎으로 ',
        you.sex,
        '에게 채워지고, ',
        you.sex,
        '에게 사랑받을 수 있다면.',
      ]);
      era.println();

      await tachyon.print_and_wait([
        '환각 속의 ',
        you.sex,
        '가 몸을 가까이 댄다.',
      ]);
      era.println();

      await tachyon.print_and_wait(['그래.']);
      await tachyon.print_and_wait(['주게. 어서 주게.']);
      await tachyon.print_and_wait(['이제 달릴 가치도 없는 나.']);
      await tachyon.print_and_wait(['남은 것은 여자로서의 가치뿐이겠지.']);
      await tachyon.print_and_wait(['나를 채워 줘.']);
      await tachyon.print_and_wait(['내 안에 쏟아 줘.']);
      await tachyon.print_and_wait([
        '텅 빈 마음을 자네의 사랑으로 넘칠 때까지 채워 줘.',
      ]);
      await tachyon.print_and_wait(['나를 자네만의 여자로 만들어 줘.']);
      await tachyon.print_and_wait(['그리고 자네도, 나만의……']);
      era.println();

      await coffee.say_and_wait(['응……앗……', callname_25, '……부탁이야……']);
      era.println();

      await tachyon.print_and_wait([
        '마음속 망상이 옆 실험실의 신음에 끊긴다.',
      ]);

      era.drawLine();

      await tachyon.print_and_wait(['눈앞의 환상이 모습을 바꾼다.']);
      await tachyon.print_and_wait([
        you.sex,
        '의 아래에 있던 사람이 한순간에 바뀐다.',
      ]);
      await tachyon.print_and_wait([
        '검은 머리와 금빛 눈동자. 변하지 않는 것은 눈에 가득한 애정뿐.',
      ]);
      era.println();

      await coffee.say_and_wait([callname_25, '……저를……채워 주세요.']);
      era.println();

      await tachyon.print_and_wait([
        '착각처럼, 환상 속의 ',
        you.sex,
        '는 조금 전 자신을 상대할 때보다 흥분해 있다.',
      ]);
      await tachyon.print_and_wait([
        '부정하고 싶지만 이것은 옆방에서 벌어지고 있는 현실이다.',
      ]);
      await tachyon.print_and_wait([
        '……가엾은 ',
        tachyon.uma_sex_title,
        '이 머릿속에서 자신을 대입하기 위한 현실.',
      ]);
      era.println();

      await tachyon.say_and_wait([
        '안 돼……',
        callname,
        '……부탁이야……나를 봐 줘……안아 줘……사랑해 줘……',
      ]);
      era.println();

      await tachyon.print_and_wait([
        '무의식적으로 새어 나온 애원마저 목소리를 낮추고 만다.',
      ]);
      await tachyon.print_and_wait([
        '옆방의 다정한 두 사람에게 들키고 싶지 않다.',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '이 얼마나 가엾은 ',
        tachyon.uma_sex_title,
        '인지 알려 주고 싶지 않다.',
      ]);
      era.println();

      await tachyon.print_and_wait([you.couple_title, '야말로 잘 어울린다.']);
      await tachyon.print_and_wait([
        you.couple_title,
        '야말로 가장 어울리는 상대다.',
      ]);
      await tachyon.print_and_wait([
        '다정한 트레이너와, 그 사람과 사랑을 키우고 꿈을 이루는 ',
        tachyon.uma_sex_title,
        '。',
      ]);
      await tachyon.print_and_wait([
        '그에 비하면 자신의 존재는 제삼자에 가깝다.',
      ]);
      era.println();

      await tachyon.print_and_wait([
        '환각 속의 두 사람은 무척 기분 좋아 보인다.',
      ]);
      await tachyon.print_and_wait([
        '자신도……',
        you.couple_title,
        '처럼 기분 좋아지고 싶다.',
      ]);
      era.println();

      await tachyon.print_and_wait(['무의식적으로 손이 아래로 향한다.']);
      await tachyon.print_and_wait(['안 돼……']);
      await tachyon.print_and_wait(['그러면 안 돼……']);
      await tachyon.print_and_wait([
        '지금 그곳을 만지면 더는 돌아갈 수 없으리라는 예감이 든다.',
      ]);
      await tachyon.print_and_wait([
        '사랑하는 사람과 그 ',
        you.sex,
        '의 여자가 나누는 다정함을 망상의 재료로 삼는다면.',
      ]);
      await tachyon.print_and_wait(['더는 돌아갈 수 없어……']);
      await tachyon.print_and_wait(['그러니……']);
      await tachyon.print_and_wait(['그러니 그만둬……']);
      era.println();

      await coffee.say_and_wait([callname_25, '……세게……더 세게……사랑해 줘.']);
      era.println();

      await tachyon.print_and_wait(['아아……']);
      await tachyon.print_and_wait(['이제 안 돼.']);
      await tachyon.print_and_wait(['옆방의 신음이 벽을 타고 귀에 닿은 순간.']);
      await tachyon.print_and_wait(['아래에서도 탁한 액체가 뿜어져 나왔다.']);
      await tachyon.print_and_wait(['만지지도 않았는데……']);
      await tachyon.print_and_wait(['참을 수만 있었다면……']);
      era.println();

      await tachyon.print_and_wait(['더는 돌아갈 수 없다.']);
      await tachyon.print_and_wait([
        '조금 전 참았던 몫을 한꺼번에 되찾으려는 듯.',
      ]);
      await tachyon.print_and_wait(['가차 없이, 짓밟는다고 해도 좋을 힘으로.']);
      await tachyon.print_and_wait(['긁고, 파고, 주무르고, 넣는다.']);
      await tachyon.print_and_wait([
        '온갖 방법으로 자극과 고통과 쾌감을 준다.',
      ]);
      await tachyon.print_and_wait(['자신을 정욕에 빠뜨린다.']);
      await tachyon.print_and_wait(['욕정의 불길이 몸을 감싸게 한다.']);
      era.println();

      await tachyon.say_and_wait(['기분 좋아……기분 좋네……']);
      era.println();

      await tachyon.print_and_wait([
        '머릿속의 ',
        you.couple_title,
        '는 여전히 다정하다.',
      ]);
      await tachyon.print_and_wait([
        '머릿속의 자신은 ',
        you.couple_title,
        '의 다정한 모습을 보며 킥킥 웃고 손가락을 깨물고 있다.',
      ]);
      await tachyon.print_and_wait(['아래에서 다시 물이 뿜어져 나왔다.']);
    };
    f.title = 'Aromatic Hydrocarbon Addiction(방향족 탄화수소 의존)';
    return f;
  })(),
  betrayed2: (() => {
    /**
     * 仕組み上はマンハッタンカフェの調教終了イベント
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {PrintedSpan} callname_25 マンハッタンカフェがプレイヤーを呼ぶ名
     * @param {PrintedSpan} c_call_t マンハッタンカフェがアグネスタキオンを呼ぶ名
     * @param {string} y_call_t プレイヤーがアグネスタキオンを呼ぶ名
     * @param {PrintedSpan} item 「嫁衣」アイテム
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      t_call_c,
      callname_25,
      c_call_t,
      y_call_t,
      item,
    ) => {
      const ret = [];
      await tachyon.print_and_wait(['기분 좋다. 만끽하고 있다.']);
      await tachyon.print_and_wait([
        '오늘의 나도 또 ',
        callname,
        '와 ',
        t_call_c,
        '의 사랑 속삭임을 안주로 삼고 있다.',
      ]);
      await tachyon.print_and_wait([
        '이렇게 정욕에 빠져드는 것도 나쁜 일만은 아닐지 모른다……',
      ]);
      era.println();

      await tachyon.print_and_wait(['갑자기 사랑 속삭임이 멈췄다.']);
      await tachyon.print_and_wait(['절정 직전에 멈춰진 듯 초조해진다.']);
      await tachyon.print_and_wait(['왜 계속하지 않는 거지.']);
      await tachyon.print_and_wait(['왜 멈춘 거지.']);
      await tachyon.print_and_wait([
        '사랑 속삭임이 끊긴 순간 방은 고요해진다.',
      ]);
      era.println();

      await tachyon.print_and_wait(['또각.']);
      await tachyon.print_and_wait(['또각.']);
      await tachyon.print_and_wait(['또각.']);
      await tachyon.print_and_wait([
        '그래서……문밖의 발소리가 유난히 또렷하게 들린다.',
      ]);
      await tachyon.print_and_wait(['발소리가 문 앞에서 멈췄다.']);
      await tachyon.print_and_wait(['밖에 있는 사람은 무엇을 하려는 걸까.']);
      await tachyon.print_and_wait(['열 건가?']);
      await tachyon.print_and_wait([
        '문이 열리면 자신의 이런 모습, 이 비천한 모습이.',
      ]);
      await tachyon.print_and_wait(['보이고 말아……들키고 말아.']);
      await tachyon.print_and_wait([
        '숨어야 한다. 이런 모습을 보일 수는 없다. 어딘가에 숨어야 한다.',
      ]);
      await tachyon.print_and_wait([
        '그런데……어째서 손은 또 제멋대로 움직이는 거지……',
      ]);
      era.println();

      await tachyon.print_and_wait(['드르륵.']);
      await tachyon.print_and_wait(['아아……열렸다.']);
      await tachyon.print_and_wait([
        '문밖에 나타난 검은 머리, 금빛 눈동자의 그림자를 본 순간.',
      ]);
      await tachyon.print_and_wait([
        '쾌감이 극에 달해, 지금껏 가장 흥분되는 절정을 맞았다.',
      ]);
      era.println();

      await coffee.say_and_wait(['……가엾네요, ', c_call_t, '。']);
      await tachyon.say_and_wait([t_call_c, ', 어째서……']);
      await coffee.say_and_wait([
        '그렇게 큰 소리를 냈으니……',
        tachyon.uma_sex_title,
        '가 아닌 ',
        callname_25,
        '만 눈치채지 못했겠죠.',
      ]);
      era.println();

      await tachyon.print_and_wait(['예상이 빗나갔다.']);
      await tachyon.print_and_wait(['들켰다.']);
      await tachyon.print_and_wait(['어쩌지. 어떻게 해야 하지.']);
      await tachyon.print_and_wait([
        '가엾게도 지금 자신에게 가장 중요한 것은——',
      ]);
      await tachyon.print_and_wait([
        '어떻게 ',
        t_call_c,
        '에게 부탁해야 ',
        you.couple_title,
        '의 교접하는 소리를 들으며 자신을 위로하는 일을 허락받을 수 있을까, 그것뿐이다.',
      ]);
      era.println();

      await tachyon.say_and_wait([callname, '、', you.sex, '는……']);
      await coffee.say_and_wait([
        '걱정하지 마세요……',
        callname_25,
        '에게는 물건을 가지러 나온다고 해 뒀어요.',
      ]);
      await coffee.say_and_wait([c_call_t, '……허리의 약통……하나 주시겠어요?']);
      await coffee.say_and_wait(['어떤 종류를 원하는지는……아시겠죠.']);
      era.println();

      await tachyon.print_and_wait(['멍하니 상대를 바라본다.']);
      await tachyon.print_and_wait([
        '자신의 허리에 있는……',
        t_call_c,
        '가 원하는 것은……',
      ]);
      await tachyon.print_and_wait(['자신이 조제한 배란 촉진제?']);
      await tachyon.print_and_wait([
        '참지 못하고 허리에서 꺼낸다……본래 자신과 ',
        callname,
        '만을 위해 조제한 약을.',
      ]);
      era.println();

      await coffee.say_and_wait([c_call_t, ', 주세요. 받을 수 있을까요?']);
      era.println();

      await tachyon.print_and_wait([
        '그녀는 자신이 무슨 말을 하는지 알고 있는 걸까.',
      ]);
      await tachyon.print_and_wait([
        '임신을 거의 확실하게 촉진하는 약을, 자신의 손으로.',
      ]);
      await tachyon.print_and_wait(['스스로 바치고, 직접 건네 달라는 것이다.']);
      await tachyon.print_and_wait([
        '그녀가 사랑하는 사람과 몸을 섞고, 본래 자신의 아이였어야 할 생명을 품도록.',
      ]);
      await tachyon.print_and_wait([
        '자신을 발밑에 짓밟는 극한의 모욕이라고 해도 좋다.',
      ]);
      await tachyon.print_and_wait(['그런데 어째서……손은 뻗어지는 걸까.']);
      await tachyon.print_and_wait(['어째서 몸은 이렇게 타오르는 걸까.']);
      era.println();

      await coffee.say_and_wait([
        c_call_t,
        '……그렇게 멀리 있으면 받을 수 없어요.',
      ]);
      await coffee.say_and_wait(['이쪽으로 와서 건네주세요.']);
      era.println();

      await tachyon.print_and_wait(['싫어.']);
      await tachyon.print_and_wait(['말을 듣지 마.']);
      await tachyon.print_and_wait(['약을 내던져.']);
      await tachyon.print_and_wait(['자신이 마셔도 된다.']);
      await tachyon.print_and_wait([
        '어차피 ',
        callname,
        '는 옆에 있다……마신 뒤에 자신의 것을 되찾으면 돼.',
      ]);
      await tachyon.print_and_wait(['그래, 그럴 것이다.']);
      await tachyon.print_and_wait([
        '지금 문으로 향하는 것은 약을 건네기 위해서가 아니다. 자신을 위해……',
      ]);
      await tachyon.print_and_wait(['어……손이, 어째서……']);
      era.println();

      await coffee.say_and_wait(['……그렇게까지 할 줄은 몰랐어요.']);
      await coffee.say_and_wait(['정말 기분 나쁘네요.']);
      await coffee.say_and_wait(['하지만 저도 잔인한 사람은 아니에요……']);
      await coffee.say_and_wait(['듣기만 하느라 괴로웠죠?']);
      era.println();

      await tachyon.print_and_wait([
        '약을 건넨 순간, 영혼까지 함께 넘겨 버린 듯했다.',
      ]);
      await tachyon.print_and_wait([
        '넋이 나간 채 눈앞의 그림자를 따라, 원래는 절반이 자신의 것이었어야 할 실험실로 들어간다.',
      ]);
      await tachyon.print_and_wait([
        '하지만……이런 짓을 하고도 ',
        callname,
        '를 본 순간 의식은 제멋대로 돌아오고 만다.',
      ]);
      era.println();

      await tachyon.say_and_wait([t_call_c, '……']);
      await coffee.say_and_wait([
        '안심하세요……친구가 ',
        callname_25,
        '의 눈과 귀를 막아 주고 있어요……지금 ',
        you.sex,
        '에게는 우리가 보이지도, 들리지도 않아요.',
      ]);
      await tachyon.say_and_wait(['그건……']);
      await coffee.say_and_wait([
        '선택은 ',
        c_call_t,
        '에게 맡길게요……함께할지, 혼자 지켜볼지.',
      ]);
      await tachyon.say_and_wait(['……']);
      era.println();

      await tachyon.print_and_wait(['마지막 기회.']);
      await tachyon.print_and_wait([
        '마지막……지금 여기서 받아들이면 아직 둘이 함께할 수 있다.',
      ]);
      await tachyon.print_and_wait(['대답하지 않으면 두 번째는 없다.']);
      await tachyon.print_and_wait(['그런 예감이 든다.']);
      era.println();

      await tachyon.print_and_wait(['그러니……']);
      era.printButton('입을 열어 받아들인다', 1, { color: tachyon.color });
      era.printButton('계속 침묵한다', 2, { color: tachyon.color });
      ret.push(await era.input());
      if (ret[0] === 1) {
        await tachyon.print_and_wait([
          '자신보다 잘 어울리는 건 ',
          t_call_c,
          '일 텐데.',
        ]);
        await tachyon.print_and_wait([
          you.sex,
          '에게 어울리는 상대도 ',
          t_call_c,
          '일 텐데.',
        ]);
        await tachyon.print_and_wait([
          you.sex,
          '를 위해서라면, 자신이 놓아줘야……하는 걸까?',
        ]);
        era.println();

        await tachyon.print_and_wait(['이해할 수 없다. 모르겠다.']);
        await tachyon.print_and_wait([
          '누군가를 좋아한다는 건 이렇게나 어려운 일이었나.',
        ]);
        await tachyon.print_and_wait([
          '이성적으로 생각한다면, 여기서 진심으로 ',
          you.couple_title,
          '를 축복해야 한다.',
        ]);
        await tachyon.print_and_wait(['그런데도, 그런데도……']);
        era.println();

        await tachyon.print_and_wait(['어느새.']);
        await tachyon.print_and_wait([
          '시선은 다시 침대 위의 ',
          you.sex,
          '에게 향해 있다.',
        ]);
        await tachyon.print_and_wait([
          '……언제나 제멋대로인 자신을 받아 주었던 ',
          you.sex,
          '。',
        ]);
        await tachyon.print_and_wait([
          '이번만은……다시 한번 내 어리광을 용서해 줘.',
        ]);
        era.println();

        await tachyon.print_and_wait([t_call_c, '에게 손을 뻗은 순간.']);
        await tachyon.print_and_wait([
          '침대 위의 ',
          you.sex,
          '이 문득 놀란 표정을 지은 순간.',
        ]);
        await tachyon.print_and_wait([
          '마음속 감정을 억누르지 못하고, 침대 위의 연인에게 달려든다.',
        ]);

        era.printButton(`「우와, ${y_call_t}, 언제부터 있었어!?」`, 1);
        await era.input();

        await tachyon.print_and_wait([
          you.sex,
          '의 얼굴에는 놀라움과 당혹감, 약간의 죄책감도 떠올라 있다.',
        ]);
        await tachyon.print_and_wait([
          '하지만 가장 중요한 것은……',
          you.sex,
          '의 몸.',
        ]);
        await tachyon.print_and_wait(['따뜻하다. 마음이 놓인다.']);
        await tachyon.print_and_wait([
          '이제야 길고 긴 악몽에서 깨어난 기분이 든다.',
        ]);
        await tachyon.print_and_wait([
          '조금 전의 자신은 무슨 생각을 했던 걸까.',
        ]);
        await tachyon.print_and_wait([
          '어째서 이 온기를 스스로 버리고, 다른 사람이 누리는 모습을 지켜보고 싶다는 생각을 했던 걸까.',
        ]);
        era.println();

        await tachyon.print_and_wait([
          '뒤늦은 두려움이 이제야 ',
          tachyon.get_colored_name(),
          '의 마음을 따라잡는다.',
        ]);
        await tachyon.print_and_wait([
          '아무 말도 하지 않고, 정말로 ',
          callname,
          '를 놓아주었다면……',
        ]);
        era.println();

        await tachyon.say_and_wait([callname, '……미안하네……미안해!']);
        await tachyon.say_and_wait(['싫어……이제 누구에게도 넘겨주지 않겠네!']);
        await tachyon.say_and_wait([
          '싫어……싫단 말이야! 나의 ',
          callname,
          '……평생 내 거라네……!',
        ]);
        era.println();

        await tachyon.print_and_wait(['어린아이처럼 큰 소리로 운다.']);
        await tachyon.print_and_wait(['부끄럽다. 하지만……']);
        await tachyon.print_and_wait([
          '당황하면서도 다정하게 달래 주는 ',
          you.sex,
          '에게 안겨 있는 건 정말……기분이 좋다.',
        ]);

        era.drawLine();

        await era.printAndWait([
          '여전히 자신에게 매달려 울고 있는 ',
          tachyon.get_colored_name(),
          '을 당황한 채 바라본다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '는 조금 혼란스러웠다.',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '이 어떻게 실험실에 나타났는지, 지금 왜 이토록 서럽게 우는지, 모든 것이 ',
          you.get_colored_name(),
          '에게는 영문 모를 일뿐이었다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '는 사정을 알 듯한 유일한 상대인 ',
          coffee.get_colored_name(),
          '를 바라본다. 하지만……',
        ]);
        era.println();

        await coffee.say_and_wait([
          '오늘은……양보할게요……',
          callname_25,
          ', 그녀가 만족할 때까지 잘 위로해 주세요.',
        ]);
        await coffee.say_and_wait([
          '대신……오늘 아주 쓸모 있는 약을 받았으니……',
          callname_25,
          ', 내일은 저에게도 그만큼 사랑을 주세요.',
        ]);
        await era.printAndWait([
          '말을 마치자 ',
          coffee.get_colored_name(),
          '는 문을 밀고 나갔다.',
        ]);
        await era.printAndWait(['……그래서 대체 무슨 일이 있었던 거지.']);
        era.println();

        await tachyon.say_and_wait([callname, '……', callname, '……']);
        era.println();

        await era.printAndWait([
          '정신을 차려 보니 조금 전까지 울던 ',
          tachyon.get_colored_name(),
          '이 더욱 세게 ',
          you.get_colored_name(),
          '를 끌어안고 있었다.',
        ]);
        era.println();

        await tachyon.say_and_wait([
          '미안하네……하지만……더 깊이……사랑해 주겠나……',
        ]);
        await tachyon.say_and_wait([
          '지금의 나에게는……더 따뜻하고 뜨거운 것이 필요하다네. 몸을 안팎으로 데워 줄 것이.',
        ]);
        await tachyon.say_and_wait([
          callname,
          '……부탁이야……주게, 줄 수 있겠나.',
        ]);
        era.println();

        await era.printAndWait([
          '애원과 두려움과 정욕이 뒤섞인 눈을 바라본다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '는 몸을 뒤집어 그녀를 아래에 눌렀다.',
        ]);
        era.drawLine();
        await era.printAndWait(['아이템 ', item, '을 얻었다……']);
      } else {
        await coffee.say_and_wait(['……그게 당신의 선택이라면.']);
        await coffee.say_and_wait([
          '저는 상관없어요……어차피 ',
          callname_25,
          '를 남에게 넘기고 싶지는 않으니까요.',
        ]);
        await coffee.say_and_wait(['다만……정말 가엾네요.']);
        era.println();

        await tachyon.print_and_wait(['더는 돌아갈 수 없다.']);
        await tachyon.print_and_wait(['이제 두 번 다시 돌아갈 수 없다.']);
        await tachyon.print_and_wait(['모두 끝났다……그런데 어째서.']);
        await tachyon.print_and_wait(['지금의 기분은 뜻밖에도……가볍다.']);
        await tachyon.print_and_wait(['분명 자신은 가엾은 여자다.']);
        await tachyon.print_and_wait([
          '사랑하는 사람이 그 ',
          you.sex,
          '의 여자와 몸을 얽는 모습을 보면서.',
        ]);
        await tachyon.print_and_wait(['자신은……웃고 있으니까.']);
        era.println();

        await coffee.say_and_wait([
          '죄송해요……',
          callname_25,
          ', 오래 기다리셨죠.',
        ]);
        await coffee.say_and_wait([
          '네? 아니에요……그저 전에 ',
          c_call_t,
          '에게 부탁한 약을 깜빡해서……',
        ]);
        await coffee.say_and_wait([
          '……',
          c_call_t,
          '이야기를 했다고 그런 표정을 지으시나요? 미안해요. 하지만……그렇게 말씀하시면서도 아래는 이렇게 단단해져 있네요.',
        ]);
        await coffee.say_and_wait([
          '질척……츄르……푸핫……',
          callname_25,
          '……입안에……싸 주세요. 약과 함께……마침 좋네요.',
        ]);
        await coffee.say_and_wait([
          '무슨 약이냐고요?……우리의 사랑을 결정으로 만드는 약이에요. 안심하세요……',
          c_call_t,
          '은 이미 동의했어요.',
        ]);
        era.println();

        await tachyon.print_and_wait([
          '거기까지 말하고 ',
          t_call_c,
          '는 침대 옆에 쪼그려 앉은 자신을 힐끗 보았다.',
        ]);
        await tachyon.print_and_wait(['지금 자신의 얼굴은 어떤 표정일까?']);
        await tachyon.print_and_wait(['슬픔? 고통? 증오? 허무?']);
        await tachyon.print_and_wait(['아아……']);
        await tachyon.print_and_wait([
          t_call_c,
          '의 경멸 어린 눈을 보면 알 수 있다.',
        ]);
        await tachyon.print_and_wait(['어느 것에도 해당하지 않는 것이겠지.']);
        era.println();

        await coffee.say_and_wait([callname_25, '……', callname_25, '……']);
        era.println();

        await tachyon.print_and_wait([
          t_call_c,
          '가 ',
          you.sex,
          '의 몸에 올라탄다.',
        ]);
        await tachyon.print_and_wait([
          '그러고는 가장 밑바닥의 창녀조차 부끄러워할 신음을 낸다.',
        ]);
        await tachyon.print_and_wait(['……아니, 그것은 자신의 편견이다.']);
        await tachyon.print_and_wait([
          '실제로는 행복과 기쁨이 가득한 신음이겠지.',
        ]);
        await tachyon.print_and_wait(['하지만 상관없다.']);
        await tachyon.print_and_wait([
          '오히려 전자라고 믿는 편이 자신은 흥분된다.',
        ]);
        await tachyon.print_and_wait(['자신의 연인.']);
        await tachyon.print_and_wait(['자신의 ', callname, '。']);
        await tachyon.print_and_wait([
          '창녀보다 못한 존재에게 굴복해, 그 아래 깔린 모습.',
        ]);
        era.println();

        await coffee.say_and_wait([
          '저기……',
          callname_25,
          '……아니, 트레이너 군……',
        ]);
        era.println();

        await tachyon.print_and_wait([
          '문득 ',
          t_call_c,
          '의 목소리가 몹시 요염해진다.',
        ]);
        await tachyon.print_and_wait([
          '말투도 바뀌어, 낯설면서도 익숙한 어조가 된다.',
        ]);
        era.println();

        await coffee.say_and_wait([
          '어라, ',
          callname_25,
          '……왜 갑자기 이렇게 거세지셨나요?',
        ]);
        await coffee.say_and_wait(['설마……저를 통해 누군가를 보고 계신가요?']);
        era.println();

        await tachyon.print_and_wait(['싫어……']);
        await tachyon.print_and_wait(['그만둬.']);
        await tachyon.print_and_wait(['잠깐, ', t_call_c, ', 그만둬.']);
        await tachyon.print_and_wait(['견딜 수 없다.']);
        await tachyon.print_and_wait(['결국 목소리를 내고 말았다.']);
        await tachyon.print_and_wait(['하지만……']);
        era.println();

        await coffee.say_and_wait(
          [you.sex, '에게는 당신이 보이지도, 들리지도 않아요.'],
          true,
        );
        era.println();

        await tachyon.print_and_wait([
          '뒤에서 무언가 자신에게 속삭이는 기분이 든다.',
        ]);
        await tachyon.print_and_wait(['……', t_call_c, '의 『친구』?']);
        await tachyon.print_and_wait(['아니, 그런 건 아무래도 좋다.']);
        await tachyon.print_and_wait([t_call_c, ', 자네는——————.']);
        era.println();

        await coffee.say_and_wait(['너무하시죠, ', callname_25, '。']);
        era.println();

        await tachyon.print_and_wait([
          '문득 ',
          t_call_c,
          '의 목소리가 원래대로 돌아간다.',
        ]);
        era.println();

        await coffee.say_and_wait([
          '당신은 그녀를 사랑했어요……그런데 그녀는 당신의 마음을 짓밟았죠. 그렇지 않나요?',
        ]);
        era.println();

        await tachyon.print_and_wait(['뭐.']);
        await tachyon.print_and_wait([t_call_c, '……무슨 말을 하는 거지.']);
        await tachyon.print_and_wait(['아니야……누구……이야기를……?']);
        era.println();

        await coffee.say_and_wait([
          '이토록 ',
          callname_25,
          '는 ',
          c_call_t,
          '에게 헌신해 왔는데.',
        ]);
        await coffee.say_and_wait([
          '트레이너와 ',
          tachyon.uma_sex_title,
          '의 경계는 진작 넘었는데.',
        ]);
        await coffee.say_and_wait([
          '그런데도……제가 『이 약은 ',
          callname_25,
          '와 함께 쓸 거예요』라고 한 순간……아주 쉽게 약을 건네주더군요.',
        ]);
        era.println();

        await tachyon.print_and_wait([callname, '……좋아하는……사람……']);
        await tachyon.print_and_wait([
          '아니야, ',
          you.sex,
          '와 ',
          t_call_c,
          '쪽이 더 잘 어울릴 텐데.',
        ]);
        await tachyon.print_and_wait(['제삼자는 나인데……']);
        era.println();

        await coffee.say_and_wait(['응……갑자기……갑자기 이렇게 거세게……❤️.']);
        await coffee.say_and_wait(['저기……', callname_25, '……안에……안에서……']);
        await coffee.say_and_wait([
          c_call_t,
          '이 싫어했던 일도 전부 하게 해 드릴게요……',
          c_call_t,
          '은 당신을 거부했지만, 저는 그녀보다 몇 배나 더 만족시켜 드릴게요.',
        ]);
        era.println();

        await tachyon.print_and_wait(['아니야.']);
        await tachyon.print_and_wait(['그런 적 없어.']);
        await tachyon.print_and_wait(['나는……']);
        era.println();

        await tachyon.print_and_wait(['아.']);
        await tachyon.print_and_wait(['아니야.']);
        await tachyon.print_and_wait(['나는 거절했었지.']);
        era.println();

        await tachyon.print_and_wait(['마지막 기회.']);
        await tachyon.print_and_wait(['스스로 버렸다.']);
        await tachyon.print_and_wait(['이번에는 정말 기회가 없다.']);
        era.println();

        await tachyon.print_and_wait(['그런데 어째서……']);
        await tachyon.print_and_wait(['어째서 몸은 계속 떨리는 거지……']);
        await tachyon.print_and_wait(['내 연인인데.']);
        await tachyon.print_and_wait(['나를 사랑해 주던 사람인데.']);
        await tachyon.print_and_wait(['제삼자는 그녀인데.']);
        era.println();

        await tachyon.print_and_wait([
          callname,
          '와 ',
          t_call_c,
          '의 위치가 문득 뒤바뀐다.',
        ]);
        await tachyon.print_and_wait([
          callname,
          '가 ',
          t_call_c,
          '를 뒤에서 침대에 눌러 엎드리게 한다.',
        ]);
        await tachyon.print_and_wait([
          '모든 것을 쏟아 내려는 듯 멈추지 않는 왕복 운동.',
        ]);
        await tachyon.print_and_wait([
          t_call_c,
          '는 눈을 뒤집고 혀까지 내밀고 있다.',
        ]);
        await tachyon.print_and_wait(['그런데도……', you.sex, '의 입 모양.']);
        await tachyon.print_and_wait([
          callname,
          '의 입은 계속 무언가를 중얼거리고 있다.',
        ]);
        await tachyon.print_and_wait(['그것은……', y_call_t, '。']);
        era.println();

        era.println();

        await tachyon.print_and_wait(['……지금이라면.']);
        await tachyon.print_and_wait([t_call_c, '가 정신을 잃은 지금이라면.']);
        await tachyon.print_and_wait(['무엇을 해도 들키지 않겠지.']);
        await tachyon.print_and_wait([
          '정말 그녀의 말대로 『친구』가 모든 흔적을 숨겨 준다면.',
        ]);
        await tachyon.print_and_wait(['그렇다면……내가……']);
        era.println();

        await coffee.say_and_wait(['츄……츄……']);
        era.println();

        await tachyon.print_and_wait(['육봉이 아니다.']);
        await tachyon.print_and_wait(['음낭도 아니다.']);
        await tachyon.print_and_wait([
          you.sex,
          '를 버린 나에게 ',
          you.sex,
          '를 상대로 그렇게 주제넘게 굴 자격은 없다.',
        ]);
        await tachyon.print_and_wait([
          '그저 두 사람의 결합 부위에서 흘러넘친 액체.',
        ]);
        await tachyon.print_and_wait([
          '자신을 청소 도구 같은 것으로 취급한다.',
        ]);

        era.printButton('「！？」', 1);
        await era.input();

        await tachyon.print_and_wait(['핥고 있을 뿐인데.']);
        await tachyon.print_and_wait([you.sex, '가 문득 돌아본다.']);
        await tachyon.print_and_wait(['잠깐.']);
        await tachyon.print_and_wait(['보지 마.']);
        await tachyon.print_and_wait(['이런 비천한 모습을 보지 마.']);
        await tachyon.print_and_wait(['부탁이야, 제발……']);

        era.printButton('「너……누구야?」', 1);
        await era.input();

        await tachyon.print_and_wait(['……어?']);
        await tachyon.print_and_wait([
          callname,
          '는 망설임과 수치심, 당혹감이 섞인 얼굴이었다.',
        ]);
        await tachyon.print_and_wait([
          '어느 것도 「나」를 보고 지을 표정은 아니다.',
        ]);
        era.println();

        await coffee.say_and_wait([
          '그녀도……마찬가지로 ',
          callname_25,
          '를 동경하는 사람이에요.',
        ]);
        await coffee.say_and_wait([
          '다만……이 사람은 부끄럼이 많아서, 친구에게 얼굴을 가려 달라고 부탁했어요……',
        ]);
        await coffee.say_and_wait([
          '아니면……',
          callname_25,
          '는 그녀의 얼굴을 보고 싶으신가요?',
        ]);
        era.println();

        await tachyon.print_and_wait([
          '조금 풀렸던 마음이 ',
          t_call_c,
          '의 마지막 한마디에 다시 팽팽해진다.',
        ]);
        era.println();

        await you.say_and_wait('아니……보이고 싶지 않다면……강요하지 않을게.');
        await coffee.say_and_wait([callname_25, '……다정하시네요……']);
        era.println();

        await tachyon.print_and_wait(['그래……']);
        await tachyon.print_and_wait(['정말이지 너무 다정하다.']);
        await tachyon.print_and_wait(['어째서인지 머릿속에 장면이 떠오른다.']);
        await tachyon.print_and_wait([
          '만약 ',
          you.sex,
          '가 ',
          tachyon.get_colored_name(),
          '이 이런 ',
          tachyon.uma_sex_title,
          '라는 것을 안다면.',
        ]);
        await tachyon.print_and_wait([
          '만약 ',
          you.sex,
          '가 지금의 비천한 자신을 본다면.',
        ]);
        await tachyon.print_and_wait([
          you.sex,
          '는……어떤 경멸 어린 눈으로 자신을 볼까?',
        ]);
        await tachyon.print_and_wait(['어떤 차가운 말로 자신을 욕할까.']);
        await tachyon.print_and_wait(['혹은……']);
        await tachyon.print_and_wait([
          '만약 ',
          you.sex,
          '가 자신을 용서한다면.',
        ]);
        await tachyon.print_and_wait([
          '이토록 구제할 길 없는 자신을 용서한다면……',
        ]);
        await tachyon.print_and_wait([
          '그렇다면 내가 다시 ',
          t_call_c,
          '에게 팔아넘겼을 때 ',
          you.sex,
          '는 또 얼마나 흥분되는 표정을 지어 줄까.',
        ]);
        era.println();

        await coffee.say_and_wait([
          '하지만……이 사람은 정말로 ',
          callname_25,
          '를 좋아해요.',
        ]);
        await coffee.say_and_wait([
          '그러니 ',
          callname_25,
          '가 괜찮다면……이 사람이 곁에서 지켜보게 해 주시겠어요?',
        ]);
        await coffee.say_and_wait([
          '안심하세요. 보기만 할 거예요……보장할게요. 이제 멋대로 움직이지 않을 거예요……그렇죠?',
        ]);
        era.println();

        await tachyon.print_and_wait([
          t_call_c,
          '는 침대 가장자리에 앉아 발로 내 턱을 들어 올린다.',
        ]);
        await tachyon.print_and_wait(['말 안 듣는 강아지를 길들이듯.']);
        await tachyon.print_and_wait(['자신의 연적인데, 자신의 경쟁자인데.']);
        await tachyon.print_and_wait(['그런데도……']);
        await tachyon.print_and_wait([
          t_call_c,
          '의 다리 사이에서 천천히 흘러 종아리를 타고 내려오는 것을 바라본다.',
        ]);
        await tachyon.print_and_wait(['발등까지, 발끝까지.']);
        await tachyon.print_and_wait([
          '사랑을 나눈 흔적, 두 사람의 애액과 정액이 섞인 흰 액체.',
        ]);
        await tachyon.print_and_wait(['나는……']);
        await tachyon.print_and_wait([
          '정신을 차려 보니 ',
          t_call_c,
          '의 발을 핥고 있었다.',
        ]);
        await tachyon.print_and_wait(['달고, 쓰고, 굴욕적이고, 흥분된다.']);
        await tachyon.print_and_wait(['온갖 맛이 입안에서 터진다.']);
        await tachyon.print_and_wait([
          '어느새 발 전체를 남김없이 핥고 있었다.',
        ]);
        await tachyon.print_and_wait(['이제 없어……']);
        await tachyon.print_and_wait(['더, 더 그 맛을 원해……']);
        await tachyon.print_and_wait(['어떤 대가를 치르더라도……']);
        era.println();

        await tachyon.print_and_wait([
          '나는 바닥에 누워 복종하는 자세를 취한다.',
        ]);
        await tachyon.print_and_wait([
          t_call_c,
          '의 발을 조심스럽게 자신의 배 위에 올려놓는다.',
        ]);
        await tachyon.print_and_wait(['존엄이 얼마나 짓밟혀도 상관없다.']);
        await tachyon.print_and_wait(['다시 상을 받을 수만 있다면.']);
        era.println();

        await coffee.say_and_wait(['어머……착하네요.']);
        await coffee.say_and_wait(['제법……잘 보여 주네요.']);
        await coffee.say_and_wait([
          '계속 그런 재주를 보여 준다면……가끔 상을 주는 정도는 괜찮아요……',
        ]);
        era.println();

        await tachyon.print_and_wait([
          '문득 ',
          t_call_c,
          '가 귓가에 입을 대고 ',
          tachyon.uma_sex_title,
          '에게만 들릴 만큼 작은 목소리로 속삭인다.',
        ]);
        era.println();

        await coffee.say_and_wait([
          '마음껏 저를 기쁘게 해 주세요, ',
          c_call_t,
          ' ❤️。',
        ]);
        era.println();

        await tachyon.print_and_wait([
          '그러고는 ',
          t_call_c,
          '가 침대로 돌아간다.',
        ]);
        await tachyon.print_and_wait(['침대가 다시 흔들리기 시작한다.']);
        await tachyon.print_and_wait([
          '침대 아래의 ',
          tachyon.get_colored_name(),
          '은 혀를 내민 채.',
        ]);
        await tachyon.print_and_wait([
          '자신만의 특등석에서 개구리처럼 비참하게 몸을 떤다.',
        ]);
        await tachyon.print_and_wait([
          '필사적으로 자신을 위로하면서 침대 위의 연적도 기쁘게 한다.',
        ]);
        await tachyon.print_and_wait([
          '부디 비천한 자신을 가엾게 여겨, 아주 조금만, 아주 조금만 상을 내려 달라고 기도한다.',
        ]);
      }
      return ret;
    };
    f.title = 'Aromatic Hydrocarbon Poisoning(방향족 탄화수소 중독)';
    return f;
  })(),
  ero_start_reward1: (() => {
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait('드디어 끝났다……');
      await era.printAndWait([
        you.get_colored_name(),
        '는 기지개를 켜며 저도 모르게 한숨을 내쉬었다.',
      ]);
      await era.printAndWait([
        '요즘 ',
        tachyon.get_colored_name(),
        '의 실험은 늘어난 데다 더 복잡하고 까다로워지고 있다.',
      ]);
      await era.printAndWait([
        '예전만큼 위험하지는 않지만 트레이너 본업까지 더해지면 몹시 바빠져서 ',
        you.get_colored_name(),
        '는 차라리 위험한 실험을 하던 때가 그리울 정도였다.',
      ]);
      era.println();
      await tachyon.say_and_wait(['수고했네,', callname, '……']);
      await tachyon.say_and_wait('안심하게. 나중에 제대로 보상해 줄 테니.');
      await era.printAndWait('\n보상……?');
      await era.printAndWait([
        '무슨 보상인지는 모르지만, 그 말은 지친 ',
        you.get_colored_name(),
        '에게 힘을 주었다.',
      ]);
      await era.printAndWait('\n실험 기구를 정리한 뒤');
      era.println();
      await tachyon.say_and_wait('그럼……보상으로 처리해 주겠네.');
      await tachyon.say_and_wait('며칠 동안 쌓인 것을 말이지❤');
      era.println();
      await era.printAndWait('……응?');
      era.println();
      await tachyon.say_and_wait('그 반응은……설마 거절하겠다는 건가?');
      await tachyon.say_and_wait('우리는 연인 사이잖나?');
      era.println();
      await era.printAndWait('눈앞에 차려진 고기를 먹지 않을 이유가 없다!');
      await era.printAndWait(
        '게다가……며칠 동안 실험 때문에 욕구도 거의 풀지 못했다……',
      );
      await era.printAndWait(
        '그렇다면 연인에게 도움을 받는 정도는……지나친 일이 아니겠지.',
      );
      era.println();
      await era.printAndWait([
        '정신을 차려 보니 ',
        you.get_colored_name(),
        '는 바지를 내리고 있었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('스으……');
      era.println();
      await era.printAndWait([
        '애니메이션처럼 김이 피어오를 정도는 아니지만, 하루 종일 습기가 찬 육봉은 어떤 ',
        tachyon.uma_sex_title,
        '라도 성욕을 자극받을 냄새를 풍기고 있었다.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 눈앞의 육봉에서 시선을 떼지 못한다.',
      ]);
      era.println();
      await tachyon.say_and_wait('안 되네……참을 수가 없군……❤');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '는 잊고 있었다. 며칠 동안 실험으로 욕구가 쌓인 것은 ',
        you.get_colored_name(),
        '혼자만이 아니었다.',
      ]);
      await era.printAndWait([
        '곁에서 계속 실험하던 ',
        tachyon.get_colored_name(),
        '도 마찬가지였을 것이다.',
      ]);
      await era.printAndWait('즉……보상이라기보다는 구실이었던 건가……');
      era.println();
      await era.printAndWait([
        '그렇게 생각하자 ',
        you.get_colored_name(),
        '의 마음에 장난기가 솟는다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '가 육봉을 꺼낸 채 움직이지 않는 것을 보고 ',
        tachyon.get_colored_name(),
        '은 초조해하며 ',
        you.get_colored_name(),
        '를 바라본다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '……무엇을 기다리나? 어서 들어오게.',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 입술을 내밀고, 입술 사이의 분홍빛 혀를 앞뒤로 움직여 ',
        you.get_colored_name(),
        '의 정욕을 부추기려 한다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        you.get_colored_name(),
        '는 움직이지 않는다. 의도를 깨달은 ',
        tachyon.get_colored_name(),
        '은 원망스러운 표정을 지었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('……너무하군.');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 바닥에 쪼그려 앉아, 애원하듯 높이 치솟은 육봉을 올려다본다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '부탁하네, ',
        callname,
        '……쪽쪽 빨면서……제대로 맛보게 해 줘……',
        callname,
        '의 육봉을……❤️',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '가 마침내 다가오자 ',
        tachyon.get_colored_name(),
        '은 황급히 육봉에 코를 대고 몇 번이고 깊이 냄새를 맡았다.',
      ]);
      await era.printAndWait(
        '가만있지 못하는 손이 밀혈을 질척거리며 긁고, 신음이 새어 나온다.',
      );
      await era.printAndWait(
        '이성과 감정 모두가 인정한 이 수컷 앞에서, 암컷인 자신은 무릎 꿇고 복종할 수밖에 없다.',
      );
      era.println();
      await tachyon.say_and_wait('스으……하아……스으……');
      await tachyon.say_and_wait('육봉……육봉 냄새……');
      await tachyon.say_and_wait([
        '부탁이야……더 맡게 해 줘……',
        callname,
        '의……육봉을……',
      ]);
      await tachyon.say_and_wait('콧속이……전부……수컷의 냄새야……');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '는 쿠퍼액투성이인 육봉을 쥔다.',
      ]);
      await era.printAndWait([
        '장난스럽게, 어느새 눈앞에 무릎 꿇은 ',
        tachyon.get_colored_name(),
        '의 코끝에 문지른다.',
      ]);
      await era.printAndWait([
        '표시라도 남기듯 즙과 냄새를 ',
        tachyon.get_colored_name(),
        '의 코에 묻힌다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '너무하군……이런 냄새를……맡으면……정말로……돌아갈 수 없게 된다네……',
      );
      era.println();
      await era.printAndWait('싫으면 그만둘까?');
      await era.printAndWait([
        you.get_colored_name(),
        '가 물러서는 시늉을 하자 ',
        tachyon.get_colored_name(),
        '은 한 걸음씩 따라오며, 코를 육봉에서 일 센티미터도 떼지 않는다.',
      ]);
      era.println();
      await tachyon.say_and_wait('냄새만으로……갈 것 같네……');
      era.println();
      await era.printAndWait('또 장난칠까 두려워하듯 ');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '쪽에서 코끝으로 ',
        you.get_colored_name(),
        '의 귀두 끝을 계속 비빈다.',
      ]);
      await era.printAndWait(
        '이 냄새를 잊지 않으려는 듯 육봉의 냄새를 세게 들이마신다.',
      );
      era.println();
      await tachyon.say_and_wait('안 되네……참을 수가 없어……');
      await tachyon.say_and_wait('머금게 해 줘……부탁이니 핥게 해 줘……');
      era.println();
      await era.printAndWait('어서 핥고 싶다.');
      await era.printAndWait('육봉을 빨아도 된다는 허락을 받고 싶다.');
      await era.printAndWait('연인의 육봉이 눈앞에 있다.');
      await era.printAndWait([
        '냄새를 음미하는 ',
        tachyon.get_colored_name(),
        '은 그래도 참지 못하고 침을 삼킨다.',
      ]);
      era.println();
      await tachyon.say_and_wait('질척');
      await tachyon.say_and_wait('응츄르르르……츄르……츄극……');
      era.println();
      await era.printAndWait([
        '허락이 떨어지기도 전에 ',
        tachyon.get_colored_name(),
        '은 이미 육봉을 빨기 시작했다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '도 숨을 내쉰다. 이대로 더 버티면 참지 못하는 쪽은 ',
        you.get_colored_name(),
        '일 것이다.',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 입을 크게 벌려 한 번에 뿌리까지 육봉을 삼킨다.',
      ]);
      await era.printAndWait('위아래로 계속 빨며 상스러운 물소리를 낸다.');
      era.println();
      await tachyon.say_and_wait('맛있어……맛있군……');
      await tachyon.say_and_wait(['육봉……', callname, '의 냄새나는 육봉❤❤']);
      era.println();
      await era.printAndWait(['뿌리부터 귀두까지 빠짐없이 감싸 빤다.']);
      await era.printAndWait(
        '립스틱을 바르듯 육봉의 맛을 입안에 남김없이 문질러 넣고 싶다.',
      );
      era.println();
      await era.printAndWait('대부분 집이나 기숙사로 돌아간 저녁 시간.');
      await era.printAndWait(
        '실험실에 몹시 음란한 물소리가 울린다. 일부러 내는 건지, 이제 소리에 신경 쓸 여유조차 없는 건지.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '에 대한 갈망, 육봉에 대한 갈망, 혹은 이토록 음란한 행위가 주는 배덕감.',
      ]);
      await era.printAndWait(
        '육봉에 봉사하면서도 흔들리는 엉덩이를 바닥과 손가락에 비비며 위안을 구한다.',
      );
      await era.printAndWait('하지만……가장 맛있는 것은 역시 입안의 육봉이다.');
      await era.printAndWait([
        '애정 어린 봉사가 말없이 ',
        tachyon.get_colored_name(),
        '의 눈앞 육봉에 대한 집착을 드러낸다.',
      ]);
      await era.printAndWait([
        '지금 이 자리에서 평생 육봉의 노예로 살겠다고 맹세하라 해도 ',
        tachyon.sex,
        '은 고개를 끄덕일 것이다.',
      ]);
      era.println();
      await era.printAndWait([
        '문득 ',
        you.get_colored_name(),
        '는 ',
        tachyon.get_colored_name(),
        '의 머리를 가볍게 두드린다.',
      ]);
      await era.printAndWait([
        '고분고분한 ',
        tachyon.sex,
        '은 곧바로 뜻을 알아차렸다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '안에……싸 주게……내 입구멍에……전부……마실 테니❤❤',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '은 곧장 더 깊이 ',
        you.get_colored_name(),
        '의 육봉을 머금고 빤다.',
      ]);
      await era.printAndWait('마침내 흰 액체가 입안에서 터진다.');
      era.println();
      await tachyon.say_and_wait('츄……질척………푸핫');
      await tachyon.say_and_wait('하앗……하……응……츄……');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 입안에 사정된 정액을 천천히 씹는다.',
      ]);
      await era.printAndWait(
        '일부러 질척이는 소리를 낸 뒤, 정액을 모두 삼킨다.',
      );
      await era.printAndWait('남은 정액을 한 방울도 빠짐없이 마시기 위해 ');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 다시 처진 육봉을 머금고, 계속 빨아 육봉을 청소한다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 집착하는 모습을 보자 ',
        you.get_colored_name(),
        '의 아래는 다시 저절로 단단해졌다.',
      ]);
      era.println();
      await tachyon.say_and_wait(['다음 실험도 잘 부탁하네, ', callname, ' ']);
      await tachyon.say_and_wait('……물론 보상은 있다네.');
      await tachyon.say_and_wait('거절하지 않겠지……여보❤');
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '의 녹아내리는 듯한 눈길을 보고 ',
        you.get_colored_name(),
        '는 명령만 쏟아 내는 그 작은 입을 한 번 더 막기로 했다.',
      ]);
    };
    f.title = '실험의 보상·하나';
    return f;
  })(),
  ero_start_reward2: (() => {
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait([callname, '～오늘 실험도 수고했네']);
      await tachyon.say_and_wait('그럼……보상이 필요한가❤️');
      await you.say_and_wait('부탁해.');
      era.println();
      await era.printAndWait('질척, 질척');
      await era.printAndWait('실험실은 상스러운 소리로 가득하다.');
      era.println();
      await tachyon.say_and_wait([callname, '……', callname, '❤️']);
      await tachyon.say_and_wait('어서……내 음란한 구멍을 채워 주게❤️');
      await tachyon.say_and_wait(
        '실험 도중부터 계속 즙을 흘리던 이 음란한 구멍을 제대로 길들여 줘.',
      );
      await era.printAndWait('넣기 전부터 흠뻑 젖은 구멍이 육봉을 꽉 감싼다.');
      await era.printAndWait([
        '찌를 때마다 애액이 튀어, 책상도 바닥도 ',
        tachyon.get_colored_name(),
        '의 비릿한 즙으로 물든다.',
      ]);
      era.println();
      await tachyon.say_and_wait('읏……거세군❤️');
      await tachyon.say_and_wait('조금…조금만 천천히……❤️');
      await tachyon.say_and_wait('목소리가……아앙❤️');
      era.println();
      await era.printAndWait('이렇게 유혹해 놓고 천천히 할 수 있을 리가?');
      await era.printAndWait([
        you.get_colored_name(),
        '는 ',
        tachyon.get_colored_name(),
        '의 엉덩이를 세게 때린다.',
      ]);
      await era.printAndWait('가차 없이 속도를 높인다.');
      era.println();
      await tachyon.say_and_wait([callname, '……', callname, '❤️']);
      await tachyon.say_and_wait('앗❤️응앗❤️앗❤️아아❤️');
      await tachyon.say_and_wait([callname, '……주게❤️더 주게❤️']);
      era.println();
      await era.printAndWait([
        '절정으로 치달을수록 허리는 ',
        you.get_colored_name(),
        '의 통제를 벗어나 저절로 빨라진다.',
      ]);
      await era.printAndWait([
        '이토록 스스로 휘감겨 오니 ',
        you.get_colored_name(),
        '의 흥분도 한층 높아져, 눈앞의 암컷을 수컷의 본능대로 움직이고 싶어진다.',
      ]);
      era.println();
      await tachyon.say_and_wait(['대단해❤️', callname, '의 육봉❤️대단하군❤️']);
      era.println();
      await era.printAndWait('살이 부딪치는 소리가 더욱 커진다.');
      await era.printAndWait('실험실 전체가 음란한 냄새와 소리로 가득 찬다.');
      era.println();
      await tachyon.say_and_wait('또……또 커졌어……❤️');
      await tachyon.say_and_wait([
        '쌀 건가……안에, 안에 싸 주게❤️갖고 싶어……',
        callname,
        '의 아기를❤️',
      ]);
      await tachyon.say_and_wait([
        '좋아해……',
        callname,
        '에게 질내사정 받는 게 가장 좋다네❤️',
      ]);
      await tachyon.say_and_wait([
        '구멍 안에……마음껏 싸 주게……',
        callname,
        '의 아이를 낳고 싶어❤️',
        callname,
        '에게 모르모트 새끼를 한 배 가득 낳아 주고 싶네❤️',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 말을 듣고 ',
        you.get_colored_name(),
        '는 더욱 가차 없이, 빠르고 깊게 움직인다.',
      ]);
      await era.printAndWait([
        tachyon.uma_sex_title,
        '의 몸조차 ',
        you.get_colored_name(),
        '의 움직임에 맞춰 흔들릴 수밖에 없다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '는 앞에서 계속 흔들리는 두 끝을 집어 세게 아래로 당긴다.',
      ]);
      era.println();
      await tachyon.say_and_wait('호오오오오오❤️');
      await tachyon.say_and_wait('가, 가겠어❤️유두가 당겨져서 가겠네❤️');
      era.println();
      await era.printAndWait('두근, 두근, 슈르르르❤️');
      await era.printAndWait(
        '마지막으로 가장 깊이 몇 차례 찌른 뒤, 정액의 둑이 완전히 터진다.',
      );
      await era.printAndWait([
        '흰 액체가 ',
        tachyon.get_colored_name(),
        '의 구멍을 채운다.',
      ]);
      await era.printAndWait([
        '흰 액체가 쏟아진 순간 ',
        tachyon.get_colored_name(),
        '도 온몸을 경련하며 절정에 이르렀다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '며칠 만인가……',
        callname,
        '의 육봉❤️에헤헤❤️',
      ]);
      await tachyon.say_and_wait(['대단해……', callname, '의……응읏❤️']);
      era.println();
      await era.printAndWait([
        '끝났다고 생각한 ',
        tachyon.get_colored_name(),
        '의 감탄이 도중에 끊긴다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 육봉이 다시 입을 막았기 때문이다.',
      ]);
      era.println();
      await tachyon.say_and_wait('츄……츄츄❤️');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 순순히 ',
        you.get_colored_name(),
        '의 육봉을 청소한다.',
      ]);
      await era.printAndWait([
        '자신의 애액과 ',
        callname,
        '의 정액에 뒤덮인 육봉을 대하는 지금의 ',
        tachyon.get_colored_name(),
        '을 보면, ',
        callname,
        '의 도시락을 눈앞에 놓아도 ',
        tachyon.sex,
        '은 육봉을 고를 것이다.',
      ]);
      era.println();
      await tachyon.say_and_wait('다음 실험도……똑같이 부탁하네❤️츄❤️츄포❤️');
      await tachyon.say_and_wait('응! 응츄❤️츄르❤️');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 말을 바꿔 「다음에도 또 하자」고 하는 것을 듣고 ',
        you.get_colored_name(),
        '의 육봉은 다시 단단해진다.',
      ]);
      await era.printAndWait([
        '눈앞의 ',
        tachyon.uma_sex_title,
        '를 유혹해 다시 암컷의 표정을 짓게 한다.',
      ]);
    };
    f.title = '실험의 보상·둘';
    return f;
  })(),
  ero_start_reward3: (() => {
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait([callname, '～오늘 실험도 수고했네']);
      await tachyon.say_and_wait('그럼……보상이 필요한가❤️');
      await you.say_and_wait('부탁해.');
      await tachyon.print_and_wait('역시 이 구멍은 아니지 않나?');
      await tachyon.print_and_wait(
        '아래의 음란한 구멍도 욱신거려 견딜 수 없는데.',
      );
      await tachyon.print_and_wait('왜 들어와 있는 곳은 저런 곳인가.');
      await tachyon.print_and_wait('게다가 이런……이런 자세로.');
      era.println();
      await tachyon.print_and_wait([
        '조이는 뒷구멍이 ',
        callname,
        '의 굵은 육봉을 감싸고 있다.',
      ]);
      await tachyon.print_and_wait([
        '앞의 구멍보다 주름이 많은 뒷구멍은 ',
        callname,
        '에게 더 큰 쾌감을 주는 동시에, 자신에게도 앞의 구멍보다 두 배의 쾌감을 준다.',
      ]);
      await tachyon.print_and_wait(
        '성욕을 채우는 데는 앞의 구멍보다 쓰기 좋을지도 모른다……하지만……',
      );
      era.println();
      await tachyon.say_and_wait(
        '강아지 같은 자세……게다가 이 구멍……이러면 정말 강아지 아닌가❤️',
        true,
      );
      era.println();
      await tachyon.print_and_wait(
        '하지만……생각해 보면 나쁘지 않을지도 모르겠군❤️',
      );
      await tachyon.print_and_wait([callname, '는 자신 전용의 ', callname]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은 ',
        callname,
        ' 전용의 암캐.',
      ]);
      await tachyon.print_and_wait(
        '그렇게 생각하자 몸은 금세 그 역할에 빠져든 듯 기쁘게 꼬리를 흔들며 주인의 비위를 맞춘다.',
      );
      era.drawLine();
      await era.printAndWait([
        '아래에 있는 이가 딴생각을 하는 것을 알아챘는지 ',
        you.get_colored_name(),
        '는 ',
        tachyon.get_colored_name(),
        '의 엉덩이를 때려 ',
        tachyon.sex,
        '에게 집중하라고 재촉한다.',
      ]);
      await era.printAndWait([
        '하지만 완전히 역할에 빠져든 ',
        tachyon.get_colored_name(),
        '은 더욱 세게 엉덩이를 흔들며 자신의 뒷구멍을 조인다.',
      ]);
      await era.printAndWait([
        '갑작스러운 공격에 ',
        you.get_colored_name(),
        '는 순간 정액을 참지 못한다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '는 ',
        tachyon.get_colored_name(),
        '의 허리를 붙잡고 뒷구멍 안에 며칠 동안 쌓인 정액을 전부 쏟아 낸다.',
      ]);
      await era.printAndWait([
        '다리 아래의 ',
        tachyon.get_colored_name(),
        '도 이때, 행복을 주인에게 전하고 싶은 암캐처럼 ',
      ]);
      await era.printAndWait('기쁘게 오줌을 지리며 지금의 기분을 드러낸다.');
      await era.printAndWait([
        '하지만 ',
        you.get_colored_name(),
        '가 반응하기 전에 두 번째 묵직한 충격이 찾아온다.',
      ]);
      era.println();
      await tachyon.say_and_wait('멍……멍멍❤️');
      await era.printAndWait([
        you.get_colored_name(),
        '의 당황한 얼굴을 보고 ',
        tachyon.get_colored_name(),
        '은 자신이 무슨 짓을 했는지 문득 정신이 든 모양이다.',
      ]);
      await era.printAndWait('뺨이 순식간에 새빨개진다.');
      era.println();
      await tachyon.say_and_wait([
        callname,
        '……아니네, 나는……안 했어……자네가 생각한 그런 게 아니야……',
      ]);
      era.println();
      await era.printAndWait(
        '무슨 일이 있었는지는 모르지만, 일단 아무 일도 없었던 것으로 해 두자.',
      );
    };
    f.title = '실험의 보상·셋';
    return f;
  })(),
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶ名
   */
  async ero_start_cuckold(tachyon, callname, t_call_c) {
    if (era.get('cflag:25:招募状态') === 1 && Math.random() < 0.5) {
      await tachyon.say_and_wait([
        '……',
        callname,
        ', 저기, ',
        t_call_c,
        '도……함께 부르지 않겠나?',
      ]);
      await tachyon.say_and_wait('오늘은 나하고만……아아, 그런가.');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 어째서인지 조금 쓸쓸해 보였다.',
      ]);
    } else {
      await tachyon.say_and_wait(['……미안하네, ', callname, ', 미안해.']);
      era.println();
      await era.printAndWait([
        '어째서인지 잠자리에 들기 전부터 ',
        tachyon.get_colored_name(),
        '은 몇 번이고 사과하고 있었다.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶ名
   */
  async ero_start_cuckold_coffee(tachyon, callname, t_call_c) {
    await tachyon.say_and_wait([t_call_c, ', 오게나.']);
    await tachyon.say_and_wait([
      '그래, 충분히 핥아 적시게. 그래야 나중에 ',
      callname,
      '가 들어오기 편하지.',
    ]);
    await tachyon.say_and_wait('잘하면 끝난 뒤에 한 번 더 핥게 해 주겠네.');
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   */
  async ero_end_cuckold_coffee(tachyon, callname) {
    await tachyon.say_and_wait([
      callname,
      '의 정액과 애액을 커피에 섞는다고? 그러면 맛있어지나?',
    ]);
    await tachyon.say_and_wait('아니면 굴욕과 패배의 맛만 음미하는 건가?');
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   */
  async cum_in_mouth_tr_tit(tachyon, you, callname) {
    await tachyon.say_and_wait('츄❤️질척❤️츄르❤️');
    era.println();
    await era.printAndWait([
      '사정된 정액이 ',
      tachyon.get_colored_name(),
      '의 목으로 쏟아진다.',
    ]);
    await era.printAndWait([
      '하지만 사정량이 너무 많아 ',
      tachyon.get_colored_name(),
      '이 한 번에 삼킬 수 있는 양을 넘고 있었다.',
    ]);
    await era.printAndWait([
      '흰 정액이 입가에서 유방으로 흘러내리자 ',
      tachyon.get_colored_name(),
      '은 황급히 한 손으로 가슴을 받쳐, 떨어진 정액을 다시 입으로 가져간다.',
    ]);
    era.println();
    await tachyon.say_and_wait('츄❤️츄르❤️');
    await tachyon.say_and_wait('아직……');
    await tachyon.say_and_wait([
      '이것들은 모두 ',
      callname,
      '의 소중한 인자라네❤️낭비할 수는 없지❤️',
    ]);
    era.println();
    await era.printAndWait([
      '자신의 몸에 묻은 것을 다 핥고 나자 ',
      tachyon.get_colored_name(),
      '은 여운이 남아 있는 육봉으로 눈을 돌린다.',
    ]);
    await era.printAndWait([
      tachyon.sex,
      '은 세게 한 번 빨아 육봉 안에 남은 정액을 빨아낸다.',
    ]);
    era.println();
    await tachyon.say_and_wait('이제……깨끗해졌군❤️');
    era.println();
    await era.printAndWait([
      '모은 정액을 입안에 담아 보여 준 뒤 ',
      tachyon.get_colored_name(),
      '은 천천히 흰 액체를 삼킨다.',
    ]);
    await era.printAndWait([
      '목이 요염하게 위아래로 움직여 ',
      you.get_colored_name(),
      '에게 삼키는 과정을 과시하는 듯하다.',
    ]);
    era.println();
    await tachyon.say_and_wait('하앗……다시 비었군❤️더 싸러 들어오지 않겠나❤️');
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   */
  async cum_in_throat_force(tachyon, you) {
    await tachyon.say_and_wait('응구그극❤️응으❤️응극❤️');
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      '는 ',
      tachyon.get_colored_name(),
      '의 머리를 세게 붙잡는다.',
    ]);
    await era.printAndWait([
      '귀두를 ',
      tachyon.get_colored_name(),
      '의 목 깊숙이 누른 채 사정하기 시작한다.',
    ]);
    await era.printAndWait([
      '사정이 끝나도 ',
      you.get_colored_name(),
      '는 계속 육봉으로 막아, 정액이 ',
      tachyon.get_colored_name(),
      '의 위 구석구석에 스며들도록 한다.',
    ]);
    era.println();
    await era.printAndWait([
      '산소가 부족해서일까. 육봉을 뺀 뒤 ',
      tachyon.get_colored_name(),
      '의 표정은 조금 멍해져 있다.',
    ]);
    await era.printAndWait(
      '하지만 무의식적으로 입가의 흰 액체와 구불구불한 털까지 입으로 가져가……',
    );
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   */
  async cum_in_throat(tachyon, you, callname) {
    await tachyon.say_and_wait('응……꿀꺽……꿀꺽……');
    era.println();
    if (Math.random() < 0.5) {
      await era.printAndWait('이 순간을 오래 기다려 온 듯하다.');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 한 모금 또 한 모금, 기쁘게 사정된 흰 액체를 전부 삼킨다.',
      ]);
      era.println();
      await tachyon.say_and_wait('푸핫……');
      era.println();
      await era.printAndWait('벌어진 입과 혀에 흰 실이 조금 남아 있다.');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 그대로 입을 벌리고, 혀로 입안의 정액을 한데 모은다.',
      ]);
      await era.printAndWait('그리고 다시 한번 삼킨다.');
      era.println();
      await tachyon.say_and_wait('잘 먹었네❤️');
    } else {
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 ',
        you.get_colored_name(),
        '앞에서 혀를 내밀어 자신이 짜낸 많은 정액을 보여 준다.',
      ]);
      await era.printAndWait([
        '언제나 자신만만하던 얼굴이 흰 액체로 더럽혀진 모습이 ',
        you.get_colored_name(),
        '의 내면에 있는 욕망을 부추긴다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '이것이 ',
        callname,
        '의 인자로군……실험에 쓰려면……',
      ]);
      era.println();
      await era.printAndWait('그렇게 말하면서도 입안에서 잠시 굴린 뒤……');
      era.println();
      await tachyon.say_and_wait('질척……질척……푸핫❤️');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 ',
        you.get_colored_name(),
        '를 향해 이제 아무것도 없는 작은 입을 벌린다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '전부 마셨네……그럼 한 번 더 할 수밖에 없겠군❤️',
      );
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   */
  async cum_in_tit(tachyon, you, callname) {
    await tachyon.say_and_wait('진하군……❤️');
    await tachyon.say_and_wait([
      '얼굴에 전부 발려서……가득, ',
      callname,
      '의 냄새야❤️',
    ]);
    era.println();
    await era.printAndWait('진한 액체가 얼굴을 타고 가슴으로 떨어진다.');
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 먼저 얼굴에 묻은 정액을 닦아 손 위에 모은다.',
    ]);
    await era.printAndWait(
      '하지만 가슴의 흔적은 깜빡 잊기라도 한 듯 남겨 둔다.',
    );
    await era.printAndWait([
      '드러난 가슴에 ',
      you.get_colored_name(),
      '가 사정한 비릿한 흰 액체가 끈적하게 묻어 있다.',
    ]);
    era.println();
    await tachyon.say_and_wait('이런……잊고 있었군❤️');
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      '의 시선이 가슴에 끌리는 것을 보고 ',
    ]);
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 일부러 꾸며 낸 놀라움을 드러낸다.',
    ]);
    await era.printAndWait('가슴의 흰 액체를 겹겹이 닦아 입으로 가져간다.');
    era.println();
    await tachyon.say_and_wait('츄……츄르❤️잘 먹었네❤️');
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '은 손가락을 빨고 입을 벌려, 깨끗해진 혀와 입술을 보여 주며 남긴 것이 없음을 알린다.',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   */
  async orgasm_non_penetrative(tachyon, callname) {
    await tachyon.say_and_wait('가겠어……가겠네❤️');
    await tachyon.say_and_wait([callname, ' 전용 암캐가 되겠네에에에❤️']);
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   */
  async cum_in_missionary(tachyon, you) {
    await era.printAndWait([
      '언제나 주도권을 쥐는 ',
      tachyon.get_colored_name(),
      '을 아래에 눌러 범하는 행위가 ',
      you.get_colored_name(),
      '의 사정 욕구를 더욱 높인다.',
    ]);
    era.println();
    await tachyon.say_and_wait('앗❤️아앙❤️모르모트 군❤️');
    await tachyon.say_and_wait('구멍이……구멍 안이❤️기분 좋네❤️');
    era.println();
    await you.say_and_wait('나온다……');
    await era.printAndWait([you.get_colored_name(), '가 낮게 신음한다.']);
    await era.printAndWait('두근❤️두근❤️푸슈르르❤️');
    era.println();
    await era.printAndWait(
      '육봉을 빼자, 안에 사정된 진한 흰 액체가 천천히 흘러나온다……',
    );
  },
  /** @param {CharaTalk} tachyon アグネスタキオン */
  async cum_in_back(tachyon) {
    await tachyon.say_and_wait('하앗……응앗……오……우오오오❤️');
    await tachyon.say_and_wait('짐승처럼 안에 받았네에에에❤️❤️❤️');
    await tachyon.say_and_wait(
      '이성이 사라진다네❤️머릿속이 육봉과 정액뿐인 짐승이 되겠어❤️❤️❤️',
    );
    era.println();
    await era.printAndWait('순산형 엉덩이가 충분히 충격을 완화해 준다.');
    await era.printAndWait(
      '육봉이 자궁 입구를 칠 때마다 애액이 뿜어져 나온다.',
    );
    await era.printAndWait('구멍 전체가 물결처럼 육봉을 자극한다.');
    await era.printAndWait(
      '이윽고 귀두가 자궁 입구를 누르고, 정액을 자궁 안으로 쏟아 넣는다.',
    );
    await era.printAndWait('뷰웃~뷰웃~뷰웃~');
    await era.printAndWait('긴 파종은 끝날 때까지 아직 시간이 걸릴 듯하다.');
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   */
  async cum_in_anal_missionary(tachyon, you) {
    await tachyon.say_and_wait('가겠어……가, 가, 가겠어!');
    await tachyon.say_and_wait('항문으로, 뒷구멍으로 가겠네에에에❤️');
    if (tachyon.sex_code !== 1) {
      era.println();
      await era.printAndWait(
        '세게 몇 차례 찔린 뒤, 비어 있는 구멍에서 몇 번이고 물이 뿜어져 나온다.',
      );
      await era.printAndWait(
        '자신에게 튄 것과 구멍에서 천천히 흘러나온 것이 두 사람이 연결된 부위에 모여, 그대로 드나드는 움직임의 윤활제로 계속 쓰인다.',
      );
      era.println();
      await you.say_and_wait(
        '편리한 성욕 처리 도구군. 윤활제까지 스스로 마련하다니.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '의 농담을 듣고 ',
        tachyon.get_colored_name(),
        '은 육봉을 세게 조이려 하지만 힘이 풀린 몸으로는 그조차 할 수 없다. 오히려 압박 자극에 구멍이 다시 얕고 작은 절정을 맞고 만다.',
      ]);
    }
  },
  /**
   * 快楽刻印を得る
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {number} level 快楽刻印の等級
   * @param {number} love 恋慕値
   */
  async mark_pleasure(tachyon, callname, level, love) {
    switch (level) {
      case 1:
        if (love < 75) {
          await tachyon.say_and_wait(
            '응……뜨겁고 근질거리네……몸이 조금 힘들군……약의 부작용인가?',
          );
        } else {
          await tachyon.say_and_wait('응……뜨겁고 근질거려……');
          await tachyon.say_and_wait(
            '아니, 기분이 나쁜 건 아니네……응……조금 더 시험해 보자고……신기한 느낌이군……',
          );
        }
        break;
      case 2:
        if (love < 75) {
          await tachyon.say_and_wait(
            '안 돼……호르몬의 작용일 뿐……몸의 정상적인 반응일 뿐인데……그런데, 그런데……어째서……이렇게 기분이 좋지……',
          );
        } else {
          await tachyon.say_and_wait(
            '잠깐……안이 아직 가라앉지 않았어……더 기분 좋아지면……히익!',
          );
          await tachyon.say_and_wait(
            '안 돼, 계속하면 안 된다는 걸 아는데 몸이 저절로……머리가……생각할 수 없네……',
          );
        }
        break;
      case 3:
        if (love < 75) {
          await tachyon.say_and_wait([
            '이제……생각할 수가 없네……기분 좋아……더……더, ',
            callname,
            '……주게……아직 원해……',
          ]);
        } else {
          await tachyon.say_and_wait([callname, '❤️', callname, '❤️']);
          await tachyon.say_and_wait(
            '더……더 주게……안도 밖도 완전히 채워 줘……❤️',
          );
          await tachyon.say_and_wait(
            '이렇게 된 건 자네 탓이라네……그러니 더❤️이 영리한 머리가 육체의 교접 외에는 생각할 수 없게 될 때까지❤️',
          );
        }
    }
  },
  /**
   * 同心刻印を得る
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {number} level 刻印の等級
   * @param {number} love 恋慕値
   */
  async mark_meek(tachyon, callname, level, love) {
    switch (level) {
      case 1:
        if (love < 75) {
          await tachyon.say_and_wait(
            '때때로 생각을 비우고 남에게 모두 맡기는 것……어떤 의미로는 스트레스 해소일지도 모르겠군?',
            true,
          );
          await tachyon.say_and_wait([
            callname,
            '………………아니, 나는 무슨 생각을 하는 거지!',
          ]);
        } else {
          await tachyon.say_and_wait([
            '응❤️응앗❤️',
            callname,
            '❤️잠깐……멈춰, 멈춰 줘❤️',
          ]);
          await tachyon.say_and_wait('하앗……하앗……');
          await tachyon.say_and_wait(
            '말한 대로 멈춰 줬는데, 어째서 몸은 아직 이상한 거지……',
            true,
          );
          await tachyon.say_and_wait(
            [
              '마치……',
              callname,
              '가 내 말을 무시해 줬으면 하는 것처럼……계속……의식을 잃을 때까지……나는 무슨 생각을 하는 거지!',
            ],
            true,
          );
        }
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 갑자기 격렬하게 고개를 젓기 시작했다.',
        ]);
        break;
      case 2:
        if (love < 75) {
          await tachyon.say_and_wait(['잠깐……', callname, '……그렇게까지……']);
          await tachyon.say_and_wait(`아니, 왜 더 거세진 거야……!`);
          await tachyon.say_and_wait([
            '큭……고작 ',
            callname,
            '일 뿐인데……내 명령을 따라야 할 텐데……',
          ]);
          await tachyon.say_and_wait(
            '어째서……몸은 전보다 기분 좋다고 느끼지……나, 피학 취향인 건가……',
            true,
          );
        } else {
          await tachyon.say_and_wait([
            '응으……',
            callname,
            ', 잠깐……너무 세……히익❤️',
          ]);
          await tachyon.say_and_wait('싫어……………아니, 그렇지도……');
          await tachyon.say_and_wait('잠깐! 또 갑자기 그렇게……응앗❤️❤️');
          await tachyon.say_and_wait([
            '멈추라고 했잖나……',
            callname,
            '도 참, 하아……',
          ]);
          await tachyon.say_and_wait('주도권은 내 손에 있어야 할 텐데.', true);
          await tachyon.say_and_wait(
            '어째서 오히려……지배당하고 싶다는 생각을……',
            true,
          );
          await tachyon.say_and_wait('위험해……정말 위험하군❤️', true);
        }
        break;
      case 3:
        await tachyon.say_and_wait(
          '생각을 버리고 누군가의 포로가 되는 것이 이렇게 기분 좋다니……',
          true,
        );
        await tachyon.say_and_wait(
          '아아……예전의 나는 무엇에 저항했던 걸까.',
          true,
        );
        await tachyon.say_and_wait([
          callname,
          '……아니, 주인……님……주게, 아직 더 원해……❤️',
        ]);
        await tachyon.say_and_wait(
          '괜찮아……이건……이건……흥을 돋우는 놀이일 뿐이네.',
          true,
        );
        await tachyon.say_and_wait(
          '끝나면 원래대로 돌아갈 테지……그래……그러니……',
          true,
        );
        await tachyon.say_and_wait('부디 더 명령해 주게……❤️');
    }
  },
  /**
   * 苦痛刻印を得る
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {number} level 刻印の等級
   * @param {number} love 恋慕値
   */
  async mark_pain(tachyon, callname, level, love) {
    switch (level) {
      case 1:
        if (love < 75) {
          await tachyon.say_and_wait([
            '아파!? 주인에게 이런 짓을 하다니,',
            callname,
            ', 무슨 생각인가!',
          ]);
        } else {
          await tachyon.say_and_wait([
            '아파!?',
            callname,
            '……조금 덜 거칠게 해 주겠나?',
          ]);
        }
        break;
      case 2:
        if (love < 75) {
          await tachyon.say_and_wait('그만……멈춰! 아파……이제 괴롭히지 마!');
        } else {
          await tachyon.say_and_wait([
            callname,
            '!? 내, 내가 뭘 잘못했나……어째서, 어째서 이런 짓을……',
          ]);
        }
        break;
      case 3:
        if (love < 75) {
          await tachyon.say_and_wait(
            '아파……무서워……미안하네……내가 잘못했어……내 잘못이야……이제 괴롭히지 마……아파, 아파……',
          );
        } else {
          await tachyon.say_and_wait([
            '아파……',
            callname,
            '……어째서……왜 이런 짓을……이해할 수 없어……',
          ]);
          await tachyon.say_and_wait(
            '이게 사랑인가? 왜 자신의 연인을 이렇게 대하는 거지……모르겠네……',
          );
        }
    }
  },
  /**
   * 恥辱刻印を得る
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {number} level 刻印の等級
   */
  async mark_shame(tachyon, callname, level) {
    switch (level) {
      case 1:
        await tachyon.say_and_wait('이런 건……너무 부끄럽군.', true);
        await tachyon.say_and_wait(
          '평정심……평정심……실험이라고 생각하면 돼. 그래, 실험.',
          true,
        );
        break;
      case 2:
        await tachyon.say_and_wait(
          '안 되네……이제 실험이라는 말로는 얼버무릴 수 없어.',
          true,
        );
        await tachyon.say_and_wait(
          '이런 나도 사회의 일원이니……이런 일에는 수치심을 느낀다네.',
          true,
        );
        await tachyon.say_and_wait(
          '큭……그런데……어째서 기분이 좋지……내 몸은 어떻게 된 거야……',
          true,
        );
        break;
      case 3:
        await tachyon.say_and_wait('하하……아하하……', true);
        await tachyon.say_and_wait(
          '미친 과학자로서 남의 시선 따위는 신경 쓴 적 없었는데……자신이 이런 날을 맞을 줄은 생각도 못 했군.',
          true,
        );
        await tachyon.say_and_wait(
          '좋아, 어떻게 되든……이제 생각은 그만두겠네……',
          true,
        );
    }
  },
  /**
   * 反抗刻印を得る
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
   * @param {number} level 刻印の等級
   * @param {number} love 恋慕値
   */
  async mark_hate(tachyon, you, callname, level, love) {
    switch (level) {
      case 1:
        if (love < 50) {
          await tachyon.say_and_wait('………내 인내심에도 한계는 있다네.');
          await tachyon.say_and_wait([
            '그 한계를 시험하지 말게,',
            callname,
            '。',
          ]);
        } else {
          await tachyon.say_and_wait([callname, '……？']);
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 가장 가깝고 믿었던 사람에게 뺨을 맞은 듯 멍해져 있었다.',
          ]);
          await era.printAndWait(
            '분노보다 당혹감과 믿기지 않는다는 감정이 더 컸다.',
          );
        }
        break;
      case 2:
        if (love < 50) {
          await tachyon.say_and_wait('경고는 했네.');
          await tachyon.say_and_wait('세 번째는 없을 거야.');
        } else {
          await tachyon.say_and_wait([
            '어째서……',
            callname,
            '……내가 뭘 잘못했나?',
          ]);
          await tachyon.say_and_wait([
            '내가 잘못한 거겠지……말해 주게,',
            callname,
            '……',
          ]);
          await tachyon.say_and_wait(
            '그렇지 않다면……그렇지 않다면……이해할 수 없어……왜 이런 짓을!',
          );
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 비통한 눈으로 ',
            you.get_colored_name(),
            '를 바라보며, 영문을 모르겠다는 마음과 의심에 휩싸였다.',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            '를 향한 의문과 자신에 대한 의심.',
          ]);
        }
        break;
      case 3:
        if (love < 50) {
          await era.printAndWait([
            '순간 타는 듯한 감각이 ',
            you.get_colored_name(),
            '의 목을 거슬러 올라왔다.',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            '은 기침하다가 바닥에 떨어진 액체에 핏줄기가 섞여 있는 것을 보고 두려움에 떨었다.',
          ]);
          await tachyon.say_and_wait(['세 번째라네,', callname, '。']);
          await tachyon.say_and_wait(
            '감사하게……명목상 자네는 내 실험동물이니까.',
          );
          await tachyon.say_and_wait(
            '쓸 만한 실험체를 낭비하지 않는 것이 내 주의라네. 그러니 자신에게 아직 조금이나마 이용 가치가 있다는 데 감사하게……평정심……실험이라고 생각하면 돼, 그래, 실험.',
          );
          await tachyon.say_and_wait(
            '다만……실험체로서도 죽는 것보다 사는 게 더 괴로운 꼴을 보게 해 주겠네.',
          );
          await era.printAndWait([
            tachyon.get_colored_name(),
            '의 눈에는 혐오와 증오가 담겨 있다.',
          ]);
        } else {
          await tachyon.say_and_wait('아아……이제 됐네.');
          await tachyon.say_and_wait('이제 충분해.');
          await era.printAndWait('붉은 블라인드가 완전히 닫힌다.');
        }
    }
  },
};
