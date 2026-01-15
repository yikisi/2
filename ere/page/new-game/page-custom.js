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
const { get_random_value } = require('#/utils/value-utils');

const CharaTitles = require('#/data/chara-titles');
const { buff_colors, sex_colors, skin_colors } = require('#/data/color-const');
const {
  chara_desc,
  chara_full_desc,
  human_sex_title,
} = require('#/data/ero/status-const');
const {
  get_breast_cup,
  get_filtered_talents,
  get_hair_color,
  get_talent,
  get_xp,
} = require('#/data/info-generator');
const { back_hairs, front_hairs, top_hairs } = require('#/data/other-const');

const { i18n } = require('#/i18n/selector');

const body_hair_type = ['天生光滑', '普通类型', '生长快而硬'];
const characteristic_type = [
  '发色',
  '呆毛',
  '前发',
  '后发',
  '肤色',
  '腋毛',
  '阴毛',
  '性器颜色',
];
const hair_color_names = [
  '黑',
  '深棕',
  '橙',
  '红棕',
  '白',
  '金',
  '浅棕',
  '粉',
  '蓝',
];
const taiwu_talents = [
  '迅由危亡',
  '纯凭自然',
  '锋从磨砺',
  '香自苦寒',
  '意随心寂',
];
const taiwu_talent_desc = [
  '迅由危亡，千钧一发，您的速度远胜常人。',
  '纯凭自然，浑然天成，您的耐力远胜常人。',
  '锋从磨砺，伏虎降龙，您的力量远胜常人。',
  '香自苦寒，动心忍性，您的根性远胜常人。',
  '意随心寂，感悟自生，您的智力远胜常人。',
];
const uma_hairs = ['黑鹿', '栗', '鹿', '青鹿', '芦', '枥栗', '青'];

/** @type {(function(number):{color:string,content:string}|string)[]} */
const hair_content_cb = [
  (p) => {
    const hair = hair_color_names[p];
    return {
      color: get_hair_color(hair),
      content: hair,
    };
  },
  (p) => top_hairs[p],
  (p) => front_hairs[p],
  (p) => back_hairs[p],
  (p) => ({
    color: skin_colors[p + 1],
    content: i18n().n_skin[p + 1],
  }),
  (p) => body_hair_type[p],
  (p) => body_hair_type[p],
  (p) => {
    return { color: sex_colors[p], content: i18n().n_c_penis[p] };
  },
];
const hair_length_arr = [
  hair_color_names.length,
  top_hairs.length,
  front_hairs.length,
  back_hairs.length,
  i18n().n_skin.length,
  body_hair_type.length,
  body_hair_type.length,
  i18n().n_c_penis.length,
];

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

function set_height(height) {
  era.set('cflag:0:身高', height);
  if (era.get('cflag:0:性别') === 1) {
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

function random_chara() {
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
      era.set('callname:0:-2', i18n().name.you);
  }
  era.set('cstr:0:发色', get_random_entry(hair_color_names));
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
  set_height(get_random_value(150, 200));
  const my_sex = era.get('cflag:0:性别');
  if (my_sex > 0) {
    era.set('cflag:0:阴茎尺寸', get_random_value(1, 5));
  }
  if (my_sex !== 1) {
    set_bust_size(get_random_value(1, 5));
  }
  era.set('cflag:0:气性', get_random_value(-3, 3));
  era.set('cstr:0:毛色', get_random_entry(uma_hairs));
  for (let i = 0; i < 5; ++i) {
    // BASENAME:5 - 9 = 速度 - 智力
    era.set(`base:0:${5 + i}`, 25);
  }
  era.add(`base:0:${get_random_value(5, 9)}`, 100);
}

function random_talent() {
  era.get('talentkeys').forEach((e) => {
    if (e >= 40 && e <= 66) {
      era.set(`talent:0:${e}`, 0);
    }
  });
  const chara_talents = new Array(18).fill(0).map((_, i) => i);
  chara_talents.forEach((tid) => era.set(`talent:0:${tid}`, 0));
  gacha(chara_talents, 5).forEach((e) =>
    era.set(`talent:0:${e}`, 2 * get_random_value(0, 1) - 1),
  );
  const my_sex = era.get('cflag:0:性别');
  era.set(`talent:0:${get_random_entry(get_filtered_talents(my_sex, 50))}`, 1);
  era.set(
    `talent:0:${get_random_entry(get_filtered_talents(my_sex, 60))}`,
    get_random_value(0, 1) || -4,
  );
  const temp = get_random_value(40, 47);
  era.set(
    `talent:0:${temp}`,
    1 - 2 * (temp === 43 ? get_random_value(0, 1) : 0),
  );
  if (my_sex === 1) {
    era.set('talent:0:乳头类型', 0);
    era.set('talent:0:泌乳', 0);
  } else {
    era.set('talent:0:乳头类型', get_random_value(0, 2));
    era.set('talent:0:泌乳', 3 * (Math.random() > 0.75));
  }
}

async function page_custom() {
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
        content: '捏人时间！要随机生成角色吗？',
        type: 'text',
      },
      { accelerator: 1, content: '随机生成', type: 'button' },
      { accelerator: 2, content: '默认就好', type: 'button' },
      { accelerator: 3, content: '自己设置', type: 'button' },
    ]);
    const first_button = await era.input();
    if (first_button === 1) {
      random_chara();
      random_talent();
    } else if (first_button === 2) {
      era.set('cstr:0:发色', hair_color_names[0]);
      era.set('cstr:0:呆毛', '');
      era.set('cstr:0:前发', front_hairs[0]);
      era.set('cstr:0:后发', back_hairs[0]);
      era.set('cflag:0:肤色深度', 0);
      era.set('cflag:0:腋毛', era.set('talent:0:腋毛成长', 1));
      era.set('cflag:0:阴毛', era.set('talent:0:阴毛成长', 1));
      era.set('talent:0:茎核类型', 1);
      era.set('cflag:0:出生月份', 1);
      era.set('cflag:0:出生日期', 1);
      set_height(170);
      set_bust_size(3);
      era.set('cflag:0:下胸围', era.get('cflag:0:胸围') - 15);
      if (era.get('cflag:0:性别')) {
        era.set('cflag:0:阴茎尺寸', 3);
      }
      era.set('cflag:0:气性', 0);
      era.set('cstr:0:毛色', uma_hairs[0]);
      for (let i = 0; i < 5; ++i) {
        // BASENAME:5 - 9 = 速度 - 智力
        era.add(`base:0:${5 + i}`, 20);
      }
      if (era.get('flag:彩蛋机制') === 179) {
        era.set('callname:0:-2', '豚鼠子');
      } else {
        era.set('callname:0:-2', i18n().name.you);
      }
      random_talent();
    } else if (first_button === 3) {
      let flag_hair = true,
        indexes = new Array(hair_content_cb.length).fill(0);
      while (flag_hair) {
        await era.clear();
        era.printInColRows(
          [
            { type: 'divider' },
            { content: '首先来决定身体细节！', type: 'text' },
          ],
          ...indexes.map((e, i) => {
            return [
              {
                config: { width: 3 },
                content: `${characteristic_type[i]}：`,
                type: 'text',
              },
              {
                accelerator: i * 10,
                config: { width: 3 },
                content: '前一个',
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
                content: '后一个',
                type: 'button',
              },
            ];
          }),
          [{ accelerator: 99, content: '就这样！', type: 'button' }],
        );
        temp = await era.input();
        if (temp === 99) {
          era.set('cstr:0:发色', hair_color_names[indexes[0]]);
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

      let flag_height = true,
        height = 170,
        month = 1,
        day = 1;
      while (flag_height) {
        await era.clear();
        era.printMultiColumns([
          { type: 'divider' },
          {
            content:
              '然后是身高和生日！\nPS：开发者就假定您并非出生于2月29日啦',
            type: 'text',
          },
          { config: { width: 2 }, content: '身高 (cm)', type: 'text' },
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
          { config: { width: 7 }, content: '', type: 'text' },
          { config: { width: 2 }, content: '出生月份', type: 'text' },
          {
            accelerator: 20,
            config: { align: 'center', offset: 3, width: 3 },
            content: '前一月',
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
            content: '后一月',
            type: 'button',
          },
          { config: { width: 10 }, content: '', type: 'text' },
          { config: { width: 2 }, content: '出生日期', type: 'text' },
          {
            accelerator: 30,
            config: { align: 'center', width: 3 },
            content: '前五天',
            type: 'button',
          },
          {
            accelerator: 31,
            config: { align: 'center', width: 3 },
            content: '前一天',
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
            content: '后一天',
            type: 'button',
          },
          {
            accelerator: 33,
            config: { align: 'center', width: 3 },
            content: '后五天',
            type: 'button',
          },
          { config: { width: 7 }, content: '', type: 'text' },
          { accelerator: 99, content: '就这样！', type: 'button' },
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
            set_height(height);
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

      if (era.get('cflag:0:性别') - 1) {
        era.printMultiColumns([
          { type: 'divider' },
          {
            content: '您希望您的女性象征有何种规模？\nPS：不是越大越好！',
            type: 'text',
          },
          { accelerator: 1, content: '……我是砧板', type: 'button' },
          { accelerator: 2, content: '当然是稀有价值啦', type: 'button' },
          { accelerator: 3, content: '普通的就好', type: 'button' },
          { accelerator: 4, content: '希望能大一点！', type: 'button' },
          {
            accelerator: 5,
            content: '我要傲视一切（不是）',
            type: 'button',
          },
        ]);
        set_bust_size(await era.input());
      }

      if (era.get('cflag:0:性别')) {
        era.printMultiColumns([
          { type: 'divider' },
          {
            content: '您希望您的「作案工具」有何种规模？\nPS：不是越大越好！',
            type: 'text',
          },
          { accelerator: 1, content: '所有人都能容纳的那种！', type: 'button' },
          { accelerator: 2, content: '比上面那个偏大一点就好', type: 'button' },
          { accelerator: 3, content: '普通的就好', type: 'button' },
          { accelerator: 4, content: '当然要雄伟的！', type: 'button' },
          {
            accelerator: 5,
            content: '我要让所有人都痛并快乐着！',
            type: 'button',
          },
        ]);
        temp = await era.input();
        era.set('cflag:0:阴茎尺寸', temp);
      }

      buffer = [
        { type: 'divider' },
        {
          content: '现在是幻想时间！如果您变成了马娘，您认为您是什么气性？',
          type: 'text',
        },
      ];
      chara_desc.forEach((e, i) =>
        buffer.push(
          {
            accelerator: i + 1,
            config: { width: 2 },
            content: e,
            type: 'button',
          },
          {
            config: { width: 22 },
            content: chara_full_desc[i],
            type: 'text',
          },
        ),
      );
      era.printMultiColumns(buffer);
      temp = await era.input();
      era.set('cflag:0:气性', temp - 4);

      buffer = [
        { type: 'divider' },
        {
          content: `嗯嗯，您认为您将会是 ${
            chara_desc[era.get('cflag:0:气性') + 3]
          } 气性啊……那么您会是什么毛色的马娘呢？`,
          type: 'text',
        },
      ];
      uma_hairs.forEach((e, i) => {
        buffer.push(
          {
            accelerator: i + 1,
            config: { width: 1 },
            content: '',
            type: 'button',
          },
          {
            config: { width: 23 },
            content: [
              {
                color: get_hair_color(e),
                content: `${e}毛`,
              },
            ],
            type: 'text',
          },
        );
      });
      era.printMultiColumns(buffer);
      temp = await era.input();
      era.set('cstr:0:毛色', uma_hairs[temp - 1]);

      era.drawLine();
      era.print('那么就到称呼环节啦！');
      switch (era.get('flag:彩蛋机制')) {
        case 3:
          era.drawLine();
          await era.printAndWait('哦哦，您取了一个很喜欢马蹄的名字呢！');
          era.set('callname:0:-2', '天马');
          break;
        case 179:
          era.drawLine();
          await era.printAndWait('哦哦，您取了一个很萝莉控的名字呢！');
          era.set('callname:0:-2', '豚鼠子');
          break;
        case 621:
          era.drawLine();
          await era.printAndWait('哦哦，您取了一个很想被欺负的名字呢！');
          era.set('callname:0:-2', '渡鸦');
          break;
        default:
          era.printInColRows([
            { content: '希望旁白君如何称呼您呢？', type: 'text' },
            { accelerator: 1, content: i18n().name.you, type: 'button' },
            { accelerator: 2, content: '主人公', type: 'button' },
            { accelerator: 3, content: '自己决定！', type: 'button' },
          ]);
          temp = await era.input();
          switch (temp) {
            case 1:
              era.set('callname:0:-2', i18n().name.you);
              break;
            case 2:
              era.set('callname:0:-2', '主人公');
              break;
            case 3:
              era.print('希望旁白君如何称呼您呢？（6个字符以内）');
              temp = '';
              do {
                if (temp) {
                  await era.printAndWait('太长了，请重新输入！');
                }
                temp = era.set('callname:0:-2', await era.input());
              } while (temp.length > 6);
          }
      }
      await era.printAndWait([
        CharaTalk.me.get_colored_actual_name(),
        ' 训练员，旁白君从此就称您为 ',
        CharaTalk.me.get_colored_name(),
        ' 了！',
      ]);

      buffer = [
        { type: 'divider' },
        {
          content: '最后是来自开发者的馈赠！',
          type: 'text',
        },
      ];
      taiwu_talents.forEach((e, i) => {
        buffer.push(
          {
            accelerator: i + 1,
            config: { width: 3 },
            content: e,
            type: 'button',
          },
          {
            config: { width: 21 },
            content: taiwu_talent_desc[i],
            type: 'text',
          },
        );
      });

      era.printMultiColumns(buffer);
      temp = await era.input();
      era.add(`base:0:${temp + 4}`, 100);

      random_talent();
    }

    let flag_check = true;
    while (flag_check) {
      const hair_color = era.get('cstr:0:发色'),
        uma_hair_color = era.get('cstr:0:毛色');
      sys_change_hair(0);
      era.printMultiColumns([
        { type: 'divider' },
        { content: '再来检查一下吧！', type: 'text' },
        {
          content: [CharaTalk.me.get_colored_actual_name(), ' 训练员'],
          type: 'text',
        },
        {
          content: [
            '旁白君称为：',
            CharaTalk.me.get_colored_name(),
            ' | 性别：',
            human_sex_title[era.get('cflag:0:性别')],
            ` | 身高：${era.get('cflag:0:身高')}cm`,
            era.get('cflag:0:性别') - 1
              ? ` | 三围：B${get_bust_size(0, true)} (${get_breast_cup(
                  0,
                )} Cup) · W${get_waist_size(0)} · H${get_hip_size(0)}`
              : '',
            { isBr: true },
            '发型：',
            join_to_string(
              [
                era.get('cstr:0:呆毛') ? `${era.get('cstr:0:呆毛')}呆毛` : '',
                era.get('cstr:0:前发'),
                era.get('cstr:0:中发'),
                era.get('cstr:0:后发'),
              ],
              '+',
            ),
            ' | 发色：',
            {
              color: get_hair_color(hair_color),
              content: hair_color,
            },
            { isBr: true },
            '肤色：',
            {
              // CFLAGNAME:10 = 肤色深度
              color: skin_colors[era.get('cflag:0:10') + 1],
              content: i18n().n_skin[era.get('cflag:0:10') + 1],
            },
            ` | 腋毛：${body_hair_type[era.get('talent:0:腋毛成长')]} | 阴毛：${
              body_hair_type[era.get('talent:0:阴毛成长')]
            } | 性器颜色：`,
            {
              // TALENTNAME:34 = 茎核类型
              color: sex_colors[era.get('talent:0:34')],
              content: i18n().n_c_penis[era.get('talent:0:34')],
            },
            era.get('cflag:0:性别')
              ? ` | 阴茎长度：${i18n().n_penis[era.get('cflag:0:阴茎尺寸')]}`
              : '',
            { isBr: true },
            '如果马娘化，认为自己将是 ',
            {
              color: get_hair_color(uma_hair_color),
              content: `${uma_hair_color}毛 `,
            },
            {
              content: chara_desc[era.get('cflag:0:气性') + 3],
              title: `${chara_desc[era.get('cflag:0:气性') + 3]}：${
                chara_full_desc[era.get('cflag:0:气性') + 3]
              }`,
            },
            ' 马娘',
            { isBr: true },
            '性格特征：',
            ...get_talent(0),
            { isBr: true },
            '其他特征：',
            ...get_xp(0),
            { isBr: true },
            '开发者的馈赠：',
            i18n().n_attr[
              new Array(5)
                .fill(0)
                .findIndex((_, i) => era.get(`base:0:${5 + i}`) >= 100)
            ] || '默认',
          ],
          type: 'text',
        },
        {
          accelerator: 1,
          config: { width: 4 },
          content: '就这样！',
          type: 'button',
        },
        {
          accelerator: 2,
          config: { width: 4 },
          content: '随机一下特征',
          type: 'button',
        },
        {
          accelerator: 3,
          config: { width: 4 },
          content: '全部随机！',
          type: 'button',
        },
        {
          accelerator: 4,
          config: { width: 4 },
          content: '我要重选！',
          type: 'button',
        },
        {
          accelerator: 99,
          config: { width: 4 },
          content: '我不玩了……',
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
          random_talent();
          await era.clear();
          break;
        case 3:
          random_chara();
          random_talent();
          await era.clear();
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
