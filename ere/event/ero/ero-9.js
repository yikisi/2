const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedEro = require('#/event/ero/ero-common');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { medicine_enum } = require('#/data/ero/item-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEro {
  static CHECK = false;

  get #kojo() {
    return i18n().kojo[this.id].ero;
  }

  async ero_start(h) {
    if (
      era.getCharactersInTrain().length === 2 &&
      sys_check_awake(0) &&
      sys_check_awake(this.id) &&
      !era.get(`cflag:${this.id}:性别`) &&
      era.get(`love:${this.id}`) >= 50 &&
      era.get('status:0:发情') &&
      !era.get(`exp:${this.id}:性爱次数`) &&
      !era.get(`status:${this.id}:弗隆K`) &&
      !era.get(`status:${this.id}:弗隆P`) &&
      (era.get('item:弗隆K') || era.get('item:弗隆P'))
    ) {
      era.set('tflag:TS大和T', 1);
      era.set('tflag:主导权', this.id);
      let item = medicine_enum.fron_k;
      if (!era.get('item:弗隆K')) {
        item = medicine_enum.fron_p;
      }
      era.add(`item:${item}`, -1);
      await CustomizedEro.run_custom_ero(this.id, ero_hooks.use_medicine, {
        item,
        user: this.id,
        shown: false,
      });
      await print_title_with_kojo(
        this.#kojo,
        'ts_start',
        get_chara_talk(this.id),
        get_chara_talk(0),
        sys_get_colored_callname(this.id, 0),
      );
    }
  }

  async ero_end(h) {
    if (era.get('tflag:TS大和T') > 0) {
      era.drawLine();
      await print_title_with_kojo(
        this.#kojo,
        'ts_end',
        get_chara_talk(this.id),
        get_chara_talk(0),
        sys_get_colored_callname(this.id, 0),
      );
      const default_filter = new Array(5).fill(false);
      let flag_rape = true;
      while (flag_rape) {
        await h(
          !era.get('tflag:主导权') ? ero_hooks.switch : ero_hooks.relax,
          default_filter,
          false,
        );
        if (
          era.get(`tcvar:${this.id}:脱力`) > 0 ||
          era.get(`tcvar:${this.id}:逃跑`) > 0
        ) {
          flag_rape = false;
        }
      }
    }
  }

  filter_in_rape() {
    if (era.get('flag:TS大和T') || era.get('flag:惩戒力度') >= 2) {
      return (e) =>
        (e >= ero_hooks.missionary && e <= ero_hooks.stimulate_g_spot) ||
        e === ero_hooks.fuck_69 ||
        (e >= ero_hooks.double_fuck && e <= ero_hooks.double_penetration);
    }
    return super.filter_in_rape();
  }
};
