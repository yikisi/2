const era = require('#/era-electron');

const {
  push_link_break,
  remove_end_line_breaks,
} = require('#/page/exp/snippets');

const { join_list } = require('#/utils/list-utils');

const { sex_colors } = require('#/data/color-const');
const { breast_size } = require('#/data/ero/status-const');
const { growth_info, unknown_info } = require('#/data/exp-const');
const { get_breast_cup } = require('#/data/info-generator');

const nipple_type = ['粉色小草莓', '深色小樱桃', '幽深火山湖'];

const page_name = '肉体情报 【胸】';

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {{in_growth:boolean,mark_level:number,show_all_exp:boolean,show_body:boolean,show_exp:boolean}} flags
   * @returns {{print():*[]}}
   */
  generate: function (chara, flags) {
    const breast_exp_list = [];
    if (flags.in_growth) {
      breast_exp_list.push(growth_info);
    } else {
      if (flags.show_body) {
        if (chara.sex_code === 1) {
          breast_exp_list.push('健硕的胸肌');
        } else {
          let cup = get_breast_cup(chara.id);
          if (cup > 'G') {
            cup = 'G';
          }
          const n_type_code = era.get(`talent:${chara.id}:乳头类型`);
          breast_exp_list.push([
            '顶端是 ',
            {
              content: nipple_type[n_type_code],
              color: sex_colors[Math.min(n_type_code, 1)],
            },
            ` 的 ${breast_size[cup]} 乳房`,
          ]);
          if (era.get(`talent:${chara.id}:妖乳`)) {
            breast_exp_list.push(
              '曲线优美的天赐丰乳，完美的弹性让任何访客流连忘返……',
            );
          }
          if (era.get(`talent:${chara.id}:淫乳`) === 2) {
            breast_exp_list.push(
              '无论何时何地都能感觉到瘙痒和寂寞……已经是一对淫荡的乳房了……',
            );
          }
          if (era.get(`talent:${chara.id}:泌乳`)) {
            const tmp = era.get(`ex:${chara.id}:喷奶阻碍`);
            breast_exp_list.push(
              '如果前襟有些湿润………请不要怀疑，那只是汗液哦' +
                (tmp && flags.mark_level === 3
                  ? `；因为夹子的阻碍，现在蓄积了 ${tmp}ml 乳汁……乳头好痛……`
                  : ''),
            );
          }
        }
        push_link_break(breast_exp_list);
      }
      if (flags.show_exp) {
        if (chara.sex_code - 1) {
          const breast_touched_count = era.get(`exp:${chara.id}:挤奶次数`),
            tit_job_count = era.get(`exp:${chara.id}:乳交次数`),
            breast_semen = era.get(`exp:${chara.id}:胸部沾染精液量`),
            breast_orgasm_count = era.get(`exp:${chara.id}:胸部高潮次数`),
            milking_count = era.get(`exp:${chara.id}:授乳次数`),
            milk_amount = era.get(`exp:${chara.id}:喷奶量`);
          const milk_exp = era.get(`cstr:${chara.id}:初次挤奶经历`),
            unknown_milk_exp = era.get(`cstr:${chara.id}:无自觉初次挤奶经历`),
            tit_job_exp = era.get(`cstr:${chara.id}:初次乳交经历`),
            unknown_tit_job_exp = era.get(
              `cstr:${chara.id}:无自觉初次乳交经历`,
            ),
            milking_exp = era.get(`cstr:${chara.id}:初次授乳经历`);
          if (milk_exp) {
            breast_exp_list.push(milk_exp);
          }
          if (flags.show_all_exp || milk_exp) {
            if (unknown_milk_exp) {
              breast_exp_list.push(unknown_milk_exp);
            }
            if (breast_touched_count) {
              breast_exp_list.push(`被玩弄过 ${breast_touched_count} 次`);
            }
          }
          push_link_break(breast_exp_list);

          if (tit_job_exp) {
            breast_exp_list.push(tit_job_exp);
          }
          if (flags.show_all_exp || tit_job_exp) {
            if (unknown_tit_job_exp) {
              breast_exp_list.push(unknown_tit_job_exp);
            }
            if (tit_job_count || breast_semen) {
              breast_exp_list.push(
                join_list(
                  [
                    tit_job_count ? `抚慰过性器 ${tit_job_count} 次` : '',
                    breast_semen ? `沾染过 ${breast_semen}ml 精液` : '',
                  ],
                  '，',
                ),
              );
            }
          }
          push_link_break(breast_exp_list);

          if (milking_exp) {
            breast_exp_list.push(milking_exp);
          }
          if (milking_count || milk_amount) {
            breast_exp_list.push(
              join_list(
                [
                  milking_count ? `进行授乳 ${milking_count} 次` : '',
                  milk_amount ? `产出了 ${milk_amount}ml 乳汁` : '',
                ],
                '，',
              ),
            );
          }
          push_link_break(breast_exp_list);

          if (breast_orgasm_count) {
            breast_exp_list.push(`因为快感去了 ${breast_orgasm_count} 次`);
          }
        }
      } else {
        breast_exp_list.push(unknown_info(chara.id));
      }
      remove_end_line_breaks(breast_exp_list);
    }
    return {
      print() {
        return [
          {
            type: 'divider',
            config: { content: page_name, position: 'left' },
          },
          ...breast_exp_list.map((e) => {
            return { content: e, type: 'text' };
          }),
        ];
      },
    };
  },
  name: page_name,
};
