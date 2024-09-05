const era = require('#/era-electron');

const {
  get_filled_exp_str,
  push_link_break,
  remove_end_line_breaks,
} = require('#/page/exp/snippets');

const { join_list } = require('#/utils/list-utils');

const { growth_info, unknown_info } = require('#/data/exp-const');

const drunk_semen_desc = [
  '',
  '喉咙就会躁动难耐',
  '就会感到幸福',
  '喉咙就会幸福地躁动起来',
];

const page_name = '肉体情报 【口】';

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {{in_growth:boolean,mark_level:number,show_all_exp:boolean,show_body:boolean,show_exp:boolean}} flags
   * @returns {{print():*[]}}
   */
  generate(chara, flags) {
    const mouth_exp_list = [];
    if (flags.in_growth) {
      mouth_exp_list.push(growth_info);
    } else {
      if (flags.show_body) {
        const in_stomach_semen = era.get(`cflag:${chara.id}:腹中精液`);
        if (era.get(`talent:${chara.id}:荡唇`)) {
          mouth_exp_list.push(
            '构造完美的唇齿口腔，天生的吸力能让任何对手缴械投降……',
          );
        }
        if (era.get(`talent:${chara.id}:淫口`) === 2) {
          mouth_exp_list.push(
            '无论何时何地都能感觉到瘙痒和寂寞……已经是一张淫荡的嘴唇了……',
          );
        }
        if (in_stomach_semen) {
          mouth_exp_list.push(
            join_list(
              [
                '唇边有着淡淡的白浊……',
                flags.mark_level >= 3
                  ? `刚刚饮下了 ${in_stomach_semen}ml 精液的样子……`
                  : undefined,
              ],
              '',
            ),
          );
        }
        push_link_break(mouth_exp_list);
      }
      if (flags.show_exp) {
        const kiss_count = era.get(`exp:${chara.id}:接吻次数`),
          suck_count = era.get(`exp:${chara.id}:舔吸次数`),
          blow_job_count = era.get(`exp:${chara.id}:口交次数`),
          mouth_orgasm_count = era.get(`exp:${chara.id}:口腔高潮次数`),
          drunk_semen = era.get(`exp:${chara.id}:饮精量`),
          drunk_milk = era.get(`exp:${chara.id}:吸奶量`),
          drunk_semen_talent =
            era.get(`talent:${chara.id}:饮精成瘾`) * 2 +
            era.get(`talent:${chara.id}:喉咙敏感`);
        const kiss_exp = era.get(`cstr:${chara.id}:初吻经历`),
          unknown_kiss_exp = era.get(`cstr:${chara.id}:无自觉初吻经历`),
          blow_job_exp = era.get(`cstr:${chara.id}:初次口交经历`),
          unknown_blow_job_exp = era.get(`cstr:${chara.id}:无自觉初次口交经历`),
          drunk_semen_exp = era.get(`cstr:${chara.id}:初次吞精经历`),
          unknown_drunk_semen_exp = era.get(
            `cstr:${chara.id}:无自觉初次吞精经历`,
          ),
          drunk_milk_exp = era.get(`cstr:${chara.id}:初次吸奶经历`);
        if (kiss_exp) {
          mouth_exp_list.push(get_filled_exp_str(kiss_exp, chara.id));
        }
        if (flags.show_all_exp || kiss_exp) {
          if (unknown_kiss_exp) {
            mouth_exp_list.push(get_filled_exp_str(unknown_kiss_exp, chara.id));
          }
          if (kiss_count) {
            mouth_exp_list.push(`接过 ${kiss_count} 次吻`);
          }
        }
        push_link_break(mouth_exp_list);

        if (blow_job_exp) {
          mouth_exp_list.push(get_filled_exp_str(blow_job_exp, chara.id));
        }
        if (flags.show_all_exp || blow_job_exp) {
          if (unknown_blow_job_exp) {
            mouth_exp_list.push(
              get_filled_exp_str(unknown_blow_job_exp, chara.id),
            );
          }
          if (suck_count || blow_job_count) {
            mouth_exp_list.push(
              join_list(
                [
                  suck_count ? `抚慰过 ${suck_count} 次身体` : '',
                  blow_job_count ? `吸吮过 ${blow_job_count} 次性器` : '',
                ],
                '，',
              ),
            );
          }
        }
        push_link_break(mouth_exp_list);

        if (drunk_semen_exp) {
          mouth_exp_list.push(get_filled_exp_str(drunk_semen_exp, chara.id));
        }
        if (flags.show_all_exp || drunk_semen_exp) {
          if (unknown_drunk_semen_exp) {
            mouth_exp_list.push(
              get_filled_exp_str(unknown_drunk_semen_exp, chara.id),
            );
          }
          if (drunk_semen) {
            mouth_exp_list.push(`饮用过 ${drunk_semen}ml 精液`);
          }
        }
        if ((flags.mark_level >= 3 || drunk_semen) && drunk_semen_talent) {
          mouth_exp_list.push(
            `每次饮下温热的精液，${drunk_semen_desc[drunk_semen_talent]}`,
          );
        }
        if (drunk_milk_exp) {
          mouth_exp_list.push(
            get_filled_exp_str(drunk_milk_exp, chara.id),
            `饮用过 ${drunk_milk}ml 乳汁`,
          );
        }
        push_link_break(mouth_exp_list);

        if (mouth_orgasm_count) {
          mouth_exp_list.push(`因为快感去了 ${mouth_orgasm_count} 次`);
        }
      } else {
        mouth_exp_list.push(unknown_info(chara.id));
      }
      remove_end_line_breaks(mouth_exp_list);
    }
    return {
      print() {
        return [
          {
            type: 'divider',
            config: { content: page_name, position: 'left' },
          },
          ...mouth_exp_list.map((e) => {
            return { content: e, type: 'text' };
          }),
        ];
      },
    };
  },
  name: page_name,
};
