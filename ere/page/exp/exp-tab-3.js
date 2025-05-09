const era = require('#/era-electron');

const {
  get_filled_exp_str,
  push_link_break,
  remove_end_line_breaks,
} = require('#/page/exp/snippets');

const { join_to_string } = require('#/utils/list-utils');

const { hair_desc } = require('#/data/ero/status-const');
const { growth_info, unknown_info } = require('#/data/exp-const');

const body_semen_desc = [
  '',
  '肌肤就会躁动难耐',
  '就会感到幸福',
  '肌肤就会幸福地躁动起来',
];

const page_name = '肉体情报【身】';

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {{in_growth:boolean,mark_level:number,show_all_exp:boolean,show_body:boolean,show_exp:boolean}} flags
   * @returns {{print():*[]}}
   */
  generate: function (chara, flags) {
    const body_exp_list = [];
    if (flags.in_growth) {
      body_exp_list.push(growth_info);
    } else {
      if (flags.show_body) {
        const body_hair_talent = era.get(`talent:${chara.id}:腋毛成长`),
          body_hair = era.get(`cflag:${chara.id}:腋毛`);
        if (!body_hair_talent) {
          body_exp_list.push('有着天生无毛的光洁腋下……');
        } else if (!body_hair) {
          body_exp_list.push('腋下现在光洁无毛……');
        } else {
          body_exp_list.push(
            `腋下有着 ${hair_desc[body_hair - 1]}${
              body_hair_talent === 2 ? '，正在飞速成长着……' : ''
            }`,
          );
        }
        if (era.get(`talent:${chara.id}:淫身`) === 2) {
          body_exp_list.push('渴求着他人的温暖……肉体仿佛已经成为淫欲本身……');
        }
        push_link_break(body_exp_list);
      }
      if (flags.show_exp) {
        const body_fuck_count = era.get(`exp:${chara.id}:身交次数`),
          body_semen = era.get(`exp:${chara.id}:身体沾染精液量`),
          body_orgasm_count = era.get(`exp:${chara.id}:身体高潮次数`),
          face_semen = era.get(`exp:${chara.id}:颜射次数`),
          body_semen_talent =
            era.get(`talent:${chara.id}:浴精成瘾`) * 2 +
            era.get(`talent:${chara.id}:气味敏感`);
        const face_semen_exp = era.get(`cstr:${chara.id}:初次颜射经历`),
          unknown_face_semen_exp = era.get(
            `cstr:${chara.id}:无自觉初次颜射经历`,
          ),
          body_sex_exp = era.get(`cstr:${chara.id}:初次身交经历`),
          unknown_body_sex_exp = era.get(`cstr:${chara.id}:无自觉初次身交经历`);
        if (face_semen_exp) {
          body_exp_list.push(get_filled_exp_str(face_semen_exp, chara.id));
        }
        if (flags.show_all_exp || face_semen_exp) {
          if (unknown_face_semen_exp) {
            body_exp_list.push(
              get_filled_exp_str(unknown_face_semen_exp, chara.id),
            );
          }
          if (face_semen) {
            body_exp_list.push(
              `被颜射了 ${face_semen} 次，沾染过 ${era.get(
                `exp:${chara.id}:颜射精液量`,
              )}ml 精液`,
            );
          }
        }
        push_link_break(body_exp_list);

        if (body_sex_exp) {
          body_exp_list.push(get_filled_exp_str(body_sex_exp, chara.id));
        }
        if (flags.show_all_exp || body_sex_exp) {
          if (unknown_body_sex_exp) {
            body_exp_list.push(
              get_filled_exp_str(unknown_body_sex_exp, chara.id),
            );
          }
          if (body_fuck_count || body_semen) {
            body_exp_list.push(
              join_to_string(
                [
                  body_fuck_count ? `抚慰性器 ${body_fuck_count} 次` : '',
                  body_semen ? `沾染过 ${body_semen}ml 精液` : '',
                ],
                '，',
              ),
            );
          }
        }
        if (
          (flags.mark_level >= 3 || body_semen || face_semen) &&
          body_semen_talent
        ) {
          body_exp_list.push(
            `每次染上温热的精液，${body_semen_desc[body_semen_talent]}`,
          );
        }
        push_link_break(body_exp_list);

        if (body_orgasm_count) {
          body_exp_list.push(`因为快感去了 ${body_orgasm_count} 次`);
        }
      } else {
        body_exp_list.push(unknown_info(chara.id));
      }
      remove_end_line_breaks(body_exp_list);
    }
    return {
      print() {
        return [
          {
            type: 'divider',
            config: { content: page_name, position: 'left' },
          },
          ...body_exp_list.map((e) => {
            return { content: e, type: 'text' };
          }),
        ];
      },
    };
  },
  name: page_name,
};
