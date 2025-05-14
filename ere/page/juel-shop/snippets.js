const era = require('#/era-electron');

const {
  get_skill_price,
  get_talent_price,
} = require('#/system/ero/sys-get-juel-price');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const CharaTalk = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const get_color = require('#/utils/gradient-color');

const { buff_colors } = require('#/data/color-const');
const { mark_colors } = require('#/data/const.json');
const { talent_button_names_and_check_dict } = require('#/data/ero/juel-const');
const { trained_talent_names } = require('#/data/ero/status-const');

module.exports = {
  /**
   * @param {number} ret
   * @param {{tab:number,flag:boolean}} pointer
   */
  default_handler(ret, pointer) {
    if (ret === 999) {
      pointer.flag = false;
    } else {
      pointer.tab = ret - 990;
    }
  },
  /**
   * @param {number} chara_id
   * @param {string} mark_name
   * @param {number} _level
   * @returns {TextObject}
   */
  get_mark_cols(chara_id, mark_name, _level) {
    const level = Number(_level) || era.get(`mark:${chara_id}:${mark_name}`);
    return {
      config: {
        align: 'center',
        color: mark_colors[mark_name],
        width: 4,
      },
      content: [
        `${mark_name} Lv.${level} `,
        {
          content: new Array(level).fill('★').join(''),
          color: get_color(undefined, mark_colors[mark_name], level / 3),
        },
        {
          content: new Array(3 - level).fill('☆').join(''),
        },
      ],
      type: 'text',
    };
  },
  /**
   * @param {number} chara_id
   * @param {number} accelerator
   * @param {string} skill_name
   * @param {Record<string,number>} skill_dict
   * @param {Record<string,number>} juel_dict
   */
  get_skill_buttons(chara_id, accelerator, skill_name, skill_dict, juel_dict) {
    const level = era.get(`abl:${chara_id}:${skill_name}`);
    skill_dict[skill_name] = level;
    return [
      {
        accelerator,
        config: { width: 4 },
        content: `${skill_name} Lv.${level}`,
        type: 'button',
      },
      {
        accelerator: accelerator + 100,
        config: {
          disabled:
            level >= 5 ||
            Object.entries(
              get_skill_price(chara_id, skill_name, level + 1),
            ).findIndex((e) => e[1] > juel_dict[e[0]]) !== -1,
          width: 2,
        },
        content: '↑',
        type: 'button',
      },
      {
        accelerator: accelerator + 200,
        config: {
          disabled:
            level <= 0 ||
            Object.entries(get_skill_price(chara_id, skill_name, level)).filter(
              (e) => e[1] > juel_dict[e[0]],
            ).length > 0,
          width: 2,
        },
        content: '↓',
        type: 'button',
      },
    ];
  },
  /**
   * @param {number} chara_id
   * @param {number} accelerator
   * @param {string} talent_name
   * @param {number} check_metric
   * @param {Record<string,number>} talent_dict
   * @param {Record<string,number>} juel_dict
   */
  get_talent_buttons(
    chara_id,
    accelerator,
    talent_name,
    check_metric,
    talent_dict,
    juel_dict,
  ) {
    let level = talent_dict[talent_name];
    if (level === undefined) {
      level = talent_dict[talent_name] = era.get(
        `talent:${chara_id}:${talent_name}`,
      );
    }
    const talent_bnc =
      accelerator < 7
        ? talent_button_names_and_check_dict.trained
        : accelerator < 10
          ? talent_button_names_and_check_dict.sm
          : talent_button_names_and_check_dict.poisoned;
    return [
      {
        accelerator,
        config: { width: 4 },
        content: trained_talent_names[talent_name]
          ? trained_talent_names[talent_name][level]
          : `${talent_name} [${level ? '是' : '否'}]`,
        type: 'button',
      },
      {
        accelerator: accelerator + 100,
        config: {
          disabled:
            level === talent_bnc.max ||
            Object.entries(
              get_talent_price(
                chara_id,
                talent_name,
                talent_bnc.up_delta[level],
              ),
            ).findIndex((e) => e[1] > juel_dict[e[0]]) !== -1 ||
            check_metric < (talent_bnc.metrics[level] || 0) ||
            (accelerator < 7 &&
              level === 1 &&
              talent_dict.slave_run > era.get(`talent:${chara_id}:调教度`)),
          width: 4,
        },
        content: talent_bnc.up,
        type: 'button',
      },
      {
        accelerator: accelerator + 200,
        config: {
          disabled:
            level === talent_bnc.min ||
            Object.entries(
              get_talent_price(
                chara_id,
                talent_name,
                talent_bnc.down_delta[level],
              ),
            ).findIndex((e) => e[1] > juel_dict[e[0]]) !== -1,
          width: 4,
        },
        content: talent_bnc.down,
        type: 'button',
      },
    ];
  },
  /**
   * @param {number} chara_id
   * @param {Record<string,number>} price_dict
   * @param {Record<string,number>} origin_dict
   */
  pay_juels(chara_id, price_dict, origin_dict) {
    Object.keys(price_dict).forEach((e) => {
      if (origin_dict[e] >= price_dict[e]) {
        era.add(`juel:${chara_id}:${e}`, -price_dict[e]);
      } else {
        era.set(`juel:${chara_id}:${e}`, 0);
        era.add(`juel:0:${e}`, -(price_dict[e] - origin_dict[e]) * 2);
      }
    });
  },
  /**
   * @param {number} chara_id
   * @param {number} tab_pointer
   */
  print_footer(chara_id, tab_pointer) {
    const mark = era.get(`mark:${chara_id}:淫纹`);
    era.drawLine();
    era.printMultiColumns(
      [
        ...[
          {
            accelerator: 990,
            content: '能力学习',
            type: 'button',
          },
          {
            accelerator: 991,
            content: '特性变更',
            type: 'button',
          },
          {
            accelerator: 992,
            config: { disabled: !chara_id && !mark },
            content: mark ? '刻印定制' : '刻印消除',
            type: 'button',
          },
          {
            accelerator: 993,
            config: { disabled: !chara_id },
            content: chara_id ? '因子采补' : '',
            type: chara_id ? 'button' : 'text',
          },
        ].map((e) => {
          e.config = e.config || {};
          e.config.buttonType =
            e.accelerator - 990 === tab_pointer ? 'warning' : 'info';
          return e;
        }),
        {
          accelerator: 999,
          config: { align: 'right', offset: 4 },
          content: '结束升级',
          type: 'button',
        },
      ].map((e) => {
        e.config.width = 4;
        return e;
      }),
    );
  },
  /**
   * @param {number} id
   * @param {Record<string,number>} price_dict
   * @param {Record<string,number>} origin_dict
   * @returns {Promise<boolean>}
   */
  async print_price_and_confirm(id, price_dict, origin_dict) {
    const chara_talk = get_chara_talk(id);
    Object.keys(price_dict).forEach((juel_name) => {
      const buffer = [
        `${juel_name.substring(0, 2)}因子：`,
        {
          content: `${
            price_dict[juel_name] > origin_dict[juel_name]
              ? origin_dict[juel_name].toLocaleString()
              : price_dict[juel_name].toLocaleString()
          }/${origin_dict[juel_name].toLocaleString()}`,
          color: buff_colors[2],
        },
        ' (',
        { content: chara_talk.name, color: chara_talk.color },
        ')',
      ];
      if (price_dict[juel_name] > origin_dict[juel_name]) {
        buffer.push(
          ' + ',
          {
            content: `${(
              (price_dict[juel_name] - origin_dict[juel_name]) *
              2
            ).toLocaleString()}/${era
              .get(`juel:0:${juel_name}`)
              .toLocaleString()}`,
            color: buff_colors[2],
          },
          ` (${CharaTalk.me.name})`,
        );
      }
      era.print(buffer, {
        offset: 1,
        width: 23,
      });
    });
    return await select_yes_or_no('', '确定', '还是算了');
  },
};
