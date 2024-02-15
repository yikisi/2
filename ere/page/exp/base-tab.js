const era = require('#/era-electron');

const sys_change_hair = require('#/system/chara/sys-change-hair');
const { get_bust_size } = require('#/system/ero/sys-calc-ero-status');
const { get_image } = require('#/system/sys-calc-image');

const { join_list } = require('#/utils/list-utils');

const { attr_colors, hair_colors, skin_colors } = require('#/data/const.json');
const {
  get_skin,
  get_breast_cup,
  get_talent,
  get_xp,
} = require('#/data/info-generator');
const {
  chara_desc,
  sex_title,
  human_sex_title,
} = require('#/data/ero/status-const');
const { growth_info } = require('#/data/exp-const');
const {
  chara_has_ero_image,
  front_hairs,
  back_hairs,
  top_hairs,
} = require('#/data/other-const');
const { attr_names } = require('#/data/train-const');

const page_name = '个人情报';

/**
 * @param {number} chara_id
 * @returns {{front:number,back:number,top:number}}
 */
function generate_hair_index(chara_id) {
  const ret = {};
  ret.front = Math.max(
    front_hairs.indexOf(era.get(`cstr:${chara_id}:前发`)),
    0,
  );
  ret.back = Math.max(back_hairs.indexOf(era.get(`cstr:${chara_id}:后发`)), 0);
  ret.top = Math.max(top_hairs.indexOf(era.get(`cstr:${chara_id}:呆毛`)), 0);
  return ret;
}

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {{in_growth:boolean,mark_level:number,show_all_body:boolean,show_all_exp:boolean,show_body:boolean,show_exp:boolean}} flags
   * @returns {{print():*[]}}
   */
  generate(chara, flags) {
    const right_intro_list = [];

    const body_hair_color = era.get(`cstr:${chara.id}:毛色`),
      hair_color = era.get(`cstr:${chara.id}:发色`),
      growth = era.get(`cflag:${chara.id}:成长阶段`),
      race = era.get(`cflag:${chara.id}:种族`),
      skin = get_skin(chara.id),
      weight_delta = era.get(`base:${chara.id}:体重偏差`);
    let hair = era.get(`cstr:${chara.id}:呆毛`);
    hair = join_list(
      [
        hair ? `${hair}呆毛` : '',
        era.get(`cstr:${chara.id}:前发`),
        era.get(`cstr:${chara.id}:中发`),
        era.get(`cstr:${chara.id}:后发`),
      ],
      '+',
    );

    right_intro_list.push(
      { content: '个人情报', isDivider: true },
      '肤色',
      { color: skin_colors[skin], content: skin },
      ' 的 ',
      {
        color:
          hair_colors[hair_color][3] ||
          `hsl(${hair_colors[hair_color][0]}deg ${hair_colors[hair_color][1]}% ${hair_colors[hair_color][2]}%)`,
        content: `${hair_color}发`,
      },
      race
        ? {
            color:
              hair_colors[body_hair_color][3] ||
              `hsl(${hair_colors[body_hair_color][0]}deg ${hair_colors[body_hair_color][1]}% ${hair_colors[body_hair_color][2]}%)`,
            content: `${body_hair_color}毛`,
          }
        : '',
      ' ',
    );
    if (race) {
      right_intro_list.push(
        !growth ? '幼年' : chara_desc[era.get(`cflag:${chara.id}:气性`) + 3],
        ' ',
        sex_title[chara.sex_code],
      );
    } else {
      right_intro_list.push(human_sex_title[chara.sex_code]);
    }
    if (hair) {
      right_intro_list.push({ isBr: true }, '发型：', hair);
    }
    right_intro_list.push(
      { isBr: true },
      era.get(`cstr:${chara.id}:出生经历`) ||
        `出生于 ${era.get(`cflag:${chara.id}:出生月份`)} 月 ${era.get(
          `cflag:${chara.id}:出生日期`,
        )} 日`,
      { content: '身体尺寸', isDivider: true },
    );

    if (flags.in_growth) {
      right_intro_list.push(growth_info);
    } else {
      right_intro_list.push(
        '身高：',
        era.get(`cflag:${chara.id}:身高`).toString(),
        'cm ｜ ',
        '体重：',
      );
      if (era.get(`status:${chara.id}:发胖`)) {
        right_intro_list.push('幸、幸福胖哦……');
      } else {
        right_intro_list.push(weight_delta >= 2000 ? '微增' : '控制得当');
      }
      const w_delta = Math.floor(weight_delta / 1000),
        h_delta = Math.floor(weight_delta / 2000);
      if (chara.sex_code - 1) {
        if (flags.show_body) {
          right_intro_list.push(
            { isBr: true },
            '三围：B',
            get_bust_size(chara.id, flags.show_all_body).toString(),
            ' (',
            get_breast_cup(chara.id, flags.show_all_body).toString(),
            ' Cup) · W',
            (era.get(`cflag:${chara.id}:腰围`) + w_delta).toString(),
            ' · H',
            (
              era.get(`cflag:${chara.id}:臀围`) +
              5 * (era.get(`talent:${chara.id}:淫臀`) === 2) +
              2 * era.get(`status:${chara.id}:发情`) +
              h_delta
            ).toString(),
          );
        } else {
          right_intro_list.push({ isBr: true }, '没有更多数据了……');
        }
      }
    }

    const image = get_image(chara.id)
      .map((e) => `${e}_半身`)
      .join('\t');

    /** @type {{n:string,c:string,s:boolean}[]} */
    const titles = era.get(`cstr:${chara.id}:称号`);
    const title_info_list = [],
      cur_title = titles.filter((e) => e.s)[0];
    title_info_list.push(
      {
        accelerator: 30,
        config: {
          buttonType: cur_title ? 'warning' : 'info',
          disabled: !cur_title,
          showAcc: false,
          width: 2,
        },
        content: cur_title ? '佩戴' : '摘下',
        type: 'button',
      },
      {
        config: { width: 4 },
        content: '（无）',
        type: 'text',
      },
    );
    titles.forEach((e, i) => {
      title_info_list.push(
        {
          accelerator: i + 31,
          config: {
            buttonType: e.s ? 'info' : 'warning',
            disabled: e.s && i === 0,
            showAcc: false,
            width: 2,
          },
          content: e.s ? '摘下' : '佩戴',
          type: 'button',
        },
        {
          config: { color: e.c, width: 4 },
          content: e.n,
          type: 'text',
        },
      );
    });

    if (
      !chara_has_ero_image[chara.id] &&
      (!chara.id ||
        era.get(`love:${chara.id}`) >= 75 ||
        !era.get(`cflag:${chara.id}:父方角色`) ||
        !era.get(`cflag:${chara.id}:母方角色`))
    ) {
      title_info_list.push(
        { content: [{ isBr: true }], type: 'text' },
        {
          accelerator: 100,
          config: { width: 12 },
          content: '梳头',
          type: 'button',
        },
      );
    }

    let temp;

    return {
      async handle(command) {
        if (command === 100) {
          let flag_hair = true,
            hair_indexes = generate_hair_index(chara.id);
          while (flag_hair) {
            era.printInColRows(
              [
                {
                  content: ['请选择 ', chara.get_colored_name(), ' 的新发型'],
                  type: 'text',
                },
                { config: { width: 2 }, content: '呆毛：', type: 'text' },
                {
                  accelerator: 10,
                  config: { width: 3 },
                  content: '前一个',
                  type: 'button',
                },
                {
                  config: { width: 3 },
                  content: top_hairs[hair_indexes.top],
                  type: 'text',
                },
                {
                  accelerator: 11,
                  config: { width: 3 },
                  content: '后一个',
                  type: 'button',
                },
              ],
              [
                { config: { width: 2 }, content: '前发：', type: 'text' },
                {
                  accelerator: 20,
                  config: { width: 3 },
                  content: '前一个',
                  type: 'button',
                },
                {
                  config: { width: 3 },
                  content: front_hairs[hair_indexes.front],
                  type: 'text',
                },
                {
                  accelerator: 21,
                  config: { width: 3 },
                  content: '后一个',
                  type: 'button',
                },
              ],
              [
                { config: { width: 2 }, content: '后发：', type: 'text' },
                {
                  accelerator: 30,
                  config: { width: 3 },
                  content: '前一个',
                  type: 'button',
                },
                {
                  config: { width: 3 },
                  content: back_hairs[hair_indexes.back],
                  type: 'text',
                },
                {
                  accelerator: 31,
                  config: { width: 3 },
                  content: '后一个',
                  type: 'button',
                },
              ],
              [
                {
                  accelerator: 99,
                  config: { width: 3 },
                  content: '确定',
                  type: 'button',
                },
                {
                  accelerator: 98,
                  config: { width: 3 },
                  content: '重置',
                  type: 'button',
                },
              ],
            );
            const ret = await era.input();
            switch (ret) {
              case 10:
                hair_indexes.top =
                  (hair_indexes.top + top_hairs.length - 1) % top_hairs.length;
                break;
              case 11:
                hair_indexes.top = (hair_indexes.top + 1) % top_hairs.length;
                break;
              case 20:
                hair_indexes.front =
                  (hair_indexes.front + front_hairs.length - 1) %
                  front_hairs.length;
                break;
              case 21:
                hair_indexes.front =
                  (hair_indexes.front + 1) % front_hairs.length;
                break;
              case 30:
                hair_indexes.back =
                  (hair_indexes.back + back_hairs.length - 1) %
                  back_hairs.length;
                break;
              case 31:
                hair_indexes.back = (hair_indexes.back + 1) % back_hairs.length;
                break;
              case 98:
                hair_indexes = generate_hair_index(chara.id);
                break;
              case 99:
                era.set(
                  `cstr:${chara.id}:呆毛`,
                  !hair_indexes.top ? '' : top_hairs[hair_indexes.top],
                );
                era.set(
                  `cstr:${chara.id}:前发`,
                  front_hairs[hair_indexes.front],
                );
                era.set(`cstr:${chara.id}:后发`, back_hairs[hair_indexes.back]);
                flag_hair = false;
            }
            sys_change_hair(chara.id);
            await era.clear();
            era.setToBottom();
          }
        } else {
          const selected = command - 31;
          if (selected === -1) {
            titles.forEach((e) => (e.s = false));
          } else if (titles[selected].s) {
            titles[selected].s = false;
          } else {
            titles.forEach((e) => (e.s = false));
            titles[selected].s = true;
          }
        }
      },
      print() {
        return [
          { content: [{ isBr: true }], type: 'text' },
          { config: { width: 7 }, names: image, type: 'image.whole' },
          {
            config: { width: 17 },
            content: right_intro_list,
            type: 'text',
          },
          {
            config: { content: '特征', position: 'left' },
            type: 'divider',
          },
          ...((temp = get_talent(chara.id)).length
            ? [
                {
                  config: { width: 2 },
                  content: '性格',
                  type: 'text',
                },
                {
                  config: { width: 22 },
                  content: temp,
                  type: 'text',
                },
              ]
            : []),
          ...((temp = get_xp(chara.id)).length
            ? [
                {
                  config: { width: 2 },
                  content: '其他',
                  type: 'text',
                },
                {
                  config: { width: 22 },
                  content: temp,
                  type: 'text',
                },
              ]
            : []),
          {
            config: { content: '属性', position: 'left' },
            type: 'divider',
          },
          ...(flags.in_growth
            ? [{ content: growth_info, type: 'text' }]
            : attr_names.map((e) => {
                const num = era.get(`base:${chara.id}:${e}`);
                return {
                  config: { width: 4, color: attr_colors[e] },
                  content: [
                    e,
                    '：',
                    {
                      content: num.toLocaleString(),
                      fontWeight: 'bold',
                    },
                  ],
                  type: 'text',
                };
              })),
          {
            config: { content: '称号', position: 'left' },
            type: 'divider',
          },
          ...title_info_list,
        ];
      },
    };
  },
  name: page_name,
};
