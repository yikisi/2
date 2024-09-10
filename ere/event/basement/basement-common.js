const era = require('#/era-electron');

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
}

module.exports = CustomizedBase;
