const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

class CustomizedBase {
  constructor(chara_id) {
    this.id = chara_id;
  }

  async ask_release_agree() {
    const chara = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await era.printAndWait([
      chara.get_colored_name(),
      ' 面带愧疚地同意了 ',
      me.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 摸了摸 ',
      chara.get_colored_name(),
      ' 的头，表示自己并未在意。',
    ]);
  }

  async ask_release_reject() {
    const chara = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await era.printAndWait([
      chara.get_colored_name(),
      ' 浅笑着拒绝了 ',
      me.get_colored_name(),
      ' 的请求。',
    ]);
  }

  async ask_time() {
    const chara = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await chara.say_and_wait('几点了呢？');
    await era.printAndWait([
      chara.get_colored_name(),
      ' 只是笑眯眯地看着 ',
      me.get_colored_name(),
      '。',
    ]);
  }

  /** @param {number} owner_id */
  async rescue_fail(owner_id) {
    const chara = get_chara_talk(this.id),
      owner = get_chara_talk(owner_id),
      me = get_chara_talk(0);
    await print_event_name('功败垂成', chara);
    await era.printAndWait([
      chara.get_colored_name(),
      ' 闯进了 ',
      owner.get_colored_name(),
      ' 精心设计的地下室，但是未能救出心爱的 ',
      me.get_colored_name(),
      '……',
    ]);
    await era.printAndWait([
      '在 ',
      me.get_colored_name(),
      ' 绝望的目光中，',
      chara.get_colored_name(),
      ' 被 ',
      owner.get_colored_name(),
      ' 赶出了地下室……',
    ]);
  }

  /** @param {number} owner_id */
  async rescue_sneak_success(owner_id) {
    const chara = get_chara_talk(this.id),
      owner = get_chara_talk(owner_id),
      me = get_chara_talk(0);
    await print_event_name('英雄救美', chara);
    await era.printAndWait([
      '趁 ',
      owner.get_colored_name(),
      sys_check_awake(owner_id) ? ' 不在，' : ' 正在酣眠，',
      chara.get_colored_name(),
      ' 潜入了地下室，扶着 ',
      me.get_colored_name(),
      ' 扬长而去……',
    ]);
  }

  /** @param {number} owner_id */
  async rescue_sneak_prison(owner_id) {
    const chara = get_chara_talk(this.id),
      owner = get_chara_talk(owner_id),
      me = get_chara_talk(0);
    await print_event_name('刚出虎口……', chara);
    await era.printAndWait([
      '趁 ',
      owner.get_colored_name(),
      sys_check_awake(owner_id) ? ' 不在，' : ' 正在酣眠，',
      chara.get_colored_name(),
      ' 潜入了地下室，扶着 ',
      me.get_colored_name(),
      ' 扬长而去……',
    ]);
    await era.printAndWait([
      '在 ',
      me.get_colored_name(),
      ' 以为可以回归日常时，',
      chara.get_colored_name(),
      ' 却扶着 ',
      me.get_colored_name(),
      ' 来到另一个地方，然后传来了一声轻响……',
    ]);
    await era.printAndWait('「咔哒」', { fontSize: '1.5rem' });
  }

  /** @param {number} owner_id */
  async rescue_join(owner_id) {
    const chara = get_chara_talk(this.id),
      owner = get_chara_talk(owner_id),
      me = get_chara_talk(0);
    await print_event_name('天有二日', chara);
    await era.printAndWait([
      chara.get_colored_name(),
      ' 闯入了 ',
      owner.get_colored_name(),
      ' 精心设计的地下室，与 ',
      owner.get_colored_name(),
      ' 对峙。',
    ]);
    await era.printAndWait([
      '在 ',
      me.get_colored_name(),
      ' 以为会大打出手时，',
      chara.get_couple_title(),
      '竟然握手言和……',
    ]);
    await era.printAndWait([
      '现在，这间狭小的地下室，和其中的 ',
      me.get_colored_name(),
      ' 有了两个主人……',
    ]);
  }

  /** @param {number} owner_id */
  async rescue_battle_success(owner_id) {
    const chara = get_chara_talk(this.id),
      owner = get_chara_talk(owner_id),
      me = get_chara_talk(0);
    await print_event_name('英雄救美', chara);
    await era.printAndWait([
      chara.get_colored_name(),
      ' 闯进了 ',
      owner.get_colored_name(),
      ' 精心设计的地下室，将 ',
      owner.get_colored_name(),
      ' 击倒在地……',
    ]);
    await era.printAndWait([
      '在 ',
      owner.get_colored_name(),
      ' 的注视中，',
      chara.get_colored_name(),
      ' 扶着 ',
      me.get_colored_name(),
      ' 扬长而去……',
    ]);
  }

  /** @param {number} owner_id */
  async rescue_battle_prison(owner_id) {
    const chara = get_chara_talk(this.id),
      owner = get_chara_talk(owner_id),
      me = get_chara_talk(0);
    await print_event_name('刚出虎口……', chara);
    await era.printAndWait([
      chara.get_colored_name(),
      ' 闯进了 ',
      owner.get_colored_name(),
      ' 精心设计的地下室，将 ',
      owner.get_colored_name(),
      ' 击倒在地……',
    ]);
    await era.printAndWait([
      '在 ',
      me.get_colored_name(),
      ' 以为可以回归日常时，',
      chara.get_colored_name(),
      ' 却扶着 ',
      me.get_colored_name(),
      ' 来到另一个地方，然后传来了一声轻响……',
    ]);
    await era.printAndWait('「咔哒」', { fontSize: '1.5rem' });
  }
}

module.exports = CustomizedBase;
