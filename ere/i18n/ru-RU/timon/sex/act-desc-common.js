/**
 * @file 调教指令描述 - 通用 - 系统提示
 * <br>指令含义看 #/i18n/ru-RU/sex/actions
 * @author 黑奴队长
 */
const { get, printAndWait } = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  // 沟通系
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async go_on(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' перестаёт сопротивляться и отдаётся ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async kiss(attacker, defender, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' ',
      is_first ? '' : 'снова ',
      'целует в губы ',
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
      ' взасос целует ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /** @param {CharaTalk} attacker 主动方 */
  async relax(attacker) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' пытается выровнять дыхание】',
    ]);
  },
  /** @param {CharaTalk} attacker 主动方 */
  async sleep(attacker) {
    const buffer = [
      () =>
        printAndWait([
          '【',
          attacker.get_colored_name(),
          ' никак не отзывается】',
        ]),
    ];
    if (get(`status:${attacker.id}:沉睡`) > 0) {
      buffer.push(() =>
        printAndWait(['【', attacker.get_colored_name(), ' тихо спит】']),
      );
    }
    if (get(`status:${attacker.id}:马跳S`) > 0) {
      buffer.push(
        () =>
          printAndWait([
            '【',
            attacker.get_colored_name(),
            ' дышит чуть тяжелее】',
          ]),
        () =>
          printAndWait([
            '【',
            attacker.get_colored_name(),
            ' во сне выдыхает что-то томное】',
          ]),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async lure(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' дразнит ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async talk(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' болтает о пустяках с ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /** @param {CharaTalk} attacker 主动方 */
  async passive_switch(attacker) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' пока не хочет продолжать】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async active_switch(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' передаёт почин ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /** @param {CharaTalk} attacker 主动方 */
  async resist(attacker) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' пробует сопротивляться, чтобы перехватить почин】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async gargle(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' и ',
      defender.get_colored_name(),
      ' полощут рот】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async wipe_body(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' обтирает себя и ',
      defender.get_colored_name(),
      '】',
    ]);
  },

  // 爱抚系
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async pet_ear(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' гладит ушки ',
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
      ' тянет за ушки ',
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
      ' мнёт грудь ',
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
      ' играет с сосками ',
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
      ' ласкает игривый клитор ',
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
      ' вводит пальцы в медовую щёлку ',
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
      ' раздвигает губки ',
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
      ' пальцами дразнит точку G ',
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
      ' поглаживает колечко ануса ',
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
      ' раздвигает колечко ануса ',
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
      ' ласкает бёдра ',
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
      ' ласкает хвост ',
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
      ' тянет за хвост ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async cunnilingus(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' вылизывает игривый клитор ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_cunnilingus(attacker, defender, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' просит ',
      defender.get_colored_name(),
      is_first ? ' полизать клитор】' : ' и дальше лизать клитор】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async force_cunnilingus(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' прижимает клитор к лицу ',
        defender.get_colored_name(),
        '】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' трётся клитором о губы и язык ',
        defender.get_colored_name(),
        '】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async suck_virgin(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' вводит язык в киску ',
        defender.get_colored_name(),
        '】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' языком дразнит киску ',
        defender.get_colored_name(),
        '】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_suck_virgin(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' просит ',
        defender.get_colored_name(),
        ' полизать киску】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' просит ',
        defender.get_colored_name(),
        ' и дальше лизать киску】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async force_suck_virgin(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' прижимает киску к губам ',
        defender.get_colored_name(),
        '】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' трётся киской о губы и язык ',
        defender.get_colored_name(),
        '】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' просит ',
        defender.get_colored_name(),
        ' взять член в рот】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' просит ',
        defender.get_colored_name(),
        ' полизать член】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_deep_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' просит ',
        defender.get_colored_name(),
        ' взять член поглубже】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' просит ',
        defender.get_colored_name(),
        ' обслужить член самой глоткой】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async force_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' вгоняет член меж губ ',
        defender.get_colored_name(),
        '】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' ворочает членом меж губ и языка ',
        defender.get_colored_name(),
        '】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async force_deep_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' вгоняет член в самую глотку ',
        defender.get_colored_name(),
        '】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' ворочает членом в глотке ',
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
        ' берёт в рот член ',
        defender.get_colored_name(),
        '】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' облизывает член ',
        defender.get_colored_name(),
        '】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async deep_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' глубоко берёт в рот член ',
        defender.get_colored_name(),
        '】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' самой глоткой обслуживает член ',
        defender.get_colored_name(),
        '】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_hand_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' просит ',
        defender.get_colored_name(),
        ' взять член в ладонь】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' просит ',
        defender.get_colored_name(),
        ' и дальше водить по члену】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_hand_and_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' просит ',
        defender.get_colored_name(),
        ' гладить член и брать головку в рот】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' просит ',
        defender.get_colored_name(),
        ' водить по члену и посасывать головку】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async force_hand_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' суёт член в руки ',
        defender.get_colored_name(),
        '】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' трётся членом о ладони ',
        defender.get_colored_name(),
        '】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async force_hand_and_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' раздвигает членом ладони ',
        defender.get_colored_name(),
        ' и вгоняет его в рот】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' членом шлёпает по рукам ',
        defender.get_colored_name(),
        ' и ворочает им меж губ ',
        defender.get_colored_name(),
        '】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async hand_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' берёт в руку член ',
        defender.get_colored_name(),
        '】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' водит рукой по члену ',
        defender.get_colored_name(),
        '】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async hand_and_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' гладит и целует член ',
        defender.get_colored_name(),
        '】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' то теребит, то облизывает член ',
        defender.get_colored_name(),
        '】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_tit_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' просит ',
        defender.get_colored_name(),
        ' зажать член между грудей】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' просит ',
        defender.get_colored_name(),
        ' обслужить член грудью】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_tit_and_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' просит ',
        defender.get_colored_name(),
        ' тереть член грудью и целовать головку】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' просит ',
        defender.get_colored_name(),
        ' тереть член грудью и посасывать головку】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async fuck_tit(attacker, defender, is_first) {
    if (is_first && defender.sex_code !== 1)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' сводит вместе груди ',
        defender.get_colored_name(),
        ' и зажимает меж них член】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' трётся членом о грудь ',
        defender.get_colored_name(),
        '】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async fuck_tit_and_mouth(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' проводит член между грудей ',
        defender.get_colored_name(),
        ' и вгоняет в рот】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' трётся членом о груди ',
        defender.get_colored_name(),
        ' и ворочает им меж губ ',
        defender.get_colored_name(),
        '】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async tit_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' сводит груди и обхватывает ими член ',
        defender.get_colored_name(),
        '】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' водит грудью вверх-вниз по члену ',
        defender.get_colored_name(),
        '】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async tit_and_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' трётся грудью о член ',
        defender.get_colored_name(),
        ' и берёт головку в рот】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' трётся грудью о член ',
        defender.get_colored_name(),
        ' и посасывает головку】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async suck_anal(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' облизывает попку ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async suck_nipple(attacker, defender, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      is_first ? ' берёт в рот соски ' : ' посасывает соски ',
      defender.get_colored_name(),
      '】',
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
      ' легонько покусывает соски ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async ask_milk_and_hand_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' просит ',
      defender.get_colored_name(),
      ' дать ',
      attacker.get_colored_name(),
      ' сосать сосок и заодно ласкать член】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async milk(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' даёт сосок в рот ',
        defender.get_colored_name(),
        '】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' даёт ',
        defender.get_colored_name(),
        ' пососать свой сосок】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async ask_bite_nipple(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' просит ',
      defender.get_colored_name(),
      ' покусать свой сосок】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async milk_and_hand_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' даёт ',
      defender.get_colored_name(),
      ' сосать сосок и заодно ласкает член ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_non_penetrative(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' просит ',
        defender.get_colored_name(),
        ' зажать между бёдер член ',
        attacker.get_colored_name(),
        '】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' просит ',
        defender.get_colored_name(),
        ' тереть между бёдер член ',
        attacker.get_colored_name(),
        '】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async non_penetrative(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' зажимает между бёдер член ',
        defender.get_colored_name(),
        '】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' трёт между бёдер член ',
        defender.get_colored_name(),
        '】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async sixty_nine(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' и ',
        defender.get_colored_name(),
        ' встали в позу 69】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' и ',
        defender.get_colored_name(),
        ' в позе 69 ласкают друг друга】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_hair_fuck(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' требует от ',
        defender.get_colored_name(),
        ' обвить член волосами】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' требует от ',
        defender.get_colored_name(),
        ' тереть член ладонями и волосами】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async force_hair_fuck(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' наматывает на член волосы ',
        defender.get_colored_name(),
        '】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' трётся членом о волосы ',
        defender.get_colored_name(),
        '】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async hair_fuck(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' обвивает волосами член ',
        defender.get_colored_name(),
        '】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' ладонями и волосами трёт член ',
        defender.get_colored_name(),
        '】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async ask_armpit_intercourse(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' просит ',
      defender.get_colored_name(),
      ' тереть подмышкой член ',
      attacker.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async force_armpit_intercourse(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' поднимает руку ',
        defender.get_colored_name(),
        ' и трётся членом о подмышку】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' продолжает тереть членом подмышку ',
        defender.get_colored_name(),
        '】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async armpit_intercourse(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' трётся подмышкой о член ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async ask_foot_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' просит ',
      defender.get_colored_name(),
      ' потоптать член ступнями】',
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
      ' тычет членом в ступни ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async foot_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' ставит ступни на член ',
        defender.get_colored_name(),
        '】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' топчет ступнями член ',
        defender.get_colored_name(),
        '】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async ask_tail_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' просит ',
      defender.get_colored_name(),
      ' обслужить член хвостом】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async force_tail_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' притягивает хвост ',
      defender.get_colored_name(),
      ' и обвивает им член】',
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
      ' обвивает хвостом член ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async tribbing(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' прижимается низом к низу ',
        defender.get_colored_name(),
        ' — клитор о клитор】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' продолжает тереться клитором о клитор с ',
        defender.get_colored_name(),
        '】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async self_pet_nipple(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' на глазах у ',
      defender.get_colored_name(),
      ' мнёт собственную грудь】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async self_hand_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' на глазах у ',
      defender.get_colored_name(),
      ' водит рукой по своему члену】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async self_pet_clitoris(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' на глазах у ',
      defender.get_colored_name(),
      ' играет со своим клитором】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async self_finger_fuck(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' на глазах у ',
      defender.get_colored_name(),
      ' тычет пальцами в свою киску】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async self_pet_anal(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' на глазах у ',
      defender.get_colored_name(),
      ' тычет пальцами в свою попку】',
    ]);
  },

  // 性交系
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async missionary(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' в миссионерской вводит член в киску ',
        defender.get_colored_name(),
        '】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' в миссионерской двигает членом в киске ',
        defender.get_colored_name(),
        '】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async missionary_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' в миссионерской вводит член в попку ',
        defender.get_colored_name(),
        '】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' в миссионерской двигает членом в попке ',
        defender.get_colored_name(),
        '】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async doggy_style(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' сзади вводит член в киску ',
        defender.get_colored_name(),
        '】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' сзади двигает членом в киске ',
        defender.get_colored_name(),
        '】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async doggy_style_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' сзади вводит член в попку ',
        defender.get_colored_name(),
        '】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' сзади двигает членом в попке ',
        defender.get_colored_name(),
        '】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async sitting(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' и ',
        defender.get_colored_name(),
        ' сидят лицом к лицу, и член входит в киску ',
        defender.get_colored_name(),
        '】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' и ',
        defender.get_colored_name(),
        ' сидят лицом к лицу, член ходит в киске】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async sitting_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' и ',
        defender.get_colored_name(),
        ' сидят лицом к лицу, и член входит в попку ',
        defender.get_colored_name(),
        '】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' и ',
        defender.get_colored_name(),
        ' сидят лицом к лицу, член ходит в попке】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async hug_sitting(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' сажает к себе на колени спиной ',
        defender.get_colored_name(),
        ' и вводит член в киску】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' держит на коленях ',
        defender.get_colored_name(),
        ', и член ходит в киске】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async hug_sitting_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' сажает к себе на колени спиной ',
        defender.get_colored_name(),
        ' и вводит член в попку】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' держит на коленях ',
        defender.get_colored_name(),
        ', и член ходит в попке】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async standing(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' и ',
        defender.get_colored_name(),
        ' стоят лицом к лицу, и член входит в киску】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' стоя лицом к лицу двигает членом в киске ',
        defender.get_colored_name(),
        '】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async standing_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' и ',
        defender.get_colored_name(),
        ' стоят лицом к лицу, и член входит в попку】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' стоя лицом к лицу двигает членом в попке ',
        defender.get_colored_name(),
        '】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async hug_standing(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' стоя прижимает к себе ',
        defender.get_colored_name(),
        ' и вводит член в киску】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' сзади двигает членом в киске ',
        defender.get_colored_name(),
        ', ',
        defender.get_colored_name(),
        ' обмякшими руками упирается в стену】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async hug_standing_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' стоя прижимает к себе ',
        defender.get_colored_name(),
        ' и вводит член в попку】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' сзади двигает членом в попке ',
        defender.get_colored_name(),
        ', ',
        defender.get_colored_name(),
        ' обмякшими руками упирается в стену】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async suspended_congress(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' подхватывает на руки ',
        defender.get_colored_name(),
        ' и вводит член в киску】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' членом двигает в киске ',
        defender.get_colored_name(),
        ', подвешенной на весу】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async suspended_congress_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' подхватывает на руки ',
        defender.get_colored_name(),
        ' и вводит член в попку】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' членом двигает в попке ',
        defender.get_colored_name(),
        ', подвешенной на весу】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async fucked_suspended_congress(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' подхватывает на руки ',
        defender.get_colored_name(),
        ' и киской принимает член ',
        defender.get_colored_name(),
        '】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' своей киской обхватывает висящий в воздухе член ',
        defender.get_colored_name(),
        '】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async fucked_suspended_congress_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' подхватывает на руки ',
        defender.get_colored_name(),
        ' и попкой принимает член ',
        defender.get_colored_name(),
        '】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' своей попкой обхватывает висящий в воздухе член ',
        defender.get_colored_name(),
        '】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async hug_suspended_congress(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' подхватывает на руки спиной к себе ',
        defender.get_colored_name(),
        ' и вводит член в киску】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' членом двигает в киске повёрнутой спиной ',
        defender.get_colored_name(),
        ', висящей в воздухе】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async hug_suspended_congress_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' подхватывает на руки спиной к себе ',
        defender.get_colored_name(),
        ' и вводит член в попку】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' членом двигает в попке повёрнутой спиной ',
        defender.get_colored_name(),
        ', висящей в воздухе】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_cowgirl(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' просит ',
        defender.get_colored_name(),
        ' сесть сверху и вобрать член киской】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' просит сидящую сверху ',
        defender.get_colored_name(),
        ' и дальше насаживаться киской на член】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_cowgirl_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' просит ',
        defender.get_colored_name(),
        ' сесть сверху и вобрать член попкой】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' просит сидящую сверху ',
        defender.get_colored_name(),
        ' и дальше насаживаться попкой на член】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async ask_stimulate_glans_by_virgin(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' просит ',
      defender.get_colored_name(),
      ' обхватить член киской】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async ask_stimulate_glans_by_anal(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' просит ',
      defender.get_colored_name(),
      ' обхватить член попкой】',
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
      ' членом тычется в точку G ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async stimulate_large_intestine(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' членом тычется в сигмовидную кишку ',
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
      ' членом через попку тычется в матку ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_fuck(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' просит ',
        defender.get_colored_name(),
        ' войти в свою киску】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' просит сидящую сверху ',
        defender.get_colored_name(),
        ' и дальше двигаться в своей киске】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_fuck_anal(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' просит ',
        defender.get_colored_name(),
        ' войти в свою попку】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' просит сидящую сверху ',
        defender.get_colored_name(),
        ' и дальше двигаться в своей попке】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async cowgirl(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' садится верхом на ',
        defender.get_colored_name(),
        ' и вбирает член киской】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' садится верхом на ',
        defender.get_colored_name(),
        ' и насаживается киской на член】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async cowgirl_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' садится верхом на ',
        defender.get_colored_name(),
        ' и вбирает член попкой】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' садится верхом на ',
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
      ' киской обхватывает член ',
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
      ' попкой обхватывает член ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async ask_stimulate_g_spot(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' просит ',
      defender.get_colored_name(),
      ' членом подразнить точку G】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async ask_stimulate_large_intestine(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' просит ',
      defender.get_colored_name(),
      ' членом подразнить сигмовидную кишку】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async ask_stimulate_womb(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' просит ',
      defender.get_colored_name(),
      ' членом через попку подразнить матку】',
    ]);
  },

  // 性虐系

  async insult(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' осыпает бранью ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_insult(attacker, defender, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' просит ',
      defender.get_colored_name(),
      is_first ? ' обругать себя】' : ' и дальше ругать себя】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async hit_anal(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' шлёпает по попе ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async hit_anal_hard(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' с силой шлёпает по попе ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_hit_anal(attacker, defender, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' просит ',
      defender.get_colored_name(),
      is_first
        ? ' отшлёпать себя по попе】'
        : ' и дальше шлёпать себя по попе】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async hit_breast(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' шлёпает по груди ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async hit_breast_hard(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' с силой шлёпает по груди ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_hit_breast(attacker, defender, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' просит ',
      defender.get_colored_name(),
      is_first
        ? ' отшлёпать себя по груди】'
        : ' и дальше шлёпать себя по груди】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async hit_face(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' отвешивает пощёчину ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async hit_face_hard(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' с силой отвешивает пощёчину ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async hit_face_by_penis(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' шлёпает членом по щеке ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_hit_face(attacker, defender, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' просит ',
      defender.get_colored_name(),
      is_first
        ? ' дать себе пощёчину】'
        : ' и дальше отвешивать себе пощёчины】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async virgin_foot_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' топчет промежность ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_virgin_foot_job(attacker, defender, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' просит ',
      defender.get_colored_name(),
      is_first
        ? ' потоптать себе промежность】'
        : ' и дальше топтать себе промежность】',
    ]);
  },

  // 银趴系
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   */
  async ask_supporter_prepare_virgin(attacker, defender, supporter) {
    await printAndWait([
      '【По указке ',
      attacker.get_colored_name(),
      ' — ',
      supporter.get_colored_name(),
      ' раздвигает губки ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   */
  async ask_double_suck_nipple(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' просит ',
      defender.get_colored_name(),
      ' и ',
      supporter.get_colored_name(),
      ' вместе полизать ей соски】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   */
  async double_suck_nipple(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' и ',
      supporter.get_colored_name(),
      ' вместе облизывают соски ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   */
  async ask_double_blow_job(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' требует, чтобы ',
      supporter.get_colored_name(),
      ' и ',
      defender.get_colored_name(),
      ' вместе обслужили ему член】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   */
  async double_blow_job(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' и ',
      supporter.get_colored_name(),
      ' вместе обслуживают член ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   */
  async ask_double_cunnilingus(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' просит ',
      defender.get_colored_name(),
      ' и ',
      supporter.get_colored_name(),
      ' вместе полизать ей клитор】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   */
  async double_cunnilingus(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' и ',
      supporter.get_colored_name(),
      ' вместе облизывают клитор ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   */
  async ask_double_suck_virgin(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' просит ',
      defender.get_colored_name(),
      ' и ',
      supporter.get_colored_name(),
      ' вместе поработать языком в её киске】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   */
  async double_suck_virgin(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' и ',
      supporter.get_colored_name(),
      ' вместе языками ласкают киску ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   */
  async ask_double_tit_job(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' просит ',
      defender.get_colored_name(),
      ' и ',
      supporter.get_colored_name(),
      ' вместе обслужить ей член грудью】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   */
  async double_tit_job(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' и ',
      supporter.get_colored_name(),
      ' вместе грудью обслуживают член ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_double_cowgirl(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' просит ',
      defender.get_colored_name(),
      ' и ',
      supporter.get_colored_name(),
      is_first
        ? ' по очереди вбирать член киской】'
        : ' и дальше по очереди вбирать член киской】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_double_fuck(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' просит ',
      defender.get_colored_name(),
      ' и ',
      supporter.get_colored_name(),
      is_first
        ? ' по очереди двигаться в её киске】'
        : ' и дальше по очереди двигаться в её киске】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_double_penetration(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' просит ',
      defender.get_colored_name(),
      ' и ',
      supporter.get_colored_name(),
      is_first
        ? ' спереди и сзади войти в обе её щёлки】'
        : ' и дальше спереди и сзади двигаться в обеих щёлках】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_spit_roast(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' просит ',
      defender.get_colored_name(),
      ' и ',
      supporter.get_colored_name(),
      is_first
        ? ' сверху и снизу войти в её рот и киску】'
        : ' и дальше сверху и снизу двигаться в её рту и киске】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_spit_roast_anal_sex(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' просит ',
      defender.get_colored_name(),
      ' и ',
      supporter.get_colored_name(),
      is_first
        ? ' сверху и снизу войти в её рот и попку】'
        : ' и дальше сверху и снизу двигаться в её рту и попке】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_cunnilingus_with_fucking(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' просит ',
      supporter.get_colored_name(),
      is_first ? ' пока сам входит в ' : ' пока сам двигается в ',
      defender.get_colored_name(),
      ' полизать её игривый клитор】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async fuck_69(attacker, defender, supporter, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' просит ',
        defender.get_colored_name(),
        ' и ',
        supporter.get_colored_name(),
        ' встать в позу 69, а потом входит сам】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' продолжает двигаться в той, что в позе 69 с ',
        supporter.get_colored_name(),
        ' — в ',
        defender.get_colored_name(),
        '】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   */
  async double_cowgirl(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' и ',
      supporter.get_colored_name(),
      ' по очереди вбирают киской член ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async double_fuck(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' и ',
      supporter.get_colored_name(),
      is_first
        ? ' по очереди двигаются в '
        : ' и дальше по очереди двигаются в ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async double_penetration(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' и ',
      supporter.get_colored_name(),
      is_first
        ? ' спереди и сзади двигаются в '
        : ' и дальше спереди и сзади двигаются в ',
      defender.get_colored_name(),
      ' — в обе щёлки】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async spit_roast(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' и ',
      supporter.get_colored_name(),
      is_first
        ? ' сверху и снизу двигаются в '
        : ' и дальше сверху и снизу двигаются в ',
      defender.get_colored_name(),
      ' — в рот и киску】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async spit_roast_anal_sex(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' и ',
      supporter.get_colored_name(),
      is_first
        ? ' сверху и снизу двигаются в '
        : ' и дальше сверху и снизу двигаются в ',
      defender.get_colored_name(),
      ' — в рот и попку】',
    ]);
  },

  // 道具系
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} part 被润滑的部位
   */
  async use_lubricating_fluid(attacker, defender, part) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' наносит смазку: ',
      defender.get_colored_name(),
      ', ',
      part,
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param _
   * @param {PrintedSpan} part 被润滑的部位
   */
  async use_lubricating_fluid_self(attacker, _, part) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' наносит смазку себе на ',
      part,
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} medicine 药物
   */
  async use_medicine(attacker, defender, medicine) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' даёт ',
      defender.get_colored_name(),
      ' проглотить ',
      medicine,
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param _
   * @param {PrintedSpan} medicine 药物
   */
  async use_medicine_self(attacker, _, medicine) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' принимает ',
      medicine,
      '】',
    ]);
  },
  /** @param {CharaTalk} attacker 主动方 */
  async condom(attacker) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' надевает на свой член презерватив】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async other_condom(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' надевает презерватив на член ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * 性玩具持续效果，用于跳蛋、夹子等和身体部位绑定的性玩具
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} part 身体部位
   * @param {string} verb 装备性玩具的动词，例如跳蛋对阴道是塞入，对乳头是装上
   * @param {PrintedSpan} item 性玩具
   */
  async item_effect(attacker, defender, part, verb, item) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' ',
      verb,
      ' — ',
      item,
      ' всё дразнит ',
      defender.get_colored_name(),
      ', ',
      part,
      '】',
    ]);
  },
  /**
   * 给被动方穿戴性玩具，用于跳蛋、夹子等和身体部位绑定的性玩具
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} part 身体部位
   * @param {string} verb 装备性玩具的动词，例如跳蛋对阴道是塞入，对乳头是装上
   * @param {PrintedSpan} item 性玩具
   */
  async equip_item(attacker, defender, part, verb, item) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ': ',
      item,
      ' ',
      verb,
      ' — ',
      defender.get_colored_name(),
      ', ',
      part,
      '】',
    ]);
  },
  /**
   * 给被动方穿戴性玩具，用于眼罩、项圈等不和身体部位绑定的性玩具
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} item 性玩具
   */
  async equip_other_item(attacker, defender, item) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' надевает на ',
      defender.get_colored_name(),
      ' — ',
      item,
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} part 被润滑的部位
   */
  async use_electric_stunner(attacker, defender, part) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' бьёт током ',
      defender.get_colored_name(),
      ', ',
      part,
      '】',
    ]);
  },
  /** @param {CharaTalk} attacker 主动方 */
  async use_mirror(attacker) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' ставит ростовое зеркало】',
    ]);
  },
  /** @param {CharaTalk} attacker 主动方 */
  async take_off_mirror(attacker) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' убирает ростовое зеркало】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} part 身体部位
   * @param {PrintedSpan} item 性玩具
   */
  async take_off_item(attacker, defender, part, item) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' снимает с ',
      defender.get_colored_name(),
      ', ',
      part,
      ' — ',
      item,
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {PrintedSpan} part 身体部位
   * @param {PrintedSpan} item 性玩具
   */
  async take_off_item_self(attacker, part, item) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' снимает у себя с ',
      part,
      ' — ',
      item,
      '】',
    ]);
  },
};
