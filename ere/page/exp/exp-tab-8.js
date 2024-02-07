const era = require('#/era-electron');

const {
  push_link_break,
  remove_end_line_breaks,
} = require('#/page/exp/snippets');

const { join_list } = require('#/utils/list-utils');

const { sex_slave_title } = require('#/data/ero/status-const');
const { growth_info, unknown_info } = require('#/data/exp-const');

const page_name = '肉体情报 【虐】';

const sm_talent_desc = ['', '责骂', '击打', '凌辱'];

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {{in_growth:boolean,mark_level:number,show_all_exp:boolean,show_body:boolean,show_exp:boolean}} flags
   * @returns {{print():*[]}}
   */
  generate(chara, flags) {
    const sm_exp_list = [];
    if (flags.in_growth) {
      sm_exp_list.push(growth_info);
    } else {
      if (flags.show_body) {
        const sm_talent =
          era.get(`talent:${chara.id}:喜欢责骂`) +
          2 * era.get(`talent:${chara.id}:喜欢痛苦`);
        if (era.get(`talent:${chara.id}:抖S`)) {
          sm_exp_list.push(
            `仿佛生来便是以施虐为己任的淫乱抖S ${
              sex_slave_title[chara.sex_code]
            }，只要在脑内想像凌辱他人就能兴奋起来`,
          );
        }
        if (sm_talent) {
          sm_exp_list.push(
            `仿佛生来便是以受虐为己任的淫乱抖M ${
              sex_slave_title[chara.sex_code]
            }，只要在脑内想像被他人${sm_talent_desc[sm_talent]}就能兴奋起来`,
          );
        }
        if (sm_exp_list.length === 2) {
          sm_exp_list[1] = `同时 ${sm_exp_list[1]}`;
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
          sm_exp_list.push(sadism_exp);
        }
        if (abuse_count || hit_count) {
          sm_exp_list.push(
            join_list(
              [
                abuse_count ? `责骂他人 ${abuse_count} 次` : '',
                hit_count ? `击打他人 ${hit_count} 次` : '',
              ],
              '，',
            ),
          );
        }
        if (s_orgasm_count) {
          sm_exp_list.push(`因施虐感而高潮了 ${s_orgasm_count} 次`);
        }
        push_link_break(sm_exp_list);

        if (masochism_exp) {
          sm_exp_list.push(masochism_exp);
        }
        if (abused_count || be_hit_count) {
          sm_exp_list.push(
            join_list(
              [
                abused_count ? `被责骂 ${abused_count} 次` : '',
                be_hit_count ? `被击打 ${be_hit_count} 次` : '',
              ],
              '，',
            ),
          );
        }
        if (m_orgasm_count) {
          sm_exp_list.push(`因受虐感而高潮了 ${m_orgasm_count} 次`);
        }
      } else {
        sm_exp_list.push(unknown_info(chara.id));
      }
      remove_end_line_breaks(sm_exp_list);
    }
    return {
      print() {
        return [
          {
            type: 'divider',
            config: { content: page_name, position: 'left' },
          },
          ...sm_exp_list.map((e) => {
            return { content: e, type: 'text' };
          }),
        ];
      },
    };
  },
  name: page_name,
};
