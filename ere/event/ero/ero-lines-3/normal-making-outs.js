const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalMakingOuts = require('#/event/ero/common/normal/making-outs-final');

module.exports = class extends EroNormalMakingOuts {
  async pet_anal(attacker, defender, hook) {
    if (defender.id !== 3 || !hook.arg) {
      return await super.pet_anal(attacker, defender, hook);
    }
    if (Math.random() >= 0.5) {
      await attacker.print_and_wait([
        '在每日不断，且之前特意的清理后，一扇可爱干净小门显现在面前。',
      ]);
      await attacker.print_and_wait([
        '升起一股恶作剧心态，伸出手指，开始在这隐秘之处打转，时不时还试图撬锁。',
      ]);
      await defender.say_and_wait([
        '呀……呜，',
        sys_get_colored_callname(defender.id, attacker.id),
        '！',
      ]);
      await attacker.print_and_wait(
        '……似乎并不是拒绝，反而带了一丝欢愉和催促。',
      );
      await attacker.print_and_wait([
        '难道说，这位帅气的小王',
        defender.sex_code === 1 ? '子' : '女',
        '……那里很敏感？',
      ]);
    } else {
      await defender.say_and_wait(['呜呜……']);
      await attacker.print_and_wait([
        '对',
        defender.sex,
        '而言，这样的待遇确实有点卑鄙了。',
      ]);
      await attacker.print_and_wait(['不过才管不了那么多……']);
      await attacker.print_and_wait('倒不如说，这样才有欺负的价值。');
      await attacker.print_and_wait(['带上一个防护套，轻轻地叩开门扉……']);
    }
  }

  async prepare_anal(attacker, defender, hook) {
    if (defender.id !== 3) {
      return await super.prepare_anal(attacker, defender, hook);
    }
    await defender.say_and_wait(['……']);
    await attacker.print_and_wait([
      '面色赤红的',
      defender.get_teen_sex_title(),
      '一反常态，不发一语。',
    ]);
    await attacker.print_and_wait(['拎起尾巴，仔细观赏着那处秘密地点。']);
    await attacker.print_and_wait(['娇俏的臀瓣抖动着，粉嫩干净的孔洞敞开了……']);
  }

  async ask_foot_job(attacker, defender, hook) {
    if (defender.id !== 3 || !era.get('status:3:腿伤') || !hook.arg) {
      return await super.ask_foot_job(attacker, defender, hook);
    }
    await defender.say_and_wait([
      '真抱歉啊……',
      sys_get_colored_callname(defender.id, attacker.id),
      '，我在这方面帮不了你呢。',
    ]);
    await attacker.print_and_wait([
      '半是自责半是恼火的叹息传到耳中，感觉似乎做错了什么。',
    ]);
    await attacker.say_and_wait(['那么，就来弥补吧。']);
    await attacker.print_and_wait([
      '不等',
      defender.sex,
      '再做什么反应，轻轻托起',
      defender.sex,
      '的足跟，手指摩挲着嫩滑的皮肤，随后将脸贴了上去。',
    ]);
    await defender.say_and_wait(['——！']);
    await attacker.print_and_wait([
      '事先护理和清洗过的',
      defender.get_uma_sex_title(),
      '小脚迅速升温。',
    ]);
    await attacker.print_and_wait([
      '暗笑着将一只手伸到下体处，双眼直视着自家担当，当着',
      defender.sex,
      '的面自顾自玩弄起那里来。',
    ]);
  }

  async force_foot_job(attacker, defender, hook) {
    return this.ask_foot_job(attacker, defender, hook);
  }

  async ask_tail_job(attacker, defender, hook) {
    if (defender.id !== 3) {
      return await super.ask_tail_job(attacker, defender, hook);
    }
    if (hook.arg) {
      await defender.say_and_wait(['咕……这种……']);
      await attacker.print_and_wait([
        '这个请求可能是有点出格，不过',
        defender.sex,
        '只是脸红了一下，还是答应了……',
      ]);
      await attacker.print_and_wait(['而且似乎很感兴趣的样子。']);
      await attacker.print_and_wait([
        '顺滑水灵的马尾瞬间缠上了挺起的性器部分，突如其来的刺激让我差点交出来。',
      ]);
      await defender.say_and_wait(['嘿嘿……']);
      await attacker.print_and_wait([
        defender.sex,
        '的眼睛亮了起来，用全力摆弄尾巴骚扰着那最敏感的地方。',
      ]);
    } else {
      await attacker.print_and_wait(['动作正变得粗暴……或者说是熟练。']);
      await defender.say_and_wait(['哇……弄湿了……']);
      await attacker.print_and_wait([
        '毕竟尾巴在被淫靡的汁液刷得黏糊糊之后，总能从这让毛发亮晶晶的保养品中领会到什么的。',
      ]);
      await attacker.print_and_wait(['而且……还不只这些……']);
      await attacker.print_and_wait([
        '尾巴一弹一卷，垂在上方的马尾束辫也被缠绕其中，双螺旋绞合着那里。',
      ]);
      await attacker.print_and_wait([
        '小',
        defender.get_uma_sex_title(),
        '似乎自己还没注意到——自己的尾腺还分泌出了发情的麝香味，更加挑起在场生物的欲望。',
      ]);
      await attacker.print_and_wait(['呼吸不觉间更加粗重了……']);
    }
  }

  async force_tail_job(attacker, defender, hook) {
    return this.ask_tail_job(attacker, defender, hook);
  }
};
