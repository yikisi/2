const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalFucking = require('#/event/ero/common/normal/fucking');

module.exports = class extends EroNormalFucking {
  async missionary(attacker, defender, hook) {
    if (defender.id !== this.root.id) {
      return await super.missionary(attacker, defender, hook);
    }
    if (hook.arg) {
      await defender.say_and_wait([
        '哇啊，',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 等……❤️',
      ]);
      era.println();
      await attacker.print_and_wait([
        '忍耐不住，将 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 扑倒在地。',
      ]);
      await attacker.print_and_wait([
        defender.sex,
        '的屁股和大腿随着插入开始不住痉挛……',
      ]);
    } else {
      await attacker.print_and_wait(
        '插入前就已经十分敏感的小穴被袭击后不断的重复小幅的高潮。',
      );
      await attacker.print_and_wait([
        '每次抽插都让 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 不受控制的颤抖，却还是紧紧咬着肉棒不放……',
      ]);
    }
  }

  async doggy_style(attacker, defender, hook) {
    if (defender.id !== this.root.id) {
      return await super.doggy_style(attacker, defender, hook);
    }
    if (hook.arg) {
      await defender.say_and_wait('这个姿势的话，是最能完整接受雄性的体位。');
      await defender.say_and_wait('从人体工学的角度来看……唔！');
      era.println();
      await attacker.print_and_wait([
        '在 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 喋喋不休的时候，看准时机插入',
        defender.sex,
        '坦露的蜜穴。',
      ]);
      era.println();
      await attacker.say_and_wait('怎么不继续了？');
      await attacker.print_and_wait([
        '故意问 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '。',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 羞红着脸，沉浸在被完全填满的喜悦当中。',
      ]);
    } else {
      await defender.say_and_wait('好深❤️一下就填满了……❤️');
      era.println();
      await defender.print_and_wait(
        '肉棒猛力深入穴口，贯穿了自己早已城门失守的蜜穴。',
      );
      await defender.print_and_wait('紧窄的雌穴欣喜的收缩着，吸附着肉棒……');
    }
  }

  async hug_standing(attacker, defender, hook) {
    if (defender.id !== 32 || !hook.arg) {
      return await super.hug_standing(attacker, defender, hook);
    }
    await defender.say_and_wait('好喜欢❤️');
    await defender.say_and_wait('像实验动物一样，纯粹性交的快乐❤️');
    await defender.say_and_wait(
      '快点，快点，像野兽一样，把我的性处理骚穴灌满❤️',
    );
  }

  async stimulate_g_spot(attacker, defender, hook) {
    if (defender.id !== 32 || !hook.arg) {
      return await super.stimulate_g_spot(attacker, defender, hook);
    }
    await defender.say_and_wait('啊❤️');
    await defender.say_and_wait(
      '不行❤️脑袋要坏掉了❤️好舒服❤️高潮了❤️要高潮了❤️要连脑浆一起排出来了❤️',
    );
    era.println();
    await defender.print_and_wait('每次深入戳到G点，脑海都会化为一片空白。');
    await defender.print_and_wait([
      '脑袋里所能思考的，所能感受到的只剩与 ',
      sys_get_colored_callname(defender.id, attacker.id),
      ' 的交尾，被 ',
      sys_get_colored_callname(defender.id, attacker.id),
      ' 用力侵犯的快感……',
    ]);
  }

  async ask_stimulate_glans_by_virgin(attacker, defender, hook) {
    if (defender.id !== 32 || !hook.arg) {
      return await super.ask_stimulate_glans_by_virgin(
        attacker,
        defender,
        hook,
      );
    }
    await defender.say_and_wait('好过分……');
    era.println();
    await attacker.print_and_wait(
      '虽然喊着过分，但诚实的蜜穴还是忍不住啾的缩的更紧，好让正在进行不合作运动的肉棒先生能够好好享受自己的全方位肉穴服侍……',
    );
  }

  async ask_fuck(attacker, defender, hook) {
    if (attacker.id !== 32 || !hook.arg) {
      return await super.ask_fuck(attacker, defender, hook);
    }
    if (Math.random() < 0.5) {
      await attacker.say_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '……快点，快点❤️',
      ]);
      await attacker.say_and_wait('用力……填满我的雌穴❤️');
      era.println();
      await defender.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        ' 翘起屁股，腰身不断晃动。',
      ]);
      await defender.print_and_wait('肥硕的屁股淫乱的舞蹈着，煽动着情欲……');
    } else {
      await this.missionary(defender, attacker, hook);
    }
  }
};
