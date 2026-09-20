const era = require('#/era-electron');

const sys_change_hair = require('#/system/chara/sys-change-hair');
const { check_chara_ero_image } = require('#/system/ero/sys-calc-ero-image');
const { get_image } = require('#/system/sys-calc-image');

const {
  get_shared_com_base_birthday,
  get_shared_com_base_body,
  get_shared_com_base_female,
  get_shared_com_base_hair,
  get_shared_com_base_summary,
} = require('#/page/exp/snippets');

const CharaTitles = require('#/data/chara-titles');
const race_clothes = require('#/data/clothe-const.json');
const { get_talent, get_xp } = require('#/data/info-generator');
const { back_hairs, front_hairs, top_hairs } = require('#/data/other-const');

const { __, i18n } = require('#/i18n/selector');

/**
 * @param {number} cid
 * @returns {{front:number,back:number,top:number}}
 */
function generate_hair_index(cid) {
  const ret = {};
  ret.front = Math.max(front_hairs.indexOf(era.get(`cstr:${cid}:前发`)), 0);
  ret.back = Math.max(back_hairs.indexOf(era.get(`cstr:${cid}:后发`)), 0);
  ret.top = Math.max(top_hairs.indexOf(era.get(`cstr:${cid}:呆毛`)), 0);
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
    right_intro_list.push(
      { content: i18n().detail.base_title, isDivider: true },
      ...get_shared_com_base_summary(chara.id),
    );
    const hair_info = get_shared_com_base_hair(chara.id);
    if (hair_info) {
      right_intro_list.push({ isBr: true }, hair_info);
    }
    right_intro_list.push(
      { isBr: true },
      get_shared_com_base_birthday(chara.id),
      { content: i18n().detail.base_header_body, isDivider: true },
    );

    if (flags.in_growth) {
      right_intro_list.push(i18n().detail.growth_info);
    } else {
      right_intro_list.push(...get_shared_com_base_body(chara.id));
      if (chara.sex_code !== 1) {
        if (flags.show_body) {
          right_intro_list.push(
            { isBr: true },
            ...get_shared_com_base_female(chara.id, flags.show_all_body),
          );
        } else {
          right_intro_list.push({ isBr: true }, i18n().detail.base_body_hidden);
        }
      }
    }

    const image = get_image(chara.id)
      .map((e) => `${e}_半身`)
      .join('\t');

    const titles = CharaTitles.get(chara.id);
    const title_list = titles.get();
    const title_info_list = [];
    const cur_title = titles.get_curr_title();
    title_info_list.push(
      {
        accelerator: 30,
        config: {
          buttonType: cur_title ? 'info' : 'warning',
          disabled: !cur_title,
          showAcc: false,
          width: 1,
        },
        content: 'E',
        type: 'button',
      },
      {
        config: { width: 5 },
        content: i18n().ui_invalid_value,
        type: 'text',
      },
    );
    title_list.forEach((t, i) => {
      const name = __(`title.${t.n}`, t.n);
      const desc = CharaTitles.get_desc(t.n);
      title_info_list.push(
        {
          accelerator: i + 31,
          config: {
            buttonType: t.s ? 'warning' : 'info',
            disabled: t.s,
            showAcc: false,
            width: 1,
          },
          content: 'E',
          type: 'button',
        },
        {
          config: { color: t.c, width: 5 },
          content: [
            {
              content: name,
              title: desc
                ? i18n()
                    .title_desc.tip_template.replace('%NAME%', name)
                    .replace('%DESC%', desc)
                : void 0,
            },
          ],
          type: 'text',
        },
      );
    });

    const action_buffer = [];
    if (
      !check_chara_ero_image(chara.id) &&
      (!chara.id ||
        era.get(`love:${chara.id}`) >= 75 ||
        !era.get(`cflag:${chara.id}:父方角色`) ||
        !era.get(`cflag:${chara.id}:母方角色`))
    ) {
      action_buffer.push({
        accelerator: 100,
        config: { width: 4 },
        content: i18n().detail.base_bt_comb_hair,
        type: 'button',
      });
    }
    const image_prefix = era.get(`cstr:${chara.id}:头像`);
    let suffix = era.get(`cstr:${chara.id}:决胜服`);
    if (suffix !== -1 && suffix !== 0) {
      suffix = suffix.toString();
    }
    let image_list;
    let src_id = era.get(`cflag:${chara.id}:模版角色`);
    if (src_id < 0) {
      src_id = chara.id;
    }
    if (src_id >= 400) {
      src_id += 3600;
    } else if (src_id >= 300) {
      src_id += 8700;
    } else if (src_id >= 200) {
      src_id += 1800;
    } else {
      src_id += 1000;
    }
    if (chara.race > 0 && src_id > 0 && suffix !== -1) {
      image_list = race_clothes
        .filter((c) => era.checkImage(`${image_prefix}${c[1]}`))
        .map(([n, s]) => ({
          n: __(`clothe.${src_id}${n}`, __(`clothe.${n}`)),
          s,
        }));
      if (image_list.length > 1) {
        const curr = image_list.find((e) => e.s === suffix);
        action_buffer.push({
          accelerator: 101,
          config: { width: 8 },
          content: curr
            ? i18n().clothe.only_one_clothe_template.replace('%CLOTHE%', curr.n)
            : i18n().clothe.n_clothe,
          type: 'button',
        });
      } else if (
        image_list.length > 0 &&
        image_list[0].n !== i18n().clothe['01']
      ) {
        action_buffer.push({
          config: { width: 8 },
          content: i18n().clothe.only_one_clothe_template.replace(
            '%CLOTHE%',
            image_list[0].n,
          ),
          type: 'text',
        });
      }
    }
    if (action_buffer.length > 0) {
      title_info_list.push(
        { content: [{ isBr: true }], type: 'text' },
        ...action_buffer,
      );
    }

    let temp;

    return {
      async handle(command) {
        if (command === 100) {
          let flag_hair = true,
            hair_indexes = generate_hair_index(chara.id),
            flag_print = true;
          while (flag_hair) {
            (flag_print ? era.printInColRows : era.replaceInColRows)(
              [
                { type: 'divider' },
                {
                  content: i18n().detail.get_base_hair_select(chara),
                  type: 'text',
                },
                {
                  config: { width: 2 },
                  content: i18n().feature.n_ahoge_hair,
                  type: 'text',
                },
                {
                  accelerator: 10,
                  config: { width: 3 },
                  content: i18n().ui_et_prev,
                  type: 'button',
                },
                {
                  config: { width: 3 },
                  content: __(`feature.th_${top_hairs[hair_indexes.top]}`),
                  type: 'text',
                },
                {
                  accelerator: 11,
                  config: { width: 3 },
                  content: i18n().ui_et_next,
                  type: 'button',
                },
              ],
              [
                {
                  config: { width: 2 },
                  content: i18n().feature.n_front_hair,
                  type: 'text',
                },
                {
                  accelerator: 20,
                  config: { width: 3 },
                  content: i18n().ui_et_prev,
                  type: 'button',
                },
                {
                  config: { width: 3 },
                  content: __(`feature.fh_${front_hairs[hair_indexes.front]}`),
                  type: 'text',
                },
                {
                  accelerator: 21,
                  config: { width: 3 },
                  content: i18n().ui_et_next,
                  type: 'button',
                },
              ],
              [
                {
                  config: { width: 2 },
                  content: i18n().feature.n_back_hair,
                  type: 'text',
                },
                {
                  accelerator: 30,
                  config: { width: 3 },
                  content: i18n().ui_et_prev,
                  type: 'button',
                },
                {
                  config: { width: 3 },
                  content: __(`feature.bh_${back_hairs[hair_indexes.back]}`),
                  type: 'text',
                },
                {
                  accelerator: 31,
                  config: { width: 3 },
                  content: i18n().ui_et_next,
                  type: 'button',
                },
              ],
              [
                {
                  accelerator: 99,
                  config: { width: 3 },
                  content: i18n().ui_yes,
                  type: 'button',
                },
                {
                  accelerator: 98,
                  config: { width: 3 },
                  content: i18n().ui_reset,
                  type: 'button',
                },
              ],
            );
            const ret = await era.input({ hideInput: true });
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
            flag_print = false;
            sys_change_hair(chara.id);
          }
        } else if (command !== 101) {
          const selected = command - 31;
          if (selected === -1) {
            title_list.forEach((e) => delete e.s);
          } else if (title_list[selected].s) {
            delete title_list[selected].s;
          } else {
            title_list.forEach((e) => delete e.s);
            title_list[selected].s = true;
          }
        } else {
          const curr = image_list.find((e) => e.s === suffix);
          const cur_line = era.getLineCount();
          let flag = true;
          let gif = era.checkImage(`${image_prefix}${image_list[0].s}_gif`)
            ? 0
            : 2;
          while (flag) {
            await era.clear(era.getLineCount() - cur_line);
            era.setHorizontalAlign('space-evenly');
            era.printInColRows(
              [
                { type: 'divider' },
                {
                  content: [
                    ...(suffix === 0
                      ? i18n().detail.get_base_clothe_auto_select(
                          chara,
                          __(`clothe.${src_id}01`),
                        )
                      : i18n().detail.get_base_clothe_keep_some(chara, curr.n)),
                    { isBr: true },
                    i18n().detail.base_clothe_change_confirm,
                  ],
                  type: 'text',
                },
              ],
              ...image_list.map((e, i) => ({
                columns: [
                  {
                    names:
                      gif === 1
                        ? `${image_prefix}${e.s}_gif\t${image_prefix}${e.s}_半身`
                        : `${image_prefix}${e.s}_半身`,
                    type: 'image.whole',
                  },
                  {
                    accelerator: i + 1,
                    config: {
                      align: 'center',
                      disabled: suffix === e.s,
                    },
                    content: e.n,
                    type: 'button',
                  },
                ],
                config: { width: 6 },
              })),
              [
                {
                  accelerator: 97,
                  config: {
                    align: 'center',
                    disabled: gif === 2,
                    width: 8,
                  },
                  content: i18n().ui_change_image,
                  type: 'button',
                },
                {
                  accelerator: 98,
                  config: {
                    align: 'center',
                    disabled: suffix === 0,
                    width: 8,
                  },
                  content: i18n().detail.base_clothe_bt_auto_select,
                  type: 'button',
                },
                {
                  accelerator: 99,
                  config: { align: 'center', width: 8 },
                  content: i18n().detail.base_clothe_bt_keep_current,
                  type: 'button',
                },
              ],
            );
            era.setHorizontalAlign('start');
            const ret = await era.input();
            if (ret === 97) {
              gif = 1 - gif;
              continue;
            } else if (ret === 98) {
              await era.printAndWait(
                i18n().detail.get_base_clothe_auto_select(
                  chara,
                  __(`clothe.${src_id}01`),
                ),
              );
              era.set(`cstr:${chara.id}:决胜服`, 0);
            } else if (ret !== 99) {
              await era.printAndWait(
                i18n().detail.get_base_clothe_keep_some(
                  chara,
                  image_list[ret - 1].n,
                ),
              );
              era.set(`cstr:${chara.id}:决胜服`, image_list[ret - 1].s);
            }
            flag = false;
          }
        }
      },
      print: () => [
        { content: [{ isBr: true }], type: 'text' },
        { config: { width: 7 }, names: image, type: 'image.whole' },
        {
          config: { width: 17 },
          content: right_intro_list,
          type: 'text',
        },
        {
          config: { content: i18n().tb_talent.n_talent, position: 'left' },
          type: 'divider',
        },
        ...((temp = get_talent(chara.id)).length > 0
          ? [
              {
                config: { width: 2 },
                content: i18n().tb_talent.n_normal,
                type: 'text',
              },
              {
                config: { width: 22 },
                content: temp,
                type: 'text',
              },
            ]
          : []),
        ...((temp = get_xp(chara.id)).length > 0
          ? [
              {
                config: { width: 2 },
                content: i18n().tb_talent.n_xp,
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
          config: { content: i18n().title.n_title, position: 'left' },
          type: 'divider',
        },
        ...title_info_list,
      ],
    };
  },
  name: i18n().detail.base_title,
};
