/**
 * @file 調教指令の説明 - 汎用 - システム提示
 * <br>指令の意味は #/i18n/zh-CN/sex/actions
 * @author 黑奴队长
 */
const { get, printAndWait } = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  // コミュニケーション
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async go_on(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 저항을 멈추고,',
      defender.get_colored_name(),
      '이(가) 하는 대로 두었다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async kiss(attacker, defender, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      is_first ? '' : '이어서',
      '은(는) ',
      defender.get_colored_name(),
      '의 입술에 입을 맞췄다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async french_kiss(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게 깊게 입을 맞췄다】',
    ]);
  },
  /** @param {CharaTalk} attacker 主動側 */
  async relax(attacker) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 호흡을 가다듬으려 했다】',
    ]);
  },
  /** @param {CharaTalk} attacker 主動側 */
  async sleep(attacker) {
    const buffer = [
      () =>
        printAndWait([
          '【',
          attacker.get_colored_name(),
          '은(는) 반응하지 않았다】',
        ]),
    ];
    if (get(`status:${attacker.id}:沉睡`) > 0) {
      buffer.push(() =>
        printAndWait([
          '【',
          attacker.get_colored_name(),
          '은(는) 조용히 자고 있다】',
        ]),
      );
    }
    if (get(`status:${attacker.id}:马跳S`) > 0) {
      buffer.push(
        () =>
          printAndWait([
            '【',
            attacker.get_colored_name(),
            '은(는) 조금 거칠게 숨을 쉬고 있다】',
          ]),
        () =>
          printAndWait([
            '【',
            attacker.get_colored_name(),
            '은(는) 잠결에 달콤한 숨소리를 흘리고 있다】',
          ]),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async lure(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '을(를) 도발했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async talk(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '과(와) 잡담했다】',
    ]);
  },
  /** @param {CharaTalk} attacker 主動側 */
  async passive_switch(attacker) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 더는 계속하고 싶지 않은 듯하다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async active_switch(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 주도권을',
      defender.get_colored_name(),
      '에게 넘겼다】',
    ]);
  },
  /** @param {CharaTalk} attacker 主動側 */
  async resist(attacker) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 주도권을 잡기 위해 저항했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async gargle(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '과(와) 함께 입을 헹궜다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async wipe_body(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 자신과',
      defender.get_colored_name(),
      '의 몸을 닦았다】',
    ]);
  },

  // 愛撫
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async pet_ear(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 귀를 쓰다듬었다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async pull_ear(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 귀를 잡아당겼다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async pet_breast(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 가슴을 주물렀다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async pet_nipple(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 유두를 만지작거렸다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async pet_clitoris(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 음란한 음핵을 애무했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async finger_fuck(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 손가락을 ',
      defender.get_colored_name(),
      '의 음부에 집어넣었다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async prepare_virgin(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 음순을 벌렸다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async stimulate_g_spot_by_finger(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 손가락으로 ',
      defender.get_colored_name(),
      '의 항문을 벌렸다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async pet_anal(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 살며시 ',
      defender.get_colored_name(),
      '의 항문을 어루만졌다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async prepare_anal(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 항문을 어루만졌다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async pet_leg(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 허벅지를 애무했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async pet_tail(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 꼬리를 쓰다듬었다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async pull_tail(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 꼬리를 잡아당겼다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async cunnilingus(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 음란한 음핵을 핥았다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_cunnilingus(attacker, defender, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      is_first
        ? '에게 음핵을 핥아 달라고 부탁했다】'
        : '에게 음핵을 계속 핥아 달라고 부탁했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async force_cunnilingus(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 음핵을 ',
        defender.get_colored_name(),
        '의 얼굴에 눌러 댔다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 음핵으로 ',
        defender.get_colored_name(),
        '의 입술과 혀를 문질렀다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async suck_virgin(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 혀를 ',
        defender.get_colored_name(),
        '의 음부에 집어넣었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 혀로 ',
        defender.get_colored_name(),
        '의 음부를 자극했다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_suck_virgin(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 음부를 핥아 달라고 부탁했다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 음부를 계속 핥아 달라고 부탁했다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async force_suck_virgin(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 음부를 ',
        defender.get_colored_name(),
        '의 입술에 눌러 댔다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 음부로 ',
        defender.get_colored_name(),
        '의 입술과 혀를 문질렀다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 육봉을 물어 달라고 부탁했다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 육봉을 핥아 달라고 부탁했다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_deep_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 육봉을 깊숙이 물어 달라고 부탁했다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 목구멍 깊은 곳으로 육봉에 봉사해 달라고 부탁했다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async force_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 육봉을 ',
        defender.get_colored_name(),
        '의 입 안에 집어넣었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 육봉으로 ',
        defender.get_colored_name(),
        '의 입술과 혀를 문질렀다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async force_deep_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 육봉을 ',
        defender.get_colored_name(),
        '의 목구멍 깊숙이 집어넣었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 목구멍 깊은 곳을 휘저었다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 육봉을 입에 물었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 육봉을 핥고 있다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async deep_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 깊숙이 ',
        defender.get_colored_name(),
        '의 육봉을 입에 물었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 목구멍 깊은 곳으로 ',
        defender.get_colored_name(),
        '의 육봉에 봉사했다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_hand_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 육봉을 손으로 쥐어 달라고 부탁했다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 육봉을 계속 훑어 달라고 부탁했다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_hand_and_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 육봉을 어루만지면서 귀두를 물어 달라고 부탁했다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 육봉을 훑으면서 귀두를 빨아 달라고 부탁했다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async force_hand_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 육봉을 ',
        defender.get_colored_name(),
        '의 손 안으로 뻗었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 육봉으로 ',
        defender.get_colored_name(),
        '의 양손을 문질렀다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async force_hand_and_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 육봉을 ',
        defender.get_colored_name(),
        '의 양손을 헤치고 입 안에 집어넣었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '의 육봉은 ',
        defender.get_colored_name(),
        '의 손을 치면서 ',
        defender.get_colored_name(),
        '의 입술과 혀를 문질렀다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async hand_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 육봉을 손에 쥐었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 육봉을 훑었다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async hand_and_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 어루만지면서 ',
        defender.get_colored_name(),
        '의 육봉에 입을 맞췄다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 만지작거리면서 ',
        defender.get_colored_name(),
        '의 육봉을 핥았다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_tit_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 양 가슴으로 육봉을 끼워 달라고 부탁했다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 양 가슴으로 육봉에 봉사해 달라고 부탁했다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_tit_and_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 가슴으로 육봉을 문지르면서 귀두에 입을 맞춰 달라고 부탁했다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 가슴으로 육봉을 문지르면서 귀두를 빨아 달라고 부탁했다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async fuck_tit(attacker, defender, is_first) {
    if (is_first && defender.sex_code !== 1)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 가슴을 모아 육봉을 끼웠다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 육봉으로 ',
        defender.get_colored_name(),
        '의 가슴을 문질렀다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async fuck_tit_and_mouth(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 육봉을 ',
        defender.get_colored_name(),
        '의 양 가슴 사이를 지나 입 안에 집어넣었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 육봉으로 ',
        defender.get_colored_name(),
        '의 양 가슴을 문지르며 ',
        defender.get_colored_name(),
        '의 입술과 혀를 문질렀다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async tit_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 양 가슴을 모아 ',
        defender.get_colored_name(),
        '의 육봉을 끼웠다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 양 가슴을 위아래로 움직여 ',
        defender.get_colored_name(),
        '의 육봉을 문질렀다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async tit_and_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 양 가슴으로 ',
        defender.get_colored_name(),
        '의 육봉을 문지르면서 귀두를 물었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 양 가슴으로 ',
        defender.get_colored_name(),
        '의 육봉을 문지르면서 귀두를 빨아들였다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async suck_anal(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 항문을 핥고 있다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async suck_nipple(attacker, defender, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      is_first ? '은(는) ' : '은(는) ',
      defender.get_colored_name(),
      is_first ? '의 유두를 입에 물었다】' : '의 유두를 빨아들였다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async bite_nipple(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 유두를 살짝 깨물었다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async ask_milk_and_hand_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게 유두를 ',
      attacker.get_colored_name(),
      '의 입에 물려 주면서 육봉을 어루만져 달라고 부탁했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async milk(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 유두를 ',
        defender.get_colored_name(),
        '의 입에 넣었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 자신의 유두를 빨게 했다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async ask_bite_nipple(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게 자신의 유두를 깨물어 달라고 부탁했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async milk_and_hand_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게 유두를 빨게 하면서 ',
      defender.get_colored_name(),
      '의 육봉을 어루만졌다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_non_penetrative(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 허벅지 안쪽으로 ',
        attacker.get_colored_name(),
        '의 육봉을 끼워 달라고 부탁했다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 허벅지 안쪽으로 ',
        attacker.get_colored_name(),
        '의 육봉을 문질러 달라고 부탁했다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async non_penetrative(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 허벅지 안쪽으로 ',
        defender.get_colored_name(),
        '의 육봉을 끼웠다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 허벅지 안쪽으로 ',
        defender.get_colored_name(),
        '의 육봉을 문질렀다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async sixty_nine(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '와(과) ',
        defender.get_colored_name(),
        '은(는) 식스나인 자세를 취했다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '와(과) ',
        defender.get_colored_name(),
        '은(는) 식스나인 자세로 서로에게 봉사했다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_hair_fuck(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 머리카락으로 육봉을 감싸 달라고 부탁했다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 손바닥과 머리카락으로 육봉을 주물러 달라고 부탁했다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async force_hair_fuck(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 머리카락으로 육봉을 감쌌다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 육봉으로 ',
        defender.get_colored_name(),
        '의 머리카락을 문질렀다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async hair_fuck(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 머리카락으로 ',
        defender.get_colored_name(),
        '의 육봉을 감쌌다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 손바닥과 머리카락으로 ',
        defender.get_colored_name(),
        '의 육봉을 주물렀다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async ask_armpit_intercourse(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게 겨드랑이로 ',
      attacker.get_colored_name(),
      '의 육봉을 문질러 달라고 부탁했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async force_armpit_intercourse(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 팔을 들어 올려 육봉으로 문질렀다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 계속해서 육봉으로 ',
        defender.get_colored_name(),
        '의 겨드랑이를 문질렀다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async armpit_intercourse(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 겨드랑이로 ',
      defender.get_colored_name(),
      '의 육봉을 문질렀다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async ask_foot_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게 양발로 육봉을 밟아 달라고 부탁했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async force_foot_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 육봉을 ',
      defender.get_colored_name(),
      '의 양발 사이로 찔러 넣었다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async foot_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '의 양발이 ',
        defender.get_colored_name(),
        '의 육봉 위에 올라갔다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 양발로 ',
        defender.get_colored_name(),
        '의 육봉을 밟았다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async ask_tail_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게 꼬리로 육봉에 봉사해 달라고 부탁했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async force_tail_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 꼬리를 끌어당겨 육봉에 감았다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async tail_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 꼬리로 ',
      defender.get_colored_name(),
      '의 육봉을 감쌌다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async tribbing(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 자신의 아랫도리를 ',
        defender.get_colored_name(),
        '의 아랫도리에 대고 음핵을 서로 문질렀다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 계속해서 ',
        defender.get_colored_name(),
        '와(과) 음핵을 서로 문질렀다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async self_pet_nipple(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 앞에서 자신의 가슴을 주물렀다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async self_hand_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 앞에서 자신의 육봉을 훑었다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async self_pet_clitoris(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 앞에서 자신의 음핵을 만지작거렸다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async self_finger_fuck(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 앞에서 자신의 음부를 만지작거렸다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async self_pet_anal(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 앞에서 자신의 항문을 만지작거렸다】',
    ]);
  },

  // 性交
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async missionary(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 정상위로 ',
        defender.get_colored_name(),
        '의 음부에 집어넣었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 정상위로 ',
        defender.get_colored_name(),
        '의 음부를 찌르고 있다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async missionary_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 정상위로 ',
        defender.get_colored_name(),
        '의 항문에 집어넣었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 정상위로 ',
        defender.get_colored_name(),
        '의 항문을 찌르고 있다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async doggy_style(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 후배위로 ',
        defender.get_colored_name(),
        '의 음부에 집어넣었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 후배위로 ',
        defender.get_colored_name(),
        '의 음부를 찌르고 있다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async doggy_style_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 후배위로 ',
        defender.get_colored_name(),
        '의 항문에 집어넣었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 후배위로 ',
        defender.get_colored_name(),
        '의 항문을 찌르고 있다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async sitting(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '와(과) 마주 보고 앉아 육봉을 ',
        defender.get_colored_name(),
        '의 음부에 집어넣었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '와(과) 마주 보고 앉아 육봉으로 음부를 찔렀다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async sitting_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '와(과) 마주 보고 앉아 육봉을 ',
        defender.get_colored_name(),
        '의 항문에 집어넣었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '와(과) 마주 보고 앉아 육봉으로 항문을 찔렀다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async hug_sitting(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 등을 돌린 ',
        defender.get_colored_name(),
        '을(를) 안고 앉아 육봉을 음부에 집어넣었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '을(를) 안고 앉아 육봉으로 음부를 찔렀다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async hug_sitting_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 등을 돌린 ',
        defender.get_colored_name(),
        '을(를) 안고 앉아 육봉을 항문에 집어넣었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '을(를) 안고 앉아 육봉으로 항문을 찔렀다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async standing(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '와(과) 마주 보고 서서 육봉을 음부에 집어넣었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 마주 보고 서서 육봉으로 ',
        defender.get_colored_name(),
        '의 음부를 찌르고 있다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async standing_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '와(과) 마주 보고 서서 육봉을 항문에 집어넣었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 마주 보고 서서 육봉으로 ',
        defender.get_colored_name(),
        '의 항문을 찌르고 있다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async hug_standing(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 선 채로 ',
        defender.get_colored_name(),
        '을(를) 안아 육봉을 음부에 집어넣었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 뒤에서 육봉으로 ',
        defender.get_colored_name(),
        '의 음부를 찌르고, ',
        defender.get_colored_name(),
        '은(는) 힘없이 양손으로 벽을 짚고 있다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async hug_standing_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 선 채로 ',
        defender.get_colored_name(),
        '을(를) 안아 육봉을 항문에 집어넣었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 뒤에서 육봉으로 ',
        defender.get_colored_name(),
        '의 항문을 찌르고, ',
        defender.get_colored_name(),
        '은(는) 힘없이 양손으로 벽을 짚고 있다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async suspended_congress(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '을(를) 안아 올려 육봉을 음부에 집어넣었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '의 육봉이 ',
        defender.get_colored_name(),
        '의 허공에 뜬 음부를 찌르고 있다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async suspended_congress_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '을(를) 안아 올려 육봉을 항문에 집어넣었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '의 육봉이 ',
        defender.get_colored_name(),
        '의 허공에 뜬 항문을 찌르고 있다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async fucked_suspended_congress(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '을(를) 안아 올려 음부로 ',
        defender.get_colored_name(),
        '의 육봉을 받아들였다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 자신의 음부로 ',
        defender.get_colored_name(),
        '의 허공에 뜬 육봉을 받아들였다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async fucked_suspended_congress_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '을(를) 안아 올려 항문으로 ',
        defender.get_colored_name(),
        '의 육봉을 받아들였다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 자신의 항문으로 ',
        defender.get_colored_name(),
        '의 허공에 뜬 육봉을 받아들였다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async hug_suspended_congress(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '을(를) 등이 자신을 향하도록 안아 올려 육봉을 음부에 집어넣었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '의 육봉이 등을 돌린 ',
        defender.get_colored_name(),
        '의 허공에 뜬 음부를 찌르고 있다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async hug_suspended_congress_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '을(를) 등이 자신을 향하도록 안아 올려 육봉을 항문에 집어넣었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '의 육봉이 등을 돌린 ',
        defender.get_colored_name(),
        '의 허공에 뜬 항문을 찌르고 있다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_cowgirl(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 올라타 앉아서 음부로 육봉을 받아 달라고 부탁했다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 위에 있는 ',
        defender.get_colored_name(),
        '에게 음부로 육봉을 계속 받아 달라고 부탁했다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_cowgirl_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 올라타 앉아서 항문으로 육봉을 받아 달라고 부탁했다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 위에 있는 ',
        defender.get_colored_name(),
        '에게 항문으로 육봉을 계속 받아 달라고 부탁했다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async ask_stimulate_glans_by_virgin(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게 음부로 육봉을 받아 달라고 부탁했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async ask_stimulate_glans_by_anal(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게 항문으로 육봉을 받아 달라고 부탁했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async stimulate_g_spot(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 육봉으로 ',
      defender.get_colored_name(),
      '의 G스폿을 찔렀다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async stimulate_large_intestine(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 육봉으로 ',
      defender.get_colored_name(),
      '의 S상 결장을 찔렀다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async stimulate_womb(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 육봉으로 항문 너머 ',
      defender.get_colored_name(),
      '의 자궁을 찔렀다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_fuck(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 자신의 음부에 넣어 달라고 부탁했다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 위에 있는 ',
        defender.get_colored_name(),
        '에게 자신의 음부를 계속 찔러 달라고 부탁했다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_fuck_anal(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 자신의 항문에 넣어 달라고 부탁했다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 위에 있는 ',
        defender.get_colored_name(),
        '에게 자신의 항문을 계속 찔러 달라고 부탁했다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async cowgirl(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 올라타 음부로 육봉을 받아들였다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 올라타 음부로 육봉을 받아들이고 있다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async cowgirl_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 올라타 항문으로 육봉을 받아들였다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 올라타 항문으로 육봉을 받아들이고 있다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async stimulate_glans_by_virgin(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 음부로 ',
      defender.get_colored_name(),
      '의 육봉을 받아들였다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async stimulate_glans_by_anal(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 항문으로 ',
      defender.get_colored_name(),
      '의 육봉을 받아들였다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async ask_stimulate_g_spot(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게 육봉으로 G스폿을 자극해 달라고 부탁했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async ask_stimulate_large_intestine(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게 육봉으로 S상 결장을 자극해 달라고 부탁했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async ask_stimulate_womb(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게 육봉으로 항문 너머 자궁을 자극해 달라고 부탁했다】',
    ]);
  },

  // 性虐

  async insult(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '을(를) 욕했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_insult(attacker, defender, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      is_first
        ? '에게 자신을 욕해 달라고 부탁했다】'
        : '에게 자신을 계속 욕해 달라고 부탁했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async hit_anal(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 엉덩이를 때렸다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async hit_anal_hard(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 세게 ',
      defender.get_colored_name(),
      '의 엉덩이를 때렸다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_hit_anal(attacker, defender, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      is_first
        ? '에게 자신의 엉덩이를 때려 달라고 부탁했다】'
        : '에게 자신의 엉덩이를 계속 때려 달라고 부탁했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async hit_breast(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 가슴을 때렸다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async hit_breast_hard(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 세게 ',
      defender.get_colored_name(),
      '의 가슴을 때렸다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_hit_breast(attacker, defender, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      is_first
        ? '에게 자신의 가슴을 때려 달라고 부탁했다】'
        : '에게 자신의 가슴을 계속 때려 달라고 부탁했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async hit_face(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 뺨을 때렸다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async hit_face_hard(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 뺨을 세게 때렸다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async hit_face_by_penis(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 육봉으로 ',
      defender.get_colored_name(),
      '의 뺨을 때렸다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_hit_face(attacker, defender, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      is_first
        ? '에게 자신의 뺨을 때려 달라고 부탁했다】'
        : '에게 자신의 뺨을 계속 때려 달라고 부탁했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async virgin_foot_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 음부를 짓밟았다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_virgin_foot_job(attacker, defender, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      is_first
        ? '에게 자신의 음부를 밟아 달라고 부탁했다】'
        : '에게 자신의 음부를 계속 밟아 달라고 부탁했다】',
    ]);
  },

  // 複数
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   */
  async ask_supporter_prepare_virgin(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '의 지시에,',
      supporter.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 음순을 벌렸다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   */
  async ask_double_suck_nipple(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '와(과) ',
      supporter.get_colored_name(),
      '에게 함께 자신의 유두를 핥아 달라고 부탁했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   */
  async double_suck_nipple(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '와(과) ',
      supporter.get_colored_name(),
      '은(는) 함께 ',
      defender.get_colored_name(),
      '의 유두를 핥았다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   */
  async ask_double_blow_job(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      supporter.get_colored_name(),
      '와(과) ',
      defender.get_colored_name(),
      '에게 함께 자신의 육봉에 봉사해 달라고 부탁했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   */
  async double_blow_job(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '와(과) ',
      supporter.get_colored_name(),
      '은(는) 함께 ',
      defender.get_colored_name(),
      '의 육봉에 봉사했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   */
  async ask_double_cunnilingus(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '와(과) ',
      supporter.get_colored_name(),
      '에게 함께 자신의 음핵을 핥아 달라고 부탁했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   */
  async double_cunnilingus(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '와(과) ',
      supporter.get_colored_name(),
      '은(는) 함께 ',
      defender.get_colored_name(),
      '의 음핵을 핥았다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   */
  async ask_double_suck_virgin(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '와(과) ',
      supporter.get_colored_name(),
      '에게 함께 혀로 자신의 음부를 만져 달라고 부탁했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   */
  async double_suck_virgin(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '와(과) ',
      supporter.get_colored_name(),
      '은(는) 함께 혀로 ',
      defender.get_colored_name(),
      '의 음부를 자극했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   */
  async ask_double_tit_job(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '와(과) ',
      supporter.get_colored_name(),
      '에게 함께 양 가슴으로 자신의 육봉에 봉사해 달라고 부탁했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   */
  async double_tit_job(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '와(과) ',
      supporter.get_colored_name(),
      '은(는) 함께 가슴으로 ',
      defender.get_colored_name(),
      '의 육봉에 봉사했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_double_cowgirl(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '와(과) ',
      supporter.get_colored_name(),
      is_first
        ? '에게 번갈아 가며 음부로 육봉을 받아 달라고 부탁했다】'
        : '에게 번갈아 가며 음부로 육봉을 계속 받아 달라고 부탁했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_double_fuck(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '와(과) ',
      supporter.get_colored_name(),
      is_first
        ? '에게 번갈아 가며 자신의 음부를 찔러 달라고 부탁했다】'
        : '에게 번갈아 가며 자신의 음부를 계속 찔러 달라고 부탁했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_double_penetration(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '와(과) ',
      supporter.get_colored_name(),
      is_first
        ? '에게 앞뒤에서 자신의 음부와 항문을 찔러 달라고 부탁했다】'
        : '에게 앞뒤에서 자신의 음부와 항문을 계속 찔러 달라고 부탁했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_spit_roast(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '와(과) ',
      supporter.get_colored_name(),
      is_first
        ? '에게 입과 음부를 동시에 찔러 달라고 부탁했다】'
        : '에게 입과 음부를 동시에 계속 찔러 달라고 부탁했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_spit_roast_anal_sex(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '와(과) ',
      supporter.get_colored_name(),
      is_first
        ? '에게 입과 항문을 동시에 찔러 달라고 부탁했다】'
        : '에게 입과 항문을 동시에 계속 찔러 달라고 부탁했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_cunnilingus_with_fucking(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      supporter.get_colored_name(),
      is_first ? '에게 자신이 삽입하는 ' : '에게 자신이 찌르는 ',
      defender.get_colored_name(),
      '의 음란한 음핵을 핥아 달라고 부탁했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 連続行動の初回か
   */
  async fuck_69(attacker, defender, supporter, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '와(과) ',
        supporter.get_colored_name(),
        '에게 식스나인 자세를 취하면 자신이 삽입하게 해 달라고 부탁했다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 계속해서 ',
        supporter.get_colored_name(),
        '와(과) 식스나인 자세로 서로 입으로 봉사하는 ',
        defender.get_colored_name(),
        '을(를) 계속 찔렀다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   */
  async double_cowgirl(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '와(과) ',
      supporter.get_colored_name(),
      '의 음부가 번갈아 가며 ',
      defender.get_colored_name(),
      '의 육봉을 받아들였다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 連続行動の初回か
   */
  async double_fuck(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '와(과) ',
      supporter.get_colored_name(),
      is_first ? '은(는) 번갈아 가며 ' : '은(는) 계속 번갈아 가며 ',
      defender.get_colored_name(),
      '의 음부를 찌르고 있다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 連続行動の初回か
   */
  async double_penetration(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '와(과) ',
      supporter.get_colored_name(),
      is_first ? '은(는) 앞뒤에서 ' : '은(는) 계속 앞뒤에서 ',
      defender.get_colored_name(),
      '의 음부와 항문을 찌르고 있다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 連続行動の初回か
   */
  async spit_roast(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '와(과) ',
      supporter.get_colored_name(),
      is_first ? '은(는) 위아래에서 ' : '은(는) 계속 위아래에서 ',
      defender.get_colored_name(),
      '의 입과 음부를 찌르고 있다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 連続行動の初回か
   */
  async spit_roast_anal_sex(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '와(과) ',
      supporter.get_colored_name(),
      is_first ? '은(는) 위아래에서 ' : '은(는) 계속 위아래에서 ',
      defender.get_colored_name(),
      '의 입과 항문을 찌르고 있다】',
    ]);
  },

  // 道具
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} part 潤滑する部位
   */
  async use_lubricating_fluid(attacker, defender, part) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 윤활액을 ',
      defender.get_colored_name(),
      '의',
      part,
      '에 발랐다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param _
   * @param {PrintedSpan} part 潤滑する部位
   */
  async use_lubricating_fluid_self(attacker, _, part) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 윤활액을 자신의 ',
      part,
      '에 발랐다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} medicine 薬
   */
  async use_medicine(attacker, defender, medicine) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게',
      medicine,
      '을(를) 먹였다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param _
   * @param {PrintedSpan} medicine 薬
   */
  async use_medicine_self(attacker, _, medicine) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      medicine,
      '을(를) 복용했다】',
    ]);
  },
  /** @param {CharaTalk} attacker 主動側 */
  async condom(attacker) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 자신의 육봉에 콘돔을 씌웠다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async other_condom(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 육봉에 콘돔을 씌웠다】',
    ]);
  },
  /**
   * 性玩具の持続効果。ローターやクリップなど部位に固定する玩具
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} part 部位
   * @param {string} verb 玩具を付ける動詞。ローターは秘部へ入れる、乳首へ付ける、など
   * @param {PrintedSpan} item 性玩具
   */
  async item_effect(attacker, defender, part, verb, item) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' ',
      verb,
      '한 ',
      item,
      '이(가) 계속해서 ',
      defender.get_colored_name(),
      '의 ',
      part,
      '을(를) 자극하고 있다】',
    ]);
  },
  /**
   * 受動側に性玩具を付ける。ローターやクリップなど部位に固定する玩具
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} part 部位
   * @param {string} verb 玩具を付ける動詞。ローターは秘部へ入れる、乳首へ付ける、など
   * @param {PrintedSpan} item 性玩具
   */
  async equip_item(attacker, defender, part, verb, item) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      item,
      '을(를)',
      defender.get_colored_name(),
      '의',
      part,
      '에',
      verb,
      '했다】',
    ]);
  },
  /**
   * 受動側に性玩具を付ける。アイマスクや首輪など部位に固定しない玩具
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} item 性玩具
   */
  async equip_other_item(attacker, defender, item) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '에게',
      item,
      '을(를) 착용시켰다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} part 潤滑する部位
   */
  async use_electric_stunner(attacker, defender, part) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 ',
      part,
      '을(를) 전기로 자극했다】',
    ]);
  },
  /** @param {CharaTalk} attacker 主動側 */
  async use_mirror(attacker) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 전신 거울을 세웠다】',
    ]);
  },
  /** @param {CharaTalk} attacker 主動側 */
  async take_off_mirror(attacker) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 전신 거울을 치웠다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} part 部位
   * @param {PrintedSpan} item 性玩具
   */
  async take_off_item(attacker, defender, part, item) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의',
      part,
      '에서',
      item,
      '을(를) 떼어 냈다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {PrintedSpan} part 部位
   * @param {PrintedSpan} item 性玩具
   */
  async take_off_item_self(attacker, part, item) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 자신의',
      part,
      '에서',
      item,
      '을(를) 떼어 냈다】',
    ]);
  },
};
