const era = require('#/era-electron');

const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*):Promise>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.kiss] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 强行亲吻着 ',
      defender.get_colored_name(),
      ' 的嘴唇……】',
    ]);

  handlers[ero_hooks.french_kiss] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 强行探索着 ',
      defender.get_colored_name(),
      ' 的口腔深处……】',
    ]);

  handlers[ero_hooks.relax] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 好整以暇地欣赏着 ',
      defender.get_colored_name(),
      ' 现在的样子……】',
    ]);

  handlers[ero_hooks.talk] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 对 ',
      defender.get_colored_name(),
      ' 说道……】',
    ]);
};
