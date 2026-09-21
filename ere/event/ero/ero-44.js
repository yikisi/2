const era = require('#/era-electron');

const CustomizedEro = require('#/event/ero/ero-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

const { medicine_enum } = require('#/data/ero/item-const');
const SweepEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-44');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEro {
  static CHECK = false;

  get #kojo() {
    return i18n().kojo[this.id].ero;
  }

  get #dict() {
    return generate_dictionary(this.id, { call: !0 });
  }

  async ero_start(handle_ero_act) {
    const edu_marks = new SweepEduMarks();
    const dict = this.#dict;
    let key;
    if (era.get('tflag:强奸') === -1) {
      key = 'ero_start_normal';
    } else if (era.get('tflag:强奸') === 0) {
      const check_s = era.get(`status:${this.id}:马跳S`) > 0;
      const check_z = era.get(`status:${this.id}:超马跳Z`) > 0;
      if (check_s || check_z) {
        if (check_s) {
          dict.DRUG_NAME = di18n.tb_item.get_name(medicine_enum.uma_s);
          await this.#kojo['es_drug'](dict);
          delete dict.DRUG_NAME;
          if (!edu_marks.uma_s) {
            await this.#kojo['es_drug_umz_s_first'](dict);
          } else {
            await this.#kojo['es_drug_umz_s'](dict);
          }
          edu_marks.uma_s++;
        } else {
          dict.DRUG_NAME = di18n.tb_item.get_name(medicine_enum.super_z);
          await this.#kojo['es_drug'](dict);
          delete dict.DRUG_NAME;
          if (!edu_marks.super_z) {
            await this.#kojo['es_drug_super_z_first'](dict);
          } else {
            await this.#kojo['es_drug_super_z'](dict);
          }
          edu_marks.super_z++;
        }
        return;
      }
      if (era.get(`love:${this.id}`) < 70) {
        key = 'es_rape';
      } else {
        if (!edu_marks.rape) {
          key = 'es_rape_play_first';
        } else {
          key = 'es_rape_play';
        }
        edu_marks.rape++;
      }
    }
    if (key) {
      await this.#kojo[key](dict);
    } else {
      return await super.ero_start(handle_ero_act);
    }
  }
};
