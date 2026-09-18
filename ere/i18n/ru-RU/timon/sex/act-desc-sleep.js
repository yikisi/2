/**
 * @file 调教指令描述 - 睡奸 - 系统提示
 * <br>指令含义看 #/i18n/ru-RU/sex/actions
 * @author 黑奴队长
 */
const { printAndWait } = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async kiss(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' целует спящую ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async french_kiss(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' глубоко целует спящую ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async pet_ear(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' играет с тёплыми ушками спящей ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async pull_ear(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' тянет за тёплые ушки спящую ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async pet_breast(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' мнёт мягкую грудь спящей ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async pet_nipple(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' играет с чувствительными сосками спящей ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async pet_clitoris(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' играет с игривым клитором спящей ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async finger_fuck(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' вводит пальцы в игривую киску спящей ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async prepare_virgin(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' раздвигает стыдливые губки спящей ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async stimulate_g_spot_by_finger(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' пальцами дразнит скрытую точку G спящей ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async pet_anal(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' играет с аккуратным колечком ануса спящей ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async prepare_anal(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' раздвигает стыдливое колечко ануса спящей ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async pet_leg(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' гладит полные бёдра спящей ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async pet_tail(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' играет с душистым хвостом спящей ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async pull_tail(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' тянет за хрупкий хвост спящую ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async cunnilingus(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' берёт в рот трепещущий клитор спящей ',
        defender.get_colored_name(),
        '】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' посасывает игривый клитор ',
        defender.get_colored_name(),
        '】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async force_deep_blow_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' вводит член в приоткрытый ротик ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' берёт в рот вставший член спящей ',
        defender.get_colored_name(),
        '】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' облизывает вставший член спящей ',
        defender.get_colored_name(),
        '】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async deep_blow_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' глубоко берёт в рот вставший член спящей ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async hand_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' ладонью ласкает вставший член спящей ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async hand_and_blow_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' руками и ртом обслуживает вставший член спящей ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async fuck_tit(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' сводит вместе груди спящей ',
      defender.get_colored_name(),
      ' и трётся о них своим членом】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async tit_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' сводит груди и трётся ими о вставший член спящей ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async tit_and_blow_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' грудью трётся о вставший член ',
      defender.get_colored_name(),
      ', а ртом посасывает спящую головку】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async bite_nipple(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' легонько покусывает чувствительные соски спящей ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async force_armpit_intercourse(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' поднимает беззащитную руку спящей ',
      defender.get_colored_name(),
      ' и трётся членом о подмышку】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async force_foot_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' притягивает крепкие ступни спящей ',
      defender.get_colored_name(),
      ' и трёт ими свой член】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async foot_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' наступает на вставший член спящей ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async tail_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' хвостом обвивает вставший член спящей ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async missionary(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' ложится сверху на спящую ',
      defender.get_colored_name(),
      ' и трахает её киску】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async missionary_anal_sex(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' ложится сверху на спящую ',
      defender.get_colored_name(),
      ' и трахает её попку】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async doggy_style(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' ложится сверху на лежащую ничком ',
      defender.get_colored_name(),
      ' и трахает её киску】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async doggy_style_anal_sex(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' ложится сверху на лежащую ничком ',
      defender.get_colored_name(),
      ' и трахает её попку】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async stimulate_g_spot(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' членом дразнит глубоко спрятанную точку G спящей ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async stimulate_womb(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' членом через попку дразнит чувствительную матку спящей ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async cowgirl(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' садится верхом на спящую ',
      defender.get_colored_name(),
      ' и насаживается киской на член】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async cowgirl_anal_sex(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' садится верхом на спящую ',
      defender.get_colored_name(),
      ' и насаживается попкой на член】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async stimulate_glans_by_virgin(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' киской обхватывает вставший член спящей ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async stimulate_glans_by_anal(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' попкой обхватывает вставший член спящей ',
      defender.get_colored_name(),
      '】',
    ]);
  },
};
