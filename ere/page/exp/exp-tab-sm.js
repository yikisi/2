const era = require('#/era-electron');

const {
  get_filled_exp_str,
  get_unknown_info,
  push_link_break,
  remove_end_line_breaks,
} = require('#/page/exp/snippets');

const { flat_join_list, join_to_string } = require('#/utils/list-utils');

const di18n = require('#/i18n/extended-def');
const { __, i18n } = require('#/i18n/selector');
const { get_abbr_number } = require('#/utils/value-utils');

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {{in_growth:boolean,mark_level:number,show_all_exp:boolean,show_body:boolean,show_exp:boolean}} flags
   * @returns {{print():*[]}}
   */
  generate(chara, flags) {
    const sm_exp_list = [];
    if (flags.in_growth) {
      sm_exp_list.push(i18n().detail.growth_info);
    } else {
      if (flags.show_body) {
        const m_talent =
          (era.get(`talent:${chara.id}:喜欢责骂`) > 0) +
          ((era.get(`talent:${chara.id}:喜欢痛苦`) > 0) << 1);
        const is_s = era.get(`talent:${chara.id}:抖S`) > 0;
        if (is_s || m_talent > 0) {
          sm_exp_list.push(
            join_to_string(
              [
                is_s ? i18n().detail.exp_sm_sadism_talent_template : void 0,
                m_talent > 0
                  ? di18n.detail.get_machoism_poisoned(m_talent)
                  : void 0,
              ],
              i18n().detail.desc_conjunction,
            ).replace(
              /%TITLE%/g,
              __(`detail.exp_sm_sex_title_${chara.sex_code}`),
            ),
          );
        }
        push_link_break(sm_exp_list);
      }
      if (flags.show_exp) {
        const abuse_count = era.get(`exp:${chara.id}:责骂次数`),
          hit_count = era.get(`exp:${chara.id}:击打次数`),
          s_orgasm_count = era.get(`exp:${chara.id}:施虐高潮次数`),
          abused_count = era.get(`exp:${chara.id}:被骂次数`),
          be_hit_count = era.get(`exp:${chara.id}:被打次数`),
          m_orgasm_count = era.get(`exp:${chara.id}:受虐高潮次数`);
        const sadism_exp = era.get(`cstr:${chara.id}:初次施虐经历`),
          masochism_exp = era.get(`cstr:${chara.id}:初次受虐经历`);

        if (sadism_exp) {
          sm_exp_list.push(
            get_filled_exp_str(
              sadism_exp,
              chara.id,
              i18n().detail.get_exp_sm_sadism_exp,
            ),
          );
        }
        if (abuse_count || hit_count) {
          sm_exp_list.push(
            flat_join_list(
              [
                abuse_count > 0
                  ? i18n().detail.get_exp_sm_abuse_count(
                      get_abbr_number(abuse_count),
                    )
                  : void 0,
                hit_count > 0
                  ? i18n().detail.get_exp_sm_hit_count(
                      get_abbr_number(hit_count),
                    )
                  : void 0,
              ],
              i18n().ui_comma,
            ),
          );
        }
        if (s_orgasm_count) {
          sm_exp_list.push(
            i18n().detail.get_exp_sm_sadism_count(
              get_abbr_number(s_orgasm_count),
            ),
          );
        }
        push_link_break(sm_exp_list);

        if (masochism_exp) {
          sm_exp_list.push(
            get_filled_exp_str(
              masochism_exp,
              chara.id,
              i18n().detail.get_exp_sm_machoism_exp,
            ),
          );
        }
        if (abused_count || be_hit_count) {
          sm_exp_list.push(
            flat_join_list(
              [
                abused_count > 0
                  ? i18n().detail.get_exp_sm_be_abused_count(
                      get_abbr_number(abused_count),
                    )
                  : void 0,
                be_hit_count > 0
                  ? i18n().detail.get_exp_sm_be_hit_count(
                      get_abbr_number(be_hit_count),
                    )
                  : void 0,
              ],
              i18n().ui_comma,
            ),
          );
        }
        if (m_orgasm_count) {
          sm_exp_list.push(
            i18n().detail.get_exp_sm_machoism_count(
              get_abbr_number(m_orgasm_count),
            ),
          );
        }
      } else {
        sm_exp_list.push(get_unknown_info(chara.id));
      }
      remove_end_line_breaks(sm_exp_list);
    }
    return {
      print: () => [
        {
          type: 'divider',
          config: { content: i18n().detail.exp_sm_title, position: 'left' },
        },
        ...sm_exp_list.map((e) => ({ content: e, type: 'text' })),
      ],
    };
  },
  name: i18n().detail.exp_sm_title,
};
