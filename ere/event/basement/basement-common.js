const era = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

class CustomizedBase {
  constructor(chara_id) {
    this.id = chara_id;
  }

  async ask_time() {
    const chara = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await chara.say_and_wait('几点了呢？');
    await era.printAndWait([
      chara.get_colored_name(),
      ' 只是笑眯眯地看着 ',
      me.get_colored_name(),
    ]);
  }
}

module.exports = CustomizedBase;
