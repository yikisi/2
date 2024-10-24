const era = require('#/era-electron');

const {
  get_filled_exp_str,
  push_link_break,
  remove_end_line_breaks,
} = require('#/page/exp/snippets');

const { join_list } = require('#/utils/list-utils');

const { growth_info, unknown_info } = require('#/data/exp-const');

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
      hand_exp_list.push(growth_info);
      foot_exp_list.push(growth_info);
    } else {
      if (flags.show_body) {
        if (era.get(`talent:${chara.id}:神之手`)) {
          hand_exp_list.push('爱抚技术自然如神，手指运转间就能让对方心荡神驰');
        }
        push_link_break(hand_exp_list);

        if (era.get(`talent:${chara.id}:神之足`)) {
          foot_exp_list.push(
            '腿脚运动连一毫米的偏差都不存在，足交技术自然如神',
          );
        }
        push_link_break(foot_exp_list);
      }
      if (flags.show_exp) {
        const touch_body_count = era.get(`exp:${chara.id}:摸身体次数`),
          touch_breast_count = era.get(`exp:${chara.id}:揉乳次数`),
          handjob_count = era.get(`exp:${chara.id}:撸管次数`),
          touch_virgin_count = era.get(`exp:${chara.id}:抠穴次数`),
          touch_anal_count = era.get(`exp:${chara.id}:慰菊次数`);
        const hand_job_exp = era.get(`cstr:${chara.id}:初次手交经历`),
          unknown_hand_job_exp = era.get(`cstr:${chara.id}:无自觉初次手交经历`);

        if (hand_job_exp) {
          hand_exp_list.push(get_filled_exp_str(hand_job_exp, chara.id));
        }
        if (flags.show_all_exp || hand_job_exp) {
          if (unknown_hand_job_exp) {
            hand_exp_list.push(
              get_filled_exp_str(unknown_hand_job_exp, chara.id),
            );
          }
          if (handjob_count || touch_virgin_count || touch_anal_count) {
            hand_exp_list.push(
              join_list(
                [
                  handjob_count ? `揉弄过 ${handjob_count} 次肉棒` : '',
                  touch_virgin_count
                    ? `抠弄过 ${touch_virgin_count} 次阴部`
                    : '',
                  touch_anal_count ? `慰弄过 ${touch_anal_count} 次屁股` : '',
                ],
                '，',
              ),
            );
          }
        }
        if (touch_body_count || touch_breast_count) {
          hand_exp_list.push(
            join_list(
              [
                touch_body_count ? `触摸过 ${touch_body_count} 次身体` : '',
                touch_breast_count ? `揉弄过 ${touch_breast_count} 次乳房` : '',
              ],
              '，',
            ),
          );
        }

        const step_on_body_count = era.get(`exp:${chara.id}:踩踏次数`),
          foot_job_count = era.get(`exp:${chara.id}:踩肉棒次数`),
          step_on_virgin_count = era.get(`exp:${chara.id}:踩小穴次数`);
        const foot_job_exp = era.get(`cstr:${chara.id}:初次足交经历`),
          unknown_foot_job_exp = era.get(`cstr:${chara.id}:无自觉初次足交经历`);

        if (foot_job_exp) {
          foot_exp_list.push(foot_job_exp);
        }
        if (flags.show_all_exp || foot_job_exp) {
          if (unknown_foot_job_exp) {
            foot_exp_list.push(unknown_foot_job_exp);
          }
          if (foot_job_count || step_on_virgin_count) {
            foot_exp_list.push(
              join_list(
                [
                  foot_job_count ? `抚弄过 ${foot_job_count} 次肉棒` : '',
                  step_on_virgin_count
                    ? `抚弄过 ${step_on_virgin_count} 次阴部`
                    : '',
                ],
                '，',
              ),
            );
          }
        }
        if (step_on_body_count) {
          foot_exp_list.push(`用足踩踏过 ${step_on_body_count} 次身体`);
        }
      } else {
        hand_exp_list.push(unknown_info(chara.id));
        foot_exp_list.push(unknown_info(chara.id));
      }
      remove_end_line_breaks(hand_exp_list);
      remove_end_line_breaks(foot_exp_list);
    }
    return {
      print() {
        return [
          {
            type: 'divider',
            config: { content: '身体情报【手】', position: 'left' },
          },
          ...hand_exp_list.map((e) => {
            return { content: e, type: 'text' };
          }),
          {
            type: 'divider',
            config: { content: '身体情报【足】', position: 'left' },
          },
          ...foot_exp_list.map((e) => {
            return { content: e, type: 'text' };
          }),
        ];
      },
    };
  },
  name: '肉体情报【手足】',
};
