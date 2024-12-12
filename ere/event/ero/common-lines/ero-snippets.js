const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { ero_hooks } = require('#/data/event/ero-hooks');

module.exports = {
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async hand_and_blow_job(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait('总觉得是');
      await attacker.print_and_wait('意外自然的动作呢……');
      await attacker.print_and_wait(
        '在双手扶起肉棒之后，脑袋就会不知不觉地凑过去。',
      );
      await attacker.print_and_wait('用指间的体温去暖化，搓开，然后……');
      await attacker.say_and_wait('啾～');
      await attacker.print_and_wait('超浓厚……');
    } else {
      await attacker.print_and_wait(
        '把肉棒拨弄到一边，然后侧过头去从上至下细细地舔舐，像是对待边角已融化滴落的雪糕。',
      );
      await attacker.say_and_wait('呲溜呲溜——');
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ` 的龟头变得亮晶晶的，上面泛着光的水渍到底是谁的错多一些呢……`,
      ]);
      await attacker.print_and_wait('变得完全……弄不明白了……❤️');
    }
  },
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_leg(attacker, defender, hook) {
    if (hook.arg) {
      if (attacker.id === 0 && era.get(`cflag:${defender.id}:种族`)) {
        await attacker.print_and_wait(
          '作为训练员，将面前担当的双腿，用性的意味去观赏与抚摸……',
        );
        await attacker.print_and_wait(
          '只是把现在正在做的事，用克制的语言去描述，叫人身体发凉的背德感就已经随着寒战传遍了全身。',
        );
        await attacker.print_and_wait(
          '明明训练后为了确认状态，偶尔也会有上手抚摸的亲热动作吧……',
        );
        await attacker.print_and_wait(
          '但是很神奇的，现在脑袋里完全没法将这双腿与「比赛」联系在一起',
        );
      }
      await attacker.print_and_wait('现在的自己满脑袋想的都是……');
      await attacker.print_and_wait('被这双腿交错着缠上腰的话，一定感觉很棒。');
    } else {
      await attacker.print_and_wait('柔软而有弹性。');
      await attacker.print_and_wait('曲线优雅而纤长。');
      await attacker.print_and_wait(
        '有着能因为手指的爱抚而发起抖的绝佳敏感度。',
      );
      if (era.get(`cflag:${defender.id}:种族`)) {
        await attacker.print_and_wait('真浪费啊……');
        await attacker.print_and_wait('这样的双腿只是为了比赛而存在什么的……');
      }
    }
  },
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   */
  async pet_tail(attacker, defender) {
    await defender.say_and_wait('唔——');
    await attacker.print_and_wait(
      '只是稍稍地多用上一点力，屁股就会抬起来，但这时候松手的话，就会连腰都塌下去……',
    );
    await attacker.print_and_wait([
      '喂喂……真的知道自己正在',
      attacker.get_phy_sex_title(),
      '的面前表演着怎样的动作吗，可怜的 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '？',
    ]);
  },
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async stimulate_glans_by_hole_1(attacker, defender, hook) {
    await attacker.print_and_wait('说实话……仅仅只是现在这样感觉就要升天了……');
    await attacker.print_and_wait([
      '乱七八糟的……不论是被奸着的',
      hook.hook === ero_hooks.stimulate_glans_by_virgin ? '小穴' : '屁穴',
      '现状也好，还是舒服得一塌糊涂的身体也好……',
    ]);
  },
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async stimulate_glans_by_hole_2(attacker, defender, hook) {
    await attacker.print_and_wait([
      '「啾」的一声缩紧了，虽然一秒钟都没能坚持到身体就痉挛着瘫软下去，但那一瞬间，',
      attacker.get_colored_name(),
      ' 的',
      hook.hook === ero_hooks.stimulate_glans_by_virgin ? '小穴' : '屁穴',
      '深情地吻上了 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 的龟头。',
    ]);
    await attacker.print_and_wait('哈……龟头一跳一跳的，应该是很高兴吧……');
  },
};
