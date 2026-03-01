const { get, println, waitAnyKey } = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEdu {
  /** @param {CharaTalk} aoi */
  async fail(aoi) {
    const meek = get_chara_talk(201);
    await print_title_with_kojo(i18n().kojo[this.id].edu, 'meek_fail', aoi, {
      ...generate_dictionary(this.id),
      H_NAME: meek.name,
      H_SEX: meek.sex,
    });
    println();
    sys_like_chara(304, 0, -200 - 100 * get('cflag:201:育成次数')) &&
      (await waitAnyKey());
  }
};
