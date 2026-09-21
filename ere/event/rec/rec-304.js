const { get, println, set, waitAnyKey } = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const CustomizedRecruit = require('#/event/rec/rec-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { pregnant_stage_enum } = require('#/data/ero/status-const');
const MeekEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-201');
const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_infos } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    const aoi = get_chara_talk(304);
    const meek = get_chara_talk(201);
    if (
      RaceHistory.get(201)
        .get_values()
        .some(
          (e) =>
            race_infos[e.race].race_class === class_enum.G1 && e.rank === 1,
        )
    ) {
      await print_title_with_kojo(
        i18n().kojo[this.id].recruit,
        'recruit',
        aoi,
        {
          ...generate_dictionary(this.id),
          H_NAME: meek.name,
          H_UMA: meek.uma_sex_title,
        },
      );
    } else {
      const dict = {
        ...generate_dictionary(this.id),
        H_NAME: meek.name,
        H_TEEN: meek.teen_sex_title,
        meek_pregnant:
          get('cflag:201:妊娠阶段') !== 1 << pregnant_stage_enum.no ||
          get('exp:201:生产次数') + get('exp:201:孩子数量') > 0,
        meek_love: get('love:201') >= 75,
      };
      await print_title_with_kojo(
        i18n().kojo[this.id].recruit,
        'recruit_hentai',
        aoi,
        dict,
      );
      println();
      if (dict.meek_pregnant) {
        sys_like_chara(304, 0, -800) && (await waitAnyKey());
      } else if (dict.meek_love) {
        sys_like_chara(304, 0, -200) && (await waitAnyKey());
      }
    }
    set('callname:304:-2', '900401');
    set('cflag:304:招募状态', recruit_flags.yes);
    new MeekEduMarks().debuff = 0;
    await this.recruit_end();
  }
};
