const era = require('#/era-electron');

const { get_custom_check } = require('#/event/check/check-factory');

const { sort_list } = require('#/utils/list-utils');

const CharaTitles = require('#/data/chara-titles');
const {
  adaptability_colors,
  attr_change_colors,
  money_color,
} = require('#/data/color-const');
const title_desc = require('#/data/desc/title-desc.json');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { adaptability_names } = require('#/data/train-const');

const page_name = '出走成绩';

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
          content: '赛事战绩',
          position: 'left',
        },
        type: 'divider',
      });
      if (race_len) {
        race_info_list.push({
          type: 'text',
          content: [
            `${race_len} 战 ${
              races.filter((e) => e.rank === 1).length
            } 胜，总赏金 `,
            {
              color: money_color,
              content: Math.floor(
                era.get(`cflag:${chara.id}:总赏金`),
              ).toLocaleString(),
            },
            ' 马币',
          ],
        });
        if (race_list.length > 0) {
          race_info_list.push({ content: [{ isBr: true }], type: 'text' });
        }
      } else {
        race_info_list.push({ type: 'text', content: '未出走' });
      }
      const half_length = Math.ceil(race_list.length / 2);
      for (let i = 0; i < half_length; ++i) {
        [race_list[i], race_list[i + half_length]]
          .filter((e) => e)
          .forEach((e) =>
            race_info_list.push({
              config: { width: 12 },
              content: [
                `${e.year} 年 `,
                race_infos[e.race].get_colored_name_with_class(),
                ' · ',
                {
                  content: `${e.rank} 着`,
                  color:
                    e.rank <= class_enum.Spe
                      ? adaptability_colors.at(-1 - e.rank)
                      : adaptability_colors[0],
                  title: `第 ${e.pop} 人气 · ${adaptability_names[6 + e.st]}`,
                },
              ],
              type: 'text',
            }),
          );
      }
      if (race_info_list.length === 1) {
        race_info_list.push({
          content: '还没有可称道的战绩……',
          type: 'text',
        });
      }
      race_info_list.push({
        config: { content: '专属称号', position: 'left' },
        type: 'divider',
      });
      const titles = CharaTitles.get(chara.id).get(),
        personal_titles = get_custom_check(chara.id).get_personal_titles();
      if (personal_titles.length) {
        personal_titles.map((e) => {
          const check = titles.findIndex((t) => t.n === e) !== -1;
          race_info_list.push(
            {
              config: { color: chara.color, width: 5 },
              content: e,
              type: 'text',
            },
            {
              config: { width: 19, color: check ? attr_change_colors.up : '' },
              content: check
                ? '已获得 ✔'
                : title_desc[e] || '在一次育成周期内赢取了六次以上的G1比赛胜利',
              type: 'text',
            },
          );
        });
      } else {
        race_info_list.push({ content: '无', type: 'text' });
      }
    } else {
      race_info_list.push(
        {
          config: {
            content: page_name,
            position: 'left',
          },
          type: 'divider',
        },
        { content: '并不能出走比赛……', type: 'text' },
      );
    }

    return {
      print() {
        return race_info_list;
      },
    };
  },
  name: page_name,
  uma: true,
};
