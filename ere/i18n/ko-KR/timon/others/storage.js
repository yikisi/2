/**
 * @file 所持道具 - システム提示
 * @author 黑奴队长
 */
const { print, printAndWait } = require('#/era-electron');

module.exports = {
  single_vehicle_info_template:
    '현재 혼자 이동할 때 %ITEM%을(를) 사용 중입니다! 장비를 해제할까요?',
  single_vehicle_canceled: '%ITEM% 장착을 해제했다',
  single_vehicle_replace_confirm_template:
    '현재 혼자 이동할 때 %ITEM%을(를) 사용 중입니다! %NEW%(으)로 바꿀까요?',
  single_vehicle_equip_confirm_template:
    '앞으로 %ITEM%을(를) 타고 혼자 이동할까요?',
  single_vehicle_equip_template:
    '%ITEM%을(를) 혼자 이동할 때 사용할 탈것으로 장착했다',

  multiple_vehicle_info_template:
    '현재 다른 사람과 외출할 때 %ITEM%을(를) 타고 있습니다! 장비를 해제할까요?',
  multiple_vehicle_canceled: '%ITEM% 장착을 해제했다',
  multiple_vehicle_replace_confirm_template:
    '현재 다른 사람과 외출할 때 %ITEM%을(를) 타고 있습니다! %NEW%(으)로 바꿀까요?',
  multiple_vehicle_equip_confirm_template:
    '앞으로 다른 사람과 외출할 때 %ITEM%을(를) 탈까요?',
  multiple_vehicle_equip_template:
    '【%ITEM%】을(를) 다인승 탈것으로 사용하기로 했다.',

  no_glass_template: '%LENS%을(를) 장착할 곳이 없습니다!',
  glass_have_lens_template: '이미 %GLASS%에 %LENS%을(를) 장착했습니다',
  glass_equip_confirm_template: '%GLASS%에 %LENS%을(를) 장착할까요?',
  glass_replace_confirm_template:
    '%GLASS%에 %NEW%을(를) 장착할까요? 기존 %LENS%은(는) 파괴됩니다!',
  glass_equip_template: '%GLASS%에 %LENS%을(를) 장착했다',
  glass_lens_broken_template: '%LENS%이(가) 파괴되었다',

  use_mind_reader_select: '사용할 우마 이야기 포인트 카드 수를 선택해 주세요.',
  use_mind_reader_confirm_template:
    '우마 이야기 포인트 카드 %COUNT%장을 사용할까요?',
  mind_reader_welcome_timer_template:
    '【우마 이야기】 앱에 오신 것을 환영합니다! 회원 자격은 %TIMER%주 뒤에 만료됩니다.',
  mind_reader_continue_timer_template:
    '【우마 이야기】 앱을 계속 이용해 주셔서 감사합니다! 회원 자격은 %TIMER%주 뒤에 만료됩니다.',
  mind_reader_notify_timer_template: '회원 자격은 %TIMER%주 뒤에 만료됩니다.',

  in_ero_item_common_description: '조교 중에만 사용 가능',
  before_ero_item_common_description: '조교 전에만 사용 가능',

  drop_confirm_template: '%ITEM%을(를) 버릴까요?',
  async drop_quilt() {
    await printAndWait('【투명한 이불】을 버렸다……');
    await printAndWait('……하지만 버리기 전에 안에서 지폐 몇 장이 나왔다……');
  },
  async drop_family_uma_s() {
    await printAndWait('【우마 점프 S 패밀리 팩】을 버렸다……');
    await printAndWait(
      '……그리고 화학 제제 불법 투기로 우마 코인 100의 벌금을 물었다',
    );
  },

  /**
   * @param {CharaTalk} chara
   * @param {string} iname
   */
  use_inmon_item(chara, iname) {
    print([
      chara.get_colored_name(),
      "에게 '배를 따뜻하게 한다'는 명목으로",
      iname,
      '을(를) 붙였다……',
    ]);
    print([
      chara.get_colored_name(),
      '의 아랫배에 복잡한 무늬의 음문이 떠올랐다……',
    ]);
  },

  /**
   * @param {CharaTalk} chara
   * @param {string} iname
   */
  get_chara_use_medicine: (chara, iname) => [
    chara.get_colored_name(),
    '은(는)',
    iname,
    '을(를) 복용했다',
  ],
  /** @param {CharaTalk} chara */
  get_chara_use_milk_medicine: (chara) => [
    chara.get_colored_name(),
    '은(는) 모유가 나오기 시작했다!',
  ],

  anti_condom_for_man: '남성은 【콘돔 용해제】를 사용할 수 없다',
  anti_condom_duplicate: '이미 【콘돔 용해제】를 사용하고 있다',
  anti_condom_confirm: '【콘돔 용해제】를 사용할까?',
  /**
   * @param {CharaTalk} you
   * @param {string} iname
   */
  async use_anti_condom(you, iname) {
    await printAndWait([
      you.get_colored_name(),
      '은(는) ',
      iname,
      '을(를) 몇 방울 음순 옆에 떨어뜨렸다',
    ]);
  },

  eat_chocolate_confirm: '【밸런타인 초콜릿】을 먹을까요?',
  /** @param {CharaTalk} you */
  get_eat_chocolate_disabled: (you) => [
    you.get_colored_name(),
    '은(는) 이미 배부르다……',
  ],

  /** @param {CharaTalk} chara */
  get_chara_pressure_down: (chara) => [
    chara.get_colored_name(),
    '의 스트레스가 줄었다',
  ],
  /** @param {CharaTalk} chara */
  get_chara_lust_down: (chara) => [
    chara.get_colored_name(),
    '의 성욕이 줄었다',
  ],
  /** @param {CharaTalk} chara */
  get_chara_all_down: (chara) => [
    chara.get_colored_name(),
    '은(는) 더 차분해졌다',
  ],
  /** @param {CharaTalk} chara */
  get_chara_lust_up: (chara) => [
    chara.get_colored_name(),
    '은(는) 조금 흥분했다',
  ],
  /** @param {CharaTalk} chara */
  get_chara_remove_fat: (chara) => [
    chara.get_colored_name(),
    '은(는) 이제 살이 찌지 않는다',
  ],
  /** @param {CharaTalk} chara */
  get_chara_remove_headache: (chara) => [
    chara.get_colored_name(),
    '은(는) 이제 편두통에 걸리지 않는다',
  ],
  /** @param {CharaTalk} chara */
  get_chara_drink_tea: (chara) => [
    chara.get_colored_name(),
    '은(는) 【건강차】를 마셨다',
  ],

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async drink_hate_drug(chara, you) {
    await printAndWait([
      chara.get_colored_name(),
      '에게 몰래 【혐오약】을 먹였다',
    ]);
    await printAndWait([
      chara.sex,
      '의',
      you.get_colored_name(),
      '에 대한 호감이 옅어진다……',
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async drink_limit_drug(chara, you) {
    await printAndWait([
      chara.get_colored_name(),
      '에게 몰래 【억제제】를 먹였다',
    ]);
    await printAndWait([
      chara.sex,
      '의',
      you.get_colored_name(),
      '을(를) 향한 연심이 억제되었다……',
    ]);
  },
  /** @param {CharaTalk} chara */
  get_chara_temp_remove_fat: (chara) => [
    chara.get_colored_name(),
    '은(는) 한동안 살이 찌지 않는다',
  ],
  /** @param {CharaTalk} chara */
  get_chara_temp_remove_headache: (chara) => [
    chara.get_colored_name(),
    '은(는) 한동안 편두통에 걸리지 않는다',
  ],

  to_sell_milk_template: '판매할 %ITEM%의 수량을 선택해 주세요.',
  /**
   * @param {PrintedSpan} count
   * @param {string} item
   */
  get_sell_milk_confirm: (count, item) => [
    '다크웹에서',
    count,
    '병의',
    item,
    '을(를) 팔까요?',
  ],
  /**
   * @param {PrintedSpan} count
   * @param {string} item
   * @param {PrintedSpan} money
   */
  get_sell_milk_result: (count, item, money) => [
    count,
    '병의',
    item,
    '을(를) 팔아,',
    money,
    '우마 코인을 얻었다',
  ],

  /** @param {CharaTalk} chara */
  async make_armpit_hair_longer(chara) {
    await printAndWait([
      chara.get_colored_name(),
      '에게 【발모 크림】을 사용했다',
    ]);
    await printAndWait([
      chara.get_colored_name(),
      '의 겨드랑이 털이 더 무성하게 자라게 되었다',
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {number} talent 脱毛後の腋毛成長等級
   */
  async make_armpit_hair_shorter(chara, talent) {
    await printAndWait([
      chara.get_colored_name(),
      '에게 【제모 크림】을 사용했다',
    ]);
    if (talent > 0) {
      await printAndWait([
        chara.get_colored_name(),
        '의 겨드랑이 털이 자라는 속도가 느려졌다',
      ]);
    } else {
      await printAndWait([
        chara.get_colored_name(),
        '의 겨드랑이가 털 없이 매끈해졌다!',
      ]);
    }
  },
  /** @param {CharaTalk} chara */
  async make_pubic_hair_longer(chara) {
    await printAndWait([
      chara.get_colored_name(),
      '에게 【국소 발모 크림】을 사용했다',
    ]);
    await printAndWait([
      chara.get_colored_name(),
      '의 음모가 더 무성하게 자라게 되었다',
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {number} talent 脱毛後の陰毛成長等級
   */
  async make_pubic_hair_shorter(chara, talent) {
    await printAndWait([
      chara.get_colored_name(),
      '에게 【국소 제모 크림】을 사용했다',
    ]);
    if (talent > 0) {
      await printAndWait([
        chara.get_colored_name(),
        '의 음모가 자라는 속도가 느려졌다',
      ]);
    } else if (chara.sex_code > 0) {
      await printAndWait([
        chara.get_colored_name(),
        '의 국소 부위가 털 없이 매끈해졌다!',
      ]);
    } else {
      await printAndWait([
        chara.get_colored_name(),
        '의 성기는 털 없이 매끈하고 보드라우며 사랑스러운 모습이 되었다!',
      ]);
    }
  },

  fixer_start: '【현실 침투 시작...】',
  fixer_stop: '【현실 법칙 복원 완료.】',
};
