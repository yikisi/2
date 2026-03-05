const { get, waitAnyKey } = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = {
  /** @param {number} bought */
  async shop_end(bought) {
    const life_marks = new TachyonLifeMarks();
    const tachyon = get_chara_talk(32);
    if (bought < 3 || bought > 10) {
      if (get('relation:32:0') > 75 && get('love:32') > 75) {
        if (bought < 3) {
          i18n().timon.tachyon_shop.end_love_buy_few(tachyon);
        } else {
          i18n().timon.tachyon_shop.end_love_buy_many(tachyon);
        }
      } else {
        if (bought < 3) {
          i18n().timon.tachyon_shop.end_buy_few(
            tachyon,
            life_marks.first === 2,
          );
        } else {
          i18n().timon.tachyon_shop.end_buy_many(
            tachyon,
            life_marks.first === 2,
          );
        }
      }
      await waitAnyKey();
    }
    life_marks.first = 0;
  },
  async shop_start() {
    const src_chara = get('cflag:0:模版角色');
    if (src_chara !== 32) {
      const callname = sys_get_colored_callname(32, 0);
      const me = get_chara_talk(0);
      const tachyon = get_chara_talk(32);
      const { first } = new TachyonLifeMarks();
      if (get('cflag:32:招募状态') === recruit_flags.yes) {
        if (get('relation:32:0') > 75 && get('love:32') >= 75 && first > 0) {
          await i18n().timon.tachyon_shop.start_first_love(
            tachyon,
            me,
            callname,
          );
        } else if (get('relation:32:0') > 75 && get('love:32') >= 50) {
          await i18n().timon.tachyon_shop.start_lust(
            tachyon,
            me,
            callname,
            first > 0,
          );
        } else if (first > 0) {
          await i18n().timon.tachyon_shop.start_first(tachyon, me, callname);
        } else if (get('relation:32:0') <= -100) {
          i18n().timon.tachyon_shop.start_hate(tachyon, me);
        } else if (get('relation:32:0') <= 0) {
          i18n().timon.tachyon_shop.start_doubt(tachyon, me);
        } else {
          await i18n().timon.tachyon_shop.start(tachyon, me, callname);
        }
        await i18n().timon.tachyon_shop.start_final_welcome(tachyon);
      } else if (first === 2) {
        await i18n().timon.tachyon_shop.start_first_out_of_team(tachyon, me);
      } else {
        await i18n().timon.tachyon_shop.start_out_of_team(
          tachyon,
          me,
          first > 0,
        );
      }
    }
  },
};
