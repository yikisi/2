const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const CustomizedBase = require('#/event/basement/basement-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

module.exports = class extends CustomizedBase {
  async ask_time() {
    const dj = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await dj.say_and_wait([
      '现在的 ',
      sys_get_callname(119, 0),
      '，身上的味道我很满意',
    ]);
    await era.printAndWait([
      '答非所问的 ',
      dj.get_colored_name(),
      ' 嗅了嗅 ',
      me.get_colored_name(),
      ' 的手腕，那里挥发着最为浓郁的香味',
    ]);
    await era.printAndWait(['——只属于 ', dj.get_colored_name(), ' 的香味']);
  }
};
