const era = require('#/era-electron');

const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');

const {
  get_filled_exp_str,
  push_link_break,
  remove_end_line_breaks,
} = require('#/page/exp/snippets');

const CharaTalk = require('#/utils/chara-talk');
const { join_list } = require('#/utils/list-utils');

const { sex_colors } = require('#/data/color-const');
const {
  hair_desc,
  penis_colors,
  penis_desc,
} = require('#/data/ero/status-const');
const { growth_info, unknown_info } = require('#/data/exp-const');

const page_name = '肉体情报 【茎】';

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {{in_growth:boolean,mark_level:number,show_all_exp:boolean,show_body:boolean,show_exp:boolean}} flags
   * @returns {{print():*[]}}
   */
  generate: function (chara, flags) {
    const penis_exp_list = [];
    if (flags.in_growth) {
      penis_exp_list.push(chara.sex_code ? growth_info : '没有这个部位……');
    } else {
      if (flags.show_body) {
        const penis_size = get_penis_size(chara.id);
        if (penis_size) {
          const p_type_code = era.get(`talent:${chara.id}:茎核类型`);
          const sex_hair_talent = era.get(`talent:${chara.id}:阴毛成长`),
            sex_hair = era.get(`cflag:${chara.id}:阴毛`);
          if (!sex_hair_talent) {
            penis_exp_list.push('天生光滑无毛……');
          } else if (!sex_hair) {
            penis_exp_list.push('小腹现在光洁无毛……');
          } else {
            penis_exp_list.push(
              `小腹有着 ${hair_desc[sex_hair - 1]}${
                sex_hair_talent === 2 ? '，且正在飞速成长着……' : ''
              }`,
            );
          }
          penis_exp_list.push([
            '下方是',
            !chara.sex_code ? '借助药物获得的 ' : ' ',
            penis_desc[penis_size],
            ' 而 ',
            {
              content: penis_colors[p_type_code],
              color: sex_colors[p_type_code],
            },
            ' 的肉棒',
          ]);
          if (era.get(`talent:${chara.id}:凶器`)) {
            penis_exp_list.push(
              '完美无敌的擎天巨龙，汩出的先走汁仿佛已能让卵子受孕……',
            );
          }
          if (era.get(`talent:${chara.id}:早泄`) === 2) {
            penis_exp_list.push('精关不牢，容易一泻千里……');
          }
        } else {
          penis_exp_list.push('空无一物……');
        }
        push_link_break(penis_exp_list);
      }
      if (flags.show_exp) {
        const body_sex_count = era.get(`exp:${chara.id}:戳身体次数`),
          virgin_sex_count = era.get(`exp:${chara.id}:戳阴部次数`),
          active_anal_sex_count = era.get(`exp:${chara.id}:戳肛门次数`),
          penis_orgasm_count = era.get(`exp:${chara.id}:阴茎高潮次数`),
          semen = era.get(`exp:${chara.id}:射精量`),
          fuck_sleep_virgin = era.get(`exp:${chara.id}:阴茎睡奸`),
          sleep_penis = era.get(`exp:${chara.id}:阴茎被睡奸`);
        const penis_exp = era.get(`cstr:${chara.id}:失去童贞经历`),
          unknown_penis_exp = era.get(`cstr:${chara.id}:无自觉失去童贞经历`),
          cum_semen_exp = era.get(`cstr:${chara.id}:初次内射经历`),
          unknown_cum_semen_exp = era.get(
            `cstr:${chara.id}:无自觉初次内射经历`,
          );
        if (penis_exp) {
          penis_exp_list.push(get_filled_exp_str(penis_exp, chara.id));
        }
        if (flags.show_all_exp || penis_exp) {
          if (unknown_penis_exp) {
            penis_exp_list.push(
              get_filled_exp_str(unknown_penis_exp, chara.id),
            );
          }
          if (body_sex_count || virgin_sex_count || active_anal_sex_count) {
            penis_exp_list.push(
              join_list(
                [
                  body_sex_count ? `戳弄身体 ${body_sex_count} 次` : '',
                  virgin_sex_count
                    ? `戳弄阴核和小穴 ${virgin_sex_count} 次`
                    : '',
                  active_anal_sex_count
                    ? `戳弄屁穴 ${active_anal_sex_count} 次`
                    : '',
                ],
                '，',
              ),
            );
          }
        }
        push_link_break(penis_exp_list);

        if (cum_semen_exp) {
          penis_exp_list.push(get_filled_exp_str(cum_semen_exp, chara.id));
        }
        if (flags.show_all_exp || cum_semen_exp) {
          if (unknown_cum_semen_exp) {
            penis_exp_list.push(
              get_filled_exp_str(unknown_cum_semen_exp, chara.id),
            );
          }
          if (penis_orgasm_count) {
            penis_exp_list.push(
              join_list(
                [
                  penis_orgasm_count ? `射精 ${penis_orgasm_count} 次` : '',
                  semen ? `共射出 ${semen}ml 精液` : '',
                ],
                '，',
              ),
            );
          }
        }
        push_link_break(penis_exp_list);

        if (flags.show_all_exp || penis_exp) {
          if (fuck_sleep_virgin) {
            penis_exp_list.push(
              `曾趁熟睡之机侵犯过${
                chara.id ? ` ${CharaTalk.me.name}` : '他人'
              }${fuck_sleep_virgin > 1 ? ` ${fuck_sleep_virgin} 次` : ''}`,
            );
          }
          if (sleep_penis) {
            penis_exp_list.push(
              `曾被趁熟睡之机侵犯过${
                sleep_penis > 1 ? ` ${sleep_penis} 次` : ''
              }且没有察觉`,
            );
          }
        }
      } else {
        penis_exp_list.push(
          chara.sex_code ? unknown_info(chara.id) : '没有这个部位……',
        );
      }
      remove_end_line_breaks(penis_exp_list);
    }
    return {
      print() {
        return [
          {
            type: 'divider',
            config: { content: page_name, position: 'left' },
          },
          ...penis_exp_list.map((e) => {
            return { content: e, type: 'text' };
          }),
        ];
      },
    };
  },
  name: page_name,
};
