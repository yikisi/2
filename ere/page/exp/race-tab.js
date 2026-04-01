const era = require('#/era-electron');

const { get_custom_check } = require('#/event/check/check-factory');

const { sort_list } = require('#/utils/list-utils');

const CharaTitles = require('#/data/chara-titles');
const {
  adaptability_colors,
  attr_change_colors,
  money_color,
} = require('#/data/color-const');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const di18n = require('#/i18n/extended-def');
const { __, i18n } = require('#/i18n/selector');

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @returns {{print():*[]}}
   */
  generate(chara) {
    const race_info_list = [];
    if (era.get(`cflag:${chara.id}:种族`)) {
      const races = RaceHistory.get(chara.id).get_entries();
      const race_len = races.length,
        race_list = sort_list(
          races.filter((e) => e.race !== race_enum.begin_race),
          (e) =>
            ((class_enum.Spe - race_infos[e.race].race_class) << 13) +
            ((20 - e.rank) << 8) +
            e.weeks,
        );
      race_info_list.push({
        config: {
          content: i18n().detail.race_header_race,
          position: 'left',
        },
        type: 'divider',
      });
      if (race_len) {
        race_info_list.push({
          type: 'text',
          content: i18n().detail.get_race_summary(
            race_len.toString(),
            races.filter(({ rank }) => rank === 1).length.toString(),
            {
              color: money_color,
              content: Math.floor(
                era.get(`cflag:${chara.id}:总赏金`),
              ).toLocaleString(),
            },
          ),
        });
        if (race_list.length > 0) {
          race_info_list.push({ content: [{ isBr: true }], type: 'text' });
        }
      } else {
        race_info_list.push({
          type: 'text',
          content: i18n().detail.race_no_race,
        });
      }
      const half_length = Math.ceil(race_list.length / 2);
      for (let i = 0; i < half_length; ++i) {
        [race_list[i], race_list[i + half_length]].forEach(
          (r) =>
            r &&
            race_info_list.push({
              config: { width: 12 },
              content: i18n().detail.get_race_result(
                r.year.toString(),
                race_infos[r.race].get_colored_name_with_class(),
                {
                  content: i18n().race.result_template.replace(
                    '%RANK%',
                    r.rank.toString(),
                  ),
                  color:
                    r.rank <= class_enum.Spe
                      ? adaptability_colors.at(-1 - r.rank)
                      : adaptability_colors[0],
                  title: i18n()
                    .detail.race_result_tip_template.replace(
                      '%POP%',
                      r.pop.toString(),
                    )
                    .replace('%STYLE%', di18n.n_style[r.st]),
                },
              ),
              type: 'text',
            }),
        );
      }
      if (race_info_list.length === 1) {
        race_info_list.push({
          content: i18n().detail.no_reward_info,
          type: 'text',
        });
      }
      race_info_list.push({
        config: { content: i18n().detail.race_header_title, position: 'left' },
        type: 'divider',
      });
      const titles = CharaTitles.get(chara.id).get();
      const personal_titles = get_custom_check(chara.id).get_personal_titles();
      if (personal_titles.length > 0) {
        personal_titles.map((tid) => {
          const name = __(`title.${tid}`, i18n().title.undef);
          const check = titles.some((t) => t.n === tid);
          race_info_list.push(
            {
              config: { color: chara.color, width: 5 },
              content: name,
              type: 'text',
            },
            {
              config: { width: 19, color: check ? attr_change_colors.up : '' },
              content: check
                ? i18n().title_desc.got
                : i18n().title_desc.personal_template.replace(
                    '%DESC%',
                    __(`title_desc.${tid}`, i18n().title_desc.undef),
                  ),
              type: 'text',
            },
          );
        });
      } else {
        race_info_list.push({ content: i18n().ui_nothing, type: 'text' });
      }
    } else {
      race_info_list.push(
        {
          config: {
            content: i18n().detail.race_title,
            position: 'left',
          },
          type: 'divider',
        },
        { content: i18n().detail.cannot_join_race_info, type: 'text' },
      );
    }

    return {
      print: () => race_info_list,
    };
  },
  name: i18n().detail.race_title,
  uma: true,
};
