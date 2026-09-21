const era = require('#/era-electron');

const {
  get_penis_size,
  get_pregnant_ratio,
} = require('#/system/ero/sys-calc-ero-status');
const {
  sys_get_colored_full_callname,
} = require('#/system/sys-calc-chara-others');

const {
  get_filled_exp_str,
  get_unknown_info,
  push_link_break,
  remove_end_line_breaks,
} = require('#/page/exp/snippets');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { flat_join_list, join_to_string } = require('#/utils/list-utils');
const { get_abbr_number } = require('#/utils/value-utils');

const { sex_colors } = require('#/data/color-const');
const { baby_limit } = require('#/data/ero/orgasm-const');
const {
  pregnant_stage_enum,
  unexpected_pregnant_enum,
} = require('#/data/ero/status-const');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

const di18n = require('#/i18n/extended-def');
const { i18n, lan } = require('#/i18n/selector');

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {{in_growth:boolean,mark_level:number,show_all_exp:boolean,show_body:boolean,show_exp:boolean,true_mark_level:number}} flags
   * @returns {{print():*[]}}
   */
  generate: function (chara, flags) {
    const vagina_exp_list = [];
    if (flags.in_growth) {
      vagina_exp_list.push(i18n().detail.growth_info);
    } else {
      if (flags.show_body) {
        const penis_size = get_penis_size(chara.id);
        if (!penis_size) {
          const sex_hair_talent = era.get(`talent:${chara.id}:阴毛成长`),
            sex_hair = era.get(`cflag:${chara.id}:阴毛`);
          if (!sex_hair_talent) {
            vagina_exp_list.push(i18n().detail.exp_vagina_no_pubic_hair);
          } else if (!sex_hair) {
            vagina_exp_list.push(i18n().detail.exp_vagina_clean_pubic_hair);
          } else {
            vagina_exp_list.push(
              i18n().detail.get_exp_pv_pubic_hair(
                di18n.feature.get_body_hair_desc(sex_hair - 1, sex_hair_talent),
              ),
            );
          }
        }
        const in_womb_semen = era.get(`cflag:${chara.id}:子宫内精液`),
          v_type_code = era.get(`talent:${chara.id}:茎核类型`);
        vagina_exp_list.push(
          i18n().detail.get_exp_vagina_summary({
            content: di18n.detail.vagina_color[v_type_code],
            color: sex_colors[v_type_code],
          }),
        );
        if (era.get(`talent:${chara.id}:名穴`)) {
          vagina_exp_list.push(i18n().detail.exp_vagina_gift_desc);
        }
        const clitoris_talent =
          !get_penis_size(chara.id) > 0 && era.get(`talent:${chara.id}:淫核`);
        const vagina_talent = era.get(`talent:${chara.id}:淫壶`);
        if (clitoris_talent === 2 || vagina_talent === 2) {
          vagina_exp_list.push(
            join_to_string(
              [
                clitoris_talent === 2
                  ? i18n().detail.exp_vagina_clitoris_trained_desc
                  : void 0,
                vagina_talent === 2
                  ? i18n().detail.exp_vagina_vagina_trained_desc
                  : void 0,
              ],
              i18n().detail.desc_conjunction,
            ),
          );
        }
        if (in_womb_semen) {
          vagina_exp_list.push(
            i18n().detail.exp_vagina_semen +
              (flags.mark_level >= 3
                ? i18n().detail.exp_vagina_semen_template.replace(
                    '%SEMEN%',
                    Object(in_womb_semen).toLocaleString(lan()),
                  )
                : ''),
          );
        }
        push_link_break(vagina_exp_list);
      }
      if (flags.show_exp) {
        const vagina_touched_count = era.get(`exp:${chara.id}:阴部玩弄次数`);
        const penis_sex_count = era.get(`exp:${chara.id}:性交次数`);
        const clitoris_orgasm_count = era.get(`exp:${chara.id}:外阴高潮次数`);
        const vagina_orgasm_count = era.get(`exp:${chara.id}:阴道高潮次数`);
        const clitoris_semen = era.get(`exp:${chara.id}:外阴沾染精液量`);
        const cum_in_womb = era.get(`exp:${chara.id}:内射次数`);
        const vagina_semen = era.get(`exp:${chara.id}:膣内精液量`);
        const fuck_sleep_penis = era.get(`exp:${chara.id}:阴道睡奸`);
        const sleep_vagina = era.get(`exp:${chara.id}:阴道被睡奸`);
        const vagina_semen_talent =
          ((era.get(`talent:${chara.id}:榨精成瘾`) > 0) << 1) +
          (era.get(`talent:${chara.id}:子宫敏感`) > 0);
        const virgin_exp = era.get(`cstr:${chara.id}:破处经历`);
        const unknown_virgin_exp = era.get(`cstr:${chara.id}:无自觉破处经历`);
        const cummed_exp = era.get(`cstr:${chara.id}:初次被内射经历`);
        const unknown_cummed_exp = era.get(
          `cstr:${chara.id}:无自觉初次被内射经历`,
        );
        let squirt_exp = era.get(`cstr:${chara.id}:初次潮吹经历`);
        if (Array.isArray(squirt_exp) && squirt_exp.length === 0) {
          squirt_exp = void 0;
        }
        let unknown_squirt_exp = era.get(`cstr:${chara.id}:无自觉初次潮吹经历`);
        if (
          Array.isArray(unknown_squirt_exp) &&
          unknown_squirt_exp.length === 0
        ) {
          unknown_squirt_exp = void 0;
        }
        const squirt = era.get(`exp:${chara.id}:潮吹次数`);
        const secretion = era.get(`exp:${chara.id}:爱液分泌量`);
        if (virgin_exp) {
          vagina_exp_list.push(
            get_filled_exp_str(
              virgin_exp,
              chara.id,
              virgin_exp.sleep
                ? i18n().detail.get_exp_vagina_lose_virgin_sleep
                : virgin_exp.be
                  ? i18n().detail.get_exp_vagina_be_lose_virgin
                  : i18n().detail.get_exp_vagina_lose_virgin,
              virgin_exp.penis > 0
                ? di18n.feature.n_penis[virgin_exp.penis]
                : void 0,
            ),
          );
        }
        if (flags.show_all_exp || virgin_exp) {
          if (unknown_virgin_exp) {
            vagina_exp_list.push(
              get_filled_exp_str(
                unknown_virgin_exp,
                chara.id,
                i18n().detail.get_exp_vagina_unknown_be_lose_virgin,
                virgin_exp.penis > 0
                  ? di18n.feature.n_penis[virgin_exp.penis]
                  : void 0,
              ),
            );
          }
          if (vagina_touched_count || penis_sex_count) {
            vagina_exp_list.push(
              flat_join_list(
                [
                  vagina_touched_count > 0
                    ? i18n().detail.get_exp_vagina_vagina_touched_count(
                        get_abbr_number(vagina_touched_count),
                      )
                    : void 0,
                  penis_sex_count > 0
                    ? i18n().detail.get_exp_vagina_fucked_count(
                        get_abbr_number(penis_sex_count),
                      )
                    : void 0,
                ],
                i18n().ui_comma,
              ),
            );
          }
        }
        push_link_break(vagina_exp_list);

        if (cummed_exp) {
          vagina_exp_list.push(
            get_filled_exp_str(
              cummed_exp,
              chara.id,
              i18n().detail.get_exp_vagina_cumed_exp,
              cummed_exp.amount > 0
                ? get_abbr_number(cummed_exp.amount)
                : void 0,
            ),
          );
        }
        if (flags.show_all_exp || cummed_exp) {
          if (unknown_cummed_exp) {
            vagina_exp_list.push(
              get_filled_exp_str(
                unknown_cummed_exp,
                chara.id,
                i18n().detail.get_exp_vagina_unknown_cumed_exp,
                unknown_cummed_exp.amount > 0
                  ? get_abbr_number(unknown_cummed_exp.amount)
                  : void 0,
              ),
            );
          }
          if (clitoris_semen || vagina_semen) {
            vagina_exp_list.push(
              flat_join_list(
                [
                  clitoris_semen > 0
                    ? i18n().detail.get_exp_vagina_out_semen(
                        get_abbr_number(clitoris_semen),
                      )
                    : '',
                  vagina_semen > 0
                    ? i18n().detail.get_exp_vagina_cumed_semen(
                        get_abbr_number(cum_in_womb),
                        get_abbr_number(vagina_semen),
                      )
                    : '',
                ],
                i18n().ui_comma,
              ),
            );
          }
        }
        if ((flags.mark_level >= 3 || vagina_semen) && vagina_semen_talent) {
          vagina_exp_list.push(
            di18n.detail.get_vagina_poisoned(vagina_semen_talent),
          );
        }
        push_link_break(vagina_exp_list);

        if (squirt_exp) {
          vagina_exp_list.push(
            get_filled_exp_str(
              squirt_exp,
              chara.id,
              !squirt_exp.c || squirt_exp.c === chara.id
                ? i18n().detail.get_exp_vagina_squirt_exp_self
                : squirt_exp.s >= 0
                  ? i18n().detail.get_exp_vagina_squirt_exp_both
                  : i18n().detail.get_exp_vagina_squirt_exp,
            ),
          );
        }
        if (flags.show_all_exp || squirt_exp) {
          if (unknown_squirt_exp) {
            vagina_exp_list.push(
              get_filled_exp_str(
                unknown_squirt_exp,
                chara.id,
                !squirt_exp.c || squirt_exp.c === chara.id
                  ? i18n().detail.get_exp_vagina_unknown_squirt_exp_self
                  : squirt_exp.s >= 0
                    ? i18n().detail.get_exp_vagina_unknown_squirt_exp_both
                    : i18n().detail.get_exp_vagina_unknown_squirt_exp,
              ),
            );
          }
        }
        if (squirt > 0) {
          vagina_exp_list.push(
            flat_join_list(
              [
                clitoris_orgasm_count > 0
                  ? i18n().detail.get_exp_vagina_clitoris_orgasm(
                      get_abbr_number(clitoris_orgasm_count),
                    )
                  : void 0,
                vagina_orgasm_count > 0
                  ? i18n().detail.get_exp_vagina_vagina_orgasm(
                      get_abbr_number(vagina_orgasm_count),
                    )
                  : void 0,
              ],
              i18n().ui_comma,
            ),
          );
          vagina_exp_list.push(
            i18n().detail.get_exp_vagina_squirt_count(
              get_abbr_number(squirt),
              get_abbr_number(secretion),
            ),
          );
        } else if (secretion > 0) {
          vagina_exp_list.push(
            i18n().detail.get_exp_vagina_squirt_amount(
              get_abbr_number(secretion),
            ),
          );
        }
        push_link_break(vagina_exp_list);

        if (flags.show_all_exp || virgin_exp) {
          if (fuck_sleep_penis) {
            vagina_exp_list.push(
              (chara.id > 0
                ? i18n().detail.get_exp_vagina_fuck_sleep_penis
                : i18n().detail.get_exp_vagina_fuck_sleep_penis_you)(
                get_abbr_number(fuck_sleep_penis),
                get_chara_talk(0).get_colored_name(),
              ),
            );
          }
          if (sleep_vagina) {
            vagina_exp_list.push(
              i18n().detail.get_exp_vagina_be_sleep_fuck(
                get_abbr_number(sleep_vagina),
              ),
            );
          }
        }
      } else {
        vagina_exp_list.push(get_unknown_info(chara.id));
      }
    }
    push_link_break(vagina_exp_list);

    const pregnant_stage = era.get(`cflag:${chara.id}:妊娠阶段`);
    const pregnant_timer = era.get(`cflag:${chara.id}:妊娠回合计时`);
    let is_preg = false;
    let pregnant_buffer = '';
    if (flags.in_growth) {
      pregnant_buffer = i18n().detail.exp_vagina_pregnant_in_growth;
    } else if (era.get(`status:${chara.id}:经期`)) {
      pregnant_buffer = i18n().detail.exp_vagina_pregnant_menstrual_period;
    } else if (pregnant_stage === 1 << pregnant_stage_enum.resume) {
      pregnant_buffer =
        di18n.detail.pregnant_stage[1 << pregnant_stage_enum.resume];
      if (flags.mark_level) {
        pregnant_buffer = i18n()
          .detail.exp_vagina_pregnant_timer_template.replace(
            '%DESC%',
            pregnant_buffer,
          )
          .replace('%TIMER%', pregnant_timer.toString());
      }
    } else if (
      pregnant_stage === 1 << pregnant_stage_enum.no ||
      (pregnant_timer < 4 && flags.true_mark_level <= 2)
    ) {
      if (
        chara.id > 0 &&
        flags.mark_level >= 2 &&
        era.get(`exp:${chara.id}:生产次数`) >= baby_limit
      ) {
        pregnant_buffer = i18n().detail.exp_vagina_pregnant_too_many_birth;
      } else if (!chara.id || flags.mark_level >= 1) {
        switch (
          (era.get('flag:当前周') - era.get(`cflag:${chara.id}:月经周`) + 4) %
          4
        ) {
          case 0:
          case 2:
            pregnant_buffer = i18n().detail.exp_vagina_pregnant_egg_prepared;
            break;
          case 1:
            pregnant_buffer = i18n().detail.exp_vagina_pregnant_egg_growth;
            break;
          case 3:
            pregnant_buffer = i18n().detail.exp_vagina_pregnant_egg_out;
        }
      } else {
        pregnant_buffer =
          di18n.detail.pregnant_stage[1 << pregnant_stage_enum.no];
      }
      if (flags.true_mark_level === 3) {
        pregnant_buffer = i18n()
          .detail.exp_vagina_pregnant_prob_template.replace(
            '%DESC%',
            pregnant_buffer,
          )
          .replace('%PROB%', (get_pregnant_ratio(chara.id) * 100).toFixed(2));
      }
    } else {
      is_preg = true;
      if (flags.mark_level >= 2) {
        pregnant_buffer = di18n.detail.pregnant_stage[pregnant_stage];
      } else if (pregnant_stage >> pregnant_stage_enum.fetal > 0) {
        pregnant_buffer = i18n().detail.exp_vagina_pregnant_desc_showing;
      } else {
        pregnant_buffer = i18n().detail.exp_vagina_pregnant_desc_known;
      }
      if (flags.mark_level) {
        pregnant_buffer = i18n()
          .detail.exp_vagina_pregnant_timer_template.replace(
            '%DESC%',
            pregnant_buffer,
          )
          .replace('%TIMER%', pregnant_timer.toString());
      }
    }
    vagina_exp_list.push(pregnant_buffer);
    const life_marks = LifeEventMarks.get_marks(chara.id);
    if (is_preg) {
      if (
        life_marks.unexpected_pregnant !== unexpected_pregnant_enum.mother_sleep
      ) {
        if (flags.true_mark_level === 3 || !life_marks.report) {
          vagina_exp_list.push(
            i18n().detail.get_exp_vagina_pregnant_father(
              sys_get_colored_full_callname(chara.id, life_marks.sperm),
            ),
          );
        }
      } else if (chara.id > 0) {
        vagina_exp_list.push(
          i18n().detail.get_exp_vagina_pregnant_father_you(
            get_chara_talk(0).get_colored_name(),
          ),
        );
      } else if (life_marks.report === -1) {
        vagina_exp_list.push(
          i18n().detail.get_exp_vagina_pregnant_father(
            sys_get_colored_full_callname(chara.id, life_marks.sperm),
          ),
        );
      }
    }

    remove_end_line_breaks(vagina_exp_list);
    return {
      print: () => [
        {
          config: { content: i18n().detail.exp_vagina_title, position: 'left' },
          type: 'divider',
        },
        ...vagina_exp_list.map((e) => ({ content: e, type: 'text' })),
      ],
    };
  },
  name: i18n().detail.exp_vagina_title,
  vagina: true,
};
