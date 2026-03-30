const era = require('#/era-electron');

const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');

const {
  get_filled_exp_str,
  get_unknown_info,
  push_link_break,
  remove_end_line_breaks,
} = require('#/page/exp/snippets');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { flat_join_list } = require('#/utils/list-utils');
const { get_abbr_number } = require('#/utils/value-utils');

const { sex_colors } = require('#/data/color-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {{in_growth:boolean,mark_level:number,show_all_exp:boolean,show_body:boolean,show_exp:boolean}} flags
   * @returns {{print():*[]}}
   */
  generate: function (chara, flags) {
    const penis_exp_list = [];
    if (flags.in_growth) {
      penis_exp_list.push(
        chara.sex_code > 0
          ? i18n().detail.growth_info
          : i18n().detail.no_part_info,
      );
    } else {
      if (flags.show_body) {
        const penis_size = get_penis_size(chara.id);
        if (penis_size) {
          const p_type_code = era.get(`talent:${chara.id}:茎核类型`);
          const sex_hair_talent = era.get(`talent:${chara.id}:阴毛成长`),
            sex_hair = era.get(`cflag:${chara.id}:阴毛`);
          if (!sex_hair_talent) {
            penis_exp_list.push(i18n().detail.exp_penis_no_pubic_hair);
          } else if (!sex_hair) {
            penis_exp_list.push(i18n().detail.exp_penis_clean_pubic_hair);
          } else {
            penis_exp_list.push(
              i18n().detail.get_exp_pv_pubic_hair(
                di18n.feature.get_body_hair_desc(sex_hair - 1, sex_hair_talent),
              ),
            );
          }
          penis_exp_list.push(
            i18n().detail.get_exp_penis_summary(
              !chara.sex_code ? i18n().detail.exp_penis_drug : '',
              {
                content: di18n.feature.n_c_sex_organ[p_type_code],
                color: sex_colors[p_type_code],
              },
              di18n.feature.n_penis[penis_size],
            ),
          );
          if (era.get(`talent:${chara.id}:凶器`)) {
            penis_exp_list.push(i18n().detail.exp_penis_gift_desc);
          }
          if (era.get(`talent:${chara.id}:早泄`) === 2) {
            penis_exp_list.push(i18n().detail.exp_penis_trained_desc);
          }
        } else {
          penis_exp_list.push(i18n().detail.no_part_info);
        }
        push_link_break(penis_exp_list);
      }
      if (flags.show_exp) {
        const body_sex_count = era.get(`exp:${chara.id}:戳身体次数`),
          vagina_sex_count = era.get(`exp:${chara.id}:戳阴部次数`),
          active_anal_sex_count = era.get(`exp:${chara.id}:戳肛门次数`),
          penis_orgasm_count = era.get(`exp:${chara.id}:阴茎高潮次数`),
          semen = era.get(`exp:${chara.id}:射精量`),
          fuck_sleep_vagina = era.get(`exp:${chara.id}:阴茎睡奸`),
          sleep_penis = era.get(`exp:${chara.id}:阴茎被睡奸`);
        const penis_exp = era.get(`cstr:${chara.id}:失去童贞经历`),
          unknown_penis_exp = era.get(`cstr:${chara.id}:无自觉失去童贞经历`),
          cum_semen_exp = era.get(`cstr:${chara.id}:初次内射经历`),
          unknown_cum_semen_exp = era.get(
            `cstr:${chara.id}:无自觉初次内射经历`,
          );
        if (penis_exp) {
          penis_exp_list.push(
            get_filled_exp_str(
              penis_exp,
              chara.id,
              penis_exp.sleep
                ? i18n().detail.get_exp_penis_lose_virgin_sleep
                : penis_exp.be
                  ? i18n().detail.get_exp_penis_be_lose_virgin
                  : i18n().detail.get_exp_penis_lose_virgin,
            ),
          );
        }
        if (flags.show_all_exp || penis_exp) {
          if (unknown_penis_exp) {
            penis_exp_list.push(
              get_filled_exp_str(
                unknown_penis_exp,
                chara.id,
                i18n().detail.get_exp_penis_unknown_be_lose_virgin,
              ),
            );
          }
          if (body_sex_count || vagina_sex_count || active_anal_sex_count) {
            penis_exp_list.push(
              flat_join_list(
                [
                  body_sex_count > 0
                    ? i18n().detail.get_exp_penis_fuck_body_count(
                        get_abbr_number(body_sex_count),
                      )
                    : void 0,
                  vagina_sex_count > 0
                    ? i18n().detail.get_exp_penis_fuck_vagina_count(
                        get_abbr_number(vagina_sex_count),
                      )
                    : void 0,
                  active_anal_sex_count > 0
                    ? i18n().detail.get_exp_penis_fuck_anal_count(
                        get_abbr_number(active_anal_sex_count),
                      )
                    : void 0,
                ],
                i18n().ui_comma,
              ),
            );
          }
        }
        push_link_break(penis_exp_list);

        if (cum_semen_exp) {
          penis_exp_list.push(
            get_filled_exp_str(
              cum_semen_exp,
              chara.id,
              i18n().detail.get_exp_penis_cum_semen_exp,
              get_abbr_number(cum_semen_exp.amount),
            ),
          );
        }
        if (flags.show_all_exp || cum_semen_exp) {
          if (unknown_cum_semen_exp) {
            penis_exp_list.push(
              get_filled_exp_str(
                unknown_cum_semen_exp,
                chara.id,
                i18n().detail.get_exp_penis_unknown_cum_semen_exp,
                get_abbr_number(unknown_cum_semen_exp.amount),
              ),
            );
          }
          if (penis_orgasm_count) {
            penis_exp_list.push(
              flat_join_list(
                [
                  penis_orgasm_count > 0
                    ? i18n().detail.get_exp_penis_cum_count(
                        get_abbr_number(penis_orgasm_count),
                      )
                    : void 0,
                  semen > 0
                    ? i18n().detail.get_exp_penis_cum_amount(
                        get_abbr_number(semen),
                      )
                    : void 0,
                ],
                i18n().ui_comma,
              ),
            );
          }
        }
        push_link_break(penis_exp_list);

        if (flags.show_all_exp || penis_exp) {
          if (fuck_sleep_vagina > 0) {
            penis_exp_list.push(
              (chara.id > 0
                ? i18n().detail.get_exp_penis_fuck_sleep_vagina
                : i18n().detail.get_exp_penis_fuck_sleep_vagina_you)(
                get_abbr_number(fuck_sleep_vagina),
                get_chara_talk(0).get_colored_name(),
              ),
            );
          }
          if (sleep_penis > 0) {
            penis_exp_list.push(
              i18n().detail.get_exp_penis_be_sleep_fuck(
                get_abbr_number(sleep_penis),
              ),
            );
          }
        }
      } else if (chara.sex_code > 0) {
        penis_exp_list.push(get_unknown_info(chara.id));
      }
      remove_end_line_breaks(penis_exp_list);
    }
    return {
      print: () => [
        {
          type: 'divider',
          config: {
            content: i18n().detail.exp_penis_title,
            position: 'left',
          },
        },
        ...penis_exp_list.map((e) => ({ content: e, type: 'text' })),
      ],
    };
  },
  name: i18n().detail.exp_penis_title,
};
