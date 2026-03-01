const { add, get, set, waitAnyKey } = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const CustomizedRecruit = require('#/event/rec/rec-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { pregnant_stage_enum } = require('#/data/ero/status-const');
const GlasseEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-202');
const CoconEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-203');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    const riko = get_chara_talk(306);
    const glasse = get_chara_talk(202);
    const cocon = get_chara_talk(203);
    const temp = get('cflag:306:招募状态');
    if (Array.isArray(temp) && temp[0] >= 3 && temp[1] >= 3) {
      await print_title_with_kojo(
        i18n().kojo[this.id].recruit,
        'recruit',
        riko,
        {
          ...generate_dictionary(this.id),
          B_NAME: glasse.name,
          L_NAME: cocon.name,
        },
      );
    } else {
      const hentai_check = [202, 203].map(
        (e) =>
          get(`love:${e}`) >= 75 ||
          get(`cflag:${e}:妊娠阶段`) !== 1 << pregnant_stage_enum.no ||
          get(`exp:${e}:生产次数`) + get(`exp:${e}:孩子数量`) > 0,
      );
      await print_title_with_kojo(
        i18n().kojo[this.id].recruit,
        'recruit_hentai',
        riko,
        {
          ...generate_dictionary(this.id),
          B_NAME: glasse.name,
          L_NAME: cocon.name,
          glasse_hentai: hentai_check[0],
          cocon_hentai: hentai_check[1],
        },
      );
      if (get('love:306') < 75) {
        sys_like_chara(306, 0, -800) && (await waitAnyKey());
        add('flag:当前声望', -100 - hentai_check.filter((e) => e).length * 100);
        set('flag:变态行为', 1);
      }
    }
    set('callname:306:-2', '900601');
    set('cflag:306:招募状态', recruit_flags.yes);
    new GlasseEduMarks().debuff = 0;
    new CoconEduMarks().debuff = 0;
    await this.recruit_end();
  }
};
