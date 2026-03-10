const era = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const { get_item_action, item_enum } = require('#/data/ero/item-const');
const { get_slang_part_name_key } = require('#/data/ero/part-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

const { __, i18n } = require('#/i18n/selector');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*):Promise>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.condom] = (attacker) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 给 ',
      {
        color: attacker.color,
        content: '自己',
      },
      ' 的肉棒套上了',
      { color: attacker.color, content: '避孕套' },
      '】',
    ]);

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   */
  handlers[ero_hooks.other_condom] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 给 ',
      defender.get_colored_name(),
      ' 的肉棒套上了',
      { color: attacker.color, content: '避孕套' },
      '】',
    ]);

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param _
   * @param {{part:number,user:number}} extra
   */
  handlers[ero_hooks.use_lubricating_fluid] = async (
    attacker,
    defender,
    _,
    extra,
  ) => {
    let aim_colored_name = defender.get_colored_name();
    if (extra.user === attacker.id) {
      aim_colored_name = attacker.get_colored_name();
      aim_colored_name.content = '自己';
    }
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 将润滑液涂抹在了 ',
      aim_colored_name,
      ' 的 ',
      {
        color: buff_colors[2],
        content: i18n().body_part[get_slang_part_name_key(extra.part)],
      },
      '】',
    ]);
  };

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param _
   * @param {{item:number,user:number}} extra_flag
   */
  handlers[ero_hooks.use_medicine] = (attacker, defender, _, extra_flag) => {
    if (extra_flag.user === defender.id) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 给 ',
        defender.get_colored_name(),
        ' 喂食了 ',
        { color: buff_colors[2], content: i18n().tb_item[extra_flag.item] },
        '】',
      ]);
    } else {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 服用了 ',
        { color: buff_colors[2], content: i18n().tb_item[extra_flag.item] },
        '】',
      ]);
    }
  };

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} _
   * @param {{item:number,[owner]:number,part:number,[stay]:number}} extra
   */
  handlers[ero_hooks.use_item] = (attacker, defender, _, extra) => {
    if (extra.stay !== void 0) {
      return era.printAndWait([
        '【',
        get_chara_talk(extra.owner).get_colored_name(),
        ' ',
        __(`body_part.${get_item_action(extra.item, extra.part)}`),
        ' 的 ',
        { content: i18n().tb_item[extra.item], color: buff_colors[2] },
        ' 持续刺激着 ',
        get_chara_talk(extra.stay).get_colored_name(),
        ' 的 ',
        {
          content: i18n().body_part[get_slang_part_name_key(extra.part)],
          color: buff_colors[2],
        },
        '】',
      ]);
    } else if (extra.item === item_enum.electric_stunner) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 电击了 ',
        defender.get_colored_name(),
        ' 的 ',
        {
          content: i18n().body_part[get_slang_part_name_key(extra.part)],
          color: buff_colors[2],
        },
        '】',
      ]);
    } else if (extra.item === item_enum.mirror) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 立起了一面全身镜】',
      ]);
    } else if (extra.part === 99) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 为 ',
        defender.get_colored_name(),
        ' 戴上了 ',
        { content: i18n().tb_item[extra.item], color: buff_colors[2] },
        '】',
      ]);
    } else {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 对 ',
        defender.get_colored_name(),
        ` 的 `,
        {
          content: i18n().body_part[get_slang_part_name_key(extra.part)],
          color: buff_colors[2],
        },
        ' ',
        __(`body_part.${get_item_action(extra.item, extra.part)}`),
        ' 了 ',
        { content: i18n().tb_item[extra.item], color: buff_colors[2] },
        '】',
      ]);
    }
  };

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   * @param {{item:number,owner:number,part:number|string,user:number}} extra
   */
  handlers[ero_hooks.take_off_item] = (attacker, defender, hook, extra) => {
    if (+extra.part === item_enum.mirror) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 撤除了全身镜】',
      ]);
    } else {
      let aim_colored_name = defender.get_colored_name();
      if (extra.user === attacker.id) {
        aim_colored_name = attacker.get_colored_name();
        aim_colored_name.content = '自己';
      }
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 从 ',
        aim_colored_name,
        ' 的 ',
        {
          content: i18n().body_part[get_slang_part_name_key(extra.part)],
          color: buff_colors[2],
        },
        ' 取下了 ',
        { content: i18n().tb_item[extra.item], color: buff_colors[2] },
        '】',
      ]);
    }
  };

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   * @param extra_flag
   */
  handlers[ero_hooks.ask_use_item] = (attacker, defender, hook, extra_flag) =>
    handlers[ero_hooks.use_item](defender, attacker, hook, extra_flag);
};
