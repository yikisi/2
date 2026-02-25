const era = require('#/era-electron');

const {
  get_filled_exp_str,
  get_unknown_info,
  push_link_break,
  remove_end_line_breaks,
} = require('#/page/exp/snippets');

const { flat_join_list } = require('#/utils/list-utils');
const { get_abbr_number } = require('#/utils/value-utils');

const { i18n } = require('#/i18n/selector');

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {{in_growth:boolean,mark_level:number,show_all_exp:boolean,show_body:boolean,show_exp:boolean}} flags
   * @returns {{print():*[]}}
   */
  generate(chara, flags) {
    const hand_exp_list = [],
      foot_exp_list = [];
    if (flags.in_growth) {
      hand_exp_list.push(i18n().detail.growth_info);
      foot_exp_list.push(i18n().detail.growth_info);
    } else {
      if (flags.show_body) {
        if (era.get(`talent:${chara.id}:神之手`)) {
          hand_exp_list.push(i18n().detail.exp_hand_gift_desc);
        }
        push_link_break(hand_exp_list);

        if (era.get(`talent:${chara.id}:神之足`)) {
          foot_exp_list.push(i18n().detail.exp_foot_gift_desc);
        }
        push_link_break(foot_exp_list);
      }
      if (flags.show_exp) {
        const touch_body_count = era.get(`exp:${chara.id}:摸身体次数`),
          touch_breast_count = era.get(`exp:${chara.id}:揉乳次数`),
          handjob_count = era.get(`exp:${chara.id}:撸管次数`),
          touch_vagina_count = era.get(`exp:${chara.id}:抠穴次数`),
          touch_anal_count = era.get(`exp:${chara.id}:慰菊次数`);
        const hand_job_exp = era.get(`cstr:${chara.id}:初次手交经历`),
          unknown_hand_job_exp = era.get(`cstr:${chara.id}:无自觉初次手交经历`);

        if (hand_job_exp) {
          hand_exp_list.push(
            get_filled_exp_str(
              hand_job_exp,
              chara.id,
              hand_job_exp.c === chara.id
                ? i18n().detail.get_exp_hf_self_hand_job
                : hand_job_exp.be
                  ? i18n().detail.get_exp_hf_be_hand_job
                  : i18n().detail.get_exp_hf_hand_job,
            ),
          );
        }
        if (flags.show_all_exp || hand_job_exp) {
          if (unknown_hand_job_exp) {
            hand_exp_list.push(
              get_filled_exp_str(
                unknown_hand_job_exp,
                chara.id,
                i18n().detail.get_exp_hf_unknown_be_hand_job,
              ),
            );
          }
          if (
            handjob_count > 0 ||
            touch_vagina_count > 0 ||
            touch_anal_count > 0
          ) {
            hand_exp_list.push(
              flat_join_list(
                [
                  handjob_count > 0
                    ? i18n().detail.get_exp_hf_hand_job_count(
                        get_abbr_number(handjob_count),
                      )
                    : void 0,
                  touch_vagina_count > 0
                    ? i18n().detail.get_exp_hf_touch_vagina_count(
                        get_abbr_number(touch_vagina_count),
                      )
                    : void 0,
                  touch_anal_count > 0
                    ? i18n().detail.get_exp_hf_touch_anal_count(
                        get_abbr_number(touch_anal_count),
                      )
                    : void 0,
                ],
                i18n().ui_comma,
              ),
            );
          }
        }
        if (touch_body_count || touch_breast_count) {
          hand_exp_list.push(
            flat_join_list(
              [
                touch_body_count > 0
                  ? i18n().detail.get_exp_hf_touch_body_count(
                      get_abbr_number(touch_body_count),
                    )
                  : void 0,
                touch_breast_count > 0
                  ? i18n().detail.get_exp_hf_touch_breast_count(
                      get_abbr_number(touch_breast_count),
                    )
                  : void 0,
              ],
              i18n().ui_comma,
            ),
          );
        }

        const step_on_body_count = era.get(`exp:${chara.id}:踩踏次数`),
          foot_job_count = era.get(`exp:${chara.id}:踩肉棒次数`),
          step_on_vagina_count = era.get(`exp:${chara.id}:踩小穴次数`);
        const foot_job_exp = era.get(`cstr:${chara.id}:初次足交经历`),
          unknown_foot_job_exp = era.get(`cstr:${chara.id}:无自觉初次足交经历`);

        if (foot_job_exp) {
          foot_exp_list.push(
            get_filled_exp_str(
              foot_job_exp,
              chara.id,
              i18n().detail.get_exp_hf_foot_job,
            ),
          );
        }
        if (flags.show_all_exp || foot_job_exp) {
          if (unknown_foot_job_exp) {
            foot_exp_list.push(
              get_filled_exp_str(
                unknown_foot_job_exp,
                chara.id,
                i18n().detail.get_exp_hf_unknown_be_foot_job,
              ),
            );
          }
          if (foot_job_count || step_on_vagina_count) {
            foot_exp_list.push(
              flat_join_list(
                [
                  foot_job_count > 0
                    ? i18n().detail.get_exp_hf_foot_job_count(
                        get_abbr_number(foot_job_count),
                      )
                    : void 0,
                  step_on_vagina_count > 0
                    ? i18n().detail.get_exp_hf_step_on_vagina_count(
                        get_abbr_number(step_on_vagina_count),
                      )
                    : void 0,
                ],
                i18n().ui_comma,
              ),
            );
          }
        }
        if (step_on_body_count) {
          foot_exp_list.push(
            i18n().detail.get_exp_hf_step_on_body_count(
              get_abbr_number(step_on_body_count),
            ),
          );
        }
      } else {
        hand_exp_list.push(get_unknown_info(chara.id));
        foot_exp_list.push(get_unknown_info(chara.id));
      }
      remove_end_line_breaks(hand_exp_list);
      remove_end_line_breaks(foot_exp_list);
    }
    return {
      print() {
        return [
          {
            type: 'divider',
            config: {
              content: i18n().detail.exp_hf_header_hand,
              position: 'left',
            },
          },
          ...hand_exp_list.map((e) => ({ content: e, type: 'text' })),
          {
            type: 'divider',
            config: {
              content: i18n().detail.exp_hf_header_foot,
              position: 'left',
            },
          },
          ...foot_exp_list.map((e) => ({ content: e, type: 'text' })),
        ];
      },
    };
  },
  name: i18n().detail.exp_hf_title,
};
