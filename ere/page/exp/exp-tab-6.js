const era = require('#/era-electron');

const {
  get_penis_size,
  get_pregnant_ratio,
} = require('#/system/ero/sys-calc-ero-status');

const {
  get_filled_exp_str,
  push_link_break,
  remove_end_line_breaks,
} = require('#/page/exp/snippets');

const CharaTalk = require('#/utils/chara-talk');
const { join_list } = require('#/utils/list-utils');

const { sex_colors } = require('#/data/color-const');
const { baby_limit } = require('#/data/ero/orgasm-const');
const {
  hair_desc,
  pregnant_stage_enum,
  pregnant_stage_names,
} = require('#/data/ero/status-const');
const { growth_info, unknown_info } = require('#/data/exp-const');

const page_name = '肉体情报【女阴】';

const virgin_semen_desc = [
  '',
  '子宫就会躁动难耐',
  '就会感到幸福',
  '子宫就会幸福地躁动起来',
];

const virgin_color_desc = ['粉嫩可人', '红润泛紫', '深邃成熟'];

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {{in_growth:boolean,mark_level:number,show_all_exp:boolean,show_body:boolean,show_exp:boolean,true_mark_level:number}} flags
   * @returns {{print():*[]}}
   */
  generate: function (chara, flags) {
    const virgin_exp_list = [];
    if (flags.in_growth) {
      virgin_exp_list.push(growth_info);
    } else {
      if (flags.show_body) {
        const penis_size = get_penis_size(chara.id);
        if (!penis_size) {
          const sex_hair_talent = era.get(`talent:${chara.id}:阴毛成长`),
            sex_hair = era.get(`cflag:${chara.id}:阴毛`);
          if (!sex_hair_talent) {
            virgin_exp_list.push('天生白虎，粉腻可人……');
          } else if (!sex_hair) {
            virgin_exp_list.push('小穴现在光洁无毛，粉腻可人……');
          } else {
            virgin_exp_list.push(
              `小腹有着 ${hair_desc[sex_hair - 1]}${
                sex_hair_talent === 2 ? '，且正在飞速成长着……' : ''
              }`,
            );
          }
        }
        const in_womb_semen = era.get(`cflag:${chara.id}:子宫内精液`),
          v_type_code = era.get(`talent:${chara.id}:茎核类型`);
        virgin_exp_list.push([
          !penis_size ? '下方' : '',
          '有着 ',
          {
            content: virgin_color_desc[v_type_code],
            color: sex_colors[v_type_code],
          },
          ' 的小穴',
        ]);
        if (era.get(`talent:${chara.id}:名穴`)) {
          virgin_exp_list.push(
            '宛如活物般的洞穴，任何造访的客人都只能任其榨取……',
          );
        }
        const clitoris_talent =
            !get_penis_size(chara.id) && era.get(`talent:${chara.id}:淫核`),
          virgin_talent = era.get(`talent:${chara.id}:淫壶`);
        if (clitoris_talent === 2) {
          virgin_exp_list.push(
            '轻轻摩擦便会充血勃起……已经是一颗淫荡的小豆豆了……',
          );
        }
        if (virgin_talent === 2) {
          virgin_exp_list.push(
            '全天候分泌爱液随时等待插入的淫壶……已经是一个淫荡的小穴了……',
          );
        }
        if (clitoris_talent === 2 && virgin_talent === 2) {
          virgin_exp_list[virgin_exp_list.length - 1] = `同时 ${
            virgin_exp_list[virgin_exp_list.length - 1]
          }`;
        }
        if (in_womb_semen) {
          virgin_exp_list.push(
            join_list(
              [
                '大腿内侧星星点点……',
                flags.mark_level >= 3
                  ? `小穴内大概还有 ${in_womb_semen}ml 精液呢……`
                  : undefined,
              ],
              '',
            ),
          );
        }
        push_link_break(virgin_exp_list);
      }
      if (flags.show_exp) {
        const virgin_touched_count = era.get(`exp:${chara.id}:阴部玩弄次数`);
        const penis_sex_count = era.get(`exp:${chara.id}:性交次数`);
        const clitoris_orgasm_count = era.get(`exp:${chara.id}:外阴高潮次数`);
        const virgin_orgasm_count = era.get(`exp:${chara.id}:阴道高潮次数`);
        const clitoris_semen = era.get(`exp:${chara.id}:外阴沾染精液量`);
        const cum_in_virgin = era.get(`exp:${chara.id}:内射次数`);
        const virgin_semen = era.get(`exp:${chara.id}:膣内精液量`);
        const fuck_sleep_penis = era.get(`exp:${chara.id}:阴道睡奸`);
        const sleep_virgin = era.get(`exp:${chara.id}:阴道被睡奸`);
        const virgin_semen_talent =
          era.get(`talent:${chara.id}:榨精成瘾`) * 2 +
          era.get(`talent:${chara.id}:子宫敏感`);
        const virgin_exp = era.get(`cstr:${chara.id}:破处经历`);
        const unknown_virgin_exp = era.get(`cstr:${chara.id}:无自觉破处经历`);
        const cummed_exp = era.get(`cstr:${chara.id}:初次被内射经历`);
        const unknown_cummed_exp = era.get(
          `cstr:${chara.id}:无自觉初次被内射经历`,
        );
        let squirt_exp = era.get(`cstr:${chara.id}:初次潮吹经历`);
        if (squirt_exp instanceof Array && squirt_exp.length === 0) {
          squirt_exp = undefined;
        }
        let unknown_squirt_exp = era.get(`cstr:${chara.id}:无自觉初次潮吹经历`);
        if (
          unknown_squirt_exp instanceof Array &&
          unknown_squirt_exp.length === 0
        ) {
          unknown_squirt_exp = undefined;
        }
        const squirt = era.get(`exp:${chara.id}:潮吹次数`);
        const secretion = era.get(`exp:${chara.id}:爱液分泌量`);
        if (virgin_exp) {
          virgin_exp_list.push(get_filled_exp_str(virgin_exp, chara.id));
        }
        if (flags.show_all_exp || virgin_exp) {
          if (unknown_virgin_exp) {
            virgin_exp_list.push(
              get_filled_exp_str(unknown_virgin_exp, chara.id),
            );
          }
          if (virgin_touched_count || penis_sex_count) {
            virgin_exp_list.push(
              join_list(
                [
                  virgin_touched_count
                    ? `被玩弄过 ${virgin_touched_count} 次`
                    : '',
                  penis_sex_count ? `被刺入过 ${penis_sex_count} 次` : '',
                ],
                '，',
              ),
            );
          }
        }
        push_link_break(virgin_exp_list);

        if (cummed_exp) {
          virgin_exp_list.push(get_filled_exp_str(cummed_exp, chara.id));
        }
        if (flags.show_all_exp || cummed_exp) {
          if (unknown_cummed_exp) {
            virgin_exp_list.push(
              get_filled_exp_str(unknown_cummed_exp, chara.id),
            );
          }
          if (clitoris_semen || virgin_semen) {
            virgin_exp_list.push(
              join_list(
                [
                  clitoris_semen ? `沾染过 ${clitoris_semen}ml 精液` : '',
                  virgin_semen
                    ? `承受过 ${cum_in_virgin} 次射精，被射入过 ${virgin_semen}ml 精液`
                    : '',
                ],
                '，',
              ),
            );
          }
        }
        if ((flags.mark_level >= 3 || virgin_semen) && virgin_semen_talent) {
          virgin_exp_list.push(
            `每次被射进温热的精液，${virgin_semen_desc[virgin_semen_talent]}`,
          );
        }
        push_link_break(virgin_exp_list);

        if (squirt_exp) {
          virgin_exp_list.push(get_filled_exp_str(squirt_exp, chara.id));
        }
        if (flags.show_all_exp || squirt_exp) {
          if (unknown_squirt_exp) {
            virgin_exp_list.push(
              get_filled_exp_str(unknown_squirt_exp, chara.id),
            );
          }
        }
        if (squirt > 0) {
          virgin_exp_list.push(
            join_list(
              [
                clitoris_orgasm_count > 0
                  ? `因小豆豆高潮 ${clitoris_orgasm_count} 次`
                  : '',
                virgin_orgasm_count > 0
                  ? `因小穴高潮 ${virgin_orgasm_count} 次`
                  : '',
              ],
              '，',
            ),
          );
          virgin_exp_list.push(
            `共潮吹 ${squirt.toLocaleString()} 次，分泌爱液 ${secretion}ml`,
          );
        } else if (secretion > 0) {
          virgin_exp_list.push(`共分泌爱液 ${secretion}ml`);
        }
        push_link_break(virgin_exp_list);

        if (flags.show_all_exp || virgin_exp) {
          if (fuck_sleep_penis) {
            virgin_exp_list.push(
              `曾趁熟睡之机侵犯过${
                chara.id ? ` ${CharaTalk.me.name}` : '他人'
              }${fuck_sleep_penis > 1 ? ` ${fuck_sleep_penis} 次` : ''}`,
            );
          }
          if (sleep_virgin) {
            virgin_exp_list.push(
              `曾被趁熟睡之机侵犯过${
                sleep_virgin > 1 ? ` ${sleep_virgin} 次` : ''
              }且没有察觉`,
            );
          }
        }
      } else {
        virgin_exp_list.push(unknown_info(chara.id));
      }
    }
    push_link_break(virgin_exp_list);

    const pregnant_stage = era.get(`cflag:${chara.id}:妊娠阶段`),
      pregnant_timer = era.get(`cflag:${chara.id}:妊娠回合计时`);
    let pregnant_buffer = '';
    if (flags.in_growth) {
      pregnant_buffer = '初潮还没有来';
    } else if (era.get(`status:${chara.id}:经期`)) {
      pregnant_buffer = '月经来潮中';
    } else if (pregnant_stage === 1 << pregnant_stage_enum.resume) {
      pregnant_buffer = pregnant_stage_names[1 << pregnant_stage_enum.resume];
      if (flags.mark_level) {
        pregnant_buffer += ` (${pregnant_timer} 周)`;
      }
    } else if (
      pregnant_stage === 1 << pregnant_stage_enum.no ||
      (pregnant_timer < 4 && flags.true_mark_level <= 2)
    ) {
      if (
        chara.id &&
        flags.mark_level >= 2 &&
        era.get(`exp:${chara.id}:生产次数`) >= baby_limit
      ) {
        pregnant_buffer = '无法承受更多种子了……';
      } else if (!chara.id || flags.mark_level >= 1) {
        switch (
          (era.get('flag:当前周') - era.get(`cflag:${chara.id}:月经周`) + 4) %
          4
        ) {
          case 0:
          case 2:
            pregnant_buffer = '卵子正在等待受精❤️ ';
            break;
          case 1:
            pregnant_buffer = '新的卵子正在成长中 ';
            break;
          case 3:
            pregnant_buffer = '卵子已经失活，等待排出体外 ';
        }
      } else {
        pregnant_buffer = pregnant_stage_names[1 << pregnant_stage_enum.no];
      }
      if (flags.true_mark_level === 3) {
        pregnant_buffer += `(怀孕率${(
          get_pregnant_ratio(chara.id) * 100
        ).toFixed(2)}%)`;
      }
    } else {
      if (flags.mark_level >= 2) {
        pregnant_buffer = pregnant_stage_names[pregnant_stage];
      } else if (pregnant_stage >> pregnant_stage_enum.fetal > 0) {
        pregnant_buffer = '肚子已经大大地挺了起来';
      } else {
        pregnant_buffer =
          '腹部尚且没有迹象，无意间改变的生活习惯与体检报告却在昭示生命的新生';
      }
      if (flags.mark_level) {
        pregnant_buffer += ` (${pregnant_timer} 周)`;
      }
    }
    virgin_exp_list.push(pregnant_buffer);

    remove_end_line_breaks(virgin_exp_list);
    return {
      print() {
        return [
          {
            config: { content: page_name, position: 'left' },
            type: 'divider',
          },
          ...virgin_exp_list.map((e) => {
            return { content: e, type: 'text' };
          }),
        ];
      },
    };
  },
  name: page_name,
  virgin: true,
};
