const era = require('#/era-electron');

const { sort_list } = require('#/utils/list-utils');

const CharaTitles = require('#/data/chara-titles');
const {
  adaptability_colors,
  attr_change_colors,
  money_color,
} = require('#/data/color-const');
const { class_enum } = require('#/data/race/model/race-info');
const { race_infos, race_enum } = require('#/data/race/race-const');
const { adaptability_names } = require('#/data/train-const');
const sys_call_check = require('#/system/script/sys-call-check');
const check_stages = require('#/data/event/check-stages');
const title_desc = require('#/data/desc/title-desc.json');

const page_name = '出走成绩';

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @returns {{print():*[]}}
   */
  generate(chara) {
    const race_info_list = [];
    if (era.get(`cflag:${chara.id}:种族`)) {
      /** @type {Record<string,{pop:number,race:number,rank:number,year:number}>} */
      const races = era.get(`cflag:${chara.id}:育成成绩`);
      const race_len = Object.keys(races).length,
        race_list = sort_list(
          Object.entries(races).filter(
            (e) => e[1].race !== race_enum.begin_race,
          ),
          /** @param {[string,{pop:number,race:number,rank:number,year:number}]} e */
          (e) => {
            const race_class =
              class_enum.Spe - race_infos[e[1].race].race_class;
            const time = Number(e[0]);
            const rank = e[1].rank;
            return (race_class << 13) + (rank << 8) + time;
          },
          false,
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
              Object.values(races).filter((e) => e.rank === 1).length
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
      race_list.forEach(
        /** @param {[string,{pop:number,race:number,rank:number,st:number,year:number}]} e */
        (e) => {
          race_info_list.push({
            content: [
              `${e[1].year} 年 `,
              race_infos[e[1].race].get_colored_name_with_class(),
              ` · 第 ${e[1].pop} 人气 · ${adaptability_names[6 + e[1].st]} · `,
              {
                content: `${e[1].rank} 着`,
                color:
                  e[1].rank <= 5
                    ? adaptability_colors.at(-1 - e[1].rank)
                    : adaptability_colors[0],
              },
            ],
            type: 'text',
          });
        },
      );
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
      const titles = new CharaTitles(chara.id).get(),
        personal_titles = sys_call_check(
          chara.id,
          check_stages.personal_titles,
        );
      if (personal_titles.length) {
        personal_titles.map((e) => {
          const check = titles.filter((t) => t.n === e).length > 0;
          race_info_list.push(
            {
              config: { color: chara.color, width: 4 },
              content: e,
              type: 'text',
            },
            {
              config: { width: 20, color: check ? attr_change_colors.up : '' },
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
};
