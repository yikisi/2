const era = require('#/era-electron');

const {
  get_filled_exp_str,
  get_unknown_info,
  push_link_break,
  remove_end_line_breaks,
} = require('#/page/exp/snippets');

const { flat_join_list } = require('#/utils/list-utils');
const { get_abbr_number } = require('#/utils/value-utils');

const di18n = require('#/i18n/extended-def');
const { i18n, lan } = require('#/i18n/selector');

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {{in_growth:boolean,mark_level:number,show_all_exp:boolean,show_body:boolean,show_exp:boolean}} flags
   * @returns {{print():*[]}}
   */
  generate(chara, flags) {
    const _lan = lan();
    const mouth_exp_list = [];
    if (flags.in_growth) {
      mouth_exp_list.push(i18n().detail.growth_info);
    } else {
      if (flags.show_body) {
        const in_stomach_semen = era.get(`cflag:${chara.id}:腹中精液`);
        if (era.get(`talent:${chara.id}:荡唇`) > 0) {
          mouth_exp_list.push(i18n().detail.exp_mouth_gift_desc);
        }
        if (era.get(`talent:${chara.id}:淫口`) === 2) {
          mouth_exp_list.push(i18n().detail.exp_mouth_trained_desc);
        }
        if (in_stomach_semen) {
          mouth_exp_list.push(
            i18n().detail.exp_mouth_drink_semen +
              (flags.mark_level >= 3
                ? i18n().detail.exp_mouth_drink_semen_template.replace(
                    '%SEMEN%',
                    Object(in_stomach_semen).toLocaleString(_lan),
                  )
                : ''),
          );
        }
        push_link_break(mouth_exp_list);
      }
      if (flags.show_exp) {
        const kiss_count = era.get(`exp:${chara.id}:接吻次数`);
        const suck_count = era.get(`exp:${chara.id}:舔吸次数`);
        const blow_job_count = era.get(`exp:${chara.id}:口交次数`);
        const mouth_orgasm_count = era.get(`exp:${chara.id}:口腔高潮次数`);
        const drunk_semen = era.get(`exp:${chara.id}:饮精量`);
        const drunk_milk = era.get(`exp:${chara.id}:吸奶量`);
        const drunk_semen_talent =
          ((era.get(`talent:${chara.id}:饮精成瘾`) > 0) << 1) +
          (era.get(`talent:${chara.id}:喉咙敏感`) > 0);
        const kiss_exp = era.get(`cstr:${chara.id}:初吻经历`);
        const unknown_kiss_exp = era.get(`cstr:${chara.id}:无自觉初吻经历`);
        const blow_job_exp = era.get(`cstr:${chara.id}:初次口交经历`);
        const unknown_blow_job_exp = era.get(
          `cstr:${chara.id}:无自觉初次口交经历`,
        );
        const drunk_semen_exp = era.get(`cstr:${chara.id}:初次吞精经历`);
        const unknown_drunk_semen_exp = era.get(
          `cstr:${chara.id}:无自觉初次吞精经历`,
        );
        const drunk_milk_exp = era.get(`cstr:${chara.id}:初次吸奶经历`);
        let drunk_secretion_exp = era.get(`cstr:${chara.id}:初次饮爱液经历`);
        if (
          Array.isArray(drunk_secretion_exp) &&
          drunk_secretion_exp.length === 0
        ) {
          drunk_secretion_exp = void 0;
        }
        let unknown_drunk_secretion_exp = era.get(
          `cstr:${chara.id}:无自觉初次饮爱液经历`,
        );
        if (
          Array.isArray(unknown_drunk_secretion_exp) &&
          unknown_drunk_secretion_exp.length === 0
        ) {
          unknown_drunk_secretion_exp = void 0;
        }
        const drunk_secretion = era.get(`exp:${chara.id}:饮爱液量`);
        if (kiss_exp) {
          mouth_exp_list.push(
            get_filled_exp_str(
              kiss_exp,
              chara.id,
              i18n().detail.get_exp_mouth_kiss,
            ),
          );
        }
        if (flags.show_all_exp || kiss_exp) {
          if (unknown_kiss_exp) {
            mouth_exp_list.push(
              get_filled_exp_str(
                unknown_kiss_exp,
                chara.id,
                i18n().detail.get_exp_mouth_unknown_kiss,
              ),
            );
          }
          if (kiss_count > 0) {
            mouth_exp_list.push(
              i18n().detail.get_exp_mouth_kiss_count(
                get_abbr_number(kiss_count),
              ),
            );
          }
        }
        push_link_break(mouth_exp_list);

        if (blow_job_exp) {
          mouth_exp_list.push(
            get_filled_exp_str(
              blow_job_exp,
              chara.id,
              blow_job_exp.be
                ? i18n().detail.get_exp_mouth_be_blow_job
                : i18n().detail.get_exp_mouth_blow_job,
            ),
          );
        }
        if (flags.show_all_exp || blow_job_exp) {
          if (unknown_blow_job_exp) {
            mouth_exp_list.push(
              get_filled_exp_str(
                unknown_blow_job_exp,
                chara.id,
                i18n().detail.get_exp_mouth_unknown_be_blow_job,
              ),
            );
          }
          if (suck_count || blow_job_count) {
            mouth_exp_list.push(
              flat_join_list(
                [
                  suck_count > 0
                    ? i18n().detail.get_exp_mouth_suck_count(
                        get_abbr_number(suck_count),
                      )
                    : void 0,
                  blow_job_count > 0
                    ? i18n().detail.get_exp_mouth_blow_job_count(
                        get_abbr_number(blow_job_count),
                      )
                    : void 0,
                ],
                i18n().ui_comma,
              ),
            );
          }
        }
        push_link_break(mouth_exp_list);

        if (drunk_semen_exp) {
          mouth_exp_list.push(
            get_filled_exp_str(
              drunk_semen_exp,
              chara.id,
              i18n().detail.get_exp_mouth_drink_semen,
            ),
          );
        }
        if (flags.show_all_exp || drunk_semen_exp) {
          if (unknown_drunk_semen_exp) {
            mouth_exp_list.push(
              get_filled_exp_str(
                unknown_drunk_semen_exp,
                chara.id,
                i18n().detail.get_exp_mouth_unknown_drink_semen,
              ),
            );
          }
          if (drunk_semen > 0) {
            mouth_exp_list.push(
              i18n().detail.get_exp_mouth_drink_semen_count(
                get_abbr_number(drunk_semen),
              ),
            );
          }
        }
        if (
          (flags.mark_level >= 3 || drunk_semen > 0) &&
          drunk_semen_talent > 0
        ) {
          mouth_exp_list.push(
            di18n.detail.get_mouth_poisoned(drunk_semen_talent),
          );
        }
        push_link_break(mouth_exp_list);
        if (drunk_secretion_exp) {
          mouth_exp_list.push(
            get_filled_exp_str(
              drunk_secretion_exp,
              chara.id,
              i18n().detail.get_exp_mouth_drink_secretion,
            ),
          );
        }
        if (flags.show_all_exp || drunk_secretion_exp) {
          if (unknown_drunk_secretion_exp) {
            mouth_exp_list.push(
              get_filled_exp_str(
                unknown_drunk_semen_exp,
                chara.id,
                i18n().detail.get_exp_mouth_unknown_drink_secretion,
              ),
            );
          }
          if (drunk_secretion > 0) {
            mouth_exp_list.push(
              i18n().detail.get_exp_mouth_drink_secretion_count(
                get_abbr_number(drunk_secretion),
              ),
            );
          }
        }
        push_link_break(mouth_exp_list);
        if (drunk_milk_exp) {
          mouth_exp_list.push(
            get_filled_exp_str(
              drunk_milk_exp,
              chara.id,
              i18n().detail.get_exp_mouth_drink_milk,
            ),
            i18n().detail.get_exp_mouth_drink_milk_count(
              get_abbr_number(drunk_milk),
            ),
          );
        }
        push_link_break(mouth_exp_list);

        if (mouth_orgasm_count) {
          mouth_exp_list.push(
            i18n().detail.get_exp_mouth_orgasm(
              get_abbr_number(mouth_orgasm_count),
            ),
          );
        }
      } else {
        mouth_exp_list.push(get_unknown_info(chara.id));
      }
      remove_end_line_breaks(mouth_exp_list);
    }
    return {
      print: () => [
        {
          type: 'divider',
          config: {
            content: i18n().detail.exp_mouth_title,
            position: 'left',
          },
        },
        ...mouth_exp_list.map((e) => ({ content: e, type: 'text' })),
      ],
    };
  },
  name: i18n().detail.exp_mouth_title,
};
