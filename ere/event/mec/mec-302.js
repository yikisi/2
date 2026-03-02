const { get, set } = require('#/era-electron');

const MecNpc = require('#/event/mec/mec-npc');

const get_display_name = require('#/utils/calc-display-name');

const { get_chara_color } = require('#/data/chara-colors');
const recruit_flags = require('#/data/event/recruit-flags');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

module.exports = class extends MecNpc {
  get_love_limit() {
    if (get(`cflag:${this.id}:招募状态`) !== recruit_flags.yes) {
      if (get(`love:${this.id}`) >= 50 || get('flag:回合爱慕惩罚') > 0) {
        return 51;
      }
      return 50;
    }
    return super.get_love_limit();
  }

  get_talents() {
    return [
      {
        ...di18n.kojo.get_titled_content(this.id, 'chairman'),
        color: get_chara_color(this.id),
      },
    ];
  }

  set_callname() {
    set(
      `callname:${this.id}:0`,
      i18n().name.kun_template.replace(
        '%NAME%',
        get_display_name(get('callname:0:-1')),
      ),
    );
  }
};
