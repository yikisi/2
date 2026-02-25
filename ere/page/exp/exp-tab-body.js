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
  generate: function (chara, flags) {
    const body_exp_list = [];
    if (flags.in_growth) {
      body_exp_list.push(i18n().detail.growth_info);
    } else {
      if (flags.show_body) {
        const body_hair_talent = era.get(`talent:${chara.id}:腋毛成长`),
          body_hair = era.get(`cflag:${chara.id}:腋毛`);
        if (!body_hair_talent) {
          body_exp_list.push(i18n().detail.exp_body_no_armpit_hair);
        } else if (!body_hair) {
          body_exp_list.push(i18n().detail.exp_body_clean_armpit_hair);
        } else {
          body_exp_list.push(
            i18n().detail.get_exp_body_armpit_hair(
              di18n.feature.get_body_hair_desc(body_hair - 1, body_hair_talent),
            ),
          );
        }
        if (era.get(`talent:${chara.id}:淫身`) === 2) {
          body_exp_list.push(i18n().detail.exp_body_trained_desc);
        }
        push_link_break(body_exp_list);
      }
      if (flags.show_exp) {
        const body_fuck_count = era.get(`exp:${chara.id}:身交次数`),
          body_semen = era.get(`exp:${chara.id}:身体沾染精液量`),
          body_orgasm_count = era.get(`exp:${chara.id}:身体高潮次数`),
          face_semen = era.get(`exp:${chara.id}:颜射次数`),
          body_semen_talent =
            ((era.get(`talent:${chara.id}:浴精成瘾`) > 0) << 1) +
            (era.get(`talent:${chara.id}:气味敏感`) > 0);
        const face_semen_exp = era.get(`cstr:${chara.id}:初次颜射经历`),
          unknown_face_semen_exp = era.get(
            `cstr:${chara.id}:无自觉初次颜射经历`,
          ),
          body_sex_exp = era.get(`cstr:${chara.id}:初次身交经历`),
          unknown_body_sex_exp = era.get(`cstr:${chara.id}:无自觉初次身交经历`);
        if (face_semen_exp) {
          body_exp_list.push(
            get_filled_exp_str(
              face_semen_exp,
              chara.id,
              i18n().detail.get_exp_body_face_semen,
            ),
          );
        }
        if (flags.show_all_exp || face_semen_exp) {
          if (unknown_face_semen_exp) {
            body_exp_list.push(
              get_filled_exp_str(
                unknown_face_semen_exp,
                chara.id,
                i18n().detail.get_exp_body_unknown_face_semen,
              ),
            );
          }
          if (face_semen) {
            body_exp_list.push(
              i18n().detail.get_exp_body_face_semen_count(
                get_abbr_number(face_semen),
                get_abbr_number(era.get(`exp:${chara.id}:颜射精液量`)),
              ),
            );
          }
        }
        push_link_break(body_exp_list);

        if (body_sex_exp) {
          body_exp_list.push(
            get_filled_exp_str(
              body_sex_exp,
              chara.id,
              body_sex_exp.be
                ? i18n().detail.get_exp_body_be_body_sex
                : i18n().detail.get_exp_body_body_sex,
            ),
          );
        }
        if (flags.show_all_exp || body_sex_exp) {
          if (unknown_body_sex_exp) {
            body_exp_list.push(
              get_filled_exp_str(
                unknown_body_sex_exp,
                chara.id,
                i18n().detail.get_exp_body_unknown_be_body_sex,
              ),
            );
          }
          if (body_fuck_count || body_semen) {
            body_exp_list.push(
              flat_join_list(
                [
                  body_fuck_count > 0
                    ? i18n().detail.get_exp_body_body_sex_count(
                        get_abbr_number(body_fuck_count),
                      )
                    : void 0,
                  body_semen > 0
                    ? i18n().detail.get_exp_body_semen_amount(
                        get_abbr_number(body_semen),
                      )
                    : void 0,
                ],
                i18n().ui_comma,
              ),
            );
          }
        }
        if (
          (flags.mark_level >= 3 || body_semen || face_semen) &&
          body_semen_talent
        ) {
          body_exp_list.push(di18n.detail.get_body_poisoned(body_semen_talent));
        }
        push_link_break(body_exp_list);

        if (body_orgasm_count > 0) {
          body_exp_list.push(
            i18n().detail.get_exp_body_orgasm(
              get_abbr_number(body_orgasm_count),
            ),
          );
        }
      } else {
        body_exp_list.push(get_unknown_info(chara.id));
      }
      remove_end_line_breaks(body_exp_list);
    }
    return {
      print: () => [
        {
          type: 'divider',
          config: {
            content: i18n().detail.exp_body_title,
            position: 'left',
          },
        },
        ...body_exp_list.map((e) => ({ content: e, type: 'text' })),
      ],
    };
  },
  name: i18n().detail.exp_body_title,
};
