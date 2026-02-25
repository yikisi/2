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
const { i18n } = require('#/i18n/selector');

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {{in_growth:boolean,mark_level:number,show_all_exp:boolean,show_body:boolean,show_exp:boolean}} flags
   * @returns {{print():*[]}}
   */
  generate(chara, flags) {
    const anal_exp_list = [];
    if (flags.in_growth) {
      anal_exp_list.push(i18n().detail.growth_info);
    } else {
      if (flags.show_body) {
        if (era.get(`talent:${chara.id}:魔尻`)) {
          anal_exp_list.push(i18n().detail.exp_anal_gift_desc);
        }
        if (era.get(`talent:${chara.id}:淫臀`) === 2) {
          anal_exp_list.push(i18n().detail.exp_anal_trained_desc);
        }
        const in_intestine_semen = era.get(`cflag:${chara.id}:肠道内精液`);
        if (in_intestine_semen > 0) {
          anal_exp_list.push(
            i18n().detail.exp_anal_semen +
              (flags.mark_level >= 3
                ? i18n().detail.exp_anal_semen_template.replace(
                    '%SEMEN%',
                    in_intestine_semen.toString(),
                  )
                : ''),
          );
        }
        push_link_break(anal_exp_list);
      }
      if (flags.show_exp) {
        const anal_sex_count = era.get(`exp:${chara.id}:肛交次数`),
          cumed_in_anal = era.get(`exp:${chara.id}:肠内射精次数`),
          anal_semen = era.get(`exp:${chara.id}:肠内精液量`),
          anal_orgasm_count = era.get(`exp:${chara.id}:肛门高潮次数`),
          anal_semen_talent =
            ((era.get(`talent:${chara.id}:精液灌肠`) > 0) << 1) +
            (era.get(`talent:${chara.id}:肠道敏感`) > 0);
        const anal_sex_exp = era.get(`cstr:${chara.id}:初次肛交经历`),
          unknown_anal_sex_exp = era.get(`cstr:${chara.id}:无自觉初次肛交经历`);

        if (anal_sex_exp) {
          anal_exp_list.push(
            get_filled_exp_str(
              anal_sex_exp,
              chara.id,
              anal_sex_exp.be
                ? i18n().detail.get_exp_anal_be_anal_sex_exp
                : i18n().detail.get_exp_anal_anal_sex_exp,
            ),
          );
        }
        if (flags.show_all_exp || anal_sex_exp) {
          if (unknown_anal_sex_exp) {
            anal_exp_list.push(
              get_filled_exp_str(
                unknown_anal_sex_exp,
                chara.id,
                i18n().detail.get_exp_anal_unknown_be_anal_sex_exp,
              ),
            );
          }
          if (anal_sex_count || cumed_in_anal) {
            anal_exp_list.push(
              flat_join_list(
                [
                  anal_sex_count > 0
                    ? i18n().detail.get_exp_anal_anal_sex_count(
                        get_abbr_number(anal_sex_count),
                      )
                    : void 0,
                  cumed_in_anal > 0
                    ? i18n().detail.get_exp_anal_cum_in_anal_count(
                        get_abbr_number(cumed_in_anal),
                        get_abbr_number(anal_semen),
                      )
                    : void 0,
                ],
                i18n().ui_comma,
              ),
            );
          }
        }
        if ((flags.mark_level >= 3 || cumed_in_anal) && anal_semen_talent) {
          anal_exp_list.push(di18n.detail.get_anal_poisoned(anal_semen_talent));
        }
        push_link_break(anal_exp_list);

        if (anal_orgasm_count) {
          anal_exp_list.push(
            i18n().detail.get_exp_anal_orgasm(
              get_abbr_number(anal_orgasm_count),
            ),
          );
        }
      } else {
        anal_exp_list.push(get_unknown_info(chara.id));
      }
      remove_end_line_breaks(anal_exp_list);
    }
    return {
      print: () => [
        {
          type: 'divider',
          config: { content: i18n().detail.exp_anal_title, position: 'left' },
        },
        ...anal_exp_list.map((e) => ({ content: e, type: 'text' })),
      ],
    };
  },
  name: i18n().detail.exp_anal_title,
};
