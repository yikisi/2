const era = require('#/era-electron');

const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*):Promise>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.missionary] = handlers[ero_hooks.missionary_anal_sex] = (
    attacker,
    defender,
    hook,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 伏在沉睡的 ',
      defender.get_colored_name(),
      ' 身上，奸淫着',
      hook.hook === ero_hooks.missionary ? '小穴' : '屁穴',
      '】',
    ]);

  handlers[ero_hooks.doggy_style] = handlers[ero_hooks.doggy_style_anal_sex] = (
    attacker,
    defender,
    hook,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 伏在俯卧着的 ',
      defender.get_colored_name(),
      ' 身上，奸淫着',
      hook.hook === ero_hooks.doggy_style ? '小穴' : '屁穴',
      '】',
    ]);

  handlers[ero_hooks.stimulate_g_spot] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用肉棒刺激着沉睡的 ',
      defender.get_colored_name(),
      ' 深藏的G点】',
    ]);

  handlers[ero_hooks.stimulate_womb] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用肉棒隔着屁穴刺激着沉睡的 ',
      defender.get_colored_name(),
      ' 敏感的子宫】',
    ]);

  handlers[ero_hooks.cowgirl] = handlers[ero_hooks.cowgirl_anal_sex] = (
    attacker,
    defender,
    hook,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 骑在沉睡的 ',
      defender.get_colored_name(),
      ' 身上，以',
      hook.hook === ero_hooks.cowgirl ? '小穴' : '屁穴',
      '套弄着肉棒】',
    ]);

  handlers[ero_hooks.stimulate_glans_by_virgin] = handlers[
    ero_hooks.stimulate_glans_by_anal
  ] = (attacker, defender, hook) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 以',
      hook.hook === ero_hooks.stimulate_glans_by_virgin ? '小穴' : '屁穴',
      '套弄着沉睡的 ',
      defender.get_colored_name(),
      ' 耸立的肉棒】',
    ]);
};
