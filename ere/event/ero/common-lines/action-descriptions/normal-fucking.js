const era = require('#/era-electron');

const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*):Promise>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.missionary] = handlers[ero_hooks.missionary_anal_sex] =
    async (attacker, defender, hook) => {
      if (hook.arg) {
        return era.printAndWait([
          '【',
          attacker.get_colored_name(),
          ' 以正常位插入了 ',
          defender.get_colored_name(),
          ` 的${hook.hook === ero_hooks.missionary ? '小穴' : '屁穴'}……】`,
        ]);
      } else {
        return era.printAndWait([
          '【',
          attacker.get_colored_name(),
          ' 以正常位抽插着 ',
          defender.get_colored_name(),
          ` 的${hook.hook === ero_hooks.missionary ? '小穴' : '屁穴'}……】`,
        ]);
      }
    };

  handlers[ero_hooks.doggy_style] = handlers[ero_hooks.doggy_style_anal_sex] =
    async (attacker, defender, hook) => {
      if (hook.arg) {
        return era.printAndWait([
          '【',
          attacker.get_colored_name(),
          ' 以后背位插入了 ',
          defender.get_colored_name(),
          ` 的${hook.hook === ero_hooks.doggy_style ? '小穴' : '屁穴'}……】`,
        ]);
      } else {
        return era.printAndWait([
          '【',
          attacker.get_colored_name(),
          ' 以后背位抽插着 ',
          defender.get_colored_name(),
          ` 的${hook.hook === ero_hooks.doggy_style ? '小穴' : '屁穴'}……】`,
        ]);
      }
    };

  handlers[ero_hooks.sitting] = handlers[ero_hooks.sitting_anal_sex] = async (
    attacker,
    defender,
    hook,
  ) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 与 ',
        defender.get_colored_name(),
        ' 相对而坐，将肉棒插入了 ',
        defender.get_colored_name(),
        ` 的${hook.hook === ero_hooks.sitting ? '小穴' : '屁穴'}……】`,
      ]);
    } else {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 和 ',
        defender.get_colored_name(),
        ` 相对而坐，肉棒抽插着${
          hook.hook === ero_hooks.sitting ? '小穴' : '屁穴'
        }……】`,
      ]);
    }
  };

  handlers[ero_hooks.hug_sitting] = handlers[ero_hooks.hug_sitting_anal_sex] =
    async (attacker, defender, hook) => {
      if (hook.arg) {
        return era.printAndWait([
          '【',
          attacker.get_colored_name(),
          ' 将背对着的 ',
          defender.get_colored_name(),
          ` 抱在怀里坐着，将肉棒插入了${
            hook.hook === ero_hooks.hug_sitting ? '小穴' : '屁穴'
          }……】`,
        ]);
      } else {
        return era.printAndWait([
          '【',
          attacker.get_colored_name(),
          ' 怀抱着 ',
          defender.get_colored_name(),
          ` 坐着，肉棒抽插着${
            hook.hook === ero_hooks.hug_sitting ? '小穴' : '屁穴'
          }……】`,
        ]);
      }
    };

  handlers[ero_hooks.standing] = handlers[ero_hooks.standing_anal_sex] = async (
    attacker,
    defender,
    hook,
  ) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 和 ',
        defender.get_colored_name(),
        ` 面对面站着，将肉棒插入了${
          hook.hook === ero_hooks.standing ? '小穴' : '屁穴'
        }……】`,
      ]);
    } else {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 面对面站着用肉棒抽插着 ',
        defender.get_colored_name(),
        ` 的${hook.hook === ero_hooks.standing ? '小穴' : '屁穴'}……】`,
      ]);
    }
  };

  handlers[ero_hooks.hug_standing] = handlers[ero_hooks.hug_standing_anal_sex] =
    async (attacker, defender, hook) => {
      if (hook.arg) {
        return era.printAndWait([
          '【',
          attacker.get_colored_name(),
          ' 站着将 ',
          defender.get_colored_name(),
          ` 揽在怀中，将肉棒插入${
            hook.hook === ero_hooks.hug_standing ? '小穴' : '屁穴'
          }……】`,
        ]);
      } else {
        return era.printAndWait([
          '【',
          attacker.get_colored_name(),
          ' 从身后用肉棒抽插着 ',
          defender.get_colored_name(),
          ` 的${hook.hook === ero_hooks.hug_standing ? '小穴' : '屁穴'}，`,
          defender.get_colored_name(),
          ' 以双手软软地撑着墙壁……】',
        ]);
      }
    };

  handlers[ero_hooks.suspended_congress] = handlers[
    ero_hooks.suspended_congress_anal_sex
  ] = async (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将 ',
        defender.get_colored_name(),
        ` 抬起架住，将肉棒插入了${
          hook.hook === ero_hooks.suspended_congress ? '小穴' : '屁穴'
        }……】`,
      ]);
    } else {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 的肉棒抽插着 ',
        defender.get_colored_name(),
        ` 的浮空${
          hook.hook === ero_hooks.suspended_congress ? '小穴' : '屁穴'
        }……】`,
      ]);
    }
  };

  handlers[ero_hooks.fucked_suspended_congress] = handlers[
    ero_hooks.fucked_suspended_congress_anal_sex
  ] = async (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将 ',
        defender.get_colored_name(),
        ' 抬起架住，用',
        hook.hook === ero_hooks.fucked_suspended_congress ? '小穴' : '屁穴',
        '容纳了 ',
        defender.get_colored_name(),
        ' 的肉棒……】',
      ]);
    } else {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 用自己的',
        hook.hook === ero_hooks.fucked_suspended_congress ? '阴道' : '肠道',
        ' 摩擦着 ',
        defender.get_colored_name(),
        ' 的浮空肉棒……】',
      ]);
    }
  };

  handlers[ero_hooks.hug_suspended_congress] = handlers[
    ero_hooks.hug_suspended_congress_anal_sex
  ] = async (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将 ',
        defender.get_colored_name(),
        ` 背对着抬起架住，肉棒插入了${
          hook.hook === ero_hooks.hug_suspended_congress ? '小穴' : '屁穴'
        }……】`,
      ]);
    } else {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 的肉棒抽插着背对的 ',
        defender.get_colored_name(),
        ` 浮空的${
          hook.hook === ero_hooks.hug_suspended_congress ? '小穴' : '屁穴'
        }……】`,
      ]);
    }
  };

  handlers[ero_hooks.ask_cowgirl] = handlers[ero_hooks.ask_cowgirl_anal_sex] =
    async (attacker, defender, hook) => {
      if (hook.arg) {
        return era.printAndWait([
          '【',
          attacker.get_colored_name(),
          ' 请求 ',
          defender.get_colored_name(),
          ` 坐在身上，用${
            hook.hook === ero_hooks.ask_cowgirl ? '小穴' : '屁穴'
          }吞没肉棒……】`,
        ]);
      } else {
        return era.printAndWait([
          '【',
          attacker.get_colored_name(),
          ' 请求身上的 ',
          defender.get_colored_name(),
          ` 继续用${
            hook.hook === ero_hooks.ask_cowgirl ? '小穴' : '屁穴'
          }套弄肉棒……】`,
        ]);
      }
    };

  handlers[ero_hooks.ask_stimulate_glans_by_virgin] = handlers[
    ero_hooks.ask_stimulate_glans_by_anal
  ] = async (attacker, defender, hook) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ` 用${
        hook.hook === ero_hooks.ask_stimulate_glans_by_virgin ? '小穴' : '屁穴'
      }套弄肉棒……】`,
    ]);

  handlers[ero_hooks.stimulate_g_spot] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用肉棒戳弄着 ',
      defender.get_colored_name(),
      ' 的G点……】',
    ]);

  handlers[ero_hooks.stimulate_large_intestine] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用肉棒戳弄着 ',
      defender.get_colored_name(),
      ' 的S状结肠……】',
    ]);

  handlers[ero_hooks.stimulate_womb] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用肉棒隔着屁穴戳弄着 ',
      defender.get_colored_name(),
      ' 的子宫……】',
    ]);

  handlers[ero_hooks.ask_fuck] = handlers[ero_hooks.ask_fuck_anal] = async (
    attacker,
    defender,
    hook,
  ) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ` 插入自己的${hook.hook === ero_hooks.ask_fuck ? '小穴' : '屁穴'}……】`,
      ]);
    } else {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ` 继续抽插自己的${
          hook.hook === ero_hooks.ask_fuck ? '小穴' : '屁穴'
        }……】`,
      ]);
    }
  };

  handlers[ero_hooks.cowgirl] = handlers[ero_hooks.cowgirl_anal_sex] = async (
    attacker,
    defender,
    hook,
  ) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 骑在 ',
        defender.get_colored_name(),
        ` 身上，以${
          hook.hook === ero_hooks.cowgirl ? '小穴' : '屁穴'
        }吞没肉棒……】`,
      ]);
    } else {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 骑在 ',
        defender.get_colored_name(),
        ` 身上，以自己的${
          hook.hook === ero_hooks.cowgirl ? '小穴' : '屁穴'
        }套弄着肉棒……】`,
      ]);
    }
  };

  handlers[ero_hooks.stimulate_glans_by_virgin] = handlers[
    ero_hooks.stimulate_glans_by_anal
  ] = async (attacker, defender, hook) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ` 用${
        hook.hook === ero_hooks.stimulate_glans_by_virgin ? '小穴' : '屁穴'
      }套弄着 `,
      defender.get_colored_name(),
      ' 的肉棒……】',
    ]);

  handlers[ero_hooks.ask_stimulate_g_spot] = async (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 用肉棒刺激G点……】',
    ]);

  handlers[ero_hooks.ask_stimulate_large_intestine] = async (
    attacker,
    defender,
  ) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 用肉棒刺激S状结肠……】',
    ]);

  handlers[ero_hooks.ask_stimulate_womb] = async (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 用肉棒隔着屁穴刺激子宫……】',
    ]);
};
