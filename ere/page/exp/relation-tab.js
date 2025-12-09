const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_get_colored_full_callname,
} = require('#/system/sys-calc-chara-others');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { join_to_string } = require('#/utils/list-utils');

const { relation_colors } = require('#/data/color-const');
const { get_relation_info } = require('#/data/info-generator');

const chinese_numbers = [
  '长',
  '次',
  '三',
  '四',
  '五',
  '六',
  '七',
  '八',
  '九',
  '十',
  '十一',
];

const page_name = '社交关系';

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @returns {{print():*[]}}
   */
  generate(chara) {
    const relation_info_list = [];
    const family_info_list = [];
    const my_src_chara = era.get('cflag:0:模版角色') || -1;
    if (chara.id > 0) {
      Object.entries(era.get(`relation:${chara.id}`)).forEach(
        ([cid, relation]) => {
          const r_info = get_relation_info(chara.id, relation);
          const target = Number(cid);
          if (target !== my_src_chara && target < 1000) {
            relation_info_list.push({
              config: { width: 8 },
              content: [
                sys_get_colored_full_callname(chara.id, target),
                '：',
                {
                  content: r_info.mark(),
                  color: relation_colors[r_info.level],
                },
              ],
              type: 'text',
            });
          }
        },
      );
    }
    if (!relation_info_list.length) {
      relation_info_list.push({
        content: chara.id ? '没有在意的角色……' : '——',
        type: 'text',
      });
    }
    const teach_chara = era.get(`cflag:${chara.id}:照看`);
    if (teach_chara > 0) {
      if (
        !era.get(`cflag:${chara.id}:种族`) ||
        era.get(`cflag:${chara.id}:可再次育成`) > 0
      ) {
        relation_info_list.push({
          content: [
            '照看 ',
            get_chara_talk(teach_chara).get_colored_name(),
            ' 中……',
          ],
          type: 'text',
        });
      } else if (era.get(`cflag:${chara.id}:育成回合计时`) < 3 * 48) {
        relation_info_list.push({
          content: [
            '被 ',
            get_chara_talk(teach_chara).get_colored_name(),
            ' 照看中……',
          ],
          type: 'text',
        });
      }
    }

    const father_id = era.get(`cflag:${chara.id}:父方角色`),
      mother_id = era.get(`cflag:${chara.id}:母方角色`);
    if (father_id >= 0) {
      family_info_list.push({
        content: [
          '父亲是 ',
          get_chara_talk(father_id).get_colored_full_name(),
          '，母亲是 ',
          get_chara_talk(mother_id).get_colored_full_name(),
        ],
        type: 'text',
      });
    }
    const children_count = era.get(`exp:${chara.id}:孩子数量`),
      birth_count = era.get(`exp:${chara.id}:生产次数`),
      children_exp = era.get(`cstr:${chara.id}:长子女经历`);
    if (children_exp) {
      family_info_list.push({
        content: children_exp,
        type: 'text',
      });
      family_info_list.push({
        content: [
          '现在是 ',
          join_to_string(
            [
              children_count ? `${children_count} 个孩子的父亲` : '',
              birth_count ? `${birth_count} 个孩子的母亲` : '',
            ],
            '与 ',
          ),
          { isBr: 2 },
        ],
        type: 'text',
      });
    }

    era
      .getAddedCharacters()
      .map((e) => {
        return {
          f: era.get(`cflag:${e}:父方角色`),
          id: e,
          m: era.get(`cflag:${e}:母方角色`),
        };
      })
      .filter((e) => e.f === chara.id || e.m === chara.id)
      .forEach((e, i) => {
        const child = get_chara_talk(e.id);
        family_info_list.push({
          config: { width: 12 },
          content: [
            chinese_numbers[i] || i + 1,
            child.sex_code - 1 ? '女 ' : '子 ',
            child.get_colored_name(),
            '，其',
            ...(e.f === chara.id
              ? ['母为 ', get_chara_talk(e.m).get_colored_full_name()]
              : ['父为 ', get_chara_talk(e.f).get_colored_full_name()]),
          ],
          type: 'text',
        });
      });
    if (
      family_info_list[family_info_list.length - 1] &&
      family_info_list[family_info_list.length - 1].content[0].isBr
    ) {
      family_info_list.pop();
    }
    if (!family_info_list.length) {
      family_info_list.push({
        content: '没有可以介绍的角色……',
        type: 'text',
      });
    }

    return {
      async handle(command) {
        const me = get_chara_talk(0);
        let ret;
        switch (command) {
          case 100:
            era.printMultiColumns([
              { type: 'divider' },
              {
                content: [
                  '想让 ',
                  chara.get_colored_name(),
                  ' 怎么称呼 ',
                  me.get_colored_name(),
                  '？',
                ],
                type: 'text',
              },
            ]);
            ret = (await era.input()).toString();
            era.set(`callname:${chara.id}:0`, ret);
            await era.printAndWait([
              chara.get_colored_name(),
              ' 开始称呼 ',
              me.get_colored_name(),
              ' 为 ',
              sys_get_colored_callname(chara.id, 0),
              ' 了……',
            ]);
            break;
          case 101:
            get_custom_mec(chara.id).set_callname();
            await era.printAndWait([
              chara.get_colored_name(),
              ' 开始称呼 ',
              me.get_colored_name(),
              ' 为 ',
              sys_get_colored_callname(chara.id, 0),
              ' 了……',
            ]);
            break;
          case 102:
            era.printMultiColumns([
              { type: 'divider' },
              {
                content: ['想怎么称呼 ', chara.get_colored_name(), '？'],
                type: 'text',
              },
            ]);
            ret = (await era.input()).toString();
            era.set(`callname:0:${chara.id}`, ret);
            await era.printAndWait([
              me.get_colored_name(),
              ' 开始称呼 ',
              chara.get_colored_name(),
              ' 为 ',
              sys_get_colored_callname(0, chara.id),
              ' 了……',
            ]);
            break;
          case 103:
            era.set(
              `callname:0:${chara.id}`,
              era.get(`callname:${chara.id}:-2`),
            );
            await era.printAndWait([
              me.get_colored_name(),
              ' 开始称呼 ',
              chara.get_colored_name(),
              ' 为 ',
              sys_get_colored_callname(0, chara.id),
              ' 了……',
            ]);
        }
      },
      print() {
        return [
          {
            config: { content: '人际交往', position: 'left' },
            type: 'divider',
          },
          ...relation_info_list,
          {
            config: { content: '直系亲属', position: 'left' },
            type: 'divider',
          },
          ...family_info_list,
          ...(chara.id
            ? era.get(`love:${chara.id}`) >= 75
              ? [
                  { type: 'text', content: [{ isBr: true }] },
                  {
                    accelerator: 100,
                    config: { width: 12 },
                    content: `修改对 ${era.get('callname:0:-2')} 的称呼`,
                    type: 'button',
                  },
                  {
                    accelerator: 101,
                    config: { width: 12 },
                    content: `重置对 ${era.get('callname:0:-2')} 的称呼`,
                    type: 'button',
                  },
                  {
                    accelerator: 102,
                    config: { width: 12 },
                    content: `修改对该角色的称呼 (${sys_get_callname(
                      0,
                      chara.id,
                    )})`,
                    type: 'button',
                  },
                  {
                    accelerator: 103,
                    config: { width: 12 },
                    content: `重置对该角色的称呼`,
                    type: 'button',
                  },
                ]
              : [
                  { type: 'text', content: [{ isBr: true }] },
                  {
                    accelerator: 102,
                    config: { width: 12 },
                    content: `修改对该角色的称呼 (${sys_get_callname(
                      0,
                      chara.id,
                    )})`,
                    type: 'button',
                  },
                  {
                    accelerator: 103,
                    config: { width: 12 },
                    content: `重置对该角色的称呼`,
                    type: 'button',
                  },
                ]
            : []),
        ];
      },
    };
  },
  name: page_name,
};
