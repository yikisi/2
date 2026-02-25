const era = require('#/era-electron');

const {
  get_filled_exp_str,
  get_unknown_info,
  push_link_break,
  remove_end_line_breaks,
} = require('#/page/exp/snippets');

const { flat_join_list } = require('#/utils/list-utils');
const { get_abbr_number } = require('#/utils/value-utils');

const { sex_colors } = require('#/data/color-const');
const { get_breast_cup } = require('#/data/info-generator');

const di18n = require('#/i18n/extended-def');
const { i18n, lan } = require('#/i18n/selector');

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {{in_growth:boolean,mark_level:number,show_all_exp:boolean,show_body:boolean,show_exp:boolean}} flags
   * @returns {{print():*[]}}
   */
  generate: function (chara, flags) {
    const _lan = lan();
    const breast_exp_list = [];
    if (flags.in_growth) {
      breast_exp_list.push(i18n().detail.growth_info);
    } else {
      if (flags.show_body) {
        if (chara.sex_code === 1) {
          breast_exp_list.push(i18n().detail.exp_breast_summary_man);
        } else {
          const n_type_code = era.get(`talent:${chara.id}:乳头类型`);
          breast_exp_list.push(
            i18n().detail.get_exp_breast_summary_woman(
              {
                content: di18n.detail.nipple_type[n_type_code],
                color: sex_colors[Math.min(n_type_code, 1)],
              },
              di18n.feature.get_breast_desc(get_breast_cup(chara.id)),
            ),
          );
          if (era.get(`talent:${chara.id}:妖乳`)) {
            breast_exp_list.push(i18n().detail.exp_breast_gift_desc);
          }
          if (era.get(`talent:${chara.id}:淫乳`) === 2) {
            breast_exp_list.push(i18n().detail.exp_breast_trained_desc);
          }
          if (era.get(`talent:${chara.id}:泌乳`)) {
            const tmp = era.get(`ex:${chara.id}:喷奶阻碍`);
            breast_exp_list.push(
              i18n().detail.exp_breast_milk +
                (tmp && flags.mark_level === 3
                  ? i18n().detail.exp_breast_milk_template.replace(
                      '%MILK%',
                      Object(tmp).toLocaleString(_lan),
                    )
                  : ''),
            );
          }
        }
        push_link_break(breast_exp_list);
      }
      if (flags.show_exp) {
        if (chara.sex_code - 1) {
          const breast_touched_count = era.get(`exp:${chara.id}:挤奶次数`),
            tit_job_count = era.get(`exp:${chara.id}:乳交次数`),
            breast_semen = era.get(`exp:${chara.id}:胸部沾染精液量`),
            breast_orgasm_count = era.get(`exp:${chara.id}:胸部高潮次数`),
            milking_count = era.get(`exp:${chara.id}:授乳次数`),
            milk_amount = era.get(`exp:${chara.id}:喷奶量`);
          const milk_exp = era.get(`cstr:${chara.id}:初次挤奶经历`),
            unknown_milk_exp = era.get(`cstr:${chara.id}:无自觉初次挤奶经历`),
            tit_job_exp = era.get(`cstr:${chara.id}:初次乳交经历`),
            unknown_tit_job_exp = era.get(
              `cstr:${chara.id}:无自觉初次乳交经历`,
            ),
            milking_exp = era.get(`cstr:${chara.id}:初次授乳经历`);
          if (milk_exp) {
            breast_exp_list.push(
              get_filled_exp_str(
                milk_exp,
                chara.id,
                milk_exp.be
                  ? i18n().detail.get_exp_breast_be_milk
                  : i18n().detail.get_exp_breast_self_milk,
              ),
            );
          }
          if (flags.show_all_exp || milk_exp) {
            if (unknown_milk_exp) {
              breast_exp_list.push(
                get_filled_exp_str(
                  unknown_milk_exp,
                  chara.id,
                  i18n().detail.get_exp_breast_unknown_be_milk,
                ),
              );
            }
            if (breast_touched_count) {
              breast_exp_list.push(
                i18n().detail.get_exp_milk_count(
                  get_abbr_number(breast_touched_count),
                ),
              );
            }
          }
          push_link_break(breast_exp_list);

          if (tit_job_exp) {
            breast_exp_list.push(
              get_filled_exp_str(
                tit_job_exp,
                chara.id,
                tit_job_exp.be
                  ? i18n().detail.get_exp_breast_be_tit_job
                  : i18n().detail.get_exp_breast_tit_job,
              ),
            );
          }
          if (flags.show_all_exp || tit_job_exp) {
            if (unknown_tit_job_exp) {
              breast_exp_list.push(
                get_filled_exp_str(
                  unknown_tit_job_exp,
                  chara.id,
                  i18n().detail.get_exp_breast_unknown_be_tit_job,
                ),
              );
            }
            if (tit_job_count || breast_semen) {
              breast_exp_list.push(
                flat_join_list(
                  [
                    tit_job_count > 0
                      ? i18n().detail.get_exp_breast_tit_job_count(
                          get_abbr_number(tit_job_count),
                        )
                      : void 0,
                    breast_semen > 0
                      ? i18n().detail.get_exp_breast_semen_count(
                          get_abbr_number(breast_semen),
                        )
                      : void 0,
                  ],
                  i18n().ui_comma,
                ),
              );
            }
          }
          push_link_break(breast_exp_list);

          if (milking_exp) {
            breast_exp_list.push(
              get_filled_exp_str(
                milking_exp,
                chara.id,
                milking_exp.s > 0
                  ? i18n().detail.get_exp_breast_double_milking
                  : i18n().detail.get_exp_breast_milking,
                di18n.feature.get_breast_desc(milking_exp.cup),
              ),
            );
          }
          if (milking_count || milk_amount) {
            breast_exp_list.push(
              flat_join_list(
                [
                  milking_count > 0
                    ? i18n().detail.get_exp_breast_milking_count(
                        get_abbr_number(milking_count),
                      )
                    : void 0,
                  milk_amount > 0
                    ? i18n().detail.get_exp_breast_milking_amount(
                        get_abbr_number(milk_amount),
                      )
                    : void 0,
                ],
                i18n().ui_comma,
              ),
            );
          }
          push_link_break(breast_exp_list);

          if (breast_orgasm_count) {
            breast_exp_list.push(
              i18n().detail.get_exp_breast_orgasm(
                get_abbr_number(breast_orgasm_count),
              ),
            );
          }
        }
      } else {
        breast_exp_list.push(get_unknown_info(chara.id));
      }
      remove_end_line_breaks(breast_exp_list);
    }
    return {
      print: () => [
        {
          type: 'divider',
          config: {
            content: i18n().detail.exp_breast_title,
            position: 'left',
          },
        },
        ...breast_exp_list.map((e) => ({ content: e, type: 'text' })),
      ],
    };
  },
  name: i18n().detail.exp_breast_title,
};
