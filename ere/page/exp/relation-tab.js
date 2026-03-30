const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_get_colored_full_callname,
} = require('#/system/sys-calc-chara-others');

const { get_filled_exp_str } = require('#/page/exp/snippets');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const get_display_name = require('#/utils/calc-display-name');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { join_to_string, sort_list } = require('#/utils/list-utils');

const { relation_colors } = require('#/data/color-const');
const { get_relation_info } = require('#/data/info-generator');
const { max_chara_id } = require('#/data/other-const');

const { i18n } = require('#/i18n/selector');

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
          const target = Number(cid);
          const r_info = get_relation_info(chara.id, target, relation);
          if (target !== my_src_chara && target < max_chara_id) {
            relation_info_list.push({
              config: { width: 8 },
              content: i18n().detail.get_relation_entry(
                sys_get_colored_full_callname(chara.id, target),
                {
                  content: r_info.mark(),
                  color: relation_colors[r_info.level],
                },
              ),
              type: 'text',
            });
          }
        },
      );
    }
    if (!relation_info_list.length) {
      relation_info_list.push({
        content:
          chara.id > 0
            ? i18n().detail.relation_no_relation
            : i18n().ui_invalid_value,
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
          content: i18n().detail.get_relation_take_care(
            get_chara_talk(teach_chara).get_colored_full_name(),
          ),
          type: 'text',
        });
      } else if (era.get(`cflag:${chara.id}:育成回合计时`) < 3 * 48) {
        relation_info_list.push({
          content: i18n().detail.get_relation_be_taken_care(
            get_chara_talk(teach_chara).get_colored_full_name(),
          ),
          type: 'text',
        });
      }
    }

    const father_id = era.get(`cflag:${chara.id}:父方角色`);
    const mother_id = era.get(`cflag:${chara.id}:母方角色`);
    if (father_id >= 0) {
      family_info_list.push({
        content: i18n().detail.get_relation_family_parents(
          get_chara_talk(father_id).get_colored_full_name(),
          get_chara_talk(mother_id).get_colored_full_name(),
        ),
        type: 'text',
      });
    }
    const children_count = era.get(`exp:${chara.id}:孩子数量`);
    const birth_count = era.get(`exp:${chara.id}:生产次数`);
    let children_exp = era.get(`cstr:${chara.id}:长子女经历`);
    if (children_exp) {
      const child_list = sort_list(
        era
          .getAddedCharacters()
          .map((e) => ({
            f: era.get(`cflag:${e}:父方角色`),
            id: e,
            m: era.get(`cflag:${e}:母方角色`),
          }))
          .filter((ch) => ch.f === chara.id || ch.m === chara.id),
        (ch) =>
          +`${era.get(`cstr:${ch.id}:出生经历`)}${era.get(`cflag:${ch.id}:出生月份`).toString().padStart(2, '0')}${era.get(`cflag:${ch.id}:出生日期`).toString().padStart(2, '0')}${ch.id.toString().padStart(3, '0')}`,
        true,
      );
      // 修复长子女经历错误
      if (Array.isArray(children_exp)) {
        children_exp = era.set(`cstr:${chara.id}:长子女经历`, {
          y: era.get(`cstr:${child_list[0].id}:出生经历`),
          m: era.get(`cflag:${child_list[0].id}:出生月份`).toString(),
          w: Math.floor(
            (era.get(`cflag:${child_list[0].id}:出生日期`) + 6) / 7,
          ).toString(),
          c: child_list[0].id,
        });
        if (chara.id === child_list[0].m) {
          children_exp.im = true;
        }
      }
      const first_child = get_chara_talk(children_exp.c);
      family_info_list.push({
        content: get_filled_exp_str(
          children_exp,
          chara.id,
          children_exp.im
            ? i18n().detail.get_relation_first_child_as_mother
            : i18n().detail.get_relation_first_child_as_father,
          first_child.get_colored_full_name(),
          first_child.sex_code === 1,
        ),
        type: 'text',
      });
      family_info_list.push({
        content: [
          i18n().detail.relation_family_children_template.replace(
            '%INFO%',
            join_to_string(
              [
                children_count > 0
                  ? i18n().detail.relation_family_as_father_template.replace(
                      '%COUNT%',
                      children_count.toString(),
                    )
                  : void 0,
                birth_count > 0
                  ? i18n().detail.relation_family_as_mother_template.replace(
                      '%COUNT%',
                      birth_count.toString(),
                    )
                  : void 0,
              ],
              i18n().ui_conjunction,
            ),
          ),
          { isBr: 2 },
        ],
        type: 'text',
      });
      child_list.forEach((ch, i) => {
        const child = get_chara_talk(ch.id);
        const number = i18n().detail.get_child_number(i + 1);
        const child_title = (
          child.sex_code === 1
            ? i18n().detail.relation_family_child_boy_title_template
            : i18n().detail.relation_family_child_girl_title_template
        ).replace('%NUMBER%', number);
        family_info_list.push({
          config: { width: 12 },
          content:
            ch.f === chara.id
              ? i18n().detail.get_relation_family_child_entry_as_father(
                  child_title,
                  child.get_colored_full_name(),
                  get_chara_talk(ch.m).get_colored_full_name(),
                )
              : i18n().detail.get_relation_family_child_entry_as_mother(
                  child_title,
                  child.get_colored_full_name(),
                  get_chara_talk(ch.f).get_colored_full_name(),
                ),
          type: 'text',
        });
      });
    }
    if (family_info_list.at(-1) && family_info_list.at(-1).content[0].isBr) {
      family_info_list.pop();
    }
    if (!family_info_list.length) {
      family_info_list.push({
        content: i18n().detail.relation_no_family,
        type: 'text',
      });
    }

    let temp;

    return {
      async handle(command) {
        const me = get_chara_talk(0);
        let ret;
        switch (command) {
          case 100:
            era.printMultiColumns([
              { type: 'divider' },
              {
                content:
                  i18n().detail.get_relation_change_callname_to_you_confirm(
                    chara.get_colored_name(),
                    me.get_colored_name(),
                  ),
                type: 'text',
              },
            ]);
            ret = (await era.input()).toString();
            era.set(`callname:${chara.id}:0`, ret);
            await era.printAndWait(
              i18n().detail.get_relation_change_callname_result(
                chara.get_colored_name(),
                me.get_colored_name(),
                sys_get_colored_callname(chara.id, 0),
              ),
            );
            break;
          case 101:
            get_custom_mec(chara.id).set_callname();
            await era.printAndWait(
              i18n().detail.get_relation_change_callname_result(
                chara.get_colored_name(),
                me.get_colored_name(),
                sys_get_colored_callname(chara.id, 0),
              ),
            );
            break;
          case 102:
            era.printMultiColumns([
              { type: 'divider' },
              {
                content: i18n().detail.get_relation_change_callname_confirm(
                  chara.get_colored_name(),
                ),
                type: 'text',
              },
            ]);
            ret = (await era.input()).toString();
            era.set(`callname:0:${chara.id}`, ret);
            await era.printAndWait(
              i18n().detail.get_relation_change_callname_result(
                me.get_colored_name(),
                chara.get_colored_name(),
                sys_get_colored_callname(0, chara.id),
              ),
            );
            break;
          case 103:
            era.set(
              `callname:0:${chara.id}`,
              era.get(`callname:${chara.id}:-2`),
            );
            await era.printAndWait(
              i18n().detail.get_relation_change_callname_result(
                me.get_colored_name(),
                chara.get_colored_name(),
                sys_get_colored_callname(0, chara.id),
              ),
            );
        }
      },
      print: () => [
        {
          config: {
            content: i18n().detail.relation_header_relation,
            position: 'left',
          },
          type: 'divider',
        },
        ...relation_info_list,
        {
          config: {
            content: i18n().detail.relation_header_family,
            position: 'left',
          },
          type: 'divider',
        },
        ...family_info_list,
        ...(chara.id > 0
          ? [
              { type: 'text', content: [{ isBr: true }] },
              ...(era.get(`love:${chara.id}`) >= 75
                ? [
                    {
                      accelerator: 100,
                      config: { width: 12 },
                      content:
                        i18n().detail.relation_bt_change_callname_to_you_template.replace(
                          '%YOU%',
                          (temp = get_display_name(era.get('callname:0:-2'))),
                        ),
                      type: 'button',
                    },
                    {
                      accelerator: 101,
                      config: { width: 12 },
                      content:
                        i18n().detail.relation_bt_reset_callname_to_you_template.replace(
                          '%YOU%',
                          temp,
                        ),
                      type: 'button',
                    },
                  ]
                : []),
              {
                accelerator: 102,
                config: { width: 12 },
                content:
                  i18n().detail.relation_bt_change_callname_template.replace(
                    '%CALLNAME%',
                    sys_get_callname(0, chara.id),
                  ),
                type: 'button',
              },
              {
                accelerator: 103,
                config: { width: 12 },
                content: i18n().detail.relation_bt_reset_callname,
                type: 'button',
              },
            ]
          : []),
      ],
    };
  },
  name: i18n().detail.relation_title,
};
