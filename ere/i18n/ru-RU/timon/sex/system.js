/**
 * @file 调教 -系统提示
 * @author イーウィヤ
 * @author 黑奴队长
 */
const { get, input, printAndWait, printButton } = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');
const { item_enum } = require('#/data/ero/item-const');
const { part_enum } = require('#/data/ero/part-const');
const era = require('#/era-electron');

module.exports = {
  /**
   * 选择 [邀请上床] 之后的系统级地文演出
   */

  /** 选择性爱后结束当前回合的按钮 */
  bt_back_home: 'Пригласить на ночь',
  /** 马上开始，但是以强奸展开，会使用强奸的口上和地文 */
  bt_rape_play: 'Изнасилование',
  /** 没有任何负面作用的用药 */
  bt_use_medicine: 'Афродизиаки',
  /**
   * 拥有合意（爱慕值达标且对方状态允许）的情况下，邀请上床时的提示信息和正常性爱（无强奸和用药、马上开始）按钮
   * @param {CharaTalk} chara 对象
   * @param {CharaTalk} you 玩家
   * @returns {[TextContent,string]}
   */
  get_want_sex_as_lover: (chara, you) => [
    [
      chara.get_colored_name(),
      ' смотрит на ',
      you.get_colored_name(),
      ' с нежностью…',
      { isBr: true },
      'Что делать?',
    ],
    'Обычное ухаживание',
  ],
  /**
   * 不具有合意但身为性奴/孕袋的情况下，邀请上床时的提示信息和正常性爱（无强奸和用药、马上开始）按钮
   * @param {CharaTalk} chara 对象
   * @param {CharaTalk} you 玩家
   * @returns {[TextContent,string]}
   */
  get_want_sex_as_slave: (chara, you) => [
    [
      chara.get_colored_name(),
      ' смотрит на ',
      you.get_colored_name(),
      ' чуть развязно…',
      { isBr: true },
      'Что делать?',
    ],
    'Предложить отдаться',
  ],
  /**
   * 是强奸对方还是要求对方强奸玩家
   * @param {CharaTalk} chara 对象
   * @param {CharaTalk} you 玩家
   * @returns {Promise<boolean>} true - 强奸对方; false - 对方强奸玩家
   */
  async choose_who_to_rape(chara, you) {
    printButton(`Погрубее ${chara.sex}`, 1);
    printButton('«Пожалуйста, погрубее со мной»', 2);
    const ret = (await input()) === 1;
    if (ret) {
      await printAndWait([
        chara.get_colored_name(),
        ' понимающе изобразила ужас, будто её вот-вот возьмут силой…',
      ]);
    } else {
      await printAndWait([
        you.get_colored_name(),
        ' изобразила испуг и беззащитность, разбудив в ',
        chara.get_colored_name(),
        ' зверя…',
      ]);
    }
    return ret;
  },
  use_medicine_header: 'Какое средство использовать?',
  no_medicine_notification: 'Нет доступных средств',
  /**
   * 使用超马跳Z
   * @param {CharaTalk} chara
   * @param {string} item
   */
  async use_super_uma_z(chara, item) {
    await printAndWait([
      chara.get_colored_name(),
      ' послушно выпивает ',
      item,
      '…',
    ]);
    await printAndWait([
      chara.get_colored_name(),
      ' приходит в крайнее возбуждение!',
    ]);
  },
  /**
   * 使用马跳S
   * @param {CharaTalk} chara
   * @param {string} item
   */
  async use_uma_s(chara, item) {
    await printAndWait([
      chara.get_colored_name(),
      ' послушно выпивает ',
      item,
      '…',
    ]);
    await printAndWait([chara.get_colored_name(), ' с румянцем засыпает…']);
  },
  /**
   * 没有合意，但对方拥有淫纹/欢愉刻印的情况下邀请上床
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_want_sex_as_master_by_pleasure: (chara, you) => [
    chara.get_colored_name(),
    ' не хочет провести ночь с ',
    you.get_colored_name(),
    '…',
    { isBr: true },
    'но обожжённое телесной негой сердце уже не даёт ',
    chara.sex,
    ' выговорить отказ…',
  ],
  /**
   * 没有合意，但对方拥有同心刻印的情况下邀请上床
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_want_sex_as_master_by_meek: (chara, you) => [
    chara.get_colored_name(),
    ' не хочет провести ночь с ',
    you.get_colored_name(),
    '…',
    { isBr: true },
    'и всё же покорно приготовилась…',
  ],
  /** 没有达成合意，但对方拥有刻印的情况下直接开始调教 */
  bt_start_train: 'Начать дрессуру',
  /** 没有达成合意，但对方拥有刻印的情况下开始调教并结束回合 */
  bt_train_back_home: 'Увести на ночь',
  /**
   * 没有合意也没有刻印，
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_want_sex_as_raper: (chara, you) => [
    chara.get_colored_name(),
    ' не хочет провести ночь с ',
    you.get_colored_name(),
    '…',
    { isBr: true },
    'Как быть?',
  ],
  bt_rape: 'Попытаться изнасиловать',
  bt_drug: 'Попытаться подмешать',
  /**
   * 没有合意也没有刻印，选择强奸
   * @param {CharaTalk} chara 对象
   * @param {CharaTalk} you 玩家
   * @param {boolean} success 是否成功
   */
  async rape(chara, you, success) {
    if (success) {
      await printAndWait([
        you.get_colored_name(),
        ' Сила ',
        you.get_colored_name(),
        ' поддержала бесстыдство…',
      ]);
      await printAndWait([chara.get_colored_name(), ' застывает в ужасе…']);
    } else {
      await printAndWait([
        you.get_colored_name(),
        ' не смог(ла) одолеть ',
        chara.get_colored_name(),
        '…',
      ]);
      await printAndWait([
        chara.get_colored_name(),
        ' валит ',
        you.get_colored_name(),
        ' на пол и быстро уходит…',
      ]);
      await printAndWait([
        'Хотя ',
        chara.get_colored_name(),
        ' молчит, репутация ',
        you.get_colored_name(),
        ' в обществе всё равно падает!',
      ]);
    }
  },
  /**
   * 没有合意也没有刻印，选择下药
   * @param {CharaTalk} chara 对象
   * @param {CharaTalk} you 玩家
   * @param {1|2} medicine_type 药品种类，1是超马跳Z，2是马跳S
   * @param {boolean} success 是否成功
   */
  async drug(chara, you, medicine_type, success) {
    if (success) {
      await printAndWait([
        you.get_colored_name(),
        ' — подлая уловка сработала…',
      ]);
      if (medicine_type === 1) {
        await printAndWait([
          chara.get_colored_name(),
          ' выпила подмешанный чай, и вспыхнувшая похоть сожгла остатки рассудка…',
        ]);
      } else {
        await printAndWait([
          chara.get_colored_name(),
          ' выпила подмешанный чай и постепенно потеряла сознание…',
        ]);
      }
    } else {
      await printAndWait([
        chara.get_colored_name(),
        ' чутко заметила неладное……',
      ]);
      await printAndWait([
        chara.get_colored_name(),
        ' толкнула ',
        you.get_colored_name(),
        ' на пол и быстро ушла…',
      ]);
      await printAndWait([
        'Хоть ',
        chara.get_colored_name(),
        ' и держит язык за зубами, репутация ',
        you.get_colored_name(),
        ' всё равно упала!',
      ]);
    }
  },
  /**
   * 使用超马跳Z下药迷奸后的特别演出
   * @param {CharaTalk} chara
   * @returns {Promise<void>}
   */
  async after_rape_by_super_uma_z(chara) {
    await printAndWait([
      'В пылу страсти всё прошло, но когда ',
      chara.get_colored_name(),
      ' очнётся — наверняка будет стыдно и зло…',
    ]);
  },
  /**
   * 对方睡着的情况下邀请上床
   * @param {CharaTalk} chara
   */
  get_want_sex_sleep: (chara) => [
    chara.get_colored_name(),
    ' крепко спит.',
    { isBr: true },
    'Напасть?',
  ],
  /** 选择睡奸 */
  bt_rape_in_sleeping: 'Напасть!',

  /**
   * 使用道具
   */
  lub_select_target: 'Кому нанести смазку?',
  select_entry_template: '%ITEM% (%COUNT%)',
  /** @param {CharaTalk} you */
  get_lub_give_up: (you) => [you.get_colored_name(), ' отказывается от смазки'],
  lub_no_parts: 'Нет частей, которым нужна смазка',
  /** @param {CharaTalk} chara */
  get_lub_select_part: (chara) => [
    'Какую часть ',
    chara.get_colored_name(),
    ' смазать?',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} part
   */
  get_lub_confirm: (chara, part) => [
    'Смазать у ',
    chara.get_colored_name(),
    ' у ',
    part,
    '?',
  ],
  med_no_medicines: 'Пока нет доступных препаратов',
  med_select_target: 'Кому дать препарат?',
  /** @param {CharaTalk} you */
  get_med_give_up: (you) => [
    you.get_colored_name(),
    ' отказывается от препаратов',
  ],
  /** @param {CharaTalk} chara */
  get_med_no_medicines_for_chara: (chara) => [
    'Нечем поить ',
    chara.get_colored_name(),
    ' — препаратов нет',
  ],
  med_no_medicines_for_you: 'Нет препаратов, которые можно принять',
  /** @param {CharaTalk} chara */
  get_med_select_medicine: (chara) => [
    'Какой препарат дать ',
    chara.get_colored_name(),
    '?',
  ],
  med_select_medicine_for_you: 'Какой препарат принять?',
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} item
   */
  get_med_confirm_for_chara: (chara, item) => [
    'Дать ',
    chara.get_colored_name(),
    ' — ',
    item,
    '?',
  ],
  /** @param {PrintedSpan} item */
  get_med_confirm_for_you: (item) => ['Принять ', item, '?'],
  /** @param {PrintedSpan} item */
  get_med_give_up_medicine: (item) => ['Отказались от ', item],
  itm_no_items: 'Пока нет доступных секс-игрушек',
  itm_select_item: 'Какую игрушку использовать?',
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} item
   */
  get_itm_select_part: (chara, item) => [
    'На какую часть ',
    chara.get_colored_name(),
    ' надеть ',
    item,
    '?',
  ],
  itm_no_parts: 'Нет частей, куда можно поставить эту игрушку',
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} item
   * @param {PrintedSpan} part
   */
  get_itm_confirm_with_part: (chara, item, part) => [
    'Точно применить к ',
    chara.get_colored_name(),
    ' на ',
    part,
    ' — ',
    item,
    '?',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} item
   */
  get_itm_confirm_without_part: (chara, item) => [
    'Точно использовать ',
    chara.get_colored_name(),
    ' на ',
    item,
    '?',
  ],
  /**
   * @param {CharaTalk} you
   * @param {PrintedSpan} item
   */
  get_itm_give_up_item: (you, item) => [
    you.get_colored_name(),
    ' отказывается от ',
    item,
  ],
  itm_take_off_select_target: 'С кого снять игрушку?',
  /** @param {CharaTalk} you */
  get_itm_give_up_take_off: (you) => [
    you.get_colored_name(),
    ' отказывается снимать игрушки',
  ],
  /** @param {CharaTalk} you */
  get_itm_no_item_to_take_off: (you) => [
    you.get_colored_name(),
    ' — секс-игрушек на ней нет',
  ],
  itm_take_off_select_item: 'Какую игрушку снять?',
  itm_take_off_select_entry_template: '%ITEM% (%PART%)',
  itm_take_off_mirror_confirm: 'Снять 【зеркало во весь рост】?',
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} part
   * @param {PrintedSpan} item
   */
  get_itm_take_off_confirm: (chara, part, item) => [
    'Точно снять с ',
    chara.get_colored_name(),
    ' с ',
    part,
    ' — ',
    item,
    '?',
  ],
  /**
   * @param {CharaTalk} you
   * @param {PrintedSpan} item
   */
  get_itm_take_off_give_up: (you, item) => [
    you.get_colored_name(),
    ' отказывается снимать ',
    item,
  ],

  /** @param {CharaTalk} chara */
  get_change_master_info: (chara) => [
    chara.get_colored_name(),
    ' перехватывает инициативу',
  ],
  /** @param {CharaTalk} chara */
  get_escape_info: (chara) => [chara.get_colored_name(), ' сбегает'],

  orgasm: 'оргазм',
  orgasm_template: 'Множественный оргазм ×%TIME%',

  /**
   * 多重高潮报告
   * @param {CharaTalk} chara 高潮的角色
   * @param {PrintedSpan} orgasm 多重高潮名
   * @returns {TextContent}
   */
  get_chara_total_orgasm: (chara, orgasm) => [
    chara.get_colored_name(),
    ' У ',
    orgasm,
  ],
  /**
   * 部位高潮报告
   * @param {CharaTalk} chara 高潮的角色
   * @param {PrintedSpan} part 高潮的部位
   * @param {PrintedSpan} orgasm 高潮信息
   * @returns {TextContent}
   */
  get_chara_part_orgasm: (chara, part, orgasm) => [
    chara.get_colored_name(),
    ' — ',
    part,
    ' ',
    orgasm,
  ],
  /**
   * 精神高潮报告
   * @param {CharaTalk} chara 高潮的角色
   * @param {PrintedSpan} cause 高潮的原因（施虐或受虐）
   * @param {PrintedSpan} orgasm 高潮信息
   * @returns {TextContent}
   */
  get_chara_spirit_orgasm: (chara, cause, orgasm) => [
    chara.get_colored_name(),
    ' из‑за ',
    cause,
    ' ',
    orgasm,
  ],
  /**
   * 液体分泌报告
   * @param {CharaTalk} chara 分泌液体的角色
   * @param {PrintedSpan} part 分泌液体的部位
   * @param {[]} change 分泌信息
   * @returns {TextContent}
   */
  get_chara_have_liquid: (chara, part, change) => [
    chara.get_colored_name(),
    ' — ',
    part,
    ' ',
    ...change,
  ],
  liquid_amount_template: '%AMOUNT%ml',
  /**
   * 颜射报告
   * @param {CharaTalk} chara 射精的角色
   * @param {[]} targets 颜射的目标
   * @param {PrintedSpan} semen 射精量
   * @returns {TextContent}
   */
  get_chara_cum_on_face: (chara, targets, semen) => [
    chara.get_colored_name(),
    ' кончил(а) на лицо ',
    ...targets,
    ' — ',
    semen,
    ' мл спермы',
  ],
  /**
   * @param {CharaTalk} chara 射精的角色
   * @param {PrintedSpan} semen 射精量
   * @returns {TextContent}
   */
  get_chara_cum_in_condom: (chara, semen) => [
    chara.get_colored_name(),
    ' кончает ',
    semen,
    ' спермы в презерватив',
  ],
  /**
   * @param {CharaTalk} chara 射精的角色
   * @param {PrintedSpan} item 飞机杯
   * @param {PrintedSpan} semen 射精量
   * @returns {TextContent}
   */
  get_chara_cum_in_artificial_vagina: (chara, item, semen) => [
    chara.get_colored_name(),
    ' кончил(а) в ',
    item,
    ' — ',
    semen,
    ' мл спермы',
  ],
  /**
   * @param {CharaTalk} chara 射精的角色
   * @param {CharaTalk} target 被射的角色
   * @param {string} part 射精位置
   * @param {PrintedSpan} semen 射精量
   * @returns {TextContent}
   */
  get_chara_cum_in_part: (chara, target, part, semen) => [
    chara.get_colored_name(),
    ' кончил(а) в ',
    target.get_colored_name(),
    ', ',
    part,
    ' — ',
    semen,
    ' мл спермы',
  ],
  /**
   * @param {CharaTalk} chara 射精的角色
   * @param {PrintedSpan} semen 射精量
   * @returns {TextContent}
   */
  get_chara_cum: (chara, semen) => [
    chara.get_colored_name(),
    ' кончает ',
    semen,
    ' спермы',
  ],
  // 射精位置
  cum_in_anal: 'в жопу',
  cum_in_body: 'на тело',
  cum_in_breast: 'между грудей',
  cum_in_clitoris: 'на клитор',
  cum_in_foot: 'в стопы',
  cum_in_hand: 'в руку',
  cum_in_mouth: 'в рот',
  cum_in_penis: 'на член',
  cum_in_virgin: 'в киску',
  /**
   * 获取母乳分泌报告
   * @param {number} cid 分泌母乳的角色
   * @param {[]} targets 分泌接触目标
   * @param {number} part 分泌接触部位
   * @param {PrintedSpan} amount 分泌量
   * @param {boolean} is_orgasm 是否高潮（取决于是喷出来还是流出来）
   */
  get_milk_info(cid, targets, part, amount, is_orgasm) {
    const actions = [];
    switch (part) {
      case part_enum.mouth:
        actions.push('в рот ', ...targets, ' — ');
        break;
      case part_enum.hand:
        actions.push('в ', ...targets, ' — на пальцы');
        break;
      case item_enum.milk_pump:
        actions.push(
          'ex:',
          { content: 'молокоотсос', color: buff_colors[2] },
          ' — ',
        );
    }
    if (get(`ex:${cid}:喷奶阻碍`) > 0) {
      actions.push('резко брызнуло ');
    } else if (is_orgasm) {
      actions.push('брызнуло ');
    } else {
      switch (part) {
        case part_enum.mouth:
        case part_enum.hand:
        case part_enum.item:
          actions.push('выступило ');
          break;
        default:
          actions.push('потекло ');
      }
    }
    actions.push(' ', amount, ' мл молока');
    return actions;
  },
  /**
   * 获取爱液分泌报告
   * @param {number} cid 分泌爱液的角色
   * @param {[]} targets 爱液接触目标
   * @param {number} part 爱液接触部位，100 - 非接触口，101 - 非接触阴茎
   * @param {PrintedSpan} amount 分泌量
   */
  get_squirt_info(cid, targets, part, amount) {
    const actions = [];
    switch (part) {
      case part_enum.mouth:
        actions.push('в рот ', ...targets, ' — ');
        break;
      case part_enum.hand:
        actions.push('на ', ...targets, ' — на пальцы');
        break;
      case part_enum.foot:
        actions.push('у ', ...targets, ' — под ноги');
        break;
      case part_enum.penis:
        return [
          'плеснуло ',
          amount,
          ' мл смазки на ',
          ...targets,
          ' — на головку',
        ];
      case 100:
        actions.push('на ', ...targets, ' — на губы');
        break;
      case 101:
        actions.push('на ', ...targets, ' — на член');
    }
    if (era.get(`nowex:${cid}:潮吹`) > 0) {
      actions.push('брызнуло ');
    } else {
      switch (part) {
        case part_enum.mouth:
        case 100:
          actions.push('плеснуло ');
          break;
        default:
          actions.push('потекло ');
      }
    }
    actions.push(' ', amount, ' мл смазки');
    return actions;
  },

  /**
   * 榨乳结算
   */
  /**
   * @param {PrintedSpan} amount
   * @param {string} item
   * @returns {TextContent}
   */
  get_milk_ml: (amount, item) => [
    'Молокоотсосом собрано ',
    amount,
    'ml ',
    item,
  ],
  /**
   * @param {PrintedSpan} amount
   * @param {string} item
   * @returns {TextContent}
   */
  get_milk_item: (amount, item) => [
    ', после розлива получено ',
    amount,
    ' бут. ',
    item,
  ],
  /**
   * @param {PrintedSpan} amount
   * @param {CharaTalk} you
   * @returns {TextContent}
   */
  get_your_milk_info: (amount, you) => [
    ' (из них ',
    amount,
    ' бутылок от ',
    you.get_colored_name(),
    ')',
  ],

  /**
   * 调教结束后的总结情报
   * @param {CharaTalk} taste 秋川弥生/北方风味
   * @param {CharaTalk} minoru 骏川缰绳/丰收时刻
   * @param {CharaTalk} riko 㭴本理子
   * @param {CharaTalk} glasse 苦涩糖衣
   * @param {CharaTalk} cocon 小小蚕茧
   */
  async ero_report(taste, minoru, riko, glasse, cocon) {
    taste.say_as_unknown('В н и м а н и е! Сводка оргазмов～♫');
    minoru.say_as_unknown('Ниже — краткий отчёт об этом «лошадином прыжке»～');
    // 1% 几率理子会说不下去，让糖衣和蚕茧打气
    if (Math.random() < 0.01) {
      await riko.say_as_unknown_and_wait('Не… не нравится… если…');
      await cocon.say_as_unknown_and_wait('Тренер～');
      await glasse.say_as_unknown_and_wait('Давай! Тренер～ давай!');
      await riko.say_as_unknown_and_wait(
        '…в следующий раз во время «прыжка» включите в настройках 【краткий отчёт результатов】…',
      );
      await riko.say_as_unknown_and_wait('…ох～');
    } else {
      await riko.say_as_unknown_and_wait(
        'Если не нравится — в следующий раз во время «прыжка» включите в настройках 【краткий отчёт результатов】～',
      );
    }
  },
  // 各部位快感没有满足时的描述
  unsatisfied_mouth:
    'Неудовлетворённые губы всё ещё чуть приоткрыты, будто ждут чего‑то…',
  unsatisfied_nipple: 'Ненасытные ягодки дрожат, торча наружу…',
  unsatisfied_hidden_nipple:
    'Ненасытные ягодки дрожат, высовываясь из защитной ямки…',
  unsatisfied_body: 'Недостаточно обласканное тело блестит потом и румянцем…',
  unsatisfied_penis: 'Член на грани предела всё ещё жаждет выстрела…',
  unsatisfied_clitoris:
    'Полностью опухшая красная горошина и сладка, и мучительна…',
  unsatisfied_vagina: 'Сжимающаяся киска дышит жаром…',
  unsatisfied_sadism:
    'Удовольствие, вот-вот пришедшее от садизма, всё ещё не уходит…',
  unsatisfied_sadism_zero_stamina:
    'Сны о садизме тревожат уже затихающее тело…',
  unsatisfied_masochism:
    'Удовольствие, вот-вот пришедшее от мазохизма, всё ещё не уходит…',
  unsatisfied_masochism_zero_stamina:
    'Сны о мазохизме тревожат уже затихающее тело…',

  unsatisfied_lose_virgin_p:
    'Но скрытая в нём первобытная сила так и не вырвалась до конца…',
  unsatisfied_lose_virgin_v:
    'Тело после разрыва не успело в первом вкусе запретного плода распробовать сладость наслаждения…',
};
