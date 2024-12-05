const era = require('#/era-electron');

const sys_add_titles = require('#/system/chara/sys-add-titles');
const {
  sys_like_chara,
  sys_punish_unfaithful,
} = require('#/system/sys-calc-chara-others');
const { init_chara } = require('#/system/sys-init-chara');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { get_custom_check } = require('#/event/check/check-factory');
const { get_custom_ero } = require('#/event/ero/ero-factory');
const { get_custom_mec } = require('#/event/mec/mec-factory');
const add_juel_out_of_train = require('#/event/snippets/add-juel-out-of-train');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');
const get_random_name = require('#/utils/naming');
const { get_random_value } = require('#/utils/value-utils');

const { buff_colors } = require('#/data/color-const');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const { get_filtered_talents } = require('#/data/info-generator');
const { gene_juel_names } = require('#/data/other-const');
const { gene_type_colors } = require('#/data/race/model/uma-gene');
const { adaptability_names } = require('#/data/train-const');

async function name_baby(child_id, father_id, mother_id) {
  let ret, random_param;
  // chara_id一定是母亲
  // 虽然不是很情愿，但是还是留一下吧，只有玩家是孩子父亲或者母亲的情况下才拥有命名决定权
  if (mother_id && father_id) {
    // 如果和玩家没关系，直接用母亲来命名
    random_param = mother_id;
  } else if (era.get('flag:惩戒力度') >= 2) {
    // 性奴和孕袋没有命名权
    random_param = mother_id || father_id;
  } else {
    if (
      await select_yes_or_no(
        '',
        `让${mother_id ? '母亲' : '父亲'}起名`,
        '亲自起名',
      )
    ) {
      random_param = mother_id || father_id;
    } else {
      era.print('想给孩子起什么名字呢？');
      ret = await era.input();
    }
  }
  if (random_param) {
    ret = get_random_name(random_param);
  }
  era.set(`callname:${child_id}:-2`, era.set(`callname:${child_id}:-1`, ret));
  if (
    (!mother_id || !father_id) &&
    random_param &&
    ret.replace(/\d+$/, '').length !== ret.length &&
    (await select_yes_or_no([
      get_chara_talk(mother_id).get_colored_name(),
      ' 的孩子起名为 ',
      get_chara_talk(child_id).get_colored_name(),
      '……',
      { isBr: true },
      '要重新取名吗？',
    ]))
  ) {
    era.set(
      `callname:${child_id}:-2`,
      era.set(`callname:${child_id}:-1`, await era.input()),
    );
  }
  await era.printAndWait([
    get_chara_talk(mother_id).get_colored_name(),
    ' 的孩子最终起名为 ',
    get_chara_talk(child_id).get_colored_name(),
    '！',
  ]);
}

/** @param {number} mother_id */
async function sys_have_baby(mother_id) {
  const mother_life_marks = new LifeEventMarks(mother_id),
    father_id = mother_life_marks.sperm,
    child_id = era.add('flag:新生儿ID', 1) - 1;
  let src_chara_id = era.get(`cflag:${mother_id}:模版角色`);
  if (src_chara_id === -1) {
    if (mother_id > 0) {
      src_chara_id = mother_id;
    } else {
      src_chara_id = era.get(`cflag:${father_id}:模版角色`);
      src_chara_id = src_chara_id !== -1 ? src_chara_id : father_id;
    }
  }

  init_chara(child_id, src_chara_id);
  /**
   * 随机赋予3项性格特质
   * @type {number[]}
   */
  const chara_talents = [...new Array(18).fill(0).map((_, i) => i), 20];
  chara_talents.forEach((talent_id) =>
    era.set(`talent:${child_id}:${talent_id}`, 0),
  );
  let mother_counts = get_random_value(0, 1),
    father_counts = get_random_value(0, 1),
    tmp_list = [];
  mother_counts &&
    (tmp_list = gacha(
      chara_talents
        .map((talent_id) => {
          return {
            id: talent_id,
            val: era.get(`talent:${mother_id}:${talent_id}`),
          };
        })
        .filter((talent) => talent.val),
      mother_counts,
    ));
  (mother_counts = tmp_list.length) &&
    tmp_list.forEach((talent) =>
      era.set(`talent:${child_id}:${talent.id}`, talent.val),
    );
  father_counts &&
    (tmp_list = gacha(
      chara_talents
        .map((talent_id) => {
          return {
            id: talent_id,
            val: era.get(`talent:${father_id}:${talent_id}`),
          };
        })
        .filter((talent) => talent.val),
      father_counts,
    ));
  (father_counts = tmp_list.length) &&
    tmp_list.forEach((talent) =>
      era.set(`talent:${child_id}:${talent.id}`, talent.val),
    );
  gacha(
    chara_talents.filter(
      (talent_id) => !era.get(`talent:${child_id}:${talent_id}`),
    ),
    3 - father_counts - mother_counts,
  ).forEach((talent_id) =>
    era.set(`talent:${child_id}:${talent_id}`, 2 * get_random_value(0, 1) - 1),
  );
  era.set(
    `talent:${child_id}:捉摸不透`,
    Number(era.get(`talent:${child_id}:捉摸不透`) > 0),
  );
  const child_sex = era.get(`cflag:${child_id}:性别`);

  // 随机赋予1项名器特质
  const part_talent_count = get_random_value(0, 1);
  const part_talents = get_filtered_talents(child_sex, 50);
  part_talents.forEach((talent_id) =>
    era.set(`talent:${child_id}:${talent_id}`, 0),
  );
  part_talent_count &&
    gacha(part_talents, part_talent_count).forEach((talent_id) =>
      era.set(`talent:${child_id}:${talent_id}`, 1),
    );

  const xp_talent_count = get_random_value(0, 1),
    xp_extended_count = get_random_value(0, 1);
  const talent_arr = [
    // 淫乱系
    ...get_filtered_talents(child_sex, 60),
    // xp系
    ...new Array(8).fill(0).map((_, i) => i + 40),
  ];
  talent_arr.forEach((talent_id) =>
    era.set(`talent:${child_id}:${talent_id}`, 0),
  );
  // 随机继承一项xp特质
  xp_extended_count &&
    gacha(
      talent_arr.filter(
        (talent_id) =>
          era.get(`talent:${mother_id}:${talent_id}`) ||
          era.get(`talent:${father_id}:${talent_id}`),
      ),
      xp_extended_count,
    ).forEach((talent_id) =>
      era.set(
        `talent:${child_id}:${talent_id}`,
        Math.min(
          1,
          era.get(`talent:${mother_id}:${talent_id}`) ||
            era.get(`talent:${father_id}:${talent_id}`),
        ),
      ),
    );
  // 随机赋予一项xp特质
  xp_talent_count &&
    gacha(
      talent_arr.filter(
        (talent_id) => !era.get(`talent:${child_id}:${talent_id}`),
      ),
      xp_talent_count,
    ).forEach((talent_id) =>
      era.set(
        `talent:${child_id}:${talent_id}`,
        talent_id >= 60 ? (Math.random() > 0.5) * 5 - 4 : 1,
      ),
    );

  const semen_talent_count = get_random_value(0, 1);
  /**
   * 随机获得一项中毒特质
   * @type {number[]}
   */
  const semen_talents = new Array(8)
    .fill(0)
    .map((_, i) => i + 70)
    .filter(
      (talent_id) => talent_id !== 71 || talent_id !== 75 || child_sex !== 1,
    );
  semen_talents.forEach((talent_id) =>
    era.set(`talent:${child_id}:${talent_id}`, 0),
  );
  semen_talent_count &&
    gacha(semen_talents, semen_talent_count).forEach((talent_id) =>
      era.set(`talent:${child_id}:${talent_id}`, 1),
    );

  if (child_sex - 1) {
    if (era.get(`talent:${mother_id}:泌乳`) > 1) {
      era.set(
        `talent:${child_id}:泌乳`,
        Math.random() < 0.25 * (era.get(`talent:${mother_id}:泌乳`) - 1)
          ? 3
          : 0,
      );
    }
    era.set(
      `talent:${child_id}:乳头类型`,
      get_random_value(0, era.get(`talent:${mother_id}:乳头类型`)),
    );
  }

  let random_val;
  adaptability_names.forEach((e) => {
    let val = era.get(`cflag:${child_id}:${e}适性`);
    random_val = Math.random();
    if (random_val < 0.1) {
      val += random_val < 0.05 ? 1 : -1;
      if (val > 7) {
        val = 7;
      } else if (val < 0) {
        val = 0;
      }
      era.set(`cflag:${child_id}:${e}适性`, val);
    }
  });

  // 身高三围的突变
  Math.random() < 0.1 &&
    era.add(
      `cflag:${child_id}:身高`,
      2 *
        (era.get(`cflag:${father_id}:身高`) >
          era.get(`cflag:${child_id}:身高`)) -
        1,
    );
  child_sex - 1 &&
    (random_val = Math.random()) < 0.1 &&
    era.add(`cflag:${child_id}:胸围`, random_val < 0.5 ? 1 : -1);
  (random_val = Math.random()) < 0.1 &&
    era.add(`cflag:${child_id}:腰围`, random_val < 0.5 ? 1 : -1);
  (random_val = Math.random()) < 0.1 &&
    era.add(`cflag:${child_id}:臀围`, random_val < 0.5 ? 1 : -1);

  era.set(`cflag:${child_id}:气性`, get_random_value(-3, 3));
  era.set(`cflag:${child_id}:成长阶段`, 0);

  const cur_month = era.get('flag:当前月'),
    cur_week = era.get('flag:当前周'),
    birth_day = 7 * cur_week + Math.floor(7 * Math.random()) - 6,
    date = `${era.get('flag:当前年')} 年 ${cur_month} 月 ${birth_day} 日`;

  era
    .getAddedCharacters()
    .filter(
      (id) =>
        id !== child_id &&
        (era.get(`cflag:${id}:母方角色`) || era.get(`cflag:${id}:父方角色`)) ===
          (mother_id || father_id),
    )
    .forEach((id) => {
      era.set(`relation:${child_id}:${id}`, 300);
      era.set(`relation:${id}:${child_id}`, 300);
      era.set(
        `callname:${child_id}:${id}`,
        era.get(`cflag:${id}:性别`) === 1 ? '哥哥' : '姐姐',
      );
      era.set(`callname:${id}:${child_id}`, child_sex === 1 ? '弟弟' : '妹妹');
    });
  era.set(`cflag:${child_id}:父方角色`, father_id);
  era.set(`cflag:${child_id}:母方角色`, mother_id);
  era.set(`cflag:${child_id}:出生月份`, cur_month);
  era.set(`cflag:${child_id}:出生日期`, birth_day);
  era.set(`cflag:${child_id}:育成回合计时`, 'x');
  // 和玩家相关的新生儿自动进队
  era.set(`cflag:${child_id}:招募状态`, Number(!(father_id && mother_id)));
  // 无关的会在招募池子里
  era.set(`cflag:${child_id}:随机招募`, Number(father_id && mother_id));

  era.set(
    `relation:${child_id}:${mother_id}`,
    era.set(`relation:${child_id}:${father_id}`, 400),
  );
  era.set(
    `relation:${mother_id}:${child_id}`,
    era.set(`relation:${father_id}:${child_id}`, 400),
  );
  era.set(`callname:${child_id}:${father_id}`, '爸爸');
  era.set(`callname:${child_id}:${mother_id}`, '妈妈');
  era.set(
    `callname:${father_id}:${child_id}`,
    era.set(
      `callname:${mother_id}:${child_id}`,
      child_sex === 1 ? '儿子' : '女儿',
    ),
  );
  era.set(
    `love:${child_id}`,
    era.get('flag:后代爱慕限制') ? era.get('flag:初始爱慕') : 0,
  );
  era.set(`cstr:${child_id}:出生经历`, `出生于 ${date}`);
  const father_check = era.add(`exp:${father_id}:孩子数量`, 1),
    mother_check = era.add(`exp:${mother_id}:生产次数`, 1);
  mother_life_marks.sperm = 0;
  if (father_check >= 8) {
    sys_add_titles(father_id, { c: buff_colors[2], n: '大种马' }) &&
      (await era.waitAnyKey());
  }
  if (mother_check >= 8) {
    sys_add_titles(mother_id, { c: buff_colors[2], n: '英雄母亲' }) &&
      (await era.waitAnyKey());
  }

  const father = get_chara_talk(father_id),
    mother = get_chara_talk(mother_id);
  get_custom_check(child_id).check_birth();
  era.print([
    mother.get_colored_name(),
    ' 生下了一个依稀有着 ',
    father.get_colored_name(),
    ' 外貌的健康的孩子！',
  ]);
  era.set(
    `maxbase:${mother_id}:体力`,
    Math.max(era.get(`maxbase:${mother_id}:体力`) - 400, 200),
  );
  era.add(`base:${mother_id}:体力`, 0);
  era.set(
    `maxbase:${mother_id}:精力`,
    Math.max(era.get(`maxbase:${mother_id}:精力`) - 400, 200),
  );
  era.add(`base:${mother_id}:精力`, 0);
  await get_custom_ero(mother_id || father_id).have_baby(
    father,
    mother,
    child_id,
  );
  await name_baby(child_id, father_id, mother_id);

  get_custom_mec(child_id).set_callname();
  const child = get_chara_talk(child_id),
    child_callname = child.sex_code === 1 ? '长子' : '长女';
  if (!era.get(`cstr:${father_id}:长子女经历`)) {
    era.set(`cstr:${father_id}:长子女经历`, [
      `${child_callname} `,
      child.get_colored_name(),
      ` 出生于 ${date}`,
    ]);
  }
  if (!era.get(`cstr:${mother_id}:长子女经历`)) {
    era.set(`cstr:${mother_id}:长子女经历`, [
      `在 ${date} 生下了 ${child_callname} `,
      child.get_colored_name(),
    ]);
  }
  if (!era.get(`cstr:${child_id}:毛色`)) {
    era.set(
      `cstr:${child_id}:毛色`,
      era.get(`cstr:${mother_id}:毛色`) || era.get(`cstr:${father_id}:毛色`),
    );
  }
  const child_life_marks = new LifeEventMarks(child_id);
  child_life_marks.unexpected_child = mother_life_marks.unexpected_pregnant;
  mother_life_marks.unexpected_pregnant = 0;

  if (
    !father_id &&
    era.get(`love:${mother_id}`) < 90 &&
    (mother_id < 340 || mother_id > 342)
  ) {
    if (era.get(`mark:${mother_id}:同心`) >= 2) {
      sys_like_chara(mother_id, 0, 50);
      await add_juel_out_of_train(mother_id, '顺从', 200);
    } else {
      await add_juel_out_of_train(mother_id, '顺从', 50);
    }
  } else if (!father_id || !mother_id) {
    sys_like_chara(mother_id || father_id, 0, 100);
    await add_juel_out_of_train(mother_id || father_id, '顺从', 300);
  }
  const juel_index = get_random_value(0, 2);
  let juel_num = 0;
  if (!father_id) {
    juel_num = get_random_value(25, 75);
  } else if (!mother_id) {
    juel_num = get_random_value(75, 125);
  }
  if (juel_num > 0) {
    era.add(`juel:0:${gene_juel_names[juel_index]}`, juel_num);
    era.print([
      get_chara_talk(0).get_colored_name(),
      ' 获得了 ',
      {
        content: `${gene_juel_names[juel_index]}因子 × ${juel_num}`,
        color: gene_type_colors[juel_index],
      },
    ]);
  }
  new Array(3)
    .fill(0)
    .map((_, i) => 340 + i)
    .filter((e) => e !== father_id && e !== mother_id)
    .reduce(
      (p, c) => sys_like_chara(c, 0, 50 * (1 + !mother_id)) || p,
      false,
    ) && (await era.waitAnyKey());
  await sys_punish_unfaithful(
    mother_id || father_id,
    era.get(`love:${mother_id || father_id}`),
  );
}

module.exports = sys_have_baby;
