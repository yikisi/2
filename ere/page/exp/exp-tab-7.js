const era = require('#/era-electron');

const {
  get_filled_exp_str,
  push_link_break,
  remove_end_line_breaks,
} = require('#/page/exp/snippets');

const { join_list } = require('#/utils/list-utils');

const { growth_info, unknown_info } = require('#/data/exp-const');

const anal_semen_desc = [
  '',
  '直肠就会躁动难耐',
  '就会感到幸福',
  '直肠就会幸福地躁动起来',
];

const page_name = '肉体情报 【臀】';

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {{in_growth:boolean,mark_level:number,show_all_exp:boolean,show_body:boolean,show_exp:boolean}} flags
   * @returns {{print():*[]}}
   */
  generate: function (chara, flags) {
    const anal_exp_list = [];
    if (flags.in_growth) {
      anal_exp_list.push(growth_info);
    } else {
      if (flags.show_body) {
        if (era.get(`talent:${chara.id}:魔尻`)) {
          anal_exp_list.push('仿佛能吞噬一切的紧实黑洞，定让人有去无回……');
        }
        if (era.get(`talent:${chara.id}:淫臀`) === 2) {
          anal_exp_list.push(
            '时刻渴望被温暖填满的直肠……已经是一个淫荡的屁穴了……',
          );
        }
        const in_intestine_semen = era.get(`cflag:${chara.id}:肠道内精液`);
        if (in_intestine_semen) {
          anal_exp_list.push(
            join_list(
              [
                '裤子的后面变湿了……',
                flags.mark_level >= 3
                  ? `是因为屁穴内还滞留着 ${in_intestine_semen}ml 精液吧……`
                  : undefined,
              ],
              '',
            ),
          );
        }
        push_link_break(anal_exp_list);
      }
      if (flags.show_exp) {
        const anal_sex_count = era.get(`exp:${chara.id}:肛交次数`),
          cum_in_anal = era.get(`exp:${chara.id}:肠内射精次数`),
          anal_semen = era.get(`exp:${chara.id}:肠内精液量`),
          anal_orgasm_count = era.get(`exp:${chara.id}:肛门高潮次数`),
          anal_semen_talent =
            era.get(`talent:${chara.id}:精液灌肠`) * 2 +
            era.get(`talent:${chara.id}:肠道敏感`);
        const anal_sex_exp = era.get(`cstr:${chara.id}:初次肛交经历`),
          unknown_anal_sex_exp = era.get(`cstr:${chara.id}:无自觉初次肛交经历`);

        if (anal_sex_exp) {
          anal_exp_list.push(get_filled_exp_str(anal_sex_exp, chara.id));
        }
        if (flags.show_all_exp || anal_sex_exp) {
          if (unknown_anal_sex_exp) {
            anal_exp_list.push(
              get_filled_exp_str(unknown_anal_sex_exp, chara.id),
            );
          }
          if (anal_sex_count || cum_in_anal) {
            anal_exp_list.push(
              join_list(
                [
                  anal_sex_count ? `抚慰性器 ${anal_sex_count} 次` : '',
                  cum_in_anal
                    ? `承受过 ${cum_in_anal} 次射精，被射入过 ${anal_semen}ml 精液`
                    : '',
                ],
                '，',
              ),
            );
          }
        }
        if ((flags.mark_level >= 3 || cum_in_anal) && anal_semen_talent) {
          anal_exp_list.push(
            `每次被射进温热的精液，${anal_semen_desc[anal_semen_talent]}`,
          );
        }
        push_link_break(anal_exp_list);

        if (anal_orgasm_count) {
          anal_exp_list.push(`因为快感去了 ${anal_orgasm_count} 次`);
        }
      } else {
        anal_exp_list.push(unknown_info(chara.id));
      }
      remove_end_line_breaks(anal_exp_list);
    }
    return {
      print() {
        return [
          {
            type: 'divider',
            config: { content: page_name, position: 'left' },
          },
          ...anal_exp_list.map((e) => {
            return { content: e, type: 'text' };
          }),
        ];
      },
    };
  },
  name: page_name,
};
