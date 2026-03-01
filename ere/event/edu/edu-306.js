const { get, println, set, waitAnyKey } = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEdu {
  /** @param {CharaTalk} riko */
  async fail(riko) {
    const glasse = get_chara_talk(202);
    await print_title_with_kojo(i18n().kojo[this.id].edu, 'task_fail', riko, {
      ...generate_dictionary(this.id),
      B_NAME: glasse.name,
      B_UMA: glasse.uma_sex_title,
      L_NAME: get_chara_talk(203).name,
    });
    println();
    sys_like_chara(306, 0, -260 - 40 * get('cflag:202:育成次数')) &&
      (await waitAnyKey());
  }

  /** @param {CharaTalk} riko */
  async welcome(riko) {
    await print_title_with_kojo(
      i18n().kojo[this.id].edu,
      'welcome',
      riko,
      generate_dictionary(this.id),
    );
    println();
    sys_like_chara(306, 0, -25) && (await waitAnyKey());
    set('flag:初见办公室', 1);
  }
};
