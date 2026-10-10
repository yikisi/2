/**
 * @file 調教指令の説明 - 強姦 - システム提示
 * @author 黑奴队长
 */
const { printAndWait } = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async kiss(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 억지로 ',
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
      '은(는) 억지로 ',
      defender.get_colored_name(),
      '의 입 안 깊은 곳을 탐했다】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async relax(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 여유롭게',
      defender.get_colored_name(),
      '의 현재 모습을 바라보고 있다】',
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
      '은(는)',
      defender.get_colored_name(),
      '에게 말을 걸었다】',
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
        '은(는) 억지로 음핵을 ',
        defender.get_colored_name(),
        '의 얼굴에 눌러 댔다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 억지로 음핵으로 ',
        defender.get_colored_name(),
        '의 입술과 혀를 문질렀다】',
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
        '은(는) 억지로 음부를 ',
        defender.get_colored_name(),
        '의 입술에 눌러 댔다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 억지로 음부로 ',
        defender.get_colored_name(),
        '의 입술과 혀를 문질렀다】',
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
        '은(는) 억지로 육봉을 ',
        defender.get_colored_name(),
        '의 입 안에 집어넣었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 억지로 육봉으로 ',
        defender.get_colored_name(),
        '의 입술과 혀를 휘저었다】',
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
        '은(는) 억지로 육봉을 ',
        defender.get_colored_name(),
        '의 목구멍 깊숙이 집어넣었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 억지로 ',
        defender.get_colored_name(),
        '의 목구멍 깊은 곳을 휘저었다】',
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
        '은(는) 억지로 육봉을 ',
        defender.get_colored_name(),
        '의 손 안으로 뻗었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 억지로 육봉으로 ',
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
        '은(는) 억지로 육봉으로 ',
        defender.get_colored_name(),
        '의 양손을 헤치고 입 안에 집어넣었다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 육봉으로 ',
        defender.get_colored_name(),
        '의 손을 치면서 ',
        defender.get_colored_name(),
        '의 입술과 혀를 휘저었다】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async fuck_tit(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 억지로 ',
        defender.get_colored_name(),
        '의 가슴을 모아 육봉을 끼웠다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 억지로 육봉으로 ',
        defender.get_colored_name(),
        '의 가슴을 문질렀다】',
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
        '은(는) 억지로 ',
        defender.get_colored_name(),
        '의 머리카락으로 육봉을 감쌌다】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 억지로 육봉으로 ',
        defender.get_colored_name(),
        '의 머리카락을 문질렀다】',
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
      '은(는) 억지로 ',
      defender.get_colored_name(),
      '의 양발을 끌어당겨 육봉을 어루만지게 했다】',
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
      '은(는) 억지로 ',
      defender.get_colored_name(),
      '의 꼬리를 끌어당겨 육봉에 감았다】',
    ]);
  },
};
