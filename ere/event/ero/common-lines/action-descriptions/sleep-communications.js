const era = require('#/era-electron');

const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*):Promise>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.kiss] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 亲吻着沉睡的 ',
      defender.get_colored_name(),
      '】',
    ]);

  handlers[ero_hooks.french_kiss] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 深吻着沉睡的 ',
      defender.get_colored_name(),
      '】',
    ]);
};
