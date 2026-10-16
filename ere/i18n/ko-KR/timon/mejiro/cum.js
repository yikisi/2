/**
 * @file メジロの呼び声 - システム提示
 * @author 黑奴队长
 */
const {
  get,
  input,
  print,
  printAndWait,
  printButton,
} = require('#/era-electron');

module.exports = {
  // 伴侣被呼唤状态下的提示
  calling_tip: '메지로가 부른다……',
  /**
   * 被呼唤状态下 5% 概率会替换外出界面所有按钮都变成目白城，并且修改按钮内容，就是该数组的内容
   * @type {string[]}
   */
  calling_buttons: ['메', '지', '로', '가', '부', '른다'],
  // 带了不是麦吉罗呼唤对象的伴侣
  calling_not_chara_tip: '메지로는 이 사람을 부르지 않았다',
  // 带了三女神
  calling_god_tip:
    '메지로는 세 여신 아래에 있지 않을지도 모르지만, 그 위에 있지도 않다',
  // 这周去过目白城了
  come_limited: '이번 주에는 더 이상 메지로 시티를 찾을 수 없다',
  /**
   * 进入目白城
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async come_in_mejiro_city(chara, you) {
    await printAndWait([
      you.get_colored_name(),
      '은(는) ',
      chara.get_colored_name(),
      '과(와) 함께 메지로 시티에 들어갔다……',
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} location
   * @returns {TextContent}
   */
  get_header: (chara, location) => [
    chara.get_colored_name(),
    '과(와) ',
    location,
    '에 있다',
  ],

  /**
   * 麦吉罗的的呼唤 - 迷雾
   */

  /** 进入目白城后提示处于迷雾探索 */
  async misty_notify() {
    await printAndWait('……그리고 안개가 두 사람을 삼켰다……');
  },
  /**
   * 探索移动阶段，提示性欲状态
   * @param {CharaTalk} chara 同伴
   * @param {CharaTalk} you プレイヤー
   * @param {number} progress 离开进度
   * @returns {TextContent[]}
   */
  get_misty_info(chara, you, progress) {
    const ret = [];
    const lust = Math.max(get('base:0:性欲'), get(`base:${chara.id}:性欲`));
    ret.push([
      you.get_colored_name(),
      '과(와) ',
      chara.get_colored_name(),
      '은(는) 안개에 싸인 도시에 있다……',
    ]);
    // 情动
    if (lust >= 7500) {
      ret.push(
        '주위에는 둘씩 짝을 지어 욕망에 빠진 사람들이 있다. 거리낌 없는 신음과 살갗이 부딪히는 소리, 물이 튀는 소리가 공간을 가득 채운다.',
      );
    } else if (lust >= 5000) {
      // 不安
      ret.push(
        '주위에는 얼굴이 흐릿한 연인들이 있다. 몸을 섞고 흔들며 낮은 교성과 물소리를 끊임없이 낸다.',
      );
    } else if (lust >= 4000) {
      ret.push(
        '주위에는 얼굴이 흐릿한 반려들이 있다. 서로 어루만지고 장난치며, 때때로 신음과 질척한 물소리를 낸다.',
      );
    } else if (lust >= 3000) {
      ret.push(
        '주변에는 짝을 이룬 연인들이 있다. 서로 안고 입맞추며 때때로 작은 사랑의 속삭임을 나눈다.',
      );
    } else if (lust >= 2000) {
      ret.push(
        '주변에는 그림자 같은 여행자들이 짝을 이루고 있다. 때때로 희미한 속삭임이 들린다.',
      );
    }
    if (progress === 1) {
      ret.push('앞쪽의 안개가 걷히며 밝고 정돈된 거리가 보인다.');
    } else if (progress >= 0.66) {
      ret.push(
        '앞쪽의 안개가 조금 옅어지고, 구름 사이로 햇빛이 드문드문 비친다.',
      );
    } else if (progress >= 0.33) {
      ret.push(
        '왔던 길은 이미 보이지 않는다. 앞으로 나아갈 수밖에 없는 듯하다.',
      );
    } else if (progress === 0) {
      ret.push(
        '큰길 하나가 앞으로 곧게 뻗어 있지만 어디로 이어지는지는 알 수 없다. 왔던 길에는 회색 안개뿐이다.',
      );
    }
    return ret;
  },
  // 以下是探索选项
  bt_slow_forward: '조심스럽게 전진 (위험 낮음, 성욕 +++, 체력 --)',
  bt_normal_forward: '평범하게 전진 (위험 보통, 성욕 ++, 체력 --)',
  bt_fast_forward: '대담하게 전진 (위험 높음, 성욕 +, 체력 --)',
  bt_slow_search: '꼼꼼하게 탐색 (위험 낮음, 성욕 ++, 체력 ---)',
  bt_normal_search: '평범하게 탐색 (위험 보통, 성욕 ++, 체력 --)',
  bt_fast_search: '대충 탐색 (위험 높음, 성욕 ++, 체력 -)',
  bt_rest: '멈춰서 휴식 (성욕 ++, 체력 +)',
  bt_surrender: '저항을 포기한다 (일심동체❤️)',
  /**
   * 性欲爆表，离开失败
   * @param {CharaTalk} chara 同伴
   * @param {CharaTalk} you プレイヤー
   * @returns {Promise<number[]>}
   */
  async fail_to_escape(chara, you) {
    const ret = [];
    await printAndWait([
      you.get_colored_name(),
      '과(와) ',
      chara.get_colored_name(),
      '은(는) 안개에 완전히 둘러싸였다……',
    ]);
    await printAndWait(
      '눈에 들어오는 것은 안개와 미친 듯이 몸을 섞는 연인들뿐이다. 그 얼굴에는 어딘가 두 사람의 모습이 겹쳐 보인다.',
    );
    await printAndWait(
      '성애의 소리가 다른 모든 소리를 덮고, 들이마시는 공기에는 음란한 냄새가 가득하다……',
    );
    // 焦躁
    if (get('base:0:性欲') >= 9000) {
      await printAndWait([
        you.get_colored_name(),
        '은(는) 머릿속에서 피가 울리는 소리를 들었고, 자제력은 야릇한 상상의 공세에 무너져 내렸다……',
      ]);
      await printAndWait([
        '옆의 ',
        chara.get_colored_name(),
        '도 마찬가지로 볼을 붉히고 다리를 모으고 있다. ',
        you.get_colored_name(),
        '은(는) 마침내 생각에 몸을 맡겼다……',
      ]);
    } else {
      printButton('그 안으로 가라앉는다 (「은총」+10)', 1);
      printButton('진정하려 한다 (체력 & 기력 +50%)', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait([
          you.get_colored_name(),
          '은(는) ',
          chara.get_colored_name(),
          '을(를) 보았다. 그 눈동자에는 어두운 물결이 일고 있었다……',
        ]);
        await printAndWait([
          you.get_colored_name(),
          '은(는) 스스로 욕망의 수렁에 발을 들여놓고 ',
        ]);
        await printAndWait([chara.sex, '와 함께 끝없이 가라앉았다……']);
      } else {
        await printAndWait([
          you.get_colored_name(),
          '은(는) ',
          chara.get_colored_name(),
          '을(를) 보았다. 그 눈동자에는 어두운 물결이 일고 있었다……',
        ]);
        await printAndWait([
          you.get_colored_name(),
          '은(는) 황급히 욕망의 수렁에서 발을 빼려 했지만 ',
        ]);
        await printAndWait('발을 디딜수록 더 깊이 빠져들어, 끝내 가라앉았다……');
      }
    }
    return ret;
  },
  /**
   * 离开目白城
   * @param {CharaTalk} chara 同伴
   * @param {CharaTalk} you プレイヤー
   * @param {string|false} vehicle 乗物。false なら複数用乗物なし
   * @param {boolean} success 成功したか
   * @returns {Promise<number[]>}
   */
  async leave_misty(chara, you, vehicle, success) {
    if (success) {
      if (typeof vehicle === 'string') {
        await printAndWait([
          you.get_colored_name(),
          '과(와) ',
          chara.get_colored_name(),
          '은(는) 안개를 벗어나 ',
          vehicle,
          '옆에 있었다.',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          '과(와) ',
          chara.get_colored_name(),
          '은(는) 안개를 벗어나 버스 옆에 있었다.',
        ]);
      }
    } else {
      await printAndWait([
        you.get_colored_name(),
        '이(가) 정신을 차리자 메지로 시티 밖의 긴 의자였다. 옆에서는 ',
        chara.get_colored_name(),
        '이(가) 자고 있었다.',
      ]);
      await printAndWait([
        chara.sex,
        '가 깨어난 뒤 두 사람은 어디선가 들려오는 만족스러운 웃음소리를 뒤로하고 메지로 시티를 떠났다……',
      ]);
      await printAndWait([
        '……하지만 그날 이후 ',
        chara.get_colored_name(),
        '은(는) 때때로 들릴 듯 말 듯한 속삭임을 듣는다……',
      ]);
    }
  },
  /** 恩宠自然扣光之后的提醒 */
  async notify_misty() {
    await printAndWait('메지로 시티는 다시 안개에 싸였다……');
  },
  /**
   * 被呼唤者 San 值掉光的提醒
   * @param chara
   * @returns {Promise<void>}
   */
  async notify_called(chara) {
    await printAndWait([
      chara.get_colored_name(),
      '은(는) 귓가의 속삭임에서 메지로의 부름을 들었다……',
    ]);
  },

  /**
   * 麦吉罗的的呼唤 - 街道
   */
  money_header_template: '현재 「은총」: %MONEY%',
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  print_city_info(chara, you) {
    print([
      you.get_colored_name(),
      '과(와) ',
      chara.get_colored_name(),
      '은(는) 깨끗한 거리에 서 있다.',
    ]);
    print('밝은 햇살 아래, 사람들이 짝을 지어 거리를 오간다.');
  },
  city_change_target_template: '서비스 대상 변경 (현재 %NAME%)',
  city_upgrade_max: '（MAX）',
  city_leave: '나가기',
  city_bt_beauty_salon: '「미용실」',
  city_bs_welcome: '어서 오세요! 미용 서비스를 받으실 분은 누구신가요?',
  city_bs_height_up_template: '키를 %HEIGHT%cm로 늘리기 (10「은총」)',
  city_bs_height_up_limit_tip: '더 이상 키울 수 없습니다',
  city_bs_height_down_template: '키를 %HEIGHT%cm로 줄이기 (10「은총」)',
  city_bs_height_down_limit_tip: '더 이상 키를 줄일 수 없습니다',
  city_bs_boob_up_template: '가슴 확대 (「은총」5, 현재 %CUP% Cup)',
  city_bs_boob_up_limit_tip: '［폭유］보다 크게 할 수 없습니다',
  city_bs_boob_down_template: '가슴 축소 (「은총」5, 현재 %CUP% Cup)',
  city_bs_boob_down_limit_tip: '이미 절벽입니다',
  city_bs_nipple_deeper: '유두 색소 침착 증가 (「은총」5)',
  city_bs_nipple_shallower: '유두 색소 침착 제거 (「은총」5)',
  city_bs_clean_milk: '［모유 체질］제거 (「은총」30)',
  city_bs_clean_milk_confirm:
    '직접 가한 작은 변경 사항도 사라집니다. 제거할까요?',
  city_bs_get_milk: '［모유 체질］획득 (「은총」30)',
  city_bs_re_virgin: '처녀성 복원 (「은총」20)',
  city_bs_penis_bigger_man_template: '음경 확대 (「은총」10, 현재 %SIZE%)',
  city_bs_penis_bigger_woman_template: '후타나리화 (「은총」10, 현재 %SIZE%)',
  city_bs_penis_bigger_limit_tip: '더 크게 할 수 없습니다',
  city_bs_penis_smaller_man_template: '음경 축소 (「은총」10, 현재 %SIZE%)',
  city_bs_penis_smaller_futa_template: '여체화 (「은총」15, 현재 %SIZE%)',
  city_bs_penis_smaller_male_limit_tip: '더 작게 할 수 없습니다',
  city_bs_penis_smaller_female_limit_tip: '원래 없습니다',
  city_bs_ero_deeper: '성기 색소 침착 증가 (「은총」5)',
  city_bs_ero_deeper_limit_tip: '이미 짙은 색의 성기입니다',
  city_bs_ero_shallower: '성기 색소 침착 감소 (「은총」5)',
  city_bs_ero_shallower_limit_tip: '이미 분홍색 성기입니다',
  city_bs_skin_shallower_template: '미백 (「은총」5, 현재 %SKIN%)',
  city_bs_skin_shallower_limit_tip: '피부를 더 하얗게 할 수 없습니다',
  city_bs_skin_deeper_template: '태닝 (「은총」5, 현재 %SKIN%)',
  city_bs_skin_deeper_limit_tip: '피부를 더 짙게 할 수 없습니다',
  city_bs_hair_color: '염색',
  city_bs_hair_color_confirm: '어떤 색으로 염색하시겠습니까?',
  city_bs_hair_color_current_suffix: '（현재 머리색）',
  city_bs_uma_template: '%UMA%로 변경 (「은총」100, 되돌릴 수 없음!)',
  city_bs_body_hair_color: '털 색 변경 (「은총」1)',
  city_bs_body_hair_color_current_suffix: '(현재 털 색)',
  city_bs_change_done: '네, 힘을 빼세요. 금방 끝납니다~',
  city_bs_bye: '다음에 봐요~',
  city_bt_hospital: '「병원」',
  /**
   * 目白城医院的开场白
   * @param {function(TextContent):Promise} waiter_say_cb 服务生说话的回调函数
   */
  async city_hospital_start(waiter_say_cb) {
    await waiter_say_cb(
      '여기는 메지로 시티 병원입니다! 감기와 열, 허리와 등의 통증, 손 떨림, 가슴 통증, 다리 떨림, 발 저림, 모두——',
    );
    await waiter_say_cb('……완치 보장하지는 않습니다……');
    await waiter_say_cb('농담이에요. 무엇을 도와드릴까요?');
  },
  city_hp_hp_medicine_template: '「파워 필」%PRICE%',
  city_hp_hp_medicine_price_template:
    '(%PRICE%「은총」: 후천 체력 상한 %NOW% → %NEXT%)',
  city_hp_tp_medicine_template: '「멘탈 크림」%PRICE%',
  city_hp_tp_medicine_price_template:
    '(%PRICE%「은총」: 후천 기력 상한 %NOW% → %NEXT%)',
  city_hp_b_scan: '초음파 검사 (「은총」-10)',
  /**
   * 目白城医院买药
   * @param {function(TextContent):Promise} waiter_say_cb 服务生说话的回调函数
   * @param {string} medicine 买的药
   */
  async city_hospital_medicine(waiter_say_cb, medicine) {
    await waiter_say_cb(['네 ', medicine, '하나~']);
    await waiter_say_cb('1주 뒤에 효과가 나타납니다~');
  },
  /**
   * 目白城做 B超
   * @param {function(TextContent):Promise} waiter_say_cb 服务生说话的回调函数
   * @param {CharaTalk} father 孩子的父亲
   * @param {CharaTalk} you プレイヤー
   */
  async city_hospital_b_scan(waiter_say_cb, father, you) {
    await waiter_say_cb('축하합니다. 아이가 얼마나 자랐는지 볼까요……');
    await printAndWait(
      [
        '＜기계 화면에 아이의 영상이 비친다. ',
        you.get_colored_name(),
        '은(는) 흑백 화면에서 어째서인지 ',
        father.get_colored_name(),
        '의 얼굴을 보았다＞',
      ],
      { isParagraph: true },
    );
    await waiter_say_cb('귀엽네요! 누군가 닮은 것 같나요?');
  },
  city_bt_massage: '「마사지 가게」',
  city_massage_welcome:
    '여기는 아로마 마사지 가게입니다! 조금 쉬었다 가시겠어요?',
  city_mg_get_talent: '한 부위의 성인 능력 강화 (「은총」60)',
  city_mg_get_talent_limit_tip: '성인 능력을 올릴 수 있는 부위가 없습니다',
  city_mg_trained_talent_template:
    '최고 감도로 조교 가능한 부위 수 증가 %PRICE%',
  city_mg_trained_talent_price_template: '(「은총」25: %NOW%부위 → %NEXT%부위)',
  /**
   * 目白城按摩店，得到名器特性
   * @param {CharaTalk} target
   * @param {PrintedSpan} talent
   * @returns {TextContent}
   */
  get_city_massage_get_talent: (target, talent) => [
    target.get_colored_name(),
    '은(는) ',
    talent,
    '을(를) 얻었다!',
  ],
  /**
   * 目白城按摩店，提高调教度
   * @param {CharaTalk} target
   * @returns {TextContent}
   */
  get_city_massage_upgrade_trained_talent: (target) => [
    target.get_colored_name(),
    '은(는) 마사지 후 몸이 더 매끄러워졌다……',
  ],
  city_mg_bye: '부디 좋은 여행 되세요~',
  city_bt_library: '「도서관」',
  city_library_welcome:
    '메지로 시티 대도서관에 오신 것을 환영합니다! 어떤 책을 빌리시겠습니까?',
  // プレイヤー学鋼の意志
  city_lb_self_get_im_template:
    '《키류인 비전의 조련술》 (「은총」10 → %NAME%이(가) ［강철 같은 의지］습득)',
  // プレイヤー忘鋼の意志
  city_lb_self_rm_im_template:
    '《나와 나의 우마무스메 아내》 (「은총」5 → %NAME%이(가) ［강철 같은 의지］망각)',
  // 同伴学鋼の意志
  city_lb_chara_get_im_template:
    '《신성한 한 걸음 반》 (「은총」5 → %NAME%이(가) ［강철 같은 의지］습득)',
  // 同伴忘鋼の意志
  city_lb_chara_rm_im_template:
    '《둔한 남자도 단번에 사로잡는다! 연애 코스의 비결》 (「은총」10 → %NAME%이(가) ［강철 같은 의지］망각)',
  // プレイヤー提高性技等级上限
  city_lb_update_abl_limit:
    '《성 기술 향상 입문——색욕의 고리 출판사 간행》 (「은총」66)',
  /**
   * 目白城图书馆看书的处理
   * @param {CharaTalk} target 学習対象
   * @param {boolean} get_or_rm 習得 or 遺忘 鋼の意志
   * @param {PrintedSpan} iron_mind 鋼の意志
   * @param {boolean} unlimit 技能上限を上げる本を読んだか
   * @returns {Promise<void>}
   */
  async handle_city_library(target, get_or_rm, iron_mind, unlimit) {
    if (unlimit) {
      await printAndWait('……무엇을 읽었지?');
    } else if (get_or_rm) {
      await printAndWait([
        target.get_colored_name(),
        '은(는) ',
        iron_mind,
        '을(를) 습득했다!',
      ]);
    } else {
      await printAndWait([
        target.get_colored_name(),
        '은(는) ',
        iron_mind,
        '을(를) 잊었다!',
      ]);
    }
  },
  city_lb_bye: '다음에 또 방문해 주세요~',
  city_bt_arcade: '「경품 가게」',
  city_ac_welcome:
    '메지로 시티에 오신 것을 환영합니다! 여기서 행운을 시험해 보시겠습니까?',
  city_ac_confirm: '2「은총」을 사용해 추첨하겠습니까?',
  /**
   * 目白城中大奖
   * @param {function(TextContent):Promise} waiter_say_cb 服务生说话的回调函数
   */
  async handle_ac_grand_prize(waiter_say_cb) {
    await waiter_say_cb('대~당~첨~');
    await waiter_say_cb('복권 금액의 열 배를 드립니다!');
    await printAndWait('「은총」20을 얻었다!');
  },
  city_bt_newspaper: '「신문사」',
  /**
   * 报社开头
   * @param {function(TextContent):Promise} waiter_say_cb 服务生说话的回调函数
   */
  async city_newspaper_start(waiter_say_cb) {
    await waiter_say_cb('어서 오세요~');
    await waiter_say_cb(
      '메지로 시티 신문사는 귀하의 명예를 회복하고 명성을 널리 알리는 데 도움을 드릴 수 있습니다',
    );
  },
  city_ns_welcome: '무엇을 도와드릴까요?',
  city_ns_button_template: '%PRICE%「은총」→ %HONOUR1%–%HONOUR2% 명성',
  city_ns_result_template: '알겠습니다. 명성 %HONOUR%로 맞춰드릴게요~',
  city_ns_bye: '이용해 주셔서 감사합니다!',
  city_bt_bank: '「은행」',
  city_bn_start: '어서 오세요~',
  city_bn_welcome: '인출 업무를 처리하시겠습니까?',
  city_bn_button_template: '%PRICE%「은총」→ %MONEY1%–%MONEY2% 우마코인',
  city_bn_result_template: '알겠습니다. %MONEY% 우마코인을 인출해 드릴게요~',
  city_bn_bye: '안녕히 가세요~',
  city_bt_gov: '「시청」',
  /**
   * 市政府，转换目白城形态
   * @param {CharaTalk} mayor
   * @returns {Promise<boolean>}
   */
  async handle_gov(mayor) {
    await mayor.say_and_wait('메지로 시티에 오신 것을 환영합니다.');
    await mayor.say_and_wait('무엇을 도와드릴까요?');
    printButton('「제발, 봐주세요……」', 1);
    printButton('괜찮아요', 2);
    if ((await input()) === 1) {
      print(
        '(이 작업은 되돌릴 수 없습니다. 메지로 시티의 방침이 영구적으로 바뀝니다!)',
        {
          color: 'red',
        },
      );
      printButton('확인', 1);
      printButton('그만둔다', 2);
      if ((await input()) === 1) {
        await mayor.say_and_wait('알겠습니다.');
        await mayor.say_and_wait(
          '다음에 오실 때 메지로 시티는 원하시는 모습이 되어 있을 것입니다.',
        );
        await mayor.say_and_wait('다시 뵙겠습니다.');
        return true;
      }
    }
    await mayor.say_and_wait(
      '동반자분과 함께 메지로 시티를 즐기시길 바랍니다~',
    );
    return false;
  },
  async city_notify_misty() {
    await printAndWait(
      '이 가게를 나서자, 눈앞에는 거리가 아닌 교외의 풍경이 펼쳐져 있었다',
    );
    await printAndWait(
      '뒤를 돌아보니, 메지로 시티는 다시 안개에 휩싸여 있었다……',
    );
  },
};
