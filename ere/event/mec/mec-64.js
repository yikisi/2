const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');
const { i_pama_yandere } = require('#/event/snippets/106400');

const { get_chara_color } = require('#/data/chara-colors');

const di18n = require('#/i18n/extended-def');

module.exports = class extends CustomizedMec {
  set_callname() {
    if (!this.set_callname_from_src()) {
      era.set(`callname:${this.id}:0`, 'trainer');
    }
  }

  get_status(show_train_buff) {
    if (i_pama_yandere()) {
      return [
        {
          ...di18n.kojo.get_titled_content(this.id, 'dependence'),
          color: get_chara_color(this.id),
        },
      ];
    }
    return super.get_status(show_train_buff);
  }
};
