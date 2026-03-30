const era = require('#/era-electron');

const sys_change_hair = require('#/system/chara/sys-change-hair');
const {
  get_bust_size,
  get_hip_size,
  get_waist_size,
} = require('#/system/ero/sys-calc-ero-status');
const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CharaTalk = require('#/utils/chara-talk');
const {
  gacha,
  get_random_entry,
  join_to_string,
} = require('#/utils/list-utils');
const { get_display_width, get_random_value } = require('#/utils/value-utils');

const CharaTitles = require('#/data/chara-titles');
const {
  bhc_names,
  buff_colors,
  hc_names,
  sex_colors,
  skin_colors,
} = require('#/data/color-const');
const {
  get_breast_cup,
  get_colored_body_hair,
  get_colored_hair,
  get_filtered_talents,
  get_talent,
  get_xp,
} = require('#/data/info-generator');
const { back_hairs, front_hairs, top_hairs } = require('#/data/other-const');

const di18n = require('#/i18n/extended-def');
const { __, i18n } = require('#/i18n/selector');

/** @type {(function(number):{color:string,content:string}|string)[]} */
const hair_content_cb = [
  (p) => get_colored_hair(0, hc_names[p]),
  (p) => __(`feature.th_${top_hairs[p]}`),
  (p) => __(`feature.fh_${front_hairs[p]}`),
  (p) => __(`feature.bh_${back_hairs[p]}`),
  (p) => ({
    color: skin_colors[p + 1],
    content: di18n.feature.n_skin[p + 1],
  }),
  (p) => di18n.feature.n_body_hair_talent[p],
  (p) => di18n.feature.n_body_hair_talent[p],
  (p) => {
    return { color: sex_colors[p], content: di18n.feature.n_c_sex_organ[p] };
  },
];
const hair_length_arr = [
  hc_names.length,
  top_hairs.length,
  front_hairs.length,
  back_hairs.length,
  di18n.feature.n_skin.length,
  di18n.feature.n_body_hair_talent.length,
  di18n.feature.n_body_hair_talent.length,
  di18n.feature.n_c_sex_organ.length,
];

/** @param {number} size */
function set_bust_size(size) {
  switch (size) {
    case 1:
      era.set('cflag:0:胸围', era.get('cflag:0:下胸围') + 5);
      break;
    case 2:
      era.set('cflag:0:胸围', era.get('cflag:0:下胸围') + 10);
      break;
    case 3:
      era.set('cflag:0:胸围', era.get('cflag:0:下胸围') + 15);
      break;
    case 4:
      era.set('cflag:0:胸围', era.get('cflag:0:下胸围') + 18);
      break;
    case 5:
      era.set('cflag:0:胸围', era.get('cflag:0:下胸围') + 23);
  }
}

/**
 * @param {number} height
 * @param {number} my_sex
 */
function set_height(height, my_sex) {
  era.set('cflag:0:身高', height);
  if (my_sex === 1) {
    era.set('cflag:0:胸围', height * 0.48);
    era.set('cflag:0:下胸围', 200);
    era.set('cflag:0:腰围', height * 0.47);
    era.set('cflag:0:臀围', height * 0.51);
  } else {
    era.set('cflag:0:下胸围', height * 0.51 - 15);
    era.set('cflag:0:腰围', height * 0.34);
    era.set('cflag:0:臀围', height * 0.542);
  }
}

/** @param {number} my_sex */
function random_chara(my_sex) {
  switch (era.get('flag:彩蛋机制')) {
    case 3:
      era.set('callname:0:-2', '天马');
      break;
    case 179:
      era.set('callname:0:-2', '豚鼠子');
      break;
    case 621:
      era.set('callname:0:-2', '渡鸦');
      break;
    default:
      era.set('callname:0:-2', 'you');
  }
  era.set('cstr:0:发色', get_random_entry(hc_names));
  era.set('cstr:0:呆毛', top_hairs[get_random_value(1, 5)] || '');
  era.set('cstr:0:前发', get_random_entry(front_hairs));
  era.set('cstr:0:后发', get_random_entry(back_hairs));
  era.set('cflag:0:肤色深度', get_random_value(-1, 2));
  era.set('cflag:0:腋毛', era.set('talent:0:腋毛成长', get_random_value(0, 2)));
  era.set('cflag:0:阴毛', era.set('talent:0:阴毛成长', get_random_value(0, 2)));
  era.set('talent:0:茎核类型', get_random_value(0, 2));
  era.set('cflag:0:出生月份', get_random_value(1, 12));
  era.set('cflag:0:出生日期', get_random_value(1, 31));
  switch (era.get('cflag:0:出生月份')) {
    case 4:
    case 6:
    case 9:
    case 11:
      era.set('cflag:0:出生日期', Math.min(era.get('cflag:0:出生日期'), 30));
      break;
    case 2:
      era.set('cflag:0:出生日期', Math.min(era.get('cflag:0:出生日期'), 28));
  }
  set_height(get_random_value(150, 200), my_sex);
  if (my_sex > 0) {
    era.set('cflag:0:阴茎尺寸', get_random_value(1, 5));
  }
  if (my_sex !== 1) {
    set_bust_size(get_random_value(1, 5));
  }
  era.set('cflag:0:气性', get_random_value(-3, 3));
  era.set('cstr:0:毛色', get_random_entry(bhc_names));
  for (let i = 0; i < 5; ++i) {
    // BASENAME:5 - 9 = 速度 - 智力
    era.set(`base:0:${5 + i}`, 25);
  }
  era.add(`base:0:${get_random_value(5, 9)}`, 100);
}

/** @param {number} my_sex */
function random_talent(my_sex) {
  era.get('talentkeys').forEach((e) => {
    if (e >= 40 && e <= 66) {
      era.set(`talent:0:${e}`, 0);
    }
  });
  const chara_talents = new Array(18).fill(0).map((_, i) => i);
  chara_talents.forEach((tid) => era.set(`talent:0:${tid}`, 0));
  gacha(chara_talents, 5).forEach((e) =>
    era.set(`talent:0:${e}`, Math.random() < 0.5 ? 1 : -1),
  );
  const t1 = get_random_entry(get_filtered_talents(my_sex, 50));
  era.set(`talent:0:${t1}`, 1);
  const t2 = get_random_entry(get_filtered_talents(my_sex, 60));
  era.set(`talent:0:${t2}`, get_random_value(0, 1) || -4);
  const t3 = get_random_value(40, 47);
  era.set(`talent:0:${t3}`, t3 === 43 ? get_random_entry([-1, 1]) : 1);
  if (my_sex === 1) {
    era.set('talent:0:乳头类型', 0);
    era.set('talent:0:泌乳', 0);
  } else {
    era.set('talent:0:乳头类型', get_random_value(0, 2));
    era.set('talent:0:泌乳', 3 * (Math.random() > 0.75));
  }
}

async function page_custom() {
  const my_sex = era.get('cflag:0:性别');
  let buffer;
  let flag_custom = true;
  let temp;

  if (era.get('callname:0:-1').indexOf('豚鼠子') !== -1) {
    era.set('flag:角色性别', 0);
    era.set('flag:彩蛋机制', 179);
    era.set('flag:游戏结束', 0);
    era.set('flag:声望不足替换', 1);
    era.set('flag:马娘身高', 0);
    era.set('flag:马娘初始好感', 300);
    era.set('flag:马娘初始爱慕', 50);
    era.set('flag:不忠惩罚', 0);
    CharaTitles.get(0).push({ c: buff_colors[2], n: 'es_egg_179', s: true });
  } else if (era.get('callname:0:-1').indexOf('渡鸦') !== -1) {
    era.set('flag:角色性别', 99);
    era.set('flag:游戏结束', 0);
    era.set('flag:彩蛋机制', 621);
    era.set('flag:极端行为限制', 3);
    era.set('flag:马娘身高', 2);
    era.set('flag:马娘初始好感', 300);
    era.set('flag:马娘初始爱慕', 50);
    era.set('flag:不忠惩罚', 0);
    CharaTitles.get(0).push({ c: buff_colors[2], n: 'es_egg_621', s: true });
  } else if (
    era.get('callname:0:-1').indexOf('天马闪光蹄') !== -1 &&
    sys_personal_achievement.get(3) > 0
  ) {
    era.set('flag:角色性别', 0);
    era.set('flag:彩蛋机制', 3);
    CharaTitles.get(0).push({ c: buff_colors[2], n: 'es_egg_3', s: true });
  }
  while (flag_custom) {
    for (let i = 0; i < 5; ++i) {
      // BASENAME:5 - 9 = 速度 - 智力
      era.set(`base:0:${5 + i}`, 25);
    }
    await era.clear();
    era.printMultiColumns([
      { type: 'divider' },
      {
        content: i18n().new_game.cus_intro_header,
        type: 'text',
      },
      {
        accelerator: 1,
        content: i18n().new_game.bt_cus_random,
        type: 'button',
      },
      {
        accelerator: 2,
        content: i18n().new_game.bt_cus_default,
        type: 'button',
      },
      {
        accelerator: 3,
        content: i18n().new_game.bt_cus_set,
        type: 'button',
      },
    ]);
    const first_button = await era.input();
    if (first_button === 1) {
      random_chara(my_sex);
      random_talent(my_sex);
    } else if (first_button === 2) {
      era.set('cstr:0:发色', hc_names[0]);
      era.set('cstr:0:呆毛', '');
      era.set('cstr:0:前发', front_hairs[0]);
      era.set('cstr:0:后发', back_hairs[0]);
      era.set('cflag:0:肤色深度', 0);
      era.set('cflag:0:腋毛', era.set('talent:0:腋毛成长', 1));
      era.set('cflag:0:阴毛', era.set('talent:0:阴毛成长', 1));
      era.set('talent:0:茎核类型', 1);
      era.set('cflag:0:出生月份', 1);
      era.set('cflag:0:出生日期', 1);
      set_height(170, my_sex);
      set_bust_size(3);
      era.set('cflag:0:下胸围', era.get('cflag:0:胸围') - 15);
      if (my_sex > 0) {
        era.set('cflag:0:阴茎尺寸', 3);
      }
      era.set('cflag:0:气性', 0);
      era.set('cstr:0:毛色', bhc_names[0]);
      for (let i = 0; i < 5; ++i) {
        // BASENAME:5 - 9 = 速度 - 智力
        era.add(`base:0:${5 + i}`, 20);
      }
      if (era.get('flag:彩蛋机制') === 179) {
        era.set('callname:0:-2', '豚鼠子');
      } else {
        era.set('callname:0:-2', 'you');
      }
      random_talent(my_sex);
    } else if (first_button === 3) {
      let flag_hair = true;
      let indexes = new Array(hair_content_cb.length).fill(0);
      let cur_line = era.getLineCount();
      while (flag_hair) {
        await era.clear(era.getLineCount() - cur_line);
        era.printInColRows(
          [
            { type: 'divider' },
            { content: i18n().new_game.cus_body_header, type: 'text' },
          ],
          ...indexes.map((e, i) => {
            return [
              {
                config: { width: 3 },
                content: di18n.feature.types[i],
                type: 'text',
              },
              {
                accelerator: i * 10,
                config: { width: 3 },
                content: i18n().ui_et_prev,
                type: 'button',
              },
              {
                config: { width: 3 },
                content: [hair_content_cb[i](e)],
                type: 'text',
              },
              {
                accelerator: i * 10 + 1,
                config: { width: 3 },
                content: i18n().ui_et_next,
                type: 'button',
              },
            ];
          }),
          [
            {
              accelerator: 99,
              content: i18n().new_game.bt_cus_confirm,
              type: 'button',
            },
          ],
        );
        temp = await era.input();
        if (temp === 99) {
          era.set('cstr:0:发色', hc_names[indexes[0]]);
          era.set('cstr:0:呆毛', !indexes[1] ? '' : top_hairs[indexes[1]]);
          era.set('cstr:0:前发', front_hairs[indexes[2]]);
          era.set('cstr:0:后发', back_hairs[indexes[3]]);
          era.set('cflag:0:肤色深度', indexes[4]);
          era.set('cflag:0:腋毛', era.set('talent:0:腋毛成长', indexes[5]));
          era.set('cflag:0:阴毛', era.set('talent:0:阴毛成长', indexes[6]));
          era.set('talent:0:茎核类型', indexes[7]);
          flag_hair = false;
        } else {
          const i = Math.floor(temp / 10),
            j = temp % 10;
          if (i === 4) {
            if (j === 0) {
              indexes[i] += hair_length_arr[i];
            } else {
              indexes[i] += 2;
            }
            indexes[i] = (indexes[i] % hair_length_arr[i]) - 1;
          } else if (j === 0) {
            indexes[i] += hair_length_arr[i] - 1;
          } else {
            indexes[i] += 1;
          }
          indexes[i] %= hair_length_arr[i];
        }
      }

      let flag_height = true;
      let height = 170;
      let month = 1;
      let day = 1;
      cur_line = era.getLineCount();
      while (flag_height) {
        await era.clear(era.getLineCount() - cur_line);
        era.printMultiColumns([
          { type: 'divider' },
          {
            content: i18n().new_game.cus_birthday_header,
            type: 'text',
          },
          {
            config: { width: 2 },
            content: i18n().feature.n_height_with_cm,
            type: 'text',
          },
          {
            accelerator: 10,
            config: { align: 'center', width: 3 },
            content: '-5',
            type: 'button',
          },
          {
            accelerator: 11,
            config: { align: 'center', width: 3 },
            content: '-1',
            type: 'button',
          },
          {
            config: { align: 'center', width: 3 },
            content: height.toString(),
            type: 'text',
          },
          {
            accelerator: 12,
            config: { align: 'center', width: 3 },
            content: '+1',
            type: 'button',
          },
          {
            accelerator: 13,
            config: { align: 'center', width: 3 },
            content: '+5',
            type: 'button',
          },
          { content: [], type: 'text' },
          {
            config: { width: 2 },
            content: i18n().new_game.cus_birthday_month,
            type: 'text',
          },
          {
            accelerator: 20,
            config: { align: 'center', offset: 3, width: 3 },
            content: i18n().new_game.cus_bm_prev,
            type: 'button',
          },
          {
            config: { align: 'center', width: 3 },
            content: month.toString(),
            type: 'text',
          },
          {
            accelerator: 21,
            config: { align: 'center', width: 3 },
            content: i18n().new_game.cus_bm_next,
            type: 'button',
          },
          { content: [], type: 'text' },
          {
            config: { width: 2 },
            content: i18n().new_game.cus_birthday_date,
            type: 'text',
          },
          {
            accelerator: 30,
            config: { align: 'center', width: 3 },
            content: i18n().new_game.cus_bd_prev_5,
            type: 'button',
          },
          {
            accelerator: 31,
            config: { align: 'center', width: 3 },
            content: i18n().new_game.cus_bd_prev,
            type: 'button',
          },
          {
            config: { align: 'center', width: 3 },
            content: day.toString(),
            type: 'text',
          },
          {
            accelerator: 32,
            config: { align: 'center', width: 3 },
            content: i18n().new_game.cus_bd_next,
            type: 'button',
          },
          {
            accelerator: 33,
            config: { align: 'center', width: 3 },
            content: i18n().new_game.cus_bd_next_5,
            type: 'button',
          },
          { content: [], type: 'text' },
          {
            accelerator: 99,
            content: i18n().new_game.bt_cus_confirm,
            type: 'button',
          },
        ]);
        temp = await era.input();
        switch (temp) {
          case 10:
            height -= 5;
            if (height < 150) {
              height = 200;
            }
            break;
          case 11:
            height--;
            if (height < 150) {
              height = 200;
            }
            break;
          case 12:
            height++;
            if (height > 200) {
              height = 150;
            }
            break;
          case 13:
            height += 5;
            if (height > 200) {
              height = 150;
            }
            break;
          case 20:
            month--;
            if (!month) {
              month = 12;
            }
            break;
          case 21:
            month++;
            if (month === 13) {
              month = 1;
            }
            break;
          case 30:
            day -= 5;
            break;
          case 31:
            day--;
            break;
          case 32:
            day++;
            break;
          case 33:
            day += 5;
            break;
          case 99:
            era.set('cflag:0:出生月份', month);
            era.set('cflag:0:出生日期', day);
            set_height(height, my_sex);
            flag_height = false;
        }
        let date_limit = 31;
        switch (month) {
          case 4:
          case 6:
          case 9:
          case 11:
            date_limit = 30;
            break;
          case 2:
            date_limit = 28;
        }
        if (day <= 0) {
          day = date_limit;
        } else if (day === date_limit + 1) {
          day = 1;
        } else if (day > date_limit + 1) {
          day = date_limit;
        }
      }

      if (my_sex !== 1) {
        era.printMultiColumns([
          { type: 'divider' },
          {
            content: i18n().new_game.cus_breast_header,
            type: 'text',
          },
          ...new Array(5).fill(0).map((_, i) => ({
            accelerator: i + 1,
            content: __(`new_game.cus_breast_${i + 1}`),
            type: 'button',
          })),
        ]);
        set_bust_size(await era.input());
      }

      if (my_sex > 0) {
        era.printMultiColumns([
          { type: 'divider' },
          {
            content: i18n().new_game.cus_penis_header,
            type: 'text',
          },
          ...new Array(5).fill(0).map((_, i) => ({
            accelerator: i + 1,
            content: __(`new_game.cus_penis_${i + 1}`),
            type: 'button',
          })),
        ]);
        era.set('cflag:0:阴茎尺寸', await era.input());
      }

      buffer = [
        { type: 'divider' },
        {
          content: i18n().new_game.cus_uma_header,
          type: 'text',
        },
      ];
      for (let i = 1; i <= 7; ++i) {
        // 气性从 -3 开始
        const c = i - 4;
        buffer.push(
          {
            accelerator: i,
            config: { width: 2 },
            content: __(`feature.chara_${c}`),
            type: 'button',
          },
          {
            config: { width: 22 },
            content: __(`feature.chara_${c}_desc`),
            type: 'text',
          },
        );
      }
      era.printMultiColumns(buffer);
      temp = await era.input();
      era.set('cflag:0:气性', temp - 4);

      buffer = [
        { type: 'divider' },
        {
          content: i18n().new_game.cus_uma_color_header_template.replace(
            '%CHARA%',
            __(`feature.chara_${era.get('cflag:0:气性')}`),
          ),
          type: 'text',
        },
      ];
      bhc_names.forEach((hc, i) => {
        buffer.push(
          {
            accelerator: i + 1,
            config: { width: 1 },
            content: '',
            type: 'button',
          },
          {
            config: { width: 23 },
            content: [get_colored_body_hair(0, hc)],
            type: 'text',
          },
        );
      });
      era.printMultiColumns(buffer);
      temp = await era.input();
      era.set('cstr:0:毛色', bhc_names[temp - 1]);

      era.drawLine();
      era.print(i18n().new_game.cus_call_header);
      // FLAGNAME:179 = 彩蛋机制
      switch (era.get('flag:179')) {
        case 3:
          era.drawLine();
          await era.printAndWait(i18n().new_game.cus_call_3);
          era.set('callname:0:-2', '天马');
          break;
        case 179:
          era.drawLine();
          await era.printAndWait(i18n().new_game.cus_call_179);
          era.set('callname:0:-2', '豚鼠子');
          break;
        case 621:
          era.drawLine();
          await era.printAndWait(i18n().new_game.cus_call_621);
          era.set('callname:0:-2', '渡鸦');
          break;
        default:
          era.printInColRows([
            { content: i18n().new_game.cus_set_callname, type: 'text' },
            { accelerator: 1, content: i18n().name.you, type: 'button' },
            {
              accelerator: 2,
              content: i18n().name.leading_role,
              type: 'button',
            },
            {
              accelerator: 3,
              content: i18n().new_game.cus_set_by_self,
              type: 'button',
            },
          ]);
          temp = await era.input();
          switch (temp) {
            case 1:
              era.set('callname:0:-2', 'you');
              break;
            case 2:
              era.set('callname:0:-2', 'leading_role');
              break;
            case 3:
              era.print(i18n().new_game.cus_set_callname);
              temp = '';
              do {
                if (temp) {
                  await era.printAndWait(di18n.get_too_long(6));
                }
                temp = era.set('callname:0:-2', await era.input());
              } while (get_display_width(temp) > 6);
          }
      }
      await era.printAndWait(
        i18n().new_game.get_cus_callname_confirm(
          CharaTalk.me.get_colored_actual_name(),
          CharaTalk.me.get_colored_name(),
        ),
      );

      buffer = [
        { type: 'divider' },
        {
          content: i18n().new_game.cus_taiwu_header,
          type: 'text',
        },
      ];
      di18n.new_game.taiwu_talents.forEach((e, i) => {
        buffer.push(
          {
            accelerator: i + 1,
            config: { width: 3 },
            content: e,
            type: 'button',
          },
          {
            config: { width: 21 },
            content: di18n.new_game.taiwu_talent_desc[i],
            type: 'text',
          },
        );
      });

      era.printMultiColumns(buffer);
      temp = await era.input();
      era.add(`base:0:${temp + 4}`, 100);

      random_talent(my_sex);
    }

    let flag_check = true;
    const cur_line = era.getLineCount();
    while (flag_check) {
      sys_change_hair(0);
      era.printMultiColumns([
        { type: 'divider' },
        { content: i18n().new_game.cus_final_header, type: 'text' },
        {
          content: i18n().new_game.get_cus_f_name(
            CharaTalk.me.get_colored_actual_name(),
          ),
          type: 'text',
        },
        {
          content: (my_sex === 1
            ? i18n().new_game.get_cus_f_male
            : i18n().new_game.get_cus_f_female)(
            CharaTalk.me.get_colored_name(),
            __(`feature.h_sex_${my_sex}`),
            era.get('cflag:0:身高').toString(),
            i18n().detail.get_base_female_info(
              get_bust_size(0, true),
              get_breast_cup(0),
              get_waist_size(0),
              get_hip_size(0),
            ),
          ),
          type: 'text',
        },
        {
          content: i18n().new_game.get_cus_f_hair(
            join_to_string(
              [
                di18n.feature.get_ahoge_hair(era.get('cstr:0:呆毛')),
                __(`feature.fh_${era.get('cstr:0:前发')}`),
                __(`feature.bh_${era.get('cstr:0:后发')}`),
              ],
              i18n().feature.hair_splitter,
            ),
            get_colored_hair(0),
          ),
          type: 'text',
        },
        {
          content: (my_sex > 0
            ? i18n().new_game.get_cus_f_skin_male
            : i18n().new_game.get_cus_f_skin_female)(
            {
              // CFLAGNAME:10 = 肤色深度
              color: skin_colors[era.get('cflag:0:10') + 1],
              content: di18n.feature.n_skin[era.get('cflag:0:10') + 1],
            },
            di18n.feature.n_body_hair_talent[era.get('talent:0:腋毛成长')],
            di18n.feature.n_body_hair_talent[era.get('talent:0:阴毛成长')],
            {
              // TALENTNAME:34 = 茎核类型
              color: sex_colors[era.get('talent:0:34')],
              content: di18n.feature.n_c_sex_organ[era.get('talent:0:34')],
            },
            di18n.feature.n_penis[era.get('cflag:0:阴茎尺寸')],
          ),
          type: 'text',
        },
        {
          content: i18n().new_game.get_cus_f_uma(
            get_colored_body_hair(0),
            di18n.feature.get_chara_info(era.get('cflag:0:气性')),
          ),
          type: 'text',
        },
        {
          content: [i18n().new_game.cus_f_talent, ...get_talent(0)],
          type: 'text',
        },
        {
          content: [i18n().new_game.cus_f_xp, ...get_xp(0)],
          type: 'text',
        },
        {
          content: [
            i18n().new_game.cus_f_gift,
            di18n.n_attr.find((e, i) => era.get(`base:0:${5 + i}`) >= 100) ||
              i18n().ui_default,
          ],
          type: 'text',
        },
        {
          accelerator: 1,
          config: { width: 4 },
          content: i18n().new_game.bt_cus_confirm,
          type: 'button',
        },
        {
          accelerator: 2,
          config: { width: 4 },
          content: i18n().new_game.bt_random_talents,
          type: 'button',
        },
        {
          accelerator: 3,
          config: { width: 4 },
          content: i18n().new_game.bt_random_all,
          type: 'button',
        },
        {
          accelerator: 4,
          config: { width: 4 },
          content: i18n().new_game.bt_re_make,
          type: 'button',
        },
        {
          accelerator: 99,
          config: { width: 4 },
          content: i18n().new_game.bt_exit,
          type: 'button',
        },
      ]);
      temp = await era.input();
      switch (temp) {
        case 1:
          flag_check = false;
          flag_custom = false;
          break;
        case 2:
          random_talent(my_sex);
          await era.clear(era.getLineCount() - cur_line);
          break;
        case 3:
          random_chara(my_sex);
          random_talent(my_sex);
          await era.clear(era.getLineCount() - cur_line);
          break;
        case 4:
          flag_check = false;
          break;
        case 99:
          return true;
      }
    }
  }
}

module.exports = page_custom;
