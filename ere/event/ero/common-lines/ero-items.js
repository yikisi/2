const era = require('#/era-electron');

const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const {
  get_item_action,
  item_enum,
  item_names,
  medicine_enum,
  medicine_names,
} = require('#/data/ero/item-const');
const { part_names, part_names4item } = require('#/data/ero/part-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

/**
 * @author 黑奴零号
 * @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*)>} handlers
 */
module.exports = (handlers) => {
  /** @param {CharaTalk} attacker */
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
      '……】',
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
      '……】',
    ]);

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param _
   * @param {{part:number,user:number}} extra_flag
   */
  handlers[ero_hooks.use_lubricating_fluid] = async (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    let aim_colored_name = defender.get_colored_name();
    if (extra_flag.user === attacker.id) {
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
        content: part_names[extra_flag.part],
      },
      '……】',
    ]);
  };

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param _
   * @param {{item:number,user:number}} extra_flag
   */
  handlers[ero_hooks.use_medicine] = async (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    let aim_chara;
    if (extra_flag.user === defender.id) {
      aim_chara = defender;
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 给 ',
        defender.get_colored_name(),
        ' 喂食了 ',
        { color: buff_colors[2], content: medicine_names[extra_flag.item] },
        '……】',
      ]);
    } else {
      aim_chara = attacker;
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 服用了 ',
        { color: buff_colors[2], content: medicine_names[extra_flag.item] },
        '……】',
      ]);
    }
    switch (extra_flag.item) {
      case medicine_enum.fron_k:
      case medicine_enum.fron_p:
        if (era.get(`cflag:${aim_chara.id}:性别`) - 1) {
          await era.printAndWait([
            aim_chara.get_colored_name(),
            ' 长出了 ',
            { color: buff_colors[2], content: '凶恶的巨根' },
            '！',
          ]);
        } else if (get_penis_size(aim_chara.id) <= 3) {
          await era.printAndWait([
            aim_chara.get_colored_name(),
            ' 的肉棒更形健硕了……',
          ]);
        }
        break;
      case medicine_enum.drug_m:
        await era.printAndWait([
          aim_chara.get_colored_name(),
          ' 的乳房开始流出',
          { color: buff_colors[2], content: '乳汁' },
          '……',
        ]);
    }
    if (
      !era.get(`tcvar:${aim_chara.id}:发情`) &&
      (extra_flag.item === medicine_enum.uma_z ||
        extra_flag.item === medicine_enum.fron_k ||
        extra_flag.item === medicine_enum.fron_p)
    ) {
      await era.printAndWait([
        aim_chara.get_colored_name(),
        ' 变得兴奋起来了……',
      ]);
    }
  };

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} _
   * @param {{item:number,[owner]:number,part:number,[stay]:number}} extra_flag
   */
  handlers[ero_hooks.use_item] = (attacker, defender, _, extra_flag) => {
    if (extra_flag.stay !== undefined) {
      era.print([
        '【',
        get_chara_talk(extra_flag.owner).get_colored_name(),
        ` ${get_item_action(extra_flag.item, extra_flag.part)} 的 `,
        { content: item_names[extra_flag.item], color: buff_colors[2] },
        ' 持续刺激着 ',
        get_chara_talk(extra_flag.stay).get_colored_name(),
        ' 的 ',
        {
          content:
            part_names4item[extra_flag.part] || part_names[extra_flag.part],
          color: buff_colors[2],
        },
        '……】',
      ]);
    } else if (extra_flag.item === item_enum.electric_stunner) {
      era.print([
        '【',
        attacker.get_colored_name(),
        ' 电击了 ',
        defender.get_colored_name(),
        ' 的 ',
        {
          content:
            part_names4item[extra_flag.part] || part_names[extra_flag.part],
          color: buff_colors[2],
        },
        '……】',
      ]);
    } else if (extra_flag.item === item_enum.mirror) {
      era.print(['【', attacker.get_colored_name(), ' 立起了一面全身镜……】']);
    } else if (extra_flag.part === 99) {
      era.print([
        '【',
        attacker.get_colored_name(),
        ' 为 ',
        defender.get_colored_name(),
        ' 戴上了 ',
        { content: item_names[extra_flag.item], color: buff_colors[2] },
        '……】',
      ]);
    } else {
      era.print([
        '【',
        attacker.get_colored_name(),
        ' 对 ',
        defender.get_colored_name(),
        ` 的 `,
        {
          content:
            part_names4item[extra_flag.part] || part_names[extra_flag.part],
          color: buff_colors[2],
        },
        `  ${get_item_action(extra_flag.item, extra_flag.part)}了 `,
        { content: item_names[extra_flag.item], color: buff_colors[2] },
        '……】',
      ]);
    }
  };

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   * @param {{item:number,owner:number,part:number|string,user:number}} extra_flag
   */
  handlers[ero_hooks.take_off_item] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) => {
    if (extra_flag.part === '全身镜') {
      era.print(['【', attacker.get_colored_name(), ' 撤除了全身镜……】']);
    } else {
      let aim_colored_name = defender.get_colored_name();
      if (extra_flag.user === attacker.id) {
        aim_colored_name = attacker.get_colored_name();
        aim_colored_name.content = '自己';
      }
      era.print([
        '【',
        attacker.get_colored_name(),
        ' 从 ',
        aim_colored_name,
        ' 的 ',
        {
          content:
            part_names4item[extra_flag.part] ||
            part_names[extra_flag.part] ||
            '身上',
          color: buff_colors[2],
        },
        ' 取下了 ',
        { content: item_names[extra_flag.item], color: buff_colors[2] },
        '……】',
      ]);
    }
  };

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   * @param extra_flag
   */
  handlers[ero_hooks.ask_use_item] = (attacker, defender, hook, extra_flag) => {
    handlers[ero_hooks.use_item](defender, attacker, hook, extra_flag);
  };
};
