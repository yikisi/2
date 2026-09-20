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
      ' は抵抗をやめ、',
      defender.get_colored_name(),
      ' のなすがままになった】',
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
      is_first ? '' : '続けて',
      ' は ',
      defender.get_colored_name(),
      ' の唇に口づけた】',
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
      ' は ',
      defender.get_colored_name(),
      ' にディープキスをした】',
    ]);
  },
  /** @param {CharaTalk} attacker 主動側 */
  async relax(attacker) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は呼吸を整えようとした】',
    ]);
  },
  /** @param {CharaTalk} attacker 主動側 */
  async sleep(attacker) {
    const buffer = [
      () =>
        printAndWait([
          '【',
          attacker.get_colored_name(),
          ' は反応しなかった】',
        ]),
    ];
    if (get(`status:${attacker.id}:沉睡`) > 0) {
      buffer.push(() =>
        printAndWait([
          '【',
          attacker.get_colored_name(),
          ' は静かに眠っている】',
        ]),
      );
    }
    if (get(`status:${attacker.id}:马跳S`) > 0) {
      buffer.push(
        () =>
          printAndWait([
            '【',
            attacker.get_colored_name(),
            ' は少し重い呼吸をしている】',
          ]),
        () =>
          printAndWait([
            '【',
            attacker.get_colored_name(),
            ' は眠りのなかで甘い吐息を漏らしている】',
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
      ' は ',
      defender.get_colored_name(),
      ' を挑発した】',
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
      ' は ',
      defender.get_colored_name(),
      ' と雑談した】',
    ]);
  },
  /** @param {CharaTalk} attacker 主動側 */
  async passive_switch(attacker) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' はもう続けたくないようだ】',
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
      ' は主導権を ',
      defender.get_colored_name(),
      ' に渡した】',
    ]);
  },
  /** @param {CharaTalk} attacker 主動側 */
  async resist(attacker) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は主導権を取るため抵抗した】',
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
      ' は ',
      defender.get_colored_name(),
      ' と一緒にうがいをした】',
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
      ' は自分と ',
      defender.get_colored_name(),
      ' の身体を拭いた】',
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
      ' は ',
      defender.get_colored_name(),
      ' の耳を撫でた】',
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
      ' は ',
      defender.get_colored_name(),
      ' の耳を引っ張った】',
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
      ' は ',
      defender.get_colored_name(),
      ' の胸を弄んだ】',
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
      ' は ',
      defender.get_colored_name(),
      ' の乳首を弄んだ】',
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
      ' は ',
      defender.get_colored_name(),
      ' の淫らな陰核を愛撫した】',
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
      ' は指を ',
      defender.get_colored_name(),
      ' の秘部へ挿し入れた】',
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
      ' は ',
      defender.get_colored_name(),
      ' の陰唇を開いた】',
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
      ' は指で ',
      defender.get_colored_name(),
      ' のGスポットを刺激した】',
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
      ' はそっと ',
      defender.get_colored_name(),
      ' の尻穴を撫でた】',
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
      ' は ',
      defender.get_colored_name(),
      ' の尻穴を撫でた】',
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
      ' は ',
      defender.get_colored_name(),
      ' の太ももを愛撫した】',
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
      ' は ',
      defender.get_colored_name(),
      ' の尻尾を愛撫した】',
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
      ' は ',
      defender.get_colored_name(),
      ' の尻尾を引っ張った】',
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
      ' は ',
      defender.get_colored_name(),
      ' の淫らな陰核を舐めた】',
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
      ' は ',
      defender.get_colored_name(),
      is_first ? ' に陰核を舐めてと頼んだ】' : ' に陰核を舐め続けてと頼んだ】',
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
        ' は陰核を ',
        defender.get_colored_name(),
        ' の顔へ押し当てた】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は陰核で ',
        defender.get_colored_name(),
        ' の唇と舌を擦った】',
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
        ' は舌を ',
        defender.get_colored_name(),
        ' の秘部へ入れた】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は舌で ',
        defender.get_colored_name(),
        ' の秘部へ入れた】',
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
        ' は ',
        defender.get_colored_name(),
        ' に秘部を舐めてと頼んだ】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は ',
        defender.get_colored_name(),
        ' に秘部を舐め続けてと頼んだ】',
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
        ' は秘部を ',
        defender.get_colored_name(),
        ' の唇へ押し当てた】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は秘部で ',
        defender.get_colored_name(),
        ' の唇と舌を擦った】',
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
        ' は ',
        defender.get_colored_name(),
        ' に肉棒を含んでと頼んだ】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は ',
        defender.get_colored_name(),
        ' に肉棒を舐めてと頼んだ】',
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
        ' は ',
        defender.get_colored_name(),
        ' に肉棒を深くまで含んでと頼んだ】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は ',
        defender.get_colored_name(),
        ' に喉の奥で肉棒に奉仕してと頼んだ】',
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
        ' は肉棒を ',
        defender.get_colored_name(),
        ' の唇】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は肉棒で ',
        defender.get_colored_name(),
        ' の唇と舌を擦った】',
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
        ' は肉棒を ',
        defender.get_colored_name(),
        ' の喉の奥へ挿し入れた】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は ',
        defender.get_colored_name(),
        ' の喉の奥で掻き回した】',
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
        ' は ',
        defender.get_colored_name(),
        ' の肉棒を含んだ】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は ',
        defender.get_colored_name(),
        ' の肉棒を舐めている】',
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
        ' は深く ',
        defender.get_colored_name(),
        ' の肉棒を含んだ】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は喉の奥で ',
        defender.get_colored_name(),
        ' の肉棒に奉仕した】',
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
        ' は ',
        defender.get_colored_name(),
        ' に肉棒を掌で握ってと頼んだ】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は ',
        defender.get_colored_name(),
        ' に肉棒を扱き続けてと頼んだ】',
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
        ' は ',
        defender.get_colored_name(),
        ' に肉棒を撫でながら亀頭を含んでと頼んだ】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は ',
        defender.get_colored_name(),
        ' に肉棒を扱きながら亀頭を吸ってと頼んだ】',
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
        ' は肉棒を ',
        defender.get_colored_name(),
        ' の手のなかへ伸ばした】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は肉棒で ',
        defender.get_colored_name(),
        ' の両手を擦った】',
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
        ' は肉棒で ',
        defender.get_colored_name(),
        ' の両手を押し分け、口へ挿し入れた】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' の肉棒は ',
        defender.get_colored_name(),
        ' の手を叩きながら、',
        defender.get_colored_name(),
        ' の唇と舌を擦った】',
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
        ' は ',
        defender.get_colored_name(),
        ' の肉棒を手に握った】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は ',
        defender.get_colored_name(),
        ' の肉棒を扱いた】',
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
        ' は撫でながら ',
        defender.get_colored_name(),
        ' の肉棒に口づけた】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は弄びながら ',
        defender.get_colored_name(),
        ' の肉棒を舐めた】',
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
        ' は ',
        defender.get_colored_name(),
        ' に両胸で肉棒を挟んでと頼んだ】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は ',
        defender.get_colored_name(),
        ' に両胸で肉棒に奉仕してと頼んだ】',
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
        ' は ',
        defender.get_colored_name(),
        ' に胸で肉棒を擦りながら唇で亀頭に口づけてと頼んだ】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は ',
        defender.get_colored_name(),
        ' に胸で肉棒を擦りながら亀頭を吸ってと頼んだ】',
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
        ' は ',
        defender.get_colored_name(),
        ' の胸を寄せ、肉棒を挟んだ】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は肉棒で ',
        defender.get_colored_name(),
        ' の胸を弄んだ】',
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
        ' は肉棒を ',
        defender.get_colored_name(),
        ' の両胸を通し、唇へ挿し入れた】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は肉棒で ',
        defender.get_colored_name(),
        ' の両胸を擦り、',
        defender.get_colored_name(),
        ' の唇と舌を擦った】',
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
        ' は両胸を寄せて ',
        defender.get_colored_name(),
        ' の肉棒を挟んだ】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は両胸を上下させ ',
        defender.get_colored_name(),
        ' の肉棒を擦った】',
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
        ' は両胸で ',
        defender.get_colored_name(),
        ' の肉棒を擦りながら、亀頭を含んだ】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は両胸で ',
        defender.get_colored_name(),
        ' の肉棒を擦りながら、亀頭を吸い上げた】',
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
      ' は ',
      defender.get_colored_name(),
      ' の尻穴を舐めている】',
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
      is_first ? ' は ' : ' は ',
      defender.get_colored_name(),
      is_first ? ' の乳首を含んだ】' : ' の乳首を吸い上げた】',
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
      ' は ',
      defender.get_colored_name(),
      ' の乳首を軽く噛んだ】',
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
      ' は ',
      defender.get_colored_name(),
      ' は ',
      attacker.get_colored_name(),
      ' に乳首を吸わせながら、肉棒を撫でてと頼んだ】',
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
        ' は乳首を ',
        defender.get_colored_name(),
        ' の口へ入れた】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は ',
        defender.get_colored_name(),
        ' に自分の乳首を吸わせた】',
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
      ' は ',
      defender.get_colored_name(),
      ' に自分の乳首を噛んでと頼んだ】',
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
      ' は ',
      defender.get_colored_name(),
      ' に乳首を吸わせながら、',
      defender.get_colored_name(),
      ' の肉棒を撫でた】',
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
        ' は ',
        defender.get_colored_name(),
        ' に太ももの付け根で ',
        attacker.get_colored_name(),
        ' の肉棒を挟んでと頼んだ】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は ',
        defender.get_colored_name(),
        ' に太ももの付け根で ',
        attacker.get_colored_name(),
        ' の肉棒を擦ってと頼んだ】',
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
        ' は太ももの付け根で ',
        defender.get_colored_name(),
        ' の肉棒を挟んだ】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は太ももの付け根で ',
        defender.get_colored_name(),
        ' の肉棒を擦った】',
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
        ' と ',
        defender.get_colored_name(),
        ' はシックスナインの体勢になった】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' と ',
        defender.get_colored_name(),
        ' はシックスナインのまま互いへ奉仕した】',
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
        ' は ',
        defender.get_colored_name(),
        ' に髪で肉棒を巻いてと求めた】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は ',
        defender.get_colored_name(),
        ' に掌と髪で肉棒を揉んでと求めた】',
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
        ' は ',
        defender.get_colored_name(),
        ' の髪で肉棒を巻いた】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は肉棒で ',
        defender.get_colored_name(),
        ' の髪を擦った】',
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
        ' は髪で ',
        defender.get_colored_name(),
        ' の肉棒を巻いた】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は掌と髪で ',
        defender.get_colored_name(),
        ' の肉棒を揉んだ】',
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
      ' は ',
      defender.get_colored_name(),
      ' に腋で ',
      attacker.get_colored_name(),
      ' の肉棒を擦ってと頼んだ】',
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
        ' は ',
        defender.get_colored_name(),
        ' の腕を引き上げ、肉棒で擦った】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は続けて肉棒で ',
        defender.get_colored_name(),
        ' の腋を擦った】',
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
      ' は腋で ',
      defender.get_colored_name(),
      ' の肉棒を擦った】',
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
      ' は ',
      defender.get_colored_name(),
      ' に両足で肉棒を踏んでと頼んだ】',
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
      ' は肉棒で ',
      defender.get_colored_name(),
      ' の両足を突いた】',
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
        ' の両足が ',
        defender.get_colored_name(),
        ' の肉棒に乗った】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は両足で ',
        defender.get_colored_name(),
        ' の肉棒を踏んだ】',
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
      ' は ',
      defender.get_colored_name(),
      ' に尻尾で肉棒に奉仕してと頼んだ】',
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
      ' は ',
      defender.get_colored_name(),
      ' の尻尾を引き寄せ、肉棒に巻きつかせた】',
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
      ' は尻尾で ',
      defender.get_colored_name(),
      ' の肉棒を巻いた】',
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
        ' は下を ',
        defender.get_colored_name(),
        ' の下へ寄せ、陰核を擦り合わせた】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は続けて ',
        defender.get_colored_name(),
        ' と陰核を擦り合わせた】',
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
      ' は ',
      defender.get_colored_name(),
      ' の前で自分の胸を弄んだ】',
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
      ' は ',
      defender.get_colored_name(),
      ' の前で自分の肉棒を扱いた】',
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
      ' は ',
      defender.get_colored_name(),
      ' の前で自分の陰核を弄んだ】',
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
      ' は ',
      defender.get_colored_name(),
      ' の前で自分の秘部を弄んだ】',
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
      ' は ',
      defender.get_colored_name(),
      ' の前で自分の尻穴を弄んだ】',
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
        ' は正常位で ',
        defender.get_colored_name(),
        ' の秘部へ入れた】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は正常位で ',
        defender.get_colored_name(),
        ' の秘部へ入れた】',
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
        ' は正常位で ',
        defender.get_colored_name(),
        ' の尻穴を舐めている】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は正常位で ',
        defender.get_colored_name(),
        ' の尻穴を舐めている】',
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
        ' は後背位で ',
        defender.get_colored_name(),
        ' の秘部へ入れた】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は後背位で ',
        defender.get_colored_name(),
        ' の秘部へ入れた】',
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
        ' は後背位で ',
        defender.get_colored_name(),
        ' の尻穴を舐めている】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は後背位で ',
        defender.get_colored_name(),
        ' の尻穴を舐めている】',
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
        ' と ',
        defender.get_colored_name(),
        ' と向かい合って座り、肉棒を ',
        defender.get_colored_name(),
        ' の秘部へ入れた】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' と ',
        defender.get_colored_name(),
        ' と向かい合って座り、肉棒で秘部を突いた】',
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
        ' と ',
        defender.get_colored_name(),
        ' と向かい合って座り、肉棒を ',
        defender.get_colored_name(),
        ' の尻穴を舐めている】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' と ',
        defender.get_colored_name(),
        ' と向かい合って座り、肉棒で尻穴を突いた】',
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
        ' は背を向けた ',
        defender.get_colored_name(),
        ' を抱きかかえて座り、肉棒を秘部へ挿し入れた】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は ',
        defender.get_colored_name(),
        ' を抱いて座り、肉棒で秘部を突いた】',
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
        ' は背を向けた ',
        defender.get_colored_name(),
        ' を抱きかかえて座り、肉棒を尻穴へ挿し入れた】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は ',
        defender.get_colored_name(),
        ' を抱いて座り、肉棒で尻穴を突いた】',
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
        ' と ',
        defender.get_colored_name(),
        ' と向かい合って立ち、肉棒を秘部へ挿し入れた】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は向かい合って立ち、肉棒で ',
        defender.get_colored_name(),
        ' の秘部へ入れた】',
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
        ' と ',
        defender.get_colored_name(),
        ' と向かい合って立ち、肉棒を尻穴へ挿し入れた】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は向かい合って立ち、肉棒で ',
        defender.get_colored_name(),
        ' の尻穴を舐めている】',
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
        ' は立ったまま ',
        defender.get_colored_name(),
        ' を抱き、肉棒を秘部へ挿し入れた】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は後ろから肉棒で ',
        defender.get_colored_name(),
        ' の秘部を突き、',
        defender.get_colored_name(),
        ' は力なく両手で壁を支えている】',
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
        ' は立ったまま ',
        defender.get_colored_name(),
        ' を抱き、肉棒を尻穴へ挿し入れた】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は後ろから肉棒で ',
        defender.get_colored_name(),
        ' の尻穴を突き、',
        defender.get_colored_name(),
        ' は力なく両手で壁を支えている】',
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
        ' は ',
        defender.get_colored_name(),
        ' を抱き上げ、肉棒を秘部へ挿し入れた】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' の肉棒が ',
        defender.get_colored_name(),
        ' の浮いた秘部を突いている】',
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
        ' は ',
        defender.get_colored_name(),
        ' を抱き上げ、肉棒を尻穴へ挿し入れた】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' の肉棒が ',
        defender.get_colored_name(),
        ' の浮いた尻穴を突いている】',
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
        ' は ',
        defender.get_colored_name(),
        ' を抱き上げ、秘部で ',
        defender.get_colored_name(),
        ' の肉棒を咥え込んだ】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は自分の秘部で ',
        defender.get_colored_name(),
        ' の浮いた肉棒を咥え込んだ】',
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
        ' は ',
        defender.get_colored_name(),
        ' を抱き上げ、尻穴で ',
        defender.get_colored_name(),
        ' の肉棒を咥え込んだ】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は自分の尻穴で ',
        defender.get_colored_name(),
        ' の浮いた肉棒を咥え込んだ】',
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
        ' は ',
        defender.get_colored_name(),
        ' を背向きに抱き上げ、肉棒を秘部へ挿し入れた】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' の肉棒が背を向けた ',
        defender.get_colored_name(),
        ' の浮いた秘部を突いている】',
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
        ' は ',
        defender.get_colored_name(),
        ' を背向きに抱き上げ、肉棒を尻穴へ挿し入れた】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' の肉棒が背を向けた ',
        defender.get_colored_name(),
        ' の浮いた尻穴を突いている】',
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
        ' は ',
        defender.get_colored_name(),
        ' に跨って座り、秘部で肉棒を咥え込んでと頼んだ】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は上にいる ',
        defender.get_colored_name(),
        ' に秘部で肉棒を咥え込み続けてと頼んだ】',
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
        ' は ',
        defender.get_colored_name(),
        ' に跨って座り、尻穴で肉棒を咥え込んでと頼んだ】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は上にいる ',
        defender.get_colored_name(),
        ' に尻穴で肉棒を咥え込み続けてと頼んだ】',
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
      ' は ',
      defender.get_colored_name(),
      ' に秘部で肉棒を咥え込んでと頼んだ】',
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
      ' は ',
      defender.get_colored_name(),
      ' に尻穴で肉棒を咥え込んでと頼んだ】',
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
      ' は肉棒で ',
      defender.get_colored_name(),
      ' のGスポットを突いた】',
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
      ' は肉棒で ',
      defender.get_colored_name(),
      ' のS状結腸を突いた】',
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
      ' は肉棒で尻穴越しに ',
      defender.get_colored_name(),
      ' の子宮を突いた】',
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
        ' は ',
        defender.get_colored_name(),
        ' に自分の秘部へ挿れてと頼んだ】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は上にいる ',
        defender.get_colored_name(),
        ' に自分の秘部を突き続けてと頼んだ】',
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
        ' は ',
        defender.get_colored_name(),
        ' に自分の尻穴へ挿れてと頼んだ】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は上にいる ',
        defender.get_colored_name(),
        ' に自分の尻穴を突き続けてと頼んだ】',
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
        ' は ',
        defender.get_colored_name(),
        ' に跨り、秘部で肉棒を咥え込んだ】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は ',
        defender.get_colored_name(),
        ' に跨り、秘部で肉棒を咥え込んでいる】',
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
        ' は ',
        defender.get_colored_name(),
        ' に跨り、尻穴で肉棒を咥え込んだ】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は ',
        defender.get_colored_name(),
        ' に跨り、尻穴で肉棒を咥え込んでいる】',
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
      ' は秘部で ',
      defender.get_colored_name(),
      ' の肉棒を咥え込んだ】',
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
      ' は尻穴で ',
      defender.get_colored_name(),
      ' の肉棒を咥え込んだ】',
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
      ' は ',
      defender.get_colored_name(),
      ' に肉棒でGスポットを責めてと頼んだ】',
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
      ' は ',
      defender.get_colored_name(),
      ' に肉棒でS状結腸を責めてと頼んだ】',
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
      ' は ',
      defender.get_colored_name(),
      ' に肉棒で尻穴越しに子宮を責めてと頼んだ】',
    ]);
  },

  // 性虐

  async insult(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は ',
      defender.get_colored_name(),
      ' を罵った】',
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
      ' は ',
      defender.get_colored_name(),
      is_first ? ' に自分を罵ってと頼んだ】' : ' に自分を罵り続けてと頼んだ】',
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
      ' は ',
      defender.get_colored_name(),
      ' の尻を叩いた】',
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
      ' は強く ',
      defender.get_colored_name(),
      ' の尻を叩いた】',
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
      ' は ',
      defender.get_colored_name(),
      is_first
        ? ' に自分の尻を叩いてと頼んだ】'
        : ' に自分の尻を叩き続けてと頼んだ】',
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
      ' は ',
      defender.get_colored_name(),
      ' の胸を弄んだ】',
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
      ' は強く ',
      defender.get_colored_name(),
      ' の胸を弄んだ】',
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
      ' は ',
      defender.get_colored_name(),
      is_first
        ? ' に自分の胸を叩いてと頼んだ】'
        : ' に自分の胸を叩き続けてと頼んだ】',
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
      ' は ',
      defender.get_colored_name(),
      ' に平手打ちをした】',
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
      ' は ',
      defender.get_colored_name(),
      ' に強く平手打ちをした】',
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
      ' は肉棒で ',
      defender.get_colored_name(),
      ' の頬を叩いた】',
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
      ' は ',
      defender.get_colored_name(),
      is_first
        ? ' に自分へ平手打ちをしてと頼んだ】'
        : ' に自分へ平手打ちを続けてと頼んだ】',
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
      ' は ',
      defender.get_colored_name(),
      ' の秘部を踏みつけた】',
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
      ' は ',
      defender.get_colored_name(),
      is_first
        ? ' に自分の秘部を踏んでと頼んだ】'
        : ' に自分の秘部を踏み続けてと頼んだ】',
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
      ' の指示で、',
      supporter.get_colored_name(),
      ' は ',
      defender.get_colored_name(),
      ' の陰唇を開いた】',
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
      ' は ',
      defender.get_colored_name(),
      ' と ',
      supporter.get_colored_name(),
      ' と一緒に自分の乳首を舐めてと頼んだ】',
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
      ' と ',
      supporter.get_colored_name(),
      ' は一緒に ',
      defender.get_colored_name(),
      ' の乳首を舐めた】',
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
      ' は ',
      supporter.get_colored_name(),
      ' と ',
      defender.get_colored_name(),
      ' と一緒に自分の肉棒に奉仕してと求めた】',
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
      ' と ',
      supporter.get_colored_name(),
      ' は一緒に ',
      defender.get_colored_name(),
      ' の肉棒に奉仕した】',
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
      ' は ',
      defender.get_colored_name(),
      ' と ',
      supporter.get_colored_name(),
      ' と一緒に自分の陰核を舐めてと頼んだ】',
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
      ' と ',
      supporter.get_colored_name(),
      ' は一緒に ',
      defender.get_colored_name(),
      ' の陰核を舐めた】',
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
      ' は ',
      defender.get_colored_name(),
      ' と ',
      supporter.get_colored_name(),
      ' と一緒に舌で自分の秘部を弄ってと頼んだ】',
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
      ' と ',
      supporter.get_colored_name(),
      ' は一緒に舌で ',
      defender.get_colored_name(),
      ' の秘部へ入れた】',
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
      ' は ',
      defender.get_colored_name(),
      ' と ',
      supporter.get_colored_name(),
      ' と一緒に両胸で自分の肉棒に奉仕してと頼んだ】',
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
      ' と ',
      supporter.get_colored_name(),
      ' は一緒に胸で ',
      defender.get_colored_name(),
      ' の肉棒に奉仕した】',
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
      ' は ',
      defender.get_colored_name(),
      ' と ',
      supporter.get_colored_name(),
      is_first
        ? ' と交代で秘部に肉棒を咥え込んでと頼んだ】'
        : ' と交代で秘部に肉棒を咥え込み続けてと頼んだ】',
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
      ' は ',
      defender.get_colored_name(),
      ' と ',
      supporter.get_colored_name(),
      is_first
        ? ' と交代で自分の秘部を突いてと頼んだ】'
        : ' と交代で自分の秘部を突き続けてと頼んだ】',
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
      ' は ',
      defender.get_colored_name(),
      ' と ',
      supporter.get_colored_name(),
      is_first
        ? ' に前後から自分の秘部と尻穴を突いてと頼んだ】'
        : ' に前後から自分の秘部と尻穴を突き続けてと頼んだ】',
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
      ' は ',
      defender.get_colored_name(),
      ' と ',
      supporter.get_colored_name(),
      is_first
        ? ' に口と秘部を同時に突いてと頼んだ】'
        : ' に口と秘部を同時に突き続けてと頼んだ】',
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
      ' は ',
      defender.get_colored_name(),
      ' と ',
      supporter.get_colored_name(),
      is_first
        ? ' に口と尻穴を同時に突いてと頼んだ】'
        : ' に口と尻穴を同時に突き続けてと頼んだ】',
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
      ' は ',
      supporter.get_colored_name(),
      is_first ? ' が挿れているあいだ ' : ' が突いているあいだ ',
      defender.get_colored_name(),
      ' の淫らな陰核を舐めてと頼んだ】',
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
        ' は ',
        defender.get_colored_name(),
        ' と ',
        supporter.get_colored_name(),
        ' とシックスナインになってから、自分が挿れてと頼んだ】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は続けて、',
        supporter.get_colored_name(),
        ' とシックスナインで口奉仕し合う ',
        defender.get_colored_name(),
        ' を突き続けた】',
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
      ' と ',
      supporter.get_colored_name(),
      ' の秘部が交代で ',
      defender.get_colored_name(),
      ' の肉棒を咥え込んだ】',
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
      ' と ',
      supporter.get_colored_name(),
      is_first ? ' は交代で ' : ' は続けて交代で ',
      defender.get_colored_name(),
      ' の秘部へ入れた】',
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
      ' と ',
      supporter.get_colored_name(),
      is_first ? ' は前後から ' : ' は続けて前後から ',
      defender.get_colored_name(),
      ' の秘部と尻穴を突いている】',
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
      ' と ',
      supporter.get_colored_name(),
      is_first ? ' は上下から ' : ' は続けて上下から ',
      defender.get_colored_name(),
      ' の口と秘部を突いている】',
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
      ' と ',
      supporter.get_colored_name(),
      is_first ? ' は上下から ' : ' は続けて上下から ',
      defender.get_colored_name(),
      ' の口と尻穴を突いている】',
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
      ' は潤滑液を ',
      defender.get_colored_name(),
      ' の ',
      part,
      ' に塗った】',
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
      ' は潤滑液を自分の ',
      part,
      ' に塗った】',
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
      ' は ',
      defender.get_colored_name(),
      ' に ',
      medicine,
      ' を飲ませた】',
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
      ' は ',
      medicine,
      ' を服用した】',
    ]);
  },
  /** @param {CharaTalk} attacker 主動側 */
  async condom(attacker) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は自分の肉棒にコンドームを着けた】',
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
      ' は ',
      defender.get_colored_name(),
      ' の肉棒にコンドームを着けた】',
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
      'した ',
      item,
      ' が持続して ',
      defender.get_colored_name(),
      ' の ',
      part,
      ' を刺激している】',
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
      ' は ',
      item,
      ' を ',
      defender.get_colored_name(),
      ' の ',
      part,
      ' に',
      verb,
      'した】',
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
      ' は ',
      defender.get_colored_name(),
      ' に ',
      item,
      ' を着けた】',
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
      ' は ',
      defender.get_colored_name(),
      ' の ',
      part,
      ' を電気責めした】',
    ]);
  },
  /** @param {CharaTalk} attacker 主動側 */
  async use_mirror(attacker) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は全身鏡を立てた】',
    ]);
  },
  /** @param {CharaTalk} attacker 主動側 */
  async take_off_mirror(attacker) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は全身鏡を片付けた】',
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
      ' は ',
      defender.get_colored_name(),
      ' の ',
      part,
      ' から ',
      item,
      ' を取り外した】',
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
      ' は自分の ',
      part,
      ' から ',
      item,
      ' を取り外した】',
    ]);
  },
};
